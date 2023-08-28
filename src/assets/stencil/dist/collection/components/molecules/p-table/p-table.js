import { h } from "@stencil/core";
export class PagedDataset {
  constructor() {
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
  static get is() { return "p-table"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["p-table.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["p-table.css"]
    };
  }
  static get properties() {
    return {
      "headers": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      },
      "action": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "action",
        "reflect": false,
        "defaultValue": "false"
      },
      "itemCount": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "item-count",
        "reflect": false,
        "defaultValue": "0"
      },
      "items": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      },
      "pagination": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "pagination",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get listeners() {
    return [{
        "name": "pageChanged",
        "method": "handleSelected",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=p-table.js.map
