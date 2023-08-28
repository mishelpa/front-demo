import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const pPaginatorCss = ".sc-p-paginator-h{display:block;font-family:\"Prelo\";border:1px solid #eee;padding:4px;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);background-color:#ffffff;padding:12px}.sc-p-paginator-h>div.sc-p-paginator{display:flex;justify-content:space-between;align-items:center}.sc-p-paginator-h .pages.sc-p-paginator{margin-right:auto;border:1px solid #E9ECF3}.sc-p-paginator-h .pages.sc-p-paginator,.sc-p-paginator-h .pages.sc-p-paginator a.sc-p-paginator{border-radius:2px}.sc-p-paginator-h .counts.sc-p-paginator{margin-right:18px;color:#000000;font-weight:500}.sc-p-paginator-h .size.sc-p-paginator{margin-right:4px}.sc-p-paginator-h a.sc-p-paginator{cursor:pointer;text-decoration:none;display:inline-block;padding:2px 8px;border:1px solid #fafafa;margin-right:4px;transition:all 0.1s linear;user-select:none;color:#0F265C;font-weight:500}.sc-p-paginator-h a.sc-p-paginator:hover{border-color:#aaa}.sc-p-paginator-h a.active.sc-p-paginator{color:#ffffff;border-color:#0F265C;background-color:#0F265C}.sc-p-paginator-h a.disabled.sc-p-paginator{cursor:default;color:#6F7D9D}.sc-p-paginator-h a.disabled.sc-p-paginator:hover{border-color:#fafafa}";

const Paginator = /*@__PURE__*/ proxyCustomElement(class Paginator extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.pageChanged = createEvent(this, "pageChanged", 7);
    this.sizeChanged = createEvent(this, "sizeChanged", 7);
    this.pageCount = 0;
    this.page = 0;
    this.pageSize = 10;
    this.itemCount = undefined;
  }
  handlePrevious(event) {
    if (this.page !== 0) {
      this.handleSelect(event, this.page - 1);
    }
  }
  handleNext(event) {
    if (this.page !== this.pageCount - 1) {
      this.handleSelect(event, this.page + 1);
    }
  }
  handleSelect(event, index) {
    event.preventDefault();
    this.pageChanged.emit(index);
  }
  render() {
    if (this.itemCount) {
      let pages = [];
      const start = this.page * this.pageSize + 1;
      const end = this.page * this.pageSize + this.pageSize;
      for (let i = 0; i < this.itemCount / this.pageSize; i++) {
        pages.push(i);
      }
      this.pageCount = pages.length;
      return (h("div", null, h("span", { class: "pages" }, h("span", null, h("a", { class: this.page === 0 ? 'disabled' : '', onClick: event => this.handlePrevious(event) }, "\u276E   Anterior")), h("span", null, pages.map(index => h("a", { class: this.page === index ? 'active' : '', onClick: event => this.handleSelect(event, index) }, index + 1))), h("span", null, h("a", { class: this.page === pages.length - 1 ? 'disabled' : '', onClick: event => this.handleNext(event) }, "Pr\u00F3ximo   \u276F"))), h("span", { class: "counts" }, start, " - ", this.page === pages[pages.length - 1] ? this.itemCount : end, " de ", this.itemCount)));
    }
  }
  static get style() { return pPaginatorCss; }
}, [2, "p-paginator", {
    "page": [2],
    "pageSize": [2, "page-size"],
    "itemCount": [2, "item-count"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["p-paginator"];
  components.forEach(tagName => { switch (tagName) {
    case "p-paginator":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Paginator);
      }
      break;
  } });
}

export { Paginator as P, defineCustomElement as d };

//# sourceMappingURL=p-paginator2.js.map