(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1030:function(e,t,r){"use strict";r(131),r(132),r(23);var l=r(191).MD5;t.a=function(){return l(Math.random().toString()).toString()}},1202:function(e,t,r){var content=r(2423);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("f8c40e42",content,!0,{sourceMap:!1})},2422:function(e,t,r){"use strict";var l=r(1202);r.n(l).a},2423:function(e,t,r){(t=r(12)(!1)).push([e.i,".screen_record .nya-select{margin-bottom:.9375rem}",""]),e.exports=t},2778:function(e,t,r){"use strict";r.r(t);r(44),r(40);var l=r(9),o=r(257),n=r(1030),c={name:"ScreenRecord",head:function(){return this.$store.state.currentTool.head},data:function(){return{aspectRatio:"default",frameRate:"default",resolutions:"default",cursor:"default",mediaRecorder:null,mediaStream:null,recordeBlods:[],previewUrl:"",disabled:!1}},watch:{mediaStream:{handler:function(){(this.$refs.video||{}).srcObject=this.mediaStream},immediate:!0}},mounted:function(){navigator.mediaDevices||(this.disabled=!0)},methods:{recorde:function(){this.mediaStream?this.stop():this.start()},start:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.mediaRecorder=null,e.mediaStream=null,e.recordeBlods=[],t.prev=3,r=e.getDisplayMediaOptions(),t.next=7,navigator.mediaDevices.getDisplayMedia(r);case 7:e.mediaStream=t.sent,e.mediaStream.oninactive=function(){this.stop()}.bind(e),e.mediaRecorder=new MediaRecorder(e.mediaStream),e.mediaRecorder.ondataavailable=e.handleDataAvailable,e.mediaRecorder.start(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),e.$notify.error({title:t.t0.name,message:t.t0.message});case 17:case"end":return t.stop()}}),t,null,[[3,14]])})))()},stop:function(){this.mediaStream&&(this.mediaStream.getTracks().forEach((function(track){track.stop()})),this.mediaStream=null,this.mediaRecorder.stop())},handleDataAvailable:function(e){e.data.size>0&&(this.recordeBlods.push(e.data),this.createPreviewVideo())},createPreviewVideo:function(){var e=new Blob(this.recordeBlods,{type:"video/webm"});this.recordeBlods=[],this.previewUrl=URL.createObjectURL(e),Object(o.a)(this.previewUrl,"".concat(Object(n.a)(),".webm"))},getDisplayMediaOptions:function(){var e={};return"default"!==this.aspectRatio&&(e.aspectRatio=this.aspectRatio),"default"!==this.frameRate&&(e.frameRate=this.frameRate),"default"!==this.cursor&&(e.cursor=this.cursor),"default"!==this.resolutions&&("fit-screen"===this.resolutions&&(e.width=screen.width,e.height=screen.height),"4K"===this.resolutions&&(e.width=3840,e.height=2160),"1080p"===this.resolutions&&(e.width=1920,e.height=1080),"720p"===this.resolutions&&(e.width=1280,e.height=720)),{video:e,audio:!1}}}},d=(r(2422),r(5)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"screen_record"},[e.disabled?r("nya-container",{attrs:{title:"屏幕录制"}},[r("h1",[e._v("你的设备不支持录屏")])]):r("nya-container",{attrs:{title:"屏幕录制"}},[r("div",{staticClass:"nya-subtitle"},[e._v("\n            选择长宽比\n        ")]),r("el-select",{staticClass:"full-width mb-15",attrs:{placeholder:"选择长宽比"},model:{value:e.aspectRatio,callback:function(t){e.aspectRatio=t},expression:"aspectRatio"}},[r("el-option",{attrs:{label:"默认",value:"default"}}),r("el-option",{attrs:{label:"16:9",value:"1.77"}}),r("el-option",{attrs:{label:"4:3",value:"1.33"}}),r("el-option",{attrs:{label:"21:9",value:"2.35"}}),r("el-option",{attrs:{label:"14:10",value:"1.4"}}),r("el-option",{attrs:{label:"19:10",value:"1.9"}})],1),r("div",{staticClass:"nya-subtitle"},[e._v("\n            选择帧率\n        ")]),r("el-select",{staticClass:"full-width mb-15",attrs:{placeholder:"选择帧率"},model:{value:e.frameRate,callback:function(t){e.frameRate=t},expression:"frameRate"}},[r("el-option",{attrs:{label:"默认",value:"default"}}),r("el-option",{attrs:{label:"60",value:"60"}}),r("el-option",{attrs:{label:"30",value:"30"}}),r("el-option",{attrs:{label:"25",value:"25"}}),r("el-option",{attrs:{label:"15",value:"15"}}),r("el-option",{attrs:{label:"5",value:"5"}})],1),r("div",{staticClass:"nya-subtitle"},[e._v("\n            选择分辨率\n        ")]),r("el-select",{staticClass:"full-width mb-15",attrs:{placeholder:"选择分辨率"},model:{value:e.resolutions,callback:function(t){e.resolutions=t},expression:"resolutions"}},[r("el-option",{attrs:{label:"默认",value:"default"}}),r("el-option",{attrs:{label:"屏幕尺寸",value:"fit-screen"}}),r("el-option",{attrs:{label:"4k",value:"4K"}}),r("el-option",{attrs:{label:"1080p",value:"1080p"}}),r("el-option",{attrs:{label:"720p",value:"720p"}})],1),r("div",{staticClass:"nya-subtitle"},[e._v("\n            是否显示光标\n        ")]),r("el-select",{staticClass:"full-width mb-15",attrs:{placeholder:"是否显示光标"},model:{value:e.cursor,callback:function(t){e.cursor=t},expression:"cursor"}},[r("el-option",{attrs:{label:"默认",value:"default"}}),r("el-option",{attrs:{label:"是",value:"always"}}),r("el-option",{attrs:{label:"否",value:"never"}})],1),r("el-button",{attrs:{type:"primary"},on:{click:e.recorde}},[e._v("\n            "+e._s(e.mediaStream?"停 止":"开 始")+"\n        ")])],1),r("nya-container",{directives:[{name:"show",rawName:"v-show",value:e.mediaStream,expression:"mediaStream"}],attrs:{title:"实时预览"}},[r("video",{ref:"video",staticStyle:{width:"100%"},attrs:{autoplay:""}})]),r("nya-container",{directives:[{name:"show",rawName:"v-show",value:e.previewUrl&&!e.mediaStream,expression:"previewUrl && !mediaStream"}],attrs:{title:"预览"}},[r("video",{ref:"preview",staticStyle:{width:"100%"},attrs:{src:e.previewUrl,loop:"",controls:"",autoplay:""}})]),r("nya-container",{attrs:{title:"说明"}},[r("ul",{staticClass:"nya-list"},[r("li",[e._v("出现无法使用的情况请更换 Chrome 浏览器最新版，仅支持PC端，不支持录制系统/麦克风音频。")]),r("li",[e._v("录制完后可鼠标右键另存为下载")])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);