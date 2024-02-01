import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AssistantLayoutComponent } from './layouts/assistant-layout/assistant-layout.component';
import { ConsultantLayoutComponent } from './layouts/consultant-layout/consultant-layout.component';
import { DirecteurLayoutComponent } from './layouts/directeur-layout/directeur-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';

const routes: Routes = [
  {path:'',component:ClientLayoutComponent},
  {path:'admin/login',component:AuthAdminLayoutComponent},

  {path:'admin',component:AdminLayoutComponent,
  children:[
  {path:'admin-dash',loadChildren:()=>import('./views/admin/admin-dash/admin-dash.module').then(m=>m.AdminDashModule)}
  ]},

  {path:'assistant',component:AssistantLayoutComponent},

  {path:'consultant',component:ConsultantLayoutComponent},

  {path:'directeur',component:DirecteurLayoutComponent},

  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
