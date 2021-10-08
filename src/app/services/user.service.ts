import { Injectable } from '@angular/core';
import { data } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
donnees= data
  constructor() { }

  getUsersData(){
    return this.donnees
  }
}
