export class ConteudoDto {
  titulo!: string;
  imagem?: string;
  descricao!: string;
  idPais!: number;
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
