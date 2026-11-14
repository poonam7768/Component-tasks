import { Component, OnInit } from '@angular/core';
import { aiArr } from 'src/const/card';
import { Iai } from 'src/module/card';

@Component({
  selector: 'app-card',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {
  
  AI : Array<Iai> = aiArr

  constructor() { }

  ngOnInit(): void {
  }

}
