(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/headerSerch"],{1656:function(t,e,n){"use strict";var i=n("58a27"),o=n.n(i);o.a},"58a27":function(t,e,n){},6612:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isShow?t.$t("搜索商品"):null);t.$mp.data=Object.assign({},{$root:{m0:n}})},a=[]},a7e7:function(t,e,n){"use strict";n.r(e);var i=n("fc25"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c474:function(t,e,n){"use strict";n.r(e);var i=n("6612"),o=n("a7e7");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("1656");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},fc25:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2c78"),o=getApp(),a=2*t.getSystemInfoSync().statusBarHeight+"rpx",r=2*t.getSystemInfoSync().statusBarHeight+170+"rpx",s={name:"headerSerch",props:{dataConfig:{type:Object,default:function(){}}},data:function(){return{logoConfig:"",hotWords:[],sysHeight:a,headH:r,name:this.$options.name,isShow:!0,isIframe:o.globalData.isIframe,titleInfo:[]}},watch:{dataConfig:{immediate:!0,handler:function(e,n){e&&(this.logoConfig=e?e.imgUrl.url:"",this.hotWords=e.hotList.list||[],this.isShow=e.isShow.val,this.titleInfo=e.titleInfo&&e.titleInfo.list.length?e.titleInfo.list:[],t.setStorageSync("hotList",this.hotWords||[]))}}},mounted:function(){var e=this;this.$nextTick((function(){var n=t.createSelectorQuery().in(this).select(".mp-header");n.boundingClientRect((function(t){e.marTop=t.height})).exec()}))},methods:{goPage:function(){(0,i.goPage)().then((function(e){t.navigateTo({url:"/pages/goods/goods_search/index"})}))}}};e.default=s}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/headerSerch-create-component',
    {
        'pages/index/visualization/components/headerSerch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c474"))
        })
    },
    [['pages/index/visualization/components/headerSerch-create-component']]
]);