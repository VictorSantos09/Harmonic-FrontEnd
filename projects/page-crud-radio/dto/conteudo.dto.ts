export class ConteudoDto {
  titulo!: string;
  descricao!: string;
  idPais!: number;
  idTipoConteudo!: number;
  plataformas!: string[];
}

export class ConteudoDtoConsulta {
  titulo!: string;
  descricao!: string;
  pais!: string;
  tipoConteudo!: string;
  totalCurtidas!: number;
  totalGosteis!: number;
  totalNaoGosteis!: number;
  id!: number;
  dataCadastro!: Date;
}
