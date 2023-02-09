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
          this.pedidos = this.pedidos.filter(order => { return order.userId == userId })
        }

      }

    })
  }

  String(value: number) {
    return `${value}`
  }

  toDateString(string: string) {
    let date = new Date(string)
    let dateString = date.toLocaleDateString("es-CO", { day: '2-digit', month: '2-digit', year: 'numeric' })
    let timeString = date.toLocaleTimeString("es-CO", { hour: '2-digit', minute: '2-digit', })
    return dateString + " " + timeString
  }

  constructor(private orderService: OrderServiceService, private sesionService: SesionServiceService) { }
}
