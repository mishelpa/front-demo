import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

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

const PSvg = /*@__PURE__*/ proxyCustomElement(class PSvg extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return pSvgCss; }
}, [1, "p-svg", {
    "name": [1],
    "viewbox": [1],
    "width": [1],
    "height": [1],
    "color": [1],
    "fill": [1],
    "pointer": [4],
    "measure": [1],
    "preserveAspectRatio": [1, "preserve-aspect-ratio"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["p-svg"];
  components.forEach(tagName => { switch (tagName) {
    case "p-svg":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PSvg);
      }
      break;
  } });
}

export { PSvg as P, defineCustomElement as d };

//# sourceMappingURL=p-svg2.js.map