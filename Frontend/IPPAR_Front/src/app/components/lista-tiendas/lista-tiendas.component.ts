import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css']
})
export class ListaTiendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiendas = [
    new Store(
      '1',
      'KFC',
      'https://images.rappi.com/restaurants_background/kfc1-1657753564446.jpg?e=webp&q=40&d=300x300',
      'Restaurantes',
      '4.3',
      '35 - 45 min',
      6.2046701,
      -75.5723563
    ),
    new Store(
      '2',
      'Frisby',
      'https://images.rappi.com/restaurants_background/frisby-1660333191115.jpg?e=webp&q=40&d=300x300',
      'Restaurantes',
      '4.6',
      '30 - 40 min',
      6.25184,
      -75.56359
    ),
    new Store(
      '3',
      'Burger King',
      'https://images.rappi.com/restaurants_background/burger_king-1659039026876-1659041252983.jpg?e=webp&q=40&d=300x300',
      'Restaurantes',
      '4.2',
      '20 - 35 min',
      6.2378488,
      -75.569376
    ),
    new Store(
      '4',
      "McDonald's",
      'https://images.rappi.com/restaurants_background/mcdonaldscol-1659733638484.jpg?e=webp&q=40&d=300x300',
      'Restaurantes',
      '4.1',
      '26 - 41 min',
      6.17591,
      -75.59174
    ),
    new Store(
      '5',
      "Pasteur",
      'https://images.rappi.com/marketplace/pasteur-1611259579450.jpg?d=300x300&e=webp',
      'Farmacias',
      '4.4',
      '23 - 27 min',
      6.2382606,
      -75.5838982
    ),
    new Store(
      '6',
      "La Rebaja",
      'https://images.rappi.com/marketplace/larebaja_farma_1613629704060.jpg?d=300x300&e=webp',
      'Farmacias',
      '3.9',
      '25 - 32 min',
      6.2480296,
      -75.588946
    ),
    new Store(
      '7',
      "Éxito",
      'https://images.rappi.com/marketplace/store_type_1672434757062.png?d=300x300&e=webp',
      'Supermercados',
      '4.8',
      '20 - 25 min',
      6.232100142667974,
      -75.60393536884685
    ),
    new Store(
      '8',
      "Ésika",
      'https://images.rappi.com/marketplace/esika_enc-1646429315004.png?d=300x300&e=webp',
      'Tiendas',
      '4.0',
      '40 - 45 min',
      6.2772647,
      -75.5766615
    )
  ]
}
