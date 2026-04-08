import { Component } from '@angular/core';
import { httpResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'], // corrigido
})
export class Login {
  public apiUrl = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';

  usersResource = httpResource(() => `${this.apiUrl}/users`);
}