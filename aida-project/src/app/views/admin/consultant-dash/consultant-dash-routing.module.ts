import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantDashComponent } from './consultant-dash/consultant-dash.component';

const routes: Routes = [
  {path:'',component:ConsultantDashComponent,
children:[
  {path:'create-consultant',loadChildren:()=>import('./consultant-dash/create-consultant/create-consultant.module').then(m=>m.CreateConsultantModule)},
  {path:'list-consultant',loadChildren:()=>import('./consultant-dash/list-consultant/list-consultant.module').then(m=>m.ListConsultantModule)}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantDashRoutingModule { }
