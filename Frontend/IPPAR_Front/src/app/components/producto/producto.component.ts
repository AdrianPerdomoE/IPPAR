import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart-service.service';
import { NotificacionesService } from 'src/app/services/notificaciones-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto: Product

  constructor(
    private cartService: CartService, 
    private sesionService: SesionServiceService,
    private actRoute: ActivatedRoute,
    private notifService: NotificacionesService
  ) { }

  ngOnInit(): void {
  }

  addItem(amount: string) {
    let value = Number(amount)
    let user = this.sesionService.getCurrentUser()
    let name = this.actRoute.snapshot.params['name'];
    let id = this.actRoute.snapshot.params['id'];
    if (!user) return
    this.cartService.getCart(user._id).subscribe(response => {
      if (response.cart) {
        let newcart = this.cartService.addCarItem(this.producto, value, name, id, response.cart)
        this.cartService.updateCar(newcart).subscribe(resp => {
          if (resp) {
            this.notifService.enviarNotificacion(
              'success',
              'Mensaje',
              '¡Item añadido al carrito de compras!'
            );
          }
          else {
            this.notifService.enviarNotificacion(
              'error',
              'Mensaje',
              'Ha ocurrido un error inesperado.'
            );
          }
        })
      }
    })
  }

}
