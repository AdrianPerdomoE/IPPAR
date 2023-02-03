import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product'
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(
    private _router: Router,
    private actRoute: ActivatedRoute,
    private productService: ProductServiceService
  ) {
    this.indice = this.actRoute.snapshot.params['name'];
    this.id = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProductsOwner(this.id).subscribe(response => {
      if (response.products) {
        this.productos = response.products
      }
    })
  }
  guardar() {
    this.productos.forEach(producto => {
      this.productService.registerProduct(producto).subscribe(resp => { })
    })
  }
  indice: string;
  id: string;
  productos = [];

  goHome() {
    this._router.navigate(['/home'])
  }

}
