import { h } from "@stencil/core";
export class PButton {
  constructor() {
    this.text = 'Default';
    this.color = 'primary';
    this.size = 'normal';
    this.type = 'default';
    this.disable = false;
    this.iconname = '';
    this.iconcolor = 'none';
    this.iconbgcolor = 'none';
    this.iconviewbox = '';
  }
  render() {
    return (h("button", { class: this.mainClass(), onClick: ev => this.click(ev), disabled: this.disable }, (this.type !== 'icon') &&
      this.renderText()));
  }
  renderText() {
    return (h("div", { class: "renderText" }, h("p-font", { type: this.getButtonFont(), text: this.text, color: 'current' }), this.iconname &&
      h("p-svg", { class: "icon", name: this.iconname, viewbox: this.iconviewbox, width: "15", height: "15", color: this.disable ? 'lightgray' : 'white' })));
  }
  mainClass() {
    return {
      [`pButton`]: true,
      [`${this.color}`]: true,
      [`${this.size}`]: true,
      [`${this.type}`]: true,
    };
  }
  getButtonFont() {
    switch (this.size) {
      case 'field-md': return 'button_sm';
      case 'normal': return 'button_md';
      case 'sm': return 'button_sm';
    }
    return `button_${this.size}`;
  }
  click(_event) {
    if (!this.disable) {
      this.buttonClicked.emit();
    }
  }
  static get is() { return "p-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["p-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["p-button.css"]
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
        "defaultValue": "'Default'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ThemeColor",
          "resolved": "\"action\" | \"blue1\" | \"danger\" | \"dark\" | \"green\" | \"none\" | \"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "ThemeColor": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::ThemeColor"
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
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Size",
          "resolved": "\"field-md\" | \"md\" | \"normal\" | \"sm\"",
          "references": {
            "Size": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::Size"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonType",
          "resolved": "\"default\" | \"full\" | \"icon\"",
          "references": {
            "ButtonType": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::ButtonType"
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
        "defaultValue": "'default'"
      },
      "disable": {
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
        "attribute": "disable",
        "reflect": false,
        "defaultValue": "false"
      },
      "iconname": {
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
        "attribute": "iconname",
        "reflect": false,
        "defaultValue": "''"
      },
      "iconcolor": {
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
        "attribute": "iconcolor",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "iconbgcolor": {
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
        "attribute": "iconbgcolor",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "iconviewbox": {
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
        "attribute": "iconviewbox",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get events() {
    return [{
        "method": "buttonClicked",
        "name": "buttonClicked",
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
//# sourceMappingURL=p-button.js.map
