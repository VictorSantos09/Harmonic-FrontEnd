export class ConteudosCurtidosModel {
  constructor(
    public id: number,
    public titulo: string,
    public imagem: string,
    public pais: string,
    public icon: string,
    public tipoConteudo: string,
    public idConteudo: number
  ) {}
}
