(this.webpackJsonpsanjalika_project=this.webpackJsonpsanjalika_project||[]).push([[16],{127:function(e,t,a){"use strict";a.r(t);var c=a(19),n=a(20),r=a(22),s=a(21),i=a(0),o=a(42),l=a(41),d=(a(47),a(23)),j=a(25),h=a(45),p=a.n(h),m=a(1),u=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).checkProductDetail=function(){var t=1;return e.props.data.map((function(a,c){return console.log(a.Date),a.ID!==Number(e.props.match.params.id)&&t<=8?(console.log(a.Title),t++,Object(m.jsxs)("div",{className:"col-sm-3 box-news",children:[Object(m.jsx)("img",{className:"img-fluid box-img",src:a.Image,alt:""}),Object(m.jsxs)("div",{className:"box-info",children:[Object(m.jsx)(d.b,{to:"/DragonParkDetail/"+a.ID,className:"box-info-title",children:a.Title}),Object(m.jsxs)("p",{children:["Dragon Park | ",Object(m.jsx)("i",{className:"far fa-calendar-alt mr-2 ml-2"}),a.Date]})]})]},c)):""}))},e}return Object(n.a)(a,[{key:"redirect",value:function(){window.location.replace(window.location.origin+"/mua-ve")}},{key:"componentDidMount",value:function(){var e=this;p.a.get("/ds_detail_DragonPark").then((function(e){return e.data})).then((function(t){console.log(t.recordset),e.props.getdataDetailDragonPark(t.recordset)})),p.a.get("/ds_DragonPark").then((function(e){return e.data})).then((function(t){e.props.getdataDragonPark(t.recordset)}))}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return console.log(typeof this.props.match.params.id),console.log(this.props.data),Object(m.jsxs)("div",{children:[Object(m.jsx)(l.a,{}),Object(m.jsxs)("section",{className:"main",children:[Object(m.jsx)("div",{className:"container",children:this.props.dataDetail.map((function(t,a){return t.ID===Number(e.props.match.params.id)?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"main-top text-center mt-3",children:Object(m.jsxs)("h4",{className:"mb-5",children:[t.Title," - SANJALIKA WATER PARK"]})}),Object(m.jsxs)("div",{className:"row align-items-center",children:[Object(m.jsxs)("div",{className:"col-sm-4 detail-content",children:[Object(m.jsx)("h2",{className:"detail-title",children:t.Title}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:t.Content}}),Object(m.jsx)("iframe",{src:"https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fplugins%2F&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId",width:150,height:46,style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:0,allowFullScreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})]}),Object(m.jsx)("div",{className:"col-sm-8",children:Object(m.jsx)("img",{className:"img-fluid",style:{borderRadius:"2%"},src:t.Image,alt:""})})]})]}):""}))}),Object(m.jsxs)("div",{className:"detail-banner",children:[Object(m.jsxs)("h2",{children:["RESERVE ",Object(m.jsx)("span",{children:"for"})," PARTIES!"]}),Object(m.jsx)("a",{style:{color:"white"},onClick:this.redirect,children:"BUY TICKET"})]}),Object(m.jsx)("div",{className:"detail-experience-other mt-5",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Experiences other :"}),Object(m.jsx)("div",{className:"row",children:this.checkProductDetail()})]})})]}),Object(m.jsx)(o.a,{})]})}}]),a}(i.Component);t.default=Object(j.b)((function(e,t){return{data:e.dataDragonPark,dataDetail:e.dataDetailDragonPark}}),(function(e,t){return{getdataDetailDragonPark:function(t){e({type:"GET_DATA_DETAIL_DRAGON_PARK",getDetaildata:t})},getdataDragonPark:function(t){e({type:"GET_DATA_DRAGON_PARK",getdata:t})}}}))(u)}}]);
//# sourceMappingURL=16.268b9562.chunk.js.map