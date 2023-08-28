import { EventEmitter } from '../../../stencil-public-runtime';
export declare class Paginator {
  page: number;
  pageSize: number;
  itemCount: number;
  pageChanged: EventEmitter;
  sizeChanged: EventEmitter;
  private pageCount;
  private handlePrevious;
  private handleNext;
  private handleSelect;
  render(): any;
}
