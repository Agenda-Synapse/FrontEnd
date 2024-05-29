import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilpropComponent } from './perfilprop.component';

const routes: Routes = [{ path: '', component: PerfilpropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilpropRoutingModule { }
