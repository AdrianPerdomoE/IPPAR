import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable , Subject} from "rxjs";
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

  public carritoState = new Subject<Cart>() ;

  saveCart(cart: Cart): Observable<any> {
    let params = JSON.stringify(cart)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}saveCart`, params, { headers: headers })
  }

  getCart(id: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}getCart/${id}`, { headers: headers });
  }

  updateCar(cart: Cart): Observable<any> {
    let params = JSON.stringify(cart)
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    this.carritoState.next(cart)
    return this._http.put(`${this.url}updateCart/${cart._id}`, params, { headers: headers });
  }

  calculateNewToPay(cart: Cart) {
    if (cart.cartItems.length == 0) {
      cart.toPay = 0
      return
    }
    cart.toPay = cart.cartItems.map(itm => { return itm.amount * itm.item.price }).reduce((prev, curr) => { return curr + prev })
  }
  emptyCart(cart: Cart): Observable<any> {
    let params = JSON.stringify(cart)
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(`${this.url}emptyCart`, params, { headers: headers });
  }

  changeAmount(index: number, amount: number, cart: Cart): Cart {
    let cartItem = cart.cartItems.at(index);
    if (!cartItem) return cart;
    if (amount === 0) {
      this.removeCartItem(index, cart)
    }
    else if (amount > 100) {
      cartItem.amount = 100
    }
    else {
      cartItem.amount = amount
    }
    this.calculateNewToPay(cart)
    return cart;
  }

  removeCartItem(index: number, cart: Cart): void {
    cart.cartItems = cart.cartItems.filter((item, ind) => { return ind != index })
    this.calculateNewToPay(cart)
  }

  addCarItem(product: Product, amount: number, storeName: string, storeId: string, cart: Cart): Cart {
    let result = this.lookForItem(product, cart)
    if (this.lookForItem(product, cart) >= 0) {
      cart.cartItems[result].amount += amount
      this.calculateNewToPay(cart)
      return cart;
    }
    let newCartItem = new CartItem(product, amount, storeName, storeId)
    cart.cartItems.push(newCartItem)
    this.calculateNewToPay(cart)
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
