(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cd7"],{"18de":function(e,s,t){},"34c0":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"message"},[t("transition",{attrs:{appear:"","appear-active-class":"animated fadeInLeft"}},[t("div",{staticClass:"message-mem"},[t("div",{staticClass:"message-mem-01"},[t("p",[e._v("会员信息")]),t("ul",[t("li",[e._v("会员名称："+e._s(e.message.nickname))]),t("li",[e._v("openid："+e._s(e.message.openid))]),t("li",[e._v("创建时间："+e._s(e.message.create_time))]),t("li",[e._v("手机：")])])]),t("div",{staticClass:"message-mem-02"},[t("p",[e._v("地址信息")]),e._v(" \n         "+e._s(e.message.address[0].province)+e._s(e.message.address[0].city)+"\n      ")]),t("div",{staticClass:"message-mem-03"},[[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.message2,border:""}},[t("el-table-column",{attrs:{prop:"",label:"序号",width:"50"}}),t("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",width:"180"}}),t("el-table-column",{attrs:{prop:"price",label:"价格",width:"180"}}),t("el-table-column",{attrs:{prop:"stock",label:"总库存",width:"280"}}),t("el-table-column",{attrs:{prop:"sales",label:"销量",width:"180"}}),t("el-table-column",{attrs:{prop:"is_visible",label:"是否显示",width:"150"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-switch",{attrs:{"active-color":"#409EFF","inactive-color":"#DCDFE6"},on:{change:function(t){e.onswitch(s.row.category_id)}},model:{value:s.row.is_visible,callback:function(t){e.$set(s.row,"is_visible",t)},expression:"scope.row.is_visible"}})]}}])}),t("el-table-column",{attrs:{prop:"operation",label:"操作"}})],1)]],2)])])],1)},i=[],l=(t("cadf"),t("551c"),t("097d"),{name:"Message",props:["order_id"],data:function(){return{message:[],mid:this.order_id}},methods:{post_message:function(){var e=this;this.req.post(e.API_PROXY+"/admin/get_user",{id:this.mid}).then(function(s){e.message=s.data})}},mounted:function(){this.post_message()}}),o=l,n=(t("9851"),t("2877")),r=Object(n["a"])(o,a,i,!1,null,"1f8003df",null);r.options.__file="Message.vue";s["default"]=r.exports},9851:function(e,s,t){"use strict";var a=t("18de"),i=t.n(a);i.a}}]);
//# sourceMappingURL=chunk-5cd7.a320a7c3.js.map