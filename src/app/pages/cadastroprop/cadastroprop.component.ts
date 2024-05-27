import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroprop',
  templateUrl: './cadastroprop.component.html',
  styleUrls: ['./cadastroprop.component.scss'],
})
export class CadastropropComponent {
  currentContainer: number = 1;

 

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
