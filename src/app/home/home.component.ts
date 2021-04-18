import { sharedStylesheetJitUrl } from '@angular/compiler';
import {Component, Input} from '@angular/core';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    @Input()
    title:String;

    count =0;
    items =[1,2,3,4,5,6,7]
    constructor() {

    }
    countNumber(){
        this.count = this.count +1;
    }
}