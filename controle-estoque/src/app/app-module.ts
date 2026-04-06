import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './componentes/dashboard/dashboard';
import { PainelAdmin } from './componentes/painel-admin/painel-admin';
import { Estoque } from './componentes/estoque/estoque';
import { Login } from './componentes/login/login';
import { LoginErrorDialog } from './componentes/login/login-error-dialog';

@NgModule({
  declarations: [App, Dashboard, PainelAdmin, Estoque, Login],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    LoginErrorDialog,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
