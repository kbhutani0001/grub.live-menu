(this["webpackJsonpgrub.live-menu"]=this["webpackJsonpgrub.live-menu"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"Light":{"color":"#000000","backgroundColor":"#ffffff","fontFamily":"lato"},"Dark":{"color":"#ffffff","backgroundColor":"#000000","fontFamily":"lato"},"Christmas":{"color":"#db3d3d","backgroundColor":"#003301","backgroundImage":"url(\\"https://res.cloudinary.com/kartikay/image/upload/v1606767929/christmasbg_x98khj.svg\\")","fontFamily":"TypewriterBold"}}')},21:function(e,t,a){e.exports=a.p+"static/media/grub.live-logo.3b6b4ff3.svg"},23:function(e){e.exports=JSON.parse('{"a":"https://grub-live-backend.herokuapp.com/"}')},24:function(e,t,a){e.exports=a.p+"static/media/three_dots_loading.4d1c15f3.svg"},26:function(e,t,a){e.exports=a.p+"static/media/grub.live-logo-yellow.8cd86dd6.svg"},28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=(a(33),a(34),a(27)),o=function(){return l.a.createElement("div",{className:"container",style:{textAlign:"center"}},l.a.createElement("br",null),l.a.createElement(i.a,{style:{width:"80%",margin:"auto"},facingMode:"rear",onError:function(e){return console.log(e)},onScan:function(e){return function(e){null!=e&&(e.includes("glqr.me")?window.location.href=e:alert("That doesn't look a QR code we generated!"))}(e)}}))},m=a(21),s=a.n(m),u=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-item"},l.a.createElement("a",{href:"https://grub.live"},l.a.createElement("img",{className:"logo",src:s.a,alt:"Grub.live logo"})))))},g=a(10),d=a(22),E=a(12),f=function(e){var t=e.itemName,a=e.itemDescription,n=e.itemPrice;e.customStyling;return l.a.createElement("div",{className:"menu-item"},l.a.createElement("p",{className:"item-name"},t),l.a.createElement("p",{className:"item-price"},n),a?l.a.createElement("i",{className:"item-description"},a):null)},h=function(e){var t=Object(n.useState)(e.restaurantDetails),a=Object(g.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),o=Object(g.a)(i,2),m=o[0],s=o[1],u=e.customizedMenu,h=Object(n.useState)(E.Light),p=Object(g.a)(h,2),v=p[0],b=p[1];return Object(n.useEffect)((function(){if(u&&r.menu.theme&&(E[r.menu.theme.themeName]?b(E[r.menu.theme.themeName]):(console.log("No theme name found. Reading theme info"),b(r.menu.theme))),""===m)c(e.restaurantDetails);else{var t=JSON.parse(JSON.stringify(e.restaurantDetails)),a=[];t.menu.categories.forEach((function(e){if(e.title.toLowerCase().includes(m.toLowerCase().trim()))a.push(e);else{for(var t=[],n=0;n<e.items.length;n++)e.items[n].itemName.toLowerCase().includes(m.toLowerCase().trim())&&t.push(e.items[n]);e.items=t,t.length>0&&a.push(e)}})),t.menu.categories=a,c(t)}}),[e.restaurantDetails,r,m,u]),l.a.createElement("div",{className:"shadow-box",style:u?Object(d.a)({},v):{}},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,r.logo?l.a.createElement("img",{src:r.logo,alt:"",className:"restaurant-logo"}):l.a.createElement("i",{className:"eos-icons",style:{color:"red",fontSize:"1em",margin:"8px"}},"local_dining"),r.restaurantName),u?l.a.createElement("h4",null,r.bio):l.a.createElement(l.a.Fragment,null)),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("input",{type:"text",name:"search-restaurant",className:"form-input",placeholder:"Search Menu",onKeyUp:function(e){return s(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("div",null,r.menu.categories.map((function(e,t){return""!==e.title?l.a.createElement("div",{key:t},l.a.createElement("h2",null,e.title),l.a.createElement("hr",null),e.items.length>0?l.a.createElement("div",null,r.menu.categories[t].items.map((function(e,t){return l.a.createElement(f,Object.assign({},e,{key:t}))}))):null):l.a.createElement("div",{key:t})}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{style:{textAlign:"center",margin:"50px 0px 0px 0px"}},"Menu created with"," ",l.a.createElement("a",{style:{color:"inherit"},href:"www.grub.live"},"www.grub.live")))},p=a(23),v=a(1),b=a(24),w=a.n(b),y=function(e){var t=Object(n.useState)(null),a=Object(g.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(g.a)(i,2),m=o[0],s=o[1],u=Object(v.f)().menuId;return m||fetch("".concat(p.a,"/view?q=").concat(u)).then((function(e){return e.json()})).then((function(e){s(!0),console.log(e),e.success&&c(e.data)})),l.a.createElement("div",null,m?l.a.createElement("div",null,null!=r?l.a.createElement("div",{className:"preview-menu"},l.a.createElement(h,{restaurantDetails:r,customizedMenu:r.customizedMenu})):l.a.createElement("div",{style:{textAlign:"center",marginBottom:"40%"}},l.a.createElement("h1",null,"Incorrect QR Code"),l.a.createElement("p",null,"Looks like that is not a valid QR code, try sanning again..."),l.a.createElement("button",{className:"black-yellow",onClick:function(){return window.location.href="/"}},"Scan QR Code"))):l.a.createElement("div",{style:{textAlign:"center",marginBottom:"40%"}},l.a.createElement("img",{alt:"",className:"loading-icon",src:w.a})))},N=a(26),k=a.n(N),x=function(){return l.a.createElement("footer",null,l.a.createElement("div",null,l.a.createElement("img",{src:k.a,alt:"Grub.live logo",className:"logo"}),l.a.createElement("div",null,"Rejuvenating the dining experience.")),l.a.createElement("div",{className:"footer-links"},l.a.createElement("a",{href:"https://grub.live/#/contact",className:"hyperlink-invert"},"Contact Us"),l.a.createElement("a",{href:"https://grub.live/#/how-it-works ",className:"hyperlink-invert"},"How it works"),l.a.createElement("a",{href:"https://grub.live/#/about",className:"hyperlink-invert"},"About Us")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"Made with \u2764 in India"),l.a.createElement("br",null),l.a.createElement("span",null,"\xa9 2020 Grub.live"))},O=a(15);var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(O.a,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/",children:l.a.createElement(o,null)}),l.a.createElement(v.a,{exact:!0,path:"/:menuId"},l.a.createElement(y,null)))),l.a.createElement(x,null))},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),S()}},[[28,1,2]]]);
//# sourceMappingURL=main.3c243dcc.chunk.js.map