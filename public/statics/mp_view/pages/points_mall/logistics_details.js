require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/logistics_details"],{"1f7b":function(t,e,n){},3734:function(t,e,n){"use strict";(function(t){n("248d");o(n("66fd"));var e=o(n("7313"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},3978:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("1579"),r=n("6a71"),i=(s(n("cf40")),n("666f")),c=n("26cb"),u=s(n("66ca"));function s(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("f1f8"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/Authorize").then(function(){return resolve(n("b29f"))}.bind(null,n)).catch(n.oe)},f={components:{recommend:d,authorize:a},mixins:[u.default],data:function(){return{orderId:"",product:{productInfo:{}},orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:this.$t("缺少订单号")});this.orderId=t.order_id,this.isLogin?(this.getExpress(),this.get_host_product()):(0,i.toLogin)()},onReady:function(){},onPageScroll:function(e){t.$emit("scroll")},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){t.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,r.getLogisticsDetails)(e.orderId).then((function(t){var n=t.data.express.result||{};e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",n.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,o.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=f}).call(this,n("543d")["default"])},7313:function(t,e,n){"use strict";n.r(e);var o=n("c77c"),r=n("f9d1");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("ed44");var c,u=n("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"7de8fb38",null,!1,o["a"],c);e["default"]=s.exports},c77c:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("积分")),o=t.$t("物流公司"),r=t.$t("快递单号"),i=t.$t("复制单号");t.$mp.data=Object.assign({},{$root:{m0:n,m1:o,m2:r,m3:i}})},i=[]},ed44:function(t,e,n){"use strict";var o=n("1f7b"),r=n.n(o);r.a},f9d1:function(t,e,n){"use strict";n.r(e);var o=n("3978"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a}},[["3734","common/runtime","common/vendor"]]]);