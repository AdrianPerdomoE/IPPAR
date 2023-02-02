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
  errorCorreo = false
  constructor(
    private userService: UserService,
    private sesionService: SesionServiceService,
    private _router: Router,
    private notifService: NotificacionesService
  ) { }

  ngOnInit(): void {
    if (this.sesionService.confirmOpenSesion()) {
      this._router.navigate(['/home'])
    }
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
        this._router.navigate(['/home'])
        this.notifService.enviarAlerta(
          'success',
          'Mensaje',
          'Sesión iniciada correctamente. ¡Bienvenid@!'
        );
      }
    )
  }

  analizarCorreo(){
    this.errorCorreo = !this.verificarCorreo()
  }
  verificar() {
    let verificacionCorreo = this.verificarCorreo()
    return !verificacionCorreo || this.password.length < 1
  }
  verificarCorreo() {
    let patron = new RegExp("^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$");
    return patron.test(this.email)
  }
}
