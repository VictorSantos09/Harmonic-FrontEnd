import { ImageModel } from './ImageModel';
import { ResponsiveOptions } from './ResponsiveOptions';

export class CarrouselOptions {
  public responsiveOptions?: any[] | undefined = ResponsiveOptions.options;

  constructor(public images?: ImageModel[], public title?: string) {}
}
