import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DirecteurLayoutComponent } from './directeur-layout/directeur-layout.component';
import { ConsultantLayoutComponent } from './consultant-layout/consultant-layout.component';
import { AssistantLayoutComponent } from './assistant-layout/assistant-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    DirecteurLayoutComponent,
    ConsultantLayoutComponent,
    AssistantLayoutComponent,
    ClientLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
