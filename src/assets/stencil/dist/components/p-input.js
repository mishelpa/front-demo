import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './p-svg2.js';

const pInputCss = ":host *{box-sizing:border-box;font-family:\"Prelo\";font-size:14px}:host .PInput{position:relative}:host .PInput .input{width:100%;padding:10px 14px;height:48px;color:#6F7D9D;border:1px solid #929292;border-radius:4px;outline:none}:host .PInput .input:disabled,:host .PInput .input input:disabled:hover{background-color:#EAE9EF;border:1px solid #EAE9EF;font-weight:500;color:#919CB1;cursor:auto}:host .PInput .input::placeholder{color:#6F7D9D;font-size:14px;font-weight:400}:host .PInput .icon{position:absolute;right:16px;top:12px}:host .PInput .lock{background-color:#EDEFF2;border:none;color:#212942;pointer-events:none}:host .error-text:not(:disabled).error{border:1px solid #ff3e38}:host .lowercase{text-transform:none !important}:host .input:-ms-input-placeholder,:host .input::-ms-input-placeholder{color:#212942;vertical-align:middle}:host .input::-ms-input-placeholder{color:#212942}";

const PInput$1 = /*@__PURE__*/ proxyCustomElement(class PInput extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inputChange = createEvent(this, "inputChange", 7);
    this.changeValue = createEvent(this, "changeValue", 7);
    this.elementBlur = createEvent(this, "elementBlur", 7);
    this.elementKeydown = createEvent(this, "elementKeydown", 7);
    this.elementFocus = createEvent(this, "elementFocus", 7);
    this.elementKeyEnter = createEvent(this, "elementKeyEnter", 7);
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
  get el() { return this; }
  static get style() { return pInputCss; }
}, [1, "p-input", {
    "placeholder": [1],
    "type": [1],
    "size": [1],
    "name": [1],
    "value": [1025],
    "disable": [1028],
    "lock": [1028],
    "error": [1028],
    "colorerror": [1025],
    "maxlength": [1025],
    "minlength": [1025],
    "lowercase": [1028],
    "focusable": [1028],
    "iseventemmiter": [1028],
    "iconname": [1],
    "iconcolor": [1],
    "iconbgcolor": [1],
    "iconviewbox": [1],
    "touched": [32],
    "position": [32]
  }, [[0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["p-input", "p-svg"];
  components.forEach(tagName => { switch (tagName) {
    case "p-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PInput$1);
      }
      break;
    case "p-svg":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const PInput = PInput$1;
const defineCustomElement = defineCustomElement$1;

export { PInput, defineCustomElement };

//# sourceMappingURL=p-input.js.map