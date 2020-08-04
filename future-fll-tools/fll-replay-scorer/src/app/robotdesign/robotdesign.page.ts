import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robotdesign',
  templateUrl: './robotdesign.page.html',
  styleUrls: ['./robotdesign.page.scss'],
})
export class RobotdesignPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  identifyRD=0;identify2RD=0;designRD=0;designRD2=0;createRD=0;createRD2=0;iterateRD=0;iterateRD2=0;communicateRD=0;communicateRD2=0;

  rubricCalc(name,value) {
    console.log(name,value)
    this[name] = value
  }
}
