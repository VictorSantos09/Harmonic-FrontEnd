import { ImageModel } from './ImageModel';

export class CardModel {
  constructor(
    public contentName: string,
    public description: string,
    public title: string,
    public likes: number,
    public image: ImageModel
  ) {}
}
