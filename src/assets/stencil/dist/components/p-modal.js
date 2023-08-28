import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './p-button2.js';
import { d as defineCustomElement$3 } from './p-font2.js';
import { d as defineCustomElement$2 } from './p-svg2.js';

const pModalCss = ":host{display:block}.modal-wrapper{position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;visibility:hidden;transition:visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;z-index:1}.modal-overlay{background:rgba(0, 0, 0, 0.6);height:100%;width:100%;position:absolute}.modal-wrapper .modal{background:#ffffff;width:480px;height:auto;border-radius:4px;position:absolute;left:50%;transform:translate(-50%, 0px);transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.modal-wrapper .modal .header{padding:16px;font-size:16px;display:flex;flex-direction:column;justify-content:center;border-bottom:1px solid #DEE3ED}.modal-wrapper .modal .header h6{font-size:22px;font-weight:600;margin:0;line-height:1;color:#0F265C}.modal-wrapper .modal .header .close{height:24px;width:100%;display:flex;align-items:center;justify-content:end;border-radius:4px;transition:0.1s ease-in-out}.modal-wrapper .modal .header .close p-svg{cursor:pointer}.modal-wrapper .modal .body{padding:16px;font-size:14px;line-height:21px;max-height:300px;height:auto;overflow-y:auto}.modal-wrapper .modal .footer{padding:16px;display:flex;justify-content:center;align-items:center}.modal-wrapper .modal .footer p-button{width:100%}.isopen{opacity:1;visibility:visible;transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.isopen .modal{transform:translate(-50%, 90px)}@media (max-width: 600px){.modal-wrapper .modal{width:100%;bottom:0;transform:translate(-50%, 100%);opacity:1}.isopen .modal{transform:translate(-50%, 0)}}";

const PModal$1 = /*@__PURE__*/ proxyCustomElement(class PModal extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return pModalCss; }
}, [1, "p-modal", {
    "header": [1537],
    "isopen": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["p-modal", "p-button", "p-font", "p-svg"];
  components.forEach(tagName => { switch (tagName) {
    case "p-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PModal$1);
      }
      break;
    case "p-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "p-font":
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

const PModal = PModal$1;
const defineCustomElement = defineCustomElement$1;

export { PModal, defineCustomElement };

//# sourceMappingURL=p-modal.js.map