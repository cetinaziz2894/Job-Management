import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JobService } from 'src/app/services/job.service';

declare const showNotification: any;
declare var $: any

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private jobService: JobService, private route: ActivatedRoute) { }

  schedules = [];
  schedule:string;
  loading: boolean;
  jobId: number;
  postCallIsSubmitted = false;

  ngOnInit() {
    this.jobId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getSchedules(this.jobId);

  }

  getSchedules(id: number) {
    this.jobService.getJobSchedules().subscribe(
      data => {
        this.loading = true;
        this.schedules = data.filter(function (el) { return id === el.id });
        this.loading = false;
      }
    )
  }

  setSchedule(item:string){
    this.schedule = item;
    $('#triggerModalExample').modal('show');
    if (this.postCallIsSubmitted) {
      this.postCallIsSubmitted =false;
    }
  }

  getSchedule(){
    return this.schedule;
  }

  triggerJob(item) {
    this.postCallIsSubmitted = true;
    console.log("POST call successful value returned in body", item);
    showNotification('top', 'right', 'success', 'Success');
    $('#triggerModalExample').modal('hide');
  }

}