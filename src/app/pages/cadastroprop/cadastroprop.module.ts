import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastropropRoutingModule } from './cadastroprop-routing.module';
import { CadastropropComponent } from './cadastroprop.component';


@NgModule({
  declarations: [
    CadastropropComponent
  ],
  imports: [
    CommonModule,
    CadastropropRoutingModule
  ]
})
export class CadastropropModule { }
