(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/customerService"],{"0aa7":function(t,n,e){},"13ab":function(t,n,e){"use strict";e.r(n);var o=e("ca76"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=a.a},"74cf":function(t,n,e){"use strict";e.r(n);var o=e("9e85"),a=e("13ab");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("bce8");var c,u=e("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=r.exports},"9e85":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]},bce8:function(t,n,e){"use strict";var o=e("0aa7"),a=e.n(o);a.a},ca76:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=getApp(),a={name:"customerService",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.logoConfig=t.imgUrl.url,this.isShow=t.isShow.val,this.routineContact=t.routine_contact_type)}}},data:function(){return{logoConfig:"",topConfig:"200px",name:this.$options.name,isIframe:!1,isShow:!0,routineContact:"0"}},created:function(){this.isIframe=o.globalData.isIframe},methods:{setTouchMove:function(t){var n=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(n.topConfig=t.touches[0].clientY+"px")}}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/customerService-create-component',
    {
        'pages/index/visualization/components/customerService-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("74cf"))
        })
    },
    [['pages/index/visualization/components/customerService-create-component']]
]);
