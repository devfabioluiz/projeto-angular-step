import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../servicos/auth';

export const perfisGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  const user = authService.getUser();
  if (user && user.cargo === 'admin') {
    return true;
  } else {
    router.navigate(['/dashboard']); // ou página de acesso negado
    return false;
  }
};
