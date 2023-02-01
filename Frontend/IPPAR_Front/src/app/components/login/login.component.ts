import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { NotificacionesService } from 'src/app/services/notificaciones-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  user = new User('', '', '', '', '')
  constructor(
    private userService: UserService, 
    private sesionService: SesionServiceService, 
    private _router: Router,
    private notifService: NotificacionesService
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.userService.getUser(this.email).subscribe(
      response => {
        if (!response.user) {
          this.notifService.enviarAlerta(
            'error',
            'Mensaje',
            'El correo electrónico ingresado no existe.'
          );
          return
        }
        this.user = response.user
        if (this.password != this.user.password) {
          this.notifService.enviarAlerta(
            'success',
            'Mensaje',
            'La contraseña ingresada es incorrecta.'
          );
          return
        }
        this.sesionService.logSesion(this.user)
        this._router.navigate(['/'])
        this.notifService.enviarAlerta(
          'success',
          'Mensaje',
          'Sesión iniciada correctamente. ¡Bienvenid@!'
        );
      }
    )
  }

  verificar() {
    return this.email.length < 1 || this.password.length < 1
  }
}
