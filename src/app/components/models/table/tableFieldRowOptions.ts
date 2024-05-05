import { ImageModel } from '../ImageModel';

export class TableFieldRowOption {
  value: string;
  image?: ImageModel;

  constructor(obj: TableFieldRowOption) {
    this.value = obj.value;
    this.image = obj.image;
  }
}
