import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
import { ListaTiendasComponent } from './components/lista-tiendas/lista-tiendas.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { RegisterComponent } from './components/register/register.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'home', component: ListaTiendasComponent },
      { path: 'map', component: MapComponent },
      { path: 'tienda/:name/:id', component: TiendaComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'pedidos', component: ListaPedidosComponent },
      { path: 'pedido/:id', component: PedidoComponent },
      { path: 'cuenta', component: CuentaComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
