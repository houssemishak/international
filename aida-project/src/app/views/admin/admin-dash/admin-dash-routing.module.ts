import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

const routes: Routes = [
  {path:'',component:AdminDashComponent,
children:[
  {path:'create-admin',loadChildren:()=>import('./admin-dash/create-admin/create-admin.module').then(m=>m.CreateAdminModule)},
  {path:'update-admin',loadChildren:()=>import('./admin-dash/update-admin/update-admin.module').then(m=>m.UpdateAdminModule)},
  {path:'profil-admin',loadChildren:()=>import('./admin-dash/profil-admin/profil-admin.module').then(m=>m.ProfilAdminModule)},
  {path:'delete-admin',loadChildren:()=>import('./admin-dash/delete-admin/delete-admin.module').then(m=>m.DeleteAdminModule)}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashRoutingModule { }
