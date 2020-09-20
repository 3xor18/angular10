import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  titulo1: string = "Titulo 1";
  titulo2: string = "Titulo 2";
  titulo3: String = "Titulo 3";
  labels1: string[] = ["Uno A", "DosA", "TresA"]
  labels2: string[] = ["Uno B", "DosB", "TresB"]
  labels3: string[] = ["Uno C", "DosC", "TresC"]
  valores1: number[] = [10, 50, 70]
  valores2: number[] = [90, 20, 40]
  valores3: number[] = [30, 10, 70]

  constructor() { }

  ngOnInit(): void {
  }


}
