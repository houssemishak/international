import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAssistantRoutingModule } from './create-assistant-routing.module';
import { CreateAssistantComponent } from './create-assistant/create-assistant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateAssistantComponent
  ],
  imports: [
    CommonModule,
    CreateAssistantRoutingModule,
    FormsModule
  ]
})
export class CreateAssistantModule { }
