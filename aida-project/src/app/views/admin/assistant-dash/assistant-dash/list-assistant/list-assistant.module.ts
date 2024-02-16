import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAssistantRoutingModule } from './list-assistant-routing.module';
import { ListAssistantComponent } from './list-assistant/list-assistant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListAssistantComponent
  ],
  imports: [
    CommonModule,
    ListAssistantRoutingModule,
    FormsModule
  ]
})
export class ListAssistantModule { }
