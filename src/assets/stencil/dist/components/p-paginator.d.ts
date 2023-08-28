import type { Components, JSX } from "../types/components";

interface PPaginator extends Components.PPaginator, HTMLElement {}
export const PPaginator: {
  prototype: PPaginator;
  new (): PPaginator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
