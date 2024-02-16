import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirecteurDashComponent } from './directeur-dash/directeur-dash.component';

const routes: Routes = [
  {path:'',component:DirecteurDashComponent,
  children:[
    {path:'create-directeur',loadChildren:()=>import('./directeur-dash/create-directeur/create-directeur.module').then(m=>m.CreateDirecteurModule)},
    {path:'list-directeur',loadChildren:()=>import('./directeur-dash/list-directeur/list-directeur.module').then(m=>m.ListDirecteurModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurDashRoutingModule { }
