(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/promotionGood/index"],{"13d4":function(t,n,e){"use strict";e.r(n);var a=e("e36a"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=o.a},"3c9c":function(t,n,e){},8811:function(t,n,e){"use strict";var a=e("3c9c"),o=e.n(a);o.a},9455:function(t,n,e){"use strict";e.r(n);var a=e("c972"),o=e("13d4");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("8811");var i,c=e("f0c5"),r=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"5aee8403",null,!1,a["a"],i);n["default"]=r.exports},c972:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={easyLoadimage:function(){return Promise.all([e.e("common/vendor"),e.e("components/easy-loadimage/easy-loadimage")]).then(e.bind(null,"9362"))}},o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("￥"));t.$mp.data=Object.assign({},{$root:{m0:e}})},u=[]},e36a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("26cb"),o=e("2c78"),u=i(e("66ca"));function i(t){return t&&t.__esModule?t:{default:t}}var c={computed:(0,a.mapGetters)(["uid"]),mixins:[u.default],props:{benefit:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,o.goPage)().then((function(a){(0,o.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=c}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/promotionGood/index-create-component',
    {
        'components/promotionGood/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9455"))
        })
    },
    [['components/promotionGood/index-create-component']]
]);