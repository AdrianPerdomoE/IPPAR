import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";
import { Product } from "../models/Product";


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }
  registerProduct(product: Product): Observable<any> {
    let params = JSON.stringify(product)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}saveProduct`, params, { headers: headers })
}
  getProduct(id: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}getProduct/${id}`, { headers: headers });
  }
  getProducts(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}GetProducts/`, { headers: headers });
  }
  getProductsOwner(owner: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}GetProducts/${owner}`, { headers: headers });
  }
}