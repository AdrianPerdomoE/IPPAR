import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public carrito = new Cart('', [], '', 0)
  constructor(private cartService: CartService, private sesionService: SesionServiceService) { }

  ngOnInit(): void {
    let id = this.sesionService.getCurrentUser()?._id
    if (!id) return
    this.cartService.getCart(id).subscribe(response => {
      if (response.cart) {
        this.carrito = response.cart
      }
    })
  }

  calcularNumeroItems() {
    let cantidad: number = 0
    this.carrito.cartItems.map(item => cantidad += item.amount)
    return cantidad
  }

  cambiarCantidad(index: number, amount: string) {
    let value = Number(amount)
    let newCart = this.cartService.changeAmount(index, value, this.carrito)
    this.cartService.updateCar(newCart).subscribe(resp => {
      console.log('Item sacado del carrito')
    })
  }

  eliminar(index: number) {
    this.cartService.removeCartItem(index, this.carrito);
    this.cartService.updateCar(this.carrito).subscribe(resp => {
      console.log('Item eliminado del carrito')
    })
  }


}
