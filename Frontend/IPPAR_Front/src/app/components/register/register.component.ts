import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User('', '', '', '', '')
  savedUser: User = new User('', '', '', '', '')
  status = ''

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  registrar() {
    this.savedUser = this.user
    this.userService.registerUser(this.user).subscribe(
      response => {
        if (response.user) {
          this.status = "Success";
        }
        else {
          this.status = "Failed";
        }
      }
    )
  }
}
