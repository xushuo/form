import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {passEqualValid, telValidator, telValidatorAsyn} from "../validator/validators";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {


/*  telValidator(control: FormControl): any {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    let valid = reg.test(control.value);
    console.log('Tel 校验结果' + valid)
    return valid ? null : {tel: true}
  }

  passEqualValid(group: FormGroup) {
    let pass: FormControl = group.get('pass') as FormControl;
    let repass: FormControl = group.get('repass') as FormControl;
    let valid: boolean = (pass.value === repass.value);
    console.log('密码两者比较' + valid);
    return valid ? null : {equal: true}
  }*/


  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      user: ['', [Validators.required, Validators.minLength(6)]],
      tel: ['', telValidator,telValidatorAsyn],
      address: [''],
      passGroup: fb.group({
        pass: ['',Validators.minLength(6)],
        repass: ['']
      }, {validator: passEqualValid})
    })
  }

  onSubmit() {
   /* let isValid: boolean = this.formModel.get('user').valid;
    let error: any = this.formModel.get('user').errors;

    console.log("验证结果" + isValid);
    console.log("验证结果错误信息" + JSON.stringify(error));*/

    if(this.formModel.valid){
      console.log(this.formModel.value);
    }else {
      console.log("未通过校验");
    }
  }

  ngOnInit() {
  }

}
