import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpropRoutingModule } from './loginprop-routing.module';
import { LoginpropComponent } from './loginprop.component';


@NgModule({
  declarations: [
    LoginpropComponent
  ],
  imports: [
    CommonModule,
    LoginpropRoutingModule
  ]
})
export class LoginpropModule { }
