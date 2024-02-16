import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetDashRoutingModule } from './projet-dash-routing.module';
import { ProjetDashComponent } from './projet-dash/projet-dash.component';


@NgModule({
  declarations: [
    ProjetDashComponent
  ],
  imports: [
    CommonModule,
    ProjetDashRoutingModule
  ]
})
export class ProjetDashModule { }
