import { ImageModel } from './ImageModel';
import { ResponsiveOptions } from './ResponsiveOptions';

export class CarrouselOptions {
  public responsiveOptions?: any[] | undefined = ResponsiveOptions.options;

  constructor(
    public images: ImageModel[],
    public numVisible: number = 1,
    public numScroll: number = 1,
    public title?: string
  ) {
    this.numVisible = 1;
    this.numScroll = 1;
  }
}
