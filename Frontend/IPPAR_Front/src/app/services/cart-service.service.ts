import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "../models/Cart";
import { Global } from "./Global";
import { CartItem } from "../models/CartItem";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  saveCart(cart: Cart): Observable<any> {
    let params = JSON.stringify(cart)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}USave`, params, { headers: headers })
  }

  getCart(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}users`, { headers: headers });
  }

  updateCar(cart: Cart): Observable<any> {
    let params = JSON.stringify(cart)
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(`${this.url}user/${cart._id}`, params, { headers: headers });
  }

  emptyCart(id: string, userId: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(`${this.url}emptyCart/${id}/${userId}`, { headers: headers });
  }

  takeOutCartItem(index: number, amount: number, cart: Cart): Cart {
    let cartItem = cart.cartItems.at(index);
    if (!cartItem) return cart;
    if (cartItem?.amount - amount == 0) {
      cart.cartItems = cart.cartItems.filter((item, ind) => { ind != index })
    }
    else {
      cartItem.amount = cartItem.amount - amount
    }
    return cart;
  }
}
