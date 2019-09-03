import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LancamentoModel } from '../shared/model/lancamento.model';
import { CategoriaModel } from '../shared/model/categoria.model';
import { PessoaModel } from '../shared/model/pessoa.model';
import { Lancamento } from './../shared/model/model';

@Injectable()
export class LancamentosService {

  constructor(private http: HttpClient) {}

  public lancamentosURI = 'http://localhost:8081/lancamentos';
  public novoLancamentosURI = 'http://localhost:8081/lancamentos';
  public categoriaURI = 'http://localhost:8081/categorias';
  public pessoaURI = 'http://localhost:8081/pessoas';

  pesquisaLancamentos() {
    return this.http.get<LancamentoModel[]>(this.lancamentosURI);
  }

  carregarCategoriaDropDown() {
    return this.http.get<CategoriaModel[]>(this.categoriaURI);
  }

  carregarPessoaDropDown() {
    return this.http.get<PessoaModel[]>(this.pessoaURI);
  }

  cadastraLancamento(lancamentos: Lancamento) {
    console.log('salvou ', lancamentos);
    return this.http.post(this.novoLancamentosURI, lancamentos);
  }

}
