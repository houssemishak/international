import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantDashRoutingModule } from './consultant-dash-routing.module';
import { ConsultantDashComponent } from './consultant-dash/consultant-dash.component';


@NgModule({
  declarations: [
    ConsultantDashComponent
  ],
  imports: [
    CommonModule,
    ConsultantDashRoutingModule
  ]
})
export class ConsultantDashModule { }
