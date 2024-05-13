import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpropRoutingModule } from './loginprop-routing.module';
import { LoginpropComponent } from './loginprop.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginpropComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginpropRoutingModule
  ]
})
export class LoginpropModule { }
