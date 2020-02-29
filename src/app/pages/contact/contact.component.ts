import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name;
  email;
  message;
  constructor() { }

  ngOnInit() {
  }
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }
}
