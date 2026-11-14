import { Component, OnInit } from '@angular/core';
import { productArr } from 'src/const/table';
import { Iproduct } from 'src/module/table';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {

  Product : Array <Iproduct> = productArr

  constructor() { }

  ngOnInit(): void {
  }

}
