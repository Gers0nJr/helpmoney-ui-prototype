import { Component, OnInit } from '@angular/core';
import { LancamentoModel } from '../../shared/model/lancamento.model';
import { LancamentosService } from './../lancamentos.service';

@Component({
  selector: 'hm-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
  providers: [ LancamentosService ]
})
export class LancamentosPesquisaComponent implements OnInit {

  constructor(private lancamentosService: LancamentosService) { }

  lancamentos: LancamentoModel[];

  ngOnInit() {
    this.lancamentosService.pesquisaLancamentos()
    .subscribe(response => { this.lancamentos = response['content'];
      console.log('lista de lancamentos - ', response['content']);
    });
  }
}
