import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../servicos/auth';
import { map } from 'rxjs/operators';

export const perfilAcessoGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  const token = localStorage.getItem('token');

  return authService.verificarUsuario(token).pipe(
    map((response: any) => {
      const cargo = response.cargo;
      if (cargo === 'admin') {
        return true; 
      } else {
        router.navigate(['/dashboard']);
        return false; 
      }
    })
  );
};