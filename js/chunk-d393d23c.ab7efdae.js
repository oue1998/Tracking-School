(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d393d23c"],{"3ed3":function(t,e,a){},"3f48":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"headbar"}},[a("v-toolbar",{attrs:{color:"primary",dark:"",height:"120"}},[a("v-btn",{staticClass:"mt-2",attrs:{icon:""},on:{click:function(e){return t.$router.push(t.datahead.url)}}},[a("v-icon",{attrs:{size:"60"}},[t._v("mdi-chevron-left")])],1),a("v-spacer"),a("v-toolbar-title",{staticClass:"text-center"},[a("h2",[t._v(t._s(t.nameUser)+" "),a("br"),t._v(t._s(t.datahead.title))])]),a("v-spacer")],1)],1)},o=[],d=a("1da1"),l=(a("96cf"),a("bc3a")),r=a.n(l),s={name:"headbar",props:["datahead"],data:function(){return{nameUser:""}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("authentication/profile").then((function(e){"apt"==e.data.user.role.role_name&&(t.nameUser=e.data.aptUser.apt.aptName),"school"==e.data.user.role.role_name&&(t.nameUser=e.data.schoolUser.school.schoolName)}));case 2:case"end":return e.stop()}}),e)})))()}},c=s,u=(a("56af"),a("2877")),i=a("6544"),f=a.n(i),v=a("8336"),m=a("132d"),b=a("2fa4"),h=a("71d9"),g=a("2a7f"),p=Object(u["a"])(c,n,o,!1,null,null,null);e["a"]=p.exports;f()(p,{VBtn:v["a"],VIcon:m["a"],VSpacer:b["a"],VToolbar:h["a"],VToolbarTitle:g["a"]})},5211:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"budgetform-LC"}},[a("headbar",{attrs:{datahead:t.datahead}}),a("v-container",[a("v-row",{staticClass:"mt-5"},[a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("h4",[t._v("โรงเรียน")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.SCname,callback:function(e){t.SCname=e},expression:"SCname"}}),a("h4",[t._v("ปีการศึกษา")]),a("v-text-field",{attrs:{label:"ปีการศึกษา",solo:"",outlined:""},on:{change:function(e){return t.showdata()}},model:{value:t.budget.academicYear,callback:function(e){t.$set(t.budget,"academicYear",e)},expression:"budget.academicYear"}}),a("h4",[t._v("จำนวนวัน")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.dataRE.totalDays,callback:function(e){t.$set(t.dataRE,"totalDays",e)},expression:"dataRE.totalDays"}}),a("h4",[t._v("จำนวนนักเรียน")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.dataRE.totalStudent,callback:function(e){t.$set(t.dataRE,"totalStudent",e)},expression:"dataRE.totalStudent"}}),a("h4",[t._v("เป็นงบประมาณ")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.dataRE.totalRequestedBudget,callback:function(e){t.$set(t.dataRE,"totalRequestedBudget",e)},expression:"dataRE.totalRequestedBudget"}}),a("h4",[t._v("งบฯที่เคยจัดสรรไป")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.dataRE.allocatedBudget,callback:function(e){t.$set(t.dataRE,"allocatedBudget",e)},expression:"dataRE.allocatedBudget"}}),a("h4",[t._v("คงเหลือ")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.dataRE.revicedBudget,callback:function(e){t.$set(t.dataRE,"revicedBudget",e)},expression:"dataRE.revicedBudget"}})],1)],1),a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("h3",[t._v("ข้อมูลการจัดสรรงบฯ")])])],1),a("v-row",[a("v-col",[a("h4",[t._v("ปีการศึกษา")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.budget.academicYear,callback:function(e){t.$set(t.budget,"academicYear",e)},expression:"budget.academicYear"}}),a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,"nudge-right":30,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"ตั่งแต่-ถึง","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dateRangeText,callback:function(e){t.dateRangeText=e},expression:"dateRangeText"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{scrollable:"",range:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v(" OK ")])],1)],1),a("v-text-field",{attrs:{label:"รวมทั้งสิ้น",solo:"",outlined:""},model:{value:t.budget.totalDays,callback:function(e){t.$set(t.budget,"totalDays",e)},expression:"budget.totalDays"}}),a("h4",[t._v("จำนวนนักเรียน")]),a("v-text-field",{attrs:{label:"งบประมาณทั้งสิ้น",solo:"",outlined:""},model:{value:t.budget.numberOfStudent,callback:function(e){t.$set(t.budget,"numberOfStudent",e)},expression:"budget.numberOfStudent"}}),a("h4",[t._v("งบประมาณทั้งสิ้น")]),a("v-text-field",{attrs:{label:"งบประมาณทั้งสิ้น",solo:"",outlined:""},model:{value:t.budget.allocatedBudgetAmount,callback:function(e){t.$set(t.budget,"allocatedBudgetAmount",e)},expression:"budget.allocatedBudgetAmount"}}),a("h4",[t._v("วันที่คาดว่าจะได้รับ")]),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":30,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"วันที่คาดว่าจะได้รับ","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1),a("h4",[t._v("วันที่บันทึก")]),a("v-text-field",{attrs:{"solo-inverted":""},model:{value:t.todayTH,callback:function(e){t.todayTH=e},expression:"todayTH"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-btn",{staticClass:"black--text pa-5",attrs:{color:"accent"},on:{click:function(e){return t.addBudget()}}},[a("h3",[t._v("บันทึก")])])],1)],1)],1)],1)},o=[],d=(a("a15b"),a("99af"),a("bc3a")),l=a.n(d),r=a("3f48"),s={name:"budgetform-LC",components:{headbar:r["a"]},data:function(){return{dialog:!1,datahead:{url:"/pick-LC",title:"บันทึกการจัดสรรงบฯ"},year:"2564",id:"",budget:{schoolId:null,academicYear:(new Date).getFullYear()+543-1,startDate:null,endDate:null,budgetExpectedDate:null,totalDays:null,numberOfStudent:null,allocatedBudgetAmount:null,submissionDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},date:[],menu:!1,menu2:!1,picker:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dataRE:{},SCname:"",today:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}},computed:{dateRangeText:function(){return this.date.join(" ~ ")},todayTH:function(){return new Date(this.today).toLocaleDateString("th-TH",{timeZone:"UTC"})}},mounted:function(){},created:function(){this.showdata()},methods:{showdata:function(){var t=this;this.id=this.$route.params.id,l.a.get("summary/apt/school-budget-requested?academicYear=".concat(this.budget.academicYear,"&school=").concat(this.id)).then((function(e){t.dataRE=e.data,t.SCname=e.data.school.schoolName,t.budget.schoolId=e.data.school.schoolId}))},dayTH:function(t){var e=new Date(t).toLocaleDateString("th-TH",{timeZone:"UTC"});return e},addBudget:function(){var t=this;this.budget.schoolId=this.id,this.budget.academicYear=parseInt(this.budget.academicYear),this.budget.startDate=this.date[0],this.budget.endDate=this.date[1],this.budget.budgetExpectedDate=this.picker,this.budget.totalDays=parseInt(this.budget.totalDays),this.budget.allocatedBudgetAmount=parseInt(this.budget.allocatedBudgetAmount),this.budget.numberOfStudent=parseInt(this.budget.numberOfStudent),console.log("BG",this.budget),l.a.post("apt-school-transaction",this.budget).then((function(e){console.log(e),201==e.status&&t.$router.push({name:"pick-LC"})}))}}},c=s,u=(a("7cf9"),a("2877")),i=a("6544"),f=a.n(i),v=a("8336"),m=a("62ad"),b=a("a523"),h=a("2e4b"),g=a("e449"),p=a("0fd9"),x=a("2fa4"),k=a("8654"),_=Object(u["a"])(c,n,o,!1,null,null,null);e["default"]=_.exports;f()(_,{VBtn:v["a"],VCol:m["a"],VContainer:b["a"],VDatePicker:h["a"],VMenu:g["a"],VRow:p["a"],VSpacer:x["a"],VTextField:k["a"]})},"56af":function(t,e,a){"use strict";a("3ed3")},"6c3a":function(t,e,a){},"7cf9":function(t,e,a){"use strict";a("6c3a")}}]);
//# sourceMappingURL=chunk-d393d23c.ab7efdae.js.map