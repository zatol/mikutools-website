(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1139:function(t,e,n){var content=n(2205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("1707e86e",content,!0,{sourceMap:!1})},2204:function(t,e,n){"use strict";var o=n(1139);n.n(o).a},2205:function(t,e,n){(e=n(12)(!1)).push([t.i,".convert_power .el-select .el-input{width:8.125rem}.convert_power .el-input-group__prepend{background-color:#fff}.convert_power .el-input{width:calc(50% - 1.875rem)}.convert_power .eva{width:1.875rem;text-align:center}@media (max-width:850px){.convert_power .el-input{width:100%}.convert_power .eva{width:100%;text-align:center;margin:1.25rem auto;font-size:1.25rem}}",""]),t.exports=e},2706:function(t,e,n){"use strict";n.r(e);var o=n(36),r=n.n(o),l={name:"ConvertPower",head:function(){return this.$store.state.currentTool.head},data:function(){return{fromValue:0,fromUnit:0,toValue:0,toUnit:1,items:[{name:"瓦",unit:"W",value:0,m:1e3},{name:"千瓦",unit:"kW",value:0,m:1},{name:"兆瓦",unit:"MW",value:0,m:.001},{name:"英制马力",unit:"hp",value:0,m:1.34099997},{name:"米制马力",unit:"ps",value:0,m:1.36000003},{name:"公斤·米/秒",unit:"kg·m/s",value:0,m:102.00000071},{name:"千卡/秒",unit:"kcal/s",value:0,m:.239},{name:"英热单位/秒",unit:"Btu/s",value:0,m:.9478},{name:"英尺·磅/秒",unit:"ft·lb/s",value:0,m:737.6},{name:"焦耳/秒",unit:"J/s",value:0,m:1e3},{name:"牛顿·米/秒",unit:"N·m/s",value:0,m:1e3}]}},methods:{convert:function(t,e){if(!r.a.isNumber(parseFloat(t)))return this.clear(),!1;var n=this.items[this.fromUnit],o=this.items[this.toUnit];e?(this.fromValue=t/o.m*n.m,this.toValue=t):(this.toValue=t/n.m*o.m,this.fromValue=t)},clear:function(){this.fromValue=0,this.toValue=0,this.items.forEach((function(i){i.value=0}))}}},c=(n(2204),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"convert_power"},[n("nya-container",{attrs:{title:"功率单位转换"}},[n("el-input",{attrs:{type:"number",autofocus:"",value:t.fromValue},on:{input:function(e){return t.convert(e,0)}}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},on:{input:function(e){return t.convert(t.fromValue,0)}},slot:"prepend",model:{value:t.fromUnit,callback:function(e){t.fromUnit=e},expression:"fromUnit"}},t._l(t.items,(function(e,o){return n("el-option",{key:o,attrs:{label:e.name,value:o}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[t._v(t._s(e.unit))])])})),1)],1),n("div",{staticClass:"eva eva-swap-outline"}),n("el-input",{attrs:{type:"number",value:t.toValue},on:{input:function(e){return t.convert(e,1)}}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},on:{input:function(e){return t.convert(t.fromValue,0)}},slot:"prepend",model:{value:t.toUnit,callback:function(e){t.toUnit=e},expression:"toUnit"}},t._l(t.items,(function(e,o){return n("el-option",{key:o,attrs:{label:e.name,value:o}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[t._v(t._s(e.unit))])])})),1)],1)],1),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("如果转换数据有问题，请在首页【留言板】中进行反馈")]),n("li",[t._v("结果以实际为准，本数据仅供参考，由于转换单位不同可能会有一定误差，本工具以【千瓦(kW)】作为基准单位")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);