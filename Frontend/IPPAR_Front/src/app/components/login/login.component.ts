import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
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
  constructor(private userService:UserService,private sesionService:SesionServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  submit() {
    this.userService.getUser(this.email).subscribe(
      response=>{
        if(!response.user){
          alert('Correo ingresado no registrado')
          return
        }
        this.user = response.user
        if(this.password!=this.user.password){
          alert('password incorrecta')
          return
        }
        this.sesionService.logSesion(this.user)
        this._router.navigate(['/home'])
      }
    )
   }
  verificar() {
    return this.email.length < 1 || this.password.length < 1
  }
}
