import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { Local } from 'protractor/built/driverProviders';
declare var $: any;

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: boolean;
  @Output() public hideLogin = new EventEmitter<boolean>();
  constructor(private route: Router, private router: ActivatedRoute, private localstorageservice: LocalStorageService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  closeLogin() {
    $('#login').modal('hide');
  }
  onSubmitLogin() {
    if (this.loginForm.valid) {
      let authentication = {};
      authentication['username'] = this.loginForm.value['email'];
      authentication['password'] = this.loginForm.value['password'];
      if (authentication['password'] == "kedar123" && authentication["username"] == "kedar@gmail.com") {
        this.hideLogin.emit(true);
        this.error = false;
        this.localstorageservice.setData(authentication, function (credentials) { });
        $('#login').modal('hide');
      } else {
        this.error = true;
      }
    }
  }
  ngOnInit() {
  }

}
