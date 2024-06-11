import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProprietarioService } from 'src/app/shared/service/proprietario.service';


@Component({
  selector: 'app-cadastroprop',
  templateUrl: './cadastroprop.component.html',
  styleUrls: ['./cadastroprop.component.scss'],
})
export class CadastropropComponent implements OnInit {
  currentContainer: number = 2;
  imagEmBase64!: string;
  errorMsg!: string;
  step1Form!: FormGroup;
  step2Form!: FormGroup;
  step3Form!: FormGroup;
  showError: boolean = false;
  showImageError: boolean = false; // Variável de controle de erro para imagem
  isImageSelected: boolean = false;
  isFormTouched: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private crateService: ProprietarioService) { }

  ngOnInit(): void {
    this.step1Form = this.fb.group(
      {
        nome: ['', Validators.required],
        telefone: ['', Validators.required],
        documentos: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', Validators.required],
        confirmarSenha: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );

    this.step2Form = this.fb.group({
      nomeEstabelecimento: ['', Validators.required],
      endereco: ['', Validators.required],
      areaAtuacao: ['', Validators.required],
      imagem: [''],
    });

    this.step3Form = this.fb.group({
      inicioTurno1: ['', Validators.required],
      terminoTurno1: ['', Validators.required],
      diasTurno1: ['', Validators.required],
    });
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean; } | null {
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
      this.step2Form.controls['imagem'].patchValue(reader.result);
      const base64String = reader.result as string;
      this.imagEmBase64 = base64String;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  next() {
    this.showError = false;
    this.isFormTouched = true;

    if (this.currentContainer === 1) {
      if (this.isStep1Complete()) {
        // console.log('primeira parte do form', this.step1Form.value);
        this.submitStep1();
        if(this.submitStep1()!){
          this.currentContainer = 2;
        }

      } else {
        this.showError = true;
        this.validateAllFormFields(this.step1Form);
      }
    } else if (this.currentContainer === 2) {
      this.showImageError = !this.isImageSelected;
      if (this.isStep2Complete()) {
        // console.log('Segunda parte do form', this.step2Form.value);
        this.submitStep2()
        if(this.submitStep2()!){
          this.currentContainer = 3;
        }
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
      console.log(`Field ${field} touched: ${control?.touched}`);
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  formatarNome(event: any) {
    const input = event.target;
    const inputValue = input.value;
    if (inputValue) {
      input.value =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    }
  }

  cpfcnpjmask = function (rawValue: string) {
    var numbers = rawValue.match(/\d/g);
    var numberLength = 0;

    if (numbers) {
      numberLength = numbers.join('').length;
    }

    if (numberLength <= 11) {
      return [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
    } else {
      return [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
    }
  };

  steps: number = 1;

  submitStep1() {
    const formValue = {
      nome: this.step1Form.get('nome')!.value,
      email: this.step1Form.get('email')!.value,
      senha: this.step1Form.get('confirmarSenha')!.value,
      cpfOuCnpj: this.step1Form.get('documentos')!.value,
      telefone: this.step1Form.get('telefone')!.value,
      cargo: "proprietario",
      idEstabelecimento: null
    };

    const formSave = JSON.stringify(formValue)

    if (this.step1Form.valid) {
      localStorage.setItem('form1', formSave)
    } else {
      console.log("Formulário inválido...");
    }
  }

  submitStep2() {
    const formValue = {
      nome: this.step2Form.get('nomeEstabelecimento')!.value,
      imagem: this.step2Form.get('imagem')!.value,
      endereco: this.step2Form.get('endereco')!.value,
      categoria: this.step2Form.get('areaAtuacao')!.value
    };

    const formSave = JSON.stringify(formValue)

    if (this.step1Form.valid) {
      localStorage.setItem('form2', formSave)
      return true
    } else {
      console.log("Formulário inválido...");
      return false
    }
  }
}
