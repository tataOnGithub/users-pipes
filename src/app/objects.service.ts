import { Injectable } from '@angular/core';
import { default as data } from '../assets/data.json';
import { User } from './models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      return resolve(data);
    })
  }
}
