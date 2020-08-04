import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  constructor() { }

  ngOnInit() {
  }

  public folder: string;

  // constructor(private activatedRoute: ActivatedRoute) {

  //  }

}
