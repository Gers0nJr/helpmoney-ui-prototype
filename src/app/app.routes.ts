import {Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lancamento-cadastro', component: LancamentoCadastroComponent },
  { path: 'lancamentos-pesquisa', component: LancamentosPesquisaComponent },
  { path: 'pessoas-pesquisa', component: PessoasPesquisaComponent },
  { path: 'pessoa-cadastro', component: PessoaCadastroComponent}
];
