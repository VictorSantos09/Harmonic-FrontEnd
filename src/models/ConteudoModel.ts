import { ImageModel } from '../app';
import { FeedbackModel } from './FeedbackModel';
import { PaisModel } from './PaisModel';
import { TipoConteudoModel } from './TipoConteudoModel';

export class ConteudoModel {
  public imagem!: string;
  public titulo!: string;
  public dataCadastro!: Date;
  public descricao!: string;
  public url!: string;
  public tipoConteudo!: TipoConteudoModel;
  public pais!: PaisModel;
  public feedback!: FeedbackModel;
  public id!: number;

  constructor() {}
}
