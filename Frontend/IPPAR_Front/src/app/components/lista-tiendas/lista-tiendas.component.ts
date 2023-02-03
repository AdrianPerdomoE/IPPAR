import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Store } from 'src/app/models/Store';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css']
})
export class ListaTiendasComponent implements OnInit {

  constructor(
    private storeService: StoreServiceService,
    private productService: ProductServiceService,
    private actRoute: ActivatedRoute
  ) {

  }

  tiendas: Array<Store> = []
  productos: Array<Product> = []

  query: string = ''
  type: string = ''

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      this.query = params['query']
      this.type = params['type']
    })

    this.storeService.getStores().subscribe(response => {
      if (response.stores) {
        this.tiendas = response.stores;
      }
    })

    this.productService.getProducts().subscribe(response => {
      if (response.products) {
        this.productos = response.products
      }
    })
  }

  verificarMostrarTiendas() {
    return !this.type || this.type === 'stores'
  }

  verificarMostrarProductos() {
    return this.type === 'products'
  }

  filtrarTiendas() {
    if (!this.query) {
      return this.tiendas
    }
    else {
      return this.tiendas.filter(tienda => this.limpiarString(tienda.name).includes(this.limpiarString(this.query)))
    }
  }

  filtrarProductos() {
    if (!this.query) {
      return this.productos
    }
    else {
      return this.productos.filter(producto => this.limpiarString(producto.name).includes(this.limpiarString(this.query)))
    }
  }

  limpiarString(texto: string) {
    texto = texto.toLowerCase()
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    texto = texto.replace(" ", "")
    texto = texto.replace("'", "")

    return texto
  }

  guardar() {
    this.tiendas.forEach(tienda => {
      this.storeService.registerStore(tienda).subscribe(response => { })
    })
  }

}
