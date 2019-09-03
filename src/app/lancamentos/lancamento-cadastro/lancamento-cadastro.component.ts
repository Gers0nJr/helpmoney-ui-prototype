import { LancamentoModel } from './../../shared/model/lancamento.model';
import { PessoaModel } from '../../shared/model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { LancamentosService } from './../lancamentos.service';
import { CategoriaModel } from '../../shared/model/categoria.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'hm-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css'],
  providers: [ LancamentosService ]
})
export class LancamentoCadastroComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(
    private lancamentosService: LancamentosService,
    private formBuilder: FormBuilder,
    private localeService: BsLocaleService) {
      localeService.use('pt-br');
      this.datePickerConfig = Object.assign({}, {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'YYYY-MM-DD'
      });
  }

  formularioLancamento: FormGroup;

  categorias: CategoriaModel[];
  pessoas: PessoaModel[];
  novoLancamento: LancamentoModel;

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  ngOnInit() {

    this.formularioLancamento = this.formBuilder.group({
      tipo: [ 'RECEITA', Validators.required ],
      dataVencimento: [ new Date(), Validators.required ],
      dataPagamento: [],
      descricao: [ '', [Validators.required, Validators.minLength(5)] ],
      valor: [ '', Validators.required ],
      pessoa: this.formBuilder.group({
        codigo: [ '', Validators.required ],
        nome: []
      }),
      categoria: this.formBuilder.group({
        codigo: ['', Validators.required],
        nome: []
      }),
      observacao: []
    });

    this.lancamentosService.carregarCategoriaDropDown()
    .subscribe(categoria => {this.categorias = categoria;
      console.log('selectOption de categorias - ', categoria);
    });

    this.lancamentosService.carregarPessoaDropDown()
    .subscribe(pessoa => { this.pessoas = pessoa;
      console.log('selectOption de pessoas - ', pessoa);
    });
  }

  adicionarLancamento(): void {
    this.lancamentosService.cadastraLancamento(this.formularioLancamento.value)
    .subscribe(lancamento => { this.formularioLancamento.reset();
    });
  }
}
