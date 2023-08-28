import { EventEmitter } from "../../stencil-public-runtime";
export interface Modelable {
  value: any;
  valueChange?: EventEmitter;
}
