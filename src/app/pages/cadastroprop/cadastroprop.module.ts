import { NgModule,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastropropRoutingModule } from './cadastroprop-routing.module';
import { CadastropropComponent } from './CadastropropComponent';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';



@NgModule({
  declarations: [
    CadastropropComponent
  ],
  imports: [
    CommonModule,
    CadastropropRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ]
})
export class CadastropropModule { }
