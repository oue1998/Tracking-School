(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68b49d8f"],{"2a7f":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("71d9"),a=s("80d2"),r=Object(a["i"])("v-toolbar__title"),n=Object(a["i"])("v-toolbar__items");i["a"]},"36a7":function(t,e,s){},4657:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"status"}},[s("v-toolbar",{attrs:{color:"primary",dark:"",height:"60",flat:""}},[s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.push("/school")}}},[s("v-icon",{attrs:{size:"60"}},[t._v("mdi-chevron-left")])],1),s("v-spacer"),s("v-toolbar-title",{staticClass:"text-center"},[s("h2",[t._v("สถานการณ์งบฯที่จัดสรร")])]),s("v-spacer")],1),s("v-container",{staticClass:"primary"},[s("v-row",{staticClass:"white--text",attrs:{justify:"space-around"}},[s("v-col",{attrs:{cols:"8"}},[s("v-progress-circular",{attrs:{rotate:-90,size:80,width:10,value:t.value,color:"accent"}}),s("h3",{staticClass:"d-inline ml-5"},[t._v("สำนักงบประมาณ")])],1),s("v-col",{attrs:{cols:"7"}},[s("v-icon",{attrs:{dark:"","x-large":""}},[t._v("mdi-arrow-down")]),s("h4",{staticClass:"d-inline ml-5"},[t._v("ส่ง : "+t._s(t.dayTH(this.data.bobSubmissionDate)))])],1),s("v-col",{attrs:{cols:"8"}},[s("v-progress-circular",{attrs:{rotate:-90,size:80,width:10,value:t.value,color:"accent"}}),s("h3",{staticClass:"d-inline ml-5"},[t._v("กรมส่งเสริมฯ")])],1),s("v-row",{attrs:{justify:"end"}},[s("v-col",{attrs:{cols:"7"}},[s("v-icon",{attrs:{dark:"","x-large":""}},[t._v("mdi-arrow-down")]),s("h4",{staticClass:"d-inline ml-5"},[t._v("ส่ง : "+t._s(t.dayTH(this.data.dlaSubmissionDate)))])],1)],1)],1),s("v-row",{staticClass:"text-center white--text"},[s("v-col",{attrs:{cols:"12"}},[s("v-progress-circular",{attrs:{rotate:-90,size:80,width:10,value:t.value,color:"accent"}}),s("h3",{staticClass:"mt-1"},[t._v(t._s(this.APT))]),s("h3",[t._v("รับ : "+t._s(t.dayTH(this.data.aptSubmissionDate)))])],1),s("v-col",{attrs:{cols:"6"}},[s("v-icon",{attrs:{dark:"","x-large":""}},[t._v("mdi-arrow-down")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-icon",{attrs:{dark:"","x-large":""}},[t._v("mdi-arrow-down")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-progress-circular",{attrs:{rotate:-90,size:80,width:10,value:t.data.schoolInAreaBudgetRecivedPercent,color:"accent"}},[s("h4",[t._v(t._s(Math.round(t.data.schoolInAreaBudgetRecivedPercent))+"%")])]),s("h3",{staticClass:"mt-1"},[t._v("โรงเรียนในพื้นที่")]),s("h3",[t._v("วันล่าสุด : "+t._s(t.today))])],1),s("v-col",{attrs:{cols:"6"}},[s("v-progress-circular",{attrs:{rotate:-90,size:80,width:10,value:t.data.totalSchoolBudgetRecivedPercent,color:"accent"}},[s("h4",[t._v(" "+t._s(Math.round(t.data.totalSchoolBudgetRecivedPercent))+"%")])]),s("h3",{staticClass:"mt-1"},[t._v(t._s(this.SCName))]),s("h3",[t._v("รับ : "+t._s(t.dayTH(t.data.schoolAcceptedDate)))])],1)],1)],1)],1)},a=[],r=s("1da1"),n=(s("96cf"),s("bc3a")),o=s.n(n),c={name:"status",data:function(){return{name:"เนคเทควิทยา",year:"2564",value:100,data:{},APT:"",SCName:"",today:(new Date).toLocaleDateString("th-TH",{timeZone:"UTC"})}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("summary/school/monitor?academicYear=".concat(t.year));case 2:s=e.sent,t.data=s.data,t.APT=s.data.school.apt.aptName,t.SCName=s.data.school.schoolName,console.log(t.data);case 7:case"end":return e.stop()}}),e)})))()},methods:{dayTH:function(t){if(0!=t){var e=new Date(t);return this.todayTH=e.toLocaleDateString("th-TH",{timeZone:"UTC"}),this.todayTH}return""}}},l=c,h=s("2877"),d=s("6544"),u=s.n(d),v=s("8336"),p=s("62ad"),m=s("a523"),g=s("132d"),f=s("490a"),b=s("0fd9"),S=s("2fa4"),_=s("71d9"),y=s("2a7f"),C=Object(h["a"])(l,i,a,!1,null,null,null);e["default"]=C.exports;u()(C,{VBtn:v["a"],VCol:p["a"],VContainer:m["a"],VIcon:g["a"],VProgressCircular:f["a"],VRow:b["a"],VSpacer:S["a"],VToolbar:_["a"],VToolbarTitle:y["a"]})},"5e23":function(t,e,s){},"71d9":function(t,e,s){"use strict";var i=s("3835"),a=s("5530"),r=(s("a9e3"),s("0481"),s("5e23"),s("8dd9")),n=s("53ca"),o=(s("a15b"),s("8a79"),s("2ca0"),s("8efc"),s("90a2")),c=(s("36a7"),s("24b2")),l=s("58df"),h=Object(l["a"])(c["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=h,u=s("7560"),v=s("d9f7"),p=s("d9bd"),m="undefined"!==typeof window&&"IntersectionObserver"in window,g=Object(l["a"])(d,u["a"]).extend({name:"v-img",directives:{intersect:o["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,s){if(!m||s||this.eager){if(this.normalisedSrc.lazySrc){var i=new Image;i.src=this.normalisedSrc.lazySrc,this.pollForSize(i,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(p["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var a=t.naturalHeight,r=t.naturalWidth;a||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/a):t.complete||!e.isLoading||e.hasError||null==s||setTimeout(i,s)};i()},genContent:function(){var t=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),s=Object(v["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}}),f=s("80d2");e["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(a["a"])(Object(a["a"])({},this.measurableStyles),{},{height:Object(f["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var s=Object(i["a"])(e,2),a=s[0],r=s[1];t.$attrs.hasOwnProperty(a)&&Object(p["a"])(a,r,t)}))},methods:{genBackground:function(){var t={height:Object(f["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(g,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(f["g"])(this.computedContentHeight)}},Object(f["n"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(f["g"])(this.extensionHeight)}},Object(f["n"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},"8a79":function(t,e,s){"use strict";var i=s("23e7"),a=s("06cf").f,r=s("50c4"),n=s("577e"),o=s("5a34"),c=s("1d80"),l=s("ab13"),h=s("c430"),d="".endsWith,u=Math.min,v=l("endsWith"),p=!h&&!v&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!p&&!v},{endsWith:function(t){var e=n(c(this));o(t);var s=arguments.length>1?arguments[1]:void 0,i=e.length,a=void 0===s?i:u(r(s),i),l=n(t);return d?d.call(e,l,a):e.slice(a-l.length,a)===l}})},"8efc":function(t,e,s){}}]);
//# sourceMappingURL=chunk-68b49d8f.d91b5f35.js.map