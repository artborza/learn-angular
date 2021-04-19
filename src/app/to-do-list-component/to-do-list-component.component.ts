import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent {
  
  @Input()
    title:String;

  items =["Coffee","Breakfast"];
  
  
  addItem(title){
    this.items.push(title);
  }
  constructor() { }


}
