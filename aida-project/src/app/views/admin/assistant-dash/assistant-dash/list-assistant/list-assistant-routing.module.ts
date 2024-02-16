import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssistantComponent } from './list-assistant/list-assistant.component';

const routes: Routes = [
  {path:'',component:ListAssistantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAssistantRoutingModule { }
