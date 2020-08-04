import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corevalues',
  templateUrl: './corevalues.page.html',
  styleUrls: ['./corevalues.page.scss'],
})
export class CorevaluesPage implements OnInit {

  constructor() { }
checkedtest=0
  ngOnInit() {
    this.checkedtest=2

  }
  discovery=0;innovation=0;impact=0;inclusion=0;teamwork=0;fun=0;
  rubricCalc(name,value) {
    console.log(name,value)
    this[name] = value
  }
}
