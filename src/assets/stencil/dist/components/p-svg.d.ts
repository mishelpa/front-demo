import type { Components, JSX } from "../types/components";

interface PSvg extends Components.PSvg, HTMLElement {}
export const PSvg: {
  prototype: PSvg;
  new (): PSvg;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
