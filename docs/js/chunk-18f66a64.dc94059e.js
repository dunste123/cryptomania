(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18f66a64"],{"7f7f":function(t,o,n){var e=n("86cc").f,r=Function.prototype,c=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&e(r,i,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},d7c2:function(t,o,n){"use strict";function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=i(),e=n[t];return e||(c(t,o),o)}function r(t){var o=e("coins",[]);o.push(t),c("coins",o)}function c(t,o){var n=i();n[t]=o,s(n)}function i(){var t=localStorage.getItem("cryptoData");return t||(localStorage.setItem("cryptoData","{}"),t="{}"),JSON.parse(t)}function s(t){var o=JSON.stringify(t);localStorage.setItem("cryptoData",o)}n.d(o,"b",function(){return e}),n.d(o,"a",function(){return r}),n.d(o,"c",function(){return c})},ef5f:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return t.coinsStored.length?n("div",[n("h3",{staticClass:"text-center"},[t._v("Your Stored Coins:")]),n("p",{staticClass:"text-center"},[t._v("All values are from when you stored the coin")]),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.coinsStored,function(o,e){return n("tr",{key:e},[n("th",{attrs:{scope:"row"}},[n("CoinIcon",{attrs:{symbol:o.symbol}}),t._v("\n                "+t._s(o.symbol)+"\n            ")],1),n("td",[t._v(t._s(o.name))]),n("td",[t._v("$"+t._s(parseFloat(o.priceUsd).toFixed(5)))]),n("td",[t._v("$"+t._s(o.marketCapUsd))]),n("td",[n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(n){return t.remove(o)}}},[t._v("Remove")])],1)])}),0)]),t._l(t.coinsStored,function(o,e){return n("div",{key:e},[t._v("\n        "+t._s(o)+"\n    ")])})],2):n("div",[n("p",{staticClass:"text-center"},[t._v("You don't have any coins in your CryptoFolio, you can do this via the more info modal on\n        the live coin page")])])},r=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Short")]),n("th",{attrs:{scope:"col"}},[t._v("Coin")]),n("th",{attrs:{scope:"col"}},[t._v("Price")]),n("th",{attrs:{scope:"col"}},[t._v("Market Cap")]),n("th",{attrs:{scope:"col"}},[t._v("Remove Coin")])])])}],c=(n("7f7f"),n("d7c2")),i={name:"Portfolio",components:{CoinIcon:function(){return n.e("chunk-33197ffb").then(n.bind(null,"5b8c"))}},data:function(){return{coinsStored:[]}},mounted:function(){this.coinsStored=Object(c["b"])("coins",[]),document.title="My CryptoFolio"},methods:{remove:function(t){var o=confirm("Are you sure that you want to delete this stored ".concat(t.name,"?"));if(o){for(var n=0;n<this.coinsStored.length;n++){var e=this.coinsStored[n];if(t.uid===e.uid){this.coinsStored.splice(n,1);break}}Object(c["c"])("coins",this.coinsStored)}}}},s=i,a=n("2877"),u=Object(a["a"])(s,e,r,!1,null,"561cecc8",null);o["default"]=u.exports}}]);