import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/Store';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css']
})
export class ListaTiendasComponent implements OnInit {

  constructor(private storeService: StoreServiceService) { }

  ngOnInit(): void {
    this.storeService.getStores().subscribe(response => {
      if (response.stores) {
        this.tiendas = response.stores;
      }
    })
  }
  guardar() {
    this.tiendas.forEach(tienda => {
      this.storeService.registerStore(tienda).subscribe(response => { })
    })
  }

  tiendas = []
}
