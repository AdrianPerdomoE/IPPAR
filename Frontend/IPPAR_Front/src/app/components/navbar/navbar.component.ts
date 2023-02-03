import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public query: string = ''
  public type: string = 'tiendas'

  public carrito = new Cart('', [], '', 0)

  constructor(
    private _router: Router,
    private sesionService: SesionServiceService,
    private cartService: CartService
  ) { }

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

  logOut() {
    this.sesionService.logOut()
  }

  search() {
    if (this.type === 'productos') {
      this._router.navigate(['/product'], { queryParams: { query: this.query } })
    }
    else {
      this._router.navigate(['/home'], { queryParams: { query: this.query } })
    }
  }
}
