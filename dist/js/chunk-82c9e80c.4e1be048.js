(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82c9e80c"],{"20ef":function(t,e,s){"use strict";var a=s("b96e"),r=s.n(a);r.a},b789:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart"},[s("h1",[t._v("My Cart")]),t.$store.getters.cart.length>0?s("div",[s("div",{staticClass:"table-wrapper"},[s("table",t._l(t.$store.getters.cart,(function(e,a){return s("tr",{key:"item-"+e.name+"-"+a},[s("td",[s("img",{staticClass:"preview",attrs:{src:t.publicPath+e.paths[0]}})]),s("td",[s("p",{staticClass:"name"},[t._v(t._s(e.name))])]),s("td",[s("p",{staticClass:"date"},[t._v(t._s(e.date))])]),s("button",{staticClass:"remove",on:{click:function(){return t.remove(e)}}},[t._v("×")])])})),0)]),s("button",{staticClass:"submit"},[t._v("Checkout")])]):s("div",[s("h3",{staticClass:"text-xl font-medium"},[t._v("Sorry, cart is empty right now!")])])])},r=[],c={data:function(){return{publicPath:"/extended-media-ecommerce/"}},methods:{remove:function(t){this.$store.commit("removeItem",{item:t})}}},i=c,n=(s("20ef"),s("2877")),o=Object(n["a"])(i,a,r,!1,null,"6e6fe79e",null);e["default"]=o.exports},b96e:function(t,e,s){}}]);
//# sourceMappingURL=chunk-82c9e80c.4e1be048.js.map