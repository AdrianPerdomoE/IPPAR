import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";
import { Store } from "../models/Store";


@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }
  
  registerStore(Store: Store): Observable<any> {
    let params = JSON.stringify(Store)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}saveStore`, params, { headers: headers })
  }

  getStore(id: string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}getStore/${id}`, { headers: headers });
  }

  getStores(): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}getStores`, { headers: headers });
  }
}
