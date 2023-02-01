import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor() { 
  }

  enviarAlerta(tipo: SweetAlertIcon, titulo: string, mensaje: string) {
    Swal.fire({
      icon: tipo,
      title: titulo,
      text: mensaje
    })
  }
}
