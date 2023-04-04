import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinamicComponent } from './dinamic/dinamic.component';
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DinamicComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormsReactiveModule { }
