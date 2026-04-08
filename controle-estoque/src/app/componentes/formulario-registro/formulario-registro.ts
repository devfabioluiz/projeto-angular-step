import { Component } from '@angular/core';
import { Auth } from '../../servicos/auth';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: false,
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css',
})
export class FormularioRegistro {
  constructor(private auth: Auth) {}

  registroForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      roles: new FormControl('', Validators.required),
  });

  registrar() {
    this.auth.registrar(this.registroForm.value).subscribe({
      next: (response) => {
        console.log('Usuário registrado com sucesso!', response);
      },
      error: (error) => {
        console.error('Erro ao registrar usuário:', error);
      }
    });
  }
}
