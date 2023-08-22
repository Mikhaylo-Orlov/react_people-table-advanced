(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(26),n=c(8),r=(c(36),c(37),c(3)),s=c(4),l=c(15),i=c(6),j=c(5),o=c(0),d=c(9),b=c(10),u=c.n(b);function h(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(j.a)(e,2),a=t[0],n=t[1];null===n?c.delete(a):Array.isArray(n)?(c.delete(a),n.forEach((function(e){c.append(a,e)}))):c.set(a,n)})),c.toString()}var O=c(27),p=c(1),m=["children","params"],x=function(e){var t=e.children,c=e.params,a=Object(O.a)(e,m),r=Object(n.d)(),s=Object(j.a)(r,1)[0];return Object(p.jsx)(n.b,Object(l.a)(Object(l.a)({to:{search:h(s,c)}},a),{},{children:t}))},f=function(){var e=Object(n.d)(),t=Object(j.a)(e,2),c=t[0],a=t[1],r=c.get("sex")||"",s=c.get("query")||"",l=c.getAll("centuries")||[];return Object(p.jsxs)("nav",{className:"panel",children:[Object(p.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(p.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(p.jsx)(x,{className:u()({"is-active":!r}),params:{sex:null},children:"All"}),Object(p.jsx)(x,{className:u()({"is-active":"m"===r}),params:{sex:"m"},children:"Male"}),Object(p.jsx)(x,{className:u()({"is-active":"f"===r}),params:{sex:"f"},children:"Female"})]}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsxs)("p",{className:"control has-icons-left",children:[Object(p.jsx)("input",{"data-cy":"NameFilter",value:s,type:"search",className:"input",placeholder:"Search",onChange:function(e){var t=h(c,{query:e.target.value.trimStart()||null});a(t)}}),Object(p.jsx)("span",{className:"icon is-left",children:Object(p.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(p.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(p.jsx)(x,{"data-cy":"century",className:u()("button mr-1",{"is-info":l.includes(e)}),params:{centuries:l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(d.a)(l),[e])},children:e},e)}))}),Object(p.jsx)("div",{className:"level-right ml-4",children:Object(p.jsx)(x,{"data-cy":"centuryALL",className:u()("button is-success",{"is-outlined":l.length>0}),params:{centuries:null},children:"All"})})]})}),Object(p.jsx)("div",{className:"panel-block",children:Object(p.jsx)(x,{className:"button is-link is-outlined is-fullwidth",params:{query:null,sex:null,centuries:null},children:"Reset all filters"})})]})},v=function(e){var t=e.person,c=t.name,a=t.sex,s=t.born,l=t.died,i=t.fatherName,j=t.motherName,o=t.slug,d=t.mother,b=t.father,h=Object(r.q)().userSlug;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{"data-cy":"person",className:u()({"has-background-warning":o===h}),children:[Object(p.jsx)("td",{children:Object(p.jsx)(n.b,{to:"/people/".concat(o),className:u()({"has-text-danger":"f"===a}),children:c})}),Object(p.jsx)("td",{children:a}),Object(p.jsx)("td",{children:s}),Object(p.jsx)("td",{children:l}),Object(p.jsx)("td",{children:d?Object(p.jsx)(n.b,{to:"/people/".concat(d.slug),className:"has-text-danger",children:j}):j||"-"}),Object(p.jsx)("td",{children:b?Object(p.jsx)(n.b,{to:"/people/".concat(b.slug),children:i}):i||"-"})]})})},g=function(e){var t=e.sortField,c=Object(n.d)(),a=Object(j.a)(c,1)[0],r=a.get("sort")||"",s="desc"===a.get("order"),l=r===t;return Object(p.jsx)(x,{params:{sort:l&&s?null:t,order:l&&!s?"desc":null},children:Object(p.jsx)("span",{className:"icon",children:Object(p.jsx)("i",{className:u()("fas",{"fa-sort":!l,"fa-sort-up":l&&!s,"fa-sort-down":l&&s})})})})},N=function(e){var t=e.people;return Object(p.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[["name","sex","born","died"].map((function(e){return Object(p.jsx)("th",{children:Object(p.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1)),Object(p.jsx)(g,{sortField:e})]})},e)})),Object(p.jsx)("th",{children:"Mother"}),Object(p.jsx)("th",{children:"Father"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e){return Object(p.jsx)(v,{person:e},e.slug)}))})]})},y="https://mate-academy.github.io/react_people-table/api/people.json";function w(e){return new Promise((function(t){return setTimeout(t,e)}))}function k(){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w(500).then((function(){return fetch(y)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(39);var F=function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(p.jsx)("div",{className:"Loader__content"})})},A=function(){var e=Object(o.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(o.useState)(!1),b=Object(j.a)(r,2),u=b[0],h=b[1],O=Object(o.useState)(!1),m=Object(j.a)(O,2),x=m[0],v=m[1],g=Object(n.d)(),y=Object(j.a)(g,1)[0],w=y.get("sex")||"",S=y.get("query")||"",A=y.getAll("centuries")||[],L=y.get("order")||"",P=y.get("sort")||"",C=Object(o.useMemo)((function(){return function(e,t,c,a,n,r){var s=Object(d.a)(e);return c&&(s=s.filter((function(e){var t=c.toLowerCase();return(e.name+e.fatherName+e.motherName).toLowerCase().includes(t)}))),t&&(s=s.filter((function(e){return e.sex===t}))),r.length>0&&(s=s.filter((function(e){return r.includes(String(Math.ceil(e.born/100)))}))),a&&s.sort((function(e,t){switch(a){case"name":case"sex":return e[a].localeCompare(t[a]);case"born":case"died":return e[a]-t[a];default:return 0}})),n&&s.reverse(),s}(c,w,S,P,L,A)}),[w,S,A,P,L]),q=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1),v(!0),e.prev=2,e.next=5,k();case 5:t=e.sent,c=t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})})),a(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),h(!0);case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){q()}),[]);var E=!c.length&&!x&&!u;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"title",children:"People Page"}),Object(p.jsx)("div",{className:"block",children:Object(p.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[c.length>0&&Object(p.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(p.jsx)(f,{})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsxs)("div",{className:"box table-container",children:[x&&Object(p.jsx)(F,{}),u&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),E&&Object(p.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!C.length&&!x&&Object(p.jsx)("p",{children:"There are no people matching the current search criteria"}),c.length>0&&Object(p.jsx)(N,{people:C})]})})]})})]})},L=function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},P=function(){return Object(p.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"navbar-brand",children:[Object(p.jsx)(n.c,{className:L,to:"/",children:"Home"}),Object(p.jsx)(n.c,{className:L,to:"/people",children:"People"})]})})})},C=(c(40),function(){return Object(p.jsx)("h1",{className:"title",children:"Home Page"})}),q=function(){return Object(p.jsx)("h1",{className:"title",children:"Page not found"})},E=function(){return Object(p.jsxs)("div",{"data-cy":"app",children:[Object(p.jsx)(P,{}),Object(p.jsx)("main",{className:"section",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(r.d,{children:[Object(p.jsx)(r.b,{path:"/home",element:Object(p.jsx)(r.a,{to:"/",replace:!0})}),Object(p.jsx)(r.b,{path:"/",element:Object(p.jsx)(C,{})}),Object(p.jsxs)(r.b,{path:"/people",children:[Object(p.jsx)(r.b,{index:!0,element:Object(p.jsx)(A,{})}),Object(p.jsx)(r.b,{path:":userSlug",element:Object(p.jsx)(A,{})})]}),Object(p.jsx)(r.b,{path:"*",element:Object(p.jsx)(q,{})})]})})})]})};Object(a.createRoot)(document.getElementById("root")).render(Object(p.jsx)(n.a,{children:Object(p.jsx)(E,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.caabec40.chunk.js.map