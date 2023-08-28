import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './p-button2.js';
import { d as defineCustomElement$4 } from './p-font2.js';
import { d as defineCustomElement$3 } from './p-paginator2.js';
import { d as defineCustomElement$2 } from './p-svg2.js';

const pTableCss = ".sc-p-table-h{display:block;line-height:18px;font-family:\"Prelo\"}.sc-p-table-h .container.sc-p-table{border:1px solid #eee;border-radius:2px;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);background-color:#ffffff}.sc-p-table-h cdn-paginator.sc-p-table{margin-top:8px}.sc-p-table-h table.sc-p-table{width:100%}.sc-p-table-h table.sc-p-table thead.sc-p-table{border-radius:8px 8px 0px 0px}.sc-p-table-h table.sc-p-table th.sc-p-table,.sc-p-table-h table.sc-p-table td.sc-p-table{text-align:left;padding:4px;height:35px;color:#0F265C;font-size:14px;padding-left:20px;padding-right:20px}.sc-p-table-h table.sc-p-table th.sc-p-table{font-weight:700;border-bottom:1px solid #DEE3ED}.sc-p-table-h table.sc-p-table tr.sc-p-table:hover{background-color:#F4F6F9}.sc-p-table-h table.sc-p-table td.sc-p-table{font-weight:500}";

const PagedDataset = /*@__PURE__*/ proxyCustomElement(class PagedDataset extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.page = 0;
    this.id = 0;
    this.headers = [];
    this.action = false;
    this.itemCount = 0;
    this.items = [];
    this.pagination = false;
  }
  handleSelected(event) {
    this.page = event.detail;
  }
  render() {
    if (this.items) {
      return (h("div", null, h("div", { class: "container" }, h("table", null, h("thead", null, this.headers.map(header => h("th", { key: header.id }, header.name)), this.action ? h("th", null, "Acci\u00F3n") : ''), h("tbody", null, this.items.map(item => h("tr", { key: item.id }, this.headers.map(header => h("td", { key: item.id }, item[header.id])), this.action ? h("td", null, h("p-button", { text: "Ver producto", color: "action", size: "sm", id: item.id })) : ''))))), this.pagination ? h("p-paginator", { page: this.page, itemCount: this.itemCount }) : ''));
    }
  }
  static get style() { return pTableCss; }
}, [2, "p-table", {
    "headers": [16],
    "action": [4],
    "itemCount": [2, "item-count"],
    "items": [16],
    "pagination": [4]
  }, [[0, "pageChanged", "handleSelected"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["p-table", "p-button", "p-font", "p-paginator", "p-svg"];
  components.forEach(tagName => { switch (tagName) {
    case "p-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PagedDataset);
      }
      break;
    case "p-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "p-font":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "p-paginator":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "p-svg":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const PTable = PagedDataset;
const defineCustomElement = defineCustomElement$1;

export { PTable, defineCustomElement };

//# sourceMappingURL=p-table.js.map