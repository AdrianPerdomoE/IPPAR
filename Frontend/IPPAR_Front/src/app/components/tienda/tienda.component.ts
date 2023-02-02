import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute
  ) {
    this.indice = this.actRoute.snapshot.params['id']
  }

  ngOnInit(): void {
  }

  indice: number
}
