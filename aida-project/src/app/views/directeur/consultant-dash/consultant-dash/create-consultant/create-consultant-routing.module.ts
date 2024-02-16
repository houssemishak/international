import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateConsultantComponent } from './create-consultant/create-consultant.component';

const routes: Routes = [
  {path:'',component:CreateConsultantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateConsultantRoutingModule { }
