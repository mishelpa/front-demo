import type { Components, JSX } from "../types/components";

interface PFont extends Components.PFont, HTMLElement {}
export const PFont: {
  prototype: PFont;
  new (): PFont;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
