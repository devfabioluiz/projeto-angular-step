import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Dashboard } from './componentes/dashboard/dashboard';
import { Estoque } from './componentes/estoque/estoque';
import { PainelAdmin } from './componentes/painel-admin/painel-admin';
import { authGuard } from './guards/auth-guard';
import { perfisGuard } from './guards/perfis-guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'estoque', component: Estoque, canActivate: [authGuard] },
  { path: 'painel-admin', component: PainelAdmin, canActivate: [authGuard, perfisGuard] },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
