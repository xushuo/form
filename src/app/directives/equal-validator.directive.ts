import {Directive} from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {passEqualValid} from "../validator/validators";

@Directive({
  selector: '[appEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: passEqualValid, multi: true}]
})
export class EqualValidatorDirective {

  constructor() {
  }

}
