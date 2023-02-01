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
    });
  }

  enviarAlertaConfirmacion(title: string, mensaje: string) {
    Swal.fire({
      title: title,
      text: mensaje,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      return result
    })
  }
}
