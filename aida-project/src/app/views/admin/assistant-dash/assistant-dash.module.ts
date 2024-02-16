import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantDashRoutingModule } from './assistant-dash-routing.module';
import { AssistantDashComponent } from './assistant-dash/assistant-dash.component';


@NgModule({
  declarations: [
    AssistantDashComponent
  ],
  imports: [
    CommonModule,
    AssistantDashRoutingModule
  ]
})
export class AssistantDashModule { }
