(this["webpackJsonpteam-app"]=this["webpackJsonpteam-app"]||[]).push([[8],{100:function(t,e,r){"use strict";var n=r(91),a=r(0),o=r.n(a),i=r(18);r(101);e.a=function(){var t=Object(a.useState)(!0),e=Object(n.a)(t,2),r=e[0],c=e[1];return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("i",{className:"fas fa-bars",onClick:function(){c(!r)}}),r&&o.a.createElement("nav",{className:"user-nav"},o.a.createElement(i.b,{to:"/feeds",className:"app-name app"},"Team App"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.c,{activeClassName:"active",to:"/feeds"},"Timeline")),o.a.createElement("li",null,o.a.createElement(i.c,{activeClassName:"active",to:"/create-article"},"Post Article")),o.a.createElement("li",null,o.a.createElement(i.c,{activeClassName:"active",to:"/gif"},"Post Gif")),o.a.createElement("li",null,o.a.createElement(i.c,{activeClassName:"active",to:"/my-posts"},"My Posts")),o.a.createElement("li",{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("id")}},o.a.createElement(i.b,{to:"/"},"Log Out"))))))}},101:function(t,e,r){},103:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new _(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={};function v(){}function y(){}function g(){}var E={};E[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(k([])));w&&w!==r&&n.call(w,o)&&(E=w);var L=g.prototype=v.prototype=Object.create(E);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=s(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=L.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(N.prototype),N.prototype[i]=function(){return this},t.AsyncIterator=N,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new N(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(L),u(L,c,"Generator"),L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;I(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},106:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r.p+"static/media/loader.bbecf458.gif";e.a=function(){return a.a.createElement("div",null,a.a.createElement("img",{src:o,style:{margin:"10em auto",display:"block",width:"15em"},alt:"Loading"}))}},147:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return l}));var n=r(92),a=r.n(n),o=r(93),i=r(94),c=r(19),u=function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/feed");case 3:r=t.sent,n=r.data.data,e({type:i.a,data:n}),e({type:i.b}),console.log(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var r,n,o,u,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=parseInt(localStorage.getItem("id")),t.next=4,c.a.get("/feed");case 4:n=t.sent,o=n.data.data,u=[],l=[],o.articles.map((function(t){t.authorid===r&&u.push(t)})),o.gifs.map((function(t){t.gifauthorid===r&&l.push(t)})),e({type:i.e,data:u}),e({type:i.f,data:l}),e({type:i.b}),e({type:i.h,data:!1}),console.log(o),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}()}},148:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){t.sort((function(t,e){return new Date(e.createdon)-new Date(t.createdon)}))}},288:function(t,e,r){},296:function(t,e,r){"use strict";r.r(e);var n=r(92),a=r.n(n),o=r(93),i=r(0),c=r.n(i),u=r(20),l=r(18),s=(r(23),r(147)),f=r(94),h=r(148),p=r(100),m=r(19),d=(r(288),r(106));e.default=function(){var t=Object(u.c)((function(t){return t.MyArticles})),e=Object(u.c)((function(t){return t.MyGifs})),r=Object(u.c)((function(t){return t.FeedsLoading})),n=Object(u.c)((function(t){return t.refresh}));t&&Object(h.a)(t),e&&Object(h.a)(e);var v=Object(u.b)();Object(i.useEffect)((function(){v(Object(s.b)())}),[n]);var y=function(){var t=Object(o.a)(a.a.mark((function t(e,r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.delete("/".concat(e,"/").concat(r));case 3:n=t.sent,console.log(n),v({type:f.h,data:!0}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},c.a.createElement(p.a,null),c.a.createElement("div",{className:"right"},c.a.createElement("div",{className:"headers"},c.a.createElement("h4",null,"Articles")," | ",c.a.createElement("h4",null,"Gifs")),c.a.createElement("div",{className:"article-container"},r?c.a.createElement(d.a,null):t.map((function(t,e){return c.a.createElement("div",{className:"articles",key:e},c.a.createElement("div",{className:"article-properties"},c.a.createElement(l.b,{to:"/article/".concat(t.title)},c.a.createElement("h3",null,t.title)),c.a.createElement("p",null,t.createdon)),c.a.createElement("article",null,t.article),c.a.createElement("div",{className:"options"},c.a.createElement(l.b,{to:"/edit-article/".concat(t.articleid)},c.a.createElement("button",{className:"btn update"},"Edit")),c.a.createElement("button",{className:"btn delete",onClick:function(e){e.preventDefault(),y("articles",t.articleid)}},"Delete")))}))),c.a.createElement("div",{className:"gif-container"},e?e.map((function(t,e){return c.a.createElement("div",{className:"gifs",key:e},c.a.createElement("img",{src:t.image,alt:"gif",className:"gif-image"}),c.a.createElement("div",{className:"gif-properties"},c.a.createElement(l.b,{to:"/gif/".concat(t.giftitle)},c.a.createElement("h3",null,t.giftitle)),c.a.createElement("div",null,t.gifcreatedon)),c.a.createElement("div",{className:"option"},c.a.createElement("button",{className:"btn delete",onClick:function(e){e.preventDefault(),y("gifs",t.gifid)}},"Delete")))})):c.a.createElement("h1",null,"no gifs"))))}},91:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return a}))},92:function(t,e,r){t.exports=r(103)},93:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},94:function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"i",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return u})),r.d(e,"c",(function(){return l})),r.d(e,"j",(function(){return s})),r.d(e,"k",(function(){return f})),r.d(e,"g",(function(){return h})),r.d(e,"l",(function(){return p})),r.d(e,"m",(function(){return m})),r.d(e,"h",(function(){return d}));var n="LOGIN",a="SIGNUP",o="FEEDS",i="FEEDS_LOADING",c="MY_ARTICLES",u="MY_GIFS",l="GIF_UPLOADING",s="VIEW_ARTICLE",f="VIEW_ARTICLE_LOADING",h="POST_COMMENT_LOADING",p="VIEW_GIF",m="VIEW_GIF_LOADING",d="REFRESH"}}]);
//# sourceMappingURL=8.d78934e9.chunk.js.map