(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1030:function(t,e,n){"use strict";n(131),n(132),n(23);var r=n(191).MD5;e.a=function(){return r(Math.random().toString()).toString()}},1031:function(t,e,n){"use strict";n(23);e.a=function(t){return new Promise((function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return n(t)}}))}},1125:function(t,e,n){var content=n(2127);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("12a942a9",content,!0,{sourceMap:!1})},2126:function(t,e,n){"use strict";var r=n(1125);n.n(r).a},2127:function(t,e,n){(e=n(12)(!1)).push([t.i,".preview-box img{width:calc(50% - .625rem);margin:.3125rem;display:inline-block}",""]),t.exports=e},2687:function(t,e,n){"use strict";n.r(e);var r=n(257),o=n(1030),c=n(1031),l={name:"AvatarGray",data:function(){return{n:null,preview:{origin:null,gray:null}}},head:function(){return this.$store.state.currentTool.head},methods:{handleChange:function(t){var e=this,n=t.target.files;if(!n.length)return!1;var r=n[0];this.preview.origin=null,this.preview.gray=null,Object(c.a)(r).then((function(t){e.preview.origin=t,e.renderCanvas()}))},save:function(){if(!this.n)return!1;Object(r.a)(this.preview.gray,"".concat(Object(o.a)(),".png"))},renderCanvas:function(){var t=this,canvas=document.createElement("canvas"),img=document.createElement("img");img.src=this.preview.origin;var e=canvas.getContext("2d");img.onload=function(){canvas.width=img.width,canvas.height=img.height,e.drawImage(img,0,0);for(var n=e.getImageData(0,0,canvas.width,canvas.height),i=0;i<n.data.length;i+=4){var r=n.data[i],o=n.data[i+1],c=n.data[i+2],l=parseInt((r+o+c)/3);n.data[i]=l,n.data[i+1]=l,n.data[i+2]=l}e.putImageData(n,0,0),t.preview.gray=canvas.toDataURL()}}}},v=(n(2126),n(5)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar_gray"},[n("nya-container",{attrs:{title:"黑白头像制作"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            请选择要制作的图片\n        ")]),n("el-input",{attrs:{type:"file",accept:"image/*",placeholder:t.n?t.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(e){return t.handleChange(e)}},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}},[n("el-button",{attrs:{slot:"append"},on:{click:t.save},slot:"append"},[t._v("\n                下载\n            ")])],1)],1),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.n,expression:"n"}],attrs:{title:"预览"}},[n("div",{staticClass:"preview-box"},[n("img",{staticClass:"preview-origin",attrs:{src:t.preview.origin,alt:"preview"}}),n("img",{staticClass:"preview-gray",attrs:{src:t.preview.gray,alt:"preview"}})])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);