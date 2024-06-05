import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastropropComponent } from './cadastroprop.component';

const routes: Routes = [{ path: '', component: CadastropropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastropropRoutingModule { }
