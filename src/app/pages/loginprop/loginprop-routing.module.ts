import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpropComponent } from './loginprop.component';

const routes: Routes = [{ path: '', component: LoginpropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpropRoutingModule { }
