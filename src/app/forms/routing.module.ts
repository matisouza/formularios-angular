import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicComponent },
      { path: '**', redirectTo: 'basic' }
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
