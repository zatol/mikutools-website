/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{2600:function(e,t,n){var o;window,o=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="",n(n.s=0)}([function(e,t,n){var o,r,c;r=[],void 0===(c="function"==typeof(o=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,p){return(l=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e})(e,p)}function f(e){var t=this,n=arguments,o=!1;return function(){if(!o){var r=t;o=!0,e.apply(r,n)}}}function d(e,t,n){var o=this,r=arguments,c=null,l=null;return function(){var f=o,d=r,h=+new Date;clearTimeout(c),l||(l=h),h-l>=n?(e.apply(f,d),l=h):c=setTimeout((function(){e.apply(f,d)}),t)}}var h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=r(this,c(t).call(this))).blockTags=/^(div|p|h1|h2|h3|h4|h5|h6)$/i,e.ignoredTags=/^(script|code|pre|textarea)$/i,e.presentationalTags=/^(b|code|del|em|i|s|strong)$/i,e.spaceLikeTags=/^(br|hr|i|img|pangu)$/i,e.spaceSensitiveTags=/^(a|del|pre|s|strike|u)$/i,e.isAutoSpacingPageExecuted=!1,e}var n,h,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(h=[{key:"isContentEditable",value:function(e){return e.isContentEditable||e.getAttribute&&"true"===e.getAttribute("g_editable")}},{key:"isSpecificTag",value:function(e,t){return e&&e.nodeName&&e.nodeName.search(t)>=0}},{key:"isInsideSpecificTag",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e;if(n&&this.isSpecificTag(o,t))return!0;for(;o.parentNode;)if(o=o.parentNode,this.isSpecificTag(o,t))return!0;return!1}},{key:"canIgnoreNode",value:function(e){var t=e;if(t&&(this.isSpecificTag(t,this.ignoredTags)||this.isContentEditable(t)))return!0;for(;t.parentNode;)if((t=t.parentNode)&&(this.isSpecificTag(t,this.ignoredTags)||this.isContentEditable(t)))return!0;return!1}},{key:"isFirstTextChild",value:function(e,t){for(var n=e.childNodes,i=0;i<n.length;i++){var o=n[i];if(o.nodeType!==Node.COMMENT_NODE&&o.textContent)return o===t}return!1}},{key:"isLastTextChild",value:function(e,t){for(var n=e.childNodes,i=n.length-1;i>-1;i--){var o=n[i];if(o.nodeType!==Node.COMMENT_NODE&&o.textContent)return o===t}return!1}},{key:"spacingNodeByXPath",value:function(e,t){if(t instanceof Node&&!(t instanceof DocumentFragment))for(var n,o,r=document.evaluate(e,t,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),i=r.snapshotLength-1;i>-1;--i){if(n=r.snapshotItem(i),this.isSpecificTag(n.parentNode,this.presentationalTags)&&!this.isInsideSpecificTag(n.parentNode,this.ignoredTags)){var c=n.parentNode;if(c.previousSibling){var l=c.previousSibling;if(l.nodeType===Node.TEXT_NODE){var f=l.data.substr(-1)+n.data.toString().charAt(0);f!==this.spacing(f)&&(l.data="".concat(l.data," "))}}if(c.nextSibling){var d=c.nextSibling;if(d.nodeType===Node.TEXT_NODE){var h=n.data.substr(-1)+d.data.toString().charAt(0);h!==this.spacing(h)&&(d.data=" ".concat(d.data))}}}if(this.canIgnoreNode(n))o=n;else{var v=this.spacing(n.data);if(n.data!==v&&(n.data=v),o){if(n.nextSibling&&n.nextSibling.nodeName.search(this.spaceLikeTags)>=0){o=n;continue}var y=n.data.toString().substr(-1)+o.data.toString().substr(0,1);if(this.spacing(y)!==y){for(var m=o;m.parentNode&&-1===m.nodeName.search(this.spaceSensitiveTags)&&this.isFirstTextChild(m.parentNode,m);)m=m.parentNode;for(var T=n;T.parentNode&&-1===T.nodeName.search(this.spaceSensitiveTags)&&this.isLastTextChild(T.parentNode,T);)T=T.parentNode;if(T.nextSibling&&T.nextSibling.nodeName.search(this.spaceLikeTags)>=0){o=n;continue}if(-1===T.nodeName.search(this.blockTags))if(-1===m.nodeName.search(this.spaceSensitiveTags))-1===m.nodeName.search(this.ignoredTags)&&-1===m.nodeName.search(this.blockTags)&&(o.previousSibling?-1===o.previousSibling.nodeName.search(this.spaceLikeTags)&&(o.data=" ".concat(o.data)):this.canIgnoreNode(o)||(o.data=" ".concat(o.data)));else if(-1===T.nodeName.search(this.spaceSensitiveTags))n.data="".concat(n.data," ");else{var x=document.createElement("pangu");x.innerHTML=" ",m.previousSibling?-1===m.previousSibling.nodeName.search(this.spaceLikeTags)&&m.parentNode.insertBefore(x,m):m.parentNode.insertBefore(x,m),x.previousElementSibling||x.parentNode&&x.parentNode.removeChild(x)}}}o=n}}}},{key:"spacingNode",value:function(e){var t=".//*/text()[normalize-space(.)]";e.children&&0===e.children.length&&(t=".//text()[normalize-space(.)]"),this.spacingNodeByXPath(t,e)}},{key:"spacingElementById",value:function(e){var t='id("'.concat(e,'")//text()');this.spacingNodeByXPath(t,document)}},{key:"spacingElementByClassName",value:function(e){var t='//*[contains(concat(" ", normalize-space(@class), " "), "'.concat(e,'")]//text()');this.spacingNodeByXPath(t,document)}},{key:"spacingElementByTagName",value:function(e){var t="//".concat(e,"//text()");this.spacingNodeByXPath(t,document)}},{key:"spacingPageTitle",value:function(){this.spacingNodeByXPath("/html/head/title/text()",document)}},{key:"spacingPageBody",value:function(){var e="/html/body//*/text()[normalize-space(.)]";["script","style","textarea"].forEach((function(t){e="".concat(e,'[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="').concat(t,'"]')})),this.spacingNodeByXPath(e,document)}},{key:"spacingPage",value:function(){this.spacingPageTitle(),this.spacingPageBody()}},{key:"autoSpacingPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;if(document.body instanceof Node&&!this.isAutoSpacingPageExecuted){this.isAutoSpacingPageExecuted=!0;var o=this,r=f((function(){o.spacingPage()})),c=document.getElementsByTagName("video");if(0===c.length)setTimeout((function(){r()}),e);else for(var i=0;i<c.length;i++){var video=c[i];if(4===video.readyState){setTimeout((function(){r()}),3e3);break}video.addEventListener("loadeddata",(function(){setTimeout((function(){r()}),4e3)}))}var l=[],h=d((function(){for(;l.length;){var e=l.shift();e&&o.spacingNode(e)}}),t,{maxWait:n}),v=new MutationObserver((function(e,t){e.forEach((function(e){switch(e.type){case"childList":e.addedNodes.forEach((function(e){e.nodeType===Node.ELEMENT_NODE?l.push(e):e.nodeType===Node.TEXT_NODE&&l.push(e.parentNode)}));break;case"characterData":var t=e.target;t.nodeType===Node.TEXT_NODE&&l.push(t.parentNode)}})),h()}));v.observe(document.body,{characterData:!0,childList:!0,subtree:!0})}}}])&&o(n.prototype,h),v&&o(n,v),t}(n(1).Pangu),v=new h;e.exports=v,e.exports.default=v,e.exports.Pangu=h})?o.apply(t,r):o)||(e.exports=c)},function(e,t,n){var o,r,c;r=[],void 0===(c="function"==typeof(o=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o="⺀-⻿⼀-⿟぀-ゟ゠-ヺー-ヿ㄀-ㄯ㈀-㋿㐀-䶿一-鿿豈-﫿",r=new RegExp("[".concat(o,"]")),c=new RegExp("([".concat(o,"])[ ]*([\\:]+|\\.)[ ]*([").concat(o,"])"),"g"),l=new RegExp("([".concat(o,"])[ ]*([~\\!;,\\?]+)[ ]*"),"g"),f=new RegExp("([\\.]{2,}|…)([".concat(o,"])"),"g"),d=new RegExp("([".concat(o,"])\\:([A-Z0-9\\(\\)])"),"g"),h=new RegExp("([".concat(o,'])([`"״])'),"g"),v=new RegExp('([`"״])(['.concat(o,"])"),"g"),y=/([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g,m=new RegExp("([".concat(o,"])('[^s])"),"g"),T=new RegExp("(')([".concat(o,"])"),"g"),x=new RegExp("([A-Za-z0-9".concat(o,"])( )('s)"),"g"),N=new RegExp("([".concat(o,"])(#)([").concat(o,"]+)(#)([").concat(o,"])"),"g"),$=new RegExp("([".concat(o,"])(#([^ ]))"),"g"),E=new RegExp("(([^ ])#)([".concat(o,"])"),"g"),S=new RegExp("([".concat(o,"])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])"),"g"),w=new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([".concat(o,"])"),"g"),k=/([/]) ([a-z\-_\./]+)/g,P=/([/\.])([A-Za-z\-_\./]+) ([/])/g,_=new RegExp("([".concat(o,"])([\\(\\[\\{<>“])"),"g"),O=new RegExp("([\\)\\]\\}<>”])([".concat(o,"])"),"g"),R=/([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/,A=new RegExp("([A-Za-z0-9".concat(o,"])[ ]*([“])([A-Za-z0-9").concat(o,"\\-_ ]+)([”])"),"g"),C=new RegExp("([“])([A-Za-z0-9".concat(o,"\\-_ ]+)([”])[ ]*([A-Za-z0-9").concat(o,"])"),"g"),z=/([A-Za-z0-9])([\(\[\{])/g,j=/([\)\]\}])([A-Za-z0-9])/g,B=new RegExp("([".concat(o,"])([A-Za-zͰ-Ͽ0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/¡-ÿ⅐-↏✀—➿])"),"g"),D=new RegExp("([A-Za-zͰ-Ͽ0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?¡-ÿ⅐-↏✀—➿])([".concat(o,"])"),"g"),Z=/(%)([A-Za-z])/g,L=/([ ]*)([\u00b7\u2022\u2027])([ ]*)/g,X=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.version="4.0.7"}var o,X,M;return o=e,(X=[{key:"convertToFullwidth",value:function(e){return e.replace(/~/g,"～").replace(/!/g,"！").replace(/;/g,"；").replace(/:/g,"：").replace(/,/g,"，").replace(/\./g,"。").replace(/\?/g,"？")}},{key:"spacing",value:function(text){if("string"!=typeof text)return console.warn("spacing(text) only accepts string but got ".concat(t(text))),text;if(text.length<=1||!r.test(text))return text;var e=this,n=text;return n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(c,(function(t,n,o,r){var c=e.convertToFullwidth(o);return"".concat(n).concat(c).concat(r)}))).replace(l,(function(t,n,o){var r=e.convertToFullwidth(o);return"".concat(n).concat(r)}))).replace(f,"$1 $2")).replace(d,"$1：$2")).replace(h,"$1 $2")).replace(v,"$1 $2")).replace(y,"$1$2$3")).replace(m,"$1 $2")).replace(T,"$1 $2")).replace(x,"$1's")).replace(N,"$1 $2$3$4 $5")).replace($,"$1 $2")).replace(E,"$1 $3")).replace(S,"$1 $2 $3")).replace(w,"$1 $2 $3")).replace(k,"$1$2")).replace(P,"$1$2$3")).replace(_,"$1 $2")).replace(O,"$1 $2")).replace(R,"$1$2$3")).replace(A,"$1 $2$3$4")).replace(C,"$1$2$3 $4")).replace(z,"$1 $2")).replace(j,"$1 $2")).replace(B,"$1 $2")).replace(D,"$1 $2")).replace(Z,"$1 $2")).replace(L,"・")}},{key:"spacingText",value:function(text){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};try{e=this.spacing(text)}catch(e){return void t(e)}t(null,e)}},{key:"spacingTextSync",value:function(text){return this.spacing(text)}}])&&n(o.prototype,X),M&&n(o,M),e}(),M=new X;e.exports=M,e.exports.default=M,e.exports.Pangu=X})?o.apply(t,r):o)||(e.exports=c)}])},e.exports=o()},2792:function(e,t,n){"use strict";n.r(t);var o=n(2600),r=n.n(o),c={name:"TextAutospace",head:function(){return this.$store.state.currentTool.head},data:function(){return{content:""}},computed:{results:function(){return r.a.spacing(this.content)}}},l=n(5),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text_autospace"},[n("nya-container",{attrs:{title:"中英文自动加空格"}},[n("div",{staticClass:"nya-subtitle"},[e._v("\n            输入文本开始处理\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"不能信任那些Terminal或Editor用白底的人",autofocus:""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e.results?n("nya-container",{attrs:{title:"处理成功"}},[n("nya-copy",{attrs:{copy:e.results}},[n("div",{domProps:{textContent:e._s(e.results)}})])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);