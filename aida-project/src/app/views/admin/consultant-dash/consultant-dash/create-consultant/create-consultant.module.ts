import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateConsultantRoutingModule } from './create-consultant-routing.module';
import { CreateConsultantComponent } from './create-consultant/create-consultant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateConsultantComponent
  ],
  imports: [
    CommonModule,
    CreateConsultantRoutingModule,
    FormsModule
  ]
})
export class CreateConsultantModule { }
