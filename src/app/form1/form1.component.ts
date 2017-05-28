import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {


  formModel: FormGroup = new FormGroup({
    username: new FormControl('world'),
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('sss@qq.com'),
      new FormControl('sss@qq.com')
    ])
  });



  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    let email = this.formModel.get('emails') as FormArray;
    email.push(new FormControl('ggg@qq.com'))
  }
}
