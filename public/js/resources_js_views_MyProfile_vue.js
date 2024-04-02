"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_MyProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyProfile.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyProfile.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_ProfilePicture_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProfilePicture.vue */ "./resources/js/components/ProfilePicture.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProfilePicture: _components_ProfilePicture_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    return {
      //accessing  logged in user state
      user: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return store.state.login.loginUser;
      }),
      image: "https://firebasestorage.googleapis.com/v0/b/online-pharmacy-d7579.appspot.com/o/products%2Fuser.png?alt=media&token=5dce7c32-3c59-4e71-860e-96c9f84392cb"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  className: "max-w-3xl mx-auto px-4 py-10"
};
var _hoisted_2 = {
  className: "py-10"
};
var _hoisted_3 = {
  className: "mb-5 text-center w-full  flex justify-center cursor-pointer"
};
var _hoisted_4 = {
  className: "mb-5"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  className: "font-bold mb-1 text-gray-700 block"
}, "Username", -1
/* HOISTED */
);

var _hoisted_6 = ["value"];
var _hoisted_7 = {
  className: "mb-5"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  className: "font-bold mb-1 text-gray-700 block"
}, "Email", -1
/* HOISTED */
);

var _hoisted_9 = ["value"];
var _hoisted_10 = {
  className: "mb-5"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  className: "font-bold mb-1 text-gray-700 block"
}, "Account created", -1
/* HOISTED */
);

var _hoisted_12 = ["value"];
var _hoisted_13 = {
  className: "mb-5"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  className: "font-bold mb-1 text-gray-700 block"
}, "Authentication token", -1
/* HOISTED */
);

var _hoisted_15 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ProfilePicture = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProfilePicture");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div\n                                className=\"mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset\">\n                                <img id=\"image\" alt=\"profile picture\" className=\"object-cover w-full h-32 rounded-full\"\n                                    :src=\"image\" />\n                            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProfilePicture, {
    width: '120px',
    height: '120px'
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    value: $setup.user.user.name,
    disabled: "",
    className: "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium",
    placeholder: "Enter your firstname..."
  }, null, 8
  /* PROPS */
  , _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    value: $setup.user.user.email,
    disabled: "",
    className: "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium",
    placeholder: "Enter your email address..."
  }, null, 8
  /* PROPS */
  , _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    value: $setup.user.user.updated_at,
    disabled: "",
    className: "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium",
    placeholder: "Enter your email address..."
  }, null, 8
  /* PROPS */
  , _hoisted_12)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    value: $setup.user.token,
    disabled: "",
    className: "w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium",
    placeholder: "Enter your email address..."
  }, null, 8
  /* PROPS */
  , _hoisted_15)])])])])])]);
}

/***/ }),

/***/ "./resources/js/views/MyProfile.vue":
/*!******************************************!*\
  !*** ./resources/js/views/MyProfile.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyProfile_vue_vue_type_template_id_8e9c9464__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=template&id=8e9c9464 */ "./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464");
/* harmony import */ var _MyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=script&lang=js */ "./resources/js/views/MyProfile.vue?vue&type=script&lang=js");
/* harmony import */ var _home_tony_projects_docker_personal_portfolio_onlinePharmacy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_tony_projects_docker_personal_portfolio_onlinePharmacy_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MyProfile_vue_vue_type_template_id_8e9c9464__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/MyProfile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/MyProfile.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/views/MyProfile.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyProfile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyProfile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464":
/*!************************************************************************!*\
  !*** ./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyProfile_vue_vue_type_template_id_8e9c9464__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyProfile_vue_vue_type_template_id_8e9c9464__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyProfile.vue?vue&type=template&id=8e9c9464 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464");


/***/ })

}]);