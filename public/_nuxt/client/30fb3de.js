(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{350:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return v}));var o=n(351),r=n(0),c=Object(r.i)("v-card__actions"),l=Object(r.i)("v-card__subtitle"),d=Object(r.i)("v-card__text"),v=Object(r.i)("v-card__title");o.a},351:function(t,e,n){"use strict";n(187),n(188),n(14);var o=n(2),r=(n(353),n(189)),c=n(356),l=n(67),d=n(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return m(m({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=m({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},352:function(t,e,n){"use strict";var o={name:"NormalDialog",data:function(){return{dialog:!1,message:null,title:null,options:{width:400,zIndex:200,noconfirm:!1}}},methods:{open:function(title,t){this.dialog=!0,this.title=title,this.message=t}}},r=n(75),c=n(113),l=n.n(c),d=n(199),v=n(351),m=n(350),h=n(369),f=n(347),_=n(34),y=n(186),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{persistent:"","max-width":t.options.width},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dense:"",flat:""}},[n("v-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")])],1),t._v(" "),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}],staticClass:"mt-2"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),n("v-card-actions",{staticClass:"pt-3"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",outlined:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("\n        Aceptar\n      ")]),t._v(" "),n("v-spacer")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VDialog:h.a,VSpacer:f.a,VToolbar:_.a,VToolbarTitle:y.b})},353:function(t,e,n){},355:function(t,e,n){"use strict";var o=n(2),r=n(59);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)({loading:"getLoading"}))},d=n(75),v=n(113),m=n.n(v),h=n(181),f=n(174),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("v-overlay",{attrs:{absolute:"","z-index":"1000",value:this.loading}},[e("v-progress-circular",{staticClass:"mb-4",attrs:{indeterminate:"",size:"64"}}),this._v(" "),e("br"),this._v("\n    Espere un momento ....\n  ")],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VOverlay:h.a,VProgressCircular:f.a})},363:function(t,e,n){},368:function(t,e,n){},369:function(t,e,n){"use strict";n(76),n(23),n(68),n(14),n(39),n(49),n(35);var o=n(40),r=n(2),c=(n(363),n(344)),l=n(91),d=n(115),v=n(194),m=n(197),h=n(196),f=n(195),_=n(29),y=n(116),O=n(6),C=n(7),x=n(0);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(O.a)(l.a,d.a,v.a,m.a,h.a,f.a,_.a);e.a=k.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(C.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===x.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:j({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(x.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(x.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},375:function(t,e,n){"use strict";n(11);var o={name:"ConfirmDlg",data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{width:400,zIndex:200,noconfirm:!1}}},methods:{open:function(title,t,e){var n=this;return this.dialog=!0,this.title=title,this.message=t,this.options=Object.assign(this.options,e),new Promise((function(t,e){n.resolve=t,n.reject=e}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},r=n(75),c=n(113),l=n.n(c),d=n(199),v=n(351),m=n(350),h=n(369),f=n(347),_=n(34),y=n(186),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{persistent:"","max-width":t.options.width},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dense:"",flat:""}},[n("v-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")])],1),t._v(" "),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}],staticClass:"mt-2"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),n("v-card-actions",{staticClass:"pt-3"},[n("v-spacer"),t._v(" "),t.options.noconfirm?t._e():n("v-btn",{attrs:{text:""},nativeOn:{click:function(e){return t.cancel(e)}}},[t._v("\n        No\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",outlined:""},nativeOn:{click:function(e){return t.agree(e)}}},[t._v("\n        Si\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VDialog:h.a,VSpacer:f.a,VToolbar:_.a,VToolbarTitle:y.b})},376:function(t,e,n){"use strict";n(368)},381:function(t,e,n){"use strict";n.r(e);n(16),n(11),n(18),n(48);var o=n(8),r=(n(27),n(4)),c=n(375),l=n(352),d=n(355),v={components:{CmpConfirmDialog:c.a,cmpNormalDialog:l.a,cmpLoadingOverlay:d.a},data:function(){return{dialog:!1,resolve:null,reject:null,nroResolucion:"",vistos:[{id:1,texto:"a) La Constitución Política de la República de Chile; La Ley Nº 18.575, Orgánica Constitucional de Bases Generales de la Administración del Estado."},{id:2,texto:"b) El D.L. 1305/76 que reestructura y regionaliza el Ministerio de la Vivienda y Urbanismo; El D.S. 355/76 de Vivienda y Urbanismo, que aprueba el Reglamento Orgánico de los Servicios de Vivienda y Urbanización."},{id:3,texto:"c) Ley N° 19.886 denominada Ley de Compras Públicas y el Reglamento D.S. 250/04 del Ministerio de Hacienda y sus modificaciones."},{id:4,texto:"d) Las Resoluciones N° 6, 7 y 8, todas de 2019, de la Contraloría General de la República, sobre exención del trámite de Toma de Razón."},{id:5,texto:"e) La Ley N° 19.880 que establece las Bases de los Procedimientos Administrativos que rigen los Actos de los Órganos de la Administración del Estado."},{id:6,texto:"f) D.F.L. N° 29 de 2004, que aprueba texto refundido, coordinado y sistematizado de la Ley N° 18.834 de 1989, sobre Estatuto Administrativo; y demás normas pertinentes."},{id:7,texto:"g) El Decreto N° 577, de 1978, del Ministerio de Tierras y Colonización, hoy Bienes Nacionales."},{id:8,texto:"h) Las facultades que me confieren el Decreto Supremo Nº 355 y el Decreto TRA N° 272/12/2019 de fecha 18/03/2019, ambos del MINVU."}],considerandos:[{id:9,texto:"a) La necesidad del Servicio de proceder al alta y asignación de la cámara fotográfica que se indica en la presente Resolución, dicto lo siguiente:"}],resolucion1:"1. DISPÓNESE el alta en el Servicio de Vivienda y Urbanización Región de Coquimbo, del activo que se indica y asígnese a la unidad que se señala según el siguiente detalle:",resolucion2:"2. La Sección Contabilidad y Presupuestos del SERVIU Región de Coquimbo, deberá dar de alta contablemente la especie identificada precedentemente y efectuar los registros respectivos.",activos:[],firmantes:"JCD/JCC/mmr."}},methods:{showDialog:function(t){var e=this;return this.dialog=!0,this.activos=t,new Promise((function(t,n){e.resolve=t,e.reject=n}))},hideDialog:function(){this.resolve(!0),this.dialog=!1},generaPdf:function(){alert("Genera archivo imprimible"),this.hideDialog(),this.$router.push("/activos")},grabaFichaAlta:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,""!==t.nroResolucion){e.next=6;break}return e.next=4,t.$refs.confirm.open("Confirmación","Si continua sin ingresar nro de resolucion el documento se grabará como borrador \n ¿Desea continuar?.");case 4:if(e.sent){e.next=6;break}n=!1;case 6:if(!n){e.next=15;break}for(o=t.formatDate((new Date).toISOString().substr(0,10)),r=[],i=0;i<t.activos.length;i++)r.push(t.activos[i].id);return c={numero:"Borrador",fecha:o,activos:r,firmantes:t.firmantes},""!==t.nroResolucion&&(alert(t.nroResolucion+" NRO DE RESOLUCION SETEADO"),c.numero=t.nroResolucion),t.$store.dispatch("actionSetLoading",!0),e.next=15,t.$store.dispatch("grabaFichaAlta",c).then((function(){t.$store.dispatch("actionSetLoading",!1),t.generaPdf(),t.$refs.myAlert.open("Confirmacion","Datos guardados correctamente")})).catch((function(e){alert("Ha ocurrido un error, los datos no se han guardado. \n"+e),t.$store.dispatch("actionSetLoading",!1)}));case 15:case"end":return e.stop()}}),e)})))()},formatDate:function(t){if(!t)return null;var e=t.split("-"),n=Object(o.a)(e,3),r=n[0],c=n[1],l=n[2];return"".concat(l,"/").concat(c,"/").concat(r)}}},m=(n(376),n(75)),h=n(113),f=n.n(h),_=n(199),y=n(351),O=n(341),C=n(369),x=n(175),w=n(142),j=n(346),k=n(347),E=n(435),S=n(34),D=n(186),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"",persistent:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.hideDialog()}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Settings")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.grabaFichaAlta()}}},[t._v("\n            GENERAR\n          ")])],1)],1),t._v(" "),n("v-card",{staticClass:"mx-16 mt-10 pa-10"},[n("v-row",[n("v-col",[n("v-img",{attrs:{"lazy-src":"https://picsum.photos/id/11/10/6","max-height":"200","max-width":"200",src:"/logoServiu.png"}})],1)],1),t._v(" "),n("v-row",{staticClass:"mx-9"},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{justify:"right",align:"right",sm:"3"}},[t._v("\n            REF: DISPONE DE ALTA Y ASIGNA ACTIVO QUE INDICA.\n          ")])],1),t._v(" "),n("v-row",{staticClass:"mx-9"},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{justify:"right",align:"right",sm:"3"}},[t._v("\n            Con esta fecha se dicta lo siguiente:\n          ")])],1),t._v(" "),n("v-row",{staticClass:"mx-9"},[n("v-spacer"),t._v(" "),n("v-col",{attrs:{justify:"right",align:"right",sm:"6"}},[n("v-row",{attrs:{align:"center"}},[n("v-col",[t._v("\n                RESOLUCION EXENTA N°\n              ")]),t._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Nro resolución"},model:{value:t.nroResolucion,callback:function(e){t.nroResolucion=e},expression:"nroResolucion"}})],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mx-9"},[n("v-col",{attrs:{justify:"right",align:"right"}},[t._v("\n            La Serena, "+t._s(t.$moment().format("LL"))+"\n          ")])],1),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          VISTOS\n        ")]),t._v(" "),t._l(t.vistos,(function(e){return n("v-row",{key:e.id,staticClass:"mx-9"},[n("v-col",{staticClass:"ml-8",attrs:{justify:"left",align:"left"}},[t._v("\n            "+t._s(e.texto)+"\n          ")])],1)})),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          CONSIDERANDO\n        ")]),t._v(" "),t._l(t.considerandos,(function(e){return n("v-row",{key:e.id,staticClass:"mx-9"},[n("v-col",{staticClass:"ml-8",attrs:{justify:"left",align:"left"}},[t._v("\n            "+t._s(e.texto)+"\n          ")])],1)})),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          RESOLUCION\n        ")]),t._v(" "),n("v-row",{staticClass:"mx-9"},[n("v-col",{staticClass:"ml-8",attrs:{justify:"left",align:"left"}},[t._v("\n            "+t._s(t.resolucion1)+"\n          ")])],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{sm:"6"}},t._l(t.activos,(function(e){return n("v-card",{key:e.key,staticClass:"px-10 my-6"},[n("v-row",[n("v-col",{attrs:{sm:"4"}},[t._v("\n                  N° Inventario\n                ")]),t._v(" "),n("v-col",{attrs:{sm:"1"}},[t._v("\n                  :\n                ")]),t._v(" "),n("v-col",[t._v("\n                  "+t._s(e.inventario)+"\n                ")])],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{sm:"4"}},[t._v("\n                  Activo\n                ")]),t._v(" "),n("v-col",{attrs:{sm:"1"}},[t._v("\n                  :\n                ")]),t._v(" "),n("v-col",[t._v("\n                  "+t._s(e.nombre)+"\n                ")])],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{sm:"4"}},[t._v("\n                  Serie\n                ")]),t._v(" "),n("v-col",{attrs:{sm:"1"}},[t._v("\n                  :\n                ")]),t._v(" "),n("v-col",[t._v("\n                  "+t._s(e.serie)+"\n                ")])],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{sm:"4"}},[t._v("\n                  Tipo\n                ")]),t._v(" "),n("v-col",{attrs:{sm:"1"}},[t._v("\n                  :\n                ")]),t._v(" "),n("v-col",[t._v("\n                  "+t._s(e.tipo)+"\n                ")])],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{sm:"4"}},[t._v("\n                  Valor\n                ")]),t._v(" "),n("v-col",{attrs:{sm:"1"}},[t._v("\n                  :\n                ")]),t._v(" "),n("v-col",[t._v("\n                  "+t._s(e.valor)+"\n                ")])],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{sm:"4"}},[t._v("\n                  Descripción\n                ")]),t._v(" "),n("v-col",{attrs:{sm:"1"}},[t._v("\n                  :\n                ")]),t._v(" "),n("v-col",[t._v("\n                  "+t._s(e.valor)+"\n                ")])],1)],1)})),1)],1),t._v(" "),n("v-row",{staticClass:"mx-9"},[n("v-col",{staticClass:"ml-8",attrs:{justify:"left",align:"left"}},[t._v("\n            "+t._s(t.resolucion2)+"\n          ")])],1),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          ANÓTESE, COMUNÍQUESE Y CÚMPLASE.\n        ")]),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center mt-16"},[n("div",{staticClass:"borde-superior"},[t._v("\n            OSCAR GUTIERREZ SEGUEL "),n("br"),t._v(" DIRECTOR "),n("br"),t._v("SERVIU REGION DE COQUIMBO\n          ")])]),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          V°B°"),n("br"),t._v("\n          Contraloría Interna.\n        ")]),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          V°B°"),n("br"),t._v("\n          Depto. Jurídico.\n        ")]),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          "+t._s(t.firmantes)+"\n        ")]),t._v(" "),n("div",{staticClass:"mx-7 mt-5"},[t._v("\n          Transcribir a:\n          "),n("ol",[n("li",[t._v("Contraloría Interna.")]),t._v(" "),n("li",[t._v("Sección Servicios Generales.")]),t._v(" "),n("li",[t._v("Departamento Administración y Finanzas.")]),t._v(" "),n("li",[t._v("Oficina de Partes.")])])])],2)],1)],1),t._v(" "),n("cmp-confirm-dialog",{ref:"confirm"}),t._v(" "),n("cmp-loading-overlay"),t._v(" "),n("cmp-normal-dialog",{ref:"myAlert"})],1)}),[],!1,null,"1ba1a3eb",null);e.default=component.exports;f()(component,{VBtn:_.a,VCard:y.a,VCol:O.a,VDialog:C.a,VIcon:x.a,VImg:w.a,VRow:j.a,VSpacer:k.a,VTextField:E.a,VToolbar:S.a,VToolbarItems:D.a,VToolbarTitle:D.b})}}]);