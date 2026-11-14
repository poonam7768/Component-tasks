import { Component, OnInit } from "@angular/core";
import { products , productsText } from  'src/const/list'


@Component({
    selector :'app-list',
    templateUrl:'./list1.component.html',
    styleUrls:['./list1.component.scss']
})

export class List1Component implements OnInit{
   
    prodcttext = productsText
    product = products
    constructor(){ }

    ngOnInit(): void {

    }
}