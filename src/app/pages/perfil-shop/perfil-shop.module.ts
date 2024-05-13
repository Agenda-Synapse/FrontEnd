import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilShopRoutingModule } from './perfil-shop-routing.module';
import { PerfilShopComponent } from './perfil-shop.component';


@NgModule({
  declarations: [
    PerfilShopComponent
  ],
  imports: [
    CommonModule,
    PerfilShopRoutingModule
  ]
})
export class PerfilShopModule { }
