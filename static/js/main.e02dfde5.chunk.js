(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(36)},23:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),s=(a(23),a(12)),i=a(5),l=a(6),m=a(8),u=a(7),p=a(9),h=(a(25),a(40)),d=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SHOPPY"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.a,{className:"nav-link",exact:!0,activeClassName:"active",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.a,{className:"nav-link",activeClassName:"active",to:"/men"},"Men")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.a,{className:"nav-link",activeClassName:"active",to:"/women"},"Women")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.a,{className:"nav-link",activeClassName:"active",to:"/kids"},"Kids")))),c.a.createElement("div",{className:"pull-right"},c.a.createElement("span",{className:"badge badge-sm badge-primary"},this.props.totalItem),c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-shopping-cart fa-2x"})),c.a.createElement("button",{className:"btn btn-sm btn-danger m-2",onClick:this.props.onReset},c.a.createElement("i",{className:"fa fa-trash"}))))}}]),t}(n.Component),b=(a(30),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-3 product-container"},c.a.createElement("div",{className:"prod-img m-3"},c.a.createElement("img",{src:this.props.countAttr.img,alt:"product"})),c.a.createElement("span",{className:this.getBadgeStyles()},this.formatCount()),c.a.createElement("button",{className:"btn btn-light btn-sm",onClick:function(){return e.props.onIncrement(e.props.countAttr)}},"Add"),c.a.createElement("button",{className:"btn btn-light btn-sm m-2",onClick:function(){return e.props.onDecrement(e.props.countAttr)}},"Reduce"),c.a.createElement("button",{className:"btn btn-danger btn-sm m-2",onClick:function(){return e.props.onDelete(e.props.countAttr)}},c.a.createElement("i",{className:"fa fa-trash"})))}},{key:"formatCount",value:function(){var e=this.props.countAttr.count;return 0===e?"Zero":e}},{key:"getBadgeStyles",value:function(){var e="badge m-2 badge-";return e+=0===this.props.countAttr.count?"warning":"primary"}}]),t}(n.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"call-to-action container"},c.a.createElement("div",{className:"row"},this.props.counters.map(function(t){return c.a.createElement(b,{key:t.id,countAttr:t,onDelete:e.props.onDel,onIncrement:e.props.onInc,onDecrement:e.props.onDec})})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={counters:[{id:1,count:4,img:"https://picsum.photos/200?image=0"},{id:2,count:0,img:"https://picsum.photos/200?image=42"},{id:3,count:0,img:"https://picsum.photos/200?image=53"},{id:4,count:0,img:"https://picsum.photos/200?image=74"},{id:5,count:0,img:"https://picsum.photos/200?image=32"},{id:6,count:0,img:"https://picsum.photos/200?image=21"}]},a.handleDelete=function(e){var t=a.state.counters.filter(function(t){return t.id!==e.id});a.setState({counters:t})},a.handleIncrement=function(e){var t=Object(s.a)(a.state.counters),n=t.indexOf(e);t[n].count<8&&(t[n].count+=1),a.setState({counters:t})},a.handleReset=function(){var e=a.state.counters.map(function(e){return e.count=0,e});a.setState({counters:e})},a.handleDecrement=function(e){var t=Object(s.a)(a.state.counters),n=t.indexOf(e);t[n].count>0&&(t[n].count-=1),a.setState({counters:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{totalItem:this.state.counters.filter(function(e){return e.count>0}).length,onReset:this.handleReset}),c.a.createElement("main",{className:"App"},c.a.createElement(v,{counters:this.state.counters,onDel:this.handleDelete,onInc:this.handleIncrement,onDec:this.handleDecrement})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(38),E=a(39),N=a(37),O=(a(32),a(34),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("h2",null,"Page Not Found 404!")}}]),t}(n.Component)),j=c.a.createElement(f.a,null,c.a.createElement(E.a,null,c.a.createElement(N.a,{exact:!0,path:"/demo-cart-react/",component:g}),c.a.createElement(N.a,{path:"/demo-cart-react/men",component:g}),c.a.createElement(N.a,{path:"/demo-cart-react/women",component:g}),c.a.createElement(N.a,{path:"/demo-cart-react/kids",component:g}),c.a.createElement(N.a,{component:O})));o.a.render(j,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.e02dfde5.chunk.js.map