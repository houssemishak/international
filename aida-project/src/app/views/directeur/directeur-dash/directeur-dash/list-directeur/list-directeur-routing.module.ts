import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDirecteurComponent } from './list-directeur/list-directeur.component';

const routes: Routes = [
  {path:'',component:ListDirecteurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDirecteurRoutingModule { }
