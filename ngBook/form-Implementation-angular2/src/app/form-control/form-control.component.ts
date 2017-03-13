import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  formControl:FormControl;
  twoDataBindVar:any;

  constructor() {
    let control = new FormControl('sku',Validators.required);
   }

  ngOnInit() {
  }

  onSubmit(param:any){
    console.log("Data submitted successfully");
    let val = param;
    console.log(val);
    console.log(`First form group value: ${param['sku']}`);  //sku is the key in ngForm's JSON which holds a value of my control in the view.
  }

}
