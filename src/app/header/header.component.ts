import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSigned: boolean;
  signStatus: string;

  constructor() {
    this.isSigned = false;
    this.signStatus = this.getSignStatus();
  }

  ngOnInit(): void { }

  getSignStatus(): string {

    if (this.isSigned) {
      return "sign out";
    } else {
      return "sign in";
    }
  }

  switchSign() {
    this.isSigned = !this.isSigned;
    this.signStatus = this.getSignStatus();
  }
}


