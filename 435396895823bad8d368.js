(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1030:function(t,e,n){"use strict";n(131),n(132),n(23);var r=n(191).MD5;e.a=function(){return r(Math.random().toString()).toString()}},1031:function(t,e,n){"use strict";n(23);e.a=function(t){return new Promise((function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return n(t)}}))}},1036:function(t,e,n){var r=n(17),o=n(25),c=n(69),l=/"/g,m=function(t,e,n,r){var o=String(c(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+String(r).replace(l,"&quot;")+'"'),m+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(m),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},1082:function(t,e,n){"use strict";n(1036)("bold",(function(t){return function(){return t(this,"b","","")}}))},1548:function(t,e,n){n(423)("Float32",4,(function(t){return function(data,e,n){return t(this,data,e,n)}}))},2666:function(t,e,n){"use strict";n.r(e);n(1082),n(1548),n(420),n(44);function r(t,e,source){var n=t.createShader(e);if(t.shaderSource(n,source),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(n));return n}function o(t,e,n){var o=t.createProgram(),c=r(t,t.VERTEX_SHADER,e),l=r(t,t.FRAGMENT_SHADER,n);if(t.attachShader(o,c),t.attachShader(o,l),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS))throw new Error(t.getProgramInfoLog(o));for(var m={program:o},v=t.getProgramParameter(o,t.ACTIVE_ATTRIBUTES),i=0;i<v;i++){var h=t.getActiveAttrib(o,i);m[h.name]=t.getAttribLocation(o,h.name)}for(var f=t.getProgramParameter(o,t.ACTIVE_UNIFORMS),x=0;x<f;x++){var _=t.getActiveUniform(o,x);m[_.name]=t.getUniformLocation(o,_.name)}return m}function c(t,filter,data,e,n){var r=t.createTexture();return t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,filter),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,filter),data instanceof Uint8Array?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e,n,0,t.RGBA,t.UNSIGNED_BYTE,data):t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,data),t.bindTexture(t.TEXTURE_2D,null),r}function l(t,e,n){t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,e)}function m(t,e,n,r){t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(n),t.vertexAttribPointer(n,r,t.FLOAT,!1,0,0)}function v(t,e,n){t.bindFramebuffer(t.FRAMEBUFFER,e),n&&t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}var h="\nprecision mediump float;\n\nattribute vec2 a_pos;\nvarying vec2 v_tex_pos;\n\nvoid main() {\n    v_tex_pos = a_pos;\n    gl_Position = vec4(1.0 - 2.0 * a_pos, 0, 1);\n}\n";function f(t){this.gl=t,this.inputTex=null,this.inputMov=null,this.inputWidth=0,this.inputHeight=0,this.quadBuffer=function(t,data){var e=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,data,t.STATIC_DRAW),e}(t,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1])),this.framebuffer=t.createFramebuffer(),this.scaleProgram=o(t,h,"\nprecision mediump float;\n\nuniform sampler2D u_texture;\nuniform vec2 u_size;\nvarying vec2 v_tex_pos;\n\nvec4 interp(const vec2 uv) {\n    vec2 px = 1.0 / u_size;\n    vec2 vc = (floor(uv * u_size)) * px;\n    vec2 f = fract(uv * u_size);\n    vec4 tl = texture2D(u_texture, vc);\n    vec4 tr = texture2D(u_texture, vc + vec2(px.x, 0));\n    vec4 bl = texture2D(u_texture, vc + vec2(0, px.y));\n    vec4 br = texture2D(u_texture, vc + px);\n    return mix(mix(tl, tr, f.x), mix(bl, br, f.x), f.y);\n}\n\nvoid main() {\n    gl_FragColor = interp(1.0 - v_tex_pos);\n    //gl_FragColor = texture2D(u_texture, 1.0 - v_tex_pos);\n}\n"),this.lumProgram=o(t,h,"\nprecision mediump float;\n\nuniform sampler2D u_texture;\nvarying vec2 v_tex_pos;\n\nfloat getLum(vec4 rgb) {\n\treturn (rgb.r + rgb.r + rgb.g + rgb.g + rgb.g + rgb.b) / 6.0;\n}\n\nvoid main() {\n\tvec4 rgb = texture2D(u_texture, 1.0 - v_tex_pos);\n\tfloat lum = getLum(rgb);\n    gl_FragColor = vec4(lum);\n}\n"),this.pushProgram=o(t,h,"\nprecision mediump float;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_textureTemp;\nuniform float u_scale;\nuniform float u_bold;\nuniform vec2 u_pt;\nvarying vec2 v_tex_pos;\n\n#define strength (min(u_scale / u_bold, 1.0))\n\nvec4 HOOKED_tex(vec2 pos) {\n    return texture2D(u_texture, pos);\n}\n\nvec4 POSTKERNEL_tex(vec2 pos) {\n    return texture2D(u_textureTemp, pos);\n}\n\nvec4 getLargest(vec4 cc, vec4 lightestColor, vec4 a, vec4 b, vec4 c) {\n\tvec4 newColor = cc * (1.0 - strength) + ((a + b + c) / 3.0) * strength;\n\tif (newColor.a > lightestColor.a) {\n\t\treturn newColor;\n\t}\n\treturn lightestColor;\n}\n\nvec4 getRGBL(vec2 pos) {\n    return vec4(HOOKED_tex(pos).rgb, POSTKERNEL_tex(pos).x);\n}\n\nfloat min3v(vec4 a, vec4 b, vec4 c) {\n\treturn min(min(a.a, b.a), c.a);\n}\nfloat max3v(vec4 a, vec4 b, vec4 c) {\n\treturn max(max(a.a, b.a), c.a);\n}\n\nvoid main() {\n    vec2 HOOKED_pos = v_tex_pos;\n\n\tvec2 d = u_pt;\n\n    vec4 cc = getRGBL(HOOKED_pos);\n\tvec4 t = getRGBL(HOOKED_pos + vec2(0.0, -d.y));\n\tvec4 tl = getRGBL(HOOKED_pos + vec2(-d.x, -d.y));\n\tvec4 tr = getRGBL(HOOKED_pos + vec2(d.x, -d.y));\n\n\tvec4 l = getRGBL(HOOKED_pos + vec2(-d.x, 0.0));\n\tvec4 r = getRGBL(HOOKED_pos + vec2(d.x, 0.0));\n\n\tvec4 b = getRGBL(HOOKED_pos + vec2(0.0, d.y));\n\tvec4 bl = getRGBL(HOOKED_pos + vec2(-d.x, d.y));\n\tvec4 br = getRGBL(HOOKED_pos + vec2(d.x, d.y));\n\n\tvec4 lightestColor = cc;\n\n\t//Kernel 0 and 4\n\tfloat maxDark = max3v(br, b, bl);\n\tfloat minLight = min3v(tl, t, tr);\n\n\tif (minLight > cc.a && minLight > maxDark) {\n\t\tlightestColor = getLargest(cc, lightestColor, tl, t, tr);\n\t} else {\n\t\tmaxDark = max3v(tl, t, tr);\n\t\tminLight = min3v(br, b, bl);\n\t\tif (minLight > cc.a && minLight > maxDark) {\n\t\t\tlightestColor = getLargest(cc, lightestColor, br, b, bl);\n\t\t}\n\t}\n\n\t//Kernel 1 and 5\n\tmaxDark = max3v(cc, l, b);\n\tminLight = min3v(r, t, tr);\n\n\tif (minLight > maxDark) {\n\t\tlightestColor = getLargest(cc, lightestColor, r, t, tr);\n\t} else {\n\t\tmaxDark = max3v(cc, r, t);\n\t\tminLight = min3v(bl, l, b);\n\t\tif (minLight > maxDark) {\n\t\t\tlightestColor = getLargest(cc, lightestColor, bl, l, b);\n\t\t}\n\t}\n\n\t//Kernel 2 and 6\n\tmaxDark = max3v(l, tl, bl);\n\tminLight = min3v(r, br, tr);\n\n\tif (minLight > cc.a && minLight > maxDark) {\n\t\tlightestColor = getLargest(cc, lightestColor, r, br, tr);\n\t} else {\n\t\tmaxDark = max3v(r, br, tr);\n\t\tminLight = min3v(l, tl, bl);\n\t\tif (minLight > cc.a && minLight > maxDark) {\n\t\t\tlightestColor = getLargest(cc, lightestColor, l, tl, bl);\n\t\t}\n\t}\n\n\t//Kernel 3 and 7\n\tmaxDark = max3v(cc, l, t);\n\tminLight = min3v(r, br, b);\n\n\tif (minLight > maxDark) {\n\t\tlightestColor = getLargest(cc, lightestColor, r, br, b);\n\t} else {\n\t\tmaxDark = max3v(cc, r, b);\n\t\tminLight = min3v(t, l, tl);\n\t\tif (minLight > maxDark) {\n\t\t\tlightestColor = getLargest(cc, lightestColor, t, l, tl);\n\t\t}\n    }\n\n    gl_FragColor = lightestColor;\n}\n"),this.gradProgram=o(t,h,"\nprecision mediump float;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_textureTemp;\nuniform vec2 u_pt;\nvarying vec2 v_tex_pos;\n\nvec4 HOOKED_tex(vec2 pos) {\n    return texture2D(u_texture, 1.0 - pos);\n}\n\nvec4 POSTKERNEL_tex(vec2 pos) {\n    return texture2D(u_textureTemp, 1.0 - pos);\n}\n\nvec4 getRGBL(vec2 pos) {\n    return vec4(HOOKED_tex(pos).rgb, POSTKERNEL_tex(pos).x);\n}\n\nvoid main() {\n    vec2 HOOKED_pos = v_tex_pos;\n\n\tvec2 d = u_pt;\n\n\t//[tl  t tr]\n\t//[ l cc  r]\n\t//[bl  b br]\n    vec4 cc = getRGBL(HOOKED_pos);\n\tvec4 t = getRGBL(HOOKED_pos + vec2(0.0, -d.y));\n\tvec4 tl = getRGBL(HOOKED_pos + vec2(-d.x, -d.y));\n\tvec4 tr = getRGBL(HOOKED_pos + vec2(d.x, -d.y));\n\n\tvec4 l = getRGBL(HOOKED_pos + vec2(-d.x, 0.0));\n\tvec4 r = getRGBL(HOOKED_pos + vec2(d.x, 0.0));\n\n\tvec4 b = getRGBL(HOOKED_pos + vec2(0.0, d.y));\n\tvec4 bl = getRGBL(HOOKED_pos + vec2(-d.x, d.y));\n\tvec4 br = getRGBL(HOOKED_pos + vec2(d.x, d.y));\n\n\t//Horizontal Gradient\n\t//[-1  0  1]\n\t//[-2  0  2]\n\t//[-1  0  1]\n\tfloat xgrad = (-tl.a + tr.a - l.a - l.a + r.a + r.a - bl.a + br.a);\n\n\t//Vertical Gradient\n\t//[-1 -2 -1]\n\t//[ 0  0  0]\n\t//[ 1  2  1]\n    float ygrad = (-tl.a - t.a - t.a - tr.a + bl.a + b.a + b.a + br.a);\n\n    gl_FragColor = vec4(1.0 - clamp(sqrt(xgrad * xgrad + ygrad * ygrad), 0.0, 1.0));\n}\n"),this.finalProgram=o(t,h,"\nprecision mediump float;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_textureTemp;\nuniform vec2 u_pt;\nuniform float u_scale;\nuniform float u_blur;\nvarying vec2 v_tex_pos;\n\n#define strength (min(u_scale / u_blur, 1.0))\n\nvec4 HOOKED_tex(vec2 pos) {\n    return texture2D(u_texture, vec2(pos.x, 1.0 - pos.y));\n}\n\nvec4 POSTKERNEL_tex(vec2 pos) {\n    return texture2D(u_textureTemp, vec2(pos.x, 1.0 - pos.y));\n}\n\nvec4 getAverage(vec4 cc, vec4 a, vec4 b, vec4 c) {\n\treturn cc * (1.0 - strength) + ((a + b + c) / 3.0) * strength;\n}\n\nvec4 getRGBL(vec2 pos) {\n    return vec4(HOOKED_tex(pos).rgb, POSTKERNEL_tex(pos).x);\n}\n\nfloat min3v(vec4 a, vec4 b, vec4 c) {\n\treturn min(min(a.a, b.a), c.a);\n}\nfloat max3v(vec4 a, vec4 b, vec4 c) {\n\treturn max(max(a.a, b.a), c.a);\n}\n\nvoid main() {\n    vec2 HOOKED_pos = v_tex_pos;\n\n\tvec2 d = u_pt;\n\n    vec4 cc = getRGBL(HOOKED_pos);\n\tvec4 t = getRGBL(HOOKED_pos + vec2(0.0, -d.y));\n\tvec4 tl = getRGBL(HOOKED_pos + vec2(-d.x, -d.y));\n\tvec4 tr = getRGBL(HOOKED_pos + vec2(d.x, -d.y));\n\n\tvec4 l = getRGBL(HOOKED_pos + vec2(-d.x, 0.0));\n\tvec4 r = getRGBL(HOOKED_pos + vec2(d.x, 0.0));\n\n\tvec4 b = getRGBL(HOOKED_pos + vec2(0.0, d.y));\n\tvec4 bl = getRGBL(HOOKED_pos + vec2(-d.x, d.y));\n\tvec4 br = getRGBL(HOOKED_pos + vec2(d.x, d.y));\n\n\t//Kernel 0 and 4\n\tfloat maxDark = max3v(br, b, bl);\n\tfloat minLight = min3v(tl, t, tr);\n\n\tif (minLight > cc.a && minLight > maxDark) {\n        gl_FragColor = getAverage(cc, tl, t, tr);\n        return;\n\t} else {\n\t\tmaxDark = max3v(tl, t, tr);\n\t\tminLight = min3v(br, b, bl);\n\t\tif (minLight > cc.a && minLight > maxDark) {\n            gl_FragColor = getAverage(cc, br, b, bl);\n            return;\n\t\t}\n\t}\n\n\t//Kernel 1 and 5\n\tmaxDark = max3v(cc, l, b);\n\tminLight = min3v(r, t, tr);\n\n\tif (minLight > maxDark) {\n        gl_FragColor = getAverage(cc, r, t, tr);\n        return;\n\t} else {\n\t\tmaxDark = max3v(cc, r, t);\n\t\tminLight = min3v(bl, l, b);\n\t\tif (minLight > maxDark) {\n            gl_FragColor = getAverage(cc, bl, l, b);\n            return;\n\t\t}\n\t}\n\n\t//Kernel 2 and 6\n\tmaxDark = max3v(l, tl, bl);\n\tminLight = min3v(r, br, tr);\n\n\tif (minLight > cc.a && minLight > maxDark) {\n        gl_FragColor = getAverage(cc, r, br, tr);\n        return;\n\t} else {\n\t\tmaxDark = max3v(r, br, tr);\n\t\tminLight = min3v(l, tl, bl);\n\t\tif (minLight > cc.a && minLight > maxDark) {\n            gl_FragColor = getAverage(cc, l, tl, bl);\n            return;\n\t\t}\n\t}\n\n\t//Kernel 3 and 7\n\tmaxDark = max3v(cc, l, t);\n\tminLight = min3v(r, br, b);\n\n\tif (minLight > maxDark) {\n        gl_FragColor = getAverage(cc, r, br, b);\n        return;\n\t} else {\n\t\tmaxDark = max3v(cc, r, b);\n\t\tminLight = min3v(t, l, tl);\n\t\tif (minLight > maxDark) {\n            gl_FragColor = getAverage(cc, t, l, tl);\n            return;\n\t\t}\n\t}\n\n    gl_FragColor = cc;\n}\n"),this.drawProgram=o(t,h,"\nprecision mediump float;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_textureOrig;\nvarying vec2 v_tex_pos;\n\nvoid main() {\n    vec4 color = texture2D(u_texture, 1.0 - v_tex_pos);\n    vec4 colorOrig = texture2D(u_textureOrig, vec2(1.0 - v_tex_pos.x, v_tex_pos.y));\n    gl_FragColor = vec4(color.rgb, colorOrig.a);\n}\n"),this.tempTexture=null,this.tempTexture2=null,this.tempTexture3=null,this.bold=6,this.blur=2}f.prototype.inputImage=function(img){var t=this.gl;this.inputWidth=img.width,this.inputHeight=img.height,this.inputTex=c(t,t.LINEAR,img),this.inputMov=null},f.prototype.inputVideo=function(t){var e=this.gl,n=t.videoWidth,r=t.videoHeight;this.inputWidth=n,this.inputHeight=r;var o=new Uint8Array(n*r*4);this.inputTex=c(e,e.LINEAR,o,n,r),this.inputMov=t},f.prototype.resize=function(t){var e=this.gl,n=Math.round(this.inputWidth*t),r=Math.round(this.inputHeight*t);e.canvas.width=n,e.canvas.height=r;var o=new Uint8Array(n*r*4);this.scaleTexture=c(e,e.LINEAR,o,n,r),this.tempTexture=c(e,e.LINEAR,o,n,r),this.tempTexture2=c(e,e.LINEAR,o,n,r),this.tempTexture3=c(e,e.LINEAR,o,n,r)},f.prototype.render=function(){if(this.inputTex){var t=this.gl,e=this.scaleProgram,n=this.lumProgram,r=this.pushProgram,o=this.gradProgram,c=this.finalProgram,h=this.drawProgram;this.inputMov&&function(t,e,n){t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)}(t,this.inputTex,this.inputMov),t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.viewport(0,0,t.canvas.width,t.canvas.height),v(t,this.framebuffer,this.scaleTexture),t.useProgram(e.program),m(t,this.quadBuffer,e.a_pos,2),l(t,this.inputTex,0),t.uniform1i(e.u_texture,0),t.uniform2f(e.u_size,this.inputWidth,this.inputHeight),t.drawArrays(t.TRIANGLES,0,6),v(t,this.framebuffer,this.tempTexture),t.useProgram(n.program),m(t,this.quadBuffer,n.a_pos,2),l(t,this.scaleTexture,0),t.uniform1i(n.u_texture,0),t.drawArrays(t.TRIANGLES,0,6),v(t,this.framebuffer,this.tempTexture2),t.useProgram(r.program),m(t,this.quadBuffer,r.a_pos,2),l(t,this.scaleTexture,0),l(t,this.tempTexture,1),t.uniform1i(r.u_texture,0),t.uniform1i(r.u_textureTemp,1),t.uniform1f(r.u_scale,t.canvas.width/this.inputWidth),t.uniform2f(r.u_pt,1/t.canvas.width,1/t.canvas.height),t.uniform1f(r.u_bold,this.bold),t.drawArrays(t.TRIANGLES,0,6),v(t,this.framebuffer,this.tempTexture),t.useProgram(n.program),m(t,this.quadBuffer,n.a_pos,2),l(t,this.tempTexture2,0),t.uniform1i(n.u_texture,0),t.drawArrays(t.TRIANGLES,0,6),v(t,this.framebuffer,this.tempTexture3),t.useProgram(o.program),m(t,this.quadBuffer,o.a_pos,2),l(t,this.tempTexture2,0),l(t,this.tempTexture,1),t.uniform1i(o.u_texture,0),t.uniform1i(o.u_textureTemp,1),t.uniform2f(o.u_pt,1/t.canvas.width,1/t.canvas.height),t.drawArrays(t.TRIANGLES,0,6),v(t,this.framebuffer,this.tempTexture),t.useProgram(c.program),m(t,this.quadBuffer,c.a_pos,2),l(t,this.tempTexture2,0),l(t,this.tempTexture3,1),t.uniform1i(c.u_texture,0),t.uniform1i(c.u_textureTemp,1),t.uniform1f(c.u_scale,t.canvas.width/this.inputWidth),t.uniform2f(c.u_pt,1/t.canvas.width,1/t.canvas.height),t.uniform1f(c.u_blur,this.blur),t.drawArrays(t.TRIANGLES,0,6),v(t,null),t.useProgram(h.program),m(t,this.quadBuffer,h.a_pos,2),l(t,this.tempTexture,0),l(t,this.inputTex,1),t.uniform1i(h.u_texture,0),t.uniform1i(h.u_textureOrig,1),t.drawArrays(t.TRIANGLES,0,6)}};var x=f,_=n(257),d=n(1030),E=n(1031),T={name:"Anime4k",head:function(){return this.$store.state.currentTool.head},data:function(){return{file:null,scale:1.25,bold:6,blur:2,scaler:null,gl:null}},mounted:function(){this.initScaler()},methods:{save:function(){Object(_.a)(this.gl.canvas.toDataURL(),"".concat(Object(d.a)(),".png"))},initScaler:function(){var canvas=this.$refs.canvas;this.gl=canvas.getContext("webgl",{preserveDrawingBuffer:!0}),this.scaler=new x(this.gl),requestAnimationFrame(function t(){this.scaler&&(this.scaler.bold=parseFloat(this.bold),this.scaler.blur=parseFloat(this.blur),this.scaler.render()),requestAnimationFrame(t.bind(this))}.bind(this))},changeImage:function(t){var e=new Image;e.crossOrigin="Anonymous",e.src=t,e.onload=function(){var t=parseFloat(this.scale);this.scaler.inputImage(e),this.scaler.resize(t)}.bind(this),e.onerror=function(){this.$notify.error({title:"加载图片失败",message:"可尝试更换图片"})}},onScaleChanged:function(t){this.scaler.resize(parseFloat(t))},onSelectFile:function(t){var e=this,n=t.target;n.files&&n.files[0]&&Object(E.a)(n.files[0]).then((function(t){e.changeImage(t)}))}}},D=n(5),component=Object(D.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anime4k"},[n("nya-container",{attrs:{title:"动漫图片无损放大"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            或者使用本地图片/视频\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{type:"file",accept:"image/*",placeholder:t.file?t.file.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(e){return t.onSelectFile(e)}},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("el-button",{attrs:{slot:"append"},on:{click:t.save},slot:"append"},[t._v("\n                下载\n            ")])],1),n("div",{staticClass:"nya-subtitle mb-0"},[t._v("\n            放大倍数\n        ")]),n("el-slider",{attrs:{min:1,max:4,"format-tooltip":function(t){return t/100}},on:{change:t.onScaleChanged},model:{value:t.scale,callback:function(e){t.scale=e},expression:"scale"}}),n("div",{staticClass:"nya-subtitle mb-0"},[t._v("\n            Bold（可无需修改）\n        ")]),n("el-slider",{attrs:{min:0,max:8,"format-tooltip":function(t){return t/1e3}},on:{change:t.onScaleChanged},model:{value:t.bold,callback:function(e){t.bold=e},expression:"bold"}}),n("div",{staticClass:"nya-subtitle mb-0"},[t._v("\n            Blur（可无需修改）\n        ")]),n("el-slider",{attrs:{min:0,max:8,"format-tooltip":function(t){return t/1e3}},on:{change:t.onScaleChanged},model:{value:t.blur,callback:function(e){t.blur=e},expression:"blur"}})],1),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.file,expression:"file"}],attrs:{title:"预览"}},[n("canvas",{ref:"canvas",staticStyle:{"max-width":"100%"}})]),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("用于无损放大图片，类似 "),n("a",{attrs:{href:"http://waifu2x.udp.jp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("waifu2x")]),t._v("，只推荐上传动画图片")]),n("li",[t._v("算法来源："),n("a",{attrs:{href:"https://github.com/bloc97/Anime4K",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anime4K")]),t._v("，纯浏览器实现，Scale 过大会卡死")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);