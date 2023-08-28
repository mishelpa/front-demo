import { EventEmitter } from '../../../stencil-public-runtime';
import { Modelable } from '../../../globals/interfaces/modelable.interface';
import { Type, Size, TypeErrors, Color } from '../../../globals/types/types';
export declare class PInput implements Modelable {
  el: HTMLElement;
  placeholder: string;
  type: Type;
  size: Size;
  name: string;
  value: string;
  disable: boolean;
  lock: boolean;
  error: boolean;
  colorerror: TypeErrors;
  maxlength: string;
  minlength: string;
  lowercase: boolean;
  focusable: boolean;
  iseventemmiter: boolean;
  iconname: string;
  iconcolor: Color;
  iconbgcolor: Color;
  iconviewbox: string;
  inputChange: EventEmitter;
  changeValue: EventEmitter;
  elementBlur: EventEmitter;
  elementKeydown: EventEmitter;
  elementFocus: EventEmitter;
  elementKeyEnter: EventEmitter;
  touched: boolean;
  position: number;
  elementHasBlur(ev: FocusEvent): void;
  componentDidUpdate(): void;
  componentDidLoad(): void;
  render(): any;
  getMainClassList(): {
    PInput: boolean;
    disable: boolean;
  };
  getInputClassList(): {
    [x: string]: boolean;
    input: boolean;
    lowercase: boolean;
    lock: boolean;
  };
  handleKeyDown(ev: KeyboardEvent): void;
  change(_event: any): void;
}
