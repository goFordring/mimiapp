require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(107);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_089fda58_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(108)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-089fda58"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_089fda58_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\question\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-089fda58", Component.options)
  } else {
    hotAPI.reload("data-v-089fda58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 109:
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      questions: [], //请求数据存放处
      startqs: false, // 是否显示当前问题调查
      current_Index: 0,
      btn_title: '开始答题',
      lesson: ''
    };
  },
  //data end
  onLoad: function onLoad() {
    this.getData();
  },

  methods: {
    // 请求数据 保存数据
    getData: function getData() {
      var that = this;
      wx.request({
        url: this.$interfaces.getQuestions,
        method: 'get',
        success: function success(res) {
          that.questions = res.data.questions;
        }
      });
    },
    btn_click: function btn_click() {
      // 上面隐藏下面显示 nihao
      // 此时  友好提示在显示 则执行 startqs 取反

      // 第一步控制v-if显示隐藏 实现提示和 答题 模块切换
      // 第二部  确认此时答题阶段 是否完成 切换此时答题内容

      if (!this.startqs) {
        // startqs 取反
        this.startqs = true;
        // 改变 按钮内容
        this.btn_title = "下一题";
      } else {
        this.lesson += this.getSelectOption();
        if (this.current_Index < this.questions.length - 1) {
          // 此时答题阶段未完成 下一题
          this.btn_title = '下一题';
          this.current_Index++;
          this.lesson += ",";
          if (this.current_Index == this.questions.length - 1) {
            // 此时答题完成
            this.btn_title = '定制完';
          }
        } else {
          this.sendQuestions();
        }
      }
    },
    // btn-click end
    selectAnswer: function selectAnswer(index) {
      // 改变选取状态 通过渲染questions 数组中options。select值  改变样式
      // 获取当前 渲染数组（questions.current_index）
      var options = this.questions[this.current_Index].option;
      // 初始化当前所有 选中状态，避免多选
      options.forEach(function (item) {
        item.select = false;
      });
      // 找到当前点击对象  改变其 select的值(取反因为会存在重复点击)
      options[index].select = !options[index].select;
    },
    getSelectOption: function getSelectOption() {
      var option = this.questions[this.current_Index].option;
      var label = "";
      option.forEach(function (item) {
        if (item.select) label = item.label;
      });
      return label;
    },
    sendQuestions: function sendQuestions() {
      var _this = this;

      // 向服务器发送 数据
      this.$https.request({
        url: this.$interfaces.myLesson,
        method: 'post',
        data: {
          // 当前 测试结果
          lesson: this.lesson,
          // openid
          openid: this.$store.getters.openId

        }
      }).then(function (res) {
        //  存储返回数据 特定课程数据
        _this.$store.dispatch("setlessonInfo", res);
        // 跳转 tabbar 页面
        wx.switchTab({ url: '../learn/main' });
        console.log('set OK');
      });
    }
  },
  computed: {
    disabled: function disabled() {
      // 先判断当前是不是 答题阶段
      if (!this.startqs) return false; // 此时为提示阶段 停止操作

      else {
          // 此时为答题阶段
          // 获取当前 渲染数组 select 判断此时 用户有没有选取
          var options = this.questions[this.current_Index].option;
          var select = false;

          //判断当前是否有选中选项
          options.forEach(function (item) {
            if (item.select) select = true;
          });
          return !select;
        }
    } // disabledend

  }

});

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "question"
  }, [_c('img', {
    staticClass: "bg",
    attrs: {
      "src": "/static/imgs/test.jpg",
      "alt": ""
    }
  }), _vm._v(" "), (_vm.questions.length > 0) ? _c('div', {
    staticClass: "qs_content"
  }, [(!_vm.startqs) ? _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("提示您：")]), _vm._v(" "), _c('div', {
    staticClass: "warn_tag"
  }, [_vm._v("\n\t\t\t\t 为了更好的为您制定学习计划,请首先回答以下问题, 我们会为您量身推荐相关的课程.\n\t\t\t ")])], 1) : _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.questions[_vm.current_Index].title))]), _vm._v(" "), _vm._l((_vm.questions[_vm.current_Index].option), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "response",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectAnswer(index)
        }
      }
    }, [(item.select) ? _c('img', {
      attrs: {
        "src": "/static/imgs/selected.jpg",
        "alt": ""
      }
    }) : _c('img', {
      attrs: {
        "src": "/static/imgs/unselect.jpg",
        "alt": ""
      }
    }), _vm._v(" "), _c('spen', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_vm._v(_vm._s(item.label))])], 1)
  })], 2)]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "qs_btn",
    attrs: {
      "disabled": _vm.disabled,
      "eventid": '1'
    },
    on: {
      "click": _vm.btn_click
    }
  }, [_vm._v(_vm._s(_vm.btn_title))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-089fda58", esExports)
  }
}

/***/ })

},[106]);