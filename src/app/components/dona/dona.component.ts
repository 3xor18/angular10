import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MultiDataSet, Label, Color, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() titulo = "Sin Titulo";

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['one', 'Two', 'Three'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
