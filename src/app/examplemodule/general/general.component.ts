import { OnInit, Input, Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ComponentModel } from 'src/app/models/ComponentModel';
import { ChartService } from 'src/app/services/chart.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  LastHistoriesInfo: {};

  @Input() component: ComponentModel;

  constructor(private generalService: GeneralService, private chartService : ChartService, private jobService: JobService) { }

  isHealthy: boolean;
  historyDate: any;

  ngOnInit() {
    this.isHealthy = this.generalService.checkJobHealty();
    this.historyDate = this.jobService.getHistoriesLast();
  }

  setId() {
    return this.component.jobname.replace(/ /g, "");
  }

  ngAfterViewInit() {
    this.chartService.setChart(this.component,Array.from({length: 12}, () => Math.floor(Math.random() * 40)));
  }

}
