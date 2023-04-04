import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent {

  @ViewChild('myForms') myForms!: NgForm

  initForm = {
    email: '',
    password: ''
  }

  guardar(): void {
    this.myForms.reset(
      {
        email: '',
        password: ''
      }
    )
  }
}
