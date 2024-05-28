import { NgModule,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastropropRoutingModule } from './cadastroprop-routing.module';
import { CadastropropComponent, } from './cadastroprop.component';



@NgModule({
  declarations: [
    CadastropropComponent
  ],
  imports: [
    CommonModule,
    CadastropropRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 
  ]
})
export class CadastropropModule { }
