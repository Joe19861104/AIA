(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/recommend"],{"08ce":function(t,e,i){"use strict";var n=i("1f9d"),s=i.n(n);s.a},"16b9":function(t,e,i){"use strict";i.r(e);var n=i("b50d"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"1f9d":function(t,e,i){},b50d:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("26cb");var n=i("2c78"),s=i("1579"),a=l(i("66ca"));function l(t){return t&&t.__esModule?t:{default:t}}var o=getApp(),c=function(){Promise.all([i.e("common/vendor"),i.e("components/goodList/index")]).then(function(){return resolve(i("812b"))}.bind(null,i)).catch(i.oe)},r={name:"goodList",props:{dataConfig:{type:Object,default:function(){}}},mixins:[a.default],components:{goodLists:c},created:function(){},mounted:function(){},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue||""),this.$set(this,"type",t.selectSortConfig.activeValue),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.productslist())}}},data:function(){return{circular:!0,interval:3e3,duration:500,bastList:[],name:this.$options.name,isShow:!0,isIframe:o.globalData.isIframe,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0,titleInfo:[]}},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,s.getHomeProducts)(e).then((function(e){t.bastList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},gopage:function(e){t.navigateTo({url:e})},goDetail:function(e){var i=this;(0,n.goPage)().then((function(s){(0,n.goShopDetail)(e,i.uid).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))}))}}};e.default=r}).call(this,i("543d")["default"])},c05b:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={easyLoadimage:function(){return Promise.all([i.e("common/vendor"),i.e("components/easy-loadimage/easy-loadimage")]).then(i.bind(null,"9362"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.isShow&&t.bastList.length?t.$t(t.titleInfo[0].val):null),n=t.isShow&&t.bastList.length?t.$t(t.titleInfo[1].val):null,s=t.isShow&&t.bastList.length?t.$t("更多"):null,a=t.$t("￥"),l=t.isShow&&t.bastList.length?t.__map(t.bastList,(function(e,i){var n=t.__get_orig(e),s=e.activity&&"1"==e.activity.type?t.$t("秒杀"):null,a=e.activity&&"2"==e.activity.type?t.$t("砍价"):null,l=e.activity&&"3"==e.activity.type?t.$t("砍价"):null,o=e.vip_price&&e.vip_price>0&&e.base?t.$t("￥"):null,c=e.vip_price&&e.vip_price>0&&e.is_vip?t.$t("￥"):null;return{$orig:n,m3:s,m4:a,m5:l,m7:o,m8:c}})):null,o=!t.isShow&&t.isIframe&&t.bastList.length?t.$t("更多"):null,c=t.$t("￥"),r=!t.isShow&&t.isIframe&&t.bastList.length?t.__map(t.bastList,(function(e,i){var n=t.__get_orig(e),s=e.activity&&"1"==e.activity.type?t.$t("秒杀"):null,a=e.activity&&"2"==e.activity.type?t.$t("砍价"):null,l=e.activity&&"3"==e.activity.type?t.$t("砍价"):null,o=e.checkCoupon?t.$t("ticket"):null,c=e.vip_price&&e.vip_price>0&&e.base?t.$t("￥"):null,r=e.vip_price&&e.vip_price>0&&e.is_vip?t.$t("￥"):null;return{$orig:n,m10:s,m11:a,m12:l,m13:o,m15:c,m16:r}})):null,u=t.isIframe&&!t.bastList.length&&t.isIframe&&!t.fastList.length?t.$t("更多"):null,d=t.isIframe&&!t.bastList.length&&t.isIframe&&!t.fastList.length?t.$t("精品推荐，暂无数据"):null;t.$mp.data=Object.assign({},{$root:{m0:i,m1:n,m2:s,m6:a,l0:l,m9:o,m14:c,l1:r,m17:u,m18:d}})},a=[]},d525:function(t,e,i){"use strict";i.r(e);var n=i("c05b"),s=i("16b9");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("08ce");var l,o=i("f0c5"),c=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/recommend-create-component',
    {
        'pages/index/visualization/components/recommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d525"))
        })
    },
    [['pages/index/visualization/components/recommend-create-component']]
]);
