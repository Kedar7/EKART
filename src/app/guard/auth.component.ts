import { Component, OnInit, Injector, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
declare var $: any;

@Component({
  selector: 'app-auth',
  template: '<router-outlet></router-outlet>'
})
export class AuthComponent implements CanActivate {
  private route: Router;
  constructor(private injector: Injector, private localstorageservice: LocalStorageService) {
    this.route = injector.get(Router)
  }
  canActivate(): boolean {
    let authentication = this.localstorageservice.getData();
    let username = authentication['username'];
    if (username !== "kedar@gmail.com") {
      $('#login').modal('show');
      return false;
    }
    return true;
  }
  ngOnInit() {


  }

}
