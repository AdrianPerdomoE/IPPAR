import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/models/Store';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css']
})
export class ListaTiendasComponent implements OnInit {

  constructor(
    private storeService: StoreServiceService,
    private actRoute: ActivatedRoute
  ) {

  }

  tiendas: Array<Store> = []
  query: string = ''

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      this.query = params['query']
    })

    this.storeService.getStores().subscribe(response => {
      if (response.stores) {
        this.tiendas = response.stores;
      }
    })

  }

  filtrarTiendas() {
    if (!this.query) {
      return this.tiendas
    }
    else {
      return this.tiendas.filter(tienda => this.limpiarString(tienda.name).includes(this.limpiarString(this.query)))
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
