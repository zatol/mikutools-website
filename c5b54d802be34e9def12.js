(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1552:function(t,n){},1553:function(t,n){},1554:function(t,n){},1571:function(t,n){},1579:function(t,n){},2054:function(t,n){},2685:function(t,n,e){"use strict";e.r(n);e(131),e(132),e(23);var r=e(1042),o=e.n(r),l=e(1573),c=e.n(l),d={name:"Autoprefixer",head:function(){return this.$store.state.currentTool.head},data:function(){return{cssStr:"",loading:!1,result:"",browser:"last 4 version"}},mounted:function(){this.cssStr=".example {\n    display: grid;\n    transition: all .5s;\n    user-select: none;\n    background: linear-gradient(to bottom, white, black);\n}"},methods:{handel:function(){var t=this;this.cssStr?(this.result="",this.loading=!0,o()([c()({browsers:this.browser,grid:"autoplace"})]).process(this.cssStr).then((function(n){t.loading=!1,t.result=n.css})).catch((function(n){t.loading=!1,t.$notify.error({title:"处理失败",message:n.toString()})}))):this.$notify.error({title:"处理失败",message:"请输入 CSS 代码"})}}},h=e(5),component=Object(h.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"autoprefixer"},[e("nya-container",{attrs:{title:"CSS 兼容性处理"}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n            输入 CSS 代码开始处理\n        ")]),e("el-input",{attrs:{placeholder:".body{background: linear-gradient(to bottom, white, black);}",type:"textarea",autosize:{minRows:5,maxRows:8}},model:{value:t.cssStr,callback:function(n){t.cssStr=n},expression:"cssStr"}}),e("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n            过滤浏览器 "),e("a",{attrs:{href:"https://browserl.ist",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://browserl.ist")])]),e("el-input",{staticClass:"mb-15",attrs:{placeholder:"last 4 version"},model:{value:t.browser,callback:function(n){t.browser=n},expression:"browser"}}),e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handel}},[t._v("\n            "+t._s(t.loading?"处理中":"开始处理")+"\n        ")])],1),t.result?e("nya-container",{attrs:{title:"处理成功"}},[e("nya-copy",{attrs:{copy:t.result}},[e("span",{domProps:{textContent:t._s(t.result)}})])],1):t._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);