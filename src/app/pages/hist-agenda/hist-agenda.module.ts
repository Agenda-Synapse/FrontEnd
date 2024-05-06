import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistAgendaRoutingModule } from './hist-agenda-routing.module';
import { HistAgendaComponent } from './hist-agenda.component';


@NgModule({
  declarations: [
    HistAgendaComponent
  ],
  imports: [
    CommonModule,
    HistAgendaRoutingModule
  ]
})
export class HistAgendaModule { }
