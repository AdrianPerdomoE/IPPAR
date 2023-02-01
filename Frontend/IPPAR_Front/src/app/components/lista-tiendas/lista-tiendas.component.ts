import { Component, OnInit } from '@angular/core';

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
    {
      id: 1,
      name: 'KFC',
      image: 'https://images.rappi.com/restaurants_background/kfc1-1657753564446.jpg?e=webp&q=40&d=300x300',
      tag: 'Restaurantes',
      points: '4.3',
      waitTime: '35 - 45 min'
    },
    {
      id: 2,
      name: 'Frisby',
      image: 'https://images.rappi.com/restaurants_background/frisby-1660333191115.jpg?e=webp&q=40&d=300x300',
      tag: 'Restaurantes',
      points: '4.6',
      waitTime: '30 - 40 min'
    },
    {
      id: 3,
      name: 'Burger King',
      image: 'https://images.rappi.com/restaurants_background/burger_king-1659039026876-1659041252983.jpg?e=webp&q=40&d=300x300',
      tag: 'Restaurantes',
      points: '4.2',
      waitTime: '20 - 35 min'
    },
    {
      id: 4,
      name: "McDonald's",
      image: 'https://images.rappi.com/restaurants_background/mcdonaldscol-1659733638484.jpg?e=webp&q=40&d=300x300',
      tag: 'Restaurantes',
      points: '4.1',
      waitTime: '26 - 41 min'
    }
  ]
}
