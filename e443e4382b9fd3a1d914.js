(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1031:function(n,t,e){"use strict";e(23);t.a=function(n){return new Promise((function(t,e){var r=new FileReader;r.readAsDataURL(n),r.onload=function(){return t(r.result)},r.onerror=function(n){return e(n)}}))}},2731:function(n,t,e){"use strict";e.r(t);var r=e(2261),l=e.n(r),o=e(1031),c={name:"Html2pdf",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",html:"",loading:!1}},methods:{handleChange:function(n){var t=this,e=n.target.files;if(!e.length)return!1;var r=e[0];Object(o.a)(r).then((function(n){t.html=n}))},transfrom:function(){var n=this;if(this.loading)return!1;this.loading=!0,l()().from(this.html).save().then((function(){n.loading=!1})).catch((function(t){n.loading=!1,n.$notify.error({title:"转换失败",message:t})}))}}},d=e(5),component=Object(d.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"html2pdf"},[e("nya-container",{attrs:{title:"HTML转PDF"}},[e("div",{staticClass:"nya-subtitle mt-0"},[n._v("\n            请选择要转换的 HTML 文件\n        ")]),e("el-input",{attrs:{type:"file",accept:"text/*",disabled:n.loading,placeholder:n.n?n.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(t){return n.handleChange(t)}},model:{value:n.n,callback:function(t){n.n=t},expression:"n"}},[e("el-button",{attrs:{slot:"append",loading:n.loading},on:{click:n.transfrom},slot:"append"},[n._v("\n                "+n._s(n.loading?"处理中":"开始转换")+"\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);