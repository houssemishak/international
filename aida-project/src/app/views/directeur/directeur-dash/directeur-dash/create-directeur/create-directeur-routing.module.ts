import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDirecteurComponent } from './create-directeur/create-directeur.component';

const routes: Routes = [
  {path:'',component:CreateDirecteurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDirecteurRoutingModule { }
