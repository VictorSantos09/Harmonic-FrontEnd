import { ImageModel } from './ImageModel';
import { ResponsiveOptions } from './ResponsiveOptions';

export class CarrouselOptions {
  public responsiveOptions?: any[] | undefined = ResponsiveOptions.options;

  constructor(
    public images: ImageModel[],
    public numVisible: number,
    public numScroll: number,
    public title?: string
  ) {
    this.numVisible = 3;
    this.numScroll = 3;
  }
}
