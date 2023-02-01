import { Component, OnInit } from '@angular/core';
import { SesionServiceService } from 'src/app/services/sesion-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sesionService: SesionServiceService) { }

  ngOnInit(): void {
  }
  logOut() {
    this.sesionService.logOut()

  }

}
