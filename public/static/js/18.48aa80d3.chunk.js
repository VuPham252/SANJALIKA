(this.webpackJsonpsanjalika_project=this.webpackJsonpsanjalika_project||[]).push([[18],{131:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return b}));var s=t(19),n=t(20),a=t(22),l=t(21),i=t(0),r=t(23),j=t(51),o=t.n(j),d=t(1),b=function(e){Object(a.a)(t,e);var c=Object(l.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=c.call(this,e)).handleClick1=function(){!0!==n.state.flag[0]&&n.setState({color:["#C19D60","","","",""],flag:[!0,!1,!1,!1,!1],numberInit:1,numberEnd:8})},n.handleClick2=function(){!0!==n.state.flag[1]&&n.setState({color:["","#C19D60","","",""],flag:[!1,!0,!1,!1,!1],numberInit:9,numberEnd:13})},n.handleClick3=function(){!0!==n.state.flag[2]&&n.setState({color:["","","#C19D60","",""],flag:[!1,!1,!0,!1,!1],numberInit:14,numberEnd:17})},n.handleClick4=function(){!0!==n.state.flag[3]&&n.setState({color:["","","","#C19D60",""],flag:[!1,!1,!1,!0,!1],numberInit:18,numberEnd:21})},n.handleClick5=function(){!0!==n.state.flag[4]&&n.setState({color:["","","","","#C19D60"],flag:[!1,!1,!1,!1,!0],numberInit:22,numberEnd:26})},n.state={data:[],numberInit:1,numberEnd:8,flag:["true","false","false","false","false"],color:["#C19D60","","","",""]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.get("/ds_detail_FoodZone").then((function(e){return e.data})).then((function(c){console.log(c.recordset),e.setState({data:c.recordset})}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("header",{className:"section-header food-zone",style:{backgroundImage:"url(http://restabook.kwst.net/dark/images/bg/12.jpg)"},children:Object(d.jsxs)("div",{className:"container food-container",children:[Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light background-black",children:[Object(d.jsx)("a",{className:"navbar-brand",href:!0,children:"SANJALIKA FOOD"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav menu-right",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(r.b,{to:"/",className:"nav-link",children:"HOME"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"",className:"nav-link",children:"NEWS"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)("div",{className:"menu-product",children:[Object(d.jsx)(r.b,{to:"",className:"nav-link layer1",children:"EXPERIENCE"}),Object(d.jsx)("div",{className:"layer2",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/DragonPark",children:"DRAGON PARK"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/WaterPark",children:"WATER PARK"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/QueenCableCars",children:"QUEEN CABLE CARS & THE MYSTERIOUS HILLS"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/LightHouse",children:"SANJALIKA LIGHTHOUSE"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/Beach",children:"SANJALIKA BEACH"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/Gallery",children:"SANJALIKA GALLERRY"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/OldQuarterKiosks",children:"SANJALIKA OLD QUARTER KIOSKS"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/FoodZone",children:"FOOD ZONE"})})]})})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/AboutUs",className:"nav-link",children:"ABOUT US"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/ContactUs",className:"nav-link",children:"CONTACT US"})}),Object(d.jsx)("li",{className:"nav-item buy-ticket",children:Object(d.jsx)(r.b,{to:"",className:"nav-link",children:"BUY TICKET"})})]})})]}),Object(d.jsxs)("div",{className:"header-banner text-center food-detail",children:[Object(d.jsx)("h2",{style:{color:"#C19D60"},children:Object(d.jsx)("i",{children:"Special menu offers."})}),Object(d.jsx)("h1",{children:"Discover Our Menu"})]})]})}),Object(d.jsx)("section",{className:"main",children:Object(d.jsxs)("div",{className:"FoodZoneDetail-Main",children:[Object(d.jsx)("div",{className:"Menu-FoodZoneDetail-Main",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{style:{color:this.state.color[0]},onClick:function(){return e.handleClick1()},children:[Object(d.jsx)("span",{children:"01. "}),"Main dishes"]}),Object(d.jsxs)("li",{style:{color:this.state.color[1]},onClick:function(){return e.handleClick2()},children:[Object(d.jsx)("span",{children:"02. "}),"Starter"]}),Object(d.jsxs)("li",{style:{color:this.state.color[2]},onClick:function(){return e.handleClick3()},children:[Object(d.jsx)("span",{children:"03. "}),"Desserts"]}),Object(d.jsxs)("li",{style:{color:this.state.color[3]},onClick:function(){return e.handleClick4()},children:[Object(d.jsx)("span",{children:"04. "}),"Sea Food"]}),Object(d.jsxs)("li",{style:{color:this.state.color[4]},onClick:function(){return e.handleClick5()},children:[Object(d.jsx)("span",{children:"05. "}),"Drinks"]})]})}),Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsx)("div",{className:"menu-order",children:Object(d.jsx)("div",{className:"row pt-4",children:this.state.data.map((function(c,t){return c.ID>=e.state.numberInit&&c.ID<=e.state.numberEnd?Object(d.jsx)("div",{className:"col-sm-6 pb-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-2 menu-order-food-img",children:Object(d.jsx)("img",{src:c.Image,alt:""})}),Object(d.jsxs)("div",{className:"col-sm-8 menu-order-food-content pt-2",children:[Object(d.jsx)("h3",{children:c.Title}),Object(d.jsx)("p",{children:c.Content})]}),Object(d.jsxs)("div",{className:"col-sm-1 menu-order-food-price pt-1",children:["$",c.Price]})]})},t):""}))})})})]})}),Object(d.jsx)("div",{className:"food-footer",children:Object(d.jsxs)("div",{className:"container menu-food-footer",children:[Object(d.jsxs)("ul",{className:"inner-footer",children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/",children:"HOME"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/AboutUs",children:"ABOUT US"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"#",children:"ACTIVITIES"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/ContactUs",children:"CONTACT US"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/News",children:"NEWS"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"#",children:"MAPS"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"#",children:"SUPPORT"})})]}),Object(d.jsx)("h1",{className:"text-center",children:"SANJALIKA WATER PARK"}),Object(d.jsxs)("div",{className:"footer-three-icon",children:[Object(d.jsx)("div",{className:"home-three-icon",children:Object(d.jsx)(r.b,{to:"",className:"icon-twitter",children:Object(d.jsx)("i",{className:"fab fa-twitter"})})}),Object(d.jsx)("div",{className:"home-three-icon",children:Object(d.jsx)(r.b,{to:"",className:"icon-facebook",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(d.jsx)("div",{className:"home-three-icon",children:Object(d.jsx)(r.b,{to:"",className:"icon-instagram",children:Object(d.jsx)("i",{className:"fab fa-instagram"})})})]}),Object(d.jsxs)("h4",{className:"text-center",children:[Object(d.jsx)("span",{style:{color:"white",fontWeight:"bold"},children:"SANJALIKA"})," \xa9 2021 All Rights Reserved."]})]})})]})}}]),t}(i.Component)}}]);
//# sourceMappingURL=18.48aa80d3.chunk.js.map