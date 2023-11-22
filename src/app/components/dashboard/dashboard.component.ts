import { ExtractServices } from '../../services/extract.services';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  revenue = 0;
  expense = 0;
  balance = 0;

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Entrada', backgroundColor: 'green' },
      { data: [], label: 'Saída', backgroundColor: 'red' },
    ],
  };

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {},
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: '',
        font: {
          size: 18,
        },
      },
    },
  };

  barChartType: ChartType = 'bar';

  constructor(
    private extractServices: ExtractServices,
  ) { }

  ngOnInit(): void {
    this.dataChart();
  }

  dataChart(): void {
    this.extractServices.getExtractChart().subscribe((data: any) => {
      this.barChartData = {
        labels: [
          `01/${data.currentYear}`,
          `02/${data.currentYear}`,
          `03/${data.currentYear}`,
          `04/${data.currentYear}`,
          `05/${data.currentYear}`,
          `06/${data.currentYear}`,
          `07/${data.currentYear}`,
          `08/${data.currentYear}`,
          `09/${data.currentYear}`,
          `10/${data.currentYear}`,
          `11/${data.currentYear}`,
          `12/${data.currentYear}`,
        ],
        datasets: [
          { data: data.dataPositive, label: 'Entrada', backgroundColor: 'green' },
          { data: data.dataNegative, label: 'Saída', backgroundColor: 'red' },
        ],
      };
      this.barChartOptions = {
        responsive: true,
        scales: {
          x: {},
          y: {},
        },
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: `Entrada/Saída ano ${data.currentYear}`,
            font: {
              size: 20,
            },
          },
        },
      };
      this.revenue = data.revenue;
      this.expense = data.expense;
      this.balance = data.balance;
    });
  }

  chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void { }

  chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void { }
}
