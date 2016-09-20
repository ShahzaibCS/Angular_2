import {Component} from '@angular/core';

@Component({
    selector:"tempVar",
    templateUrl:"./app/components/tempVar/tempVar.html"
})
export class tempVar{
     name:string;
     age:number;

     constructor(){
         this.name = "Shahzaib";
         this.age = 23;
     }
}