import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDashRoutingModule } from './client-dash-routing.module';
import { ClientDashComponent } from './client-dash/client-dash.component';


@NgModule({
  declarations: [
    ClientDashComponent
  ],
  imports: [
    CommonModule,
    ClientDashRoutingModule
  ]
})
export class ClientDashModule { }
