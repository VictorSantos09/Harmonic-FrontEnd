export class ConteudoDetalhesDto {
  id!: number;
  titulo!: string;
  descricao!: string;
  tipo!: string;
  pais!: string;
  icon: string | undefined;
  total_curtidas!: number;
  total_gosteis!: number;
  imagem!: string;
  liked!:boolean;
}
