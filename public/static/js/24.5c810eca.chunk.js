(this.webpackJsonpsanjalika_project=this.webpackJsonpsanjalika_project||[]).push([[24],{129:function(e,a,t){"use strict";t.r(a);var n=t(19),c=t(20),s=t(22),r=t(21),l=t(0),i=(t(55),t(48)),o=t(23),d=t(47),j=t(25),b=t(51),m=t.n(b),h=t(1),u=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).handleClick1=function(){!0===c.state.flagHandle2&&c.setState({flagHandle1:!0,flagHandle2:!1,numberInit:1,numberEnd:8})},c.handleClick2=function(){!0===c.state.flagHandle1&&c.setState({flagHandle1:!1,flagHandle2:!0,numberInit:9,numberEnd:16})},c.getDataSearch=function(e){console.log(e.target.value),c.setState({dataSearch:e.target.value.trim()})},c.state={data:[],numberInit:1,numberEnd:8,flagHandle1:!0,flagHandle2:!1,dataSearch:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("/ds_WaterPark").then((function(e){return e.data})).then((function(a){console.log(a.recordset),e.props.getdataDragonPark(a.recordset),e.setState({data:a.recordset})}))}},{key:"render",value:function(){var e=this,a=0;return Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{}),Object(h.jsx)("section",{className:"main",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"main-top text-center mt-4",children:Object(h.jsx)("h3",{className:"mb-5",children:"Water Park - SANJALIKA WATER PARK"})}),Object(h.jsxs)("div",{className:"search-box",children:[Object(h.jsx)("input",{className:"search-txt",onChange:function(a){return e.getDataSearch(a)},type:"text",name:"search",placeholder:"Type to search"}),Object(h.jsx)("div",{className:"search-btn",children:Object(h.jsx)("i",{className:"fas fa-search"})})]}),Object(h.jsx)("div",{className:"row",children:this.state.data.map((function(t,n){return null===e.state.dataSearch?t.ID>=e.state.numberInit&&t.ID<=e.state.numberEnd?Object(h.jsxs)("div",{className:"col-sm-3 box-news mt-4",children:[Object(h.jsx)("img",{className:"img-fluid box-img",src:t.Image,alt:""}),Object(h.jsxs)("div",{className:"box-info",children:[Object(h.jsx)(o.b,{to:"/WaterParkDetail/"+t.ID,className:"box-info-title",children:t.Title}),Object(h.jsxs)("p",{children:["Dragon Park | ",Object(h.jsx)("i",{className:"far fa-calendar-alt mr-2 ml-2"}),t.Date]}),Object(h.jsx)("p",{children:t.Content}),Object(h.jsx)(o.b,{to:"/WaterParkDetail/"+t.ID,className:"more",children:" See More >"})]})]},n):"":-1!==t.Title.toUpperCase().indexOf(e.state.dataSearch.toUpperCase())&&++a>=e.state.numberInit&&a<=e.state.numberEnd?Object(h.jsxs)("div",{className:"col-sm-3 box-news mt-4",children:[Object(h.jsx)("img",{className:"img-fluid box-img",src:t.Image,alt:""}),Object(h.jsxs)("div",{className:"box-info",children:[Object(h.jsx)(o.b,{to:"/WaterParkDetail/"+t.ID,href:!0,className:"box-info-title",children:t.Title}),Object(h.jsxs)("p",{children:["Dragon Park | ",Object(h.jsx)("i",{className:"far fa-calendar-alt mr-2 ml-2"}),t.Date]}),Object(h.jsx)("p",{children:t.Content}),Object(h.jsx)(o.b,{to:"/WaterParkDetail/"+t.ID,className:"more",children:" See More >"})]})]}):""}))}),Object(h.jsxs)("div",{className:"handleButton mt-5",children:[Object(h.jsx)("div",{className:"handleButton-one",onClick:function(){e.handleClick1()},children:"1"}),Object(h.jsx)("div",{className:"handleButton-two",onClick:function(){e.handleClick2()},children:"2"})]})]})}),Object(h.jsx)(i.a,{})]})}}]),t}(l.Component);a.default=Object(j.b)((function(e,a){return{prop:e.prop}}),(function(e,a){return{getdataDragonPark:function(a){e({type:"GET_DATA_DRAGON_PARK",getdata:a})}}}))(u)}}]);
//# sourceMappingURL=24.5c810eca.chunk.js.map