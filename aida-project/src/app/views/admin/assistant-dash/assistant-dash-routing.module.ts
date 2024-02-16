import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistantDashComponent } from './assistant-dash/assistant-dash.component';

const routes: Routes = [
  {path:'',component:AssistantDashComponent,
children:[
  {path:'create-assistant',loadChildren:()=>import('./assistant-dash/create-assistant/create-assistant.module').then(m=>m.CreateAssistantModule)},
  {path:'list-assistant',loadChildren:()=>import('./assistant-dash/list-assistant/list-assistant.module').then(m=>m.ListAssistantModule)}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistantDashRoutingModule { }
