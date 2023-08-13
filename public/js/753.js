/*! For license information please see 753.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[753],{2753:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(821),o={className:"bg-indigo-50 min-h-screen md:px-20 pt-6"},s={className:" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto"},i=(0,r._)("h1",{className:"text-center text-2xl font-bold text-gray-500 mb-10"}," ADD SERVICE ",-1),a={className:"space-y-4"},l=(0,r._)("label",{htmlFor:"productName",className:"text-lx font-serif"},"Service Name:",-1),c=(0,r._)("label",{htmlFor:"pharmacyname",className:"text-lx font-serif"},"Pharmacy Name:",-1),u=(0,r._)("label",{htmlFor:"location",className:"text-lx font-serif"},"Location:",-1),h=(0,r._)("label",{htmlFor:"price",className:"text-lx font-serif"},"Price:",-1),d=(0,r._)("label",{htmlFor:"disease",className:"text-lx font-serif"},"Disease:",-1),p=(0,r._)("label",{htmlFor:"contact",className:"text-lx font-serif"},"Contact:",-1),f=(0,r._)("label",{className:"text-lx font-serif"},"Add image:",-1),m={key:0},_=["src"],g=(0,r._)("br",null,null,-1),b=(0,r._)("label",{htmlFor:"description",className:"block mb-2 text-lg font-serif"},"Description:",-1),w=(0,r._)("button",{className:" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "}," ADD SERVICE ",-1);var y=n(6650),v=n(3907);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T={setup:function(){var e=(0,v.oR)(),t=(0,r.qj)({imageData:null,imageUrl:"",imageName:null,btnState:"upload"}),n=JSON.parse(localStorage.getItem("vuex")).login.loginUser.user.id,o=((0,y.cF)(),(0,r.iH)({service_name:"",Pharmacy_name:"",location:"",price:"",disease:"",descprition:"",contact:""}));return{previewImage:function(n){var r=n.target.files[0];t.imageName=r.name;var o=new FileReader;o.readAsDataURL(r),o.onload=function(r){e.commit("services/storeServiceImage",n.target.files[0]),t.imageData=r.target.result}},state:t,serviceData:o,addService:function(){return e.dispatch("services/addService",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({user_id:n},o.value))}}}};const O=(0,n(3744).Z)(T,[["render",function(e,t,n,y,v,x){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[8]||(t[8]=(0,r.iM)((function(){return y.addService&&y.addService.apply(y,arguments)}),["prevent"])),method:"POST"},[(0,r._)("div",o,[(0,r._)("div",s,[i,(0,r._)("div",a,[(0,r._)("div",null,[l,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Service Name",id:"productName",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":t[0]||(t[0]=function(e){return y.serviceData.service_name=e})},null,512),[[r.nr,y.serviceData.service_name]])]),(0,r._)("div",null,[c,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Pharmacy",id:"pharmacyname",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":t[1]||(t[1]=function(e){return y.serviceData.Pharmacy_name=e})},null,512),[[r.nr,y.serviceData.Pharmacy_name]])]),(0,r._)("div",null,[u,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Location",id:"location",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":t[2]||(t[2]=function(e){return y.serviceData.location=e})},null,512),[[r.nr,y.serviceData.location]])]),(0,r._)("div",null,[h,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"UGX",id:"price",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":t[3]||(t[3]=function(e){return y.serviceData.price=e})},null,512),[[r.nr,y.serviceData.price]])]),(0,r._)("div",null,[d,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"",id:"disease",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":t[4]||(t[4]=function(e){return y.serviceData.disease=e})},null,512),[[r.nr,y.serviceData.disease]])]),(0,r._)("div",null,[p,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Phone Number",id:"contact",className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md","onUpdate:modelValue":t[5]||(t[5]=function(e){return y.serviceData.contact=e})},null,512),[[r.nr,y.serviceData.contact]])]),(0,r._)("div",null,[f,(0,r._)("input",{type:"file",accept:"image/*",onChange:t[6]||(t[6]=function(){return y.previewImage&&y.previewImage.apply(y,arguments)}),className:"ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"},null,32)]),y.state.imageData?((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("img",{height:"268",width:"356",src:y.state.imageData},null,8,_),g])):(0,r.kq)("",!0),(0,r._)("div",null,[b,(0,r.wy)((0,r._)("textarea",{id:"description",cols:"{30}",rows:"{10}",placeholder:"Talk more about the Service..",className:"w-full font-serif\n                        p-4 text-gray-600 bg-indigo-50 outline-none rounded-md","onUpdate:modelValue":t[7]||(t[7]=function(e){return y.serviceData.descprition=e})},null,512),[[r.nr,y.serviceData.descprition]])]),w])])])],32)}]])},6650:(e,t,n)=>{n.d(t,{Jt:()=>ve,cF:()=>ke,iH:()=>xe,sf:()=>ye});var r=n(7779),o=n(4444),s=n(8463);const i="firebasestorage.googleapis.com",a="storageBucket";class l extends o.ZR{constructor(e,t,n=0){super(c(e),`Firebase Storage: ${t} (${c(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function c(e){return"storage/"+e}function u(){return new l("unknown","An unknown error occurred, please check the error payload for server response.")}function h(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function d(){return new l("canceled","User canceled the upload/download.")}function p(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(e){return new l("invalid-argument",e)}function m(){return new l("app-deleted","The Firebase app was deleted.")}function _(e,t){return new l("invalid-format","String does not match format '"+e+"': "+t)}function g(e){throw new l("internal-error","Internal error: "+e)}class b{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=b.makeFromUrl(e,t)}catch(t){return new b(e,"")}if(""===n.path)return n;throw new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const a=t.replace(/[.]/g,"\\."),c=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===i?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<c.length;t++){const r=c[t],o=r.regex.exec(e);if(o){const e=o[r.indices.bucket];let t=o[r.indices.path];t||(t=""),n=new b(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new l("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class w{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function y(e){return"string"==typeof e||e instanceof String}function v(e){return x()&&e instanceof Blob}function x(){return"undefined"!=typeof Blob&&!(0,o.UG)()}function k(e,t,n,r){if(r<t)throw f(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw f(`Invalid value for '${e}'. Expected ${n} or less.`)}function R(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function T(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var O;function S(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return n||r||o}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(O||(O={}));class C{constructor(e,t,n,r,o,s,i,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new P(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===O.NO_ERROR,o=n.getStatus();if((!t||S(o,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===O.ABORT;return void e(!1,new P(!1,null,t))}const s=-1!==this.successCodes_.indexOf(o);e(!0,new P(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=u();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?m():d())}else{r(h())}};this.canceled_?t(0,new P(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,s=null,i=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){o=setTimeout((()=>{o=null,e(p,l())}),t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||i)return d(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function m(e){f||(f=!0,d(),c||(null!==o?(e||(a=2),clearTimeout(o),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{i=!0,m(!0)}),n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class P{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function U(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function I(...e){const t=U();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(x())return new Blob(e);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function N(e){if("undefined"==typeof atob)throw new l("unsupported-environment",`${"base-64"} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);return atob(e)}const D="raw",E="base64",A="base64url",j="data_url";class F{constructor(e,t){this.data=e,this.contentType=t||null}}function B(e,t){switch(e){case D:return new F(q(t));case E:case A:return new F(L(e,t));case j:return new F(function(e){const t=new $(e);return t.base64?L(E,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw _(j,"Malformed data URL.")}return q(t)}(t.rest)}(t),new $(t).contentType)}throw u()}function q(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function L(e,t){switch(e){case E:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw _(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case A:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw _(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=N(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw _(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class ${constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw _(j,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class M{constructor(e,t){let n=0,r="";v(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(v(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new M(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new M(n,!0)}}static getBlob(...e){if(x()){const t=e.map((e=>e instanceof M?e.data_:e));return new M(I.apply(null,t))}{const t=e.map((e=>y(e)?B(D,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[o++]=e[t]})),new M(r,!0)}}uploadData(){return this.data_}}function z(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}function V(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function H(e,t){return t}class X{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||H}}let W=null;function K(){if(W)return W;const e=[];e.push(new X("bucket")),e.push(new X("generation")),e.push(new X("metageneration")),e.push(new X("name","fullPath",!0));const t=new X("name");t.xform=function(e,t){return function(e){return!y(e)||e.length<2?e:V(e)}(t)},e.push(t);const n=new X("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new X("timeCreated")),e.push(new X("updated")),e.push(new X("md5Hash",null,!0)),e.push(new X("cacheControl",null,!0)),e.push(new X("contentDisposition",null,!0)),e.push(new X("contentEncoding",null,!0)),e.push(new X("contentLanguage",null,!0)),e.push(new X("contentType",null,!0)),e.push(new X("metadata","customMetadata",!0)),W=e,W}function G(e,t,n){const r={type:"file"},o=n.length;for(let e=0;e<o;e++){const o=n[e];r[o.local]=o.xform(r,t[o.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,o=new b(n,r);return t._makeStorageReference(o)}})}(r,e),r}function J(e,t,n){const r=z(t);if(null===r)return null;return G(e,r,n)}function Z(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class Y{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function Q(e){if(!e)throw u()}function ee(e,t){return function(n,r){const o=J(e,r,t);return Q(null!==o),o}}function te(e,t){return function(n,r){const o=J(e,r,t);return Q(null!==o),function(e,t,n,r){const o=z(t);if(null===o)return null;if(!y(o.downloadTokens))return null;const s=o.downloadTokens;if(0===s.length)return null;const i=encodeURIComponent;return s.split(",").map((t=>{const o=e.bucket,s=e.fullPath;return R("/b/"+i(o)+"/o/"+i(s),n,r)+T({alt:"media",token:t})}))[0]}(o,r,e.host,e._protocol)}}function ne(e){return function(t,n){let r;var o,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new l("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new l("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,r=new l("unauthorized","User does not have permission to access '"+o+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function re(e){const t=ne(e);return function(n,r){let o=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,o=new l("object-not-found","Object '"+s+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function oe(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function se(e,t,n,r,o){const s=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const l=oe(t,r,o),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Z(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=M.getBlob(c,r,u);if(null===h)throw p();const d={name:l.fullPath},f=R(s,e.host,e._protocol),m=e.maxUploadRetryTime,_=new Y(f,"POST",ee(e,n),m);return _.urlParams=d,_.headers=i,_.body=h.uploadData(),_.errorHandler=ne(t),_}class ie{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=O.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=O.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=O.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw g("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw g("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw g("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw g("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw g("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ae extends ie{initXhr(){this.xhr_.responseType="text"}}function le(){return new ae}class ce{constructor(e,t){this._service=e,this._location=t instanceof b?t:b.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ce(e,t)}get root(){const e=new b(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new b(this._location.bucket,e);return new ce(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function ue(e,t,n){e._throwIfRoot("uploadBytes");const r=se(e.storage,e._location,K(),new M(t,!0),n);return e.storage.makeRequestWithTokens(r,le).then((t=>({metadata:t,ref:e})))}function he(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=R(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,s=new Y(r,"GET",te(e,n),o);return s.errorHandler=re(t),s}(e.storage,e._location,K());return e.storage.makeRequestWithTokens(t,le).then((e=>{if(null===e)throw new l("no-download-url","The given file does not have any download URLs.");return e}))}function de(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new b(e._location.bucket,n);return new ce(e.storage,r)}function pe(e,t){if(e instanceof _e){const n=e;if(null==n._bucket)throw new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?");const r=new ce(n,n._bucket);return null!=t?pe(r,t):r}return void 0!==t?de(e,t):e}function fe(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof _e)return new ce(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}return pe(e,t)}function me(e,t){const n=null==t?void 0:t[a];return null==n?null:b.makeFromBucketSpec(n,e)}class _e{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=i,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?b.makeFromBucketSpec(r,this._host):me(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=b.makeFromBucketSpec(this._url,e):this._bucket=me(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){k("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){k("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ce(this,e)}_makeRequest(e,t,n,r,o=!0){if(this._deleted)return new w(m());{const s=function(e,t,n,r,o,s,i=!0){const a=T(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new C(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ge="@firebase/storage",be="0.10.0",we="storage";function ye(e,t,n,r){return function(e,t,n=D,r){e._throwIfRoot("uploadString");const o=B(n,t),s=Object.assign({},r);return null==s.contentType&&null!=o.contentType&&(s.contentType=o.contentType),ue(e,o.data,s)}(e=(0,o.m9)(e),t,n,r)}function ve(e){return he(e=(0,o.m9)(e))}function xe(e,t){return fe(e=(0,o.m9)(e),t)}function ke(e=(0,r.Mq)(),t){e=(0,o.m9)(e);const n=(0,r.qX)(e,we).getImmediate({identifier:t}),s=(0,o.P0)("storage");return s&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:(0,o.Sg)(s,e.app.options.projectId))}(e,t,n,r)}(n,...s),n}function Re(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new _e(n,o,s,t,r.Jn)}(0,r.Xd)(new s.wA(we,Re,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ge,be,""),(0,r.KN)(ge,be,"esm2017")}}]);