(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),s=n(1),b=(n(9),n(0)),r=function(t,e){var n=e.find((function(e){return e.id===t}));return void 0===n?e[0]:n},d=function(t){var e=t.selectedTabId,n=t.tabs,c=t.onTabSelected;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"tab",children:n.map((function(t){return Object(b.jsx)("button",{className:"tablinks",type:"button",onClick:function(){return function(t,e,n){e.id!==t&&n(e)}(e,t,c)},children:t.title},t.id)}))}),Object(b.jsx)("div",{className:"tabcontent",children:Object(b.jsx)("p",{children:r(e,n).content})})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)(o[0]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{children:["Selected tab is\xa0",n.title]}),Object(b.jsx)(d,{tabs:o,onTabSelected:c,selectedTabId:n.id})]})};a.a.render(Object(b.jsx)(l,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.be454251.chunk.js.map