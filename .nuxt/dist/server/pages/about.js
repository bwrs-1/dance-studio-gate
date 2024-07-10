exports.ids = [12,6,9,11];
exports.modules = {

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4c04c98b", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_id_29c877ac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_id_29c877ac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_id_29c877ac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_id_29c877ac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_id_29c877ac_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gradient-fill .v-responsive__content{background:#000;background:linear-gradient(90deg,rgba(3,12,41,.7),rgba(5,11,31,.7))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(187);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/HeroAlt.vue?vue&type=template&id=29c877ac





var HeroAltvue_type_template_id_29c877ac_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "hero"
    }
  }, _vm._l(_vm.heroAlt, function (item, i) {
    return _c(VImg["a" /* default */], {
      key: i,
      staticClass: "gradient-fill",
      attrs: {
        "width": "100%",
        "height": "30vh",
        "src": item.src,
        "dark": ""
      }
    }, [_c(VContainer["a" /* default */], {
      attrs: {
        "fill-height": ""
      }
    }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], [_c('h1', {
      staticClass: "text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"
    }, [_vm._v("\n            " + _vm._s(item.heading.toUpperCase()) + "\n          ")])])], 1)], 1)], 1);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/HeroAlt.vue?vue&type=template&id=29c877ac

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/HeroAlt.vue?vue&type=script&lang=js
/* harmony default export */ var HeroAltvue_type_script_lang_js = ({
  props: {
    heroAlt: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/sections/HeroAlt.vue?vue&type=script&lang=js
 /* harmony default export */ var sections_HeroAltvue_type_script_lang_js = (HeroAltvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/sections/HeroAlt.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_HeroAltvue_type_script_lang_js,
  HeroAltvue_type_template_id_29c877ac_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "33d49042"
  
)

/* harmony default export */ var HeroAlt = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("befc3cc2", content, true)

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:not(.v-card--link):before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#1e1e1e}.theme--dark.v-timeline .v-timeline-item .v-card:not(.v-card--link):before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:\"\";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:flex;padding-bottom:24px}.v-timeline-item__body{flex:1 1 auto;height:100%;position:relative}.v-timeline-item__divider{align-items:center;display:flex;justify-content:center;min-width:96px;position:relative}.v-timeline-item__dot{border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:38px;left:calc(50% - 19px);width:38px;z-index:2}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{align-items:center;border-radius:50%;display:flex;justify-content:center}.v-timeline-item__opposite{align-self:center;flex:1 1 auto;max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after,.v-timeline-item__body>.v-card:not(.v-card--flat):not(.v-card--link):before{border-bottom:10px solid transparent;border-right:10px solid #000;border-top:10px solid transparent;content:\"\";position:absolute;top:calc(50% - 10px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after{border-right-color:inherit}.v-timeline-item__body>.v-card:not(.v-card--flat):not(.v-card--link):before{top:calc(50% - 8px)}.v-timeline--align-top .v-timeline-item__dot{align-self:start}.v-timeline--align-top .v-timeline-item__body>.v-card:after{top:10px}.v-timeline--align-top .v-timeline-item__body>.v-card:not(.v-card--link):before{top:12px}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense):before{left:calc(50% - 1px);right:auto}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:not(.v-card--link):before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before{left:auto;right:47px}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense:before{left:47px;right:auto}.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before{left:auto;right:47px}.v-timeline--dense .v-timeline-item{flex-direction:row-reverse!important}.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 96px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.v-timeline--reverse.v-timeline--dense .v-timeline-item{flex-direction:row!important}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:auto;right:-10px;transform:rotate(180deg)}.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:after,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:not(.v-card--link):before{left:-10px;right:auto;transform:rotate(0)}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTimeline/VTimeline.sass
var VTimeline = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTimeline/VTimeline.js
// Styles

 // Mixins



/* harmony default export */ var VTimeline_VTimeline = (Object(mixins["a" /* default */])(themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-timeline',
  provide() {
    return {
      timeline: this
    };
  },
  props: {
    alignTop: Boolean,
    dense: Boolean,
    reverse: Boolean
  },
  computed: {
    classes() {
      return {
        'v-timeline--align-top': this.alignTop,
        'v-timeline--dense': this.dense,
        'v-timeline--reverse': this.reverse,
        ...this.themeClasses
      };
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'v-timeline',
      class: this.classes
    }, Object(helpers["m" /* getSlot */])(this));
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTimeline/VTimelineItem.js
// Types

 // Mixins




const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */]
/* @vue/component */);
/* harmony default export */ var VTimelineItem = (baseMixins.extend().extend({
  name: 'v-timeline-item',
  inject: ['timeline'],
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    fillDot: Boolean,
    hideDot: Boolean,
    icon: String,
    iconColor: String,
    large: Boolean,
    left: Boolean,
    right: Boolean,
    small: Boolean
  },
  computed: {
    hasIcon() {
      return !!this.icon || !!this.$slots.icon;
    }
  },
  methods: {
    genBody() {
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__body'
      }, Object(helpers["m" /* getSlot */])(this));
    },
    genIcon() {
      return Object(helpers["m" /* getSlot */])(this, 'icon') || this.$createElement(VIcon["a" /* default */], {
        props: {
          color: this.iconColor,
          dark: !this.theme.isDark,
          small: this.small
        }
      }, this.icon);
    },
    genInnerDot() {
      const data = this.setBackgroundColor(this.color);
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__inner-dot',
        ...data
      }, [this.hasIcon && this.genIcon()]);
    },
    genDot() {
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__dot',
        class: {
          'v-timeline-item__dot--small': this.small,
          'v-timeline-item__dot--large': this.large
        }
      }, [this.genInnerDot()]);
    },
    genDivider() {
      const children = [];
      if (!this.hideDot) children.push(this.genDot());
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__divider'
      }, children);
    },
    genOpposite() {
      return this.$createElement('div', {
        staticClass: 'v-timeline-item__opposite'
      }, Object(helpers["m" /* getSlot */])(this, 'opposite'));
    }
  },
  render(h) {
    const children = [this.genBody(), this.genDivider()];
    if (this.$slots.opposite) children.push(this.genOpposite());
    return h('div', {
      staticClass: 'v-timeline-item',
      class: {
        'v-timeline-item--fill-dot': this.fillDot,
        'v-timeline-item--before': this.timeline.reverse ? this.right : this.left,
        'v-timeline-item--after': this.timeline.reverse ? this.left : this.right,
        ...this.themeClasses
      }
    }, children);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Timeline.vue?vue&type=template&id=46b88bdb




var Timelinevue_type_template_id_46b88bdb_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "py-16",
    attrs: {
      "id": "timeline"
    }
  }, [_c(VContainer["a" /* default */], [_c('h2', {
    staticClass: "text-h3 text-center font-weight-black mb-8"
  }, [_vm._v("Our Journey")]), _vm._v(" "), [_c(VTimeline_VTimeline, _vm._l(_vm.years, function (year, i) {
    return _c(VTimelineItem, {
      key: i,
      attrs: {
        "color": year.color,
        "small": ""
      },
      scopedSlots: _vm._u([{
        key: "opposite",
        fn: function () {
          return [_c('span', {
            class: `headline font-weight-bold ${year.color}--text`,
            domProps: {
              "textContent": _vm._s(year.year)
            }
          })];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _c('div', {
      staticClass: "py-4"
    }, [_c('h2', {
      class: `headline font-weight-light mb-4 ${year.color}--text`
    }, [_vm._v("\n              Lorem ipsum\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune\n              scaevola imperdiet nec ut, sed euismod convenire principes at.\n              Est et nobis iisque percipit, an vim zril disputando\n              voluptatibus, vix an salutandi sententiae.\n            ")])])]);
  }), 1)]], 2)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/Timeline.vue?vue&type=template&id=46b88bdb

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Timeline.vue?vue&type=script&lang=js
/* harmony default export */ var Timelinevue_type_script_lang_js = ({
  data() {
    return {
      years: [{
        color: 'cyan',
        year: '1960'
      }, {
        color: 'green',
        year: '1970'
      }, {
        color: 'pink',
        year: '1980'
      }, {
        color: 'amber',
        year: '1990'
      }, {
        color: 'orange',
        year: '2000'
      }, {
        color: 'teal',
        year: '2020'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/sections/Timeline.vue?vue&type=script&lang=js
 /* harmony default export */ var sections_Timelinevue_type_script_lang_js = (Timelinevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/sections/Timeline.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Timelinevue_type_script_lang_js,
  Timelinevue_type_template_id_46b88bdb_render,
  staticRenderFns,
  false,
  null,
  null,
  "335193de"
  
)

/* harmony default export */ var Timeline = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Team.vue?vue&type=template&id=5c5c135c






var Teamvue_type_template_id_5c5c135c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "py-16",
    class: _vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'
  }, [_c(VContainer["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "fluid": ""
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], [_c('h2', {
    staticClass: "text-h4 text-sm-h3 text-capitalize font-weight-black mb-4"
  }, [_vm._v("\n          instructor\n        ")]), _vm._v(" "), _c('p', [_vm._v("いい感じの文章を考えて入れる")])])], 1), _vm._v(" "), _c(VRow["a" /* default */], _vm._l(_vm.ourTeam, function (item, i) {
    return _c(VCol["a" /* default */], {
      key: `person-${i}`
    }, [_c(VSheet["a" /* default */], {
      staticClass: "py-12 px-6",
      attrs: {
        "outlined": "",
        "shaped": ""
      }
    }, [_c(VAvatar["a" /* default */], {
      attrs: {
        "size": "240"
      }
    }, [_c('img', {
      attrs: {
        "src": `/team/${item.photo}`,
        "lazy-src": `team/${item.photo}`,
        "alt": "John"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "text-h5 text-uppercase font-weight-black mt-6 mb-2"
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "text--disabled text-uppercase"
    }, [_vm._v("\n            " + _vm._s(item.position) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "text-h6 font-weight-black mt-8"
    }, [_vm._v(_vm._s(item.phone))]), _vm._v(" "), _c('div', {
      staticClass: "subtitle-1 mt-3"
    }, [_vm._v(_vm._s(item.email))])], 1)], 1);
  }), 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/Team.vue?vue&type=template&id=5c5c135c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Team.vue?vue&type=script&lang=js
/* harmony default export */ var Teamvue_type_script_lang_js = ({
  props: {
    ourTeam: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/sections/Team.vue?vue&type=script&lang=js
 /* harmony default export */ var sections_Teamvue_type_script_lang_js = (Teamvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/sections/Team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Teamvue_type_script_lang_js,
  Teamvue_type_template_id_5c5c135c_render,
  staticRenderFns,
  false,
  null,
  null,
  "51fc1e7a"
  
)

/* harmony default export */ var Team = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(187);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=245118d3





var aboutvue_type_template_id_245118d3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('SectionsHeroAlt', {
    attrs: {
      "hero-alt": _vm.heroAlt
    }
  }), _vm._v(" "), _c(VContainer["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "py-16"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('h2', {
    staticClass: "text-h4 text-md-h3 text-center font-weight-black text-capitalize"
  }, [_vm._v("\n              DANCE STUDIO GATE?\n            ")]), _vm._v(" "), _c('h3', {
    staticClass: "text-h4 text-uppercase font-weight-thin text-center my-8"
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit\n            ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('p', [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            ")]), _vm._v(" "), _c('blockquote', {
    staticClass: "text-h4 pa-5 my-4 font-weight-thin"
  }, [_vm._v("\n              …Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean\n              sollicitudin, lorem quis\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            ")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('p', [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n              in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n              sunt in culpa qui officia deserunt mollit anim id est laborum.\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium. Doloremque laudantium, totam rem aperiam, eaque\n              ipsa quae ab illo inventore veritatis et quasi architecto beatae\n              vitae dicta sunt explicabo. emo enim ipsam voluptatem quia\n              voluptas sit aspernatur aut odit aut fugit, sed quia\n              consequuntur magni dolores eos qui ratione voluptatem sequi\n              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor\n              sit amet, consectetur, adipisci velit, sed quia non numquam eius\n              modi tempora incidunt ut labore et dolore magnam aliquam quaerat\n              voluptatem. Nemo enim ipsam voluptatem quia voluptas sit\n              aspernatur aut odit aut fugit\n            ")])])], 1)], 1), _vm._v(" "), _c('SectionsTeam', {
    attrs: {
      "our-team": _vm.instructor
    }
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6",
      "align-self": "center"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "max-height": "800",
      "src": "pexels-canva-studio-3277806.jpg",
      "lazy-src": "pexels-canva-studio-3277806.jpg"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6",
      "align-self": "center"
    }
  }, [_c('div', {
    staticClass: "pa-lg-16 pa-md-10 px-4 py-16"
  }, [_c('h2', {
    staticClass: "text-h3 text-center font-weight-black"
  }, [_vm._v("Our Vision")]), _vm._v(" "), _c('h3', {
    staticClass: "text-h5 text-uppercase font-weight-thin text-center my-8"
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n              in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n              nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n              sunt in culpa qui officia deserunt mollit anim id est laborum.\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n              accusantium. Doloremque laudantium, totam rem aperiam.\n            ")])])])], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "flex-row-reverse",
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6",
      "align-self": "center"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "max-height": "800",
      "src": "pexels-rfstudio-3810792.jpg",
      "lazy-src": "pexels-rfstudio-3810792.jpg"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "6",
      "align-self": "center"
    }
  }, [_c('div', {
    staticClass: "pa-lg-16 pa-md-10 px-4 py-16"
  }, [_c('h2', {
    staticClass: "text-h3 text-center font-weight-black"
  }, [_vm._v("Our Mission")]), _vm._v(" "), _c('h3', {
    staticClass: "text-h5 text-uppercase font-weight-thin text-center my-8"
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n              Ut enim ad minim veniam, quis nostrud exercitation ullamco\n              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n              dolor in reprehenderit in voluptate velit esse cillum dolore eu\n              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n              proident, sunt in culpa qui officia deserunt mollit anim id est\n              laborum. Sed ut perspiciatis unde omnis iste natus error sit\n              voluptatem accusantium. Doloremque laudantium, totam rem\n              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n              architecto beatae vitae dicta sunt explicabo. emo enim ipsam\n              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed\n              quia consequuntur magni dolores eos\n            ")])])])], 1), _vm._v(" "), _c('SectionsTimeline')], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=245118d3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js
/* harmony default export */ var aboutvue_type_script_lang_js = ({
  data() {
    return {
      heroAlt: [{
        src: 'pexels-moose-photos-1036641.jpg',
        heading: ' About Us '
      }],
      instructor: [{
        name: 'VOLTAGE',
        // position: 'CEO',
        // phone: '+1 (987) 1625346',
        // email: 'john@example.com',
        photo: 'person-1.jpg'
      }, {
        name: 'THE BABEL',
        // position: 'instructor',
        // phone: '+1 (987) 5894684',
        // email: 'fiona@example.com',
        photo: 'person-2.jpg'
      }, {
        name: 'SHOWY ',
        // position: 'instructor',
        // phone: '+1 (987) 6982456',
        // email: 'justin@example.com',
        photo: 'person-3.jpg'
      }]
    };
  },
  head() {
    return {
      title: 'About Us',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_aboutvue_type_script_lang_js = (aboutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js,
  aboutvue_type_template_id_245118d3_render,
  staticRenderFns,
  false,
  null,
  null,
  "268fc7c6"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionsHeroAlt: __webpack_require__(200).default,SectionsTeam: __webpack_require__(232).default,SectionsTimeline: __webpack_require__(230).default})


/***/ })

};;
//# sourceMappingURL=about.js.map