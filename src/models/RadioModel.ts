import { TipoConteudoModel } from '../models/TipoConteudoModel';
import { PaisModel } from '../models/PaisModel';
import { FeedbackModel } from '../models/FeedbackModel';
import { Url } from 'url';

export class RadioModel {
  constructor(
    public id?: number,
    public image?: string,
    public titulo?: string,
    public dataCadastro?: Date,
    public descricao?: string,
    public url?: string,
    public tipoConteudo?: TipoConteudoModel,
    public pais?: PaisModel,
    public feedback?: FeedbackModel
  ) {}
}
