"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{9553:(e,r,n)=>{n.r(r),n.d(r,{default:()=>h});var o=n(821),t={class:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},a={class:"max-w-md w-full space-y-8"},s=(0,o._)("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Register to create account ",-1),i={class:"mt-2 text-center text-sm text-gray-600"},l={class:"font-medium text-indigo-600 hover:text-indigo-500"},d=(0,o._)("input",{type:"hidden",name:"remember",value:"true"},null,-1),u={class:"rounded-md shadow-sm -space-y-px"},c=(0,o._)("label",{for:"name",class:"sr-only"},"Username",-1),m=(0,o._)("label",{for:"email",class:"sr-only"},"Email address",-1),p=(0,o._)("label",{for:"password",class:"sr-only"},"Password",-1),f=(0,o._)("label",{for:"password_confirmation",class:"sr-only"},"Confirm Password",-1),g={class:"text-sm"},y={href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"},w=(0,o._)("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[(0,o._)("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"}),(0,o.Uk)(" Register ")],-1);var b=n(7591),x=n(3907);const _={components:{Icon:b.Z,Loading:(0,o.RC)((function(){return n.e(481).then(n.bind(n,2481))}))},setup:function(){var e=(0,x.oR)(),r=(0,o.iH)({name:"",email:"",password:"",password_confirmation:""});return{credentials:r,submitRegForm:function(){return e.dispatch("register/submitRegForm",r.value)},isLoading:(0,o.Fl)((function(){return e.state.register.routeLoading})),invalidCredentials:(0,o.Fl)((function(){return e.state.register.errorMessage2}))}}};const h=(0,n(3744).Z)(_,[["render",function(e,r,n,b,x,_){var h=(0,o.up)("Icon"),v=(0,o.up)("router-link"),k=(0,o.up)("Loading");return(0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",a,[(0,o._)("div",null,[(0,o._)("div",null,[(0,o.Wm)(h,{height:110,width:110,autoPlay:!0})]),s,(0,o._)("p",i,[(0,o.Uk)(" Or "+(0,o.zw)(" ")+" "),(0,o._)("a",l,[(0,o.Wm)(v,{to:"/login"},{default:(0,o.w5)((function(){return[(0,o.Uk)("Login if you already have an account")]})),_:1})])])]),(0,o._)("form",{class:"mt-8 space-y-6",onSubmit:r[4]||(r[4]=(0,o.iM)((function(){return b.submitRegForm&&b.submitRegForm.apply(b,arguments)}),["prevent"])),method:"POST"},[d,(0,o._)("div",u,[(0,o._)("div",null,[c,(0,o.wy)((0,o._)("input",{id:"name",name:"username",type:"text",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username","onUpdate:modelValue":r[0]||(r[0]=function(e){return b.credentials.name=e})},null,512),[[o.nr,b.credentials.name]])]),(0,o._)("div",null,[m,(0,o.wy)((0,o._)("input",{id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address","onUpdate:modelValue":r[1]||(r[1]=function(e){return b.credentials.email=e})},null,512),[[o.nr,b.credentials.email]])]),(0,o._)("div",null,[p,(0,o.wy)((0,o._)("input",{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password","onUpdate:modelValue":r[2]||(r[2]=function(e){return b.credentials.password=e})},null,512),[[o.nr,b.credentials.password]])]),(0,o._)("div",null,[f,(0,o.wy)((0,o._)("input",{id:"password_confirmation",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Confirm Password","onUpdate:modelValue":r[3]||(r[3]=function(e){return b.credentials.password_confirmation=e})},null,512),[[o.nr,b.credentials.password_confirmation]])])]),(0,o._)("div",g,[(0,o._)("a",y,(0,o.zw)(b.invalidCredentials),1)]),(0,o._)("div",null,[w,b.isLoading?((0,o.wg)(),(0,o.j4)(k,{key:0,height:80,width:80})):(0,o.kq)("",!0)])],32)])])}]])}}]);