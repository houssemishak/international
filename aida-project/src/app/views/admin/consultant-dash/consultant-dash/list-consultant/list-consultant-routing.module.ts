import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConsultantComponent } from './list-consultant/list-consultant.component';

const routes: Routes = [
  {path:'',component:ListConsultantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListConsultantRoutingModule { }
