(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-collect"],{"36db":function(t,n,i){"use strict";var e=i("969f"),a=i.n(e);a.a},5472:function(t,n,i){t.exports=i.p+"static/img/heart_red.3101a682.png"},"5e5d":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"collect"},[e("v-uni-view",{staticClass:"header"},[e("div",{staticClass:"header-btn"},[e("div",{class:0==t.btnIndex?"btn":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.btnindex(0)}}},[e("span",[t._v("我的收藏")])]),e("div",{class:1==t.btnIndex?"btn":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.btnindex(1)}}},[e("span",[t._v("最近浏览")])]),e("div",{class:2==t.btnIndex?"btn":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.btnindex(2)}}},[e("span",[t._v("旅行")])])]),e("div",{staticClass:"bottom",style:{transform:"translateX("+260*t.btnIndex+"rpx)"}})]),e("div",{staticClass:"body"},[0==t.btnIndex?e("div",{staticClass:"content"},[e("div",{staticClass:"btns"},[t.hotelLIst.length?e("span",{class:0==t.btnsIndex?"btn":"",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.btns(0)}}},[t._v("酒店")]):t._e(),t.foodLikes.length?e("span",{class:1==t.btnsIndex?"btn":"",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.btns(1)}}},[t._v("美食")]):t._e(),t.Ranklikes.length?e("span",{class:2==t.btnsIndex?"btn":"",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.btns(2)}}},[t._v("榜单")]):t._e(),t.Attractions.length?e("span",{class:3==t.btnsIndex?"btn":"",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.btns(3)}}},[t._v("景点")]):t._e()]),t._l(t.Ranklikes,(function(n){return 2==t.btnsIndex?e("div",{staticClass:"box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toRankingDetail(n.rankingId)}}},[e("div",{staticClass:"img"},[e("span",[t._v(t._s(n.year))]),e("img",{attrs:{src:i("8d56"),alt:""}}),e("img",{staticClass:"likelists",attrs:{src:i("5472"),alt:""},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.NOLike(n.rankingId)}}})]),e("div",{staticClass:"title"},[e("p",[t._v(t._s(n.year)+t._s(n.districtName)+t._s(n.subCategory))]),e("div",{staticClass:"type"},[e("img",{attrs:{src:i("9f5f"),alt:""}}),e("span",[t._v("榜单")])]),e("div",{staticClass:"look"},[e("span",[t._v("查看榜单详细")])])])]):t._e()})),t._l(t.hotelLIst,(function(n){return 0==t.btnsIndex&&n.photos?e("div",{staticClass:"box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toHotel(n.basicInfo.taHotelId)}}},[e("div",{staticClass:"img",style:{backgroundImage:"url("+n.photos[0].images.small.url+")"}},[e("img",{staticClass:"likelists",attrs:{src:i("5472"),alt:""},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.NOLike(n.basicInfo.taHotelId)}}})]),e("div",{staticClass:"title"},[e("p",[t._v(t._s(n.basicInfo.name))]),e("div",{staticClass:"type"},[e("img",{attrs:{src:i("9f5f"),alt:""}}),e("span",[t._v("点评")])]),e("div",{staticClass:"look"},[e("span",[t._v("查看酒店详细")])])])]):t._e()})),t._l(t.foodLikes,(function(n){return 1==t.btnsIndex?e("div",{staticClass:"box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toHotel(n.basicInfo.taHotelId)}}},[e("div",{staticClass:"img",style:{backgroundImage:"url("+n.photo.images.small.url+")"}},[e("img",{staticClass:"likelists",attrs:{src:i("5472"),alt:""},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.NOLike(n.location_id)}}})]),e("div",{staticClass:"title"},[e("p",[t._v(t._s(n.name))]),e("div",{staticClass:"type"},[e("img",{attrs:{src:i("9f5f"),alt:""}}),e("span",[t._v("美食")])]),e("div",{staticClass:"look"},[e("span",[t._v("查看美食详细")])])])]):t._e()})),t._l(t.Attractions,(function(n){return 3==t.btnsIndex?e("div",{staticClass:"box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toHotel(n.basicInfo.taHotelId)}}},[e("div",{staticClass:"img",style:{backgroundImage:"url("+n.bannerPhotos.photos[0].images.small.url+")"}},[e("img",{staticClass:"likelists",attrs:{src:i("5472"),alt:""},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.NOLike(n.basicInfo.sightId)}}})]),e("div",{staticClass:"title"},[e("p",[t._v(t._s(n.name))]),e("div",{staticClass:"type"},[e("img",{attrs:{src:i("9f5f"),alt:""}}),e("span",[t._v("景点")])]),e("div",{staticClass:"look"},[e("span",[t._v("查看美食详细")])])])]):t._e()}))],2):t._e(),1==t.btnIndex&&t.histories.length?e("div",{staticClass:"history"},[t._l(t.histories,(function(n){return n.headImage?e("div",{staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tohistories(n.taId)}}},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n.headImage,alt:""}})]),e("div",{staticClass:"title"},[e("p",[t._v(t._s(n.title))])])]):t._e()})),t._l(t.histories,(function(n){return n.photo?e("div",{staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tohotelintro(n.location_id,n.category)}}},[n.photo.images.large?e("div",{staticClass:"img"},[e("img",{attrs:{src:n.photo.images.large.url,alt:""}})]):t._e(),e("div",{staticClass:"title"},[e("p",[t._v(t._s(n.name))])])]):t._e()}))],2):t._e()])],1)},o=[]},"8bf2":function(t,n,i){"use strict";i.r(n);var e=i("9b0c"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},"8d56":function(t,n,i){t.exports=i.p+"static/img/rankimg.97717af8.png"},"969f":function(t,n,i){var e=i("b8d8");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("2fe651a3",e,!0,{sourceMap:!1,shadowMode:!1})},"9b0c":function(t,n,i){"use strict";i("4de4"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{btnIndex:0,Ranklikes:[],likeId:"",btnsIndex:0,hotelLIst:[],histories:[],foodLikes:[],Attractions:[]}},onLoad:function(){var t=this;uni.getStorage({key:"Ranklike",success:function(n){t.Ranklikes=n.data}}),uni.getStorage({key:"likesId",success:function(n){t.likeId=n.data}}),uni.getStorage({key:"hotelLike",success:function(n){t.hotelLIst=n.data}}),uni.getStorage({key:"history",success:function(n){t.histories=n.data}}),uni.getStorage({key:"foodLike",success:function(n){t.foodLikes=n.data}}),uni.getStorage({key:"Attraction",success:function(n){t.Attractions=n.data}}),uni.getStorage({key:"token",success:function(t){console.log(t.data)},fail:function(t){console.log(t);var n=getCurrentPages(),i=n[n.length-1].route;console.log(i),uni.navigateTo({url:"/pages/index/Register/Register?from="+i})}})},methods:{btnindex:function(t){this.btnIndex=t},NOLike:function(t){console.log(t),2==this.btnsIndex?(this.Ranklikes=this.Ranklikes.filter((function(n){return n.rankingId!=t})),uni.setStorage({key:"Ranklike",data:this.Ranklikes})):0==this.btnsIndex?(this.hotelLIst=this.hotelLIst.filter((function(n){return n.basicInfo.taHotelId!=t})),uni.setStorage({key:"hotelLike",data:this.hotelLIst})):3==this.btnsIndex?(this.Attractions=this.Attractions.filter((function(n){return n.basicInfo.sightId!=t})),uni.setStorage({key:"Attraction",data:this.Attractions})):(this.foodLikes=this.foodLikes.filter((function(n){return n.location_id!=t})),uni.setStorage({key:"foodLike",data:this.foodLikes})),this.hotelLIst.length?this.btnsIndex=0:this.foodLikes.length?this.btnsIndex=1:this.Attractions.length&&(this.btnsIndex=3),this.likeId=this.likeId.filter((function(n){return n!=t})),uni.setStorage({key:"likesId",data:this.likeId})},toRankingDetail:function(t){uni.navigateTo({url:"/pages/area/RankingDetail?id="+t})},toHotel:function(t){uni.navigateTo({url:"/pages/index/Hotelintro/Hotelintro?id="+t})},btns:function(t){this.btnsIndex=t},tohistories:function(t){uni.navigateTo({url:"/pages/index/Hotelintro/Hotelintro?id="+t})},tohotelintro:function(t,n){"restaurant"==n.key?uni.navigateTo({url:"/pages/index/RestaurantIntro/RestaurantIntro?id="+t}):"hotel"==n.key&&uni.navigateTo({url:"/pages/index/Hotelintro/Hotelintro?id="+t})}},onShow:function(){var t=this;uni.getStorage({key:"Ranklike",success:function(n){t.Ranklikes=n.data}}),uni.getStorage({key:"hotelLike",success:function(n){t.hotelLIst=n.data}}),uni.getStorage({key:"foodLike",success:function(n){t.foodLikes=n.data}}),uni.getStorage({key:"history",success:function(n){t.histories=n.data}}),this.hotelLIst.length?this.btnsIndex=0:this.foodLikes.length?this.btnsIndex=1:this.Attractions.length&&(this.btnsIndex=3)}};n.default=e},"9f5f":function(t,n,i){t.exports=i.p+"static/img/awardicon.3fed6347.png"},b8d8:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".collect .header[data-v-5a2fc9d6]{border-bottom:%?1?% solid hsla(0,0%,53.3%,.41)}.collect .header .header-btn[data-v-5a2fc9d6]{display:flex;align-items:center;justify-content:space-around;color:#888;padding:%?10?% 0}.collect .header .header-btn .btn[data-v-5a2fc9d6]{color:#000}.collect .header .bottom[data-v-5a2fc9d6]{width:%?260?%;height:%?2?%;background-color:#000;transition:all .3s linear}.collect .body[data-v-5a2fc9d6]{padding:10px}.collect .body .btns[data-v-5a2fc9d6]{display:flex;width:100%;margin-bottom:10px}.collect .body .btns span[data-v-5a2fc9d6]{padding:2px 10px;border:1px solid #000;border-radius:50px;margin-right:10px;box-shadow:2px 1px 4px 0 #888}.collect .body .btns .btn[data-v-5a2fc9d6]{background-color:#000;color:#fff}.collect .body .content[data-v-5a2fc9d6]{display:flex;flex-wrap:wrap;justify-content:space-between}.collect .body .content .box[data-v-5a2fc9d6]{width:49%;box-shadow:0 0 3px 0 #888;margin-bottom:10px}.collect .body .content .box .img[data-v-5a2fc9d6]{height:120px;display:flex;background-color:#aef6e0;flex-wrap:wrap;align-items:center;justify-content:center;flex-direction:column;position:relative;background-repeat:no-repeat;background-size:cover;background-position:50%}.collect .body .content .box .img span[data-v-5a2fc9d6]{width:100%;font-size:12px;text-align:center}.collect .body .content .box .img img[data-v-5a2fc9d6]{width:70px}.collect .body .content .box .img .likelists[data-v-5a2fc9d6]{position:absolute;top:0;width:25px;right:5px}.collect .body .content .box .title[data-v-5a2fc9d6]{padding:10px}.collect .body .content .box .title p[data-v-5a2fc9d6]{font-size:18px;font-weight:600;margin-bottom:5px}.collect .body .content .box .title .type[data-v-5a2fc9d6]{display:flex;align-items:center}.collect .body .content .box .title .type img[data-v-5a2fc9d6]{width:20px;margin-right:10px}.collect .body .content .box .title .type span[data-v-5a2fc9d6]{font-size:13px;color:#888}.collect .body .content .box .look[data-v-5a2fc9d6]{background-color:#f7f7f7;text-align:center;padding:10px 0;margin-top:10px}.collect .body .history .box[data-v-5a2fc9d6]{display:flex;margin-bottom:10px}.collect .body .history .box .img[data-v-5a2fc9d6]{width:30%;height:100px}.collect .body .history .box .img img[data-v-5a2fc9d6]{width:100%;height:100%}.collect .body .history .box .title[data-v-5a2fc9d6]{width:70%;margin-left:10px}.collect .body .history .box .title p[data-v-5a2fc9d6]{font-size:15px;font-weight:600;margin-bottom:5px}",""]),t.exports=n},e0c5:function(t,n,i){"use strict";i.r(n);var e=i("5e5d"),a=i("8bf2");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("36db");var s,c=i("f0c5"),l=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"5a2fc9d6",null,!1,e["a"],s);n["default"]=l.exports}}]);