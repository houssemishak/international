import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAdminRoutingModule } from './update-admin-routing.module';
import { UpdateAdminComponent } from './update-admin/update-admin.component';


@NgModule({
  declarations: [
    UpdateAdminComponent
  ],
  imports: [
    CommonModule,
    UpdateAdminRoutingModule
  ]
})
export class UpdateAdminModule { }
