import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistAgendaComponent } from './hist-agenda.component';

const routes: Routes = [{ path: '', component: HistAgendaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistAgendaRoutingModule { }
