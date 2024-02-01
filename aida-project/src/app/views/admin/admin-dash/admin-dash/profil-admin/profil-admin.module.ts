import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilAdminRoutingModule } from './profil-admin-routing.module';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';


@NgModule({
  declarations: [
    ProfilAdminComponent
  ],
  imports: [
    CommonModule,
    ProfilAdminRoutingModule
  ]
})
export class ProfilAdminModule { }
