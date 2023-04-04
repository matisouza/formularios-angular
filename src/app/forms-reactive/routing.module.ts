import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DinamicComponent } from './dinamic/dinamic.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dinamic', component: DinamicComponent },
      { path: '**', redirectTo: 'dinamic' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
