import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilpropRoutingModule } from './perfilprop-routing.module';
import { PerfilpropComponent } from './perfilprop.component';


@NgModule({
  declarations: [
    PerfilpropComponent
  ],
  imports: [
    CommonModule,
    PerfilpropRoutingModule
  ]
})
export class PerfilpropModule { }
