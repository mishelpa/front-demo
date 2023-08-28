import type { Components, JSX } from "../types/components";

interface PModal extends Components.PModal, HTMLElement {}
export const PModal: {
  prototype: PModal;
  new (): PModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
