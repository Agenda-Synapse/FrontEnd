import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroprop',
  templateUrl: './cadastroprop.component.html',
  styleUrls: ['./cadastroprop.component.scss'],
})
export class CadastropropComponent implements OnInit {
  currentContainer: number = 1;
  imagEmBase64!: string;

  step1Form!: FormGroup;
  step2Form!: FormGroup;
  step3Form!: FormGroup;
  showError: boolean = false;
  showImageError: boolean = false; // Variável de controle de erro para imagem
  isImageSelected: boolean = false;
  isFormTouched: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.step1Form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });

    this.step2Form = this.fb.group({
      nomeEstabelecimento: ['', Validators.required],
      endereco: ['', Validators.required],
      documentos: ['', Validators.required],
      imagem: [this.imagEmBase64]
    });

    this.step3Form = this.fb.group({
      areaAtuacao: ['', Validators.required],
      inicioTurno1: ['', Validators.required],
      terminoTurno1: ['', Validators.required],
      diasTurno1: ['', Validators.required],
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const senha = control.get('senha');
    const confirmarSenha = control.get('confirmarSenha');
    if (senha && confirmarSenha && senha.value !== confirmarSenha.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  isStep1Complete(): boolean {
    return this.step1Form.valid;
  }

  isStep2Complete(): boolean {
    return this.step2Form.valid && this.isImageSelected;
  }

  isStep3Complete(): boolean {
    return this.step3Form.valid;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.isImageSelected = true;
      this.showImageError = false; // Resetar o erro quando a imagem for selecionada
      this.onFileChange(event);
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.imagEmBase64 = base64String;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  triggerFileInputClick(): void {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  next() {
    this.showError = false;
    this.isFormTouched = true;

    if (this.currentContainer === 1) {
      if (this.isStep1Complete()) {
        console.log('primeira parte do form', this.step1Form.value);
        this.currentContainer = 2;
      } else {
        this.showError = true;
        this.validateAllFormFields(this.step1Form);
      }
    } else if (this.currentContainer === 2) {
      this.showImageError = !this.isImageSelected; // Mostrar erro se a imagem não for selecionada
      if (this.isStep2Complete()) {
        console.log('Segunda parte do form', this.step2Form.value);
        this.currentContainer = 3;
      } else {
        this.showError = true;
        this.validateAllFormFields(this.step2Form);
      }
    } else if (this.currentContainer === 3) {
      if (this.isStep3Complete()) {
        // Avançar para a próxima etapa ou finalizar
      } else {
        this.showError = true;
        this.validateAllFormFields(this.step3Form);
      }
    }
  }

  back() {
    if (this.currentContainer > 1) {
      this.currentContainer--;
    }
  }

  getCurrentForm(): FormGroup {
    if (this.currentContainer === 1) {
      return this.step1Form;
    } else if (this.currentContainer === 2) {
      return this.step2Form;
    } else {
      return this.step3Form;
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
