import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

const routes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'admin', loadChildren : './pages/clientes/clientes.module#ClientesModule'},
  {path: 'permisos', loadChildren : './pages/permisos/permisos.module#PermisosModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
