(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/correlation/hotel"],{"0303":function(t,e,i){"use strict";i.r(e);var n=i("1b01"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"1b01":function(t,e,i){"use strict";(function(t){function i(t){return o(t)||s(t)||a(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{filterItemList:["sort|1|||超值排序|@sort"],arrName:["超值排序"],btnsName:[],number:"",pageIndex:2,indexId:"",indexName:"",index:"",btnName:"",FullYear:"",Month:"",Date:"",hotels:[],addressName:"",value:["0"],accordionVal:"1",content:"折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。",extraIcon:{color:"#4cd964",size:"26",type:"image"},sort:[],status:"more",loadingText:"加载中...",loadingType:0,contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"},load:0,page:1,timer:{}}},onReachBottom:function(){var t=this;null!=this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.getmorenews()}),1e3)},onLoad:function(e){var i=this;this.index=e.index,this.indexId=e.id,this.indexName=e.name,this.addressName=e.name,this.FullYear=(new Date).getFullYear(),this.Month=(new Date).getMonth()+1,this.Date=(new Date).getDate(),2==e.index?t.request({url:"https://apis.tripadvisor.cn/v1/hotelapi/hotel/list",method:"POST",data:{cityId:e.id,userCityId:0,cityName:e.name,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:1,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:["sort|1|||超值排序|@sort"]},success:function(t){i.hotels=t.data.datas}}):t.request({url:"https://m.ctrip.com/restapi/soa2/20405/searchSightInfoList",method:"POST",data:{cityId:e.id,userCityId:0,cityName:e.name,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:1,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:["sortfilter|3|||旅行者排名|@sortfilter"],extraFilters:null},success:function(t){i.hotels=t.data.data}}),t.request({url:"https://apis.tripadvisor.cn/v1/hotelapi/hotel/filter",method:"POST",data:{cityId:e.id,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,childAges:[],sortType:1,userLocation:{lat:null,lon:null}},success:function(t){i.sort=t.data}})},methods:{add:function(){var t=this;this.content.length>35?this.content="折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。":this.content="折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。",this.$nextTick((function(){t.$refs.collapse.resize()}))},onClick:function(e){t.showToast({title:"列表被点击"})},change:function(t){this.number=t,console.log(t)},btn:function(t){this.arrName.splice(this.number,1,t),this.btnName=t,console.log(this.arrName)},toindex:function(){t.switchTab({url:"/pages/index/index"})},setAjax:function(){var e=this;2==this.index?t.request({url:"https://apis.tripadvisor.cn/v1/hotelapi/hotel/list",method:"POST",data:{cityId:this.indexId,userCityId:0,cityName:this.indexName,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:1,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:["sort|1|||超值排序|@sort"]},success:function(t){e.hotels=t.data.datas}}):t.request({url:"https://m.ctrip.com/restapi/soa2/20405/searchSightInfoList",method:"POST",data:{cityId:this.indexId,userCityId:0,cityName:this.indexName,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:1,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:["sortfilter|3|||旅行者排名|@sortfilter"],extraFilters:null},success:function(t){e.hotels=t.data.data}})},getmorenews:function(){var e=this;if(this.page++,0!==this.loadingType)return!1;this.loadingType=1,t.showNavigationBarLoading(),2==this.index?t.request({url:"https://apis.tripadvisor.cn/v1/hotelapi/hotel/list",method:"POST",data:{cityId:this.indexId,userCityId:0,cityName:this.indexName,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:this.pageIndex,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:["sort|1|||超值排序|@sort"]},success:function(n){var a;if(e.pageIndex++,t.hideLoading(),""==n.data.datas)return e.loadingType=2,void t.hideNavigationBarLoading();e.loadingType=0,t.hideNavigationBarLoading(),(a=e.hotels).push.apply(a,i(n.data.datas))}}):t.request({url:"https://m.ctrip.com/restapi/soa2/20405/searchSightInfoList",method:"POST",data:{cityId:this.indexId,userCityId:0,cityName:this.indexName,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:this.pageIndex,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:["sortfilter|3|||旅行者排名|@sortfilter"],extraFilters:null},success:function(n){var a;if(e.pageIndex++,t.hideLoading(),""==n.data.datas)return e.loadingType=2,void t.hideNavigationBarLoading();e.loadingType=0,t.hideNavigationBarLoading(),(a=e.hotels).push.apply(a,i(n.data.data))}})},newajax:function(t,e){console.log(e),0==this.number?(this.newDate(e),this.filterItemList.splice(this.number,1,t)):(this.btnsName.push(e),this.filterItemList.push(t),this.newDate())},newDate:function(e){var i=this;2==this.index?t.request({url:"https://apis.tripadvisor.cn/v1/hotelapi/hotel/list",method:"POST",data:{cityId:this.indexId,userCityId:0,cityName:this.indexName,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:1,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:this.filterItemList},success:function(t){i.hotels=t.data.datas}}):t.request({url:"https://m.ctrip.com/restapi/soa2/20405/searchSightInfoList",method:"POST",data:{cityId:this.indexId,userCityId:0,cityName:this.indexName,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,roomNum:1,nights:1,childAges:[],highestPrice:null,lowestPrice:null,needHotelData:!0,needNotice:!0,pageIndex:1,pageSize:20,userLocation:{lat:null,lon:null},foreHotelId:"",filterItemList:["sortfilter|3|||旅行者排名|@sortfilter"],extraFilters:null},success:function(t){i.hotels=t.data.data}}),t.request({url:"https://apis.tripadvisor.cn/v1/hotelapi/hotel/filter",method:"POST",data:{cityId:this.indexId,checkInDate:this.FullYear+"-"+this.Month+"-"+this.Date,checkOutDate:this.FullYear+"-"+this.Month+"-"+Number(this.Date+1),adultNum:2,childNum:0,childAges:[],sortType:e,userLocation:{lat:null,lon:null}},success:function(t){i.sort=t.data}})}}};e.default=r}).call(this,i("543d")["default"])},"3b60":function(t,e,i){"use strict";var n=i("c44d"),a=i.n(n);a.a},6707:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniRate:function(){return i.e("uni_modules/uni-rate/components/uni-rate/uni-rate").then(i.bind(null,"eca2"))},uniLoadMore:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(i.bind(null,"f8ed"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.hotels.length&&t.hotels?i("c573"):null),a=t.hotels.length?t.__map(t.hotels,(function(e,i){var n=t.__get_orig(e),a=2==t.index&&e.hotelDto.mediumCoverImages?e.hotelDto.tagDtoList.slice(0,5):null;return{$orig:n,l0:a}})):null,s=t.hotels.length?t.__map(t.hotels,(function(e,i){var n=t.__get_orig(e),a=3==t.index?e.attractionDto.tagDtoList.slice(0,6):null;return{$orig:n,l2:a}})):null,o=t.hotels.length?null:i("4729");t.$mp.data=Object.assign({},{$root:{m0:n,l1:a,l3:s,m1:o}})},s=[]},"90f7":function(t,e,i){"use strict";(function(t){i("24c9");n(i("66fd"));var e=n(i("93e0"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"93e0":function(t,e,i){"use strict";i.r(e);var n=i("6707"),a=i("0303");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("3b60");var o,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"13f8d09d",null,!1,n["a"],o);e["default"]=r.exports},c44d:function(t,e,i){}},[["90f7","common/runtime","common/vendor"]]]);