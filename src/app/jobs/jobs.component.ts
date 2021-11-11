import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../models/ComponentModel';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  components: ComponentModel[] | any;

  constructor(private jobService: JobService) {
    this.jobService.getJSON().subscribe(data =>{
      this.components = data;
    })
   }

  ngOnInit() { 
  }

}
