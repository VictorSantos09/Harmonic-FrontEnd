import { ImageModel } from '../../models';

export class TableColumn {
  sortableColumn: boolean = true;
  name: string;
  isImage?: boolean = false;
  image?: ImageModel | undefined;

  constructor(
    name: string,
    sortableColumn: boolean = true,
    isImage?: boolean,
    image?: ImageModel | undefined
  ) {
    this.name = name;
    this.sortableColumn = sortableColumn ?? true;
    this.isImage = isImage ?? false;
    this.image = image ?? undefined;
  }
}
