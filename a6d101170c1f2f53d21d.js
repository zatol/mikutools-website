(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1126:function(t,e,n){var content=n(2129);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("b7832f02",content,!0,{sourceMap:!1})},2128:function(t,e,n){"use strict";var l=n(1126);n.n(l).a},2129:function(t,e,n){(e=n(12)(!1)).push([t.i,".bangumi_list .play-site a{display:inline-block;margin-right:.9375rem}.bangumi_list .el-table .el-table__expanded-cell p{margin:0 0 .625rem}",""]),t.exports=e},2688:function(t,e,n){"use strict";n.r(e);var l=n(18),r=n.n(l),o={name:"BangumiList",head:function(){return this.$store.state.currentTool.head},data:function(){return{results:null,loading:!0,active:"",text:["日","一","二","三","四","五","六"],number:{"日":0,"一":1,"二":2,"三":3,"四":4,"五":5,"六":6}}},mounted:function(){var t=this;this.active=this.text[r()().get("day")],this.$axios.post("/bangumi_list").then((function(e){t.results=e.data.data,t.loading=!1})).catch((function(e){t.$notify.error({title:"获取数据失败",message:e})}))}},c=(n(2128),n(5)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bangumi_list"},[n("nya-container",{attrs:{title:"动漫番组放送信息",loading:t.loading}},[n("el-tabs",{attrs:{"tab-position":"left"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.results,(function(e,l){return n("el-tab-pane",{key:l,attrs:{label:"周"+t.text[l],name:t.text[l]}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.results[t.number[t.active]]}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.title.jp?n("p",[n("b",[t._v("日文名：")]),n("span",[t._v(t._s(e.row.title.jp))])]):t._e(),e.row.officalSite?n("p",[n("b",[t._v("官网：")]),n("el-link",{staticClass:"play-site",attrs:{type:"primary",href:e.row.officalSite,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                                    "+t._s(e.row.officalSite)+"\n                                ")])],1):t._e(),e.row.bgmId?n("p",[n("b",[t._v("Bangumi页面：")]),n("el-link",{staticClass:"play-site",attrs:{type:"primary",href:"https://bangumi.tv/subject/202661"+e.row.bgmId,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                                    "+t._s("https://bangumi.tv/subject/202661"+e.row.bgmId)+"\n                                ")])],1):t._e(),e.row.showDate?n("p",[n("b",[t._v("开始放送日期：")]),n("span",[t._v(t._s(e.row.showDate))])]):t._e()]}}],null,!0)}),n("el-table-column",{attrs:{prop:"title.cn",label:"作品名",width:"300"}}),n("el-table-column",{attrs:{prop:"time.jp",label:"日本放送",width:"150"}}),n("el-table-column",{attrs:{prop:"time.cn",label:"大陆放送",width:"150"}}),n("el-table-column",{attrs:{label:"放送站点","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.onAirSite.length?[n("span",{staticClass:"play-site"},t._l(e.row.onAirSite,(function(e,l){return n("el-link",{key:l,staticClass:"play-site",attrs:{type:"primary",href:e.site,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.name))])})),1)]:n("el-link",{attrs:{type:"info"}},[t._v("\n                                暂无资源\n                            ")])]}}],null,!0)})],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);