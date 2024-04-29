import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilShopComponent } from './perfil-shop.component';

const routes: Routes = [{ path: '', component: PerfilShopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilShopRoutingModule { }
