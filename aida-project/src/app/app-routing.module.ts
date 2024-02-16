import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AssistantLayoutComponent } from './layouts/assistant-layout/assistant-layout.component';
import { ConsultantLayoutComponent } from './layouts/consultant-layout/consultant-layout.component';
import { DirecteurLayoutComponent } from './layouts/directeur-layout/directeur-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { ResetPasswordLayoutComponent } from './layouts/reset-password-layout/reset-password-layout.component';
import { AuthClientLayoutComponent } from './layouts/auth-client-layout/auth-client-layout.component';

const routes: Routes = [
  {path:'',component:AuthClientLayoutComponent},
  {path:'client',component:ClientLayoutComponent},
  {path:'admin/login',component:AuthAdminLayoutComponent},
  {path:'admin/reset-password',component:ResetPasswordLayoutComponent},

  {path:'admin',component:AdminLayoutComponent,
  children:[
  {path:'',loadChildren:()=>import('./views/admin/dash-dash/dash-dash.module').then(m=>m.DashDashModule)},  
  {path:'admin-dash',loadChildren:()=>import('./views/admin/admin-dash/admin-dash.module').then(m=>m.AdminDashModule)},
  {path:'directeur-dash',loadChildren:()=>import('./views/admin/directeur-dash/directeur-dash.module').then(m=>m.DirecteurDashModule)},
  {path:'projet-dash',loadChildren:()=>import('./views/admin/projet-dash/projet-dash.module').then(m=>m.ProjetDashModule)},
  {path:'dash-dash',loadChildren:()=>import('./views/admin/dash-dash/dash-dash.module').then(m=>m.DashDashModule)},
  {path:'consultant-dash',loadChildren:()=>import('./views/admin/consultant-dash/consultant-dash.module').then(m=>m.ConsultantDashModule)},
  {path:'assistant-dash',loadChildren:()=>import('./views/admin/assistant-dash/assistant-dash.module').then(m=>m.AssistantDashModule)},
  {path:'client-dash',loadChildren:()=>import('./views/admin/client-dash/client-dash.module').then(m=>m.ClientDashModule)}
  ]},

  {path:'assistant',component:AssistantLayoutComponent},

  {path:'consultant',component:ConsultantLayoutComponent},

  {path:'directeur',component:DirecteurLayoutComponent,
  children:[
  {path:'',loadChildren:()=>import('./views/directeur/dash-dash/dash-dash.module').then(m=>m.DashDashModule)},  
  {path:'directeur-dash',loadChildren:()=>import('./views/directeur/directeur-dash/directeur-dash.module').then(m=>m.DirecteurDashModule)},
  {path:'projet-dash',loadChildren:()=>import('./views/directeur/projet-dash/projet-dash.module').then(m=>m.ProjetDashModule)},
  {path:'dash-dash',loadChildren:()=>import('./views/directeur/dash-dash/dash-dash.module').then(m=>m.DashDashModule)},
  {path:'consultant-dash',loadChildren:()=>import('./views/directeur/consultant-dash/consultant-dash.module').then(m=>m.ConsultantDashModule)},
  {path:'assistant-dash',loadChildren:()=>import('./views/directeur/assistant-dash/assistant-dash.module').then(m=>m.AssistantDashModule)},
  {path:'client-dash',loadChildren:()=>import('./views/directeur/client-dash/client-dash.module').then(m=>m.ClientDashModule)}
  ]},

  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
