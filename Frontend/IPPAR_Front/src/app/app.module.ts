import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { ListaTiendasComponent } from './components/lista-tiendas/lista-tiendas.component';
import { TiendaCardComponent } from './components/tienda-card/tienda-card.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosBusquedaComponent } from './components/productos-busqueda/productos-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    MapComponent,
    ListaTiendasComponent,
    TiendaCardComponent,
    TiendaComponent,
    ProductoComponent,
    ProductosBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
