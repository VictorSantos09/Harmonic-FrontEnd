import { FeedbackModel } from '../models/FeedbackModel';
import { PaisModel } from '../models/PaisModel';
import { TipoConteudoModel } from '../models/TipoConteudoModel';

export class RadioModel {
  public image!: string;
  public titulo!: string;
  public dataCadastro!: Date;
  public descricao!: string;
  public url!: string;
  public tipoConteudo!: TipoConteudoModel;
  public pais!: PaisModel;
  public feedback!: FeedbackModel;
  public id?: number;

  constructor() {}
}
