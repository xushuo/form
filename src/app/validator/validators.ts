import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
/**
 * Created by Administrator on 2017/5/29.
 */
export function telValidator(control: FormControl): any {
  let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
  let valid = reg.test(control.value);
  console.log('Tel 校验结果' + valid)
  return valid ? null : {tel: true}
}
export function telValidatorAsyn(control: FormControl): any {
  let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
  let valid = reg.test(control.value);
  console.log('Tel 校验结果' + valid)
  return Observable.of( valid ? null : {tel: true}).delay(5000)
}

export function passEqualValid(group: FormGroup) {
  let pass: FormControl = group.get('pass') as FormControl;
  let repass: FormControl = group.get('repass') as FormControl;
  let valid: boolean = (pass.value === repass.value);
  console.log('密码两者比较' + valid);
  return valid ? null : {equal: {desc:'两次密码不符'}}
}
