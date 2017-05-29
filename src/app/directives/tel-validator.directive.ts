import {Directive} from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {telValidator} from "../validator/validators";

@Directive({
  selector: '[appTelValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: telValidator, multi: true}]
})
export class TelValidatorDirective {

  constructor() {
  }

}
