(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{2260:function(e,t){},2671:function(e,t,n){"use strict";n.r(t);function r(e,t){return Array(t+1).join(e)}var o=["address","article","aside","audio","blockquote","body","canvas","center","dd","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frameset","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","isindex","li","main","menu","nav","noframes","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul"];function l(e){return-1!==o.indexOf(e.nodeName.toLowerCase())}var c=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function f(e){return-1!==c.indexOf(e.nodeName.toLowerCase())}var d=c.join();var h={};function m(e){for(var t in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[t])}function y(e,t,n){for(var i=0;i<e.length;i++){var r=e[i];if(v(r,t,n))return r}}function v(e,t,n){var filter=e.filter;if("string"==typeof filter){if(filter===t.nodeName.toLowerCase())return!0}else if(Array.isArray(filter)){if(filter.indexOf(t.nodeName.toLowerCase())>-1)return!0}else{if("function"!=typeof filter)throw new TypeError("`filter` needs to be a string, array, or function");if(filter.call(e,t,n))return!0}}function k(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function w(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}h.paragraph={filter:"p",replacement:function(content){return"\n\n"+content+"\n\n"}},h.lineBreak={filter:"br",replacement:function(content,e,t){return t.br+"\n"}},h.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(content,e,t){var n=Number(e.nodeName.charAt(1));return"setext"===t.headingStyle&&n<3?"\n\n"+content+"\n"+r(1===n?"=":"-",content.length)+"\n\n":"\n\n"+r("#",n)+" "+content+"\n\n"}},h.blockquote={filter:"blockquote",replacement:function(content){return"\n\n"+(content=(content=content.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},h.list={filter:["ul","ol"],replacement:function(content,e){var t=e.parentNode;return"LI"===t.nodeName&&t.lastElementChild===e?"\n"+content:"\n\n"+content+"\n\n"}},h.listItem={filter:"li",replacement:function(content,e,t){content=content.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var n=t.bulletListMarker+"   ",r=e.parentNode;if("OL"===r.nodeName){var o=r.getAttribute("start"),l=Array.prototype.indexOf.call(r.children,e);n=(o?Number(o)+l:l+1)+".  "}return n+content+(e.nextSibling&&!/\n$/.test(content)?"\n":"")}},h.indentedCodeBlock={filter:function(e,t){return"indented"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(content,e,t){return"\n\n    "+e.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},h.fencedCodeBlock={filter:function(e,t){return"fenced"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(content,e,t){var n=((e.firstChild.className||"").match(/language-(\S+)/)||[null,""])[1];return"\n\n"+t.fence+n+"\n"+e.firstChild.textContent+"\n"+t.fence+"\n\n"}},h.horizontalRule={filter:"hr",replacement:function(content,e,t){return"\n\n"+t.hr+"\n\n"}},h.inlineLink={filter:function(e,t){return"inlined"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(content,e){return"["+content+"]("+e.getAttribute("href")+(e.title?' "'+e.title+'"':"")+")"}},h.referenceLink={filter:function(e,t){return"referenced"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(content,e,t){var n,r,o=e.getAttribute("href"),title=e.title?' "'+e.title+'"':"";switch(t.linkReferenceStyle){case"collapsed":n="["+content+"][]",r="["+content+"]: "+o+title;break;case"shortcut":n="["+content+"]",r="["+content+"]: "+o+title;break;default:var l=this.references.length+1;n="["+content+"]["+l+"]",r="["+l+"]: "+o+title}return this.references.push(r),n},references:[],append:function(e){var t="";return this.references.length&&(t="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),t}},h.emphasis={filter:["em","i"],replacement:function(content,e,t){return content.trim()?t.emDelimiter+content+t.emDelimiter:""}},h.strong={filter:["strong","b"],replacement:function(content,e,t){return content.trim()?t.strongDelimiter+content+t.strongDelimiter:""}},h.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n="PRE"===e.parentNode.nodeName&&!t;return"CODE"===e.nodeName&&!n},replacement:function(content){if(!content.trim())return"";var e="`",t="",n="",r=content.match(/`+/gm);if(r)for(/^`/.test(content)&&(t=" "),/`$/.test(content)&&(n=" ");-1!==r.indexOf(e);)e+="`";return e+t+content+n+e}},h.image={filter:"img",replacement:function(content,e){var t=e.alt||"",n=e.getAttribute("src")||"",title=e.title||"";return n?"!["+t+"]("+n+(title?' "'+title+'"':"")+")":""}},m.prototype={add:function(e,t){this.array.unshift(t)},keep:function(filter){this._keep.unshift({filter:filter,replacement:this.keepReplacement})},remove:function(filter){this._remove.unshift({filter:filter,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(t=y(this.array,e,this.options))||(t=y(this._keep,e,this.options))||(t=y(this._remove,e,this.options))?t:this.defaultRule;var t},forEach:function(e){for(var i=0;i<this.array.length;i++)e(this.array[i],i)}};var N="undefined"!=typeof window?window:{};var C,x,S,R=function(){var e=N.DOMParser,t=!1;try{(new e).parseFromString("","text/html")&&(t=!0)}catch(e){}return t}()?N.DOMParser:(C=function(){},x=n(2260).JSDOM,C.prototype.parseFromString=function(e){return new x(e).window.document},C);function T(input){var e;"string"==typeof input?e=(S=S||new R).parseFromString('<x-turndown id="turndown-root">'+input+"</x-turndown>","text/html").getElementById("turndown-root"):e=input.cloneNode(!0);return function(e){var element=e.element,t=e.isBlock,n=e.isVoid,r=e.isPre||function(e){return"PRE"===e.nodeName};if(element.firstChild&&!r(element)){for(var o=null,l=!1,c=null,f=w(c,element,r);f!==element;){if(3===f.nodeType||4===f.nodeType){var text=f.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||l||" "!==text[0]||(text=text.substr(1)),!text){f=k(f);continue}f.data=text,o=f}else{if(1!==f.nodeType){f=k(f);continue}t(f)||"BR"===f.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,l=!1):n(f)&&(o=null,l=!0)}var d=w(c,f,r);c=f,f=d}o&&(o.data=o.data.replace(/ $/,""),o.data||k(o))}}({element:e,isBlock:l,isVoid:f}),e}function A(e){return e.isBlock=l(e),e.isCode="code"===e.nodeName.toLowerCase()||e.parentNode.isCode,e.isBlank=function(e){return-1===["A","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"].indexOf(e.nodeName)&&/^\s*$/i.test(e.textContent)&&!f(e)&&!function(e){return e.querySelector&&e.querySelector(d)}(e)}(e),e.flankingWhitespace=function(e){var t="",n="";if(!e.isBlock){var r=/^[ \r\n\t]/.test(e.textContent),o=/[ \r\n\t]$/.test(e.textContent);r&&!B("left",e)&&(t=" "),o&&!B("right",e)&&(n=" ")}return{leading:t,trailing:n}}(e),e}function B(e,t){var n,r,o;return"left"===e?(n=t.previousSibling,r=/ $/):(n=t.nextSibling,r=/^ /),n&&(3===n.nodeType?o=r.test(n.nodeValue):1!==n.nodeType||l(n)||(o=r.test(n.textContent))),o}var E=Array.prototype.reduce,O=/^\n*/,$=/\n*$/,D=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function L(e){if(!(this instanceof L))return new L(e);var t={rules:h,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",blankReplacement:function(content,e){return e.isBlock?"\n\n":""},keepReplacement:function(content,e){return e.isBlock?"\n\n"+e.outerHTML+"\n\n":e.outerHTML},defaultReplacement:function(content,e){return e.isBlock?"\n\n"+content+"\n\n":content}};this.options=function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)source.hasOwnProperty(t)&&(e[t]=source[t])}return e}({},t,e),this.rules=new m(this.options)}function _(e){var t=this;return E.call(e.childNodes,(function(output,e){var n="";return 3===(e=new A(e)).nodeType?n=e.isCode?e.nodeValue:t.escape(e.nodeValue):1===e.nodeType&&(n=P.call(t,e)),H(output,n)}),"")}function M(output){var e=this;return this.rules.forEach((function(t){"function"==typeof t.append&&(output=H(output,t.append(e.options)))})),output.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function P(e){var t=this.rules.forNode(e),content=_.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(content=content.trim()),n.leading+t.replacement(content,e,this.options)+n.trailing}function H(e,t){var n,r,o,l=(n=t,r=[e.match($)[0],n.match(O)[0]].sort(),(o=r[r.length-1]).length<2?o:"\n\n");return(e=e.replace($,""))+l+(t=t.replace(O,""))}L.prototype={turndown:function(input){if(!function(input){return null!=input&&("string"==typeof input||input.nodeType&&(1===input.nodeType||9===input.nodeType||11===input.nodeType))}(input))throw new TypeError(input+" is not a string, or an element/document/fragment node.");if(""===input)return"";var output=_.call(this,new T(input));return M.call(this,output)},use:function(e){if(Array.isArray(e))for(var i=0;i<e.length;i++)this.use(e[i]);else{if("function"!=typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(filter){return this.rules.keep(filter),this},remove:function(filter){return this.rules.remove(filter),this},escape:function(e){return D.reduce((function(e,t){return e.replace(t[0],t[1])}),e)}};var I=new L({headingStyle:"atx",bulletListMarker:"-"}),F={name:"Html2markdown",head:function(){return this.$store.state.currentTool.head},data:function(){return{html:""}},computed:{results:function(){return I.turndown(this.html)}}},V=n(5),component=Object(V.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"html2markdown"},[n("nya-container",{attrs:{title:"HTML 转 MarkDown"}},[n("div",{staticClass:"nya-subtitle"},[e._v("\n            输入 HTML 代码开始处理\n        ")]),n("el-input",{attrs:{placeholder:"<h1>Hello world!</h1>",type:"textarea",autosize:{minRows:5,maxRows:8}},model:{value:e.html,callback:function(t){e.html=t},expression:"html"}})],1),e.results?n("nya-container",{attrs:{title:"获取成功"}},[n("nya-copy",{attrs:{copy:e.results}},[n("pre",{domProps:{textContent:e._s(e.results)}})])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);