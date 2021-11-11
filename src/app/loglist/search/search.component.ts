import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults = [];
  pageName: string;
  jobClass:string = 'info';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.pageName = "Logs";
    this.getInformationLogs('information', 'info');
  }
  
  getInformationLogs(item:string, classname:string) {
    this.searchResults = [];
    this.jobService.getLogs().subscribe(
      data => {
        this.searchResults = data.filter(function (el) { return item === el.type });
        this.jobClass = classname;
      });
  }
}

