(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32f8d4ee"],{"7d6d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-md-preview",{attrs:{text:t.fileContent}})},c=[],s=n("c7eb"),a=n("1da1"),i=(n("d3b7"),{name:"MdPreview",props:{src:{type:String,default:""}},data:function(){return{fileContent:""}},computed:{},watch:{},created:function(){this.loadmd(this.src)},methods:{loadmd:function(t){var e=this;return Object(a["a"])(Object(s["a"])().mark((function n(){var r,c,a;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,r="/webAdmin"+t,n.next=4,fetch(r);case 4:return c=n.sent,n.next=7,c.text();case 7:a=n.sent,e.fileContent=a;case 9:case"end":return n.stop()}}),n)})))()}}}),u=i,d=n("2877"),o=Object(d["a"])(u,r,c,!1,null,null,null);e["a"]=o.exports},"8bd0":function(t,e,n){},c4f7:function(t,e,n){"use strict";n("8bd0")},d3b2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"doc"},[n("v-md-preview",{attrs:{text:t.fileContent,"include-level":[1,2]}}),n("MdPreview",{attrs:{src:t.src}})],1)])},c=[],s=n("7d6d"),a={components:{MdPreview:s["a"]},data:function(){return{src:"/resource/problem/隐私协议.md",fileContent:""}},created:function(){},methods:{}},i=a,u=(n("c4f7"),n("2877")),d=Object(u["a"])(i,r,c,!1,null,null,null);e["default"]=d.exports}}]);