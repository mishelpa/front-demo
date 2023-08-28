import { h } from "@stencil/core";
import { IconName } from "./iicon";
import { getIcon } from "./icon-list";
export class PSvg {
  constructor() {
    this.name = IconName.DEFAULT;
    this.viewbox = undefined;
    this.width = '24';
    this.height = '24';
    this.color = 'lightgray';
    this.fill = 'none';
    this.pointer = true;
    this.measure = 'px';
    this.preserveAspectRatio = 'xMinYMin';
  }
  /* istanbul ignore next */
  render() {
    return (h("i", { tabindex: "-1", style: this.getDimensions(), class: this.getClassList(), innerHTML: this.getSvg(this.name) }));
  }
  getClassList() {
    return {
      [`${this.color}`]: true,
      [`pointer`]: this.pointer,
      [`PIconSvg`]: true
    };
  }
  getDimensions() {
    return {
      width: `${this.width}${this.measure}`,
      height: `${this.height}${this.measure}`
    };
  }
  getSvg(name) {
    const icon = getIcon(name);
    return `
        <svg focusable="false" width=${this.width} height=${this.height} fill=${this.fill}
          viewBox='${this.viewbox ? this.viewbox : icon.viewbox}'
          preserveAspectRatio=${this.preserveAspectRatio}
          xmlns="http://www.w3.org/2000/svg">
            ${icon.path}
        </svg>
      `;
  }
  static get is() { return "p-svg"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["p-svg.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["p-svg.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconName | string",
          "resolved": "string",
          "references": {
            "IconName": {
              "location": "import",
              "path": "./iicon",
              "id": "src/components/particles/p-svg/iicon.tsx::IconName"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "IconName.DEFAULT"
      },
      "viewbox": {
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
        "attribute": "viewbox",
        "reflect": false
      },
      "width": {
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
        "attribute": "width",
        "reflect": false,
        "defaultValue": "'24'"
      },
      "height": {
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
        "attribute": "height",
        "reflect": false,
        "defaultValue": "'24'"
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
        "defaultValue": "'lightgray'"
      },
      "fill": {
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
        "attribute": "fill",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "pointer": {
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
        "attribute": "pointer",
        "reflect": false,
        "defaultValue": "true"
      },
      "measure": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Measures",
          "resolved": "\"%\" | \"px\" | \"rem\"",
          "references": {
            "Measures": {
              "location": "import",
              "path": "../../../globals/types/types",
              "id": "src/globals/types/types.ts::Measures"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "measure",
        "reflect": false,
        "defaultValue": "'px'"
      },
      "preserveAspectRatio": {
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
        "attribute": "preserve-aspect-ratio",
        "reflect": false,
        "defaultValue": "'xMinYMin'"
      }
    };
  }
}
//# sourceMappingURL=p-svg.js.map
