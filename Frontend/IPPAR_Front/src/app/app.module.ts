import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';

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
    CarritoComponent,
    PedidoComponent,
    ListaPedidosComponent,
    CuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
