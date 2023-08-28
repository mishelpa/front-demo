import { h } from "@stencil/core";
export class PFont {
  constructor() {
    this.text = '';
    this.type = 'info';
    this.color = 'black';
    this.weight = 'default';
    this.ellipsis = false;
    this.blocked = false;
  }
  render() {
    return (h("p", { class: this.getClassList(), innerHTML: this.text }));
  }
  getClassList() {
    return {
      ['text']: true,
      [`font-${this.type}`]: true,
      [`color-${this.color}`]: true,
      [`weight-${this.weight}`]: true,
      ['ellipsis']: this.ellipsis,
      ['blocked']: this.blocked
    };
  }
  static get is() { return "p-font"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["p-font.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["p-font.css"]
    };
  }
  static get properties() {
    return {
      "text": {
        "type": "string",
        "mutable": false,
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
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FontType",
          "resolved": "\"info\" | \"name\" | \"input\" | \"label\" | \"menu\" | \"section\" | \"alert\" | \"hero\" | \"name-regular\" | \"card\" | \"input-regular\" | \"notification\" | \"legal\" | \"button_md\" | \"button_sm\" | \"paragraph\" | \"paragraph_todter\" | \"subheader-cell-table\" | \"cell-table\" | \"card-title\" | \"card-subtitle\" | \"child-card-link\" | \"label-bold\"",
          "references": {
            "FontType": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::FontType"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'info'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Color",
          "resolved": "\"error\" | \"none\" | \"primary\" | \"secondary\" | \"green\" | \"white\" | \"black\" | \"gray\" | \"mediumdarkgray\" | \"mediumdarkgray2\" | \"red\" | \"primary-hover\" | \"secondary-hover\" | \"purple\" | \"darkblue\" | \"blue\" | \"aqua\" | \"lightgray\" | \"extra-lightgray\" | \"alert-green\" | \"brown\" | \"current\" | \"green1\"",
          "references": {
            "Color": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::Color"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'black'"
      },
      "weight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FontWeight",
          "resolved": "\"bold\" | \"default\" | \"light\"",
          "references": {
            "FontWeight": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::FontWeight"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "weight",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "ellipsis": {
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
        "attribute": "ellipsis",
        "reflect": false,
        "defaultValue": "false"
      },
      "blocked": {
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
        "attribute": "blocked",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=p-font.js.map
