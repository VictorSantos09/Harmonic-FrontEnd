import { PaisModel, TipoConteudoModel } from "../../../src";

export class ConteudoPlataformaDTO {
  titulo!: string;
  descricao!: string;
  pais!: PaisModel;
  tipoconteudo!: TipoConteudoModel;
  linkspotify?: string;
  linkyoutube?: string;
  linkdeezer?: string;
}
