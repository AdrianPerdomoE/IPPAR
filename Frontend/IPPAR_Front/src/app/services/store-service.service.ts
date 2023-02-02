import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";


@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  public url: string;
  constructor(private _http: HttpClient) {
      this.url = Global.url;
  }
  getStore(id:string): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get(`${this.url}/getStore/${id}`, { headers: headers });
}
getStores(): Observable<any> {
  let headers = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.get(`${this.url}/getStores`, { headers: headers });
}
}
