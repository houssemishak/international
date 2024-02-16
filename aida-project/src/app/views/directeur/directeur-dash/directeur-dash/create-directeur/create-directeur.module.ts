import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDirecteurRoutingModule } from './create-directeur-routing.module';
import { CreateDirecteurComponent } from './create-directeur/create-directeur.component';


@NgModule({
  declarations: [
    CreateDirecteurComponent
  ],
  imports: [
    CommonModule,
    CreateDirecteurRoutingModule
  ]
})
export class CreateDirecteurModule { }
