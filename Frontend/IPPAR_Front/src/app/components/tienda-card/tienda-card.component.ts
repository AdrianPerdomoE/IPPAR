import { Component, Input } from '@angular/core';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-tienda-card',
  templateUrl: './tienda-card.component.html',
  styleUrls: ['./tienda-card.component.css']
})
export class TiendaCardComponent {
  @Input() tienda: Store
}
