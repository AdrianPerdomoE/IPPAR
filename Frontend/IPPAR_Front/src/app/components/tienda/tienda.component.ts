import { Component, Input } from '@angular/core';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  @Input() tienda: Store
}
