(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pageFooter/index"],{"052c":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.newData?t.__map(t.newData.menuList,(function(e,n){var r=t.__get_orig(e),a=e.link==t.activityTab?t.$t(e.name):null,i=e.link!=t.activityTab?t.$t(e.name):null;return{$orig:r,m0:a,m1:i}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[]},"0dab":function(t,e,n){"use strict";n.r(e);var r=n("2dbb"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"2dbb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=n("26cb"),i=n("a9a5"),o=n("451d");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=(r={name:"pageFooter",props:{status:{type:Number|String,default:1},countNum:{type:Number|String,default:0}},data:function(){return{newData:void 0,footHeight:0,isShow:!1}},computed:u({},(0,a.mapState)({configData:function(t){return t.app.pageFooter}}))},s(r,"computed",(0,a.mapGetters)(["isLogin","cartNum","activityTab"])),s(r,"watch",{activityTab:{handler:function(t,e){},deep:!0},configData:{handler:function(e,n){var r=this,a=t.createSelectorQuery().in(this);this.newData=e,this.$nextTick((function(){a.select("#target").boundingClientRect((function(e){t.$emit("footHeight",e.height),e&&(r.footHeight=e.height+50)})).exec()}))},deep:!0}}),s(r,"created",(function(){var t=getCurrentPages(),e=t[t.length-1].route;this.$store.commit("ACTIVITYTAB","/"+e)})),s(r,"mounted",(function(){var e=this;(0,i.getNavigation)().then((function(n){t.setStorageSync("pageFoot",n.data),e.$store.commit("FOOT_UPLOAD",n.data),e.newData=n.data}));t.hideTabBar(),this.newData=this.$store.state.app.pageFooter,this.isLogin&&this.getCartNum()})),s(r,"methods",{goRouter:function(e){var n=getCurrentPages(),r=n[n.length-1].route;this.$store.commit("ACTIVITYTAB",e.link),e.link!="/"+r&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},getCartNum:function(){var t=this,e=this;(0,o.getCartCounts)().then((function(n){e.cartCount=n.data.count,t.$store.commit("indexData/setCartNum",n.data.count>99?"...":n.data.count)}))}}),r);e.default=f}).call(this,n("543d")["default"])},"77dc":function(t,e,n){"use strict";var r=n("7817"),a=n.n(r);a.a},7817:function(t,e,n){},d9b2:function(t,e,n){"use strict";n.r(e);var r=n("052c"),a=n("0dab");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("77dc");var o,c=n("f0c5"),u=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"3075b3b7",null,!1,r["a"],o);e["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pageFooter/index-create-component',
    {
        'components/pageFooter/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d9b2"))
        })
    },
    [['components/pageFooter/index-create-component']]
]);
