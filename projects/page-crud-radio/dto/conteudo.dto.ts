export class ConteudoDto {
  id!: number;
  titulo!: string;
  imagem?: string;
  descricao!: string;
  idPais!: number;
  idPlataforma?: number;
  idTipoConteudo!: number;
  urls!: string[];
}

export class ConteudoDtoConsulta {
  titulo!: string;
  iamgem?: string;
  descricao!: string;
  pais!: string;
  tipoConteudo!: string;
  totalCurtidas!: number;
  totalGosteis!: number;
  totalNaoGosteis!: number;
  id!: number;
  dataCadastro!: Date;
}
