(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{290:function(e,t,n){"use strict";n.r(t);var r=n(253),o=n.n(r),l={name:"addEmergency",components:{},data:function(){return{emergency_name:"",emergency_status:"",emergency_details:"",voluntarios:0,error:!1,error_msg:""}},methods:{upload_Emergency:function(){o.a.post("http://localhost:8081/emergencias/",{nombre:this.emergency_name,estado_eme:this.emergency_status,detalles:this.emergency_details,voluntarios_reg:this.voluntarios,id_in:this.id_in}).then((function(e){console.log("creacion de emergencia exitosa")}))}}},m=n(43),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"emergency"},[t("h2",[e._v(" Agregar una emergencia a la base de datos")]),e._v(" "),t("h2",[e._v("Datos de la emergencia")]),e._v(" "),t("h4",[e._v("Nombre Emergencia ")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.upload_Emergency.apply(null,arguments)}}},[t("ul",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.emergency_name,expression:"emergency_name"}],attrs:{type:"text",id:"emergency_name-id",placeholder:"Terremoto en Talca"},domProps:{value:e.emergency_name},on:{input:function(t){t.target.composing||(e.emergency_name=t.target.value)}}})]),e._v(" "),t("h4",[e._v("Estado de la emergencia")]),e._v(" "),t("ul",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.emergency_status,expression:"emergency_status"}],attrs:{type:"text",id:"emergency_status-id",placeholder:"Reclutando"},domProps:{value:e.emergency_status},on:{input:function(t){t.target.composing||(e.emergency_status=t.target.value)}}})]),e._v(" "),t("h4",[e._v("Institucion")]),e._v(" "),t("ul",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.id_in,expression:"id_in"}],attrs:{type:"int",id:"id_in",placeholder:"1"},domProps:{value:e.id_in},on:{input:function(t){t.target.composing||(e.id_in=t.target.value)}}})]),e._v(" "),t("p",[e._v("Detalles de la emergencia y requisitos para los voluntarios")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.emergency_details,expression:"emergency_details"}],attrs:{type:"text",id:"emergency_details-id",placeholder:"Detalles",cols:"100",rows:"20"},domProps:{value:e.emergency_details},on:{input:function(t){t.target.composing||(e.emergency_details=t.target.value)}}}),e._v(" "),e._m(0)])])}),[function(){var e=this._self._c;return e("div",{attrs:{id:"btn_upload"}},[e("input",{staticClass:"fadeIn fourth",attrs:{type:"submit",value:"Cargar Emergencia"}})])}],!1,null,null,null);t.default=component.exports}}]);