(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1031:function(t,r,e){"use strict";e(23);r.a=function(t){return new Promise((function(r,e){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return r(n.result)},n.onerror=function(t){return e(t)}}))}},2676:function(t,r,e){"use strict";e.r(r);e(23);var n=e(191),o=e.n(n);function l(t,g,b){var r=new Array;return r.push(.299*t+.587*g+.114*b),r.push(128-.168736*t-.331264*g+.5*b),r.push(128+.5*t-.418688*g-.081312*b),r}function h(t,r,e){for(var n,o=0,a=0,i=1;i<20;i++)a+=t.charCodeAt(i);o+=41943e4*a,a=0;for(var l=30;l<50;l++)a+=t.charCodeAt(l);o+=4194e3*a,a=0;for(var h=70;h<90;h++)a+=t.charCodeAt(h);o+=41940*a,a=0;for(var c=100;c<110;c++)a+=t.charCodeAt(c);o+=419*a;for(var v=20;v<29;v++)o+=t.charCodeAt(v);for(var f=90;f<99;f++)o+=t.charCodeAt(f);for(o%=r;n=o,-1!=e.indexOf(n);)o=(o+1)%r;return e.push(o),o}function c(t,r){return(r=void 0!==r&&r)?function(t){for(var r=new Array,i=0;i<64;i++)r.push(Array());for(var e=0;e<3;e++)for(var n=0;n<8;n++)for(var o=0;o<8;o++){for(var l=0,u=0;u<8;u++)for(var h=0;h<8;h++){l+=(0==u?1/Math.sqrt(2):1)*(0==h?1/Math.sqrt(2):1)*t[8*u+h][e]*Math.cos((2*n+1)*u*Math.PI/16)*Math.cos((2*o+1)*h*Math.PI/16)}r[8*n+o].push(.25*l)}return r}(t):function(t){for(var r=new Array,i=0;i<64;i++)r.push(Array());for(var e=0;e<3;e++)for(var u=0;u<8;u++)for(var n=0;n<8;n++){for(var o=0==u?1/Math.sqrt(2):1,l=0==n?1/Math.sqrt(2):1,h=0,c=0;c<8;c++)for(var v=0;v<8;v++)h+=t[8*c+v][e]*Math.cos((2*c+1)*u*Math.PI/16)*Math.cos((2*v+1)*n*Math.PI/16);r[8*u+n].push(.25*o*l*h)}return r}(t)}function v(t,r,e){for(var n=Math.floor(r/8),o=Math.floor(e/8),h=Array(),v=0;v<o;v++)for(var f=0;f<n;f++){for(var d=Array(),i=0;i<8;i++)for(var w=0;w<8;w++)d.push(l(t[4*((8*v+i)*r+8*f+w)],t[4*((8*v+i)*r+8*f+w)+1],t[4*((8*v+i)*r+8*f+w)+2]));h.push(c(d))}return h}function f(a,t){return Math.round(a/t)%2==1}function d(t,r,e){function n(a){for(var t=a.length,r=0,i=0;i<t;i++)a[i]&&r++;return r>=t/2}var l=t.length;r=String(o.a.SHA512(r));for(var data,c=new Array,v=l,f=Array(),d=Math.floor(Math.floor(l/e)/8),i=0;i<d;i++){data=0;for(var w=128,m=0;m<8;m++){for(var y=Array(),C=0;C<e;C++)y.push(t[h(r,v,c)]),r=String(o.a.SHA512(r));data+=(n(y)?1:0)*w,w=Math.floor(w/2)}if(255==data)break;f.push(data)}return f}function w(canvas,t,r,e,n){r=void 0!==r&&r,t=void 0===t?"":t,e=void 0===e?5:e,n=void 0===n?30:n;var o=canvas.getContext("2d").getImageData(0,0,canvas.width,canvas.height),l=r?v(o.data,canvas.width,canvas.height):null,h=r?function(t,r){for(var e=Array(),n=t.length,i=0;i<n;i++)e.push(f(t[i][0][0],r)),e.push(f(t[i][0][1],r)),e.push(f(t[i][0][2],r));return e}(l,n):function(t){for(var r=Array(),i=0;i<t.data.length;i+=4)r.push(t.data[i]%2==1),r.push(t.data[i+1]%2==1),r.push(t.data[i+2]%2==1);return r}(o),c=d(h,t,r?e:1);return null==c?null:function(t){for(var r,e,n,o=[],l=0,h=t.length;l<h;)r=t[l],e=t[l+1],n=t[l+2],128>r?(o.push(String.fromCharCode(r)),l+=1):191<r&&r<224?(o.push(String.fromCharCode((31&r)<<6|63&e)),l+=2):(o.push(String.fromCharCode((15&r)<<12|(63&e)<<6|63&n)),l+=3);return o.join("")}(c)}function m(t){for(var r=function(t){var r,e,n=[],o=0;for(r=(t=encodeURI(t)).length;o<r;)e=t[o],o+=1,"%"!==e?n.push(e.charCodeAt(0)):(e=t[o]+t[o+1],n.push(parseInt(e,16)),o+=2);return n}(t),e=Array(),n=r.length,i=0;i<n;i++)for(var o=128;o>0;o=Math.floor(o/2))Math.floor(r[i]/o)?(e.push(!0),r[i]-=o):e.push(!1);return e}function y(t){return t%2==1?t-1:t}function C(t){return t%2==1?t:t+1}function M(t,r){var e=Math.floor(t/r);return e%2==1?e*r:(e+1)*r}function A(t,r){var e=Math.floor(t/r);return e%2==1?(e-1)*r:e*r}function x(t,r,e,n){var l=m(r);if((l.length+24)*n>t)return alert("TEXT TOO LONG!"),null;var c=function(t){for(var r=new Array,i=0;i<t;i++)r.push(!!Math.floor(2*Math.random()));return r}(t),v=l.length;e=String(o.a.SHA512(e));for(var f=Array(),d=t,i=0;i<v;i++)for(var w=0;w<n;w++)c[h(e,d,f)]=l[i],e=String(o.a.SHA512(e));for(var y=0;y<24;y++)for(var C=0;C<n;C++)c[h(e,d,f)]=!0,e=String(o.a.SHA512(e));return c}function _(canvas,t,r,e,n,o){return new Promise((function(l){e=void 0!==e&&e,r=void 0===r?"":r,n=void 0===n?5:n,o=void 0===o?30:o;var h=canvas.getContext("2d"),f=h.getImageData(0,0,canvas.width,canvas.height),d=e?v(f.data,canvas.width,canvas.height):null,w=e?3*d.length:3*Math.floor(f.data.length/4),m=x(w,t,r,e?n:1);if(null==m)return null;e?function(t,r,e,n,o,l){for(var h=o.length/3,i=0;i<h;i++)r[i][0][0]=o[3*i]?M(r[i][0][0],l):A(r[i][0][0],l),r[i][0][1]=o[3*i+1]?M(r[i][0][1],l):A(r[i][0][1],l),r[i][0][2]=o[3*i+2]?M(r[i][0][2],l):A(r[i][0][2],l);for(var a,v,f,d,w,m=Math.floor(e/8),y=Math.floor(n/8),C=0,x=0;x<y;x++)for(var _=0;_<m;_++){for(var I=c(r[C],!0),S=0;S<8;S++)for(var k=0;k<8;k++)for(var P=(v=I[8*S+k][0],f=I[8*S+k][1],d=I[8*S+k][2],w=void 0,(w=new Array).push(v+1.402*(d-128)),w.push(v-.344136*(f-128)-.714136*(d-128)),w.push(v+1.772*(f-128)),w),O=0;O<3;O++)t[4*((8*x+S)*e+8*_+k)+O]=(a=P[O],(a=(a=Math.round(a))>255?255:a)<0?0:a);C++}for(var R=0;R<t.length;R+=4)t[R+3]=255}(f.data,d,canvas.width,canvas.height,m,o):function(t,r){for(var e=0,i=0;i<t.data.length;i+=4)t.data[i]=r[e]?C(t.data[i]):y(t.data[i]),t.data[i+1]=r[e+1]?C(t.data[i+1]):y(t.data[i+1]),t.data[i+2]=r[e+2]?C(t.data[i+2]):y(t.data[i+2]),t.data[i+3]=255,e+=3}(f,m),h.putImageData(f,0,0),l(canvas.toDataURL())}))}function I(t,r){return new Promise((function(e){r=void 0===r?0:r;var image=new Image;image.onload=function(){var t=image.width,n=image.height;r>0&&(t>r&&(n*=r/t,t=r),n>r&&(t*=r/n,n=r),t=Math.floor(t),n=Math.floor(n));var canvas=document.createElement("canvas");canvas.width=t,canvas.height=n;var o=canvas.getContext("2d");o.clearRect(0,0,canvas.width,canvas.height),o.drawImage(image,0,0,image.width,image.height,0,0,t,n),e(canvas)},image.src=t}))}var S={writeMsgToCanvas:function(t,r,e,n,o){return new Promise((function(l){I(t,o).then((function(canvas){switch(n=void 0===n?0:parseInt(n)){case 1:return _(canvas,r,e,!0,11,15);case 2:return _(canvas,r,e,!0,9,20);case 3:return _(canvas,r,e,!0,5,30);case 4:return _(canvas,r,e,!0,5,35);case 5:return _(canvas,r,e,!0,5,50);case 0:default:return _(canvas,r,e)}})).then(l)}))},readMsgFromCanvas:function(t,r,e,n){return new Promise((function(o){I(t,n).then((function(canvas){switch(e=void 0===e?0:parseInt(e)){case 1:return w(canvas,r,!0,11,15);case 2:return w(canvas,r,!0,9,20);case 3:return w(canvas,r,!0,5,30);case 4:return w(canvas,r,!0,5,35);case 5:return w(canvas,r,!0,5,50);case 0:default:return w(canvas,r)}})).then(o)}))},loadIMGtoCanvas:I},k=e(1031),P={name:"TextInImage",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",file:null,preview:null,results:null,text:"",pass:"",type:"write",mode:0,loading:!1}},methods:{handleChange:function(t){var r=this;this.file=null,this.preview=null;var e=t.target.files;if(!e.length)return!1;var n=e[0];Object(k.a)(n).then((function(t){r.results=null,r.preview=t,r.file=n}))},start:function(){"read"===this.type&&this.read(),"write"===this.type&&this.write()},read:function(){var t=this;S.readMsgFromCanvas(this.preview,this.pass,this.mode).then((function(r){t.results=r}))},write:function(){var t=this;S.writeMsgToCanvas(this.preview,this.text,this.pass,this.mode).then((function(r){t.results=r}))}}},O=e(5),component=Object(O.a)(P,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"text_in_image"},[e("nya-container",{attrs:{title:"图片隐写"}},[e("div",{staticClass:"mb-15"},[e("div",{staticClass:"nya-subtitle"},[t._v("\n                请选择要处理的图片\n            ")]),e("el-input",{attrs:{type:"file",accept:"image/*",placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件"},nativeOn:{change:function(r){return t.handleChange(r)}},model:{value:t.n,callback:function(r){t.n=r},expression:"n"}})],1),t.preview?e("div",{staticClass:"mb-15"},[e("div",{staticClass:"nya-subtitle"},[t._v("\n                预览\n            ")]),e("img",{staticClass:"preview",staticStyle:{width:"500px"},attrs:{src:t.preview,alt:"preview"}})]):t._e(),e("div",{staticClass:"mb-15"},[e("el-switch",{attrs:{"inactive-color":"var(--color-danger)","active-color":"var(--theme)","active-value":"write","active-text":"加密","inactive-text":"解密","inactive-value":"read"},on:{change:function(r){t.results=null}},model:{value:t.type,callback:function(r){t.type=r},expression:"type"}})],1),"write"===t.type?e("div",{staticClass:"mb-15"},[e("div",{staticClass:"nya-subtitle"},[t._v("\n                要隐藏的文字\n            ")]),e("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"请输入要隐藏的内容"},model:{value:t.text,callback:function(r){t.text=r},expression:"text"}})],1):t._e(),e("div",{staticClass:"mb-15"},[e("div",{staticClass:"nya-subtitle"},[t._v("\n                "+t._s("read"===t.type?"解密":"加密")+"密码\n            ")]),e("el-input",{attrs:{placeholder:"请输入解密用的密码"},model:{value:t.pass,callback:function(r){t.pass=r},expression:"pass"}})],1),e("div",{staticClass:"mb-15"},[e("div",{staticClass:"nya-subtitle"},[t._v("\n                隐藏模式（请查看下方说明）\n            ")]),e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.mode,callback:function(r){t.mode=r},expression:"mode"}},[e("el-option",{attrs:{label:"模式 A",value:0}}),e("el-option",{attrs:{label:"模式 B",value:3}})],1)],1),e("div",[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.start}},[t._v("\n                "+t._s(t.loading?"处理中":"开始处理")+"\n            ")])],1)]),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.results,expression:"results"}],attrs:{title:"获取成功"}},["read"===t.type?e("pre",[t._v(t._s(t.results))]):e("img",{attrs:{src:t.results,alt:"results"}})]),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[e("b",[t._v("模式说明")]),e("ul",[e("li",[t._v("模式A：结果图片看起来和原来相同，但是被压缩后隐写"),e("b",[t._v("可能")]),t._v("会失效")]),e("li",[t._v("模式B：结果图片看起来原图片可能有所不同，但具有更好的抗压缩性，隐写时会占用较高的电脑性能")])])]),e("li",[t._v("加密和解密时用的模式需要一致，否则会导致无法处理或获取到错误的信息")]),e("li",[t._v("该功能用于将文字隐藏在图片中，在未来的版权纠纷上作为证据，防止盗图。也可用于传递隐藏信息，具体功能就靠大家自己发挥")])])])],1)}),[],!1,null,null,null);r.default=component.exports}}]);