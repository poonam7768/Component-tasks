import { Component, OnInit } from "@angular/core";
import { empArr } from "src/const/table";
import { Iemp } from "src/module/table";

@Component({
   selector : 'app-table',
   templateUrl :  './table1.component.html',
   styleUrls : ['./table1.component.scss'] 
})
export class Table1Component implements OnInit{

    Employee : Array<Iemp> = empArr
    constructor(){ }

    ngOnInit(): void {
        
    }
}