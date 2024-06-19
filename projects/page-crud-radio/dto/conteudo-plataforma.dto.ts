import { PaisModel, TipoConteudoModel } from '../../../src';

export class ConteudoPlataformaDTO {
  id!: number;
  titulo!: string;
  descricao!: string;
  pais!: PaisModel;
  tipoconteudo!: TipoConteudoModel;
  linkspotify?: string;
  linkyoutube?: string;
  linkdeezer?: string;
}
