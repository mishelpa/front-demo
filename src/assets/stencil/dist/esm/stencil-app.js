import { p as promiseResolve, b as bootstrapLazy } from './index-3e516ff7.js';
export { s as setNonce } from './index-3e516ff7.js';

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component_8",[[2,"p-table",{"headers":[16],"action":[4],"itemCount":[2,"item-count"],"items":[16],"pagination":[4]},[[0,"pageChanged","handleSelected"]]],[1,"p-modal",{"header":[1537],"isopen":[4]}],[1,"p-input",{"placeholder":[1],"type":[1],"size":[1],"name":[1],"value":[1025],"disable":[1028],"lock":[1028],"error":[1028],"colorerror":[1025],"maxlength":[1025],"minlength":[1025],"lowercase":[1028],"focusable":[1028],"iseventemmiter":[1028],"iconname":[1],"iconcolor":[1],"iconbgcolor":[1],"iconviewbox":[1],"touched":[32],"position":[32]},[[0,"keydown","handleKeyDown"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[2,"p-paginator",{"page":[2],"pageSize":[2,"page-size"],"itemCount":[2,"item-count"]}],[1,"p-button",{"text":[1],"color":[1],"size":[1],"type":[1],"disable":[4],"iconname":[1],"iconcolor":[1],"iconbgcolor":[1],"iconviewbox":[1]}],[1,"p-font",{"text":[1],"type":[1],"color":[1],"weight":[1],"ellipsis":[4],"blocked":[4]}],[1,"p-svg",{"name":[1],"viewbox":[1],"width":[1],"height":[1],"color":[1],"fill":[1],"pointer":[4],"measure":[1],"preserveAspectRatio":[1,"preserve-aspect-ratio"]}]]]], options);
});

//# sourceMappingURL=stencil-app.js.map