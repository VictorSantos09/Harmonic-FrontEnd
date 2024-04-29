import { TipoConteudoModel } from '../models/TipoConteudoModel';
import { PaisModel } from '../models/PaisModel';
import { FeedbackModel } from '../models/FeedbackModel';

export class RadioModel {
  constructor(
    public id: number,
    public titulo: number,
    public dataCadastro: Date,
    public descricao: string,
    public tipoConteudo: TipoConteudoModel,
    public pais: PaisModel,
    public feedback: FeedbackModel
  ) {}
}
