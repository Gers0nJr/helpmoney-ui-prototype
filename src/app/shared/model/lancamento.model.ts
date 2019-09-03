import { CategoriaModel } from './categoria.model';
import { PessoaModel } from './pessoa.model';

export class LancamentoModel {
  codigo: number;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  tipo: string;
  categoria: CategoriaModel;
  pessoa: PessoaModel;
  ativo: boolean;
}
