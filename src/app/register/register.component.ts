import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() {}

  subscriptionOpted;

  showRegisterForm() {
    this.subscriptionOpted = true;
  }

  hideRegisterForm() {
    this.subscriptionOpted = false;
  }

  ngOnInit() {
    this.subscriptionOpted = false;
  }
}
