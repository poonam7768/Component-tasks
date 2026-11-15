import { Component, OnInit } from '@angular/core';
import { roboticsArr } from 'src/const/card';
import { robotics } from 'src/module/card';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
Robotics : Array<robotics> = roboticsArr
  constructor() { }

  ngOnInit(): void {
  }

}
