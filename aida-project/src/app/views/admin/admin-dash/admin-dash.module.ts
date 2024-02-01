import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashRoutingModule } from './admin-dash-routing.module';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminDashComponent,
  ],
  imports: [
    CommonModule,
    AdminDashRoutingModule,
    RouterModule
    
  ]
})
export class AdminDashModule { }
