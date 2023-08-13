"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[633],{8633:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var r=i(821),d=(0,r._)("h1",{class:"pt-4 text-1xl md:text-2xl text-black"},"My products",-1),n={class:"grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"},c=(0,r._)("h1",{class:"text-1xl md:text-2xl text-black"},"My services",-1),u={class:"grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"};var o=i(863),s=i(3907);const l={setup:function(){var e=(0,s.oR)();return(0,r.bv)((function(){var t=JSON.parse(localStorage.getItem("vuex")).login.loginUser.user.id;e.dispatch("login/getProducts",{id:t}),e.dispatch("login/getServices",{id:t})})),{products:(0,r.Fl)((function(){return e.state.login.myProducts})),services:(0,r.Fl)((function(){return e.state.login.myServices})),deleteProduct:function(t){return e.dispatch("products/deleteProduct",t)},deleteService:function(t){return e.dispatch("services/deleteService",t)},editProduct:function(t){return e.dispatch("products/editProduct",t)},editService:function(t){return e.dispatch("services/editService",t)}}},components:{DashboardItemCard:o.Z}};const a=(0,i(3744).Z)(l,[["render",function(e,t,i,o,s,l){var a=(0,r.up)("DashboardItemCard");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",null,[d,(0,r._)("div",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.products,(function(e){return(0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(a,{product_name:e.product_name,descprition:e.descprition,image_url:e.image_url,price:e.price,updated_at:e.updated_at,buttons:!0,onDelItem:function(t){return o.deleteProduct(e.id)},onEdit:function(t){return o.editProduct(e.id)}},null,8,["product_name","descprition","image_url","price","updated_at","onDelItem","onEdit"])])})),128))])]),(0,r._)("div",null,[c,(0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.services,(function(e){return(0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(a,{product_name:e.service_name,descprition:e.descprition,image_url:e.image_url,price:e.price,buttons:!0,updated_at:e.updated_at,onDelItem:function(t){return o.deleteService(e.id)},onEdit:function(t){return o.editService(e.id)}},null,8,["product_name","descprition","image_url","price","updated_at","onDelItem","onEdit"])])})),128))])])])}]])}}]);