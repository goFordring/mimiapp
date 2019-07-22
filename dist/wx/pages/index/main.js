require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(87);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_760819f6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(90);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-760819f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_760819f6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-760819f6", Component.options)
  } else {
    hotAPI.reload("data-v-760819f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	methods: {
		getUserInfo: function getUserInfo(e) {
			console.log(e);
			console.log(e.mp.detail.userInfo);
			var edata = e.mp.detail.userInfo;
			this.$store.dispatch('setIsAuthenticated', true);
			this.$store.dispatch('setUser', edata);
			console.log('123');

			//调用code
			this.getCode();
		},
		getCode: function getCode() {
			var _this = this;

			wx.login({
				success: function success(res) {

					//获取 openid
					_this.getOpenid(res.code);
				}
			});
		},
		getOpenid: function getOpenid(code) {
			var _this2 = this;

			var appId = "wx239ac4c4aa22568f";
			var appKey = "78a507ca33264640cf8ccea0bb2dca37";

			var that = this;
			// 发送get请求
			this.$https.request({
				url: this.$interfaces.getOpenid + appId + "/" + appKey + "/" + code,
				method: "get"

			}).then(function (res) {
				// 测试结束 将数据
				//
				wx.redirectTo({
					url: '../question/main'
				});
				_this2.$store.dispatch("setOpenId", res.openid);
				//
				_this2.isLearn(res.openid);
			}).catch(function (err) {
				// 未测试
				// 转到测试页面

			});
		},
		// end

		isLearn: function isLearn(openid) {
			this.$https.request({
				url: this.$interfaces.getMyLesson + openid,
				method: 'get'

			}).then(function (res) {

				wx.switchTab({ url: "../learn/main" });
			}).catch();
		},

		// getgetMyLesson  函数
		getMyLesson: function getMyLesson(data) {
			wx.request({
				url: this.$interfaces.getMyLesson + data,
				method: 'get',
				success: function success(res) {
					console.log('完成测试');
					wx.redirectTo({
						url: "../question/main"
					});
				},
				fail: function fail() {
					console.log('还没测试');
				}
			});
		}
	}
});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "login"
  }, [_c('img', {
    attrs: {
      "src": "/static/imgs/guide_bg.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "learn"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("开始学习")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-760819f6", esExports)
  }
}

/***/ })

},[86]);