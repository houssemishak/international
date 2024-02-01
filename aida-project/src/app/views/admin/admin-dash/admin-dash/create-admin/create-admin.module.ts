import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAdminRoutingModule } from './create-admin-routing.module';
import { CreateAdminComponent } from './create-admin/create-admin.component';


@NgModule({
  declarations: [
    CreateAdminComponent
  ],
  imports: [
    CommonModule,
    CreateAdminRoutingModule
  ]
})
export class CreateAdminModule { }
