import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAssistantRoutingModule } from './list-assistant-routing.module';
import { ListAssistantComponent } from './list-assistant/list-assistant.component';


@NgModule({
  declarations: [
    ListAssistantComponent
  ],
  imports: [
    CommonModule,
    ListAssistantRoutingModule
  ]
})
export class ListAssistantModule { }
