import { EventEmitter } from '../../../stencil-public-runtime';
import { ButtonType, Color, Size, ThemeColor } from '../../../globals/types/types';
export declare class PButton {
  buttonClicked: EventEmitter;
  text: string;
  color: ThemeColor;
  size: Size;
  type: ButtonType;
  disable: boolean;
  iconname: string;
  iconcolor: Color;
  iconbgcolor: Color;
  iconviewbox: string;
  render(): any;
  renderText(): any;
  mainClass(): {
    [x: string]: boolean;
    pButton: boolean;
  };
  private getButtonFont;
  click(_event: MouseEvent): void;
}
