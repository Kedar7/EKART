import { Injectable } from '@angular/core';
import { Response, Headers, Http } from "@angular/http";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(private http: Http) { }
  getData() {
    let state = {};
    state['username'] = localStorage.getItem('__ekart-user-name');
    state['category'] = localStorage.getItem('__ekart-category');
    return state;
  }
  setData(params, callback) {
    localStorage.setItem('__ekart-user-name', params.username);
    localStorage.setItem('__ekart-category',params.id)
    callback(this.getData());
  }
}