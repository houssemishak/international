import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashDashComponent } from './dash-dash/dash-dash.component';

const routes: Routes = [
  {path:'',component:DashDashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashDashRoutingModule { }
