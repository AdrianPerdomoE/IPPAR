import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { Order } from 'src/app/models/Order';
import { OrderGroup } from 'src/app/models/OrderGroup';
import { CartService } from 'src/app/services/cart-service.service';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public carrito = new Cart('', [], '', 0, 0)
  private idUser = ''
  constructor(private _router: Router, private cartService: CartService, private sesionService: SesionServiceService, private orderService: OrderServiceService, private storeService: StoreServiceService) { }

  ngOnInit(): void {
    let id = this.sesionService.getCurrentUser()?._id
    if (!id) return
    this.idUser = id
    this.cartService.getCart(id).subscribe(response => {
      if (response.cart) {
        this.carrito = response.cart
      }
    })
  }
  agruparProductos() {
    let agrupaciones: OrderGroup[] = [];
    this.carrito.cartItems.forEach(item => {
      let existence = false
      for (let index = 0; index < agrupaciones.length; index++) {
        if (agrupaciones[index].storeId == item.storeId) {
          agrupaciones[index].items.push(item.item);
          agrupaciones[index].amounts.push(item.amount);
          existence = true
          break;
        }
      }
      if (!existence) {
        agrupaciones.push(new OrderGroup(item.storeId, item.storeName, [item.item], [item.amount]))
      }
    })
    console.log(agrupaciones)
    return agrupaciones
  }
  generarPedido() {
    let currentTime = new Date()
    let  agrupaciones = this.agruparProductos()
    let newOrder: Order = new Order('', this.idUser, currentTime, new Date((Date.now() + (Math.random() * 10 * 600) + 600)),agrupaciones, this.carrito.toPay)
    this.orderService.registerOrder(newOrder).subscribe(response => {
      if (response.order) {
        this.cartService.emptyCart(this.carrito).subscribe(resp => {
          this._router.navigate([`/pedido/${response.order._id}`])
        })
      }
    })
  }

  calcularNumeroItems(car: Cart) {
    let cantidad: number = 0
    car.cartItems.map(item => cantidad += item.amount)
    car.cantidadItems = cantidad
  }

  cambiarCantidad(index: number, amount: string) {
    let value = Number(amount)
    let newCart = this.cartService.changeAmount(index, value, this.carrito)
    this.calcularNumeroItems(newCart)
    this.cartService.updateCar(newCart).subscribe(resp => {
      console.log('Item sacado del carrito')
    })
  }

  eliminar(index: number) {
    this.cartService.removeCartItem(index, this.carrito);
    this.calcularNumeroItems(this.carrito)
    this.cartService.updateCar(this.carrito).subscribe(resp => {
      console.log('Item eliminado del carrito')
    })
  }


}
