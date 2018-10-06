import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.scss']
})
export class TabsPageComponent implements OnInit {

  // Tabs parameters
  currentJustify = 'start';
  currentOrientation = 'horizontal';

  constructor() { }

  ngOnInit() {
  }

}