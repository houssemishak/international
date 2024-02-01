import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DirecteurLayoutComponent } from './directeur-layout/directeur-layout.component';
import { ConsultantLayoutComponent } from './consultant-layout/consultant-layout.component';
import { AssistantLayoutComponent } from './assistant-layout/assistant-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    DirecteurLayoutComponent,
    ConsultantLayoutComponent,
    AssistantLayoutComponent,
    ClientLayoutComponent,
    AuthAdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
