import { Component, OnInit } from '@angular/core';
import { cities,citiesText } from 'src/const/list';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.scss']
})
export class List4Component implements OnInit {
citiestext = citiesText
cities = cities
  constructor() { }

  ngOnInit(): void {
  }

}
