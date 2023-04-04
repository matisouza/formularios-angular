import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./forms/forms.module')
      .then(module => module.FormModule)
  },
  {
    path: '',
    loadChildren: () => import('./forms-reactive/forms-reactive.module')
      .then(module => module.FormsReactiveModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
