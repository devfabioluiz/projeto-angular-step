import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  standalone: false,
  templateUrl: './form-usuarios.html',
  styleUrl: './form-usuarios.css',
})
export class FormUsuarios {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  enviar() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
