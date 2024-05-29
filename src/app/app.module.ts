import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmarComponent } from './components/modal-confirmar/modal-confirmar.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
