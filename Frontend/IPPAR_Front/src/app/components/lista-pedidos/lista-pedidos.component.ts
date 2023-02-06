import { Component } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent {
  public pedidos: Order[] = []
  ngOnInit(): void {
    this.orderService.getOrders().subscribe(resp => {
      if (resp.orders) {
        this.pedidos = resp.orders
        let userId = this.sesionService.getCurrentUser()?._id
        if (this.pedidos.length > 0) {
          this.pedidos.filter(order => { return order._id == userId })
        }

      }

    })
  }

  String(value: number) {
    return `${value}`
  }
  constructor(private orderService: OrderServiceService, private sesionService: SesionServiceService) { }
}
