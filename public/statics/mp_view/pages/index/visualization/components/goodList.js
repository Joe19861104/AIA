(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/goodList"],{"04cc":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.$t("￥")),n=t.isShow&&t.bastList.length&&!t.isIframe?t.__map(t.bastList,(function(i,e){var n=t.__get_orig(i),s=i.activity&&"1"===i.activity.type?t.$t("秒杀"):null,a=i.activity&&"2"===i.activity.type?t.$t("砍价"):null,c=i.activity&&"3"===i.activity.type?t.$t("拼团"):null,l=i.base&&i.vip_price&&i.vip_price>0?t.$t("￥"):null,r=i.base&&i.vip_price&&i.vip_price>0?t.$t("已售"):null,p=i.is_vip&&i.vip_price&&i.vip_price>0?t.$t("￥"):null,o=i.is_vip&&i.vip_price&&i.vip_price>0?t.$t("已售"):null,u=i.is_vip&&i.vip_price&&i.vip_price>0?null:t.$t("已售");return{$orig:n,m0:s,m1:a,m2:c,m4:l,m5:r,m6:p,m7:o,m8:u}})):null,s=t.$t("￥"),a=t.bastList.length&&t.isIframe?t.__map(t.bastList,(function(i,e){var n=t.__get_orig(i),s=i.activity&&"1"===i.activity.type?t.$t("秒杀"):null,a=i.activity&&"2"===i.activity.type?t.$t("砍价"):null,c=i.activity&&"3"===i.activity.type?t.$t("拼团"):null,l=i.base&&i.vip_price&&i.vip_price>0?t.$t("￥"):null,r=i.base&&i.vip_price&&i.vip_price>0?t.$t("已售"):null,p=i.is_vip&&i.vip_price&&i.vip_price>0?t.$t("￥"):null,o=i.is_vip&&i.vip_price&&i.vip_price>0?t.$t("已售"):null,u=i.is_vip&&i.vip_price&&i.vip_price>0?null:t.$t("已售");return{$orig:n,m9:s,m10:a,m11:c,m13:l,m14:r,m15:p,m16:o,m17:u}})):null,c=!t.bastList.length&&t.isIframe?t.$t("商品列表，暂无数据"):null;t.$mp.data=Object.assign({},{$root:{m3:e,l0:n,m12:s,l1:a,m18:c}})},a=[]},a31d:function(t,i,e){"use strict";e.r(i);var n=e("04cc"),s=e("de6a");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("e7c0");var c,l=e("f0c5"),r=Object(l["a"])(s["default"],n["b"],n["c"],!1,null,"7419684e",null,!1,n["a"],c);i["default"]=r.exports},de6a:function(t,i,e){"use strict";e.r(i);var n=e("f31f"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},e220:function(t,i,e){},e7c0:function(t,i,e){"use strict";var n=e("e220"),s=e.n(n);s.a},f31f:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("26cb"),s=e("2c78"),a=e("1579"),c=getApp(),l={name:"goodList",computed:(0,n.mapGetters)(["uid"]),props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,i){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue||""),this.$set(this,"type",t.selectSortConfig.activeValue),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.productslist())}}},data:function(){return{bastList:[],name:this.$options.name,isIframe:!1,isShow:!0,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0}},created:function(){this.isIframe=c.globalData.isIframe},mounted:function(){},methods:{productslist:function(){var t=this,i={};i=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,a.getHomeProducts)(i).then((function(i){t.bastList=i.data.list})).catch((function(i){t.$util.Tips({title:i})}))},goDetail:function(i){var e=this;(0,s.goPage)().then((function(n){(0,s.goShopDetail)(i,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}))}))}}};i.default=l}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/goodList-create-component',
    {
        'pages/index/visualization/components/goodList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a31d"))
        })
    },
    [['pages/index/visualization/components/goodList-create-component']]
]);
