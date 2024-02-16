import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListConsultantRoutingModule } from './list-consultant-routing.module';
import { ListConsultantComponent } from './list-consultant/list-consultant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListConsultantComponent
  ],
  imports: [
    CommonModule,
    ListConsultantRoutingModule,
    FormsModule
  ]
})
export class ListConsultantModule { }
