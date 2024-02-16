import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDirecteurRoutingModule } from './list-directeur-routing.module';
import { ListDirecteurComponent } from './list-directeur/list-directeur.component';


@NgModule({
  declarations: [
    ListDirecteurComponent
  ],
  imports: [
    CommonModule,
    ListDirecteurRoutingModule
  ]
})
export class ListDirecteurModule { }
