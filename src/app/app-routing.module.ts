import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lab2Component } from './lab2/lab2.component';

const routes: Routes = [
  { path: 'lab2', component: Lab2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
