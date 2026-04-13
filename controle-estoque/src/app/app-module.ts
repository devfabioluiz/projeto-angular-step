import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormularioRegistro } from './componentes/formulario-registro/formulario-registro';
import { Login } from './pages/login/login';
import { PainelAdmin } from './pages/painel-admin/painel-admin';
import { Dashboard } from './pages/dashboard/dashboard';
@NgModule({
  declarations: [App, FormularioRegistro, PainelAdmin, Login, Dashboard],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
