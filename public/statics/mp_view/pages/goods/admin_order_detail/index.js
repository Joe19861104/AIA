require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/admin_order_detail/index"],{"0d3f":function(t,e,r){"use strict";var o;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return d})),r.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=(t._self._c,t.$t(t.title)),o=t.$t("订单号"),n=t.$t("￥"),d=t.$t("￥"),i=t.$t("共"),u=t.$t("件商品"),a=t.$t("￥"),f=t.$t("邮费"),s=t.$t("￥"),l=t.$t("订单号"),c=t.$t("下单时间"),_=t.$t("支付状态"),m=1==t.orderInfo.paid?t.$t("已支付"):null,p=1!=t.orderInfo.paid?t.$t("未支付"):null,y=t.$t("支付方式"),$=t.$t("买家留言"),I=t.$t("支付金额"),v=t.$t("￥"),g=t.orderInfo.coupon_id?t.$t("优惠券抵扣"):null,h=t.orderInfo.coupon_id?t.$t("￥"):null,b=t.orderInfo.use_integral>0?t.$t("积分抵扣"):null,x=t.orderInfo.use_integral>0?t.$t("￥"):null,w=t.orderInfo.pay_postage>0?t.$t("运费"):null,O=t.orderInfo.pay_postage>0?t.$t("￥"):null,k=t.$t("实际支付"),P=t.$t("￥"),T="fictitious"!=t.orderInfo.delivery_type&&2===t.orderInfo._status._type?t.$t("配送方式"):null,j="fictitious"!=t.orderInfo.delivery_type&&2===t.orderInfo._status._type&&"express"===t.orderInfo.delivery_type?t.$t("快递"):null,M="fictitious"!=t.orderInfo.delivery_type&&2===t.orderInfo._status._type&&"send"===t.orderInfo.delivery_type?t.$t("送货"):null,N="fictitious"!=t.orderInfo.delivery_type&&2===t.orderInfo._status._type&&"express"===t.orderInfo.delivery_type?t.$t("快递公司"):null,A="fictitious"!=t.orderInfo.delivery_type&&2===t.orderInfo._status._type&&"send"===t.orderInfo.delivery_type?t.$t("送货人"):null,F="fictitious"!=t.orderInfo.delivery_type&&2===t.orderInfo._status._type&&"express"===t.orderInfo.delivery_type?t.$t("快递单号"):null,J="fictitious"!=t.orderInfo.delivery_type&&2===t.orderInfo._status._type&&"send"===t.orderInfo.delivery_type?t.$t("送货人电话"):null;t.$mp.data=Object.assign({},{$root:{m0:r,m1:o,m2:n,m3:d,m4:i,m5:u,m6:a,m7:f,m8:s,m9:l,m10:c,m11:_,m12:m,m13:p,m14:y,m15:$,m16:I,m17:v,m18:g,m19:h,m20:b,m21:x,m22:w,m23:O,m24:k,m25:P,m26:T,m27:j,m28:M,m29:N,m30:A,m31:F,m32:J}})},d=[]},1840:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r("a27d"),n={name:"AdminOrder",data:function(){return{order:!1,change:!1,order_id:"",orderInfo:{_status:{}},status:"",title:"",payType:"",types:"",clickNum:1,goname:"",customForm:[]}},watch:{"$route.params.oid":function(t){var e=this;void 0!=t&&(e.order_id=t,e.getIndex())}},onLoad:function(t){this.order_id=t.id,this.goname=t.goname,this.getIndex()},methods:{getIndex:function(){var t=this;(0,o.getAdminOrderDetail)(t.order_id).then((function(e){if(t.orderInfo=e.data,t.types=e.data._status._type,t.title=e.data._status._title,t.payType=e.data._status._payType,t.orderInfo.custom_form&&t.orderInfo.custom_form.length){var r=[];t.orderInfo.custom_form.map((function(t){""!=t.value&&r.push(t)})),t.$set(t,"customForm",r)}}),(function(e){t.$util.Tips({title:e},{tab:3,url:1})}))}}};e.default=n},2175:function(t,e,r){"use strict";(function(t){r("248d");o(r("66fd"));var e=o(r("2709"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=r,t(e.default)}).call(this,r("543d")["createPage"])},2709:function(t,e,r){"use strict";r.r(e);var o=r("0d3f"),n=r("cd9f");for(var d in n)"default"!==d&&function(t){r.d(e,t,(function(){return n[t]}))}(d);r("690a");var i,u=r("f0c5"),a=Object(u["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=a.exports},"690a":function(t,e,r){"use strict";var o=r("7943"),n=r.n(o);n.a},7943:function(t,e,r){},cd9f:function(t,e,r){"use strict";r.r(e);var o=r("1840"),n=r.n(o);for(var d in o)"default"!==d&&function(t){r.d(e,t,(function(){return o[t]}))}(d);e["default"]=n.a}},[["2175","common/runtime","common/vendor"]]]);