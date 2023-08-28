import type { Components, JSX } from "../types/components";

interface PButton extends Components.PButton, HTMLElement {}
export const PButton: {
  prototype: PButton;
  new (): PButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
