import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},
  ]

  constructor() {}

  submit(f: NgForm) {
    console.log(f);
  }
}
