import { Injectable } from '@angular/core';
import { default as data } from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  getUsers() {
    return new Promise((resolve, reject) => {
      return resolve(data);
    })
  }
}
