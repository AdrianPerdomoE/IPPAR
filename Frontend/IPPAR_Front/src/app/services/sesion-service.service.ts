import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Sesion } from '../models/Sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionServiceService {

  constructor() { }

  logSesion(user: User):void {
    let newSesion = new Sesion(user,Sesion.GENERAL)
    let sesionString = JSON.stringify(newSesion)
    sessionStorage.setItem('SESION', sesionString)
  }
  logOut():void {
    sessionStorage.removeItem('SESION');
  }

  confirmOpenSesion():Boolean {
    let sesionString = sessionStorage.getItem('SESION')
    if (sesionString) {
      return true
    }
    return false
  }
  getCurrentUser():User|undefined {
    let sesionString = sessionStorage.getItem('SESION')
    if (sesionString) {
      let sesion:Sesion = JSON.parse(sesionString)
      return sesion.CurrentUser
    }
    return undefined

  }
  getSearchLevel():string|undefined{
    let sesionString = sessionStorage.getItem('SESION')
    if (sesionString) {
      let sesion:Sesion = JSON.parse(sesionString)
      return sesion.searchLevel
    }
    return undefined
  }
  setSearchLevelGeneral():void{
    let sesionSTR = sessionStorage.getItem('SESION')
    if (sesionSTR) {
      let sesion:Sesion = JSON.parse(sesionSTR)
      sesion.searchLevel = Sesion.INSIDE
      let sesionString = JSON.stringify(sesion)
      sessionStorage.setItem('SESION',sesionString)
    }
  
  }
  setSearchLevelInside():void{
    let sesionSTR = sessionStorage.getItem('SESION')
    if (sesionSTR) {
      let sesion:Sesion = JSON.parse(sesionSTR)
      sesion.searchLevel = Sesion.INSIDE
      let sesionString = JSON.stringify(sesion)
      sessionStorage.setItem('SESION',sesionString)
    }
  
  }
}

