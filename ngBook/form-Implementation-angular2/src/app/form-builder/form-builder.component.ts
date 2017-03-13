import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl,FormControl } from '@angular/forms';

// type types = number|boolean

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  myForm:FormGroup;
  fieldCheck:boolean;

  //Abstract control
  sku:AbstractControl;

  constructor(formbuilder:FormBuilder) {
       this.myForm = formbuilder.group({
        //  sku : ['ABC123',Validators.required]
          sku : ['ABC123',Validators.compose([Validators.required,this.skuValidator])]
       })

      //  this.fieldCheck = true;
  }

  ngOnInit() {
    // this.fieldCheck = true;
    this.sku = this.myForm.controls['sku'];  //SKU control on the view.
  }

  onSubmit(param:any):void{   //This function ddoesn't return value
    console.log("Data submitted successfully");
    let val = param;
    console.log(val);
    console.log(`First form group value: ${param['sku']}`);  //sku is the key in ngForm's JSON which holds a value of my control in the view.
  }

  skuValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.match('/^123/')){
      return {invalidSku:true}
    }
  }

}
