import {Component,Directive,DirectiveDecorator} from '@angular/core';

//tempVar Component.
import {tempVar} from './components/tempVar/tempVar';


@Component({
    selector:"my-app",
    // template:
    // `
    //    <tempVar></tempVar>
    // `
    templateUrl:"./app/app.component.html",
})
export class AppComponent{
     name:string;
     age:number;

     constructor(){
         this.name = "Shahzaib";
         this.age = 23;
     }
}