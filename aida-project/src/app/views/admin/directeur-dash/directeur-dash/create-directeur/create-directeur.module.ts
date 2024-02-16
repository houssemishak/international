import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDirecteurRoutingModule } from './create-directeur-routing.module';
import { CreateDirecteurComponent } from './create-directeur/create-directeur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateDirecteurComponent
  ],
  imports: [
    CommonModule,
    CreateDirecteurRoutingModule,
    FormsModule
  ]
})
export class CreateDirecteurModule { }
