import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { List1Component } from './components/lists/list 1/list1.component';
import { Table1Component } from './components/table/table1/table1.component';
import { Card1Component }  from './components/card/card1/card1.component';
import { List2Component } from './components/lists/list2/list2.component';
import { List3Component } from './components/lists/list3/list3.component';
import { Table2Component } from './components/table/table2/table2.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    Table1Component,
    Card1Component,
    List2Component,
    List3Component,
    Table2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
