import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  itemDetails = [];
  loading: boolean;
  historyId: number;
  jobName: string;
  dataDialog: any;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit() {
    this.jobName = this.route.snapshot.paramMap.get("jobname");
    this.historyId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getItemhistory(this.historyId);
  }

  getItemhistory(id: number) {
    this.loading = true;
    this.jobService.getJobHistoriesLog().subscribe(data => {
      this.itemDetails = data.filter(function (el) { return id === el.id });
      this.loading = false;
    })
  }

  openDialog(item) {
    this.dataDialog = item;
  }

}