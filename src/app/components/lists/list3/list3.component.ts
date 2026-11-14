import { Component, OnInit } from '@angular/core';
import { colors, colorsText } from 'src/const/list';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.scss']
})
export class List3Component implements OnInit {

  color= colors
  colortext = colorsText
  
  constructor() { }

  ngOnInit(): void {
  }

}
