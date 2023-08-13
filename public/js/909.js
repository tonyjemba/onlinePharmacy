/*! For license information please see 909.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[909],{3909:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var r=n(821),o={className:"bg-indigo-50 min-h-screen md:px-20 pt-6"},i={className:" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto"},s=(0,r._)("h1",{className:"text-center text-2xl font-bold text-gray-500 mb-10"}," Edit ",-1),a={className:"space-y-4"},c=(0,r._)("label",{htmlFor:"productName",className:"text-lx font-serif"}," Service Name:",-1),u=(0,r._)("label",{htmlFor:"pharmacyname",className:"text-lx font-serif"},"Pharmacy Name:",-1),l=(0,r._)("label",{htmlFor:"location",className:"text-lx font-serif"},"Location:",-1),h=(0,r._)("label",{htmlFor:"price",className:"text-lx font-serif"},"Price:",-1),d=(0,r._)("label",{htmlFor:"disease",className:"text-lx font-serif"},"Disease:",-1),p=(0,r._)("label",{htmlFor:"contact",className:"text-lx font-serif"},"Contact:",-1),f=(0,r._)("label",{className:"text-lx font-serif"},"Add image:",-1),m={key:0},g=["src"],_=(0,r._)("br",null,null,-1),y=(0,r._)("label",{htmlFor:"description",className:"block mb-2 text-lg font-serif"},"Description:",-1),v=(0,r._)("button",{className:" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "}," EDIT SERVICE ",-1);var b=n(6650),w=n(3907),x=n(2201),k=n(9669),R=n.n(k);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function S(){S=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof d?e:d,s=Object.create(i.prototype),a=new O(o||[]);return r(s,"_invoke",{value:w(t,n,a)}),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function d(){}function p(){}function f(){}var m={};c(m,i,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(P([])));_&&_!==e&&n.call(_,i)&&(m=_);var y=f.prototype=d.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(r,i,s,a){var c=l(t[r],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==T(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,s,a)}),(function(t){o("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,a)}))}a(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=x(s,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,r(y,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(b.prototype),c(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var s=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},v(y),c(y,a,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function O(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function P(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){O(i,r,o,s,a,"next",t)}function a(t){O(i,r,o,s,a,"throw",t)}s(void 0)}))}}const C={setup:function(){var t=(0,w.oR)(),e=(0,x.yj)().params.id,n=(0,r.qj)({imageData:null,imageUrl:"",imageName:null,btnState:"upload",service_name:"",Pharmacy_name:"",location:"",price:"",disease:"",descprition:"",contact:""});(0,r.bv)(P(S().mark((function t(){var r;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R().get("https://online-pharmacy-project.herokuapp.com/api/services/"+"".concat(e));case 2:r=t.sent,n.service_name=r.data.service_name,n.Pharmacy_name=r.data.Pharmacy_name,n.location=r.data.location,n.price=r.data.price,n.disease=r.data.disease,n.descprition=r.data.descprition,n.contact=r.data.contact,n.imageUrl=r.data.image_url;case 11:case"end":return t.stop()}}),t)}))));var o=(0,b.cF)();return{previewImage:function(t){var e=t.target.files[0];n.imageName=e.name;var r=new FileReader;r.readAsDataURL(e),r.onload=function(t){n.imageData=t.target.result}},upload:function(t){n.btnState="uploding",(0,b.sf)((0,b.iH)(o,"products/".concat(t)),n.imageData,"data_url").then((function(t){console.log(t)})).then((function(){n.btnState="uploaded",(0,b.Jt)((0,b.iH)(o,"products/".concat(t))).then((function(t){n.imageUrl=t}))}))},state:n,updateService:function(){return t.dispatch("services/updateService",{id:e,service_name:n.service_name,Pharmacy_name:n.Pharmacy_name,location:n.location,price:n.price,disease:n.disease,descprition:n.descprition,contact:n.contact,image_url:n.imageUrl})}}}};const E=(0,n(3744).Z)(C,[["render",function(t,e,n,b,w,x){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[9]||(e[9]=(0,r.iM)((function(){return b.updateService&&b.updateService.apply(b,arguments)}),["prevent"])),method:"POST"},[(0,r._)("div",o,[(0,r._)("div",i,[s,(0,r._)("div",a,[(0,r._)("div",null,[c,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Medicine Name",id:"productName",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[0]||(e[0]=function(t){return b.state.service_name=t})},null,512),[[r.nr,b.state.service_name]])]),(0,r._)("div",null,[u,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Pharmacy",id:"pharmacyname",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[1]||(e[1]=function(t){return b.state.Pharmacy_name=t})},null,512),[[r.nr,b.state.Pharmacy_name]])]),(0,r._)("div",null,[l,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Location",id:"location",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[2]||(e[2]=function(t){return b.state.location=t})},null,512),[[r.nr,b.state.location]])]),(0,r._)("div",null,[h,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"UGX",id:"price",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[3]||(e[3]=function(t){return b.state.price=t})},null,512),[[r.nr,b.state.price]])]),(0,r._)("div",null,[d,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"",id:"disease",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[4]||(e[4]=function(t){return b.state.disease=t})},null,512),[[r.nr,b.state.disease]])]),(0,r._)("div",null,[p,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Phone Number",id:"contact",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":e[5]||(e[5]=function(t){return b.state.contact=t})},null,512),[[r.nr,b.state.contact]])]),(0,r._)("div",null,[f,(0,r._)("input",{type:"file",accept:"image/*",onChange:e[6]||(e[6]=function(){return b.previewImage&&b.previewImage.apply(b,arguments)}),className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"},null,32)]),b.state.imageData?((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("img",{height:"268",width:"356",src:b.state.imageData},null,8,g),_,(0,r._)("button",{onClick:e[7]||(e[7]=(0,r.iM)((function(t){return b.upload(b.state.imageName)}),["prevent"])),className:" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "},(0,r.zw)(b.state.btnState),1)])):(0,r.kq)("",!0),(0,r._)("div",null,[y,(0,r.wy)((0,r._)("textarea",{id:"description",cols:"{30}",rows:"{10}",placeholder:"Type here",className:"w-full font-serif\n                        p-4 text-gray-600 bg-indigo-50 outline-none rounded-md","onUpdate:modelValue":e[8]||(e[8]=function(t){return b.state.descprition=t})},null,512),[[r.nr,b.state.descprition]])]),v])])])],32)}]])},6650:(t,e,n)=>{n.d(e,{Jt:()=>wt,cF:()=>kt,iH:()=>xt,sf:()=>bt});var r=n(7779),o=n(4444),i=n(8463);const s="firebasestorage.googleapis.com",a="storageBucket";class c extends o.ZR{constructor(t,e,n=0){super(u(t),`Firebase Storage: ${e} (${u(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return u(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function u(t){return"storage/"+t}function l(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function h(){return new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function d(){return new c("canceled","User canceled the upload/download.")}function p(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(t){return new c("invalid-argument",t)}function m(){return new c("app-deleted","The Firebase app was deleted.")}function g(t,e){return new c("invalid-format","String does not match format '"+t+"': "+e)}function _(t){throw new c("internal-error","Internal error: "+t)}class y{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=y.makeFromUrl(t,e)}catch(e){return new y(t,"")}if(""===n.path)return n;throw new c("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function i(t){t.path_=decodeURIComponent(t.path)}const a=e.replace(/[.]/g,"\\."),u=[{regex:o,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let e=0;e<u.length;e++){const r=u[e],o=r.regex.exec(t);if(o){const t=o[r.indices.bucket];let e=o[r.indices.path];e||(e=""),n=new y(t,e),r.postModify(n);break}}if(null==n)throw function(t){return new c("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class v{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}function b(t){return"string"==typeof t||t instanceof String}function w(t){return x()&&t instanceof Blob}function x(){return"undefined"!=typeof Blob&&!(0,o.UG)()}function k(t,e,n,r){if(r<e)throw f(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw f(`Invalid value for '${t}'. Expected ${n} or less.`)}function R(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function T(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){n=n+(e(r)+"="+e(t[r]))+"&"}return n=n.slice(0,-1),n}var S;function O(t,e){const n=t>=500&&t<600,r=-1!==[408,429].indexOf(t),o=-1!==e.indexOf(t);return n||r||o}!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(S||(S={}));class P{constructor(t,e,n,r,o,i,s,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new C(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===S.NO_ERROR,o=n.getStatus();if((!e||O(o,this.additionalRetryCodes_))&&this.retry){const e=n.getErrorCode()===S.ABORT;return void t(!1,new C(!1,null,e))}const i=-1!==this.successCodes_.indexOf(o);t(!0,new C(i,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,o=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(o,o.getResponse());void 0!==t?n(t):n()}catch(t){r(t)}else if(null!==o){const t=l();t.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,t)):r(t)}else if(e.canceled){r(this.appDelete_?m():d())}else{r(h())}};this.canceled_?e(0,new C(!1,null,!0)):this.backoffId_=function(t,e,n){let r=1,o=null,i=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){o=setTimeout((()=>{o=null,t(p,c())}),e)}function d(){i&&clearTimeout(i)}function p(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);if(c()||s)return d(),void l.call(null,t,...e);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function m(t){f||(f=!0,d(),u||(null!==o?(t||(a=2),clearTimeout(o),h(0)):t||(a=1)))}return h(0),i=setTimeout((()=>{s=!0,m(!0)}),n),m}(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class C{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function E(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function N(...t){const e=E();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(x())return new Blob(t);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}function U(t){if("undefined"==typeof atob)throw new c("unsupported-environment",`${"base-64"} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);return atob(t)}const I="raw",L="base64",A="base64url",F="data_url";class j{constructor(t,e){this.data=t,this.contentType=e||null}}function B(t,e){switch(t){case I:return new j(D(e));case L:case A:return new j(M(t,e));case F:return new j(function(t){const e=new q(t);return e.base64?M(L,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw g(F,"Malformed data URL.")}return D(e)}(e.rest)}(e),new q(e).contentType)}throw l()}function D(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&t.charCodeAt(++n),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function M(t,e){switch(t){case L:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){throw g(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case A:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){throw g(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=U(e)}catch(e){if(e.message.includes("polyfill"))throw e;throw g(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);return r}class q{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw g(F,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=function(t,e){if(!(t.length>=e.length))return!1;return t.substring(t.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class ${constructor(t,e){let n=0,r="";w(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(w(this.data_)){const n=function(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}(this.data_,t,e);return null===n?null:new $(n)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new $(n,!0)}}static getBlob(...t){if(x()){const e=t.map((t=>t instanceof $?t.data_:t));return new $(N.apply(null,e))}{const e=t.map((t=>b(t)?B(I,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let o=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[o++]=t[e]})),new $(r,!0)}}uploadData(){return this.data_}}function z(t){let e;try{e=JSON.parse(t)}catch(t){return null}return"object"!=typeof(n=e)||Array.isArray(n)?null:e;var n}function G(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}function V(t,e){return e}class H{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||V}}let X=null;function W(){if(X)return X;const t=[];t.push(new H("bucket")),t.push(new H("generation")),t.push(new H("metageneration")),t.push(new H("name","fullPath",!0));const e=new H("name");e.xform=function(t,e){return function(t){return!b(t)||t.length<2?t:G(t)}(e)},t.push(e);const n=new H("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new H("timeCreated")),t.push(new H("updated")),t.push(new H("md5Hash",null,!0)),t.push(new H("cacheControl",null,!0)),t.push(new H("contentDisposition",null,!0)),t.push(new H("contentEncoding",null,!0)),t.push(new H("contentLanguage",null,!0)),t.push(new H("contentType",null,!0)),t.push(new H("metadata","customMetadata",!0)),X=t,X}function K(t,e,n){const r={type:"file"},o=n.length;for(let t=0;t<o;t++){const o=n[t];r[o.local]=o.xform(r,e[o.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,r=t.fullPath,o=new y(n,r);return e._makeStorageReference(o)}})}(r,t),r}function J(t,e,n){const r=z(e);if(null===r)return null;return K(t,r,n)}function Z(t,e){const n={},r=e.length;for(let o=0;o<r;o++){const r=e[o];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class Y{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function Q(t){if(!t)throw l()}function tt(t,e){return function(n,r){const o=J(t,r,e);return Q(null!==o),o}}function et(t,e){return function(n,r){const o=J(t,r,e);return Q(null!==o),function(t,e,n,r){const o=z(e);if(null===o)return null;if(!b(o.downloadTokens))return null;const i=o.downloadTokens;if(0===i.length)return null;const s=encodeURIComponent;return i.split(",").map((e=>{const o=t.bucket,i=t.fullPath;return R("/b/"+s(o)+"/o/"+s(i),n,r)+T({alt:"media",token:e})}))[0]}(o,r,t.host,t._protocol)}}function nt(t){return function(e,n){let r;var o,i;return 401===e.getStatus()?r=e.getErrorText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(i=t.bucket,r=new c("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(o=t.path,r=new c("unauthorized","User does not have permission to access '"+o+"'.")):r=n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}}function rt(t){const e=nt(t);return function(n,r){let o=e(n,r);var i;return 404===n.getStatus()&&(i=t.path,o=new c("object-not-found","Object '"+i+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function ot(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),r}function it(t,e,n,r,o){const i=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();s["Content-Type"]="multipart/related; boundary="+a;const c=ot(e,r,o),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Z(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=$.getBlob(u,r,l);if(null===h)throw p();const d={name:c.fullPath},f=R(i,t.host,t._protocol),m=t.maxUploadRetryTime,g=new Y(f,"POST",tt(t,n),m);return g.urlParams=d,g.headers=s,g.body=h.uploadData(),g.errorHandler=nt(e),g}class st{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=S.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=S.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw _("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const t in r)r.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,r[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw _("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class at extends st{initXhr(){this.xhr_.responseType="text"}}function ct(){return new at}class ut{constructor(t,e){this._service=t,this._location=e instanceof y?e:y.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ut(t,e)}get root(){const t=new y(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new y(this._location.bucket,t);return new ut(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new c("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function lt(t,e,n){t._throwIfRoot("uploadBytes");const r=it(t.storage,t._location,W(),new $(e,!0),n);return t.storage.makeRequestWithTokens(r,ct).then((e=>({metadata:e,ref:t})))}function ht(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const r=R(e.fullServerUrl(),t.host,t._protocol),o=t.maxOperationRetryTime,i=new Y(r,"GET",et(t,n),o);return i.errorHandler=rt(e),i}(t.storage,t._location,W());return t.storage.makeRequestWithTokens(e,ct).then((t=>{if(null===t)throw new c("no-download-url","The given file does not have any download URLs.");return t}))}function dt(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),r=new y(t._location.bucket,n);return new ut(t.storage,r)}function pt(t,e){if(t instanceof gt){const n=t;if(null==n._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?");const r=new ut(n,n._bucket);return null!=e?pt(r,e):r}return void 0!==e?dt(t,e):t}function ft(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof gt)return new ut(t,e);throw f("To use ref(service, url), the first argument must be a Storage instance.")}return pt(t,e)}function mt(t,e){const n=null==e?void 0:e[a];return null==n?null:y.makeFromBucketSpec(n,t)}class gt{constructor(t,e,n,r,o){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?y.makeFromBucketSpec(r,this._host):mt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=y.makeFromBucketSpec(this._url,t):this._bucket=mt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){k("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){k("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ut(this,t)}_makeRequest(t,e,n,r,o=!0){if(this._deleted)return new v(m());{const i=function(t,e,n,r,o,i,s=!0){const a=T(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(u,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(u,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(u,i),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(u,r),new P(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,s)}(t,this._appId,n,r,e,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const _t="@firebase/storage",yt="0.10.0",vt="storage";function bt(t,e,n,r){return function(t,e,n=I,r){t._throwIfRoot("uploadString");const o=B(n,e),i=Object.assign({},r);return null==i.contentType&&null!=o.contentType&&(i.contentType=o.contentType),lt(t,o.data,i)}(t=(0,o.m9)(t),e,n,r)}function wt(t){return ht(t=(0,o.m9)(t))}function xt(t,e){return ft(t=(0,o.m9)(t),e)}function kt(t=(0,r.Mq)(),e){t=(0,o.m9)(t);const n=(0,r.qX)(t,vt).getImmediate({identifier:e}),i=(0,o.P0)("storage");return i&&function(t,e,n,r={}){!function(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken="string"==typeof i?i:(0,o.Sg)(i,t.app.options.projectId))}(t,e,n,r)}(n,...i),n}function Rt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gt(n,o,i,e,r.Jn)}(0,r.Xd)(new i.wA(vt,Rt,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(_t,yt,""),(0,r.KN)(_t,yt,"esm2017")}}]);