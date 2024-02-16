import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAssistantRoutingModule } from './create-assistant-routing.module';
import { CreateAssistantComponent } from './create-assistant/create-assistant.component';


@NgModule({
  declarations: [
    CreateAssistantComponent
  ],
  imports: [
    CommonModule,
    CreateAssistantRoutingModule
  ]
})
export class CreateAssistantModule { }
