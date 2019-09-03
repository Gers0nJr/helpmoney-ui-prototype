import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaModel } from '../shared/model/pessoa.model';

@Injectable()
export class PessoasService {

  constructor(private http: HttpClient) { }

  pessoasURI = 'http://localhost:8081/pessoas';

  getPessoas() {
    return this.http.get<PessoaModel[]>(this.pessoasURI);
  }
}
