import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/notificaciones-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User('', '', '', '', '')
  savedUser: User = new User('', '', '', '', '')
  errorCorreo = false

  constructor(
    private userService: UserService,
    private _router: Router,
    private notifService: NotificacionesService,
    private sesionService: SesionServiceService
  ) {

  }

  ngOnInit(): void {
    if (this.sesionService.confirmOpenSesion()) {
      this._router.navigate(['/home'])
    }
  }

  analizarCorreo() {
    this.errorCorreo = !this.verificarCorreo()
  }
  verificar() {
    let verificacionCorreo = this.verificarCorreo()
    return !verificacionCorreo || this.user.password.length < 1 || this.user.address.length<1 || this.user.name.length<1
  }
  verificarCorreo() {
    let patron = new RegExp("^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$");
    return patron.test(this.user.email)
  }
  registrar() {
    this.savedUser = this.user
    this.userService.emailExistence(this.user.email).subscribe(
      response => {
        if (response.existence) {
          this.notifService.enviarAlerta(
            'error',
            'Mensaje',
            'Correo ya registrado.'
          );
        }
        else {
          this.userService.registerUser(this.user).subscribe(
            response => {
              if (response.user) {
                this._router.navigate(['/login']);
                this.notifService.enviarAlerta(
                  'success',
                  'Mensaje',
                  'Cuenta creada correctamente. Ya puedes iniciar sesión.'
                );
              }
              else {
                this.notifService.enviarAlerta(
                  'error',
                  'Mensaje',
                  'Ha ocurrido un error al crear la cuenta.'
                );
              }
            }
          )
        }
      }
    )

  }
}
