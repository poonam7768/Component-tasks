import { Component, OnInit } from '@angular/core';
import { fruits, fruitsText } from 'src/const/list';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss'],
})
export class List2Component implements OnInit {
  
  fruittext = fruitsText
  fruits = fruits

  constructor() { }

  ngOnInit(): void {
  }

}
