import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashComponent } from './client-dash/client-dash.component';

const routes: Routes = [
  {path:'',component:ClientDashComponent,
  children:[
    {path:'create-client',loadChildren:()=>import('./client-dash/create-client/create-client.module').then(m=>m.CreateClientModule)},
    {path:'list-client',loadChildren:()=>import('./client-dash/list-client/list-client.module').then(m=>m.ListClientModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDashRoutingModule { }
