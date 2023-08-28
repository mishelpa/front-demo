import { h } from "@stencil/core";
export class Paginator {
  constructor() {
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
  static get is() { return "p-paginator"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["p-paginator.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["p-paginator.css"]
    };
  }
  static get properties() {
    return {
      "page": {
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
        "attribute": "page",
        "reflect": false,
        "defaultValue": "0"
      },
      "pageSize": {
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
        "attribute": "page-size",
        "reflect": false,
        "defaultValue": "10"
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
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "pageChanged",
        "name": "pageChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "sizeChanged",
        "name": "sizeChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=p-paginator.js.map
