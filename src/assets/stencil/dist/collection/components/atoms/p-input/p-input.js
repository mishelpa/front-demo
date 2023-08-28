import { h } from "@stencil/core";
export class PInput {
  constructor() {
    this.placeholder = '';
    this.type = 'text';
    this.size = 'md';
    this.name = 'text';
    this.value = undefined;
    this.disable = false;
    this.lock = false;
    this.error = false;
    this.colorerror = 'error';
    this.maxlength = undefined;
    this.minlength = undefined;
    this.lowercase = false;
    this.focusable = false;
    this.iseventemmiter = true;
    this.iconname = '';
    this.iconcolor = 'none';
    this.iconbgcolor = 'none';
    this.iconviewbox = '';
    this.touched = false;
    this.position = undefined;
  }
  elementHasBlur(ev) {
    this.position = undefined;
    if (this.value && this.value.length > 0) {
      this.value = this.value;
    }
    this.elementBlur.emit(ev);
    ev.preventDefault();
    ev.stopPropagation();
  }
  componentDidUpdate() {
    if (this.position !== undefined) {
      this.el.shadowRoot.querySelector('input').setSelectionRange(this.position, this.position);
    }
    if (this.value && this.value.length > 0) {
      this.value = this.value.replace(/^\s+/, "");
      this.changeValue.emit(this.value);
    }
  }
  componentDidLoad() {
    if (this.focusable) {
      setTimeout(() => {
        this.el.shadowRoot.querySelector('input').focus();
      }, 0);
    }
  }
  render() {
    return (h("div", { class: this.getMainClassList() }, this.iconname &&
      h("p-svg", { class: "icon", name: this.iconname, viewbox: this.iconviewbox, width: "24", height: "24", color: this.disable ? 'lightgray' : 'white' }), h("input", { maxlength: this.maxlength, minlength: this.minlength, type: this.type, name: this.name, id: this.name, placeholder: this.placeholder, onChange: ev => this.change(ev), class: this.getInputClassList(), value: this.value, onBlur: ev => this.elementHasBlur(ev), onFocus: (ev) => this.elementFocus.emit(ev), onKeyDown: (ev) => this.elementKeydown.emit(ev), disabled: this.disable, readonly: this.lock })));
  }
  getMainClassList() {
    return {
      ['PInput']: true,
      [`disable`]: this.disable
    };
  }
  getInputClassList() {
    return {
      [`input`]: true,
      [`error-text ${this.colorerror}`]: this.error,
      [`lowercase`]: this.lowercase,
      [`lock`]: this.lock,
      [`${this.size}`]: true
    };
  }
  handleKeyDown(ev) {
    if (ev.keyCode == 90 && ev.ctrlKey) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (ev.key == "Enter") {
      this.elementKeyEnter.emit(this.value);
    }
  }
  change(_event) {
    this.inputChange.emit(this.value);
  }
  static get is() { return "p-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["p-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["p-input.css"]
    };
  }
  static get properties() {
    return {
      "placeholder": {
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
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Type",
          "resolved": "\"date\" | \"email\" | \"masked\" | \"number\" | \"password\" | \"text\"",
          "references": {
            "Type": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::Type"
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
        "defaultValue": "'text'"
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
        "defaultValue": "'md'"
      },
      "name": {
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
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'text'"
      },
      "value": {
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
        "attribute": "value",
        "reflect": false
      },
      "disable": {
        "type": "boolean",
        "mutable": true,
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
      "lock": {
        "type": "boolean",
        "mutable": true,
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
        "attribute": "lock",
        "reflect": false,
        "defaultValue": "false"
      },
      "error": {
        "type": "boolean",
        "mutable": true,
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
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      },
      "colorerror": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "TypeErrors",
          "resolved": "\"error\" | \"success\" | \"warning\"",
          "references": {
            "TypeErrors": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::TypeErrors"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "colorerror",
        "reflect": false,
        "defaultValue": "'error'"
      },
      "maxlength": {
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
        "attribute": "maxlength",
        "reflect": false
      },
      "minlength": {
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
        "attribute": "minlength",
        "reflect": false
      },
      "lowercase": {
        "type": "boolean",
        "mutable": true,
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
        "attribute": "lowercase",
        "reflect": false,
        "defaultValue": "false"
      },
      "focusable": {
        "type": "boolean",
        "mutable": true,
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
        "attribute": "focusable",
        "reflect": false,
        "defaultValue": "false"
      },
      "iseventemmiter": {
        "type": "boolean",
        "mutable": true,
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
        "attribute": "iseventemmiter",
        "reflect": false,
        "defaultValue": "true"
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
  static get states() {
    return {
      "touched": {},
      "position": {}
    };
  }
  static get events() {
    return [{
        "method": "inputChange",
        "name": "inputChange",
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
        "method": "changeValue",
        "name": "changeValue",
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
        "method": "elementBlur",
        "name": "elementBlur",
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
        "method": "elementKeydown",
        "name": "elementKeydown",
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
        "method": "elementFocus",
        "name": "elementFocus",
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
        "method": "elementKeyEnter",
        "name": "elementKeyEnter",
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
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=p-input.js.map
