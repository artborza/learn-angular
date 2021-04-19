import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import { CountComponent } from './counting/count.component';
import { Lab4Component } from './lab4/lab4.component';
import { NevbarComponentComponent } from './nevbar-component/nevbar-component.component';
import { SearchBarComponentComponent } from './search-bar-component/search-bar-component.component';
import { TopBannerComponentComponent } from './top-banner-component/top-banner-component.component';
import { CatagoryMenuComponentComponent } from './catagory-menu-component/catagory-menu-component.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountComponent,
    Lab4Component,
    NevbarComponentComponent,
    SearchBarComponentComponent,
    TopBannerComponentComponent,
    CatagoryMenuComponentComponent,
    ToDoListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
