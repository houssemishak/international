import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDashRoutingModule } from './dash-dash-routing.module';
import { DashDashComponent } from './dash-dash/dash-dash.component';


@NgModule({
  declarations: [
    DashDashComponent
  ],
  imports: [
    CommonModule,
    DashDashRoutingModule
  ]
})
export class DashDashModule { }
