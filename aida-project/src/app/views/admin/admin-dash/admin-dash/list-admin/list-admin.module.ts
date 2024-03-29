import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAdminRoutingModule } from './list-admin-routing.module';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListAdminComponent
  ],
  imports: [
    CommonModule,
    ListAdminRoutingModule,
    FormsModule
  ]
})
export class ListAdminModule { }
