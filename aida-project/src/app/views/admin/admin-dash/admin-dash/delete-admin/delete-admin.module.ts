import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteAdminRoutingModule } from './delete-admin-routing.module';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';


@NgModule({
  declarations: [
    DeleteAdminComponent
  ],
  imports: [
    CommonModule,
    DeleteAdminRoutingModule
  ]
})
export class DeleteAdminModule { }
