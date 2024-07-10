exports.ids = [8];
exports.modules = {

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardText; });
/* unused harmony export VCardTitle */
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "h"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
// Styles
 // Extensions

 // Mixins


 // Helpers



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },
    styles() {
      const style = {
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };
      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }
      return style;
    }
  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }
  },
  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;
    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }
    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "m"])(this)]);
  }
}));

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
// Extensions

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].extend({
  name: 'button-group',
  provide() {
    return {
      btnToggle: this
    };
  },
  computed: {
    classes() {
      return _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.computed.classes.call(this);
    }
  },
  methods: {
    // Isn't being passed down through types
    genData: _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.methods.genData
  }
}));

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("61d1dd60", content, true)

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:16px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("596cc2fc", content, true, context)
};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("09e1a384", content, true)

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-bottom-left-radius:inherit;border-top-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-bottom-right-radius:inherit;border-top-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-bottom-left-radius:inherit;border-top-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-height:0;min-width:48px}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_166d98d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(211);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_166d98d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_166d98d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_166d98d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_166d98d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".zoom[data-v-166d98d6]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-166d98d6],.zoom[data-v-166d98d6]{transition:transform .2s}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBtnToggle/VBtnToggle.sass
var VBtnToggle = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/button-group/index.js
var button_group = __webpack_require__(199);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
// Styles
 // Mixins


 // Utilities


/* @vue/component */

/* harmony default export */ var VBtnToggle_VBtnToggle = (Object(mixins["a" /* default */])(button_group["a" /* default */], colorable["a" /* default */]).extend({
  name: 'v-btn-toggle',
  props: {
    backgroundColor: String,
    borderless: Boolean,
    dense: Boolean,
    group: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    tile: Boolean
  },
  computed: {
    classes() {
      return {
        ...button_group["a" /* default */].options.computed.classes.call(this),
        'v-btn-toggle': true,
        'v-btn-toggle--borderless': this.borderless,
        'v-btn-toggle--dense': this.dense,
        'v-btn-toggle--group': this.group,
        'v-btn-toggle--rounded': this.rounded,
        'v-btn-toggle--shaped': this.shaped,
        'v-btn-toggle--tile': this.tile,
        ...this.themeClasses
      };
    }
  },
  methods: {
    genData() {
      const data = this.setTextColor(this.color, {
        ...button_group["a" /* default */].options.methods.genData.call(this)
      });
      if (this.group) return data;
      return this.setBackgroundColor(this.backgroundColor, data);
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(198);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
// Mixins

 // Utilities



/* harmony default export */ var VHover = (Object(mixins["a" /* default */])(delayable["a" /* default */], toggleable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },
    onMouseLeave() {
      this.runDelay('close');
    }
  },
  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(console["c" /* consoleWarn */])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(console["c" /* consoleWarn */])('v-hover should only contain a single element', this);
      return element;
    }
    if (!this.disabled) {
      element.data = element.data || {};
      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }
    return element;
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(187);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Pricing.vue?vue&type=template&id=166d98d6&scoped=true
















var Pricingvue_type_template_id_166d98d6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "py-16",
    class: _vm.$vuetify.theme.dark ? 'black' : 'white'
  }, [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], [_c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "text-center"
  }, [_c('h2', {
    staticClass: "text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4"
  }, [_vm._v("\n              The most affordable pricing\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "my-10 title"
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n              diam nonummy nibh euismod tincidunt ut laoreet dolore magna\n              aliquam erat volutpat.\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_c(VBtnToggle_VBtnToggle, {
    attrs: {
      "active-class": "primary darken-1",
      "borderless": "",
      "mandatory": "",
      "light": "",
      "color": "white"
    },
    model: {
      value: _vm.planDuration,
      callback: function ($$v) {
        _vm.planDuration = $$v;
      },
      expression: "planDuration"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "value": "monthly"
    }
  }, [_vm._v(" Monthly Plan ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "value": "yearly"
    }
  }, [_vm._v(" Yearly Plan ")])], 1)], 1)])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _c(VContainer["a" /* default */], {
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], {
    staticClass: "mx-auto",
    staticStyle: {
      "max-width": "1200px"
    }
  }, _vm._l(_vm.plans, function (plan, ix) {
    return _c(VCol["a" /* default */], {
      key: `plan-${ix}`,
      attrs: {
        "cols": "12",
        "md": "4"
      }
    }, [_c(VHover, {
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          hover
        }) {
          return [_c(VCard["a" /* default */], {
            staticClass: "mx-auto transition-swing",
            class: hover ? 'zoom' : 'notzoom',
            attrs: {
              "elevation": hover ? 24 : plan.elevation,
              "color": plan.color,
              "max-width": "400"
            }
          }, [_c('h3', {
            staticClass: "text-h4 text-center font-weight-black white--text pt-5",
            domProps: {
              "textContent": _vm._s(plan.plan)
            }
          }), _vm._v(" "), _c(components_VCard["c" /* VCardText */], {
            staticClass: "text-center subtitle-1 white--text py-2",
            domProps: {
              "textContent": _vm._s(plan.description)
            }
          }), _vm._v(" "), _c(components_VCard["b" /* VCardSubtitle */], {
            staticClass: "text-h5 font-weight-black text-center white--text pt-0"
          }, [_vm._v(_vm._s(_vm.planDuration === 'monthly' ? plan.monthly : plan.yearly) + "\n              "), _c('span', {
            staticClass: "subtitle-1"
          }, [_vm._v("per " + _vm._s(_vm.planDuration === 'monthly' ? 'month' : 'year'))])]), _vm._v(" "), _c(VList["a" /* default */], [_vm._l(plan.features, function (feature, ik) {
            return _c(VListItem["a" /* default */], {
              key: `feature-${ik}`,
              attrs: {
                "dense": ""
              }
            }, [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], [_vm._v("\n                    " + _vm._s(feature.icon) + "\n                  ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], {
              staticClass: "text-capitalize",
              domProps: {
                "textContent": _vm._s(feature.text)
              }
            })], 1)], 1);
          }), _vm._v(" "), _c(VListItem["a" /* default */], [_c(VBtn["a" /* default */], {
            staticClass: "mx-auto my-3",
            attrs: {
              "color": "primary",
              "large": "",
              "block": "",
              "rounded": ""
            }
          }, [_vm._v("\n                  Buy Now\n                ")])], 1)], 2)], 1)];
        }
      }], null, true)
    })], 1);
  }), 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/Pricing.vue?vue&type=template&id=166d98d6&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Pricing.vue?vue&type=script&lang=js
