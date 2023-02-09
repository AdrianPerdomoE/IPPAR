import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { NotificacionesService } from 'src/app/services/notificaciones-service.service';
import { SesionServiceService } from 'src/app/services/sesion-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
  constructor(
    private userService: UserService,
    private notifService: NotificacionesService,
    private sesionService: SesionServiceService
  ) { }

  user = new User('', '', '', '', '')

  newEmail = ''
  confirmEmail = ''
  invalidNewEmail = false
  invalidConfirmEmail = false

  currentPassword = ''
  newPassword = ''
  confirmPassword = ''
  invalidCurrentPassword = false
  invalidNewPassword = false
  invalidConfirmPassword = false

  submitFormEmail() {
    this.userService.emailExistence(this.newEmail).subscribe(
      response => {
        if (response.existence) {
          this.notifService.enviarAlerta(
            'error',
            'Mensaje',
            'El correo electrónico ya está registrado en otra cuenta.'
          );
        }
        else if (!this.verifyConfirmEmail()) {
          this.notifService.enviarAlerta(
            'error',
            'Mensaje',
            'Los correos no coinciden.'
          );
        }
        else {
          let currentUser = this.sesionService.getCurrentUser()
          if (currentUser) {
            this.userService.getUser(currentUser.email).subscribe(
              response => {
                let user = response.user
                if (user) {
                  user.email = this.newEmail
                  this.userService.updateUser(user).subscribe(
                    response => {
                      let user = response.user
                      if (user) {
                        this.sesionService.logSesion(user)
                        this.notifService.enviarAlerta(
                          'success',
                          'Mensaje',
                          'El correo electrónico ha sido actualizado correctamente.'
                        );
                        this.newEmail = ''
                        this.confirmEmail = ''
                      }
                    }
                  )
                }
              }
            )
          }
          else {
            this.notifService.enviarAlerta(
              'error',
              'Mensaje',
              'Ha ocurrido un error al intentar actualizar el correo electrónico.'
            );
          }
        }
      }
    )
  }

  analyzeNewEmail() {
    this.invalidNewEmail = !this.verifyNewEmail()
  }

  analyzeConfirmEmail() {
    this.invalidConfirmEmail = !this.verifyConfirmEmail()
  }

  verifyFormEmail() {
    return this.verifyNewEmail() && this.verifyConfirmEmail()
  }

  verifyNewEmail() {
    let patron = new RegExp("^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$")
    return patron.test(this.newEmail)
  }

  verifyConfirmEmail() {
    return this.newEmail === this.confirmEmail
  }

  submitFormPassword() {
    let currentUser = this.sesionService.getCurrentUser()
    if (currentUser) {
      this.userService.confirmPassword(currentUser.email, this.currentPassword).subscribe(
        response => {
          if (response.passwordIsCorrect) {
            if (!this.verifyNewPassword()) {
              this.notifService.enviarAlerta(
                'error',
                'Mensaje',
                'La contraseña nueva debe tener mínimo 8 caracteres.'
              );
            }
            else if (!this.verifyConfirmPassword()) {
              this.notifService.enviarAlerta(
                'error',
                'Mensaje',
                'Las contraseñas no coinciden.'
              );
            }
            else {
              let currentUser = this.sesionService.getCurrentUser()
              if (currentUser) {
                this.userService.getUser(currentUser.email).subscribe(
                  response => {
                    let user = response.user
                    if (user) {
                      user.password = this.newPassword
                      this.userService.updateUser(user).subscribe(
                        response => {
                          let user = response.user
                          if (user) {
                            this.sesionService.logSesion(user)
                            this.notifService.enviarAlerta(
                              'success',
                              'Mensaje',
                              'La contraseña ha sido actualizada correctamente.'
                            );
                            this.currentPassword = ''
                            this.newPassword = ''
                            this.confirmPassword = ''
                          }
                        }
                      )
                    }
                    else {
                      this.notifService.enviarAlerta(
                        'error',
                        'Mensaje',
                        'Ha ocurrido un error al intentar actualizar la contraseña.'
                      );
                    }
                  }
                )
              }
            }
          }
          else {
            this.notifService.enviarAlerta(
              'error',
              'Mensaje',
              'La contraseña actual es incorrecta.'
            );
          }
        }
      )
    }
  }

  analyzeCurrentPassword() {
    this.verifyCurrentPassword()
  }

  analyzeNewPassword() {
    this.invalidNewPassword = !this.verifyNewPassword()
  }

  analyzeConfirmPassword() {
    this.invalidConfirmPassword = !this.verifyConfirmPassword()
  }

  verifyFormPassword() {
    return this.verifyNewPassword() && this.verifyConfirmPassword()
  }

  verifyCurrentPassword() {
    let currentUser = this.sesionService.getCurrentUser()
    if (currentUser) {
      this.userService.confirmPassword(currentUser.email, this.currentPassword).subscribe(
        response => {
          this.invalidCurrentPassword = !response.passwordIsCorrect
          return response.passwordIsCorrect
        }
      )
    }
    return false
  }

  verifyNewPassword() {
    return this.newPassword.length >= 8
  }

  verifyConfirmPassword() {
    return this.newPassword === this.confirmPassword
  }
}
