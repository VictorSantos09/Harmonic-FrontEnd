export class ImageModel {
  width?: number = 25;
  height?: number = 25;
  constructor(
    public url: string,
    public alt?: string,
    width?: number,
    height?: number
  ) {
    this.width = width ?? 25;
    this.height = height ?? 25;
  }
}