/* harmony default export */ var Pricingvue_type_script_lang_js = ({
  data() {
    return {
      planDuration: 'monthly',
      plans: [{
        plan: 'Basic',
        elevation: 0,
        color: 'primary darken-1',
        description: 'Best Plan for Small Businesses',
        monthly: '$10',
        yearly: '$100',
        features: [{
          icon: 'mdi-web',
          text: '5 websites'
        }, {
          icon: 'mdi-harddisk',
          text: '10 GB storage'
        }, {
          icon: 'mdi-signal',
          text: '500 GB bandwidth'
        }, {
          icon: 'mdi-account',
          text: '10 email addreses'
        }, {
          icon: 'mdi-domain',
          text: 'free domain with annual plan'
        }, {
          icon: 'mdi-server',
          text: '4X pricessing power'
        }, {
          icon: 'mdi-dns',
          text: 'premium DNS'
        }]
      }, {
        plan: 'Silver',
        elevation: 16,
        color: 'green darken-2',
        description: 'Best Plan for Professional Users',
        monthly: '$40',
        yearly: '$400',
        features: [{
          icon: 'mdi-web',
          text: '5 websites'
        }, {
          icon: 'mdi-harddisk',
          text: '10 GB storage'
        }, {
          icon: 'mdi-signal',
          text: '500 GB bandwidth'
        }, {
          icon: 'mdi-account',
          text: '10 email addreses'
        }, {
          icon: 'mdi-domain',
          text: 'free domain with annual plan'
        }, {
          icon: 'mdi-server',
          text: '4X pricessing power'
        }, {
          icon: 'mdi-dns',
          text: 'premium DNS'
        }]
      }, {
        plan: 'Gold',
        elevation: 0,
        color: 'orange darken-3',
        description: 'Best Plan for Power Users',
        monthly: '$100',
        yearly: '$1000',
        features: [{
          icon: 'mdi-web',
          text: 'unlimited websites'
        }, {
          icon: 'mdi-harddisk',
          text: 'unlimited storage'
        }, {
          icon: 'mdi-signal',
          text: 'unlimited bandwidth'
        }, {
          icon: 'mdi-account',
          text: 'unlimited addreses'
        }, {
          icon: 'mdi-domain',
          text: 'free domain with annual plan'
        }, {
          icon: 'mdi-server',
          text: '4X pricessing power'
        }, {
          icon: 'mdi-dns',
          text: 'premium DNS'
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/sections/Pricing.vue?vue&type=script&lang=js
 /* harmony default export */ var sections_Pricingvue_type_script_lang_js = (Pricingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/sections/Pricing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Pricingvue_type_script_lang_js,
  Pricingvue_type_template_id_166d98d6_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "166d98d6",
  "746aa539"
  
)

/* harmony default export */ var Pricing = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sections-pricing.js.map