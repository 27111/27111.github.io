(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/Register/Register"],{2462:function(e,n,o){"use strict";(function(e){o("24c9");t(o("66fd"));var n=t(o("ccd0"));function t(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(n.default)}).call(this,o("543d")["createPage"])},"48d9":function(e,n,o){"use strict";o.d(n,"b",(function(){return u})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return t}));var t={uniForms:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(o.bind(null,"8ac0"))},uniFormsItem:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(o.bind(null,"8ed8"))},uniEasyinput:function(){return o.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(o.bind(null,"45ff"))},uniDataCheckbox:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(o.bind(null,"5e66"))}},u=function(){var e=this,n=e.$createElement,t=(e._self._c,o("06d4"));e.$mp.data=Object.assign({},{$root:{m0:t}})},r=[]},"5f81":function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{iserr:!1,baseFormData:{introduction:""},hobbys:[{text:'我已阅读并同意"服务协议"和"隐私政策"',value:0}],customFormData:{name:"",password:"",hobby:[]},customRules:{name:{rules:[{required:!0,errorMessage:"账号不能为空"}]},password:{rules:[{required:!0,errorMessage:"密码不能为空"}]},hobby:{rules:[{format:"array"},{validateFunction:function(e,n,o,t){return n.length<1&&t("请勾选"),!0}}]}}}},methods:{submit:function(n){var o=this;this.$refs[n].validate().then((function(n){console.log("success",n),"123456"==n.name&&"123456"==n.password?(o.iserr=!1,e.setStorageSync("token",JSON.stringify({name:n.name,password:n.password})),console.log(o.$Route),console.log(o.$Route.query.from),"pages/index/me"==o.$Route.query.from||"pages/index/collect"==o.$Route.query.from?e.navigateTo({url:"/"+o.$Route.query.from}):o.$Router.replace(o.$Route.query.from)):(console.log("err"),o.iserr=!0)})).catch((function(e){console.log("err",e)}))}}};n.default=o}).call(this,o("543d")["default"])},"9f58":function(e,n,o){"use strict";o.r(n);var t=o("5f81"),u=o.n(t);for(var r in t)"default"!==r&&function(e){o.d(n,e,(function(){return t[e]}))}(r);n["default"]=u.a},a975:function(e,n,o){},b4a3:function(e,n,o){"use strict";var t=o("a975"),u=o.n(t);u.a},ccd0:function(e,n,o){"use strict";o.r(n);var t=o("48d9"),u=o("9f58");for(var r in u)"default"!==r&&function(e){o.d(n,e,(function(){return u[e]}))}(r);o("b4a3");var i,a=o("f0c5"),s=Object(a["a"])(u["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);n["default"]=s.exports}},[["2462","common/runtime","common/vendor"]]]);