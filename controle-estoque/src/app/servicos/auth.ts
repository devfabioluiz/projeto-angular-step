import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';
  constructor(private http: HttpClient
  ) {}

  registrar(usuario: any) {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  // busca o token do usuario logado
  me(usuario: any) {
    return this.http.post(`${this.apiUrl}/me`, usuario);
  }

}
