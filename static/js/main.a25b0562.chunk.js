(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),l=c(2),n=c(1),i=(c(13),c(14),c(5)),o=c.n(i),d=c(0),r=function(e){var t=e.isSelectedTodo,c=e.todo,s=e.setSelectTodo;return Object(d.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":t}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:c.id}),c.completed?Object(d.jsx)("td",{className:"is-vcentered",children:Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}):Object(d.jsx)("td",{"aria-label":"icon is clicked",className:"is-vcentered"}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()({"has-text-success":c.completed,"has-text-danger":!c.completed}),children:c.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{onClick:function(){s(c)},"data-cy":"selectButton",className:"button",type:"button","aria-label":"View Todo",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()("far",{"fa-eye":!t,"fa-eye-slash":t})})})})})]},c.id)},j=function(e){var t=e.visibleTodos,c=e.setSelectTodo,s=e.selectTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id===(null===s||void 0===s?void 0:s.id);return Object(d.jsx)(r,{setSelectTodo:c,isSelectedTodo:t,todo:e})}))})]})},u=function(e){return e.All="all",e.Active="active",e.Completed="completed",e}({}),b=function(e){var t=e.setSelectFilter,c=e.selectFilter,s=e.setFilterField,a=e.filterField;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsx)("select",{className:"is-capitalized",value:c,"data-cy":"statusSelect",onChange:function(e){t(e.target.value)},children:Object.values(u).map((function(e){return Object(d.jsx)("option",{className:"is-capitalized",value:e,children:e},e)}))})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)},"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(d.jsx)("button",{onClick:function(){return s("")},"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"reset field"})})]})]})},h=(c(16),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectTodo,c=e.setSelectTodo,s=Object(n.useState)(null),a=Object(l.a)(s,2),i=a[0],o=a[1],r=Object(n.useState)(!1),j=Object(l.a)(r,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){var e;null!==t&&void 0!==t&&t.userId&&(b(!0),(e=null===t||void 0===t?void 0:t.userId,m("/users/".concat(e))).then((function(e){return o(e)})).catch((function(){console.log("Error loading todos")})).finally((function(){return b(!1)})))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),u?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(d.jsx)("button",{onClick:function(){o(null),c(null)},type:"button",className:"delete","data-cy":"modal-close"})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]})]})},x=c(8);var f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(l.a)(a,2),o=i[0],r=i[1],f=Object(n.useState)(u.All),v=Object(l.a)(f,2),N=v[0],p=v[1],y=Object(n.useState)(""),g=Object(l.a)(y,2),S=g[0],T=g[1],k=Object(n.useState)(!1),F=Object(l.a)(k,2),w=F[0],C=F[1];Object(n.useEffect)((function(){C(!0),m("/todos").then(s).catch((function(){console.log("Error loading todos")})).finally((function(){return C(!1)}))}),[]);var E=Object(n.useMemo)((function(){return function(e,t,c){var s=Object(x.a)(e);switch(t&&(s=s.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase().trim())}))),c){case u.Active:s=s.filter((function(e){return!e.completed}));break;case u.Completed:s=s.filter((function(e){return e.completed}));break;default:return s}return s}(c,S,N)}),[S,N,c]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(b,{filterField:S,setFilterField:T,selectFilter:N,setSelectFilter:p})}),Object(d.jsx)("div",{className:"block",children:w?Object(d.jsx)(h,{}):Object(d.jsx)(j,{selectTodo:o,visibleTodos:E,setSelectTodo:r})})]})})}),o&&Object(d.jsx)(O,{setSelectTodo:r,selectTodo:o})]})};a.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a25b0562.chunk.js.map