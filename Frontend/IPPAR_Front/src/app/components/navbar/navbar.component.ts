import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/Sesion';
import { SesionServiceService } from 'src/app/services/sesion-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public query: string = ''
  public type: string = 'tiendas'

  constructor(
    private _router: Router,
    private sesionService: SesionServiceService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.sesionService.logOut()
  }

  search() {
    if (this.type === 'productos') {
      this._router.navigate(['/product'], { queryParams: { query: this.query } })
    }
    else {
      this._router.navigate(['/home'], { queryParams: { query: this.query } })
    }
  }
}
