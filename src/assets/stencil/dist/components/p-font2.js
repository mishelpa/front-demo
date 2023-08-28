import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const pFontCss = ":host p{text-align:center;display:inline}:host .font-section{font-size:32px;line-height:36px}:host .font-name{font-size:24px;line-height:28px;letter-spacing:-0.02em}:host .font-name-regular{font-size:24px;line-height:28px;letter-spacing:-0.02em}:host .font-card{font-size:18px;line-height:20px;letter-spacing:-0.008em}:host .font-card-title{font-size:10px;line-height:16px;letter-spacing:0.02em;text-transform:uppercase}:host .font-card-subtitle{font-size:14px;line-height:22px;letter-spacing:0.02em}:host .font-input{font-size:14px;line-height:22px;letter-spacing:0.02em}:host .font-input-regular{font-size:14px;line-height:18px;letter-spacing:0.02em}:host .font-input-medium{font-size:14px;line-height:18px;letter-spacing:0.02em}:host .font-normal-omnes{font-size:14px;line-height:22px;letter-spacing:0.02em}:host .font-notification{font-size:13px;line-height:15px;letter-spacing:0.02em}:host .font-alert{font-size:13px;line-height:15px;letter-spacing:0.02em}:host .font-label{font-size:10px;line-height:16px;letter-spacing:0.02em}:host .font-menu{font-size:11px;line-height:16px;letter-spacing:0.05em}:host .font-info{font-size:14px;line-height:16px;letter-spacing:0.1em}:host .font-tab{font-size:14px;line-height:16px}:host .font-child-card-title{font-size:14px;line-height:18px;font-weight:600;margin:0 !important;letter-spacing:0.02em}:host .font-child-card-title-regular{font-size:14px;line-height:18px;font-weight:600;margin:0 !important;letter-spacing:0.02em}:host .font-rate-list-title{font-size:18px;line-height:20px;letter-spacing:-0.008em}:host .font-endorsement-rate-list-title{font-weight:600;font-size:14px;line-height:18px;letter-spacing:0.02em}:host .font-child-card-link{font-size:11px;line-height:16px;margin:0 !important;letter-spacing:0.05em}:host .font-legal{font-size:11px;line-height:16px;letter-spacing:0.02em}:host .font-label-bold{font-size:11px;line-height:16px;letter-spacing:0.02em}:host .font-button_md{font-size:14px;font-weight:700;line-height:16.34px;letter-spacing:0.02em}:host .font-button_sm{font-size:12px;font-weight:700;line-height:14.98px;letter-spacing:0.02em}:host .font-paragraph{font-size:14px;line-height:22px}:host .font-paragraph_todter{font-size:14px;line-height:16px}:host .font-subheader-cell-table{font-size:13px;line-height:15px;letter-spacing:0.02em;font-weight:600}:host .font-cell-table{font-size:13px;line-height:15px;letter-spacing:0.02em}:host .font-cell-table-md{font-size:16px;line-height:22px;letter-spacing:0.02em}:host .color-primary{color:#8f9bb3 !important}:host .weight-bold{font-weight:bold}:host .ellipsis{display:inline-block;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;margin:0;text-align:left;margin-top:8px}:host .blocked{display:block !important;text-align:left !important;margin:0px !important}";

const PFont = /*@__PURE__*/ proxyCustomElement(class PFont extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return pFontCss; }
}, [1, "p-font", {
    "text": [1],
    "type": [1],
    "color": [1],
    "weight": [1],
    "ellipsis": [4],
    "blocked": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["p-font"];
  components.forEach(tagName => { switch (tagName) {
    case "p-font":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PFont);
      }
      break;
  } });
}

export { PFont as P, defineCustomElement as d };

//# sourceMappingURL=p-font2.js.map