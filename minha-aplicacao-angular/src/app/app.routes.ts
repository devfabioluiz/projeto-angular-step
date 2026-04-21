import { Routes } from '@angular/router';
import { ListaProdutos } from './pages/lista-produtos/lista-produtos';
import { DetalheProduto } from './pages/detalhe-produto/detalhe-produto';

export const routes: Routes = [
  { path: '', component: ListaProdutos },
  { path: 'produto/:id', component: DetalheProduto },
];
