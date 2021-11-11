import { Injectable } from '@angular/core';

import * as Chart from 'chart.js'
import { ComponentModel } from '../models/ComponentModel';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  canvas: any;
  ctx:any;

  setChart(component:ComponentModel,values:number[]){
    Chart.defaults.global.defaultFontColor = "#fff";
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const data = {
      labels: labels,
      datasets: [{
        label: component.jobname.toUpperCase(),
        data: values,
        fill: true,
        borderColor: 'rgb(255, 255, 255)',
        tension: 0.2
      }]
    };
    this.canvas = document.getElementById(component.jobname.replace(/ /g, ""));
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: false,
        display: true
      }
    });
  }
}
