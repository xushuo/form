import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  formModel:  FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      user: [''],
      tel:[''],
      address: [''],
      passGroup: fb.group({
        pass: [''],
        repass: ['']
      })
    })
  }

  onSubmit(){
    console.log(this.formModel.value)
  }
  ngOnInit() {
  }

}
