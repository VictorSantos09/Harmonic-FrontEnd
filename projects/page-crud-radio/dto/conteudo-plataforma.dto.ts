import { PaisModel, TipoConteudoModel } from '../../../src';

export class ConteudoPlataformaDTO {
  id!: number;
  titulo!: string;
  imagem?: string; 
  descricao!: string;
  pais!: string | PaisModel;
  tipoConteudo!: string | TipoConteudoModel;
  linkspotify?: string;
  linkyoutube?: string;
  linkdeezer?: string;
}

export class ConteudoPlataformaSaveDTO {
  id!: number;
  titulo!: string;
  descricao!: string;
  pais!: string | PaisModel;
  tipoconteudo!: string | TipoConteudoModel;
  linkspotify?: string;
  linkyoutube?: string;
  linkdeezer?: string;
}
