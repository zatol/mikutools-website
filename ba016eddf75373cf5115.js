(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1031:function(t,e,n){"use strict";n(23);e.a=function(t){return new Promise((function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return n(t)}}))}},1154:function(t,e,n){var content=n(2247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0b2c5e02",content,!0,{sourceMap:!1})},2246:function(t,e,n){"use strict";var r=n(1154);n.n(r).a},2247:function(t,e,n){(e=n(12)(!1)).push([t.i,"",""]),t.exports=e},2722:function(t,e,n){"use strict";n.r(e);n(43),n(31),n(23),n(70);var r=n(2245),l=n(1031),c={name:"Exif",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",file:null,preview:"",results:null,uploadData:null}},computed:{copyText:function(){return this.results?this.results.map((function(t){return"".concat(t.key,": ").concat(t.value)})).join("\n"):void 0}},methods:{handleChange:function(t){var e=this;this.preview=null,this.file=null,this.results=null;var n=t.target.files;if(!n.length)return!1;var r=n[0];Object(l.a)(r).then((function(t){e.preview=t,e.file=r,e.getExif()}))},getExif:function(){var t=this;r.a.parse(this.file,{}).then((function(e){var n=Object.keys(e).map((function(t){return{key:t.replace(/([a-z])([A-Z])/g,"$1 $2"),value:e[t]}}));t.results=n})).catch((function(){t.$notify.error({title:"获取失败",message:"该图片没有EXIF"})}))}}},o=(n(2246),n(5)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exif"},[n("nya-container",{attrs:{title:"照片 EXIF 查看"}},[n("div",{staticClass:"nya-subtitle mt-0"},[t._v("\n            请选择要查询的照片\n        ")]),n("el-input",{attrs:{type:"file",accept:"image/*",placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件"},nativeOn:{change:function(e){return t.handleChange(e)}},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}})],1),t.results?n("nya-container",{attrs:{title:"获取成功"}},[t.preview?n("div",{staticClass:"nya-subtitle"},[t._v("\n            预览\n        ")]):t._e(),t.preview?n("img",{staticClass:"preview mb-15",attrs:{src:t.preview,alt:"preview"}}):t._e(),n("div",{staticClass:"nya-subtitle"},[t._v("\n            EXIF\n        ")]),n("nya-copy",{attrs:{copy:t.copyText}},t._l(t.results,(function(e,r){return n("div",{key:r},[n("b",[t._v(t._s(e.key)+": ")]),n("span",[t._v(t._s(e.value))])])})),0)],1):t._e(),n("nya-container",{attrs:{title:"获取成功"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("如果图片没有 EXIF 数据将无法获取")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);