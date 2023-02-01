import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SesionServiceService {

  constructor() { }

  logSesion(user: User) {
    let userString = JSON.stringify(user)
    sessionStorage.setItem('USER', userString)
  }
  logOut() {
    sessionStorage.removeItem('USER');
  }

  confirmOpenSesion() {
    let userString = sessionStorage.getItem('USER')
    if (userString) {
      return true
    }
    return false
  }
  getCurrentUser() {
    let userString = sessionStorage.getItem('USER')
    if (userString) {
      let user = JSON.parse(userString)
      return user
    }
    return null

  }
}
