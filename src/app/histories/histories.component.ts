import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {

  constructor(private jobService: JobService) { }
  
  logHistory  = [];
  loading: boolean;

  ngOnInit() {
    this.getHistory();
  }

  getHistory(){
    this.loading = true;
    this.jobService.getJobHistories().subscribe(data =>{
      this.logHistory = data;
      this.loading = false;
    });
  }

}
