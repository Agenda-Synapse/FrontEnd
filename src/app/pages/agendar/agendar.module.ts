import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendarRoutingModule } from './agendar-routing.module';
import { AgendarComponent } from './agendar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgendarComponent
  ],
  imports: [
    CommonModule,
    AgendarRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class AgendarModule {

}
