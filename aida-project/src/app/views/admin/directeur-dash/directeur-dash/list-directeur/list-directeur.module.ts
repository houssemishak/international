import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDirecteurRoutingModule } from './list-directeur-routing.module';
import { ListDirecteurComponent } from './list-directeur/list-directeur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListDirecteurComponent
  ],
  imports: [
    CommonModule,
    ListDirecteurRoutingModule,
    FormsModule
  ]
})
export class ListDirecteurModule { }
