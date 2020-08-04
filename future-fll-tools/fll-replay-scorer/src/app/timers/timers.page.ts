import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.page.html',
  styleUrls: ['./timers.page.scss'],
})
export class TimersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Timer System 1.5.0

audio = new Audio('assets/ring.wav');
CDseconds = 30
CDminutes = 2;
CDinterval=null;

sub() {

    if (this.CDseconds == 0) {
      this.CDseconds = 59;
      this.CDminutes--;
    } else {
      this.CDseconds--;
    }
    
    if ((this.CDseconds == 0) && (this.CDminutes == 0)) {
      this.audio.play();
	clearTimeout(this.CDinterval);
	this.CDinterval = null;
    }
	
    // document.getElementById('countdownTime')
//CDtime.textContent 
document.getElementById('countdownTime').innerHTML = this.CDminutes + ":" + (this.CDseconds > 9 ? this.CDseconds : "0" + this.CDseconds);
}

CDtimer() {
    if (this.CDinterval == null)
	    this.CDinterval = setInterval(this.sub, 1000);
}

SWseconds = 0
SWminutes = 0
SWtenths = 0
SWinterval = null;

add() {

  this.SWtenths++;
    if (this.SWtenths == 10) {
      this.SWseconds++;
      this.SWtenths = 0;
    }
    if (this.SWseconds >= 60) {
      this.SWseconds = 0;
      this.SWminutes++;
    }
    
//    document.getElementById('stopwatchTime').textContent = (SWminutes ? (SWminutes > 9 ? SWminutes : "0" + SWminutes) : "00") + ":" + (SWseconds > 9 ? SWseconds : "0" + SWseconds) + "." + SWtenths;

//    SWtime.textContent 
document.getElementById('stopwatchTime').innerHTML = (this.SWminutes ? (this.SWminutes > 9 ? this.SWminutes : "0" + this.SWminutes) : "00") + ":" + (this.SWseconds > 9 ? this.SWseconds : "0" + this.SWseconds) + "." + this.SWtenths;

}

SWtimer() {
    if (this.SWinterval == null)
    this.SWinterval = setInterval(this.add, 100);
}


}
