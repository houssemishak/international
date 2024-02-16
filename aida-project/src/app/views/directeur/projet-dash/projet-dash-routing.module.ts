import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetDashComponent } from './projet-dash/projet-dash.component';

const routes: Routes = [
  {path:'',component:ProjetDashComponent,
  children:[
    {path:'list-projet',loadChildren:()=>import('./projet-dash/list-projet/list-projet.module').then(m=>m.ListProjetModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetDashRoutingModule { }
