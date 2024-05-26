export class ConteudoPlataformaDetalhesDto {
  constructor(
    public datacadastro: Date,
    public plataforma: string,
    public pais: string,
    public link: string
  ) {}
}
