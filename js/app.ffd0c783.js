(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/minis-wishes/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var h=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0ce0":function(e){e.exports=JSON.parse('{"ru":{"apple":"Яблоко","avocado":"Авокадо","banana":"Банан","banknote":"Курс рубля","beer":"Пиво","biscuit":"Бисквит","bong":"Саксофон","broccoli":"Брокколи","burrito":"Шаурма","chicken":"Курочка","clown":"Клоун","coconut":"Кокос","coffee":"Кофе","donut":"Пончик","duck":"Уточка","dumplings":"Пельмени","guitar2":"Гитара","horse":"Конык","kiwi":"Киви","marijuana":"Звезда","medicine":"Успокоительные","orange":"Апельсин","plant":"Растение","prawn":"Креветка","robot":"Секс-машина","seal":"Тюлень","shamrock":"Клевер","strawberry":"Клубничка","tulip":"Тюльман","unicorn":"Единорог"},"en":{"apple":"Apple","avocado":"Avocado","banana":"Banana","banknote":"Banknote","beer":"Beer","biscuit":"Biscuit","bong":"Bong","broccoli":"Broccoli","burrito":"Burrito","chicken":"Chicken","clown":"Clown","coconut":"Coconut","coffee":"Coffee","donut":"Donut","duck":"Duck","dumplings":"Dumplings","guitar2":"Guitar","horse":"Horse","kiwi":"Kiwi","marijuana":"Marijuana","medicine":"Medicine","orange":"Orange","plant":"Plant","prawn":"Prawn","robot":"Robot","seal":"Seal","shamrock":"Shamrock","strawberry":"Strawberry","tulip":"Tulip","unicorn":"Unicorn"}}')},2528:function(e,t,i){},3433:function(e,t,i){"use strict";i("2528")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("c4d1");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",class:{fullscreen:e.isFullscreen},style:{height:e.innerHeight+"px",maxWidth:e.isDesktop?e.containerWidth+"px":"100vw",maxHeight:e.isDesktop?e.containerHeight+"px":"100vh"}},[i("Icon",{staticClass:"woman",attrs:{type:"woman-head",size:22}}),e.isPageLoad?i("div",{staticClass:"minis__wrapper"},[e.isDesktop?i("SettingsDesktop",{attrs:{themeIcon:e.themeMain.icon,appHeight:e.appHeight,appWidth:e.appWidth,translate:e.translate,translateDef:e.translateDef},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:e.switchFullscreen},model:{value:e.isClosedSettings,callback:function(t){e.isClosedSettings=t},expression:"isClosedSettings"}}):e._e(),i("LayoutContent",{ref:"layoutContent",style:{filter:e.openedModalName?"blur(2px)":"none"},attrs:{appWidth:e.appWidth,appHeight:e.appHeight,bodyHeight:e.innerHeight,isDesktop:e.isDesktop,isWidthMore768:e.isWidthMore768},on:{switchSettings:function(t){e.isClosedSettings=!e.isClosedSettings},openModal:function(t){e.openedModalName=t}}}),i("AppModal",{attrs:{isRoundedBorder:e.isWidthMore768&&!e.isFullscreen},model:{value:e.openedModalName,callback:function(t){e.openedModalName=t},expression:"openedModalName"}},["settings"==e.openedModalName?i("SettingsMobile",{attrs:{themeIcon:e.themeMain.icon,isWidthMore768:e.isWidthMore768},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:e.switchFullscreen}}):e._e(),"wish"==e.openedModalName?i("div",{staticStyle:{"text-align":"center"},domProps:{textContent:e._s(e.lodash.get(e.wishes,e.changedWish.textId,e.translateErrorMessage))}}):e._e()],1),e.isDesktop?i("div",{staticClass:"resize_button",on:{mousedown:function(t){return t.preventDefault(),e.startResize.apply(null,arguments)},dblclick:function(t){return t.preventDefault(),e.autoResize.apply(null,arguments)}}}):e._e(),e.isDesktop?i("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"},domProps:{textContent:e._s("Minis")}}):e._e()],1):i("AppLoader",{attrs:{size:100,rotate:""}})],1)},a=[],o=i("5530"),r=i("2ef0"),c=i.n(r),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"minis__content",style:{minHeight:e.appHeight+"px",gridTemplateRows:e.gridTemplateRows}},[i("div",{staticClass:"minis__header",style:{cursor:e.isNotChagedSlide?"pointer":"default",fontSize:e.isNotChagedSlide?"20px":"24px"},on:{click:function(t){e.isNotChagedSlide&&e.slideToChangedWish()}}},[i("span",{domProps:{textContent:e._s(e.headerText)}}),e.isNotChagedSlide?i("span",{staticStyle:{color:"var(--text-color)","margin-left":".25em"},domProps:{textContent:e._s(e.translate("display.description"))}}):e._e()]),i("div",{staticClass:"minis__display"},[i("div",{staticClass:"minis__body"},[i("LayoutWish",{ref:"layoutWish",attrs:{appWidth:e.appWidth,bodyHeight:e.bodyHeight,changedWish:e.changedWish,wishesTypes:e.wishesTypes,wishesTypesList:e.wishesTypesList,slideStartIndex:e.lodash.indexOf(e.wishesTypesList,e.wishType),wishType:e.wishType},on:{changeWishType:e.changeWishType,changeWish:e.changeWishHandler,openModal:function(t){return e.$emit("openModal",t)}}})],1),i("div",{staticClass:"minis__footer"},[i("div",{staticClass:"minis__button minis__button-change",attrs:{disabled:e.checkTime},domProps:{textContent:e._s(e.checkTimeFormat||e.translateDef("change"))},on:{click:function(t){return t.preventDefault(),e.changeWishHandler.apply(null,arguments)}}}),e.isDesktop?e._e():i("div",{staticClass:"minis__button minis__button-settings",on:{click:function(t){return e.$emit("openModal","settings")}}},[i("Icon",{attrs:{type:"settings"}})],1)])])])},h=[],d=i("1da1"),p=(i("96cf"),i("a9e3"),i("d3b7"),i("99af"),i("4d90"),i("25f0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout swiper-horizontal",attrs:{id:"layout-wish"}},[i("div",{staticClass:"display"},[e.lodash.size(e.wishesTypes)?i("Swiper",{ref:"swiper",attrs:{loop:""},on:{activeIndexChange:e.activeIndexChange}},e._l(e.lodash.entries(e.wishesTypes),(function(t){var n=t[0],s=t[1];return i("SwiperSlide",{key:n},[i("DisplayWish",{attrs:{text:s,icon:n,open:n==e.changedWish.type,isHideDisplayDescription:e.changedWish.type&&n!==e.changedWish.type},on:{click:function(t){return e.$emit("changeWish")},openModal:function(t){return e.$emit("openModal",t)}}})],1)})),1):e._e()],1),i("SlideButtons",{on:{slidePrev:function(t){return e.lodash.invoke(e.swiperRef,"slidePrev")},slideNext:function(t){return e.lodash.invoke(e.swiperRef,"slideNext")}}})],1)}),u=[],f=i("d7cf"),g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",on:{click:function(t){return e.$emit("click")}}},[i("div",{staticClass:"container__image",class:{open:e.open},attrs:{icon:e.icon}},[i("img",{attrs:{src:"./icons/"+e.icon+".png"}}),i("img",{attrs:{src:"./icons/"+e.icon+".png"}}),i("div",{staticClass:"container__wish"},[i("span",[i("Icon",{attrs:{type:"gift",size:40},on:{click:function(t){return e.$emit("openModal","wish")}}})],1)]),i("div",{staticClass:"container__text"},[i("span",{domProps:{textContent:e._s(e.text)}}),e.isHideDisplayDescription?e._e():i("span",{staticStyle:{color:"var(--text-color)"},domProps:{textContent:e._s(e.translate("display.description"))}})])])])},m=[],w=i("b54a"),y=i("1c09"),v={name:"DisplayWish",mixins:[y["e"]],components:{Icon:w["c"]},props:{text:String,icon:String,open:Boolean,isHideDisplayDescription:Boolean}},b=v,k=(i("ec08"),i("2877")),x=Object(k["a"])(b,g,m,!1,null,"7959718c",null),T=x.exports,S={name:"LayoutWish",components:{Swiper:f["Swiper"],SwiperSlide:f["SwiperSlide"],SlideButtons:w["f"],DisplayWish:T},props:{appWidth:Number,bodyHeight:Number,changedWish:Object,slideStartIndex:Number,wishesTypes:Object,wishesTypesList:Array,wishType:String},data:function(){return{lodash:c.a,swiperRef:null,slideHeight:0,slideLength:0,slideIndex:0}},watch:{appWidth:["setSlideHeight","setSlidesSize"],slideIndex:"setSlidesSize",bodyHeight:{immediate:!0,handler:"setSlideHeight"},wishesTypes:{deep:!0,handler:"init"}},computed:{isEnd:function(){var e,t=!this.wishesTypesList.length,i=this.slideIndex===this.slideLength-1;return!(null===(e=this.swiperRef)||void 0===e||!e.isEnd)||i||t},isBeginning:function(){var e,t=!this.wishesTypesList.length,i=0===this.slideIndex;return!(null===(e=this.swiperRef)||void 0===e||!e.isBeginning)||i||t}},methods:{init:function(){var e,t,i;this.swiperRef=null===(e=this.$refs.swiper)||void 0===e?void 0:e.swiperRef,this.slideLength=(null===(t=this.swiperRef)||void 0===t||null===(i=t.slides)||void 0===i?void 0:i.length)||0;var n=(this.slideStartIndex+1)%this.wishesTypesList.length;c.a.invoke(this.swiperRef,"slideTo",n,0),this.$nextTick(this.setSlidesSize)},setSlideHeight:function(){var e=this;this.$nextTick((function(){var t,i,n;e.slideHeight=null===(t=e.$refs)||void 0===t||null===(i=t.swiper)||void 0===i||null===(n=i.$el)||void 0===n?void 0:n.offsetHeight}))},setSlidesSize:function(){var e=this,t=this.appWidth-40,i="translate3d(-".concat(this.slideIndex*t,"px, 0px, 0px)"),n=document.querySelector("#layout-wish .swiper-wrapper");c.a.invoke(null===n||void 0===n?void 0:n.style,"setProperty","max-width","".concat(t,"px")),c.a.invoke(null===n||void 0===n?void 0:n.style,"setProperty","transform",i);var s=document.querySelectorAll("#layout-wish .swiper-slide");[].forEach.call(s,(function(i,n){i.style.setProperty("width","".concat(t,"px")),c.a.set(e.swiperRef,"slidesGrid[".concat(n,"]"),n*t),c.a.set(e.swiperRef,"snapGrid[".concat(n,"]"),n*t),c.a.set(e.swiperRef,"slidesSizesGrid[".concat(n,"]"),t)}))},activeIndexChange:function(e){var t=e.realIndex;this.slideIndex=t;var i=(t-1+this.wishesTypesList.length)%this.wishesTypesList.length;this.$emit("changeWishType",this.wishesTypesList[i])}},mounted:function(){this.init()}},W=S,_=(i("3433"),Object(k["a"])(W,p,u,!1,null,"3353feb9",null)),C=_.exports,O=i("2f62"),j={name:"LayoutContent",mixins:[y["e"]],components:{Icon:w["c"],LayoutWish:C},props:{appWidth:Number,appHeight:Number,bodyHeight:Number,isDesktop:Boolean,isWidthMore768:Boolean},data:function(){return{lodash:c.a,checkTime:null}},watch:{minisLang:{immediate:!0,handler:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./wishes.".concat(t,".json")).then((function(e){return e.json()}));case 3:i=e.sent,this.addWishesByLang({lang:t,wishes:i}),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(O["b"])(["wishes","wishesTypes","wishesTypesList","maxWishesLength"])),Object(O["d"])(["wishType","changedWish"])),{},{gridTemplateRows:function(){var e=Math.min(.1*this.appHeight,60),t=this.appHeight-e;return"".concat(e,"px ").concat(t,"px")},checkTimeFormat:function(){if(this.checkTime){var e=(new Date).getTimezoneOffset()/60,t=(new Date(this.checkTime).getHours()+e).toString().padStart(2,0),i=new Date(this.checkTime).getMinutes().toString().padStart(2,0),n=new Date(this.checkTime).getSeconds().toString().padStart(2,0);return"".concat(t,":").concat(i,":").concat(n)}},isNotChagedSlide:function(){return this.changedWish.type&&this.wishType!==this.changedWish.type},headerText:function(){var e=c.a.get(this.wishesTypes,this.changedWish.type);return this.isNotChagedSlide?e:this.translate("header")+":"}}),methods:Object(o["a"])(Object(o["a"])({},Object(O["c"])(["changeWishType","changeWish","addWishesByLang"])),{},{changeWishHandler:function(){if(!this.checkTime){var e=this.wishesTypesList.length,t=c.a.indexOf(this.wishesTypesList,this.wishType),i=this.wishesTypesList[t%e];this.changeWish({type:i,textId:c.a.random(0,this.maxWishesLength),time:Date.now()+60*(new Date).getTimezoneOffset()*1e3})}},slideToChangedWish:function(){var e=this.$refs.layoutWish.swiperRef,t=c.a.indexOf(this.wishesTypesList,this.changedWish.type),i=(t+1)%this.wishesTypesList.length;c.a.invoke(e,"slideTo",i)},keydown:function(e){var t=e.key;e.shiftKey;switch(t){case"Escape":this.$emit("switchSettings");break;case"ArrowLeft":c.a.invoke(this.$refs.layoutWish,"swiperRef.slidePrev");break;case"ArrowRight":c.a.invoke(this.$refs.layoutWish,"swiperRef.slideNext");break;case" ":this.changeWishHandler();break}}}),beforeMount:function(){var e=this;document.addEventListener("keydown",this.keydown),setInterval((function(){requestAnimationFrame((function(){var t,i=Date.now()-144e5+60*(new Date).getTimezoneOffset()*1e3;e.checkTime=i<e.changedWish.time?e.changedWish.time-i+1e3:null,!e.checkTime&&null!==(t=e.changedWish)&&void 0!==t&&t.type&&e.changeWish({type:null,time:null,textId:null})}))}),100)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}},L=j,M=(i("e133"),Object(k["a"])(L,l,h,!1,null,null,null)),D=M.exports,H={components:{LayoutContent:D,AppModal:w["b"],SettingsDesktop:w["d"],SettingsMobile:w["e"],AppLoader:w["a"],Icon:w["c"]},mixins:[y["b"],y["d"],y["a"],y["e"]],data:function(){return{lodash:c.a,isClosedSettings:!0,openedModalName:null}},watch:{isDesktop:function(e){e&&"settings"==this.openedModalName&&(this.openedModalName=null,this.isClosedSettings=!1)},changedWish:{deep:!0,handler:function(e){e.time||"settings"!=this.openedModalName&&(this.openedModalName=null)}}},computed:Object(o["a"])(Object(o["a"])({},Object(O["d"])(["changedWish"])),Object(O["b"])(["wishes"])),methods:Object(o["a"])({},Object(O["c"])(["switchFullscreen"])),beforeMount:function(){var e=this;document.body.addEventListener("click",(function(t){document.body===t.path[0]&&e.isDesktop&&(e.isClosedSettings||(e.isClosedSettings=!0))}))}},N=H,I=(i("5c0b"),Object(k["a"])(N,s,a,!1,null,null,null)),R=I.exports,P=i("9483");Object(P["a"])("".concat("/minis-wishes/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var $=i("2909"),B=i("8468"),z=i("ade3"),F=(i("a15b"),i("fb6a"),i("ac1f"),i("1276"),i("ddb0"),i("0e44")),A=i("0759"),E=i.n(A),q=i("0ce0"),G=location.pathname.split("/")[1].split("-").slice(1).join("-"),J="".concat(G,"-isFullscreen"),K={};n["default"].use(O["a"]),K.state=function(){var e;return e={},Object(z["a"])(e,J,!1),Object(z["a"])(e,"projectKey",G),Object(z["a"])(e,"wishes",{}),Object(z["a"])(e,"wishesTypes",q),Object(z["a"])(e,"wishType","prawn"),Object(z["a"])(e,"changedWish",{textId:null,type:null,time:null}),e},K.getters={isFullscreen:function(e){return e[J]},wishes:function(e){var t=e.wishes,i=e.minis.minisLang;return c.a.get(t,i,[])},wishesTypes:function(e){var t=e.wishesTypes,i=e.minis.minisLang;return c.a.get(t,i,{})},wishesTypesList:function(e,t){Object(B["a"])(e);var i=t.wishesTypes;return c.a.keys(i)},maxWishesLength:function(e){var t=e.wishes;return c.a.chain(t).mapValues(c.a.size).values().max().value()}},K.mutations={switchFullscreen:function(e){return n["default"].set(e,J,!e[J])},changeWishType:function(e,t){return n["default"].set(e,"wishType",t)},changeWish:function(e,t){return n["default"].set(e,"changedWish",t)},addWishesByLang:function(e,t){var i=t.wishes,s=t.lang;c.a.size(e.wishes[s])||n["default"].set(e.wishes,s,i)}};var U=[J,"wishType","changedWish"];K.modules={minis:y["f"]},K.plugins=[E()({predicate:function(){return[].concat(Object($["a"])(y["c"]),U)}}),Object(F["a"])({paths:y["c"],key:"minis"}),Object(F["a"])({paths:U,key:"minis-".concat(G)})];var V=new O["a"].Store(K);n["default"].config.productionTip=!1,new n["default"]({store:V,render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"9c0c":function(e,t,i){},c4a1:function(e,t,i){},e133:function(e,t,i){"use strict";i("eed6")},ec08:function(e,t,i){"use strict";i("c4a1")},eed6:function(e,t,i){}});
//# sourceMappingURL=app.ffd0c783.js.map