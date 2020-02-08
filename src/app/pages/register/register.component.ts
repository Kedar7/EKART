import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  closeRegister() {
    $('#register').modal('hide');
  }
  ngOnInit() {
  }
  onSubmitRegister(){
    console.log(this.registerForm.value);
  }

}
