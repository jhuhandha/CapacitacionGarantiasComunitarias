import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { RolesComponent } from './roles/roles.component';
import { ModulosComponent } from './modulos/modulos.component';

@NgModule({
  declarations: [RolesComponent, ModulosComponent],
  exports: [
    RolesComponent, 
    ModulosComponent
  ],
  imports: [
    CommonModule,
    PermisosRoutingModule
  ]
})
export class PermisosModule { }
