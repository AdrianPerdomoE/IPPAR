import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "../models/Cart";
import { Global } from "./Global";
import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  saveCart(cart: Cart): Observable<any> {
    let params = JSON.stringify(cart)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}saveCart`, params, { headers: headers })
  }

  getCart(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}getCart/:userId`, { headers: headers });
  }

  updateCar(cart: Cart): Observable<any> {
    let params = JSON.stringify(cart)
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(`${this.url}updateCart/${cart._id}`, params, { headers: headers });
  }

  emptyCart(id: string, userId: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(`${this.url}emptyCart/${id}/${userId}`, { headers: headers });
  }

  takeOutCartItem(index: number, amount: number, cart: Cart): Cart {
    let cartItem = cart.cartItems.at(index);
    if (!cartItem) return cart;
    if (cartItem?.amount - amount == 0) {
      this.removeCartItem(index, cart)
    }
    else {
      cartItem.amount -= amount
    }
    cart.toPay = cart.cartItems.map(itm => { return itm.amount * itm.item.price }).reduce((prev, curr) => { return curr + prev })
    return cart;
  }
  removeCartItem(index: number, cart: Cart): void {
    cart.cartItems = cart.cartItems.filter((item, ind) => { ind != index })

  }
  addCarItem(product: Product, amount: number, storeName: string, storeId: string, cart: Cart): Cart {
    let result = this.lookForItem(product, cart)
    if (this.lookForItem(product, cart) >= 0) {
      cart.cartItems[result].amount += amount
      return cart;
    }
    let newCartItem = new CartItem(product, amount, storeName, storeId)
    cart.cartItems.push(newCartItem)
    return cart;
  }
  private lookForItem(product: Product, cart: Cart): number {
    for (let index = 0; index < cart.cartItems.length; index++) {
      if (cart.cartItems[index].item._id == product._id) {
        return index
      }

    }
    return -1
  }
}
