import { h } from "@stencil/core";
export class PModal {
  constructor() {
    // Functions
    this.handleCancel = () => {
      this.isopen = false;
    };
    this.header = undefined;
    this.isopen = undefined;
  }
  render() {
    return (h("div", { class: this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper' }, h("div", { class: "modal-overlay", onClick: this.handleCancel }), h("div", { class: "modal" }, h("div", { class: "header" }, h("div", { class: "close" }, h("p-svg", { class: "icon", onClick: this.handleCancel, name: 'CLOSE', width: "14", height: "14", color: 'black' })), h("h6", null, this.header)), h("div", { class: "body" }, h("slot", null)), h("div", { class: "footer" }, h("p-button", { type: 'full', onClick: this.handleCancel, text: 'Entendido', color: 'secondary' })))));
  }
  static get is() { return "p-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["p-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["p-modal.css"]
    };
  }
  static get properties() {
    return {
      "header": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "header",
        "reflect": true
      },
      "isopen": {
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
        "attribute": "isopen",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=p-modal.js.map
