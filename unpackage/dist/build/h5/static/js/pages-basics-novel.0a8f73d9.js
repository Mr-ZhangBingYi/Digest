(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-novel"],{"22ba":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("文学著作")])],2),e("v-uni-scroll-view",{staticClass:"bg-white nav text-center fixed",style:[{top:t.CustomBar+"px"}],attrs:{"scroll-x":!0}},t._l(t.tabNav,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-item",class:n==t.TabCur?"text-blue cur":"",attrs:{"data-id":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(t.tabNav[n]))])})),1),0==t.TabCur?[e("v-uni-view",{staticClass:"book"},t._l(t.F_conduct,(function(a){return e("v-uni-view",{key:a.F_conduct,staticClass:"books"},[e("v-uni-navigator",{attrs:{url:a.url}},[t._v(t._s(a.name))])],1)})),1)]:t._e(),1==t.TabCur?[e("v-uni-view",{staticClass:"book"},t._l(t.F_macroscopic,(function(a){return e("v-uni-view",{key:a.F_macroscopic,staticClass:"books"},[e("v-uni-navigator",{attrs:{url:a.url}},[t._v(t._s(a.name))])],1)})),1)]:t._e(),2==t.TabCur?[e("v-uni-view",{staticClass:"book"},t._l(t.F_classic,(function(a){return e("v-uni-view",{key:a.F_classic,staticClass:"books"},[e("v-uni-navigator",{attrs:{url:a.url}},[t._v(t._s(a.name))])],1)})),1)]:t._e()],2)},i=[]},"40b4":function(t,a,e){"use strict";e.r(a);var n=e("f3b4"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=r.a},"5f09":function(t,a,e){var n=e("e39a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("bb17cd64",n,!0,{sourceMap:!1,shadowMode:!1})},a47a:function(t,a,e){"use strict";e.r(a);var n=e("22ba"),r=e("40b4");for(var i in r)"default"!==i&&function(t){e.d(a,t,(function(){return r[t]}))}(i);e("b2c2");var c,s=e("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"0038b894",null,!1,n["a"],c);a["default"]=o.exports},b2c2:function(t,a,e){"use strict";var n=e("5f09"),r=e.n(n);r.a},e39a:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".books[data-v-0038b894]{width:28%;height:%?250?%;margin:%?30?% 2.5%;padding:0 %?20?%;background-color:#faebd7;text-align:center;line-height:%?250?%}.book[data-v-0038b894]{margin-top:%?50?%;display:flex;\r\n\t/* 自动换行 */flex-wrap:wrap\r\n\t/* border: 1px solid black; */}.cu-item[data-v-0038b894]{width:30%;text-align:center}uni-page-body[data-v-0038b894]{padding-top:%?45?%}.titlename[data-v-0038b894]{width:43%!important}",""]),t.exports=a},f3b4:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e("ca29")),i={data:function(){return{F_conduct:r.default.F_conduct,F_macroscopic:r.default.F_macroscopic,F_classic:r.default.F_classic,CustomBar:this.CustomBar,TabCur:0,tabNav:["经典","小说","哲理"]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=i}}]);