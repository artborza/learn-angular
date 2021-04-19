import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagory-menu-component',
  templateUrl: './catagory-menu-component.component.html',
  styleUrls: ['./catagory-menu-component.component.css']
})
export class CatagoryMenuComponentComponent implements OnInit {

  items =["ของเล่น","เสื้อผ้า","คอมพิวเตอร์","ขนม","ข้าว"]
  constructor() { }

  ngOnInit(): void {
  }

}
