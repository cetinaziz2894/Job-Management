import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements OnInit {

  @Input() logs:any;
  @Input() jobClass:string;
  
  dataDialog: any;
  constructor() { }

  ngOnInit() {
  }

  openDialog(item) {
    this.dataDialog = item;
  }

}
