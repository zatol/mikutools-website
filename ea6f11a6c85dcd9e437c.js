(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1227:function(t,e,l){var content=l(2604);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(13).default)("0858db1a",content,!0,{sourceMap:!1})},2603:function(t,e,l){"use strict";var n=l(1227);l.n(n).a},2604:function(t,e,l){(e=l(12)(!1)).push([t.i,".translate .flex{display:flex;align-items:center;justify-content:space-between}.translate .flex .el-select{width:calc(50% - 1.875rem)}",""]),t.exports=e},2794:function(t,e,l){"use strict";l.r(e);var n={name:"Translate",head:function(){return this.$store.state.currentTool.head},data:function(){return{results:"",loading:!1,q:"",from:"auto",to:"zh",lan_list:{zh:"中文",en:"英语",yue:"粤语",wyw:"文言文",jp:"日语",kor:"韩语",fra:"法语",spa:"西班牙语",th:"泰语",ara:"阿拉伯语",ru:"俄语",pt:"葡萄牙语",de:"德语",it:"意大利语",el:"希腊语",nl:"荷兰语",pl:"波兰语",bul:"保加利亚语",est:"爱沙尼亚语",dan:"丹麦语",fin:"芬兰语",cs:"捷克语",rom:"罗马尼亚语",slo:"斯洛文尼亚语",swe:"瑞典语",hu:"匈牙利语",cht:"繁体中文",vie:"越南语"}}},methods:{translate:function(){var t=this;if(this.loading)return!1;this.q?(this.loading=!0,this.results="",this.$axios.post("/translate",{q:this.q,from:this.from,to:this.to}).then((function(e){t.loading=!1,t.results=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"合成失败",message:e})}))):this.$notify.error({title:"合成失败",message:"请输入需要合成的内容"})}}},o=(l(2603),l(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"translate"},[l("nya-container",{attrs:{title:"文本翻译"}},[l("div",{staticClass:"mb-15"},[l("div",{staticClass:"nya-subtitle"},[t._v("\n                待翻译内容\n            ")]),l("el-input",{attrs:{disabled:t.loading,clearable:"",autofocus:"",type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"apple"},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}})],1),l("div",{staticClass:"mb-15 flex"},[l("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.from,callback:function(e){t.from=e},expression:"from"}},[l("el-option",{attrs:{label:"自动检测",value:"auto"}}),t._l(t.lan_list,(function(t,e){return l("el-option",{key:e,attrs:{label:t,value:e}})}))],2),l("div",{staticClass:"eva eva-swap-outline"}),l("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.to,callback:function(e){t.to=e},expression:"to"}},t._l(t.lan_list,(function(t,e){return l("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1),l("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.translate}},[t._v("\n            "+t._s(t.loading?"翻译中":"翻译")+"\n        ")])],1),t.results&&t.results.trans_result.length?l("nya-container",{attrs:{title:"翻译结果 ("+t.lan_list[t.results.from]+" => "+t.lan_list[t.results.to]+")"}},[l("nya-copy",{attrs:{copy:t.results.trans_result[0].dst}},[l("span",{domProps:{textContent:t._s(t.results.trans_result[0].dst)}})])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);