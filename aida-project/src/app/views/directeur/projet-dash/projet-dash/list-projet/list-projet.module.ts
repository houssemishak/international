import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProjetRoutingModule } from './list-projet-routing.module';
import { ListProjetComponent } from './list-projet/list-projet.component';


@NgModule({
  declarations: [
    ListProjetComponent
  ],
  imports: [
    CommonModule,
    ListProjetRoutingModule
  ]
})
export class ListProjetModule { }
