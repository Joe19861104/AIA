require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/lottery/grids/index"],{"13e3":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("0bad"),a=(o("8ba8"),o("666f")),r=o("26cb"),i=l(o("66ca")),d=o("989b");function l(t){return t&&t.__esModule?t:{default:t}}var s=function(){Promise.all([o.e("common/vendor"),o.e("components/zb-code/zb-code")]).then(function(){return resolve(o("2173"))}.bind(null,o)).catch(o.oe)},c=function(){Promise.all([o.e("pages/goods/common/vendor"),o.e("pages/goods/components/lottery/index")]).then(function(){return resolve(o("3760"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("pages/goods/lottery/components/showbox").then(function(){return resolve(o("d8ca"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("pages/goods/lottery/components/noticeBar").then(function(){return resolve(o("e05b"))}.bind(null,o)).catch(o.oe)},h=function(){o.e("pages/goods/lottery/components/lotteryAleart").then(function(){return resolve(o("fecc"))}.bind(null,o)).catch(o.oe)},p=function(){Promise.all([o.e("common/vendor"),o.e("pages/goods/lottery/components/userAddress")]).then(function(){return resolve(o("5b96"))}.bind(null,o)).catch(o.oe)},y=function(){Promise.all([o.e("common/vendor"),o.e("components/home/index")]).then(function(){return resolve(o("03ff"))}.bind(null,o)).catch(o.oe)},m=(getApp(),{components:{gridsLottery:c,showBox:u,noticeBar:f,lotteryAleart:h,userAddress:p,zbCode:s,home:y},mixins:[i.default],data:function(){return{imgHost:d.HTTP_REQUEST_URL,lotteryShow:!0,loading:!1,H5ShareBox:!1,addressModel:!1,lottery_num:0,aleartType:0,aleartStatus:!1,lottery_draw_param:{startIndex:3,totalCount:3,winingIndex:1,speed:100},userList:{type:"user",data:[]},myList:{type:"me",data:[]},htmlData:{type:"html",data:""},prize:[],factor_num:0,id:0,alData:{},type:"",followCode:!1,codeShow:!1,cid:"1",ifShow:!0,val:"",lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",image:"",is_content:0,is_all_record:0,is_personal_record:0,factor:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getLotteryData(this.type)},deep:!0}},onLoad:function(t){this.type=t.type,this.isLogin?this.getLotteryData(this.type):(0,a.toLogin)()},methods:{getLotteryData:function(e){var o=this;t.showLoading({title:this.$t("获取抽奖信息")}),(0,n.getLotteryData)(e).then((function(e){o.loading=!0,o.factor_num=e.data.lottery.factor_num,o.id=e.data.lottery.id,o.image=e.data.lottery.image,o.prize=e.data.lottery.prize,o.lottery_num=e.data.lottery_num,o.htmlData.data=e.data.lottery.content,o.is_content=e.data.lottery.is_content,o.is_personal_record=e.data.lottery.is_personal_record,o.is_all_record=e.data.lottery.is_all_record,o.factor=e.data.lottery.factor,o.userList.data=e.data.all_record,o.myList.data=e.data.user_record,o.prize.push({}),t.hideLoading()})).catch((function(e){t.hideLoading(),o.lotteryShow=!1,o.loading=!0,o.$util.Tips({title:e})}))},closeLottery:function(t){this.aleartStatus=!1,this.getLotteryData(this.type),6===this.alData.type&&(this.addressModel=!0)},getAddress:function(t){var e=this,o=t;o.id=this.alData.lottery_record_id,o.address=t.address.province+t.address.city+t.address.district+t.detail,(0,n.receiveLottery)(o).then((function(t){e.$util.Tips({title:e.$t("领取成功")}),e.addressModel=!1})).catch((function(t){e.$util.Tips({title:t})}))},getWiningIndex:function(t){var e=this;this.aleartType=0;var o=this;(0,n.startLottery)({id:this.id,type:this.type}).then((function(n){if("subscribe"===n.data.code)return o.$set(o,"followCode",!0),void(e.codeSrc=n.data.url);e.prize.forEach((function(o,a){n.data.id===o.id&&(e.alData=n.data,e.lottery_draw_param.winingIndex=a,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))},luck_draw_finish:function(t){this.aleartType=2,this.aleartStatus=!0},qrR:function(t){this.codeSrc=t}}});e.default=m}).call(this,o("543d")["default"])},"51f3":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,o=(t._self._c,t.lotteryShow&&t.loading?t.$t("恭喜您"):null),n=t.lotteryShow&&t.loading?t.$t("获得"):null,a=t.lotteryShow&&t.loading?t.$t("次"):null,r=t.lotteryShow&&t.loading||t.lotteryShow||!t.loading?null:t.$t("商家暂未上架活动哦");t._isMounted||(t.e0=function(){t.addressModel=!1}),t.$mp.data=Object.assign({},{$root:{m0:o,m1:n,m2:a,m3:r}})},r=[]},6916:function(t,e,o){},8104:function(t,e,o){"use strict";o.r(e);var n=o("51f3"),a=o("f169");for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);o("a8ec");var i,d=o("f0c5"),l=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"492e0a9d",null,!1,n["a"],i);e["default"]=l.exports},a8ec:function(t,e,o){"use strict";var n=o("6916"),a=o.n(n);a.a},cb15:function(t,e,o){"use strict";(function(t){o("248d");n(o("66fd"));var e=n(o("8104"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])},f169:function(t,e,o){"use strict";o.r(e);var n=o("13e3"),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a}},[["cb15","common/runtime","common/vendor","pages/goods/common/vendor"]]]);