(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/customerService"],{"23de":function(t,n,e){"use strict";e.r(n);var o=e("5b07"),c=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=c.a},"2ba9":function(t,n,e){"use strict";e.r(n);var o=e("ac59"),c=e("23de");for(var i in c)"default"!==i&&function(t){e.d(n,t,(function(){return c[t]}))}(i);e("91cb");var u,a=e("f0c5"),r=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=r.exports},"5b07":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("94de"),c={name:"customerService",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{routineContact:this.dataConfig.routine_contact_type,logoConfig:this.dataConfig.logoConfig.url,topConfig:this.dataConfig.topConfig.val?this.dataConfig.topConfig.val+"%":"30%"}},created:function(){},methods:{setTouchMove:function(t){var n=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(n.topConfig=t.touches[0].clientY+"px")},goCustomer:function(){(0,o.getCustomer)("/pages/extension/customer_list/chat?productId=".concat(this.ids))}}};n.default=c},"91cb":function(t,n,e){"use strict";var o=e("c6b7"),c=e.n(o);c.a},ac59:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var c=function(){var t=this,n=t.$createElement;t._self._c},i=[]},c6b7:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/customerService-create-component',
    {
        'pages/index/diy/components/customerService-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2ba9"))
        })
    },
    [['pages/index/diy/components/customerService-create-component']]
]);