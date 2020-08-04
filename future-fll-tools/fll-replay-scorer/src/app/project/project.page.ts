import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
identify=0;identify2=0;design=0;design2=0;create=0;create2=0;iterate=0;iterate2=0;communicate=0;communicate2=0;

rubricCalc(name,value) {
  console.log(name,value)
  this[name] = value
}
}
