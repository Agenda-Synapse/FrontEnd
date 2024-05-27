import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroprop',
  templateUrl: './cadastroprop.component.html',
  styleUrls: ['./cadastroprop.component.scss']
})
export class CadastropropComponent  {

  

  currentContainer: number = 1;

  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  nomeEstabelecimento: string = '';
  endereco: string = '';
  documento: string = '';
  area: string = '';
  inicio: string = '';
  termino: string = '';
  dias: string = ''

  next() {
    if (this.currentContainer < 3) {
      this.currentContainer++;
    }
  }

  back() {
    if (this.currentContainer > 1) {
      this.currentContainer--;
    }
  }
}


