import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { StoreServiceService } from 'src/app/services/store-service.service';
import { Store } from 'src/app/models/Store';
import { Router } from '@angular/router';

export var DEFAULT_LAT = 6.2357504;
export var DEFAULT_LON = -75.61216;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'https://i.imgur.com/KnOzjpz.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  private map: any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO;
  tiendas: Store[] = []

  constructor(private storeService: StoreServiceService, private _router: Router) { }

  ngOnInit(): void {
    this.getPosition().then(pos => {
      this.lat = pos.lat
      this.lon = pos.lng
    });

    this.storeService.getStores().subscribe(response => {
      if (response.stores) {
        this.tiendas = response.stores
        this.initMap();
      }
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

    //marca con pop up
    const lon = this.lon + 0.009;
    const lat = this.lat + 0.009;
    /*const marker = L.marker([lat + 0.005, lon + 0.005]).bindPopup(this.titulo);
    marker.addTo(this.map);*/

    this.tiendas.forEach(tienda => {
      let marker = L.marker([tienda.latitud, tienda.longitud]).bindPopup(`<b> ${tienda.name}</b>`).openPopup();
      marker.addEventListener('dblclick', () => {
        let texto = '/tienda/' + tienda.name + "/" + tienda._id
        this._router.navigate([texto])
      })
      marker.addTo(this.map);
    })




    //marca forma de circulo
    /*const mark = L.circleMarker([this.lat, this.lon]).addTo(this.map);
    mark.addTo(this.map);*/

    var iconStore = L.icon({
      iconRetinaUrl,
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
    var popup = L.popup()
      .setLatLng([this.lat + 0.004, this.lon])
      .setContent("Posicion actual")
      .openOn(this.map);
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: false,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: false,
      waypoints: [
        L.latLng(this.lat, this.lon),
        L.latLng(lat, lon)
      ]
    }).addTo(this.map);
    tiles.addTo(this.map);
  }
}
