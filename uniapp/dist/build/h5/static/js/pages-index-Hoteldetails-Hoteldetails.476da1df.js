(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-Hoteldetails-Hoteldetails"],{2472:function(t,e,a){t.exports=a.p+"static/img/next-互动.211deb0e.png"},2773:function(t,e,a){"use strict";a.r(e);var o=a("b345"),i=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a},3126:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-rate[data-v-588f4815]{display:flex;line-height:1;font-size:0;flex-direction:row;cursor:pointer}.uni-rate__icon[data-v-588f4815]{position:relative;line-height:1;font-size:0}.uni-rate__icon-on[data-v-588f4815]{overflow:hidden;position:absolute;top:0;left:0;line-height:1;text-align:left}.uni-cursor-not-allowed[data-v-588f4815]{cursor:not-allowed!important}',""]),t.exports=e},"38e0":function(t,e,a){"use strict";var o=a("f3a5"),i=a.n(o);i.a},"479d":function(t,e,a){"use strict";var o=a("6cfe"),i=a.n(o);i.a},"6cfe":function(t,e,a){var o=a("b393");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("3abd6958",o,!0,{sourceMap:!1,shadowMode:!1})},8974:function(t,e,a){var o=a("934e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("67de612f",o,!0,{sourceMap:!1,shadowMode:!1})},"934e":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".uni-margin-wrap[data-v-3711591f]{width:%?690?%;width:100%}.swiper[data-v-3711591f]{height:250px}.swiper-item[data-v-3711591f]{display:block;height:%?300?%;line-height:%?300?%;text-align:center}.swiper-list[data-v-3711591f]{margin-top:%?40?%;margin-bottom:0}.uni-common-mt[data-v-3711591f]{margin-top:%?60?%;position:relative}.info[data-v-3711591f]{position:absolute;right:%?20?%}.uni-padding-wrap[data-v-3711591f]{width:%?550?%;padding:0 %?100?%}",""]),t.exports=e},b345:function(t,e,a){"use strict";a("a9e3"),a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{id:0,hoteldeta:null,neighborHotel:null,indicatorDots:!0,value:0,score:0}},onChange:function(t){this.setData({value:t.detail})},created:function(){this.getInfor()},onLoad:function(t){console.log(t),this.id=t.id},methods:{getInfor:function(){var t=this;uni.request({url:"https://m.ctrip.com/restapi/soa2/20405/sightInfo ",method:"POST",data:{sightId:null,locationId:Number(this.id),latitude:null,longitude:null,fromPage:"10650052446"},success:function(e){var a;t.hoteldeta=e.data,t.value=t.hoteldeta.commentInfo.score,1==(null===(a=t.value)||void 0===a?void 0:a.toString().length)&&(t.score=t.value.toString()+".0");var o=t.hoteldeta.basicInfo.latitude,i=t.hoteldeta.basicInfo.longitude;uni.request({url:"https://m.ctrip.com/restapi/soa2/20405/nearByLocation ",method:"POST",data:{locationId:Number(t.id),latitude:o,longitude:i,checkInTime:"2022-11-11",checkOutTime:"2022-11-12",roomCount:1,nightCount:1,adultCount:2,childCount:0,childAgeRange:""},success:function(e){console.log(e),t.neighborHotel=e.data.neighborhoodHotel}})}})}}};e.default=o},b393:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".hoteldeta[data-v-3711591f]{background-color:#e1e1e1}.hoteldeta .nav_hearr[data-v-3711591f]{position:fixed;z-index:999;top:12px;left:50px;width:70%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}.hoteldeta .swip .swiper .swiper-item img[data-v-3711591f]{width:100%;height:250px}.hoteldeta .title[data-v-3711591f]{padding:0 15px;background-color:#fff}.hoteldeta .title .title_warp[data-v-3711591f]{padding:10px 0;border-bottom:1px solid #e1e1e1}.hoteldeta .title .title_warp .maimain h3[data-v-3711591f]{font-size:17px}.hoteldeta .title .title_warp p.intro[data-v-3711591f]{font-size:12px;padding:2px 0}.hoteldeta .title .title_warp .ranking[data-v-3711591f]{display:flex;align-items:center}.hoteldeta .title .title_warp .ranking img[data-v-3711591f]{width:12px;height:12px;display:block;margin-right:5px}.hoteldeta .title .title_warp .ranking span.into[data-v-3711591f]{color:#00a964;font-size:13px;font-weight:500}.hoteldeta .score[data-v-3711591f]{background-color:#fff;padding:0 15px}.hoteldeta .score .score_warp[data-v-3711591f]{padding:5px 0;display:flex;align-items:center;justify-content:space-between}.hoteldeta .score .score_warp .score_left[data-v-3711591f]{display:flex;align-items:center}.hoteldeta .score .score_warp .score_left .evaluate span[data-v-3711591f]{font-size:30px;font-weight:500}.hoteldeta .score .score_warp .score_left .scor_item[data-v-3711591f]{margin-left:10px}.hoteldeta .score .score_warp .score_left .scor_item .intro span.eval[data-v-3711591f]{font-size:14px}.hoteldeta .score .score_warp .score_left .scor_item .intro span[data-v-3711591f]{font-size:12px}.hoteldeta .score .score_warp .score_right[data-v-3711591f]{display:flex;align-items:center}.hoteldeta .score .score_warp .score_right p[data-v-3711591f]{font-size:12px}.hoteldeta .score .score_warp .score_right img[data-v-3711591f]{display:block;width:15px}.hoteldeta .location[data-v-3711591f]{background-color:#fff;padding:0 15px}.hoteldeta .location .location_warp[data-v-3711591f]{width:100%;padding:10px 0;border-bottom:1px solid #e1e1e1}.hoteldeta .location .location_warp p[data-v-3711591f]{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hoteldeta .photo[data-v-3711591f]{background-color:#fff;margin:10px 0;padding:20px 0;padding-left:15px}.hoteldeta .photo .photo_warp .title_pho[data-v-3711591f]{font-size:20px;font-weight:600;padding-bottom:20px}.hoteldeta .photo .photo_warp .img_list[data-v-3711591f]{display:flex;width:auto;overflow-x:scroll}.hoteldeta .photo .photo_warp .img_list[data-v-3711591f]::-webkit-scrollbar{display:none}.hoteldeta .photo .photo_warp .img_list .img_item[data-v-3711591f]{margin-left:5px}.hoteldeta .photo .photo_warp .img_list .img_item[data-v-3711591f]:first-child{margin:0}.hoteldeta .photo .photo_warp .img_list .img_item img[data-v-3711591f]{border-radius:5px;display:block;width:150px}.hoteldeta .hotelselect[data-v-3711591f]{padding:0 15px;padding-top:20px;background-color:#fff;padding-bottom:50px}.hoteldeta .hotelselect .hotelselect_warp .title_selfc[data-v-3711591f]{font-weight:600;padding-bottom:20px;border-bottom:1px solid #e1e1e1}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car[data-v-3711591f]{display:flex;align-items:center}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .photo_ca[data-v-3711591f]{padding:10px 0;margin-right:10px}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .photo_ca img[data-v-3711591f]{display:block;width:80px;border-radius:5px}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right[data-v-3711591f]{display:flex;align-items:center;padding:10px 0;border-bottom:1px solid #e1e1e1}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right .hote_intro[data-v-3711591f]{width:100%;width:180px;flex:1}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right .hote_intro h4[data-v-3711591f]{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right .hote_intro .hote_score[data-v-3711591f]{display:flex;align-items:center}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right .hote_intro .hote_score span[data-v-3711591f]{font-size:12px;margin-left:5px}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right .hote_intro p[data-v-3711591f]{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right .see_hote[data-v-3711591f]{margin-left:5px}.hoteldeta .hotelselect .hotelselect_warp .holte_list .holte_car .hote_right .see_hote span[data-v-3711591f]{font-size:13px;background-color:#fed035;padding:8px;border-radius:10px}",""]),t.exports=e},b4e51:function(t,e,a){"use strict";a("c975"),a("a9e3"),a("e25e"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniRate",props:{isFill:{type:[Boolean,String],default:!0},color:{type:String,default:"#ececec"},activeColor:{type:String,default:"#ffca3e"},disabledColor:{type:String,default:"#c0c0c0"},size:{type:[Number,String],default:24},value:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},max:{type:[Number,String],default:5},margin:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},readonly:{type:[Boolean,String],default:!1},allowHalf:{type:[Boolean,String],default:!1},touchable:{type:[Boolean,String],default:!0}},data:function(){return{valueSync:"",userMouseFristMove:!0,userRated:!1,userLastRate:1}},watch:{value:function(t){this.valueSync=Number(t)},modelValue:function(t){this.valueSync=Number(t)}},computed:{stars:function(){for(var t=this.valueSync?this.valueSync:0,e=[],a=Math.floor(t),o=Math.ceil(t),i=0;i<this.max;i++)a>i?e.push({activeWitch:"100%"}):o-1===i?e.push({activeWitch:100*(t-a)+"%"}):e.push({activeWitch:"0"});return e},marginNumber:function(){return Number(this.margin)}},created:function(){this.valueSync=Number(this.value||this.modelValue),this._rateBoxLeft=0,this._oldValue=null},mounted:function(){var t=this;setTimeout((function(){t._getSize()}),100),this.PC=this.IsPC()},methods:{touchstart:function(t){if(!this.IsPC()&&!this.readonly&&!this.disabled){var e=t.changedTouches[0],a=e.clientX,o=e.screenX;this._getRateCount(a||o)}},touchmove:function(t){if(!this.IsPC()&&!this.readonly&&!this.disabled&&this.touchable){var e=t.changedTouches[0],a=e.clientX,o=e.screenX;this._getRateCount(a||o)}},mousedown:function(t){if(this.IsPC()&&!this.readonly&&!this.disabled){var e=t.clientX;this.userLastRate=this.valueSync,this._getRateCount(e),this.userRated=!0}},mousemove:function(t){if(this.IsPC()&&!this.userRated&&(this.userMouseFristMove&&(console.log("---mousemove----",this.valueSync),this.userLastRate=this.valueSync,this.userMouseFristMove=!1),!this.readonly&&!this.disabled&&this.touchable)){var e=t.clientX;this._getRateCount(e)}},mouseleave:function(t){this.IsPC()&&(this.readonly||this.disabled||!this.touchable||(this.userRated?this.userRated=!1:this.valueSync=this.userLastRate))},IsPC:function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,o=0;o<e.length-1;o++)if(t.indexOf(e[o])>0){a=!1;break}return a},_getRateCount:function(t){this._getSize();var e=Number(this.size);if(isNaN(e))return new Error("size 属性只能设置为数字");var a=t-this._rateBoxLeft,o=parseInt(a/(e+this.marginNumber));o=o<0?0:o,o=o>this.max?this.max:o;var i=parseInt(a-(e+this.marginNumber)*o),s=0;(this._oldValue!==o||this.PC)&&(this._oldValue=o,s=this.allowHalf?i>e/2?o+1:o+.5:o+1,s=Math.max(.5,Math.min(s,this.max)),this.valueSync=s,this._onChange())},_onChange:function(){this.$emit("input",this.valueSync),this.$emit("update:modelValue",this.valueSync),this.$emit("change",{value:this.valueSync})},_getSize:function(){var t=this;uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((function(e){e&&(t._rateBoxLeft=e[0].left)}))}}};e.default=o},c7a9:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return o}));var o={uniIcons:a("8c1b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{ref:"uni-rate",staticClass:"uni-rate"},t._l(t.stars,(function(e,o){return a("v-uni-view",{key:o,staticClass:"uni-rate__icon",class:{"uni-cursor-not-allowed":t.disabled},style:{"margin-right":t.marginNumber+"px"},on:{touchstart:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},mousedown:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.mousedown.apply(void 0,arguments)},mousemove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.mousemove.apply(void 0,arguments)},mouseleave:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseleave.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{color:t.color,size:t.size,type:t.isFill?"star-filled":"star"}}),a("v-uni-view",{staticClass:"uni-rate__icon-on",style:{width:e.activeWitch}},[a("uni-icons",{attrs:{color:t.disabled?t.disabledColor:t.activeColor,size:t.size,type:"star-filled"}})],1)],1)})),1)],1)},s=[]},ce93:function(t,e,a){"use strict";var o=a("8974"),i=a.n(o);i.a},d05f:function(t,e,a){"use strict";a.r(e);var o=a("c7a9"),i=a("fc0f");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("38e0");var l,n=a("f0c5"),r=Object(n["a"])(i["default"],o["b"],o["c"],!1,null,"588f4815",null,!1,o["a"],l);e["default"]=r.exports},d3e5:function(t,e,a){"use strict";a.r(e);var o=a("f45f"),i=a("2773");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("479d"),a("ce93");var l,n=a("f0c5"),r=Object(n["a"])(i["default"],o["b"],o["c"],!1,null,"3711591f",null,!1,o["a"],l);e["default"]=r.exports},f3a5:function(t,e,a){var o=a("3126");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("a835d92e",o,!0,{sourceMap:!1,shadowMode:!1})},f45f:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return o}));var o={uniRate:a("d05f").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.hoteldeta?o("v-uni-view",{staticClass:"hoteldeta"},[o("div",{staticClass:"nav_hearr"},[t._v(t._s(t.hoteldeta.basicInfo.name))]),o("div",{staticClass:"swip"},[o("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":t.indicatorDots}},t._l(t.hoteldeta.bannerPhotos.photos,(function(t){return o("v-uni-swiper-item",{staticClass:"swiper-item"},[o("img",{attrs:{src:t.images.medium.url,alt:""}})])})),1)],1),o("div",{staticClass:"title"},[o("div",{staticClass:"title_warp"},[o("div",{staticClass:"maimain"},[o("h3",[t._v(t._s(t.hoteldeta.basicInfo.enName))])]),o("p",{staticClass:"intro"},[t._v(t._s(t.hoteldeta.basicInfo.geoName))]),o("div",{staticClass:"ranking"},[o("img",{attrs:{src:t.hoteldeta.tags.others[0].icon,alt:""}}),o("span",{staticClass:"into"},[t._v(t._s(t.hoteldeta.tags.others[0].displayName))])])])]),o("div",{staticClass:"score"},[o("div",{staticClass:"score_warp"},[o("div",{staticClass:"score_left"},[o("div",{staticClass:"evaluate"},[o("span",[t._v(t._s(t.score))])]),o("div",{staticClass:"scor_item"},[o("uni-rate",{attrs:{"allow-half":!0,touchable:!1,"is-fill":!1,readonly:!0,size:18,color:"#bbb","active-color":"#00a964"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),o("div",{staticClass:"intro"},[o("span",{staticClass:"eval"},[t._v(t._s(t.hoteldeta.commentInfo.description))]),o("span",[t._v("("+t._s(t.hoteldeta.commentInfo.favorableRateBrief)+")")])])],1)]),o("div",{staticClass:"score_right"},[o("p",[t._v(t._s(t.hoteldeta.commentInfo.count)+"条点评")]),o("img",{attrs:{src:a("2472"),alt:""}})])])]),o("div",{staticClass:"location"},[o("div",{staticClass:"location_warp"},[o("p",[t._v(t._s(t.hoteldeta.basicInfo.address))])])]),t.hoteldeta.photoAlbums.length?o("div",{staticClass:"photo"},[o("div",{staticClass:"photo_warp"},[o("div",{staticClass:"title_pho"},[t._v("照片")]),o("div",{staticClass:"img_list"},t._l(t.hoteldeta.photoAlbums,(function(t){return o("div",{staticClass:"img_item"},[o("img",{attrs:{src:t.images.small.url,alt:""}})])})),0)])]):t._e(),t.neighborHotel?o("div",{staticClass:"hotelselect"},[o("div",{staticClass:"hotelselect_warp"},[o("div",{staticClass:"title_selfc"},[t._v("周边精选酒店")]),o("div",{staticClass:"holte_list"},t._l(t.neighborHotel,(function(e){return o("div",{staticClass:"holte_car"},[o("div",{staticClass:"photo_ca"},[o("img",{attrs:{src:e.images.small.url,alt:""}})]),o("div",{staticClass:"hote_right"},[o("div",{staticClass:"hote_intro"},[o("h4",[t._v(t._s(e.name))]),o("div",{staticClass:"hote_score"},[o("uni-rate",{attrs:{"allow-half":!0,touchable:!1,"is-fill":!1,readonly:!0,size:18,color:"#bbb","active-color":"#00a964"},model:{value:e.commentScore,callback:function(a){t.$set(e,"commentScore",a)},expression:"holte.commentScore"}}),o("span",[t._v(t._s(e.commentCount)+"条评论")])],1),o("p",[t._v(t._s(e.rankingDesc))]),o("p",[t._v(t._s(e.distance))])]),o("div",{staticClass:"see_hote"},[o("span",[t._v(t._s(e.defaultDisplay))])])])])})),0)])]):t._e()]):t._e()},s=[]},fc0f:function(t,e,a){"use strict";a.r(e);var o=a("b4e51"),i=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a}}]);