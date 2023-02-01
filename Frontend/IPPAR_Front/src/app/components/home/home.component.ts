import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionServiceService } from 'src/app/services/sesion-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sesionService: SesionServiceService, private _router: Router) { }

  ngOnInit(): void {
    if (!this.sesionService.confirmOpenSesion()) {
      this._router.navigate(['/login'])
    }
  }

}
