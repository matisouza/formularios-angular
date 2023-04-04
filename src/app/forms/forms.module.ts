import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicComponent } from './basic/basic.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule,
  ]
})
export class FormModule { }
