exports.ids = [15,6];
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

/***/ 257:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(187);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=template&id=330b5c03






var galleryvue_type_template_id_330b5c03_render = function render() {
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
  }), _vm._v(" "), _c(VContainer["a" /* default */], {
    staticClass: "py-16"
  }, [_c(VRow["a" /* default */], _vm._l(120, function (n) {
    return _c(VCol["a" /* default */], {
      key: n,
      staticClass: "d-flex child-flex",
      attrs: {
        "cols": "4",
        "xl": "3"
      }
    }, [_c(VImg["a" /* default */], {
      staticClass: "grey lighten-2 rounded-lg",
      attrs: {
        "src": `https://picsum.photos/700?image=${n * 5 + 10}`,
        "lazy-src": `https://picsum.photos/10/6?image=${n * 5 + 10}`,
        "aspect-ratio": "1"
      },
      scopedSlots: _vm._u([{
        key: "placeholder",
        fn: function () {
          return [_c(VRow["a" /* default */], {
            staticClass: "fill-height ma-0",
            attrs: {
              "align": "center",
              "justify": "center"
            }
          }, [_c(VProgressCircular["a" /* default */], {
            attrs: {
              "indeterminate": "",
              "color": "grey lighten-5"
            }
          })], 1)];
        },
        proxy: true
      }], null, true)
    })], 1);
  }), 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=template&id=330b5c03

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=script&lang=js
/* harmony default export */ var galleryvue_type_script_lang_js = ({
  data() {
    return {
      heroAlt: [{
        src: 'pexels-andrea-piacquadio-3830745.jpg',
        heading: ' Gallery '
      }]
    };
  },
  head() {
    return {
      title: 'Gallery',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_galleryvue_type_script_lang_js = (galleryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/gallery.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js,
  galleryvue_type_template_id_330b5c03_render,
  staticRenderFns,
  false,
  null,
  null,
  "1f12c762"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionsHeroAlt: __webpack_require__(200).default})


/***/ })

};;
//# sourceMappingURL=gallery.js.map