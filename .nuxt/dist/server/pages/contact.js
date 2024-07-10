exports.ids = [14,3,6];
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

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("759def88", content, true, context)
};

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 9 modules
var VTextField = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(192);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/contactForm.vue?vue&type=template&id=c2870b58







var contactFormvue_type_template_id_c2870b58_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VForm["a" /* default */], [_c(VRow["a" /* default */], {
    staticClass: "mb-n6"
  }, [_c(VCol["a" /* default */], [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Name",
      "dense": "",
      "outlined": ""
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Email",
      "dense": "",
      "outlined": ""
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-n6"
  }, [_c(VCol["a" /* default */], [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Subject",
      "dense": "",
      "outlined": ""
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "mb-n6"
  }, [_c(VCol["a" /* default */], [_c(VTextarea["a" /* default */], {
    attrs: {
      "dense": "",
      "label": "Your Message",
      "auto-grow": "",
      "outlined": "",
      "rows": "8",
      "row-height": "20"
    }
  })], 1)], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], [_c(VBtn["a" /* default */], {
    staticClass: "my-2",
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("SEND MESSAGE")]), _c(VBtn["a" /* default */], {
    staticClass: "my-2 ml-3"
  }, [_vm._v("clear")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/contactForm.vue?vue&type=template&id=c2870b58

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/sections/contactForm.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  contactFormvue_type_template_id_c2870b58_render,
  staticRenderFns,
  false,
  null,
  null,
  "2023ae17"
  
)

/* harmony default export */ var contactForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_18026416_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_18026416_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_18026416_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_18026416_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_18026416_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#footer-top[data-v-18026416]{display:none!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(193);

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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=18026416&scoped=true











var contactvue_type_template_id_18026416_scoped_true_render = function render() {
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
      "md": "5",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-h6 font-weight-bold mb-5"
  }, [_vm._v("Our Office")]), _vm._v(" "), _c(VList["a" /* default */], {
    staticClass: "transparent",
    attrs: {
      "two-line": ""
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v(" mdi-map-marker ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("ADDRESS")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("1400 Main Street, Orlando, FL 79938")])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v(" mdi-email ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("EMAIL")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("info@example.com")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("support@example.com")])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v(" mdi-phone ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("PHONE")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("(323) 555-6789")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("(650) 555-1234")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "text-h6 font-weight-bold mt-12 mb-5"
  }, [_vm._v("\n              Business Hours\n            ")]), _vm._v(" "), _c(VList["a" /* default */], {
    staticClass: "transparent",
    attrs: {
      "two-line": ""
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v(" mdi-clock ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("MONDAY to FRIDAY ")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("9am to 5pm")])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v(" mdi-clock ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("SATURDAY")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("9am to 2pm")])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(VListItemIcon["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v(" mdi-clock ")])], 1), _vm._v(" "), _c(components_VList["a" /* VListItemContent */], [_c(components_VList["c" /* VListItemTitle */], [_vm._v("SUNDAY")]), _vm._v(" "), _c(components_VList["b" /* VListItemSubtitle */], [_vm._v("cLOSED")])], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "md": "7",
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-h4 font-weight-black mb-8"
  }, [_vm._v("Contact Us")]), _vm._v(" "), _c('p', {
    staticClass: "mb-10"
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            ")]), _vm._v(" "), _c('contactForm')], 1)], 1)], 1), _vm._v(" "), _c('iframe', {
    staticStyle: {
      "border": "0",
      "display": "block"
    },
    attrs: {
      "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.285388316138!2d-81.37969424867693!3d28.531140482371708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b041135b063%3A0x13aab64f9cc768fc!2s1400%20Main%20Ln%2C%20Orlando%2C%20FL%2032801%2C%20USA!5e0!3m2!1sen!2sin!4v1606230494596!5m2!1sen!2sin",
      "width": "100%",
      "height": "600",
      "frameborder": "0",
      "allowfullscreen": "true",
      "aria-hidden": "false",
      "tabindex": "0"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=18026416&scoped=true

// EXTERNAL MODULE: ./components/sections/contactForm.vue + 2 modules
var contactForm = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js

/* harmony default export */ var contactvue_type_script_lang_js = ({
  components: {
    contactForm: contactForm["default"]
  },
  data() {
    return {
      heroAlt: [{
        src: 'pexels-andrea-piacquadio-3830745.jpg',
        heading: ' Contact Us '
      }]
    };
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_contactvue_type_script_lang_js = (contactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(248)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js,
  contactvue_type_template_id_18026416_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "18026416",
  "bcc345a0"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionsHeroAlt: __webpack_require__(200).default})


/***/ })

};;
//# sourceMappingURL=contact.js.map