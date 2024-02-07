import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAdminRoutingModule } from './create-admin-routing.module';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateAdminComponent
  ],
  imports: [
    CommonModule,
    CreateAdminRoutingModule,
    FormsModule
  ]
})
export class CreateAdminModule { }
