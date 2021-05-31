import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  data = [
    { data: [85, 72, 78, 75, 77, 75, 85, 72, 78, 78, 75, 77], label: "Maisons vendues par mois" },
    { data: [185, 272, 78, 275, 77, 75, 85, 472, 578, 578, 475, 377], label: "Charpentes vendues par mois" },
    { data: [12, 12, 4, 35, 27, 75, 102, 2, 32, 44, 75, 77], label: "Terrasses vendues par mois" },
  ]
  current_index = 0;

  lineChartData: ChartDataSets[] = [
    { data: this.data[this.current_index].data, label: this.data[this.current_index].label },
  ];

  lineChartLabels: Label[] = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line'

  constructor() {}

  ngOnInit(): void {
  }

  updateGraph(index: number) {
    this.current_index = index

    this.lineChartData = [
      { data: this.data[this.current_index].data, label: this.data[this.current_index].label },
    ];
  }
}
