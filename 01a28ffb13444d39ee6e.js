(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{2772:function(t,e,n){"use strict";n.r(e);n(262);var r={name:"Random",head:function(){return this.$store.state.currentTool.head},data:function(){return{min:0,max:100,num:10,repeat:!0,results:[],br:!1}},methods:{gen:function(){this.results=[];var t=[parseInt(this.max),parseInt(this.min),parseInt(this.num)],e=t[0],n=t[1],r=t[2];if(!/[0-9]+/.test(r)||!/[0-9]+/.test(n)||!/[0-9]+/.test(e))return this.$notify.error({title:"生成失败",message:"请输入合法的数字"}),!1;if(e<n)return this.$notify.error({title:"生成失败",message:"最大值不能小于最小值"}),!1;if(this.repeat){for(var l=[],o=1;o<=r;o++){var c=Math.round(Math.random()*(e-n))+n;l.push(c)}this.results=l}else{if(r>Math.abs(0===e?1:e)+Math.abs(0===n?1:n))return this.$notify.error({title:"生成失败",message:"不重复的生成数量不能超过最大值与最小值之间的绝对值"}),!1;for(var m=1;m<=r;m++)this.doRand()}},doRand:function(){var t=[parseInt(this.max),parseInt(this.min)],e=t[0],n=t[1],r=Math.round(Math.random()*(e-n))+n;this.results.indexOf(r)>=0?this.doRand():this.results.push(r)}}},l=n(5),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"random"},[n("nya-container",{attrs:{title:"随机数生成"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            最小值\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{type:"number",placeholder:"0",autofocus:"",clearable:""},model:{value:t.min,callback:function(e){t.min=e},expression:"min"}}),n("div",{staticClass:"nya-subtitle"},[t._v("\n            最大值\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{type:"number",placeholder:"100",autofocus:"",clearable:""},model:{value:t.max,callback:function(e){t.max=e},expression:"max"}}),n("div",{staticClass:"nya-subtitle"},[t._v("\n            生成数量\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{type:"number",placeholder:"100",autofocus:"",clearable:""},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),n("div",{staticClass:"mb-15"},[n("el-checkbox",{model:{value:t.repeat,callback:function(e){t.repeat=e},expression:"repeat"}},[t._v("\n                是否重复\n            ")])],1),n("div",{staticClass:"mb-15"},[n("el-checkbox",{model:{value:t.br,callback:function(e){t.br=e},expression:"br"}},[t._v("\n                使用换行分组\n            ")])],1),n("el-button",{attrs:{type:"primary"},on:{click:t.gen}},[t._v("\n            生成随机数\n        ")])],1),t.results.length?n("nya-container",{attrs:{title:"结果"}},[n("nya-copy",{attrs:{copy:t.results.join(t.br?"\n":" ")}},[n("div",{domProps:{innerHTML:t._s(t.results.join(t.br?"\n":" "))}})])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);