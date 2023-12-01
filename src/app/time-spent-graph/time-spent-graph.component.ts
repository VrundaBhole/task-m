import { Component, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { FetchDataServiceService } from '../fetch-data-service.service';
Chart.register(...registerables);

@Component({
  selector: 'app-time-spent-graph',
  templateUrl: './time-spent-graph.component.html',
  styleUrls: ['./time-spent-graph.component.css'],
})
export class TimeSpentGraphComponent {
  chart: any = [];
  constructor(
    private elementRef: ElementRef,
    private getdata: FetchDataServiceService
  ) {}
  latestResults: any[] = [];

  ngOnInit() {
    this.getdata.getdata().subscribe((res: any) => {
      console.log(res);
      console.log(res.dashboardData.lastestResults);
            this.latestResults = res.dashboardData.timeSpentData;
            console.log(this.latestResults);

    });
    const canvas = this.elementRef.nativeElement.querySelector('#piechart');
    const context = canvas.getContext('2d');
    const days = Object.keys(this.latestResults);
    console.log(days)

    var myChart = new Chart(context, {
      type: 'bar',
      data: {
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        datasets: [
          {
            label: 'Grammar',
            data:[3,23,],
            backgroundColor: '#4BCBEB',
            borderColor: '#4BCBEB',
            borderWidth: 0,
          },
          {
            label: 'Listening',
            data: [50, 15, 20, 35],
            backgroundColor: '#F5A623',
            borderColor: '#4BCBEB',
            borderWidth: 0,
          },

          {
            label: 'Writing',
            data: [2, 8, 4, 7, 1, 5],
            backgroundColor: '#FE9496',
            borderColor: '#FE9496',
            borderWidth: 0,
          },
          {
            label: 'Vocabulary',
            data: [2, 8, 4, 7, 1, 5],
            backgroundColor: '#1BCFB4',
            borderColor: '#1BCFB4',
            borderWidth: 0,
          },
          // A
          // Add more datasets as needed
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },

            beginAtZero: false,
          },
          y: {
            stacked: true,
            grid: {
              display: false, // Hide horizontal grid lines
            },
            ticks: {
              display: false, // Hide y-axis labels/numbers
            },
            beginAtZero: false,
            grace: '10%',
          },
        },
      },
    });
  }
}
