'use strict';

var Vue = require('vue');
var sdkJs = require('@spearly/sdk-js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var script$2 = Vue__default['default'].extend({
    props: {
        id: { type: String, required: true },
        limit: { type: Number },
        offset: { type: Number },
        order: { type: String },
        orderBy: { type: String },
        orders: { type: Object },
        filterBy: { type: String },
        filterValue: { type: [String, Array] },
        filterRef: { type: String },
        filterMode: { type: String },
        filters: { type: Object },
        rangeFrom: { type: Date },
        rangeTo: { type: Date },
        sessionId: { type: String },
        patternName: { type: String },
        wrapper: { type: [String], default: 'div' },
        item: { type: [String], default: 'div' },
        loading: { type: [String] },
    },
    data: function () {
        return {
            contents: [],
            isLoaded: false,
            next: 0,
            matchingContentsCount: 0,
            totalContentsCount: 0,
        };
    },
    fetch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {};
                        if (this.limit)
                            { params.limit = this.limit; }
                        if (this.offset)
                            { params.offset = this.offset; }
                        if (this.order && ['asc', 'desc'].includes(this.order))
                            { params.order = this.order; }
                        if (this.orderBy)
                            { params.orderBy = this.orderBy; }
                        if (this.orders)
                            { params.orders = this.orders; }
                        if (this.filterBy)
                            { params.filterBy = this.filterBy; }
                        if (this.filterValue)
                            { params.filterValue = this.filterValue; }
                        if (this.filterRef)
                            { params.filterRef = this.filterRef; }
                        if (this.filterMode)
                            { params.filterMode = this.filterMode; }
                        if (this.filters)
                            { params.filters = this.filters; }
                        if (this.rangeFrom)
                            { params.rangeFrom = this.rangeFrom; }
                        if (this.rangeTo)
                            { params.rangeTo = this.rangeTo; }
                        if (this.sessionId)
                            { params.sessionId = this.sessionId; }
                        if (this.patternName)
                            { params.patternName = this.patternName; }
                        return [4 /*yield*/, this.$spearly.getList(this.id, Object.keys(params).length ? params : undefined)];
                    case 1:
                        res = _a.sent();
                        this.contents = res.data;
                        this.isLoaded = true;
                        this.next = res.next;
                        this.matchingContentsCount = res.matchingContentsCount;
                        this.totalContentsCount = res.totalContentsCount;
                        return [2 /*return*/];
                }
            });
        });
    },
    computed: {
        paging: function () {
            return {
                limit: this.limit,
                offset: this.offset,
                next: this.next,
                matchingContentsCount: this.matchingContentsCount,
                totalContentsCount: this.totalContentsCount,
            };
        },
    },
    watch: {
        limit: function () {
            this.$fetch();
        },
        offset: function () {
            this.$fetch();
        },
        order: function () {
            this.$fetch();
        },
        orderBy: function () {
            this.$fetch();
        },
        filterBy: function () {
            this.$fetch();
        },
        filterValue: function () {
            this.$fetch();
        },
        filterRef: function () {
            this.$fetch();
        },
        rangeFrom: function () {
            this.$fetch();
        },
        rangeTo: function () {
            this.$fetch();
        },
    },
    beforeDestroy: function () {
        this.isLoaded = false;
    },
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "spearly-content-list" },
    [
      _vm.loading && !_vm.isLoaded
        ? [_c(_vm.loading, { tag: "component" })]
        : _c(
            _vm.wrapper,
            { tag: "component" },
            _vm._l(_vm.contents, function(content) {
              return _c(
                _vm.item,
                { key: content.attributes.publicUid, tag: "component" },
                [_vm._t("default", null, { content: content })],
                2
              )
            }),
            1
          ),
      _vm._v(" "),
      _vm._t("pager", null, { paging: _vm.paging })
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

var script$1 = Vue__default['default'].extend({
    props: {
        id: { type: String, required: true },
        contentTypeId: { type: String, required: true },
        loading: { type: String },
        previewToken: { type: String },
        patternName: { type: String },
    },
    data: function () {
        return {
            content: {
                attributes: {
                    publicUid: '',
                    patternName: 'a',
                    createdAt: null,
                    updatedAt: null,
                    publishedAt: null,
                    contentAlias: '',
                    fields: {
                        data: [],
                    },
                    nextContent: null,
                    previousContent: null,
                },
                id: '',
                type: 'content',
                values: {},
            },
            isLoaded: false,
        };
    },
    fetch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, res, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.$props.previewToken) { return [3 /*break*/, 2]; }
                        params = {};
                        if (this.$props.patternName) {
                            params.patternName = this.$props.patternName;
                        }
                        return [4 /*yield*/, this.$spearly.getContent(this.$props.contentTypeId, this.$props.id, params)];
                    case 1:
                        res = _a.sent();
                        this.content = res;
                        this.isLoaded = true;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.$spearly.getContentPreview(this.$props.contentTypeId, this.$props.id, this.$props.previewToken)];
                    case 3:
                        res = _a.sent();
                        this.content = res;
                        this.isLoaded = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    mounted: function () {
        if (!this.previewToken) {
            this.$spearlyAnalytics.pageView({
                contentId: this.id,
                patternName: this.content.attributes.patternName,
            });
        }
    },
    destroyed: function () {
        this.isLoaded = false;
    },
});

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _vm.loading && !_vm.isLoaded
        ? [_c(_vm.loading, { tag: "component" })]
        : [
            _vm.content.id
              ? _vm._t("default", null, null, _vm.content)
              : _vm._e()
          ]
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var script = Vue__default['default'].extend({
    props: {
        id: { type: String, required: true },
        loading: { type: String },
        noValidate: { type: Boolean },
    },
    data: function () {
        return {
            form: {
                id: 0,
                publicUid: '',
                identifier: '',
                name: '',
                description: '',
                thankYouMessage: '',
                fields: [],
                callbackUrl: '',
                startedAt: null,
                endedAt: null,
                createdAt: null,
                confirmationEmail: {
                    enabled: false,
                    name: '',
                    description: '',
                },
                confirmationScreen: {
                    enabled: false,
                    backButtonLabel: '',
                    submitButtonLabel: '',
                },
            },
            answers: {
                _spearly_gotcha: '',
                confirmation_email: '',
            },
            files: {},
            validateErrors: [],
            error: false,
            confirm: false,
            submitted: false,
            isLoaded: false,
        };
    },
    fetch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$spearly.getFormLatest(this.id)];
                    case 1:
                        res = _a.sent();
                        this.form = res;
                        if (res.confirmationEmail.enabled) {
                            this.form.fields.unshift({
                                identifier: 'confirmation_email',
                                name: res.confirmationEmail.name,
                                inputType: 'email',
                                description: res.confirmationEmail.description,
                                order: 0,
                                required: true,
                                validationRegex: '',
                            });
                        }
                        this.isLoaded = true;
                        return [2 /*return*/];
                }
            });
        });
    },
    computed: {
        now: function () {
            return new Date().getTime();
        },
        identifiers: function () {
            return this.form.fields.map(function (field) { return field.identifier; });
        },
        isActive: function () {
            if (!this.form.startedAt && !this.form.endedAt)
                { return true; }
            if (this.form.startedAt && this.form.startedAt.getTime() > this.now)
                { return false; }
            if (this.form.endedAt && this.form.endedAt.getTime() < this.now)
                { return false; }
            return true;
        },
    },
    watch: {
        'form.fields': function () {
            this.setAnswersObj();
        },
    },
    mounted: function () {
        this.setAnswersObj();
    },
    beforeDestroy: function () {
        this.isLoaded = false;
    },
    methods: {
        setAnswersObj: function () {
            var _this = this;
            if (this.$scopedSlots.default)
                { return; }
            this.form.fields.forEach(function (field) {
                var _a, _b;
                _this.answers[field.identifier] = field.inputType === 'checkbox' && ((_b = (_a = field.data) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.length) ? [] : '';
                if (field.inputType === 'file') {
                    _this.files[field.identifier] = '';
                }
            });
        },
        formattedDate: function (date) {
            if (!date)
                { return ''; }
            var y = date.getFullYear();
            var m = String(date.getMonth() + 1).padStart(2, '0');
            var d = String(date.getDate()).padStart(2, '0');
            var h = String(date.getHours()).padStart(2, '0');
            var mi = String(date.getMinutes()).padStart(2, '0');
            return y + "/" + m + "/" + d + " " + h + ":" + mi;
        },
        getErrorMessage: function (identifier) {
            var _a;
            return ((_a = this.validateErrors.find(function (error) { return error.identifier === identifier; })) === null || _a === void 0 ? void 0 : _a.message) || '';
        },
        validate: function () {
            var _this = this;
            if (this.noValidate)
                { return; }
            this.validateErrors = [];
            var requiredFields = this.form.fields.filter(function (field) { return field.required; }).map(function (field) { return field.identifier; });
            var numberFields = this.form.fields
                .filter(function (field) { return field.inputType === 'number'; })
                .map(function (field) { return field.identifier; });
            var emailFields = this.form.fields
                .filter(function (field) { return field.inputType === 'email'; })
                .map(function (field) { return field.identifier; });
            var telFields = this.form.fields.filter(function (field) { return field.inputType === 'tel'; }).map(function (field) { return field.identifier; });
            var urlFields = this.form.fields.filter(function (field) { return field.inputType === 'url'; }).map(function (field) { return field.identifier; });
            requiredFields.forEach(function (identifier) {
                if (Array.isArray(_this.answers[identifier]) && !_this.answers[identifier].length) {
                    _this.validateErrors.push({ identifier: identifier, message: '選択してください。' });
                    return;
                }
                if (!_this.answers[identifier]) {
                    _this.validateErrors.push({ identifier: identifier, message: '入力してください。' });
                }
            });
            numberFields.forEach(function (identifier) {
                if (_this.answers[identifier] && !/^[\-\+0-9]+$/.test(_this.answers[identifier])) {
                    _this.validateErrors.push({ identifier: identifier, message: '数字を入力してください。' });
                }
            });
            emailFields.forEach(function (identifier) {
                if (_this.answers[identifier] && !/^[\w\-._]+@[\w\-._]+\.[A-Za-z]+$/.test(_this.answers[identifier])) {
                    _this.validateErrors.push({ identifier: identifier, message: 'メールアドレスの形式で入力してください。' });
                }
            });
            telFields.forEach(function (identifier) {
                var field = _this.form.fields.find(function (field) { return field.identifier === identifier; });
                if (!field.validationRegex)
                    { return; }
                var regex = new RegExp(field.validationRegex);
                if (_this.answers[identifier] && !regex.test(_this.answers[identifier])) {
                    var format = field.validationRegex === '^[+]?\\d+$' ? 'ハイフンなし' : '半角数字とハイフン';
                    _this.validateErrors.push({ identifier: identifier, message: "\u96FB\u8A71\u756A\u53F7\uFF08" + format + "\uFF09\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" });
                }
            });
            urlFields.forEach(function (identifier) {
                if (_this.answers[identifier] &&
                    !/^https?:\/\/[\w!?/+\-_~;.,*&@#$%()'[\]]+?\..*?$/.test(_this.answers[identifier])) {
                    _this.validateErrors.push({ identifier: identifier, message: 'URLを入力してください。' });
                }
            });
        },
        onChangeFile: function (event, identifier) {
            var _this = this;
            var fileReader = new FileReader();
            var files = event.target.files;
            if (!files)
                { return; }
            if (!files.length) {
                this.answers[identifier] = '';
                this.files[identifier] = '';
                return;
            }
            fileReader.onload = function () {
                _this.answers[identifier] = fileReader.result;
                _this.files[identifier] = files[0].name;
            };
            fileReader.readAsDataURL(files[0]);
        },
        onClick: function () {
            if (!this.confirm) {
                this.validate();
                if (this.validateErrors.length)
                    { return; }
                if (this.form.confirmationScreen.enabled) {
                    this.confirm = true;
                    return;
                }
            }
            this.submit(this.answers);
        },
        submit: function (fields) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.$spearly.postFormAnswers(this.form.id, fields)];
                        case 1:
                            _b.sent();
                            this.identifiers.forEach(function (identifier) {
                                var _a;
                                _this.answers[identifier] =
                                    ((_a = _this.form.fields.find(function (field) { return field.identifier === identifier; })) === null || _a === void 0 ? void 0 : _a.inputType) === 'checkbox' ? [] : '';
                            });
                            this.answers.confirmation_email = '';
                            if (typeof location !== 'undefined' && this.form.callbackUrl) {
                                location.href = this.form.callbackUrl;
                            }
                            else {
                                this.submitted = true;
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            _b.sent();
                            this.error = true;
                            this.confirm = false;
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
    },
});

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _vm.loading && !_vm.isLoaded
        ? [_c(_vm.loading, { tag: "component" })]
        : [
            _vm.$scopedSlots.default
              ? [_vm._t("default", null, { submit: _vm.submit }, _vm.form)]
              : [
                  !_vm.submitted
                    ? _c(
                        "div",
                        { staticClass: "spearly-form" },
                        [
                          _c("h1", { staticClass: "spearly-form-name" }, [
                            _vm._v(
                              "\n          " +
                                _vm._s(_vm.form.name) +
                                "\n        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "spearly-form-description" }, [
                            _vm._v(
                              "\n          " +
                                _vm._s(_vm.form.description) +
                                "\n        "
                            )
                          ]),
                          _vm._v(" "),
                          _vm.form.startedAt || _vm.form.endedAt
                            ? _c("p", { staticClass: "spearly-form-period" }, [
                                _c("span", [
                                  _vm._v(
                                    "\n            このフォームの受付期間は" +
                                      _vm._s(
                                        _vm.form.startedAt
                                          ? _vm.formattedDate(
                                              _vm.form.startedAt
                                            )
                                          : ""
                                      ) +
                                      "〜" +
                                      _vm._s(
                                        _vm.form.endedAt
                                          ? _vm.formattedDate(_vm.form.endedAt)
                                          : ""
                                      ) +
                                      "です。\n          "
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error
                            ? _c("p", { staticClass: "spearly-form-error" }, [
                                _c("span", [
                                  _vm._v(
                                    "フォームを送信できませんでした。内容をご確認の上、再度お試しください。"
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.form.fields, function(field) {
                            return _c(
                              "fieldset",
                              { key: field.identifier },
                              [
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for: ["radio", "checkbox"].includes(
                                        field.inputType
                                      )
                                        ? null
                                        : field.identifier
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n            " +
                                        _vm._s(field.name) +
                                        "\n            "
                                    ),
                                    field.required
                                      ? _c("i", [_vm._v("*")])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.confirm
                                  ? [
                                      field.inputType !== "file"
                                        ? _c(
                                            "p",
                                            {
                                              staticClass:
                                                "spearly-form-answer-confirm"
                                            },
                                            [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(
                                                    _vm.answers[
                                                      field.identifier
                                                    ]
                                                  ) +
                                                  "\n            "
                                              )
                                            ]
                                          )
                                        : _c(
                                            "p",
                                            {
                                              staticClass:
                                                "spearly-form-answer-confirm"
                                            },
                                            [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(
                                                    _vm.files[field.identifier]
                                                  ) +
                                                  "\n            "
                                              )
                                            ]
                                          )
                                    ]
                                  : [
                                      "text",
                                      "number",
                                      "email",
                                      "tel",
                                      "url"
                                    ].includes(field.inputType)
                                  ? [
                                      field.inputType === "checkbox"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.answers[field.identifier],
                                                expression:
                                                  "answers[field.identifier]"
                                              }
                                            ],
                                            attrs: {
                                              id: field.identifier,
                                              required: field.required,
                                              disabled: !_vm.isActive,
                                              "aria-invalid": !!_vm.getErrorMessage(
                                                field.identifier
                                              ),
                                              "aria-describedby": field.description
                                                ? field.identifier +
                                                  "-description"
                                                : null,
                                              type: "checkbox"
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.answers[field.identifier]
                                              )
                                                ? _vm._i(
                                                    _vm.answers[
                                                      field.identifier
                                                    ],
                                                    null
                                                  ) > -1
                                                : _vm.answers[field.identifier]
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a =
                                                    _vm.answers[
                                                      field.identifier
                                                    ],
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false;
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v);
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.answers,
                                                        field.identifier,
                                                        $$a.concat([$$v])
                                                      );
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.answers,
                                                        field.identifier,
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      );
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.answers,
                                                    field.identifier,
                                                    $$c
                                                  );
                                                }
                                              }
                                            }
                                          })
                                        : field.inputType === "radio"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.answers[field.identifier],
                                                expression:
                                                  "answers[field.identifier]"
                                              }
                                            ],
                                            attrs: {
                                              id: field.identifier,
                                              required: field.required,
                                              disabled: !_vm.isActive,
                                              "aria-invalid": !!_vm.getErrorMessage(
                                                field.identifier
                                              ),
                                              "aria-describedby": field.description
                                                ? field.identifier +
                                                  "-description"
                                                : null,
                                              type: "radio"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.answers[field.identifier],
                                                null
                                              )
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.$set(
                                                  _vm.answers,
                                                  field.identifier,
                                                  null
                                                )
                                              }
                                            }
                                          })
                                        : _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.answers[field.identifier],
                                                expression:
                                                  "answers[field.identifier]"
                                              }
                                            ],
                                            attrs: {
                                              id: field.identifier,
                                              required: field.required,
                                              disabled: !_vm.isActive,
                                              "aria-invalid": !!_vm.getErrorMessage(
                                                field.identifier
                                              ),
                                              "aria-describedby": field.description
                                                ? field.identifier +
                                                  "-description"
                                                : null,
                                              type: field.inputType
                                            },
                                            domProps: {
                                              value:
                                                _vm.answers[field.identifier]
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.answers,
                                                  field.identifier,
                                                  $event.target.value
                                                );
                                              }
                                            }
                                          })
                                    ]
                                  : field.inputType === "text_area"
                                  ? [
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.answers[field.identifier],
                                            expression:
                                              "answers[field.identifier]"
                                          }
                                        ],
                                        attrs: {
                                          id: field.identifier,
                                          require: field.required,
                                          disabled: !_vm.isActive,
                                          "aria-invalid": !!_vm.getErrorMessage(
                                            field.identifier
                                          ),
                                          "aria-describedby": field.description
                                            ? field.identifier + "-description"
                                            : null
                                        },
                                        domProps: {
                                          value: _vm.answers[field.identifier]
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.answers,
                                              field.identifier,
                                              $event.target.value
                                            );
                                          }
                                        }
                                      })
                                    ]
                                  : field.inputType === "radio" && field.data
                                  ? _vm._l(field.data.options, function(
                                      option,
                                      i
                                    ) {
                                      return _c(
                                        "label",
                                        {
                                          key: i,
                                          staticClass: "spearly-form-radio"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.answers[field.identifier],
                                                expression:
                                                  "answers[field.identifier]"
                                              }
                                            ],
                                            attrs: {
                                              name: field.identifier,
                                              type: "radio",
                                              required: field.required,
                                              disabled: !_vm.isActive,
                                              "aria-describedby": field.description
                                                ? field.identifier +
                                                  "-description"
                                                : null
                                            },
                                            domProps: {
                                              value: option,
                                              checked: _vm._q(
                                                _vm.answers[field.identifier],
                                                option
                                              )
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.$set(
                                                  _vm.answers,
                                                  field.identifier,
                                                  option
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v(_vm._s(option))])
                                        ]
                                      )
                                    })
                                  : field.inputType === "checkbox" && field.data
                                  ? _vm._l(field.data.options, function(
                                      option,
                                      i
                                    ) {
                                      return _c(
                                        "label",
                                        {
                                          key: i,
                                          staticClass: "spearly-form-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.answers[field.identifier],
                                                expression:
                                                  "answers[field.identifier]"
                                              }
                                            ],
                                            attrs: {
                                              name: field.identifier,
                                              type: "checkbox",
                                              required: field.required,
                                              disabled: !_vm.isActive,
                                              "aria-describedby": field.description
                                                ? field.identifier +
                                                  "-description"
                                                : null
                                            },
                                            domProps: {
                                              value: option,
                                              checked: Array.isArray(
                                                _vm.answers[field.identifier]
                                              )
                                                ? _vm._i(
                                                    _vm.answers[
                                                      field.identifier
                                                    ],
                                                    option
                                                  ) > -1
                                                : _vm.answers[field.identifier]
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a =
                                                    _vm.answers[
                                                      field.identifier
                                                    ],
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false;
                                                if (Array.isArray($$a)) {
                                                  var $$v = option,
                                                    $$i = _vm._i($$a, $$v);
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.answers,
                                                        field.identifier,
                                                        $$a.concat([$$v])
                                                      );
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.answers,
                                                        field.identifier,
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      );
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.answers,
                                                    field.identifier,
                                                    $$c
                                                  );
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", [_vm._v(_vm._s(option))])
                                        ]
                                      )
                                    })
                                  : field.inputType === "file"
                                  ? [
                                      _c(
                                        "label",
                                        { staticClass: "spearly-form-file" },
                                        [
                                          _c("input", {
                                            attrs: {
                                              name: field.identifier,
                                              required: field.required,
                                              accept:
                                                field.data &&
                                                field.data.allowedExtensions
                                                  ? field.data.allowedExtensions
                                                      .map(function(extension) {
                                                        return "." + extension
                                                      })
                                                      .join(",")
                                                  : "",
                                              type: "file"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.onChangeFile(
                                                  $event,
                                                  field.identifier
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  : field.inputType === "select_box" &&
                                    field.data
                                  ? [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.answers[field.identifier],
                                              expression:
                                                "answers[field.identifier]"
                                            }
                                          ],
                                          attrs: {
                                            id: field.identifier,
                                            name: field.identifier,
                                            require: field.required,
                                            disabled: !_vm.isActive,
                                            "aria-invalid": !!_vm.getErrorMessage(
                                              field.identifier
                                            ),
                                            "aria-describedby": field.description
                                              ? field.identifier +
                                                "-description"
                                              : null
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value;
                                                  return val
                                                });
                                              _vm.$set(
                                                _vm.answers,
                                                field.identifier,
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              );
                                            }
                                          }
                                        },
                                        _vm._l(field.data.options, function(
                                          option,
                                          i
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: i,
                                              domProps: { value: option }
                                            },
                                            [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(option) +
                                                  "\n              "
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                field.description
                                  ? _c(
                                      "p",
                                      {
                                        staticClass:
                                          "spearly-form-field-description",
                                        attrs: {
                                          id: field.identifier + "-description"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n            " +
                                            _vm._s(field.description) +
                                            "\n          "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.getErrorMessage(field.identifier)
                                  ? _c(
                                      "p",
                                      {
                                        staticClass: "spearly-form-field-error",
                                        attrs: {
                                          id:
                                            "spearly-form-field-" +
                                            field.identifier +
                                            "-error",
                                          role: "alert",
                                          "aria-live": "assertive"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n            " +
                                            _vm._s(
                                              _vm.getErrorMessage(
                                                field.identifier
                                              )
                                            ) +
                                            "\n          "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              2
                            )
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.answers._spearly_gotcha,
                                expression: "answers._spearly_gotcha"
                              }
                            ],
                            staticStyle: {
                              position: "absolute",
                              width: "1px",
                              height: "1px",
                              opacity: "0",
                              overflow: "hidden"
                            },
                            attrs: {
                              type: "text",
                              name: "_spearly_gotcha",
                              tabindex: "-1"
                            },
                            domProps: { value: _vm.answers._spearly_gotcha },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.answers,
                                  "_spearly_gotcha",
                                  $event.target.value
                                );
                              }
                            }
                          }),
                          _vm._v(" "),
                          !_vm.isActive
                            ? _c("p", { staticClass: "spearly-form-outside" }, [
                                _c("span", [
                                  _vm._v("このフォームは現在受付期間外です。")
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.validateErrors.length
                            ? _c("p", { staticClass: "spearly-form-error" }, [
                                _c("span", [
                                  _vm._v("入力されていない項目があります。")
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "spearly-form-submit",
                              attrs: { disabled: !_vm.isActive },
                              on: { click: _vm.onClick }
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm.form.confirmationScreen.enabled
                                      ? _vm.form.confirmationScreen
                                          .submitButtonLabel
                                      : "送信"
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.confirm
                            ? _c(
                                "button",
                                {
                                  staticClass: "spearly-form-back",
                                  on: {
                                    click: function($event) {
                                      _vm.confirm = false;
                                    }
                                  }
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.form.confirmationScreen
                                          .backButtonLabel
                                      )
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    : _c("div", { staticClass: "spearly-form-thanks" }, [
                        _c("h1", { staticClass: "spearly-form-thanks-title" }, [
                          _c("span", [
                            _vm._v(_vm._s(_vm.form.name) + "を送信しました。")
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.form.thankYouMessage
                          ? _c(
                              "p",
                              { staticClass: "spearly-form-thanks-message" },
                              [
                                _vm._v(
                                  "\n          " +
                                    _vm._s(_vm.form.thankYouMessage) +
                                    "\n        "
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                ]
          ]
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var plugin = function (_, inject) {
    var opt = JSON.parse('{"options":{"apiKey":"m70KklJ4HIGKwYb_GYWPU6UIPhpiy0upWrtBVolD_IM"},"mode":"all"}');
    var apiClient = new sdkJs.SpearlyApiClient(opt.options.apiKey);
    var analytics = new sdkJs.SpearlyAnalytics();
    Vue__default['default'].component(
    // eslint-disable-next-line vue/component-definition-name-casing
    'spearly-content-list', __vue_component__$2);
    Vue__default['default'].component(
    // eslint-disable-next-line vue/component-definition-name-casing
    'spearly-content', __vue_component__$1);
    Vue__default['default'].component(
    // eslint-disable-next-line vue/component-definition-name-casing
    'spearly-form', __vue_component__);
    inject('spearly', apiClient);
    inject('spearlyAnalytics', analytics);
};

module.exports = plugin;
