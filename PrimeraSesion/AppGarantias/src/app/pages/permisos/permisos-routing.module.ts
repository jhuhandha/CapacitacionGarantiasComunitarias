import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { ModulosComponent } from './modulos/modulos.component';

const routes: Routes = [
  {path: 'roles', component: RolesComponent},
  {path: 'modulos', component: ModulosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRoutingModule { }
