(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/goods_cate3"],{"34e0":function(t,i,e){"use strict";e.r(i);var r=e("3715"),a=e.n(r);for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);i["default"]=a.a},3715:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e("1579"),a=e("451d"),s=e("26cb"),c=e("2c78"),n=e("666f"),o=function(){e.e("components/parabolaBall/ParabolaBall").then(function(){return resolve(e("4f57"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/productWindow/index").then(function(){return resolve(e("e642"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/goodClass/index").then(function(){return resolve(e("1300"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/cartList/index").then(function(){return resolve(e("17ca"))}.bind(null,e)).catch(e.oe)},l={computed:(0,s.mapGetters)(["isLogin","uid"]),components:{productWindow:u,goodClass:h,cartList:d,ParabalaBall:o},props:{isNew:{type:Boolean,default:!1}},watch:{isNew:function(t){t&&this.getAllCategory()}},data:function(){return{categoryList:[],navActive:0,categoryTitle:"",categoryErList:[],tabLeft:0,isWidth:0,tabClick:0,iSlong:!0,tempArr:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:10,cid:0,sid:0,isAuto:!1,isShowAuth:!1,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],attrValue:"",storeName:"",id:0,cartData:{cartList:[],iScart:!1},cartCount:0,totalPrice:0,lengthCart:0,is_vip:0,cart_num:0,storeInfo:{},endLocation:{}}},onShow:function(){},onLoad:function(){var i=this;this.$nextTick((function(){t.createSelectorQuery().select("#cart").boundingClientRect((function(e){var r=t.getSystemInfoSync();r.windowTop;i.endLocation={x:e.left+t.upx2px(120)/2,y:e.top}})).exec()}))},mounted:function(){var i=this;i.lengthCart=i.cartData.cartList,t.getSystemInfo({success:function(t){i.isWidth=t.windowWidth/5}})},methods:{jumpIndex:function(){this.$emit("jumpIndex")},addCart:function(t){},subOrder:function(){var i=this,e=i.cartData.cartList,r=[];if(!e.length)return i.$util.Tips({title:this.$t("请选择产品")});e.forEach((function(t){r.push(t.id)})),t.navigateTo({url:"/pages/goods/order_confirm/index?cartId="+r.join(",")}),i.cartData.iScart=!1},getTotalPrice:function(){var t=this,i=t.cartData.cartList,e=0;i.forEach((function(i){i.attrStatus&&i.status&&(e=t.$util.$h.Add(e,t.$util.$h.Mul(i.cart_num,i.truePrice)))})),t.$set(t,"totalPrice",e)},ChangeSubDel:function(t){var i=this,e=i.cartData.cartList,r=[];e.forEach((function(t){r.push(t.id)})),(0,a.cartDel)(r.join(",")).then((function(t){i.$set(i.cartData,"cartList",[]),i.cartData.iScart=!1,i.totalPrice=0,i.page=1,i.loadend=!1,i.tempArr=[],i.productslist(),i.getCartNum()}))},ChangeOneDel:function(t,i){var e=this,r=e.cartData.cartList;(0,a.cartDel)(t.toString()).then((function(t){r.splice(i,1),r.length||(e.cartData.iScart=!1,e.page=1,e.loadend=!1,e.tempArr=[],e.productslist()),e.getCartNum()}))},getCartList:function(t){var i=this;(0,a.vcartList)().then((function(e){i.$set(i.cartData,"cartList",e.data),e.data.length?i.$set(i.cartData,"iScart",!t&&!i.cartData.iScart):i.$set(i.cartData,"iScart",!1),i.getTotalPrice()}))},closeList:function(t){this.$set(this.cartData,"iScart",t),this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},getCartNum:function(){var t=this;(0,a.getCartCounts)().then((function(i){t.cartCount=i.data.count,t.$refs.goodClass.addIng=!1}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},DefaultSelect:function(){var t=this.attr.productAttr,i=[];for(var e in this.productValue)if(this.productValue[e].stock>0){i=this.attr.productAttr.length?e.split(","):[];break}for(var r=0;r<t.length;r++)this.$set(t[r],"index",i[r]);var a=this.productValue[i.join(",")];a&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",a.image),this.$set(this.attr.productSelect,"price",a.price),this.$set(this.attr.productSelect,"stock",a.stock),this.$set(this.attr.productSelect,"unique",a.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",a.vip_price),this.$set(this,"attrValue",i.join(","))):!a&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price)):a||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price))},ChangeAttr:function(t){var i=this.productValue[t];i&&i.stock>0?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t)):i&&0==i.stock?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue","")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},onLoadFun:function(){},productslist:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,r.getProductslist)({page:t.page,limit:t.limit,type:1,cid:t.cid,sid:t.sid}).then((function(i){var e=i.data,r=e.length<t.limit;t.tempArr=t.$util.SplitArray(e,t.tempArr),t.$set(t,"tempArr",t.tempArr),t.loading=!1,t.loadend=r,t.loadTitle=r?t.$t("没有更多内容啦~"):t.$t("加载更多"),t.page=t.page+1})).catch((function(i){t.loading=!1,t.loadTitle=t.$t("加载更多")})))},ChangeCartNumDan:function(t,i,e){var r=this.tempArr[i],a=this.tempArr[i].stock;this.ChangeCartNum(t,r,a,0,e.id)},ChangeCartNumDuo:function(t){var i=this.productValue[this.attrValue];if(void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){var e=i.stock||0,r=this.attr.productSelect;this.ChangeCartNum(t,r,e,1,this.id)}},ChangeCartList:function(t,i){var e=this.cartData.cartList,r=e[i],a=e[i].trueStock;this.ChangeCartNum(t,r,a,0,r.product_id,i,1),e.length||(this.cartData.iScart=!1,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist())},ChangeCartNum:function(t,i,e,r,a,s,c){if(t){if(i.cart_num++,i.cart_num>e)return r?(this.$set(this.attr.productSelect,"cart_num",e||1),this.$set(this,"cart_num",e||1)):(i.cart_num=e||0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)),this.$util.Tips({title:this.$t("该产品没有更多库存了")});r||(c?(this.goCat(0,a,1,1,i.product_attr_unique),this.getTotalPrice()):this.goCat(0,a,1))}else i.cart_num--,0==i.cart_num&&(this.cartData.cartList.splice(s,1),r&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1))),i.cart_num<0?r?(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)):(i.cart_num=0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)):r||(c?(this.goCat(0,a,0,1,i.product_attr_unique),this.getTotalPrice()):this.goCat(0,a,0))},goCatNum:function(){this.goCat(1,this.id,1)},goCat:function(t,i,e,a,s){var c=this;if(t){var n=c.productValue[this.attrValue];if(c.attr.productAttr.length&&void 0===n)return c.$util.Tips({title:c.$t("该产品没有更多库存了")})}var o={product_id:i,num:t?c.attr.productSelect.cart_num:1,type:e,unique:t?c.attr.productSelect.unique:a?s:""};(0,r.postCartNum)(o).then((function(i){t&&(c.attr.cartAttr=!1,c.$util.Tips({title:c.$t("添加成功")}),c.tempArr.forEach((function(t,i){if(t.id==c.id){var e=c.attr.productSelect.stock,r=parseInt(t.cart_num)+parseInt(c.attr.productSelect.cart_num);t.cart_num=r>e?e:r}}))),c.getCartNum(),a||c.getCartList(1)})).catch((function(t){return c.$util.Tips({title:t})}))},goCartDan:function(i,e){if(this.isLogin){if(!i.cart_button)return void(0,c.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}));this.tempArr[e].cart_num=1,this.$set(this,"tempArr",this.tempArr),this.goCat(0,i.id,1)}else this.getIsLogin()},goCartDuo:function(i){if(this.isLogin){if(!i.cart_button)return void(0,c.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}));t.showLoading({title:this.$t("正在加载中")}),this.storeName=i.store_name,this.getAttrs(i.id),this.$set(this,"id",i.id),this.$set(this.attr,"cartAttr",!0)}else this.getIsLogin()},getIsLogin:function(){(0,n.toLogin)()},getAttrs:function(i){var e=this;(0,r.getAttr)(i,0).then((function(i){t.hideLoading(),e.$set(e.attr,"productAttr",i.data.productAttr),e.$set(e,"productValue",i.data.productValue),e.$set(e,"is_vip",i.data.storeInfo.is_vip),e.$set(e,"storeInfo",i.data.storeInfo),e.DefaultSelect()}))},goDetail:function(i){this.isLogin?(0,c.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})})):(0,n.toLogin)()},openTap:function(){this.iSlong=!1},closeTap:function(){this.iSlong=!0},getAllCategory:function(){var i=this;if(this.isNew||!t.getStorageSync("CAT3_DATA"))(0,r.getCategoryList)().then((function(e){var r=e.data;t.setStorageSync("CAT3_DATA",r),r.forEach((function(t){t.children.unshift({id:0,cate_name:i.$t("全部")})})),i.categoryTitle=r[0].cate_name,i.cid=r[0].id,i.sid=0,i.navActive=0,i.tabClick=0,i.categoryList=r,i.categoryErList=e.data[0].children?e.data[0].children:[],i.page=1,i.loadend=!1,i.tempArr=[],i.productslist()}));else{var e=t.getStorageSync("CAT3_DATA");e.forEach((function(t){t.children.unshift({id:0,cate_name:i.$t("全部")})})),i.categoryTitle=e[0].cate_name,i.cid=e[0].id,i.sid=0,i.navActive=0,i.tabClick=0,i.categoryList=e,i.categoryErList=res.data[0].children?res.data[0].children:[],i.page=1,i.loadend=!1,i.tempArr=[],i.productslist()}},tapNav:function(t,i){var e=this.categoryList[t];this.navActive=t,this.categoryTitle=e.cate_name,this.categoryErList=i.children?i.children:[],this.tabClick=0,this.tabLeft=0,this.cid=e.id,this.sid=0,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},longClick:function(t){this.categoryErList.length>3&&(this.tabLeft=(t-1)*(this.isWidth+6)),this.tabClick=t,this.iSlong=!0,this.sid=this.categoryErList[t].id,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()}},onReachBottom:function(){this.productslist()}};i.default=l}).call(this,e("543d")["default"])},4341:function(t,i,e){"use strict";var r;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return r}));var a=function(){var t=this,i=t.$createElement,e=(t._self._c,t.$t("搜索商品名称")),r=t.__map(t.categoryList,(function(i,e){var r=t.__get_orig(i),a=t.$t(i.cate_name);return{$orig:r,m1:a}})),a=t.iSlong?t.__map(t.categoryErList,(function(i,e){var r=t.__get_orig(i),a=t.$t(i.cate_name);return{$orig:r,m2:a}})):null,s=t.iSlong?null:t.__map(t.categoryErList,(function(i,e){var r=t.__get_orig(i),a=t.$t(i.cate_name);return{$orig:r,m3:a}})),c=t.$t("￥"),n=t.$t("去付款");t.$mp.data=Object.assign({},{$root:{m0:e,l0:r,l1:a,l2:s,m4:c,m5:n}})},s=[]},aa0b:function(t,i,e){"use strict";var r=e("c9dd"),a=e.n(r);a.a},c322:function(t,i,e){"use strict";e.r(i);var r=e("4341"),a=e("34e0");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("aa0b");var c,n=e("f0c5"),o=Object(n["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);i["default"]=o.exports},c9dd:function(t,i,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods_cate/goods_cate3-create-component',
    {
        'pages/goods_cate/goods_cate3-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c322"))
        })
    },
    [['pages/goods_cate/goods_cate3-create-component']]
]);
