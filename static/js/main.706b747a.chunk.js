(this["webpackJsonpgrub.live-menu"]=this["webpackJsonpgrub.live-menu"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={MenuHeader:"MenuHeader_MenuHeader__1HN_6",imgWrapper:"MenuHeader_imgWrapper__1R7VO",firstRow:"MenuHeader_firstRow__2Ff0X",socialIcons:"MenuHeader_socialIcons__3qw6a",secondRow:"MenuHeader_secondRow__3tlVJ"}},function(e,t,a){e.exports={offersWrapper:"Offers_offersWrapper__3jQsk",offersMarque:"Offers_offersMarque__RH4ci",starIcon:"Offers_starIcon__2DIpE",seeAllBtn:"Offers_seeAllBtn__10_Wm"}},,,,,function(e,t,a){e.exports={body:"MenuSectionModal_body__1umRs",button:"MenuSectionModal_button__3faMO",dot:"MenuSectionModal_dot__riFmZ"}},,,,,,,function(e,t,a){e.exports=a.p+"static/media/grub.live-logo.3b6b4ff3.svg"},function(e,t,a){e.exports=a.p+"static/media/instagramLogo.5c6536ea.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook.89a9c066.svg"},function(e,t,a){e.exports=a.p+"static/media/searchIcon.02dda61b.svg"},function(e,t,a){e.exports={OfferItem:"OfferItem_OfferItem__1VFhI"}},function(e,t,a){e.exports={seeAllBtn:"OffersModal_seeAllBtn__r9QI7"}},function(e,t,a){e.exports={bottomBarWrapper:"BottomBarWrapper_bottomBarWrapper__2ihLL"}},function(e){e.exports=JSON.parse('{"a":"https://grub-live-backend.herokuapp.com/"}')},function(e,t,a){e.exports=a.p+"static/media/three_dots_loading.4d1c15f3.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/grub.live-logo-yellow.8cd86dd6.svg"},function(e,t,a){e.exports=a(48)},,,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(41),a(42),a(43),a(22)),i=a.n(o),s=function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-item"},r.a.createElement("a",{href:"https://grub.live"},r.a.createElement("img",{className:"logo",src:i.a,alt:"Grub.live logo"})))))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement("div",{className:"container",style:{textAlign:"center",minHeight:600}},r.a.createElement("h2",null,"Looks like you scanned a wrong QR, visit ",r.a.createElement("a",{href:"https://grub.live",rel:"noopener noreferrer",target:"_blank"},"www.grub.live")," to know more about us.")))},u=a(7),f=a(14),E=function(e){var t=e.itemName,a=void 0===t?"":t,n=e.itemDescription,l=void 0===n?"":n,c=e.itemPrice,o=void 0===c?"":c,i=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"menu-item"},r.a.createElement("td",null,r.a.createElement("p",{className:"item-name",style:{WebkitTextStroke:"0.02em ".concat(i.color)}},a),l?r.a.createElement("i",{className:"item-description"},l):null),r.a.createElement("td",null,r.a.createElement("p",{className:"item-price",style:{WebkitTextStroke:"0.02em ".concat(i.color)}},o))))},d=function(e){var t=e.title,a=e.items,l=e.theme,c=e.setCurrentSection,o=r.a.createRef(),i=a.map((function(e,t){return r.a.createElement(E,Object.assign({},e,{theme:l,key:t}))}));return Object(n.useEffect)((function(){var e=function(e){if(o&&o.current){var a=o.current.getBoundingClientRect();a.y>0&&a.y<=window.innerHeight/2&&c(t)}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[o,c,t]),r.a.createElement("div",{ref:o},r.a.createElement("h3",{className:"menu-category",id:t.trim().toLowerCase().split(" ").join("-")},t),a.length>0?r.a.createElement("div",{className:"menu-items"},r.a.createElement("table",{className:"category-table"},r.a.createElement("tbody",null,i))):null)},p=r.a.memo((function(e){var t=e.restaurantDetails;return r.a.createElement("div",{className:"menu-wrapper",style:t.menu.theme?Object(f.a)({},t.menu.theme):{}},t.menu.categories.map((function(a,n){return""!==a.title?r.a.createElement(d,{key:n,setCurrentSection:e.setCurrentSection,title:a.title,items:a.items,theme:t.menu.theme}):r.a.createElement("div",{key:n})})))})),g=a(9),v=a.n(g),h=a(23),b=a.n(h),_=a(24),N=a.n(_),w=function(e){var t=e.platform,a=e.link;if(!t)throw new Error("Platform is required!");switch(t){case"facebook":return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a},r.a.createElement("img",{src:N.a,alt:"Facebook"}));case"instagram":return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a},r.a.createElement("img",{src:b.a,alt:"Instagram"}));default:return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a},r.a.createElement("i",{className:"eos-icons",style:{verticalAlign:"middle",padding:"0px 0px 2px 4px",fontSize:26}},"public"))}},k=a(25),y=a.n(k),O=function(e){var t=e.restaurantDetails,a=Object(n.useState)(""),l=Object(u.a)(a,2),c=l[0],o=l[1];Object(n.useEffect)((function(){!function(){if(console.log("search called: ".concat(c)),""===c)e.setRestaurantDetails(e.constRestaurantDetails);else{var t=e.constRestaurantDetails,a=[];t.menu.categories.forEach((function(e){if(e.title.toLowerCase().includes(c.toLowerCase().trim()))a.push(e);else{for(var t=[],n=0;n<e.items.length;n++)e.items[n].itemName.toLowerCase().includes(c.toLowerCase().trim())&&t.push(e.items[n]);e.items=t,t.length>0&&a.push(e)}})),t.menu.categories=a,console.log(t),e.setRestaurantDetails(t)}}()}),[c]);var i=[];if(t.social)for(var s in t.social)i.push(r.a.createElement(w,{key:s,platform:s,link:t.social[s]}));return r.a.createElement("div",{className:v.a.MenuHeader,style:t.menu.theme?Object(f.a)({},t.menu.theme):{}},r.a.createElement("div",{style:{padding:8}},r.a.createElement("div",{className:v.a.imgWrapper},r.a.createElement("img",{src:t.logo,alt:"Logo"})),r.a.createElement("div",{className:v.a.firstRow},r.a.createElement("span",null,t.restaurantName),r.a.createElement("div",{className:v.a.socialIcons},i)),r.a.createElement("div",{className:v.a.secondRow},r.a.createElement("input",{type:"text",placeholder:"Search Dishes eg. Chilly chicken",onChange:function(e){return o(e.target.value)},value:c}),r.a.createElement("button",null,r.a.createElement("img",{src:y.a,alt:""})))))},x=a(13),S=a(15),j=a.n(S),I=function(e){var t=e.categories.map((function(t,a){var n=t.category,l=t.count,c=e.currentSection.trim().toLowerCase().split(" ").join("-")===n.trim().toLowerCase().split(" ").join("-");return r.a.createElement("a",{onClick:function(){return function(e){var t=document.getElementById(e.trim().toLowerCase().split(" ").join("-"));t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}(n)},key:a},r.a.createElement("div",{style:c?{fontWeight:"bold",color:"#000000"}:{}},c?r.a.createElement("div",{className:j.a.dot}):r.a.createElement("div",null),r.a.createElement("span",null,n),r.a.createElement("span",{style:{textAlign:"right"}},l)))}));return r.a.createElement(x.a,{trigger:r.a.createElement("button",{className:j.a.button},"BROWSE MENU"),modal:!0,nested:!0},(function(e){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:j.a.body},t))}))},C=a(10),M=a.n(C),R=a(26),D=a.n(R),L=function(e){var t=e.offAmount,a=e.content;return r.a.createElement("div",{className:D.a.OfferItem},t?r.a.createElement("h5",null,t,"% OFF "):r.a.createElement(r.a.Fragment,null),r.a.createElement("p",null,a),r.a.createElement("hr",null))},B=a(27),F=a.n(B),W=function(e){var t=e.offers.map((function(e,t){return r.a.createElement(L,{key:t,content:e})}));return r.a.createElement(x.a,{modal:!0,nested:!0,trigger:r.a.createElement("div",{className:F.a.seeAllBtn},"See all ",r.a.createElement("i",{className:"eos-icons"},"arrow_drop_up"))},r.a.createElement("div",{className:"modal"},r.a.createElement("div",null,t)))},H=function(e){var t=e.offers;return r.a.createElement(r.a.Fragment,null,t&&t.length>0?r.a.createElement("div",{className:M.a.offersWrapper},r.a.createElement("div",{className:M.a.offersMarque},r.a.createElement("marquee",null,r.a.createElement("span",{className:"eos-icons ".concat(M.a.starIcon)}," star "),t.map((function(e,t){return r.a.createElement("i",{key:t},e," ",r.a.createElement("span",{className:"eos-icons ".concat(M.a.starIcon)}," ","star"," "))})))),r.a.createElement(W,{offers:t})):r.a.createElement(r.a.Fragment,null))},A=a(28),q=a.n(A),J=function(e){var t=e.currentSection,a=e.restaurantDetails;return r.a.createElement("div",{className:q.a.bottomBarWrapper},r.a.createElement(I,{currentSection:t,categories:a.menu.categories.map((function(e){return{category:e.title||" ",count:e.items.length}}))}),r.a.createElement(H,{offers:a.offers}))},Q=function(e){var t=JSON.parse(JSON.stringify(e.restaurantDetails)),a=Object(n.useState)(e.restaurantDetails),l=Object(u.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(c.menu.categories[0]?c.menu.categories[0].title:""),s=Object(u.a)(i,2),m=s[0],f=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{restaurantDetails:c,setRestaurantDetails:o,constRestaurantDetails:t}),r.a.createElement("div",{style:{minHeight:"400px"}},r.a.createElement(p,{setCurrentSection:f,restaurantDetails:c})),r.a.createElement(J,{currentSection:m,restaurantDetails:c}))},P=a(29),T=a(2),V=a(30),G=a.n(V),U=a(31),z=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],f=Object(T.f)().menuId;return Object(n.useEffect)((function(){fetch("".concat(P.a,"/view?q=").concat(f)).then((function(e){return e.json()})).then((function(e){m(!0),console.log(e),e.success&&c(e.data)}))}),[f]),r.a.createElement("div",null,s?r.a.createElement("div",null,null!=l?r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,l.restaurantName," Menu"),r.a.createElement("meta",{name:"description",content:"".concat(l.restaurantName," Digital menu. ").concat(l.bio)}),r.a.createElement("meta",{name:"keywords",content:"food, restaurant, ".concat(l.restaurantName)})),r.a.createElement("div",{className:"preview-menu"},r.a.createElement(Q,{restaurantDetails:l}))):r.a.createElement("div",{style:{textAlign:"center",marginBottom:"40%"}},r.a.createElement("h1",null,"Incorrect QR Code"),r.a.createElement("p",null,"Looks like that is not a valid QR code, try sanning again..."),r.a.createElement("button",{className:"black-yellow",onClick:function(){return window.location.href="/"}},"Scan QR Code"))):r.a.createElement("div",{style:{textAlign:"center",marginBottom:"40%"}},r.a.createElement("img",{alt:"",className:"loading-icon",src:G.a})))},X=a(35),Z=a.n(X),K=function(){return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("img",{src:Z.a,alt:"Grub.live logo",className:"logo"}),r.a.createElement("div",null,"Rejuvenating the dining experience.")),r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"https://grub.live/#/contact",className:"hyperlink-invert"},"Contact Us"),r.a.createElement("a",{href:"https://grub.live/#/how-it-works ",className:"hyperlink-invert"},"How it works"),r.a.createElement("a",{href:"https://grub.live/#/about",className:"hyperlink-invert"},"About Us")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"Made with \u2764 in India"),r.a.createElement("br",null),r.a.createElement("span",null,"\xa9 2020 Grub.live"))},Y=a(17);var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/",children:r.a.createElement(m,null)}),r.a.createElement(T.a,{exact:!0,path:"/:menuId"},r.a.createElement(z,null)))),r.a.createElement(K,null))},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),ee()}],[[36,1,2]]]);
//# sourceMappingURL=main.706b747a.chunk.js.map