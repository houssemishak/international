import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateConsultantRoutingModule } from './create-consultant-routing.module';
import { CreateConsultantComponent } from './create-consultant/create-consultant.component';


@NgModule({
  declarations: [
    CreateConsultantComponent
  ],
  imports: [
    CommonModule,
    CreateConsultantRoutingModule
  ]
})
export class CreateConsultantModule { }
