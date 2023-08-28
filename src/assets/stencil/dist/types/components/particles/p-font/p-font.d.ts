import { Color, FontType, FontWeight } from '../../../globals/types/types';
export declare class PFont {
  text: string;
  type: FontType;
  color: Color;
  weight: FontWeight;
  ellipsis: boolean;
  blocked: boolean;
  render(): any;
  getClassList(): {
    [x: string]: boolean;
    text: boolean;
    ellipsis: boolean;
    blocked: boolean;
  };
}
