import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
})
export class DinamicComponent {

  myForm: FormGroup = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(5)]],
    price: ['', [Validators.required, Validators.minLength(5)]],
    colors: this.fb.array([])
  });

  newColors: FormControl = this.fb.control('', [Validators.required])

  constructor(private fb: FormBuilder) { }

  get getColors() {
    return this.myForm.get('colors') as FormArray
  }

  addColor() {
    this.getColors.push(this.fb.control(this.newColors.value, Validators.required))
    this.newColors.reset()
  }

  borrar(index: number) {
    this.getColors.removeAt(index)
  }

  guardar() {
    console.log(this.myForm.getRawValue())
  }

}
