(self.webpackChunk=self.webpackChunk||[]).push([[518],{7757:(t,e,r)=>{t.exports=r(5666)},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new F(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return U()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=P(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?m:p,l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",h="executing",m="completed",f={};function y(){}function g(){}function v(){}var w={};l(w,a,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(j([])));_&&_!==r&&n.call(_,a)&&(w=_);var b=v.prototype=y.prototype=Object.create(w);function N(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:U}}function U(){return{value:e,done:!0}}return g.prototype=v,l(b,"constructor",v),l(v,"constructor",g),g.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},N(L.prototype),l(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},9951:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(821),o=["width","height"],a=[(0,n._)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),(0,n._)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),(0,n._)("g",{id:"SVGRepo_iconCarrier"},[(0,n._)("path",{d:"M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0 L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29 h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"})],-1)];const i={name:"IconBack",props:{width:{type:String,required:!0},height:{type:String,required:!0}}};const c=(0,r(3744).Z)(i,[["render",function(t,e,r,i,c,l){return(0,n.wg)(),(0,n.iD)("svg",{fill:"#4f46e5",xmlns:"http://www.w3.org/2000/svg",width:r.width,height:r.height,viewBox:"0 0 52.00 52.00","enable-background":"new 0 0 52 52","xml:space":"preserve",stroke:"#4f46e5","stroke-width":"0.9359999999999999"},a,8,o)}]])},9518:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>G});var n=r(821),o={className:"bg-indigo-50 min-h-screen md:px-20 pt-6"},a={className:" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto"},i=(0,n._)("h1",{className:"text-center text-2xl font-bold text-gray-500 mb-10"}," Edit ",-1),c={className:"space-y-4"},l=(0,n._)("label",{htmlFor:"productName",className:"text-lx font-serif"}," Product Name:",-1),u=(0,n._)("label",{htmlFor:"pharmacyname",className:"text-lx font-serif"},"Pharmacy Name:",-1),s=(0,n._)("label",{htmlFor:"location",className:"text-lx font-serif"},"Location:",-1),d=(0,n._)("label",{htmlFor:"price",className:"text-lx font-serif"},"Price:",-1),p=(0,n._)("label",{htmlFor:"disease",className:"text-lx font-serif"},"Disease:",-1),h=(0,n._)("label",{htmlFor:"contact",className:"text-lx font-serif"},"Contact:",-1),m=(0,n._)("label",{className:"text-lx font-serif"},"Add image:",-1),f={key:0},y=["src"],g=(0,n._)("br",null,null,-1),v={key:1},w=["src"],x=(0,n._)("br",null,null,-1),_=(0,n._)("label",{htmlFor:"description",className:"block mb-2 text-lg font-serif"},"Description:",-1),b=(0,n._)("button",{className:" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "}," EDIT PRODUCT ",-1);var N=r(7757),L=r.n(N),P=r(3907),k=r(2119),E=r(9669),F=r.n(E),j=r(9951),U=r(4155);function O(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function S(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){O(a,n,o,i,c,"next",t)}function c(t){O(a,n,o,i,c,"throw",t)}i(void 0)}))}}const D={components:{IconBack:j.Z},setup:function(){var t=(0,P.oR)(),e=(0,k.yj)().params.id,r=(0,n.qj)({imageData:null,imageUrl:"",imageName:null,btnState:"upload",product_name:"",Pharmacy_name:"",location:"",price:"",disease:"",descprition:"",contact:"",imageFile:null});return(0,n.bv)(S(L().mark((function t(){var n;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F().get("".concat(U.env.MIX_APP_URL,"/api/products/").concat(e));case 2:n=t.sent,r.product_name=n.data.product_name,r.Pharmacy_name=n.data.Pharmacy_name,r.location=n.data.location,r.price=n.data.price,r.disease=n.data.disease,r.descprition=n.data.descprition,r.contact=n.data.contact,r.imageUrl=n.data.image_url;case 11:case"end":return t.stop()}}),t)})))),{previewImage:function(t){var e=t.target.files[0];r.imageName=e.name,r.imageFile=e;var n=new FileReader;n.readAsDataURL(e),n.onload=function(t){r.imageData=t.target.result}},state:r,updateProduct:function(){return t.dispatch("products/updateProduct",{id:e,product_name:r.product_name,Pharmacy_name:r.Pharmacy_name,location:r.location,price:r.price,disease:r.disease,descprition:r.descprition,contact:r.contact,image_url:r.imageUrl,imageFile:r.imageFile})}}}};const G=(0,r(3744).Z)(D,[["render",function(t,e,r,N,L,P){var k=(0,n.up)("IconBack"),E=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[8]||(e[8]=(0,n.iM)((function(){return N.updateProduct&&N.updateProduct.apply(N,arguments)}),["prevent"])),method:"POST"},[(0,n._)("div",o,[(0,n._)("div",null,[(0,n.Wm)(E,{to:"/dashboard"},{default:(0,n.w5)((function(){return[(0,n.Wm)(k,{width:"30px",height:"25px",class:"cursor-pointer"})]})),_:1})]),(0,n._)("div",a,[i,(0,n._)("div",c,[(0,n._)("div",null,[l,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Medicine Name",id:"productName",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[0]||(e[0]=function(t){return N.state.product_name=t})},null,512),[[n.nr,N.state.product_name]])]),(0,n._)("div",null,[u,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Pharmacy",id:"pharmacyname",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[1]||(e[1]=function(t){return N.state.Pharmacy_name=t})},null,512),[[n.nr,N.state.Pharmacy_name]])]),(0,n._)("div",null,[s,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Location",id:"location",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[2]||(e[2]=function(t){return N.state.location=t})},null,512),[[n.nr,N.state.location]])]),(0,n._)("div",null,[d,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"UGX",id:"price",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[3]||(e[3]=function(t){return N.state.price=t})},null,512),[[n.nr,N.state.price]])]),(0,n._)("div",null,[p,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"",id:"disease",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[4]||(e[4]=function(t){return N.state.disease=t})},null,512),[[n.nr,N.state.disease]])]),(0,n._)("div",null,[h,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Phone Number",id:"contact",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[5]||(e[5]=function(t){return N.state.contact=t})},null,512),[[n.nr,N.state.contact]])]),(0,n._)("div",null,[m,(0,n._)("input",{type:"file",accept:"image/*",onChange:e[6]||(e[6]=function(){return N.previewImage&&N.previewImage.apply(N,arguments)}),className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"},null,32)]),N.state.imageData?((0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("img",{height:"268",width:"356",src:N.state.imageData},null,8,y),g])):((0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("img",{height:"268",width:"356",src:"".concat(N.state.imageUrl)},null,8,w),x])),(0,n._)("div",null,[_,(0,n.wy)((0,n._)("textarea",{id:"description",cols:"{30}",rows:"{10}",placeholder:"Type here",className:"w-full font-serif\n                        p-4 text-gray-600 bg-indigo-50 outline-none rounded-md","onUpdate:modelValue":e[7]||(e[7]=function(t){return N.state.descprition=t})},null,512),[[n.nr,N.state.descprition]])]),b])])])],32)}]])}}]);