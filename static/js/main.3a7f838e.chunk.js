(this.webpackJsonpnutrition=this.webpackJsonpnutrition||[]).push([[0],{33:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=a(1),i=a(7),u=(a(43),a(12)),m=a(26),s=a(16),d=a(3),f=a(47),E={meals:[],status:null,modal:!1,id:null,modalStatus:null,user:null,isAuthorized:null},p=Object(f.a)({LOGIN:function(e){return Object(d.a)({},e,{isAuthorized:!0})},LOGOUT:function(){return Object(d.a)({},E)},SET_USER_DATA:function(e,t){return Object(d.a)({},e,{user:t.payload})},LOAD_MEALS_REQUEST:function(e){return Object(d.a)({},e,{status:"loading"})},LOAD_MEALS_SUCCESS:function(e,t){return Object(d.a)({},e,{meals:t.payload,status:null})},LOAD_MEALS_FAILURE:function(e){return Object(d.a)({},e,{status:"failed"})},OPEN_MODAL:function(e,t){return Object(d.a)({},e,{modal:!0,id:t.payload})},CLOSE_MODAL:function(e){return Object(d.a)({},e,{modal:!1,id:null})},MODAL_REQUEST:function(e){return Object(d.a)({},e,{modalStatus:"loading"})},MODAL_SUCCESS:function(e){return Object(d.a)({},e,{modalStatus:null})},MODAL_FAILURE:function(e){return Object(d.a)({},e,{modalStatus:"failed"})},CREATE_MEAL_SUCCESS:function(e,t){return Object(d.a)({},e,{meals:e.meals.concat(t.payload)})},UPDATE_MEAL_SUCCESS:function(e,t){var a=e.meals.findIndex((function(e){return e._id===t.payload._id}));return Object(d.a)({},e,{meals:Object.assign([],e.meals,Object(s.a)({},a,t.payload))})},DELETE_MEAL_SUCCESS:function(e,t){return Object(d.a)({},e,{meals:e.meals.filter((function(e){return e._id!==t.payload._id}))})}},E),v={get getToken(){return localStorage.getItem("id_token")},setToken:function(e){localStorage.setItem("id_token",e)},clearToken:function(){localStorage.removeItem("id_token")}},h=Object(u.c)(p,Object(u.a)(m.a.withExtraArgument(v))),b=a(30),O=a(4),g=function(e){var t=e.split(":"),a=Object(O.a)(t,2),n=a[0],r=a[1];return 60*n+parseInt(r)},N=function(e,t){return g(t.time)-g(e.time)},y=function(e){return Object(b.a)(new Set(e.meals.map((function(e){return e.date})))).sort().reverse()},j=function(e){return e.modal},C=function(e){return e.modalStatus},S=function(e){return e.status},_=function(e){return e.meals.find((function(t){return t._id===e.id}))},A=function(e){return e.user},L=function(e){return e.isAuthorized},k=a(48),w=Object(k.a)("LOAD_MEALS_REQUEST"),M=Object(k.a)("LOAD_MEALS_SUCCESS"),D=Object(k.a)("LOAD_MEALS_FAILURE"),T=Object(k.a)("CREATE_MEAL_SUCCESS"),F=Object(k.a)("UPDATE_MEAL_SUCCESS"),q=Object(k.a)("DELETE_MEAL_SUCCESS"),x=Object(k.a)("LOGIN"),I=Object(k.a)("LOGOUT"),P=Object(k.a)("SET_USER_DATA"),U=Object(k.a)("OPEN_MODAL"),H=Object(k.a)("CLOSE_MODAL"),R=Object(k.a)("MODAL_REQUEST"),z=Object(k.a)("MODAL_SUCCESS"),B=Object(k.a)("MODAL_FAILURE"),V=function(e){e.className;return r.a.createElement("div",{className:"Spinner"})},Y=function(e){var t=e.className;return r.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))},G="\ud83e\udd55\ud83e\udd66\ud83e\udd6c\ud83c\udf7d\ud83c\udf74\ud83e\udd44\ud83e\udd62\ud83c\udf70\ud83e\uddc1\ud83c\udf65\ud83e\udd58\ud83c\udf72\ud83c\udf5c\ud83c\udf59\ud83c\udf71\ud83c\udf57\ud83c\udf56\ud83e\udd69\ud83c\udf55\ud83c\udf54\ud83c\udf5f\ud83c\udf2d\ud83e\udd53\ud83e\uddc7\ud83e\udd5e\ud83e\uddc0\ud83e\udd57\ud83e\udd60".split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/).filter(Boolean),Q=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)((function(){return Math.floor(Math.random()*G.length)})),i=Object(O.a)(o,1)[0],u=Object(l.c)(A),m=Object(l.b)();return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Header-Logo"},G[i]," FoodLog"),u&&r.a.createElement("div",{className:"Header-Profile"},r.a.createElement("div",{className:"Header-ProfileCard",onClick:function(){return c((function(e){return!e}))}},r.a.createElement("img",{className:"Header-ProfileImage",src:u.picture,alt:""}),r.a.createElement(Y,{className:"Header-ProfileArrow"})),a&&r.a.createElement("div",{className:"Header-ProfileDropdown"},r.a.createElement("div",{className:"Header-ProfileInfo"},r.a.createElement("p",{className:"Header-ProfileName"},u.name),r.a.createElement("p",{className:"Header-ProfileEmail"},u.email)),r.a.createElement("ul",{className:"Header-ProfileMenu"},r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){v.clearToken(),m(I())}))},className:"Header-ProfileLink"},"\u0412\u044b\u0439\u0442\u0438"))))))};var J=function(e){var t=e.calorie,a=e.quantity,n=e.type;return Math.round(t*a/(99*(["milliliter","gram"].indexOf(n)>-1)+1))},W=function(e,t){return e+t},K=function(e){return e[0]},X={quantity:{portion:["\u043f\u043e\u0440\u0446\u0438\u044f","\u043f\u043e\u0440\u0446\u0438\u0438","\u043f\u043e\u0440\u0446\u0438\u0439"],piece:"\u0448\u0442",milliliter:"\u043c\u043b",gram:"\u0433\u0440"},calorie:{portion:"\u043a\u043a\u0430\u043b / \u043f\u043e\u0440\u0446\u0438\u044f",piece:"\u043a\u043a\u0430\u043b / \u0448\u0442",milliliter:"\u043a\u043a\u0430\u043b / 100 \u043c\u043b",gram:"\u043a\u043a\u0430\u043b / 100 \u0433\u0440"}},Z=function(e,t,a){return X[t]&&X[t][a]?"".concat(e," ").concat(Array.isArray(X[t][a])?X[t][a][(n=e)%10===1&&n%100!==11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2]||"":X[t][a]):e;var n},$=function(e){var t=e.name,a=e.quantity,n=e.calorie,c=e.amount,o=e.design,l=e.type;return r.a.createElement("div",{className:"Card-Product Card-Product_".concat(o)},r.a.createElement("div",{className:"Card-ProductInfo"},r.a.createElement("div",{className:"Card-ProductInfo2"},r.a.createElement("div",{className:"Card-ProductName"},t.substr(0,500)),a&&r.a.createElement("div",{className:"Card-ProductQuantity"},Z(a,"quantity",l))),n&&r.a.createElement("div",{className:"Card-ProductCalorie"},Z(n,"calorie",l))),r.a.createElement("div",{className:"Card-ProductSummary Card-ProductSummary_".concat(o)},c," \u043a\u043a\u0430\u043b"))},ee=function(e){var t=e.meal,a=e.sums,n=t._id,c=t.name,o=t.time,i=t.products,u=Object(O.a)(a,2),m=u[0],s=u[1],d=Object(l.b)();return r.a.createElement("div",{className:"Card",onClick:function(){return d(U(n))}},r.a.createElement("div",{className:"Card-Title"},r.a.createElement("div",{className:"Card-Time"},o),r.a.createElement($,{name:1===i.length?i[0].name:c,quantity:1===i.length?i[0].quantity:null,calorie:1===i.length?i[0].calorie:null,type:1===i.length?i[0].type:null,amount:m,design:"alt"})),i.length>1&&r.a.createElement("div",{className:"Card-Products"},i.map((function(e,t){return r.a.createElement($,{key:"".concat(e.name,"-").concat(t),name:e.name,quantity:e.quantity,calorie:e.calorie,type:e.type,amount:s[t]})}))))},te=function(e){var t,a=e.date,c=Object(n.useState)(!0),o=Object(O.a)(c,2),u=o[0],m=o[1],s=Object(l.c)((t=a,function(e){return e.meals.filter((function(e){return e.date===t})).sort(N)})),d=s.map((function(e){return e.products.map(J)})).map((function(e){return[e.reduce(W),e]})),f=d.map(K).reduce(W);return r.a.createElement("div",{className:"Day"},r.a.createElement("div",{className:"Day-Title",onClick:function(){return m((function(e){return!e}))}},r.a.createElement("div",{className:"Day-TitleLabel"},i(a).format("DD MMMM YYYY")),r.a.createElement("div",{className:"Day-TitleSummary"},f," \u043a\u043a\u0430\u043b")),r.a.createElement("div",{className:"Day-Cards".concat(u?"":" Day-Cards_hidden")},s.map((function(e,t){return r.a.createElement(ee,{key:e._id,meal:e,sums:d[t]})}))))},ae=function(){var e=Object(l.c)(S),t=Object(l.c)(y);return r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"container mx-auto"},"loading"===e?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430":"error"===e?"\u041e\u0448\u0438\u0431\u043a\u0430":t.length?t.map((function(e){return r.a.createElement(te,{key:e,date:e})})):r.a.createElement("p",{className:"mt-5"},"\u041f\u0440\u0438\u0435\u043c\u043e\u0432 \u043f\u0438\u0449\u0438 \u043d\u0435\u0442. \u0421\u0430\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0439!")))},ne=function(){var e=Object(l.b)();return r.a.createElement("div",{className:"AddNewButton",onClick:function(){return e(U())}})},re=a(31),ce=a(29);function oe(e,t,a){return"Input".concat(e?"":" Input_noBorder Input_noLeft").concat(t?"":" Input_noRight").concat(a?" ".concat(a):"")}var le=function(e){var t=e.title,a=e.name,n=e.placeholder,c=e.value,o=e.onChange;return r.a.createElement("label",{className:"Form-Field"},r.a.createElement("div",{className:"Form-Label"},t),r.a.createElement("input",{name:a,type:"text",value:c,className:"Input",placeholder:n,onChange:o}))},ie=function(e){var t=e.name,a=e.value,n=e.options,c=e.first,o=void 0!==c&&c,l=e.last,i=void 0!==l&&l,u=e.className,m=void 0===u?"":u,s=e.onChange;return r.a.createElement("div",{className:"relative"},r.a.createElement("select",{name:t,value:a,className:oe(o,i,m),onChange:s},Object.entries(n).map((function(e){var t=Object(O.a)(e,2),a=t[0],n=t[1];return r.a.createElement("option",{key:a,value:a},n)}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))},ue=function(e){var t=e.first,a=void 0!==t&&t,n=e.last,c=void 0!==n&&n,o=e.children;return r.a.createElement("span",{className:oe(a,c," Input_disabled w-auto")},o)},me=function(e){var t=e.name,a=e.value,n=e.first,c=void 0!==n&&n,o=e.last,l=void 0!==o&&o,i=e.className,u=void 0===i?"":i,m=e.onChange;return r.a.createElement("input",{type:"text",className:oe(c,l,u),name:t,value:a,onChange:m})},se=function(e){var t=e.title,a=e.children;return r.a.createElement("label",{className:"Form-Field"},r.a.createElement("div",{className:"Form-Label"},t),r.a.createElement("div",{className:"flex"},a))},de=function(e){var t=e.className;return r.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1792 1792"},r.a.createElement("path",{d:"M704 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V736q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V736q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V736q0-14 9-23t23-9h64q14 0 23 9t9 23zm128 724V512H448v948q0 22 7 40.5t14.5 27 10.5 8.5h832q3 0 10.5-8.5t14.5-27 7-40.5zM672 384h448l-48-117q-7-9-17-11H738q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5H480q-66 0-113-58.5T320 1464V512h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"}))},fe={portion:"1 \u043f\u043e\u0440\u0446\u0438\u044e",piece:"1 \u0448\u0442",gram:"100 \u0433\u0440",milliliter:"100 \u043c\u043b"},Ee={portion:"\u043f\u043e\u0440\u0446",piece:"\u0448\u0442",gram:"\u0433\u0440",milliliter:"\u043c\u043b"},pe={name:"",calorie:"",type:"portion",quantity:""},ve=function(){var e=i(),t=Object(l.b)(),a=Object(l.c)(C),n=function(e){t(R()),t(function(e){return function(t,a,n){return fetch("".concat("https://oske-nutrition-server.herokuapp.com","/delete?id=").concat(e,"&id_token=").concat(n.getToken),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return e.err?console.log(e.err):t(q(e))}))}}(e)).then((function(){return t(z())})).then((function(){return t(H())})).catch((function(e,a,n){console.log("error",e,a,n),t(B())}))},c=Object(ce.a)({initialValues:Object(l.c)(_)||{name:"",date:e.format("YYYY-MM-DD"),time:e.format("HH:mm"),products:[Object(d.a)({},pe)]},onSubmit:function(e){var a=e._id,n=Object(re.a)(e,["_id"]);t(R()),t(a?function(e,t){return function(a,n,r){return fetch("".concat("https://oske-nutrition-server.herokuapp.com","/update?id=").concat(e,"&id_token=").concat(r.getToken),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return e.err?console.log(e.err):a(F(e))}))}}(a,n):function(e){return function(t,a,n){return fetch("".concat("https://oske-nutrition-server.herokuapp.com","/create?id_token=").concat(n.getToken),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e.err?console.log(e.err):t(T(e))}))}}(n)).then((function(e,a,n){console.log("modal success",e,a,n),t(z())})).then((function(e,a,n){console.log("close modal",e,a,n),t(H())})).catch((function(e,a,n){console.log("error",e,a,n),t(B())}))},onReset:function(){return t(H())}}),o=c.values,u=c.setFieldValue,m=c.handleSubmit,s=c.handleChange,f=c.handleReset,E=o.products.length,p=function(){u("products",o.products.concat(Object(d.a)({},pe)))};return r.a.createElement("form",{onSubmit:m,className:"Form".concat(a?" Form_loading":"")},a&&r.a.createElement(V,null),r.a.createElement("div",{className:"Form-Container"},r.a.createElement("div",{className:"Form-Title"},o._id?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0435\u043c \u043f\u0438\u0449\u0438":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u0435\u043c \u043f\u0438\u0449\u0438"),r.a.createElement(le,{name:"date",title:"\u0414\u0430\u0442\u0430",placeholder:"\u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413",value:o.date,onChange:s}),r.a.createElement(le,{name:"time",title:"\u0412\u0440\u0435\u043c\u044f",placeholder:"\u0427\u0427:\u041c\u041c",value:o.time,onChange:s}),Object.values(o.products).map((function(e,t){return r.a.createElement("div",{className:"Form-C",key:"product-".concat(t)},r.a.createElement(le,{name:"products[".concat(t,"].name"),title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:o.products[t].name,onChange:s}),r.a.createElement(se,{title:"\u041a\u0430\u043b\u043e\u0440\u0438\u0439\u043d\u043e\u0441\u0442\u044c"},r.a.createElement(me,{value:o.products[t].calorie,onChange:s,name:"products[".concat(t,"].calorie"),first:!0}),r.a.createElement(ue,null,"\u043d\u0430"),r.a.createElement(ie,{className:"w-32 Input Input_noBorder Input_noLeft",value:o.products[t].type,onChange:s,name:"products[".concat(t,"].type"),last:!0,options:fe})),r.a.createElement(se,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"},r.a.createElement(me,{value:o.products[t].quantity,onChange:s,name:"products[".concat(t,"].quantity"),first:!0}),r.a.createElement(ue,{last:!0},Ee[o.products[t].type])),r.a.createElement("div",{className:"flex justify-between"},t===E-1&&r.a.createElement("button",{type:"button",className:"Form-Add",onClick:p},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435"),E>1&&r.a.createElement("button",{type:"button",className:"Form-Remove",onClick:(a=t,function(){u("products",o.products.filter((function(e,t){return a!==t})))})},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")));var a})),E>1&&r.a.createElement(le,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u0435\u043c\u0430 \u043f\u0438\u0449\u0438",name:"name",value:o.name,onChange:s})),r.a.createElement("div",{className:"Form-Footer"},o._id&&r.a.createElement("button",{onClick:function(){return n(o._id)},type:"button",className:"Form-RemoveItem"},r.a.createElement(de,{className:"Form-Trash"})),r.a.createElement("div",{className:"Form-Actions"},r.a.createElement("button",{type:"button",onClick:f,className:"Form-Action Form-Action_secondary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement("button",{type:"submit",className:"Form-Action"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))},he=function(e){e.children;var t=Object(l.c)(j);return Object(n.useEffect)((function(){if(t)return document.body.style.paddingRight=function(){var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var t=document.createElement("div");e.appendChild(t);var a=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),a}()+"px",document.body.classList.add("scroll-lock"),function(){document.body.classList.remove("scroll-lock"),document.body.style.paddingRight="0"}}),[t]),t?r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"Modal-Body"},r.a.createElement(ve,null))):null},be=function(){var e=Object(l.b)(),t=Object(l.c)(S);return Object(n.useEffect)((function(){e((function(e,t,a){window.getState=t,e(w()),fetch("".concat("https://oske-nutrition-server.herokuapp.com","/read?id_token=").concat(a.getToken)).then((function(t){return t.ok?t.json():e(D())})).then((function(t){var n=t.error,r=t.user,c=t.data;if(n)return a.clearToken(),e(I());e(M(c)),e(P(r))})).catch((function(){return e(D())}))}))}),[]),"loading"===t?r.a.createElement(V,null):"error"===t?"\u041e\u0448\u0438\u0431\u043a\u0430":r.a.createElement("div",{className:"App"},r.a.createElement(Q,null),r.a.createElement(ae,null),r.a.createElement(ne,null),r.a.createElement(he,null))},Oe="\ud83e\udd55\ud83e\udd66\ud83e\udd6c\ud83c\udf7d\ud83c\udf74\ud83e\udd44\ud83e\udd62\ud83c\udf70\ud83e\uddc1\ud83c\udf65\ud83e\udd58\ud83c\udf72\ud83c\udf5c\ud83c\udf59\ud83c\udf71\ud83c\udf57\ud83c\udf56\ud83e\udd69\ud83c\udf55\ud83c\udf54\ud83c\udf5f\ud83c\udf2d\ud83e\udd53\ud83e\uddc7\ud83e\udd5e\ud83e\uddc0\ud83e\udd57\ud83e\udd60".split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/).filter(Boolean),ge=function(){var e=Object(n.useState)((function(){return Math.floor(Math.random()*Oe.length)})),t=Object(O.a)(e,1)[0],a=Object(l.b)();return r.a.createElement("div",{className:"flex h-full items-center justify-center"},r.a.createElement("div",{className:"py-10 bg-white rounded-lg shadow-lg max-w-2xl text-center w-11/12 px-4"},r.a.createElement("p",{className:"text-6xl"},Oe[t]),r.a.createElement("p",{className:"text-2xl font-semibold"},"FoodLog"),r.a.createElement("p",{className:"mb-6"},"\u0421\u0443\u043f\u0435\u0440 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430 \u043a\u0430\u043b\u043b\u043e\u0440\u0438\u0439!"),r.a.createElement("button",{onClick:function(){window.gapi.auth2.getAuthInstance().signIn().then((function(e){var t=e.getAuthResponse().id_token;v.setToken(t),a(x())}))},className:"hover:shadow-md transition ease-in-out duration-300 px-4 py-2 rounded flex items-center mx-auto bg-gray-200 border border-gray-400 text-gray-700 font-medium"},r.a.createElement("svg",{className:"w-5 h-5 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 533.5 544.3"},r.a.createElement("path",{d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",fill:"#4285f4"}),r.a.createElement("path",{d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",fill:"#34a853"}),r.a.createElement("path",{d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",fill:"#fbbc04"}),r.a.createElement("path",{d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",fill:"#ea4335"})),"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google")))};var Ne=function(){var e=v.getToken,t=Object(l.c)(L),a=Object(l.b)();return e&&a(x()),t?r.a.createElement(be,null):r.a.createElement(ge,null)};a(45);i.locale("ru"),o.a.render(r.a.createElement(l.a,{store:h},r.a.createElement(Ne,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3a7f838e.chunk.js.map