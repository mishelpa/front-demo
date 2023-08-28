import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './p-font2.js';
import { d as defineCustomElement$1 } from './p-svg2.js';

const pButtonCss = ":host *{box-sizing:border-box;font-family:\"Prelo\"}:host .pButton{line-height:normal;border:0.0625rem solid transparent;cursor:pointer;border-radius:4px;position:relative;}:host .pButton.full{width:100%;min-width:0px}:host .pButton:disabled{cursor:auto;pointer-events:none;box-shadow:none}:host .pButton:active{transform:translateY(0.0625rem)}:host .pButton:focus{outline:none}:host .pButton .renderText{color:currentColor}:host .pButton .renderText p-font{color:currentColor}:host .pButton .icon{margin-left:4px}:host .pButton.primary{background:#091944;border:1px solid #091944;color:#ffffff}:host .pButton.primary:hover,:host .pButton.primary:focus{background:#091944}:host .pButton.primary:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.secondary{background:#FFDD00;border:1px solid #FFDD00;color:#0F265C}:host .pButton.secondary:hover{background:#FFDD00;color:#0F265C;border:none}:host .pButton.secondary:focus{background:#FFDD00;color:#0F265C}:host .pButton.secondary:disabled{background:#edeff2;color:#c1c7d4;border:none}:host .pButton.tertiary{background:#DEE3ED;border:1px solid #DEE3ED;color:#0F265C}:host .pButton.tertiary:hover{background:#DEE3ED;color:#0F265C;border:none}:host .pButton.tertiary:focus{background:#DEE3ED;color:#0F265C}:host .pButton.tertiary:disabled{background:#edeff2;color:#c1c7d4;border:none}:host .pButton.action{background:#D5E4F2;border:1px solid #D5E4F2;color:#2F7ABF}:host .pButton.action:hover{background:#D5E4F2;color:#2F7ABF;border:none}:host .pButton.action:focus{background:#D5E4F2;color:#2F7ABF}:host .pButton.action:disabled{background:#edeff2;color:#c1c7d4;border:none}:host .pButton.dark{background:#565675;color:#FFFFFF}:host .pButton.dark:hover{background:#6F7189;color:#FFFFFF}:host .pButton.dark:focus{background:#6F7189;color:#FFFFFF}:host .pButton.dark:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.none{background:#EEF1F6;color:#212942}:host .pButton.none:hover{background:#F8F9FE;color:#212942}:host .pButton.none:focus{background:#F8F9FE;color:#212942}:host .pButton.none:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.green{background:#5CD393;color:#FFFFFF}:host .pButton.green:hover{background:#6FE1A1;color:#FFFFFF}:host .pButton.green:focus{background:#6FE1A1;color:#FFFFFF}:host .pButton.green:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.danger{background:#ec5073;color:#ffff}:host .pButton.danger:hover{background:#ee798e;color:#ffff}:host .pButton.danger:focus{background:#ee798e;color:#ffff}:host .pButton.danger:disabled{background:#EDEFF2;color:#C1C7D4}:host .pButton.blue1{background:#3C96F7;color:#ffff}:host .pButton.blue1:hover{background:#5DAAF8;color:#ffff}:host .pButton.blue1:focus{background:#5DAAF8;color:#ffff}:host .pButton.blue1:disabled{background:#EDEFF2;color:#C1C7D4}:host .pButton.normal{padding:0 26px;height:48px;min-width:157px}:host .pButton.sm{padding:0 12px;height:32px;min-width:115px}:host .pButton.field-md{padding:0 15px;height:36px;min-width:120px}";

const PButton = /*@__PURE__*/ proxyCustomElement(class PButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.buttonClicked = createEvent(this, "buttonClicked", 7);
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
  static get style() { return pButtonCss; }
}, [1, "p-button", {
    "text": [1],
    "color": [1],
    "size": [1],
    "type": [1],
    "disable": [4],
    "iconname": [1],
    "iconcolor": [1],
    "iconbgcolor": [1],
    "iconviewbox": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["p-button", "p-font", "p-svg"];
  components.forEach(tagName => { switch (tagName) {
    case "p-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PButton);
      }
      break;
    case "p-font":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "p-svg":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { PButton as P, defineCustomElement as d };

//# sourceMappingURL=p-button2.js.map