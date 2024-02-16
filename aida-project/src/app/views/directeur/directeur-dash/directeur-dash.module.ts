import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirecteurDashRoutingModule } from './directeur-dash-routing.module';
import { DirecteurDashComponent } from './directeur-dash/directeur-dash.component';


@NgModule({
  declarations: [
    DirecteurDashComponent
  ],
  imports: [
    CommonModule,
    DirecteurDashRoutingModule
  ]
})
export class DirecteurDashModule { }
