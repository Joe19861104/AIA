(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/HotNewGoods/feedback"],{"0b0b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3df5"),c={name:"feedback",data:function(){return{name:"",phone:"",con:"",feedback:""}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var t=this;(0,i.serviceFeedBack)().then((function(e){t.feedback=e.data.feedback}))},subMit:function(){var t=this;return this.name?this.phone&&/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?this.con?void(0,i.feedBackPost)({rela_name:this.name,phone:this.phone,content:this.con}).then((function(e){t.$util.Tips({title:e.msg,icon:"success"},{tab:3})})).catch((function(t){that.$util.Tips({title:t})})):this.$util.Tips({title:this.$t("请填写内容")}):this.$util.Tips({title:this.$t("请输入正确的手机号码")}):this.$util.Tips({title:this.$t("请输入姓名")})}}};e.default=c},1088:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("商城客服已离线")),i=t.$t("我要反馈"),c=t.$t("请输入姓名"),o=t.$t("请输入手机号"),a=t.$t("请填写内容"),u=t.$t("提交");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:c,m3:o,m4:a,m5:u}})},o=[]},"3f82":function(t,e,n){"use strict";(function(t){n("248d");i(n("66fd"));var e=i(n("b6fa"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"5e48":function(t,e,n){},b6fa:function(t,e,n){"use strict";n.r(e);var i=n("1088"),c=n("fc5d");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("dc00");var a,u=n("f0c5"),s=Object(u["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=s.exports},dc00:function(t,e,n){"use strict";var i=n("5e48"),c=n.n(i);c.a},fc5d:function(t,e,n){"use strict";n.r(e);var i=n("0b0b"),c=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=c.a}},[["3f82","common/runtime","common/vendor"]]]);