(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-nav"],{"004e":function(t,a,e){"use strict";e.r(a);var i=e("ffa8"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},2016:function(t,a,e){"use strict";e.r(a);var i=e("a0cc"),s=e("004e");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);var c,l=e("f0c5"),u=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,"7534ff80",null,!1,i["a"],c);a["default"]=u.exports},a0cc:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("导航栏")])],2),t._l(10,(function(a,i){return i==t.TabCur?e("v-uni-view",{key:i,staticClass:"bg-grey padding margin text-center"},[t._v("Tab"+t._s(i))]):t._e()})),e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("默认")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(10,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-green cur":"",attrs:{"data-id":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(i))])})),1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("居中")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":!0}},t._l(3,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-blue cur":"",attrs:{"data-id":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(i))])})),1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("平分")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"flex text-center"},t._l(4,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item flex-sub",class:i==t.TabCur?"text-orange cur":"",attrs:{"data-id":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(i))])})),1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("背景")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-red nav text-center",attrs:{"scroll-x":!0}},t._l(3,(function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-white cur":"",attrs:{"data-id":i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(i))])})),1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("图标")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-green nav text-center",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"cu-item",class:0==t.TabCur?"text-white cur":"",attrs:{"data-id":"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-camerafill"}),t._v("数码")],1),e("v-uni-view",{staticClass:"cu-item",class:1==t.TabCur?"text-white cur":"",attrs:{"data-id":"1"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")],1),e("v-uni-view",{staticClass:"cu-item",class:2==t.TabCur?"text-white cur":"",attrs:{"data-id":"2"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")],1)],1)],2)},n=[]},ffa8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{TabCur:0,scrollLeft:0}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=i}}]);