import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

const routes: Routes = [
  {path:'',component:AdminDashComponent,
children:[
  {path:'create-admin',loadChildren:()=>import('./admin-dash/create-admin/create-admin.module').then(m=>m.CreateAdminModule)},
  {path:'list-admin',loadChildren:()=>import('./admin-dash/list-admin/list-admin.module').then(m=>m.ListAdminModule)}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashRoutingModule { }
