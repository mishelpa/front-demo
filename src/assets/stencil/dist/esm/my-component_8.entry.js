import { r as registerInstance, h, c as createEvent, g as getElement } from './index-3e516ff7.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const pButtonCss = ":host *{box-sizing:border-box;font-family:\"Prelo\"}:host .pButton{line-height:normal;border:0.0625rem solid transparent;cursor:pointer;border-radius:4px;position:relative;}:host .pButton.full{width:100%;min-width:0px}:host .pButton:disabled{cursor:auto;pointer-events:none;box-shadow:none}:host .pButton:active{transform:translateY(0.0625rem)}:host .pButton:focus{outline:none}:host .pButton .renderText{color:currentColor}:host .pButton .renderText p-font{color:currentColor}:host .pButton .icon{margin-left:4px}:host .pButton.primary{background:#091944;border:1px solid #091944;color:#ffffff}:host .pButton.primary:hover,:host .pButton.primary:focus{background:#091944}:host .pButton.primary:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.secondary{background:#FFDD00;border:1px solid #FFDD00;color:#0F265C}:host .pButton.secondary:hover{background:#FFDD00;color:#0F265C;border:none}:host .pButton.secondary:focus{background:#FFDD00;color:#0F265C}:host .pButton.secondary:disabled{background:#edeff2;color:#c1c7d4;border:none}:host .pButton.tertiary{background:#DEE3ED;border:1px solid #DEE3ED;color:#0F265C}:host .pButton.tertiary:hover{background:#DEE3ED;color:#0F265C;border:none}:host .pButton.tertiary:focus{background:#DEE3ED;color:#0F265C}:host .pButton.tertiary:disabled{background:#edeff2;color:#c1c7d4;border:none}:host .pButton.action{background:#D5E4F2;border:1px solid #D5E4F2;color:#2F7ABF}:host .pButton.action:hover{background:#D5E4F2;color:#2F7ABF;border:none}:host .pButton.action:focus{background:#D5E4F2;color:#2F7ABF}:host .pButton.action:disabled{background:#edeff2;color:#c1c7d4;border:none}:host .pButton.dark{background:#565675;color:#FFFFFF}:host .pButton.dark:hover{background:#6F7189;color:#FFFFFF}:host .pButton.dark:focus{background:#6F7189;color:#FFFFFF}:host .pButton.dark:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.none{background:#EEF1F6;color:#212942}:host .pButton.none:hover{background:#F8F9FE;color:#212942}:host .pButton.none:focus{background:#F8F9FE;color:#212942}:host .pButton.none:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.green{background:#5CD393;color:#FFFFFF}:host .pButton.green:hover{background:#6FE1A1;color:#FFFFFF}:host .pButton.green:focus{background:#6FE1A1;color:#FFFFFF}:host .pButton.green:disabled{background:#edeff2;color:#c1c7d4}:host .pButton.danger{background:#ec5073;color:#ffff}:host .pButton.danger:hover{background:#ee798e;color:#ffff}:host .pButton.danger:focus{background:#ee798e;color:#ffff}:host .pButton.danger:disabled{background:#EDEFF2;color:#C1C7D4}:host .pButton.blue1{background:#3C96F7;color:#ffff}:host .pButton.blue1:hover{background:#5DAAF8;color:#ffff}:host .pButton.blue1:focus{background:#5DAAF8;color:#ffff}:host .pButton.blue1:disabled{background:#EDEFF2;color:#C1C7D4}:host .pButton.normal{padding:0 26px;height:48px;min-width:157px}:host .pButton.sm{padding:0 12px;height:32px;min-width:115px}:host .pButton.field-md{padding:0 15px;height:36px;min-width:120px}";

const PButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
PButton.style = pButtonCss;

const pFontCss = ":host p{text-align:center;display:inline}:host .font-section{font-size:32px;line-height:36px}:host .font-name{font-size:24px;line-height:28px;letter-spacing:-0.02em}:host .font-name-regular{font-size:24px;line-height:28px;letter-spacing:-0.02em}:host .font-card{font-size:18px;line-height:20px;letter-spacing:-0.008em}:host .font-card-title{font-size:10px;line-height:16px;letter-spacing:0.02em;text-transform:uppercase}:host .font-card-subtitle{font-size:14px;line-height:22px;letter-spacing:0.02em}:host .font-input{font-size:14px;line-height:22px;letter-spacing:0.02em}:host .font-input-regular{font-size:14px;line-height:18px;letter-spacing:0.02em}:host .font-input-medium{font-size:14px;line-height:18px;letter-spacing:0.02em}:host .font-normal-omnes{font-size:14px;line-height:22px;letter-spacing:0.02em}:host .font-notification{font-size:13px;line-height:15px;letter-spacing:0.02em}:host .font-alert{font-size:13px;line-height:15px;letter-spacing:0.02em}:host .font-label{font-size:10px;line-height:16px;letter-spacing:0.02em}:host .font-menu{font-size:11px;line-height:16px;letter-spacing:0.05em}:host .font-info{font-size:14px;line-height:16px;letter-spacing:0.1em}:host .font-tab{font-size:14px;line-height:16px}:host .font-child-card-title{font-size:14px;line-height:18px;font-weight:600;margin:0 !important;letter-spacing:0.02em}:host .font-child-card-title-regular{font-size:14px;line-height:18px;font-weight:600;margin:0 !important;letter-spacing:0.02em}:host .font-rate-list-title{font-size:18px;line-height:20px;letter-spacing:-0.008em}:host .font-endorsement-rate-list-title{font-weight:600;font-size:14px;line-height:18px;letter-spacing:0.02em}:host .font-child-card-link{font-size:11px;line-height:16px;margin:0 !important;letter-spacing:0.05em}:host .font-legal{font-size:11px;line-height:16px;letter-spacing:0.02em}:host .font-label-bold{font-size:11px;line-height:16px;letter-spacing:0.02em}:host .font-button_md{font-size:14px;font-weight:700;line-height:16.34px;letter-spacing:0.02em}:host .font-button_sm{font-size:12px;font-weight:700;line-height:14.98px;letter-spacing:0.02em}:host .font-paragraph{font-size:14px;line-height:22px}:host .font-paragraph_todter{font-size:14px;line-height:16px}:host .font-subheader-cell-table{font-size:13px;line-height:15px;letter-spacing:0.02em;font-weight:600}:host .font-cell-table{font-size:13px;line-height:15px;letter-spacing:0.02em}:host .font-cell-table-md{font-size:16px;line-height:22px;letter-spacing:0.02em}:host .color-primary{color:#8f9bb3 !important}:host .weight-bold{font-weight:bold}:host .ellipsis{display:inline-block;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;margin:0;text-align:left;margin-top:8px}:host .blocked{display:block !important;text-align:left !important;margin:0px !important}";

const PFont = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
PFont.style = pFontCss;

const pInputCss = ":host *{box-sizing:border-box;font-family:\"Prelo\";font-size:14px}:host .PInput{position:relative}:host .PInput .input{width:100%;padding:10px 14px;height:48px;color:#6F7D9D;border:1px solid #929292;border-radius:4px;outline:none}:host .PInput .input:disabled,:host .PInput .input input:disabled:hover{background-color:#EAE9EF;border:1px solid #EAE9EF;font-weight:500;color:#919CB1;cursor:auto}:host .PInput .input::placeholder{color:#6F7D9D;font-size:14px;font-weight:400}:host .PInput .icon{position:absolute;right:16px;top:12px}:host .PInput .lock{background-color:#EDEFF2;border:none;color:#212942;pointer-events:none}:host .error-text:not(:disabled).error{border:1px solid #ff3e38}:host .lowercase{text-transform:none !important}:host .input:-ms-input-placeholder,:host .input::-ms-input-placeholder{color:#212942;vertical-align:middle}:host .input::-ms-input-placeholder{color:#212942}";

const PInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
PInput.style = pInputCss;

const pModalCss = ":host{display:block}.modal-wrapper{position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;visibility:hidden;transition:visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;z-index:1}.modal-overlay{background:rgba(0, 0, 0, 0.6);height:100%;width:100%;position:absolute}.modal-wrapper .modal{background:#ffffff;width:480px;height:auto;border-radius:4px;position:absolute;left:50%;transform:translate(-50%, 0px);transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.modal-wrapper .modal .header{padding:16px;font-size:16px;display:flex;flex-direction:column;justify-content:center;border-bottom:1px solid #DEE3ED}.modal-wrapper .modal .header h6{font-size:22px;font-weight:600;margin:0;line-height:1;color:#0F265C}.modal-wrapper .modal .header .close{height:24px;width:100%;display:flex;align-items:center;justify-content:end;border-radius:4px;transition:0.1s ease-in-out}.modal-wrapper .modal .header .close p-svg{cursor:pointer}.modal-wrapper .modal .body{padding:16px;font-size:14px;line-height:21px;max-height:300px;height:auto;overflow-y:auto}.modal-wrapper .modal .footer{padding:16px;display:flex;justify-content:center;align-items:center}.modal-wrapper .modal .footer p-button{width:100%}.isopen{opacity:1;visibility:visible;transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.isopen .modal{transform:translate(-50%, 90px)}@media (max-width: 600px){.modal-wrapper .modal{width:100%;bottom:0;transform:translate(-50%, 100%);opacity:1}.isopen .modal{transform:translate(-50%, 0)}}";

const PModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
PModal.style = pModalCss;

const pPaginatorCss = ".sc-p-paginator-h{display:block;font-family:\"Prelo\";border:1px solid #eee;padding:4px;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);background-color:#ffffff;padding:12px}.sc-p-paginator-h>div.sc-p-paginator{display:flex;justify-content:space-between;align-items:center}.sc-p-paginator-h .pages.sc-p-paginator{margin-right:auto;border:1px solid #E9ECF3}.sc-p-paginator-h .pages.sc-p-paginator,.sc-p-paginator-h .pages.sc-p-paginator a.sc-p-paginator{border-radius:2px}.sc-p-paginator-h .counts.sc-p-paginator{margin-right:18px;color:#000000;font-weight:500}.sc-p-paginator-h .size.sc-p-paginator{margin-right:4px}.sc-p-paginator-h a.sc-p-paginator{cursor:pointer;text-decoration:none;display:inline-block;padding:2px 8px;border:1px solid #fafafa;margin-right:4px;transition:all 0.1s linear;user-select:none;color:#0F265C;font-weight:500}.sc-p-paginator-h a.sc-p-paginator:hover{border-color:#aaa}.sc-p-paginator-h a.active.sc-p-paginator{color:#ffffff;border-color:#0F265C;background-color:#0F265C}.sc-p-paginator-h a.disabled.sc-p-paginator{cursor:default;color:#6F7D9D}.sc-p-paginator-h a.disabled.sc-p-paginator:hover{border-color:#fafafa}";

const Paginator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageChanged = createEvent(this, "pageChanged", 7);
    this.sizeChanged = createEvent(this, "sizeChanged", 7);
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
};
Paginator.style = pPaginatorCss;

var IconName;
(function (IconName) {
  IconName["DEFAULT"] = "DEFAULT";
  IconName["DOWNLOAD"] = "DOWNLOAD";
  IconName["UPLOAD"] = "UPLOAD";
  IconName["ARROWUP"] = "ARROWUP";
  IconName["ARROWDOWN"] = "ARROWDOWN";
  IconName["SEARCH"] = "SEARCH";
  IconName["CLOSE"] = "CLOSE";
})(IconName || (IconName = {}));

const ICON_LIST = [
  {
    name: IconName.DOWNLOAD,
    viewbox: '0 0 12 14',
    path: `
    <path d="M9.66658 3.95078H9.56658V4.05078V4.86435V4.96435H9.66658H10.4332V12.0864H1.96667V4.96435H2.73333H2.83333V4.86435V4.05078V3.95078H2.73333H1.43333C1.14463 3.95078 0.9 4.17163 0.9 4.45757V12.5932C0.9 12.8791 1.14463 13.1 1.43333 13.1H10.9666C11.2553 13.1 11.4999 12.8791 11.4999 12.5932V4.45757C11.4999 4.17163 11.2553 3.95078 10.9666 3.95078H9.66658Z" fill="currentColor" stroke="white" stroke-width="0.2"/>
    <path d="M8.40978 5.93414L6.72927 7.51661L6.72927 1.00009L6.72927 0.900091L6.62927 0.900091L5.76782 0.900091L5.66782 0.900091L5.66782 1.00009L5.66782 7.51661L3.9873 5.93414L3.91875 5.86958L3.85019 5.93414L3.24113 6.50767L3.16382 6.58047L3.24113 6.65327L6.12999 9.37358L6.19854 9.43814L6.2671 9.37358L9.15596 6.65327L9.23327 6.58047L9.15596 6.50767L8.54689 5.93414L8.47834 5.86958L8.40978 5.93414Z" fill="currentColor" stroke="white" stroke-width="0.2"/>
    `
  },
  {
    name: IconName.UPLOAD,
    viewbox: '0 0 11 15',
    path: `
    <path d="M8.73802 4.95081H8.63802V5.05081V5.86438V5.96438H8.73802H9.41183V13.0864H1.87381V5.96438H2.54762H2.64762V5.86438V5.05081V4.95081H2.54762H1.3869C1.11315 4.95081 0.9 5.1823 0.9 5.4576V13.5932C0.9 13.8685 1.11315 14.1 1.3869 14.1H9.89871C10.1725 14.1 10.3856 13.8685 10.3856 13.5932V5.4576C10.3856 5.1823 10.1725 4.95081 9.89871 4.95081H8.73802ZM5.15824 2.80345V8.30065V8.40065H5.25824H6.02739H6.12739V8.30065V2.80345L7.60578 4.36265L7.67835 4.43918L7.75091 4.36265L8.29472 3.78912L8.35996 3.72031L8.29472 3.65151L5.71538 0.931195L5.64282 0.854663L5.57025 0.931195L2.99091 3.65151L2.92567 3.72031L2.99091 3.78912L3.53472 4.36265L3.60729 4.43918L3.67985 4.36265L5.15824 2.80345Z" fill="currentColor" stroke="white" stroke-width="0.2"/>
    `
  },
  {
    name: IconName.ARROWDOWN,
    viewbox: '0 0 8 5',
    path: `
    <path d="M1 1L4 4L7 1" stroke="#949CAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>    `
  },
  {
    name: IconName.SEARCH,
    viewbox: '0 0 25 24',
    path: `
    <path d="M16 14H15.21L14.93 13.73C15.91 12.59 16.5 11.11 16.5 9.5C16.5 5.91 13.59 3 10 3C6.41 3 3.5 5.91 3.5 9.5C3.5 13.09 6.41 16 10 16C11.61 16 13.09 15.41 14.23 14.43L14.5 14.71V15.5L19.5 20.49L20.99 19L16 14ZM10 14C7.51 14 5.5 11.99 5.5 9.5C5.5 7.01 7.51 5 10 5C12.49 5 14.5 7.01 14.5 9.5C14.5 11.99 12.49 14 10 14Z" fill="#0F265C"/>`
  },
  {
    name: IconName.CLOSE,
    viewbox: '0 0 14 14',
    path: `<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#0F265C"/>`
  }
];
function getIcon(name) {
  const icons = ICON_LIST.filter(x => x.name == name);
  if (icons.length) {
    return icons[0];
  }
  else {
    return ICON_LIST.filter(x => x.name == IconName.DEFAULT)[0];
  }
}

