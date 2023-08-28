import type { Components, JSX } from "../types/components";

interface PInput extends Components.PInput, HTMLElement {}
export const PInput: {
  prototype: PInput;
  new (): PInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
