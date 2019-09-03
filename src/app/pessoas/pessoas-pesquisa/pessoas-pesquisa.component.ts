import { Component, OnInit } from '@angular/core';
import { PessoasService } from './../pessoas.service';
import { PessoaModel } from '../../shared/model/pessoa.model';

@Component({
  selector: 'hm-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css'],
  providers: [ PessoasService ]
})
export class PessoasPesquisaComponent implements OnInit {

  constructor(private pessoaService: PessoasService) { }

  pessoas: PessoaModel[];

  ngOnInit() {
    this.pessoaService.getPessoas()
    .subscribe(pessoa => { this.pessoas = pessoa;
      console.log('lista de pessoas - ', pessoa);
    });
  }

}
