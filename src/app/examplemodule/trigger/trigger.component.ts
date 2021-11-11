import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { environment } from 'src/environments/environment';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
declare const showNotification : any;

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css']
})
export class TriggerComponent implements OnInit {

  events: any;
  minYesterdayDate : any;
  minMonthDate:any;
  maxDate : any;
  maxMonthDate : any;
  logHistory  = [];
  selectedJobname:any;
  loading: boolean;
  runJobForm : FormGroup;
  runSubmitted = false;
  postCallIsSubmitted = false;

  jobId: number;

  constructor(private generalService : GeneralService, private formBuilder : FormBuilder, private jobService: JobService, private route: ActivatedRoute) {
   }

  setMinDate(event: MatDatepickerInputEvent<Date>) {
    this.events = new Date(`${event.value}`);
    this.minYesterdayDate = this.events;
    this.maxDate = this.events;
  }

  setMonthMinDate(event: MatDatepickerInputEvent<Date>) {
    this.events = new Date(`${event.value}`);
    this.minMonthDate = this.events;
    this.maxMonthDate = this.events;
  }

  ngOnInit() {
    
    this.jobId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.runJobForm = this.formBuilder.group({
      selectedJobname : ['', Validators.required],
      yesterdayStartDate :['', Validators.required],
      yesterdayEndDate :['', Validators.required],
      thisMonthStartDate :['', Validators.required],
      thisMonthEndDate :['', Validators.required],
      isDeveloperTest :[false],
    });
    this.getSchedules(this.jobId);
  }

  getSchedules(id: number) {
    this.jobService.getJobSchedules().subscribe(
      data => {
        this.loading = true;
        this.logHistory = data.filter(function (el) { return id === el.id });
        
        this.loading = false;
      }
    )
  }

  onSubmit() {
    this.runSubmitted = true;
    if(
       this.runJobForm.value.selectedJobname == "" ||
       !this.runJobForm.value.yesterdayEndDate || !this.runJobForm.value.yesterdayStartDate || !this.runJobForm.value.thisMonthStartDate || !this.runJobForm.value.thisMonthEndDate){
      showNotification('top','right', 'danger', 'Failed.');
      return;
    }
    else {
      this.runJobForm.value.selectedJobname = this.selectedJobname;
      this.runJobForm.value.yesterdayEndDate =this.generalService.getEndDate(this.runJobForm.value.yesterdayEndDate);
      this.runJobForm.value.yesterdayStartDate =this.generalService.getStartDate(this.runJobForm.value.yesterdayStartDate);
      this.runJobForm.value.thisMonthEndDate =this.generalService.getEndDate(this.runJobForm.value.thisMonthEndDate);
      this.runJobForm.value.thisMonthStartDate =this.generalService.getStartDate(this.runJobForm.value.thisMonthStartDate);
      this.trigger(this.runJobForm.value);
    }
  }

   trigger(item){
     let sendData = {
      "scheduleName": item.selectedJobname,
      "yesterdayStartDate": item.yesterdayStartDate,
      "yesterdayEndDate": item.yesterdayEndDate,
      "thisMonthStartDate": item.thisMonthStartDate,
      "thisMonthEndDate": item.thisMonthEndDate,
      "isDeveloperTest": item.isDeveloperTest,
    }
    const data = this.jobService.triggerManuel(sendData);
    if(data.status === 200) {
      console.log(data.message,sendData);
      showNotification('top','right', data.cond, data.result);
    }
   }
}
