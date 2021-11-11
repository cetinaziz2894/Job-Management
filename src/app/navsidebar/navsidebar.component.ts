import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navsidebar',
  templateUrl: './navsidebar.component.html',
  styleUrls: ['./navsidebar.component.css']
})
export class NavsidebarComponent implements OnInit {

  pageTitle: string;

  sideBars : any = [
    {
      id:0, name: "jobs", icon:"work", routerLinks:"jobs", itemBackgroudColor:"60deg, #7b1fa2, #913f9e"
    },
    {
      id:0, name: "logs", icon:"list", routerLinks:"logs", itemBackgroudColor:"60deg, #f5700c, #ff9800"
    }
  ]

  constructor() {
    this.pageTitle = "Job Management";
  }

  ngOnInit() {
  }


}
