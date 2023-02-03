import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/Sesion';
import { SesionServiceService } from 'src/app/services/sesion-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public search: string = ''
  constructor(private sesionService: SesionServiceService) { }

  ngOnInit(): void {
  }
  logOut() {
    this.sesionService.logOut()

  }
  searchRedirect() {
    let level = this.sesionService.getSearchLevel()
    if (level == Sesion.GENERAL) {
      this.generalSearch()
    }
    else {
      this.insideSearch()
    }
  }

  generalSearch() {

  }
  insideSearch() {

  }
}
