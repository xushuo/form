import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  onSubmit(val: any, valid: boolean){
    console.log(val);
    console.log(valid);
  }
  flagUser1: boolean = true;
  flagUser2: boolean = true;
  check(form:NgForm){
    if(form){
      this.flagUser1 = form.form.get('name').valid;
      this.flagUser2 = form.form.get('name').untouched;
    }
  }
}
