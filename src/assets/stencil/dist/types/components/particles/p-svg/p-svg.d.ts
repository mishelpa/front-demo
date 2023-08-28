import { Color, Measures } from "../../../globals/types/types";
import { propsIcon } from "./p-svg.interface";
import { IconName } from "./iicon";
export declare class PSvg {
  name: IconName | string;
  viewbox: string;
  width: string;
  height: string;
  color: Color;
  fill: string;
  pointer: boolean;
  measure: Measures;
  preserveAspectRatio: string;
  propsIcon: propsIcon;
  render(): any;
  getClassList(): {
    [x: string]: boolean;
    pointer: boolean;
    PIconSvg: boolean;
  };
  getDimensions(): {
    width: string;
    height: string;
  };
  getSvg(name: IconName | string): string;
}
