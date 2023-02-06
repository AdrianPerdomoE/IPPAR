import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { StoreServiceService } from 'src/app/services/store-service.service';
import { Store } from 'src/app/models/Store';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { Order } from 'src/app/models/Order';

export var DEFAULT_LAT = 6.2357504;
export var DEFAULT_LON = -75.61216;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'https://i.imgur.com/KnOzjpz.png';
const iconUrl = 'https://i.imgur.com/KnOzjpz.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  private map: any;
  public camino: any[] = []
  lat = 0
  lon = 0
  pedido = new Order('', '', new Date, new Date, [], 0)
  constructor(private storeService: StoreServiceService, private actRoute: ActivatedRoute, private OrderService: OrderServiceService) {
    this.getPosition().then(pos => {
      this.lat = pos.lat
      this.lon = pos.lng
      this.camino.push(L.latLng(this.lat, this.lon))
      this.initMap();
    });
  }

  cantidadItems() {
    if (this.pedido.orderGroups.length == 0) return 0
    return this.pedido.orderGroups.map(OG => { return OG.amounts.reduce((pr, cr) => { return pr + cr }) }).reduce((prev, curr) => { return prev + curr })
  }
  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.OrderService.getOrder(id).subscribe(resp => {
      if (resp.order) {
        this.pedido = resp.order
      }

    })
    this.pedido.orderGroups.forEach(val => {
      this.storeService.getStore(val.storeId).subscribe(response => {
        if (response.stores) {
          this.camino.push(L.latLng(this.lat, this.lon))

        }
      })
    })

  }
  private getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }

  private initMap(): void {
    //configuración del mapa
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      attributionControl: true,
      zoom: 14
    });

    //iconos personalizados
    var iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [40, 40],
      iconAnchor: [19, 35],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;

    //titulo
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
    });

    var iconStore = L.icon({
      iconRetinaUrl: 'https://i.imgur.com/dgiLnKP.png',
      iconUrl: 'https://i.imgur.com/dgiLnKP.png',
      shadowUrl,
      iconSize: [35, 35],
      iconAnchor: [19, 35],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconStore;

    //ruta


    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: false,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: false,
      waypoints: this.camino
    }).addTo(this.map);
    tiles.addTo(this.map);
  }
}
