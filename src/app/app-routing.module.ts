import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listar-usuario'},
  {path: 'agregar-usuario', component: AgregarUsuarioComponent},
  {path: 'listar-usuario', component: ListarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
