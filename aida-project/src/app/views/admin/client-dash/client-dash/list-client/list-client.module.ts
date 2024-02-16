import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientRoutingModule } from './list-client-routing.module';
import { ListClientComponent } from './list-client/list-client.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListClientComponent
  ],
  imports: [
    CommonModule,
    ListClientRoutingModule,
    FormsModule
  ]
})
export class ListClientModule { }
