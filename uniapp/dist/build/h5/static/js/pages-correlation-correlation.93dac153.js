(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-correlation-correlation"],{"0682":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-swiper__warp[data-v-3274adde]{display:flex;flex:1;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-3274adde]{position:absolute;bottom:10px;left:0;right:0;display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center}.uni-swiper__dots-item[data-v-3274adde]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4);cursor:pointer}.uni-swiper__dots-item[data-v-3274adde]:first-child{margin:0}.uni-swiper__dots-default[data-v-3274adde]{border-radius:100px}.uni-swiper__dots-long[data-v-3274adde]{border-radius:50px}.uni-swiper__dots-bar[data-v-3274adde]{border-radius:50px}.uni-swiper__dots-nav[data-v-3274adde]{bottom:0;padding:8px 0;display:flex;flex:1;flex-direction:row;justify-content:flex-start;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-3274adde]{\r\n  /* overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap; */font-size:14px;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-3274adde]{display:flex;justify-content:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-3274adde]{color:#fff;font-size:12px;line-height:14px}',""]),t.exports=a},"0a92":function(t,a,e){"use strict";e.r(a);var o=e("7154"),n=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);a["default"]=n.a},"1d8f":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,"@import url(https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.0/css/all.css);"]),a.push([t.i,"/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */html[data-v-4cb9aada],\nbody[data-v-4cb9aada],\np[data-v-4cb9aada],\nol[data-v-4cb9aada],\nul[data-v-4cb9aada],\nli[data-v-4cb9aada],\ndl[data-v-4cb9aada],\ndt[data-v-4cb9aada],\ndd[data-v-4cb9aada],\nblockquote[data-v-4cb9aada],\nfigure[data-v-4cb9aada],\nfieldset[data-v-4cb9aada],\nlegend[data-v-4cb9aada],\nuni-textarea[data-v-4cb9aada],\npre[data-v-4cb9aada],\niframe[data-v-4cb9aada],\nhr[data-v-4cb9aada],\nh1[data-v-4cb9aada],\nh2[data-v-4cb9aada],\nh3[data-v-4cb9aada],\nh4[data-v-4cb9aada],\nh5[data-v-4cb9aada],\nh6[data-v-4cb9aada]{margin:0;padding:0}h1[data-v-4cb9aada],\nh2[data-v-4cb9aada],\nh3[data-v-4cb9aada],\nh4[data-v-4cb9aada],\nh5[data-v-4cb9aada],\nh6[data-v-4cb9aada]{font-size:100%;font-weight:400}ul[data-v-4cb9aada]{list-style:none}uni-button[data-v-4cb9aada],\nuni-input[data-v-4cb9aada],\nselect[data-v-4cb9aada],\nuni-textarea[data-v-4cb9aada]{margin:0}html[data-v-4cb9aada]{box-sizing:border-box}img[data-v-4cb9aada],\nembed[data-v-4cb9aada],\nobject[data-v-4cb9aada],\nuni-audio[data-v-4cb9aada],\nuni-video[data-v-4cb9aada]{height:auto;max-width:100%}iframe[data-v-4cb9aada]{border:0}table[data-v-4cb9aada]{border-collapse:collapse;border-spacing:0}td[data-v-4cb9aada],\nth[data-v-4cb9aada]{padding:0;text-align:left}a[data-v-4cb9aada]{text-decoration:none;color:#000}.content .corrlation .header[data-v-4cb9aada]{background-color:#81aad1;height:70vh;padding:%?40?% %?20?%}.content .corrlation .header .search[data-v-4cb9aada]{color:#fff;display:flex;align-items:center;justify-content:space-around}.content .corrlation .header .search .fa[data-v-4cb9aada]{font-size:%?40?%}.content .corrlation .header .search .search-box[data-v-4cb9aada]{display:flex;align-items:center;background-color:rgb(230 238 246);justify-content:space-around;padding:%?20?%;width:85%;border-radius:%?20?%}.content .corrlation .header .search .search-box .address[data-v-4cb9aada]{color:#000;border-right:%?2?% solid #888}.content .corrlation .header .search .search-box .address img[data-v-4cb9aada]{width:%?30?%}.content .corrlation .header .search .search-box .address span[data-v-4cb9aada]{font-weight:600;margin-left:%?10?%;margin-right:%?10?%}.content .corrlation .header .search .search-box .uni-input-placeholder[data-v-4cb9aada]{color:#000;font-weight:600;font-size:%?28?%}.content .corrlation .header .isFixed[data-v-4cb9aada]{position:fixed;top:0;left:0;width:100vw;display:flex;padding:%?20?% 0;align-items:center;justify-content:space-around;background-color:#fff;z-index:999}.content .corrlation .header .isFixed .fa[data-v-4cb9aada]{font-size:%?40?%}.content .corrlation .header .isFixed .search-box[data-v-4cb9aada]{display:flex;align-items:center;justify-content:space-around;padding:%?20?%;width:80%;border-radius:%?20?%;border:%?2?% solid #000}.content .corrlation .header .isFixed .search-box .address[data-v-4cb9aada]{color:#000;border-right:%?2?% solid #888}.content .corrlation .header .isFixed .search-box .address img[data-v-4cb9aada]{width:%?30?%}.content .corrlation .header .isFixed .search-box .address span[data-v-4cb9aada]{font-weight:600;margin-left:%?10?%;margin-right:%?10?%}.content .corrlation .header .isFixed .search-box uni-input[data-v-4cb9aada]{width:75%}.content .corrlation .header .isFixed .search-box .uni-input-placeholder[data-v-4cb9aada]{color:#000;font-weight:600;font-size:%?28?%}.content .corrlation .header .corrlation-content[data-v-4cb9aada]{padding:%?20?% 0}.content .corrlation .header .corrlation-content .title[data-v-4cb9aada]{width:100%;text-align:center;font-size:%?28?%;color:#fff;font-weight:600}.content .corrlation .header .corrlation-content .title .No[data-v-4cb9aada]{color:orange;margin-left:%?10?%}.content .corrlation .header .corrlation-content .uni-swiper-dot-box[data-v-4cb9aada]{width:100%;margin-top:%?16?%}.content .corrlation .header .corrlation-content .uni-swiper-dot-box .swiper-box[data-v-4cb9aada]{height:%?400?%}.content .corrlation .header .corrlation-content .uni-swiper-dot-box .swiper-box[data-v-4cb9aada] .uni-swiper-wrapper{height:90%}.content .corrlation .header .corrlation-content .uni-swiper-dot-box .swiper-box[data-v-4cb9aada] .uni-swiper-wrapper .swiper-item{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;color:#fff}.content .corrlation .header .corrlation-content .uni-swiper__warp[data-v-4cb9aada]{overflow:inherit}.content .corrlation .header .text[data-v-4cb9aada]{color:#fff}.content .corrlation .header .text h3[data-v-4cb9aada]{font-size:%?36?%;color:#fff;font-weight:700}.content .corrlation .header .text p[data-v-4cb9aada]{font-size:%?26?%;margin-top:%?10?%}.content .corrlation .body[data-v-4cb9aada]{padding:%?60?% %?20?%;margin-top:%?-40?%;background-color:#fcf8f5;border-radius:%?40?%}.content .corrlation .body .btns[data-v-4cb9aada]{display:flex;justify-content:space-around;margin-bottom:%?40?%}.content .corrlation .body .btns .btn[data-v-4cb9aada]{text-align:center}.content .corrlation .body .btns .btn img[data-v-4cb9aada]{width:%?80?%}.content .corrlation .body .geos[data-v-4cb9aada]{padding:%?20?% 0}.content .corrlation .body .geos h3[data-v-4cb9aada]{font-size:36px;font-weight:700;margin-bottom:%?20?%}.content .corrlation .body .geos .gos[data-v-4cb9aada]{display:flex;min-width:100vw;overflow-x:scroll}.content .corrlation .body .geos .gos .lits[data-v-4cb9aada]{margin-right:%?20?%}.content .corrlation .body .geos .gos .lits .img[data-v-4cb9aada]{width:%?400?%;height:%?292?%;border-radius:%?20?%;overflow:hidden}.content .corrlation .body .geos .gos .lits .img img[data-v-4cb9aada]{width:100%;height:100%}.content .corrlation .body .geos .gos .lits .title[data-v-4cb9aada]{margin-top:%?10?%;font-size:%?28?%;font-weight:600}.content .corrlation .body .geos .gos[data-v-4cb9aada]::-webkit-scrollbar{display:none}.content .corrlation .body .hots[data-v-4cb9aada]{width:100%;margin-top:%?40?%}.content .corrlation .body .hots h3[data-v-4cb9aada]{font-size:%?40?%;font-weight:600;margin-bottom:%?20?%}.content .corrlation .body .hots .hots-btn[data-v-4cb9aada]{display:flex;flex-wrap:nowrap;min-width:100vw;justify-content:flex-start;overflow-x:scroll}.content .corrlation .body .hots .hots-btn .hbtn[data-v-4cb9aada]{display:flex;align-items:center;background-color:#f8e7de;margin-right:%?20?%;width:100%;padding:%?20?%;border-radius:10px}.content .corrlation .body .hots .hots-btn .hbtn img[data-v-4cb9aada]{width:%?80?%}.content .corrlation .body .hots .hots-btn .hbtn p[data-v-4cb9aada]{width:%?400?%;font-size:12px;margin-left:%?20?%}.content .corrlation .body .hots .hots-btn .hb[data-v-4cb9aada]{background-color:#fff}.content .corrlation .body .hots .hots-btn[data-v-4cb9aada]::-webkit-scrollbar{display:none}.content .corrlation .body .hots .hbtn-content[data-v-4cb9aada]{margin-top:%?40?%}.content .corrlation .body .hots .hbtn-content .lists[data-v-4cb9aada]{display:flex;margin:20px 0}.content .corrlation .body .hots .hbtn-content .lists .img[data-v-4cb9aada]{width:30%;border-radius:10px;overflow:hidden;position:relative}.content .corrlation .body .hots .hbtn-content .lists .img img[data-v-4cb9aada]{width:100%;height:%?212?%}.content .corrlation .body .hots .hbtn-content .lists .img .No[data-v-4cb9aada]{position:absolute;top:%?10?%;left:%?10?%;height:%?42?%;width:%?42?%;text-align:center;background-color:#000;color:#fff;font-size:%?28?%;font-weight:600}.content .corrlation .body .hots .hbtn-content .lists .text[data-v-4cb9aada]{width:calc(70% - 20px);padding:0 %?20?%}.content .corrlation .body .hots .hbtn-content .lists .text .title[data-v-4cb9aada]{display:flex;justify-content:space-between;align-items:center}.content .corrlation .body .hots .hbtn-content .lists .text .title span[data-v-4cb9aada]{font-size:%?28?%;font-weight:600}.content .corrlation .body .hots .hbtn-content .lists .text .title .like img[data-v-4cb9aada]{width:%?40?%}.content .corrlation .body .hots .hbtn-content .lists .text .comment[data-v-4cb9aada]{display:flex;font-size:12px;align-items:center;margin-top:%?10?%}.content .corrlation .body .hots .hbtn-content .lists .text .comment .uni-section[data-v-4cb9aada]{background-color:initial}.content .corrlation .body .hots .hbtn-content .lists .text .comment .uni-section[data-v-4cb9aada] .uni-section-header{padding:0}.content .corrlation .body .hots .hbtn-content .lists .text .comment .good[data-v-4cb9aada]{margin:0 %?10?%;font-weight:900}.content .corrlation .body .hots .hbtn-content .lists .text .type[data-v-4cb9aada]{margin-top:%?10?%;font-size:%?24?%}.content .corrlation .body .hots .hbtn-content .lists .text .worktime[data-v-4cb9aada]{font-size:%?24?%;margin-top:%?10?%}.content .corrlation .body .address-type[data-v-4cb9aada]{font-size:14px;margin-top:%?40?%}.content .corrlation .body .address-type span.title[data-v-4cb9aada]{padding:%?20?%}.content .corrlation .body .address-type .types[data-v-4cb9aada]{font-size:%?32?%;font-weight:600}.content .corrlation .body .address-type .items[data-v-4cb9aada]{display:flex;overflow-x:scroll;min-width:100vw;margin-top:%?20?%}.content .corrlation .body .address-type .items .lists[data-v-4cb9aada]{width:%?312?%;margin-right:%?20?%}.content .corrlation .body .address-type .items .lists .img[data-v-4cb9aada]{width:%?312?%;height:%?312?%;border-radius:%?20?%;overflow:hidden}.content .corrlation .body .address-type .items .lists .img img[data-v-4cb9aada]{width:100%;height:100%}.content .corrlation .body .address-type .items .lists .text[data-v-4cb9aada]{margin-top:%?20?%}.content .corrlation .body .address-type .items .lists .text p[data-v-4cb9aada]{font-size:15px;font-weight:600;overflow:hidden;text-overflow:ellipsis;word-spacing:normal;white-space:nowrap}.content .corrlation .body .address-type .items .lists .text .good[data-v-4cb9aada]{display:flex;align-items:center;margin:%?10?% 0}.content .corrlation .body .address-type .items .lists .text .good .uni-section[data-v-4cb9aada] .uni-section-header{padding:0}.content .corrlation .body .address-type .items .lists .text .good .people[data-v-4cb9aada]{margin-left:%?10?%}.content .corrlation .body .address-type .items .lists .text .ty[data-v-4cb9aada]{font-size:%?24?%;overflow:hidden;text-overflow:ellipsis;word-spacing:normal;white-space:nowrap}.content .corrlation .body .address-type .items[data-v-4cb9aada]::-webkit-scrollbar{display:none}.content .corrlation .body .more[data-v-4cb9aada]{margin-top:%?40?%;display:inline-block;width:100%;text-align:center}.content .load[data-v-4cb9aada]{width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}.content .load img[data-v-4cb9aada]{width:%?160?%}",""]),t.exports=a},"22cb":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return o}));var o={uniSwiperDot:e("ff7d").default,uniSection:e("7b78").default,uniRate:e("d05f").default},n=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",{staticClass:"content"},[t.correlation.coverImages&&0!=t.correlation.length?o("div",{staticClass:"corrlation"},[o("div",{staticClass:"header",style:{backgroundColor:t.correlation.coverImages[0].albumAreaColor}},[o("div",{staticClass:"search"},[o("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.toindex()}}}),o("div",{staticClass:"search-box"},[o("v-uni-navigator",{attrs:{url:"../area/area"}},[t.correlation?o("div",{staticClass:"address"},[o("img",{attrs:{src:e("4425"),alt:""}}),o("span",[t._v(t._s(t.correlation.geoName))])]):t._e()]),o("v-uni-navigator",{attrs:{url:"../index/Search/Search"}},[o("v-uni-input",{attrs:{type:"text",placeholder:"搜索酒店、景点和餐厅"}})],1)],1)]),t.isFixed?o("div",{staticClass:"isFixed"},[o("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toindex()}}}),o("div",{staticClass:"search-box"},[o("v-uni-navigator",{attrs:{url:"../area/area"}},[t.correlation?o("div",{staticClass:"address"},[o("img",{attrs:{src:e("4425"),alt:""}}),o("span",[t._v(t._s(t.correlation.geoName))])]):t._e()]),o("v-uni-input",{attrs:{type:"text",placeholder:"搜索酒店、景点和餐厅"}})],1)]):t._e(),o("div",{staticClass:"corrlation-content"},[t.correlation?o("div",{staticClass:"title"},[t.correlation.rank?o("span",[t._v(t._s(t.correlation.rank.year)+t._s(t.correlation.rank.geoName)+t._s(t.correlation.rank.rankName))]):t._e(),t.correlation.rank?o("span",{staticClass:"No"},[t._v(t._s(t.correlation.rank.rankNum))]):t._e()]):t._e(),o("uni-swiper-dot",{staticClass:"uni-swiper-dot-box",attrs:{info:t.info,current:t.current,mode:t.mode,field:"content"},on:{clickItem:function(a){arguments[0]=a=t.$handleEvent(a),t.clickItem.apply(void 0,arguments)}}},[o("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.swiperDotIndex},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.change.apply(void 0,arguments)}}},t._l(t.correlation.coverImages,(function(t,a){return o("v-uni-swiper-item",{key:a},[o("v-uni-view",{staticClass:"swiper-item",class:"swiper-item"+a},[o("v-uni-text",{staticStyle:{color:"#fff","font-size":"32px"}},[o("img",{attrs:{src:t.images.cutImg.url,alt:""}})])],1)],1)})),1)],1),o("div",{staticClass:"text"},[o("h3",[t._v(t._s(t.correlation.title))]),o("p",[t._v(t._s(t.correlation.description))])])],1)]),o("div",{staticClass:"body"},[o("div",{staticClass:"btns"},t._l(t.correlation.quickLinks,(function(a){return o("div",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.torouter(a,t.correlation.geoName)}}},[o("img",{attrs:{src:a.icon,alt:""}}),o("p",[t._v(t._s(a.name))])])})),0),t.correlation.geos?o("div",{staticClass:"geos"},[o("h3",[t._v(t._s(t.correlation.geos.title))]),o("ul",{staticClass:"gos"},t._l(t.correlation.geos.locations,(function(a){return o("li",{staticClass:"lits"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:a.coverImage.large.url,alt:""}})]),o("div",{staticClass:"title"},[o("span",[t._v(t._s(a.name))])])])})),0)]):t._e(),t.correlation.hots?o("div",{staticClass:"hots"},[o("h3",[t._v(t._s(t.correlation.hots.title))]),t.correlation.hots.sublist[0].icon?o("ul",{staticClass:"hots-btn"},t._l(t.correlation.hots.sublist,(function(a){return o("li",{staticClass:"hbtn",class:a.listId==t.hbtnIndex?"hb":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active(a.listId)}}},[o("img",{attrs:{src:a.icon,alt:""}}),o("p",[t._v(t._s(a.title))])])})),0):t._e(),t._l(t.correlation.hots.sublist,(function(a){return o("div",{staticClass:"hbtn-content"},t._l(a.locations,(function(n,i){return t.hbtnIndex==a.listId?o("div",{staticClass:"lists"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:n.coverImage.large.url,alt:""}}),o("div",{staticClass:"No"},[t._v(t._s(i+1))])]),o("div",{staticClass:"text"},[o("div",{staticClass:"title"},[o("span",[t._v(t._s(n.name))]),o("div",{staticClass:"like"},[o("img",{attrs:{src:e("e34f"),alt:""}})])]),o("div",{staticClass:"comment"},[o("uni-section",{attrs:{title:""}},[o("uni-rate",{attrs:{readonly:!0,value:n.rating,size:"16"}})],1),o("span",{staticClass:"good"},[t._v(t._s(n.ratingStatus))]),o("span",{staticClass:"people"},[t._v(t._s(n.ratingCount)+"人点评")])],1),o("div",{staticClass:"type"},t._l(n.tags,(function(a){return o("span",[o("span",[t._v(t._s(a))]),t._v(",")])})),0),o("div",{staticClass:"worktime"},[t._v(t._s(n.hours))])])]):t._e()})),0)}))],2):t._e(),t.correlation.normals?o("div",{staticClass:"address-type"},[o("div",{staticClass:"type"},[o("span",{staticClass:"title",class:1==t.addresstype?"types":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btntype(1)}}},[t._v("景点/体检")]),o("span",{staticClass:"title",class:2==t.addresstype?"types":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btntype(2)}}},[t._v("住宿")]),o("span",{staticClass:"title",class:3==t.addresstype?"types":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btntype(3)}}},[t._v("餐饮")])]),t.correlation.normals&&1==t.addresstype?o("ul",{staticClass:"items"},t._l(t.correlation.normals.attractions.locations,(function(a){return o("li",{staticClass:"lists"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:a.coverImage.large.url,alt:""}})]),o("div",{staticClass:"text"},[o("p",[t._v(t._s(a.name))]),o("div",{staticClass:"good"},[o("uni-section",{attrs:{title:""}},[o("uni-rate",{attrs:{readonly:!0,value:2,size:"12"}})],1),o("span",{staticClass:"people"},[t._v(t._s(a.ratingCount)+"人评价")])],1),o("div",{staticClass:"ty"},t._l(a.tags,(function(a){return o("span",[t._v(t._s(a))])})),0)])])})),0):t._e(),t.correlation.normals&&2==t.addresstype?o("ul",{staticClass:"items"},t._l(t.correlation.normals.hotels.locations,(function(a){return o("li",{staticClass:"lists"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:a.coverImage.large.url,alt:""}})]),o("div",{staticClass:"text"},[o("p",[t._v(t._s(a.name))]),o("div",{staticClass:"good"},[o("uni-section",{attrs:{title:""}},[o("uni-rate",{attrs:{readonly:!0,value:2,size:"12"}})],1),o("span",{staticClass:"people"},[t._v(t._s(a.ratingCount)+"人评价")])],1),o("div",{staticClass:"ty"},t._l(a.tags,(function(a){return o("span",[t._v(t._s(a)+",")])})),0)])])})),0):t._e(),t.correlation.normals&&3==t.addresstype?o("ul",{staticClass:"items"},t._l(t.correlation.normals.restaurants.locations,(function(a){return o("li",{staticClass:"lists"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:a.coverImage.large.url,alt:""}})]),o("div",{staticClass:"text"},[o("p",[t._v(t._s(a.name))]),o("div",{staticClass:"good"},[o("uni-section",{attrs:{title:""}},[o("uni-rate",{attrs:{readonly:!0,value:2,size:"12"}})],1),o("span",{staticClass:"people"},[t._v(t._s(a.ratingCount)+"人评价")])],1),o("div",{staticClass:"ty"},t._l(a.tags,(function(a){return o("span",[t._v(t._s(a)+",")])})),0)])])})),0):t._e()]):t._e()])]):t._e(),0==t.correlation.length?o("div",{staticClass:"load"},[o("img",{attrs:{src:e("38a5"),alt:""}})]):t._e()])},i=[]},4425:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABK9JREFUWEfFV0uMVFUQPfWG6QlRE12g0YjRSAL2rdeKGxNBPorEDwoBNCD4DRo14kaj4EZdgUY3YvAD8cNHjREjZlBRjAiyYIGjfet2ZpIxGjGayEKNIKPNvDJFXk963rzX3YML7+Yl71bVPbc+p+oS/udF4zm/UqlcNDw8fA0RrVDV84joXNNX1V+I6GdV3d7V1fV5tVr9vlO7HQFg5vkAVgK4vdkwEYUUgMscuBXANhH5tB2QtgDiOH5VVe9NDW1T1T1RFMnx48dlcHDwb/s/ZcqUnokTJ3KSJExE81KwIKJN3vv7WoFoCYCZvwAwxwwQ0Vrv/fp2N7L9OI7XqOq6VHaviMwt0isEwMwPANhIRH1JkswKIRzt5PCGjHPu9CiK9qnqdAAPishLefq5AOI4XqiqH5iCiLQNUytgzKypBxd573dmZccYd86VUuRXqOrCEMKHWaVUZiGA81X1BICfenp6dh86dOivHNmbiWgnER1MPfnPqETOKjDzUwCeTLN4VNab7LRp0y6cMGHCdgBXZnS/S5Lkllqt1pdj06rCquhpETH7I2uMB5j5GwCXqurMEMKBZmFmvhjAYPrvNVXdH0XRMVW9DsA99j+KonOq1eqvzXrOuRlE9BWAb0XkskIAcRzHqloFMFyv188aGBj4MwPAwnETEa303psXRpZzbhkRvQ1gh4gsbd6bOnXqGd3d3b8B6CKiivfeN/ZHecA5t4SI3gPgRaSSOaBERL8D6BWRW/MSzzlnsZ4/NDR0ZoMjGnLMbBezCy4NIezIBRDH8UOqusFu4r2/LXN74wPjhTFxbDqkkT9zRWRvs34cx2+p6nIiWu29fzEXADM/AuA5VV0fQlhb4IH3RcQSasxi5nctRHkecM6tI6I1AB4VkeeLAFwLwPj7HRFZnpPNvQCuTpJkbq1WO9i8Xy6Xp0dRZIm2W0QW5+hafiwDMF9EPisCMBnAj9ZkvPecY6QRhsNE9Gy9Xu8tlUonVHWRqj4GYDIRXeK978/qxnEsqmpN6wIROZwLwH4ysyXI4iRJrqrVanajUYuZFxDRK9aOM1t/qOoTIYSNWZ1yuTwziqL9ACx8S5r383igccstInJnXqzTsloBYAaAIVU9UCqVdvX19R0pyI03AdwBYExy5vI8M28CsKpVE8k7qODwk00NwGYRabT1EdFcADb5JEnyJQDraPOq1erXnR7YLFepVC5PkmQPgKNRFM3Om5QKO51zbpUNFET0iff++lMBEMfxx0bTNtCEEDbn2Wg3kDRKp5B8ioA1NbXcki6sggz5lInIGG2Sqt4dQnijE0845+4iotcBHFHVOSGEWpFe22GDmVcDeAHAMQALshRbwBVGWKcBeFhENrQC3RZAyg3WoKxRhXq9vqC/v/+HPKM2K3R3d/emhDOmK447B5oVmNmqYhaAj0TkxoKS2wXgBgD7RGR2J+HqyAMNQ8xs74AygK0iYsQysph5S/puqIlI9p1QiGVcANJw2LQzCcDLImIkY/RtE+/9lnQicnYnN++oClqU2MlJV1WfsS8RPW7fU5mgx+2BpnCMPFoAtHx8/OcqaOEJG0Ds5rkjWiehOGUPdGK8E5l/AeQ0Cj9gw1KkAAAAAElFTkSuQmCC"},6477:function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.swiper-item[data-v-4cb9aada]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:200px;color:#fff}.image[data-v-4cb9aada]{width:90%}[data-v-4cb9aada] .image img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}.uni-bg-red[data-v-4cb9aada]{background-color:#ff5a5f}.uni-bg-green[data-v-4cb9aada]{background-color:#09bb07}.uni-bg-blue[data-v-4cb9aada]{background-color:#007aff}.example-body[data-v-4cb9aada]{display:flex;flex-direction:row;padding:%?20?%}.example-body-item[data-v-4cb9aada]{flex-direction:row;justify-content:center;align-items:center;margin:%?15?%;padding:%?15?%;height:%?60?%;display:flex;padding:0 %?15?%;flex:1;border-color:#e5e5e5;border-style:solid;border-width:1px;border-radius:5px}.example-body-item-text[data-v-4cb9aada]{font-size:%?28?%;color:#333}.example-body-dots[data-v-4cb9aada]{width:%?16?%;height:%?16?%;border-radius:50px;background-color:#333;margin-left:%?10?%}.active[data-v-4cb9aada]{border-style:solid;border-color:#007aff;border-width:1px}',""]),t.exports=a},7154:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created:function(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};a.default=o},"91fb":function(t,a,e){"use strict";e("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={data:function(){return{isFixed:!1,hbtnIndex:"",addresstype:1,correlation:[],info:[],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{},swiperDotIndex:0,geoId:""}},onLoad:function(t){var a=this;this.geoId=t.id,uni.request({url:"https://m.ctrip.com/restapi/soa2/21130/getGeoHomeInfoApp",method:"POST",data:{geoId:t.id,fromPage:null},success:function(t){a.info=t.data.coverImages,a.correlation=t.data,a.hbtnIndex=a.correlation.hots.sublist[0].listId}})},onPageScroll:function(t){this.scolltop(t.scrollTop)},methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,a){this.mode=t,this.modeIndex=a,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]},clickItem:function(t){this.swiperDotIndex=t},onBanner:function(t){console.log(22222,t)},active:function(t){this.hbtnIndex=t},btntype:function(t){this.addresstype=t},scolltop:function(t){var a=this,e=t;uni.createSelectorQuery().selectAll(".content").boundingClientRect((function(t){console.log(e),a.isFixed=e>=236})).exec()},toindex:function(){uni.switchTab({url:"/pages/index/index"})},torouter:function(t,a){console.log(a),"daodao_travelers_choice_home"==t.category?uni.navigateTo({url:"../area/RankingDetail?id="+this.geoId+"&index=5&name="+a}):"hotels"==t.category?uni.navigateTo({url:"./hotel?id="+this.geoId+"&index=2&name="+a}):"attractions"==t.category?uni.navigateTo({url:"./hotel?id="+this.geoId+"&index=3&name="+a}):console.log(123),console.log(t.category)}}};a.default=o},b877:function(t,a,e){"use strict";var o=e("dcd5"),n=e.n(o);n.a},bacf:function(t,a,e){"use strict";var o;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return o}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?e("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(a,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(o===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/2+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickItem(o)}}})})),1):t._e(),"dot"===t.mode?e("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(a,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickItem(o)}}})})),1):t._e(),"round"===t.mode?e("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(a,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item ",class:[o===t.current&&"uni-swiper__dots-long"],style:{width:(o===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickItem(o)}}})})),1):t._e(),"nav"===t.mode?e("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[e("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?e("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(a,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:o===t.current?t.dots.selectedColor:t.dots.color,"background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickItem(o)}}},[e("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(o+1))])],1)})),1):t._e()],2)},i=[]},d478:function(t,a,e){"use strict";e.r(a);var o=e("91fb"),n=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);a["default"]=n.a},d53e:function(t,a,e){"use strict";e.r(a);var o=e("22cb"),n=e("d478");for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);e("de81"),e("ebde");var r,s=e("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"4cb9aada",null,!1,o["a"],r);a["default"]=d.exports},d5a5:function(t,a,e){var o=e("1d8f");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("275a8224",o,!0,{sourceMap:!1,shadowMode:!1})},dcd5:function(t,a,e){var o=e("0682");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("8d7e2c30",o,!0,{sourceMap:!1,shadowMode:!1})},de81:function(t,a,e){"use strict";var o=e("d5a5"),n=e.n(o);n.a},e34f:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4NJREFUWEfVlluIVWUUx/9rn4dmNHwqTFETOiHn7PVN6qigRWZQiUEXonrqKQr0wUteBryHFXjBy4sI1ks9afiQD1JRVBYV2m3Otz7Hy4CDk4jgg+jkiHBmxYq99cyZfc4c58wwtJ7OWfvba/3W//v2+hZhnI3GOT/+PwCFQmFKFEWTQwh/1VPNOdeuqn+LyNVG1K2rADO/BWAZgPkAHksCXgfwI4C9IvK9+eI4nk1E2wA8C2BSsu4cgFOq+k0I4dNaMDUBmHk3gHUVL/YCuAxgJoBHEv9BAAa0MflvVV9S1YeJyNaldkhElmdBDAFg5ukAjiVVXwSwtlwu/9rV1XUlDRDH8TtE9BGAhxLfNVXdGEI4nK5h5skAnjSlADwK4HcAr4qIFXLXsgD2A1hFRMejKFrR2dlpVQ+xOI6fIKJPANxR1eUhhM6sdcVicUYURabUiwAOiMjqmgDOuadV9QcA16IoeqpUKtk+Nm1tbW2zBgYGfjLFiGix9/5kGnSQAs65L1T1JVXtCCHsajpzRYA4jjcQ0U5T1nv/ciYAM18AMFVEJo5m8opzcQvAFRFJv6h7jSifzz/Q0tJyG0CviMwYIwA7gNP6+vpae3p6LNc9gEKh8HgulztPRH967+eOEYA1MTu8Be/92UEAxWJxThRFfwA4LSILxgjgNwDtRDTPe2+f5eC7gJn/AaAi8uAYAVh8EpEJtQ7h1wCeM5lEpDSaEBUKnxSRxbUA0va7R0TWjyZA2tpVdW8IYW0mQBzHRSL6JblQlqSXTbMgzPwMgO8A3FDVhSGEM5kA5mTm7QDsZvtKRJY2mzyJ+SWAFwC8LyIW/64NuQvy+fyk1tbWn1U1JqId3vutzUA453ao6mYiCv39/Yu6u7tv1AWwh86511X16H+fCdE+7/17I4Fg5gMAViZx3vDef14dp+Y8UAVx2Hv/7v1AMPPHAN6ul3xIH6hOUAkB4Ei5XF5TORdkAdnolsvl9gF4c7jkwwJUbwcAIaIO7/2JrOTOuWWqutPOciPJGwJITvHzAKxHtCWJN4vIh5UQzLwJwAeJz5rYehGxxlbXGh7LkxHLIGxQNTtGRBvsh6ra7PBa4v8sSd78VJyFzsw2qBpIllnVe4aruvJ5wwpUyW1bYkNpe+I/BWBLI5JXw40IIA3inHuFiG6WSqVv76fqphUYabKs95pSYDRAxh3gX628UTB3t9rnAAAAAElFTkSuQmCC"},e5c7:function(t,a,e){var o=e("6477");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("7afbdede",o,!0,{sourceMap:!1,shadowMode:!1})},ebde:function(t,a,e){"use strict";var o=e("e5c7"),n=e.n(o);n.a},ff7d:function(t,a,e){"use strict";e.r(a);var o=e("bacf"),n=e("0a92");for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);e("b877");var r,s=e("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"3274adde",null,!1,o["a"],r);a["default"]=d.exports}}]);