(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index-lists/index-lists"],{"23f7":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"index-lists",props:["indexLists"],data:function(){return{}},methods:{gotonewpage:function(t){var e=t.h5Url.slice(t.h5Url.lastIndexOf("=")+1),a=t.appUrl.slice(t.appUrl.lastIndexOf("=")+1);console.log(e);t.id;4==t.type?n.navigateTo({url:"/pages/area/RankingDetail?id="+e}):3==a?console.log(123):n.navigateTo({url:"/pages/index/Detailpage/Detailpage?id="+e})}}};t.default=e}).call(this,e("543d")["default"])},"3dba":function(n,t,e){"use strict";e.r(t);var a=e("a418"),i=e("76ed");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("61b3");var r,u=e("f0c5"),l=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"7baf977a",null,!1,a["a"],r);t["default"]=l.exports},"61b3":function(n,t,e){"use strict";var a=e("aed3"),i=e.n(a);i.a},"76ed":function(n,t,e){"use strict";e.r(t);var a=e("23f7"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},a418:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,a=(n._self._c,n.__map(n.indexLists,(function(t,a){var i=n.__get_orig(t),o=a%2==0&&t.geoLocation?e("c573"):null;return{$orig:i,m0:o}}))),i=n.__map(n.indexLists,(function(t,a){var i=n.__get_orig(t),o=a%2==1&&t.geoLocation?e("c573"):null;return{$orig:i,m1:o}}));n.$mp.data=Object.assign({},{$root:{l0:a,l1:i}})},o=[]},aed3:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index-lists/index-lists-create-component',
    {
        'components/index-lists/index-lists-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3dba"))
        })
    },
    [['components/index-lists/index-lists-create-component']]
]);