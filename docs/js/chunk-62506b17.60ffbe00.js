(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62506b17"],{1468:function(e,t){var n=1e3,r=60*n,o=60*r,i=24*o,a=7*i,s=365.25*i;function c(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var c=parseFloat(t[1]),u=(t[2]||"ms").toLowerCase();switch(u){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*a;case"days":case"day":case"d":return c*i;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function u(e){var t=Math.abs(e);return t>=i?Math.round(e/i)+"d":t>=o?Math.round(e/o)+"h":t>=r?Math.round(e/r)+"m":t>=n?Math.round(e/n)+"s":e+"ms"}function l(e){var t=Math.abs(e);return t>=i?f(e,t,i,"day"):t>=o?f(e,t,o,"hour"):t>=r?f(e,t,r,"minute"):t>=n?f(e,t,n,"second"):e+" ms"}function f(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return c(e);if("number"===n&&!1===isNaN(e))return t.long?l(e):u(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},4127:function(e,t,n){"use strict";var r=n("d233"),o=n("b313"),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,u=function(e,t){c.apply(e,s(t)?t:[t])},l=Date.prototype.toISOString,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:o.formatters[o["default"]],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,n,o,i,a,c,l,d,p,h,y,g,m){var v=t;if("function"===typeof l?v=l(n,v):v instanceof Date?v=h(v):"comma"===o&&s(v)&&(v=v.join(",")),null===v){if(i)return c&&!g?c(n,f.encoder,m):n;v=""}if("string"===typeof v||"number"===typeof v||"boolean"===typeof v||r.isBuffer(v)){if(c){var b=g?n:c(n,f.encoder,m);return[y(b)+"="+y(c(v,f.encoder,m))]}return[y(n)+"="+y(String(v))]}var C,w=[];if("undefined"===typeof v)return w;if(s(l))C=l;else{var F=Object.keys(v);C=d?F.sort(d):F}for(var j=0;j<C.length;++j){var O=C[j];a&&null===v[O]||(s(v)?u(w,e(v[O],"function"===typeof o?o(n,O):n,o,i,a,c,l,d,p,h,y,g,m)):u(w,e(v[O],n+(p?"."+O:"["+O+"]"),o,i,a,c,l,d,p,h,y,g,m)))}return w},p=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o["default"];if("undefined"!==typeof e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=o.formatters[n],a=f.filter;return("function"===typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?f.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:f.encode,encoder:"function"===typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:a,formatter:r,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}};e.exports=function(e,t){var n,r,o=e,i=p(t);"function"===typeof i.filter?(r=i.filter,o=r("",o)):s(i.filter)&&(r=i.filter,n=r);var c,l=[];if("object"!==typeof o||null===o)return"";c=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var f=a[c];n||(n=Object.keys(o)),i.sort&&n.sort(i.sort);for(var h=0;h<n.length;++h){var y=n[h];i.skipNulls&&null===o[y]||u(l,d(o[y],y,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var g=l.join(i.delimiter),m=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),g.length>0?m+g:""}},4328:function(e,t,n){"use strict";var r=n("4127"),o=n("9e6a"),i=n("b313");e.exports={formats:i,parse:o,stringify:r}},"4de2":function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0});var o=n("a18f"),i=n("ad96");r(n("ad96")),t.default=i.generateAPI(o)},"510f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.articles.length?n("div",[n("b-card-group",{attrs:{columns:""}},e._l(e.articles,function(t,r){return n("b-card",{key:r,staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.title,"img-src":t.thumbnail,"img-alt":"Image","img-top":"",tag:"article"}},[e._l(t.coins,function(t,r){return n("span",{key:r,staticClass:"badge badge-secondary",staticStyle:{"margin-right":"2px"}},[e._v(e._s(t.name))])}),n("b-card-text",[e._v("\n                "+e._s(t.description)+"\n            ")]),n("b-button",{attrs:{href:t.url,target:"_blank",variant:"primary"}},[e._v("View article")])],2)}),1)],1):n("Loader")},o=[],i=n("4de2"),a=n.n(i),s=new a.a("275a522c901908f7a74e0f029f51f50f"),c={name:"CryptoNews",components:{Loader:function(){return n.e("chunk-d75d6048").then(n.bind(null,"555f"))}},data:function(){return{articles:[]}},mounted:function(){var e=this;document.title="Latest CryptoNews",s.getTopNews("en").then(function(t){e.articles=t}).catch(function(e){console.log(e)})}},u=c,l=n("2877"),f=Object(l["a"])(u,r,o,!1,null,"ec53840a",null);t["default"]=f.exports},8226:function(e,t,n){"use strict";(function(r){function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"===typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),this.useColors){var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))}),t.splice(o,0,n)}}function s(){var e;return"object"===("undefined"===typeof console?"undefined":o(console))&&console.log&&(e=console).log.apply(e,arguments)}function c(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(n){}}function u(){var e;try{e=t.storage.getItem("debug")}catch(n){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=Object({NODE_ENV:"production",VUE_APP_NEWS_KEY:"275a522c901908f7a74e0f029f51f50f",BASE_URL:"/"}).DEBUG),e}function l(){try{return localStorage}catch(e){}}t.log=s,t.formatArgs=a,t.save=c,t.load=u,t.useColors=i,t.storage=l(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n("8b41")(t);var f=e.exports.formatters;f.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}).call(this,n("f28c"))},"8b41":function(e,t,n){"use strict";function r(e){function t(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){var n;function a(){if(a.enabled){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i=a,s=Number(new Date),c=s-(n||s);i.diff=c,i.prev=n,i.curr=s,n=s,t[0]=r.coerce(t[0]),"string"!==typeof t[0]&&t.unshift("%O");var u=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,function(e,n){if("%%"===e)return e;u++;var o=r.formatters[n];if("function"===typeof o){var a=t[u];e=o.call(i,a),t.splice(u,1),u--}return e}),r.formatArgs.call(i,t);var l=i.log||r.log;l.apply(i,t)}}return a.namespace=e,a.enabled=r.enabled(e),a.useColors=r.useColors(),a.color=t(e),a.destroy=o,a.extend=i,"function"===typeof r.init&&r.init(a),r.instances.push(a),a}function o(){var e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){return r(this.namespace+("undefined"===typeof t?":":t)+e)}function a(e){var t;r.save(e),r.names=[],r.skips=[];var n=("string"===typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&(e=n[t].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){var i=r.instances[t];i.enabled=r.enabled(i.namespace)}}function s(){r.enable("")}function c(e){if("*"===e[e.length-1])return!0;var t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}return r.debug=r,r.default=r,r.coerce=u,r.disable=s,r.enable=a,r.enabled=c,r.humanize=n("1468"),Object.keys(e).forEach(function(t){r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}e.exports=r},"9e6a":function(e,t,n){"use strict";var r=n("d233"),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},s="utf8=%26%2310003%3B",c="utf8=%E2%9C%93",u=function(e,t){var n,u={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,d=l.split(t.delimiter,f),p=-1,h=t.charset;if(t.charsetSentinel)for(n=0;n<d.length;++n)0===d[n].indexOf("utf8=")&&(d[n]===c?h="utf-8":d[n]===s&&(h="iso-8859-1"),p=n,n=d.length);for(n=0;n<d.length;++n)if(n!==p){var y,g,m=d[n],v=m.indexOf("]="),b=-1===v?m.indexOf("="):v+1;-1===b?(y=t.decoder(m,i.decoder,h),g=t.strictNullHandling?null:""):(y=t.decoder(m.slice(0,b),i.decoder,h),g=t.decoder(m.slice(b+1),i.decoder,h)),g&&t.interpretNumericEntities&&"iso-8859-1"===h&&(g=a(g)),g&&t.comma&&g.indexOf(",")>-1&&(g=g.split(",")),o.call(u,y)?u[y]=r.combine(u[y],g):u[y]=g}return u},l=function(e,t,n){for(var r=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a&&n.parseArrays)i=[].concat(r);else{i=n.plainObjects?Object.create(null):{};var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(s,10);n.parseArrays||""!==s?!isNaN(c)&&a!==s&&String(c)===s&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(i=[],i[c]=r):i[s]=r:i={0:r}}r=i}return r},f=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=i.exec(r),c=s?r.slice(0,s.index):r,u=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}var f=0;while(null!==(s=a.exec(r))&&f<n.depth){if(f+=1,!n.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+r.slice(s.index)+"]"),l(u,t,n)}},d=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?i.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth?e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}};e.exports=function(e,t){var n=d(t);if(""===e||null===e||"undefined"===typeof e)return n.plainObjects?Object.create(null):{};for(var o="string"===typeof e?u(e,n):e,i=n.plainObjects?Object.create(null):{},a=Object.keys(o),s=0;s<a.length;++s){var c=a[s],l=f(c,o[c],n);i=r.merge(i,l,n)}return r.compact(i)}},a18f:function(e,t,n){"use strict";var r=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof o)return o;throw new Error("unable to locate global object")},o=r();e.exports=t=o.fetch,t.default=o.fetch.bind(o),t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response},ad96:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r["throw"](e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n("8226"),a=n("4328"),s=i("crypto-news-api"),c=function(e){var t=function(){function t(e,t){if(this.sentimentEnabled=!1,!e)throw new Error("No API key found. Register for an API key at https://cryptocontrol.io/apis");this.apikey=e,this.proxyURL=t,s("using cryptocontrol.io api v1")}return t.prototype._fetch=function(t,n){void 0===n&&(n={}),n.enableSentiment=this.sentimentEnabled;var r=a.stringify(n),o="https://cryptocontrol.io/api/v1/public",i=this.proxyURL||o;return e(""+i+t+"?"+r,{headers:{"user-agent":"CryptoControl Node.js API v2.2.0","x-api-key":this.apikey}}).then(function(e){if(401===e.status)throw new Error("Invalid API Key");if(405===e.status)throw new Error("You are not a premium user. Visit https://cryptocontrol.io/about/premium for more info");if(200!==e.status)throw new Error("Bad response from the CryptoControl server");return e.json()})},t.prototype.enableSentiment=function(){return r(this,void 0,void 0,function(){return o(this,function(e){return this.sentimentEnabled=!0,[2]})})},t.prototype.getTopNews=function(e){return void 0===e&&(e="en"),r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this._fetch("/news",{language:e})];case 1:return[2,t.sent()]}})})},t.prototype.getLatestNews=function(e){return void 0===e&&(e="en"),r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this._fetch("/news",{latest:!0,language:e})];case 1:return[2,t.sent()]}})})},t.prototype.getTopNewsByCategory=function(e){return void 0===e&&(e="en"),r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this._fetch("/news/category",{language:e})];case 1:return[2,t.sent()]}})})},t.prototype.getTopNewsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/news/coin/"+e,{language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getLatestNewsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/news/coin/"+e,{latest:!0,language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getTopNewsByCoinCategory=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/news/coin/"+e+"/category",{language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getTopTweeetsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/tweets/coin/"+e,{language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getLatestTweetsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/tweets/coin/"+e,{latest:!0,language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getTopRedditPostsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/reddit/coin/"+e,{language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getLatestRedditPostsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/reddit/coin/"+e,{latest:!0,language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getTopFeedByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/feed/coin/"+e,{language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getLatestFeedByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/feed/coin/"+e,{latest:!0,language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getTopItemsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/all/coin/"+e,{language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getLatestItemsByCoin=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/all/coin/"+e,{latest:!0,language:t})];case 1:return[2,n.sent()]}})})},t.prototype.getCoinDetails=function(e,t){return void 0===t&&(t="en"),r(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,this._fetch("/details/coin/"+e,{language:t})];case 1:return[2,n.sent()]}})})},t}();return t};t.generateAPI=c},b313:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){while(e.length>1){var t=e.pop(),n=t.obj[t.prop];if(o(n)){for(var r=[],i=0;i<n.length;++i)"undefined"!==typeof n[i]&&r.push(n[i]);t.obj[t.prop]=r}}},s=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(n[r]=e[r]);return n},c=function e(t,n,i){if(!n)return t;if("object"!==typeof n){if(o(t))t.push(n);else{if(!t||"object"!==typeof t)return[t,n];(i&&(i.plainObjects||i.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(n);var a=t;return o(t)&&!o(n)&&(a=s(t,i)),o(t)&&o(n)?(n.forEach(function(n,o){if(r.call(t,o)){var a=t[o];a&&"object"===typeof a&&n&&"object"===typeof n?t[o]=e(a,n,i):t.push(n)}else t[o]=n}),t):Object.keys(n).reduce(function(t,o){var a=n[o];return r.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t},a)},u=function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},l=function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(o){return r}},f=function(e,t,n){if(0===e.length)return e;var r="string"===typeof e?e:String(e);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",a=0;a<r.length;++a){var s=r.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?o+=r.charAt(a):s<128?o+=i[s]:s<2048?o+=i[192|s>>6]+i[128|63&s]:s<55296||s>=57344?o+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&r.charCodeAt(a)),o+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s])}return o},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var o=t[r],i=o.obj[o.prop],s=Object.keys(i),c=0;c<s.length;++c){var u=s[c],l=i[u];"object"===typeof l&&null!==l&&-1===n.indexOf(l)&&(t.push({obj:i,prop:u}),n.push(l))}return a(t),e},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},h=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},y=function(e,t){return[].concat(e,t)};e.exports={arrayToObject:s,assign:u,combine:y,compact:d,decode:l,encode:f,isBuffer:h,isRegExp:p,merge:c}}}]);