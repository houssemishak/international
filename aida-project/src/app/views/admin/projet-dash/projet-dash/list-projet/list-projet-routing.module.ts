import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjetModule } from './list-projet.module';
import { ListProjetComponent } from './list-projet/list-projet.component';

const routes: Routes = [
  {path:'',component:ListProjetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProjetRoutingModule { }
