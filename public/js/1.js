(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"KHd+":function(t,e,s){"use strict";function a(t,e,s,a,i,l,n,r){var o,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),n?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=o):i&&(o=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),o)if(c.functional){c._injectStyles=o;var v=c.render;c.render=function(t,e){return o.call(e),v(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,o):[o]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},yELl:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{show:!1}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27===e.keyCode&&(t.show=!1)}))}},i=s("KHd+"),l=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn btn-nav",on:{click:function(e){t.show=!t.show}}},[s("div",{staticClass:"relative"},[s("span",[t._v("中文")]),t._v(" "),s("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:[t.show?"rotate-180":"rotate-0"],attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"},[s("div",{staticClass:"px-2 py-2 text-gray-700 rounded-md shadow bg-white"},[s("svg",{staticClass:"block fill-current text-white w-4 h-4 absolute right-0 top-0 mr-4 -mt-3 z-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}})]),t._v(" "),s("a",{staticClass:"btn btn-nav",attrs:{href:"?locale="}},[t._v("英文")]),t._v(" "),s("a",{staticClass:"btn btn-nav",attrs:{href:"?locale="}},[t._v("中文")])])])])],1)])}),[],!1,null,null,null).exports,n={components:{Dropdown:l},data:function(){return{show:!1}},methods:{toggleNavbar:function(){this.show=!this.show}}},r={data:function(){return{date:(new Date).getFullYear()}}},o={components:{Dropdown:l,NavbarComponent:Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"bg-gray-800 text-white fixed top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"},[s("div",{staticClass:"container px-4 mx-auto flex flex-wrap items-center justify-between"},[s("div",{staticClass:"w-full relative flex justify-between lg:w-auto lg:static lg:block item-center"},[s("a",{staticClass:"flex items-center flex-shrink-0 text-white mr-6",attrs:{href:"/"}},[s("svg",{staticClass:"fill-current h-8 w-8 mr-2",attrs:{width:"54",height:"54",viewBox:"0 0 54 54",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"}})]),t._v(" "),s("span",{staticClass:"font-semibold text-xl tracking-tight"},[t._v("Cyber Tech")])]),t._v(" "),s("button",{staticClass:"absolute right-0 mr-2 rounded focus:outline-none cursor-pointer outline-none lg:hidden",on:{click:function(e){return t.toggleNavbar()}}},[s("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[s("path",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clip-rule":"evenodd"}}),t._v(" "),s("path",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),s("div",{staticClass:"lg:flex flex-grow items-center justify-end",class:{hidden:!t.show,block:t.show}},[s("a",{staticClass:"btn-nav lg:mx-2",attrs:{href:"#services"}},[t._v("服務")]),t._v(" "),s("a",{staticClass:"btn-nav lg:mx-2",attrs:{href:"#aboutus"}},[t._v("關於我們")]),t._v(" "),s("a",{staticClass:"btn-nav lg:mx-2",attrs:{href:"#contactus"}},[t._v("聯繫我們")]),t._v(" "),s("dropdown"),t._v(" "),s("a",{staticClass:"btn-indigo lg:mx-2",attrs:{href:"#"}},[t._v("登入")])],1)])])}),[],!1,null,null,null).exports,FooterComponent:Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"w-full bg-gray-900 pb-6"},[e("div",{staticClass:"container mx-auto px-4"},[e("hr",{staticClass:"mb-6 border-b-1 border-gray-700"}),this._v(" "),e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[e("div",{staticClass:"w-full md:w-4/12 px-4"},[e("div",{staticClass:"text-sm text-white font-semibold py-1"},[this._v("\n          Copyright © "+this._s(this.date)+"\n          "),e("a",{staticClass:"text-white hover:text-gray-400 text-sm font-semibold py-1",attrs:{href:"https://www.creative-tim.com"}},[this._v("Cyber Tech")])])]),this._v(" "),this._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-8/12 px-4"},[e("ul",{staticClass:"flex flex-wrap list-none md:justify-end justify-center"},[e("li",[e("a",{staticClass:"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3",attrs:{href:"/terms"}},[this._v("服務條款")])]),this._v(" "),e("li",[e("a",{staticClass:"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3",attrs:{href:"#services"}},[this._v("服務一覧")])]),this._v(" "),e("li",[e("a",{staticClass:"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3",attrs:{href:"#aboutus"}},[this._v("關於我們")])]),this._v(" "),e("li",[e("a",{staticClass:"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3",attrs:{href:"#contacts"}},[this._v("聯繫我們")])])])])}],!1,null,null,null).exports},data:function(){return{open:!1}}},c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("navbar-component"),t._v(" "),s("main",[s("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center",staticStyle:{"min-height":"75vh"}},[s("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover",style:"background-image:url("+t.$page.banner+")"},[s("span",{staticClass:"w-full h-full absolute opacity-75 bg-black",attrs:{id:"blackOverlay"}})]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",staticStyle:{height:"70px",transform:"translateZ(0px)"}},[s("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[s("polygon",{staticClass:"fill-current text-gray-300",attrs:{points:"2560 0 2560 100 0 100"}})])])]),t._v(" "),t._t("default")],2),t._v(" "),s("footer-component")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container relative mx-auto"},[e("div",{staticClass:"items-center flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[e("h1",{staticClass:"text-white font-semibold text-5xl"},[this._v("大規模探索及保護您的敏感資料")]),this._v(" "),e("p",{staticClass:"mt-4 text-lg text-gray-300"},[this._v("為您提供全面的安全諮詢")]),this._v(" "),e("a",{staticClass:"btn-indigo py-4 px-8 text-white font-bold mt-8",attrs:{href:"#contactus"}},[this._v("開始使用")])])])])}],!1,null,null,null).exports,v={props:{name:String}},h={metaInfo:{title:"Homepage"},layout:c,components:{Icon:Object(i.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return"apple"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[s("g",{attrs:{"fill-rule":"nonzero"}},[s("path",{attrs:{d:"M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"}}),t._v(" "),s("path",{attrs:{d:"M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"}})])]):"book"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"}})]):"cheveron-down"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})]):"cheveron-right"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("polygon",{attrs:{points:"12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"}})]):"dashboard"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]):"location"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})]):"office"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"}})]):"printer"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"}})]):"shopping-cart"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})]):"store-front"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"}})]):"trash"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"}})]):"users"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}})]):"analysis"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 46.999 46.999"}},[s("g",[s("g",{attrs:{id:"Layer_1_80_"}},[s("g",[s("path",{attrs:{d:"M36.854,37.92H10.147c-1.18,0-2.136,0.956-2.136,2.136s0.956,2.137,2.136,2.137h26.705c1.181,0,2.137-0.957,2.137-2.137\n\t\t\t\tS38.032,37.92,36.854,37.92z"}}),t._v(" "),s("path",{attrs:{d:"M7.478,21.896v5.341c0,0.885,0.718,1.603,1.602,1.603c0.885,0,1.603-0.718,1.603-1.603v-5.341\n\t\t\t\tc0-0.885-0.718-1.602-1.603-1.602C8.195,20.295,7.478,21.012,7.478,21.896z"}}),t._v(" "),s("path",{attrs:{d:"M12.818,19.761v7.477c0,0.885,0.718,1.603,1.603,1.603c0.884,0,1.602-0.718,1.602-1.603v-7.477\n\t\t\t\tc0-0.885-0.718-1.603-1.602-1.603C13.536,18.158,12.818,18.876,12.818,19.761z"}}),t._v(" "),s("path",{attrs:{d:"M18.159,17.624v9.613c0,0.885,0.718,1.603,1.603,1.603c0.884,0,1.602-0.718,1.602-1.603v-9.613\n\t\t\t\tc0-0.885-0.718-1.603-1.602-1.603C18.877,16.021,18.159,16.739,18.159,17.624z"}}),t._v(" "),s("path",{attrs:{d:"M44.863,4.806H2.137C0.957,4.806,0,5.763,0,6.943v26.705c0,1.18,0.957,2.137,2.137,2.137H42.91\n\t\t\t\tc-0.062-0.055-0.133-0.1-0.191-0.157l-2.957-2.959c-1.705,0.963-3.636,1.478-5.615,1.478c-2.698,0-5.252-0.93-7.306-2.633H4.272\n\t\t\t\tV9.078h38.455V15.1c1.856,2.095,2.883,4.755,2.883,7.581c0,1.979-0.514,3.909-1.476,5.612l2.865,2.867V6.942\n\t\t\t\tC47,5.763,46.043,4.806,44.863,4.806z"}}),t._v(" "),s("path",{attrs:{d:"M42.371,29.554c-0.213-0.214-0.499-0.301-0.777-0.271l-0.449-0.449c1.5-1.704,2.328-3.861,2.328-6.151\n\t\t\t\tc0-2.49-0.969-4.832-2.729-6.593c-1.763-1.765-4.104-2.733-6.597-2.733c-2.489,0-4.83,0.969-6.592,2.733\n\t\t\t\tc-1.764,1.761-2.734,4.103-2.734,6.593c0,2.49,0.972,4.833,2.734,6.594c1.762,1.763,4.103,2.731,6.592,2.731\n\t\t\t\tc2.293,0,4.449-0.827,6.151-2.329l0.451,0.448c-0.03,0.28,0.056,0.563,0.271,0.779l3.213,3.213\n\t\t\t\tc0.187,0.187,0.431,0.278,0.677,0.278c0.243,0,0.489-0.092,0.677-0.278c0.372-0.374,0.372-0.979,0-1.351L42.371,29.554z\n\t\t\t\t M39.391,27.922c-1.4,1.401-3.263,2.175-5.244,2.175c-1.978,0-3.84-0.772-5.24-2.173c-1.399-1.399-2.172-3.262-2.172-5.242\n\t\t\t\tc0-1.979,0.771-3.841,2.172-5.241c1.4-1.401,3.264-2.173,5.24-2.173c1.981,0,3.844,0.771,5.244,2.173\n\t\t\t\tc1.398,1.4,2.17,3.262,2.17,5.241C41.561,24.662,40.789,26.522,39.391,27.922z"}})])])]),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g"),t._v(" "),s("g")]):t._e()}),[],!1,null,null,null).exports},data:function(){return{services:[{icon:"analysis",class:"bg-red-400",title:"數據分析系統",description:"分析系統為企業帶來全方位洞察，協助您在繁雜的數位資訊洪流中找出潛在的成長機遇，在繁雜的洪流資訊中精煉出潛在的黃金洞察。"},{icon:"analysis",class:"bg-blue-500",title:"雲端運維管理",description:"專業的運維團隊，為企業建立及管理私有雲，也可託管維護阿里雲、AWS、GCP等雲服務。"},{icon:"analysis",class:"bg-gray-800",title:"架構安全規劃",description:"協助企業規劃整體網路架構，提供安全系統部署、安全評估、滲透測試、安全監控，保障您的資料安全。"},{icon:"analysis",class:"bg-gray-800",title:"安全評估服務",description:"協助企業規劃整體網路架構，提供安全系統部署、安全評估、滲透測試、安全監控，保障您的資料安全。"},{icon:"analysis",class:"bg-gray-800",title:"滲透測試服務",description:"協助企業規劃整體網路架構，提供安全系統部署、安全評估、滲透測試、安全監控，保障您的資料安全。"},{icon:"analysis",class:"bg-gray-800",title:"安全系統部署",description:"協助企業規劃整體網路架構，提供安全系統部署、安全評估、滲透測試、安全監控，保障您的資料安全。"}],testimonials:[{image:"storage/chang.jpg",comment:"線上系統整合Cyber Tech的安全服務，有效阻絕了外部攻擊，節省下不少部署成本。",position:"Chang ,Aux Tech, PH",title:"IT Manager"},{image:"storage/nick.jpg",comment:"購買了安全評估項目，團隊提供了很多幫助，幫了大忙。",position:"Nick ,Firefox Tech, PH",title:"Devop"}],heros:[{name:"Len",image:"storage/chang.jpg",title:"CIO"},{name:"Aga",image:"storage/chang.jpg",title:"IT Manager"},{name:"Lee Lim",image:"storage/chang.jpg",title:"Network Architect"},{name:"Liew",image:"storage/chang.jpg",title:"System engineer"}]}}},m=Object(i.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{staticClass:"invisible block relative",staticStyle:{top:"-5rem"},attrs:{id:"services"}}),t._v(" "),s("section",{staticClass:"pb-20 bg-gray-300 -mt-24"},[s("div",{staticClass:"container mx-auto px-4"},[s("div",{staticClass:"flex flex-wrap"},[t._l(t.services,(function(e,a){return s("div",{key:a,staticClass:"pt-6 w-full lg:w-1/3 px-4 text-center",class:{"lg:pt-12":a%3!=1}},[s("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[s("div",{staticClass:"px-4 py-5 flex-auto"},[s("div",{staticClass:"tracking-normal text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full",class:e.class},[s("icon",{staticClass:"w-5 h-5 fill-current text-white flex-shrink-0",attrs:{name:e.icon}})],1),t._v(" "),s("h6",{staticClass:"text-xl font-semibold"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"mt-2 leading-relaxed mb-4 text-gray-600"},[t._v(t._s(e.description))])])])])})),t._v(" "),s("h1",{staticClass:"sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-6 w-full text-center"},[t._v("用戶評價")]),t._v(" "),t._l(t.testimonials,(function(e){return s("div",{staticClass:"w-full h-full px-4 lg:w-1/2 mb-8"},[s("div",{staticClass:"h-full bg-white shadow-lg p-6 rounded-lg"},[s("svg",{staticClass:"block w-5 h-5 text-gray-400 mb-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 975.036 975.036"}},[s("path",{attrs:{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"}})]),t._v(" "),s("p",{staticClass:"leading-relaxed mb-6"},[t._v(t._s(e.comment))]),t._v(" "),s("a",{staticClass:"inline-flex items-center"},[s("img",{staticClass:"w-12 h-12 rounded-full flex-shrink-0 object-cover object-center",attrs:{alt:"testimonial",src:e.image}}),t._v(" "),s("span",{staticClass:"flex-grow flex flex-col pl-4"},[s("span",{staticClass:"title-font font-medium text-gray-900"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"text-gray-500 text-sm"},[t._v(t._s(e.position))])])])])])}))],2)])]),t._v(" "),s("a",{staticClass:"invisible block relative",staticStyle:{top:"-5rem"},attrs:{id:"aboutus"}}),t._v(" "),s("section",{staticClass:"relative py-20 bg-white text-gray-700 body-font"},[s("div",{staticClass:"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden",staticStyle:{height:"80px",transform:"translateZ(0px)"}},[s("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[s("polygon",{staticClass:"fill-current text-white",attrs:{points:"2560 0 2560 100 0 100"}})])]),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"pb-20 bg-white"},[s("div",{staticClass:"container mx-auto px-4"},[t._m(1),t._v(" "),s("div",{staticClass:"flex flex-wrap"},t._l(t.heros,(function(e,a){return s("div",{staticClass:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"},[s("div",{staticClass:"px-6"},[s("img",{staticClass:"shadow-lg rounded-full max-w-full mx-auto",staticStyle:{"max-width":"120px"},attrs:{src:e.image,alt:"..."}}),t._v(" "),s("div",{staticClass:"pt-6 text-center"},[s("h5",{staticClass:"text-xl font-bold"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"mt-1 text-sm text-gray-600 uppercase font-semibold"},[t._v(t._s(e.title))])])])])})),0)])]),t._v(" "),s("a",{staticClass:"invisible block relative",staticStyle:{top:"-5rem"},attrs:{id:"contactus"}}),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container px-5 mx-auto"},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"},[this._v("Cyber Tech")]),this._v(" "),e("p",{staticClass:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},[this._v("Cyber Tech 以安全技術為核心、以服務客戶為動力的技術公司。地點分佈在台灣、菲律賓等地，專注軟體和技術方案出口，支持和服務帶牌照的第三方國家客戶，業務涉及遊戲、APP、軟體、數據服務、雲計算等領域。集團重視技術發展：鼓勵員工熱愛技術、專研技術，營造技術氛圍，認可技術成果，尊重科技人才。")]),this._v(" "),e("div",{staticClass:"flex mt-6 justify-center"},[e("div",{staticClass:"w-16 h-1 rounded-full bg-indigo-500 inline-flex"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mb-12"},[e("h1",{staticClass:"sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"},[this._v("我們的團隊")]),this._v(" "),e("p",{staticClass:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},[this._v("我們重視企業的安全防護，在安全領域上已耕芸數十年，團隊成員專精多種企業應用級防護，為客戶提供實時監控及最好的用戶體驗。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"text-gray-700 body-font relative"},[s("div",{staticClass:"absolute inset-0 bg-gray-300"},[s("iframe",{staticStyle:{filter:"grayscale(1) contrast(1.2) opacity(0.4)"},attrs:{width:"100%",height:"100%",frameborder:"0",marginheight:"0",marginwidth:"0",title:"map",scrolling:"no",src:"https://maps.google.com/maps?width=100%&height=600&hl=en&q=Taipei&ie=UTF8&t=&z=14&iwloc=B&output=embed"}})]),t._v(" "),s("div",{staticClass:"px-5 py-24 mx-auto flex"},[s("div",{staticClass:"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"},[s("h2",{staticClass:"text-gray-900 text-lg mb-1 font-medium title-font"},[t._v("聯系我們")]),t._v(" "),s("p",{staticClass:"leading-relaxed mb-5 text-gray-600"},[t._v("歡迎來信諮詢，我們很樂意解決您的問題。")]),t._v(" "),s("input",{staticClass:"bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4",attrs:{placeholder:"Email",type:"email"}}),t._v(" "),s("textarea",{staticClass:"bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none",attrs:{placeholder:"Message"}}),t._v(" "),s("button",{staticClass:"btn-indigo"},[t._v("送出")])])])])}],!1,null,null,null);e.default=m.exports}}]);
//# sourceMappingURL=1.js.map?id=0069288936cd39dae557