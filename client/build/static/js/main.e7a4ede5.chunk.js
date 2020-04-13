(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){e.exports=a(77)},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),l=a.n(c),o=a(16),i=a(79),m=a(80),u=a(81),s=a(82),E=a(83),d=a(84),p=a(85),f=a(86),b=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(i.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(m.a,null,r.a.createElement(u.a,{href:"/"},"Shopping List"),r.a.createElement(s.a,{onClick:function(){return c(!a)}}),r.a.createElement(E.a,{isOpen:a,navbar:!0},r.a.createElement(d.a,{className:"ml-auto",navbar:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{href:"https://github.com/azamat-afzalov"},"Github")))))))},g=a(87),h=a(88),O=a(89),v=a(98),_=a(96),I=a(14),y=a(19),T=a.n(y),j=Object(I.b)((function(e){return{item:e.item}}),{getItems:function(){return function(e){T.a.get("/api/items").then((function(t){e({type:"GET_ITEMS",payload:t.data})}))}},deleteItem:function(e){return function(t){return T.a.delete("/api/items/".concat(e)).then((function(a){t({type:"DELETE_ITEM",payload:e})})),{type:"DELETE_ITEM",payload:e}}}})((function(e){var t=e.item.items,a=function(t){console.log(t.target.id),e.deleteItem(t.target.id)};return Object(n.useEffect)((function(){e.getItems()}),[]),r.a.createElement(g.a,{className:"mt-3"},r.a.createElement(v.a,{className:"shopping-list"},t.map((function(e){var t=e._id,n=e.name;return r.a.createElement(_.a,{key:t,timeout:500,classNames:"fade"},r.a.createElement(h.a,null,r.a.createElement(O.a,{className:"remove-btn",color:"danger",size:"sm",id:t,onClick:a},"\xd7"),n))}))))})),D=a(97),S=a(90),k=a(91),w=a(92),N=a(93),M=a(94),L=a(95),A=Object(I.b)((function(e){return{item:e.item}}),{addItem:function(e){return function(t){return T.a.post("/api/items",e).then((function(e){return t({type:"ADD_ITEM",payload:e.data})})),{type:"ADD_ITEM",payload:e}}}})((function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],s=m[1],E=function(){return l((function(e){return!e}))};return r.a.createElement("div",null,r.a.createElement(O.a,{color:"dark",className:"mb-2",onClick:E},"Add Item"),r.a.createElement(D.a,{isOpen:c,toggle:E},r.a.createElement(S.a,{toggle:E},"Add to Shopping List"),r.a.createElement(k.a,null,r.a.createElement(w.a,{onSubmit:function(t){t.preventDefault();var a={name:u};e.addItem(a),E(),s("")}},r.a.createElement(N.a,null,r.a.createElement(M.a,{for:"item"}," Item "),r.a.createElement(L.a,{type:"text",name:"name",id:"item",placeholder:"add shopping item",onChange:function(e){s(e.target.value)},value:u}),r.a.createElement(O.a,{color:"dark",className:"mt-3",block:!0},"Add Item"))))))})),C=(a(75),a(76),a(11)),G=a(38),X=a(39),x=a(17),z={items:[],loading:!1},B=Object(C.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(x.a)({},e,{items:t.payload,loading:!1});case"DELETE_ITEM":return Object(x.a)({},e,{items:e.items.filter((function(e){return e._id!==t.payload}))});case"ADD_ITEM":return Object(x.a)({},e,{items:[t.payload].concat(Object(X.a)(e.items))});case"ITEMS_LOADING":return Object(x.a)({},e,{loading:!0});default:return e}}}),J=[G.a],R=Object(C.e)(B,{},Object(C.d)(C.a.apply(void 0,J),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var U=function(){return r.a.createElement(I.a,{store:R},r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(m.a,null,r.a.createElement(A,null),r.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.e7a4ede5.chunk.js.map