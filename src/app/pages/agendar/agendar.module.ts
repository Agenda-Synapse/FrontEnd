import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendarRoutingModule } from './agendar-routing.module';
import { AgendarComponent } from './agendar.component';


@NgModule({
  declarations: [
    AgendarComponent
  ],
  imports: [
    CommonModule,
    AgendarRoutingModule
  ]
})
export class AgendarModule { }
