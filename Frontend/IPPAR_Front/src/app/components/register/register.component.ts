import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User('', '', '', '', '')
  savedUser: User = new User('', '', '', '', '')
  status = ''

  constructor(private userService: UserService, private _router: Router) {

  }

  ngOnInit(): void {
  }

  registrar() {
    this.savedUser = this.user
    this.userService.emailExistence(this.user.email).subscribe(
      response => {
        if (response.existence) {
          this.status = 'UserExist';
        }
        else {
          this.userService.registerUser(this.user).subscribe(
            response => {
              if (response.user) {
                this._router.navigate(['/home']);
              }
              else {
                this.status = "Failed";
              }
            }
          )
        }
      }
    )

  }
}
