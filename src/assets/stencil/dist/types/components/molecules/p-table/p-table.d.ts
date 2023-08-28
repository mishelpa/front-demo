export declare class PagedDataset {
  page: number;
  id: number;
  headers: any[];
  action: boolean;
  itemCount: number;
  items: any[];
  pagination: boolean;
  handleSelected(event: CustomEvent): void;
  render(): any;
}
