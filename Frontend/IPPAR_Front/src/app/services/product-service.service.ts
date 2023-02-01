import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }
  getProduct(id: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}/getProduct/${id}`, { headers: headers });
  }
  getProductsOwner(owner: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}/GetProducts/${owner}`, { headers: headers });
  }
  getProductSearch(searchBy: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}/searchProduct/${searchBy}`, { headers: headers });
  }
  getProductSearchOwner(searchBy: string, owner: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}/search/${searchBy}/${owner}`, { headers: headers });
  }
}