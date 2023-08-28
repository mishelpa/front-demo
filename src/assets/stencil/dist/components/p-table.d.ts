import type { Components, JSX } from "../types/components";

interface PTable extends Components.PTable, HTMLElement {}
export const PTable: {
  prototype: PTable;
  new (): PTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