const pSvgCss = ":host .PIconSvg{outline:none;width:24px;height:24px}:host .PIconSvg svg{vertical-align:middle;margin-bottom:5px}:host .lightgray{color:#C1C7D4}:host .pointer{cursor:pointer}";

const PSvg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
PSvg.style = pSvgCss;

const pTableCss = ".sc-p-table-h{display:block;line-height:18px;font-family:\"Prelo\"}.sc-p-table-h .container.sc-p-table{border:1px solid #eee;border-radius:2px;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);background-color:#ffffff}.sc-p-table-h cdn-paginator.sc-p-table{margin-top:8px}.sc-p-table-h table.sc-p-table{width:100%}.sc-p-table-h table.sc-p-table thead.sc-p-table{border-radius:8px 8px 0px 0px}.sc-p-table-h table.sc-p-table th.sc-p-table,.sc-p-table-h table.sc-p-table td.sc-p-table{text-align:left;padding:4px;height:35px;color:#0F265C;font-size:14px;padding-left:20px;padding-right:20px}.sc-p-table-h table.sc-p-table th.sc-p-table{font-weight:700;border-bottom:1px solid #DEE3ED}.sc-p-table-h table.sc-p-table tr.sc-p-table:hover{background-color:#F4F6F9}.sc-p-table-h table.sc-p-table td.sc-p-table{font-weight:500}";

const PagedDataset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.page = 0;
    this.id = 0;
    this.headers = [];
    this.action = false;
    this.itemCount = 0;
    this.items = [];
    this.pagination = false;
  }
  handleSelected(event) {
    this.page = event.detail;
  }
  render() {
    if (this.items) {
      return (h("div", null, h("div", { class: "container" }, h("table", null, h("thead", null, this.headers.map(header => h("th", { key: header.id }, header.name)), this.action ? h("th", null, "Acci\u00F3n") : ''), h("tbody", null, this.items.map(item => h("tr", { key: item.id }, this.headers.map(header => h("td", { key: item.id }, item[header.id])), this.action ? h("td", null, h("p-button", { text: "Ver producto", color: "action", size: "sm", id: item.id })) : ''))))), this.pagination ? h("p-paginator", { page: this.page, itemCount: this.itemCount }) : ''));
    }
  }
};
PagedDataset.style = pTableCss;

export { MyComponent as my_component, PButton as p_button, PFont as p_font, PInput as p_input, PModal as p_modal, Paginator as p_paginator, PSvg as p_svg, PagedDataset as p_table };

//# sourceMappingURL=my-component_8.entry.js.map