(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(15),u=(n(27),n(11)),h=n.n(u),m=n(16),d=n(3),f=n(4),b=n(7),p=n(6),v=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",{className:""},n),r.a.createElement("p",null,a)))},E=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(v,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},g=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot",onChange:t}))},w={overflow:"scroll",border:"5px solid black",height:"800px"},j=function(e){return r.a.createElement("div",{style:w},e.children)},y=(n(29),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),n}(a.Component)),O=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={robots:[]},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t.setState({robots:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.robots,t=this.props,n=t.searchField,a=t.onSearchChange,o=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return e.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(g,{searchChange:a}),r.a.createElement(j,null,r.a.createElement(y,null,r.a.createElement(E,{robots:o})))):r.a.createElement("h1",{className:"tc"},"Loading...")}}]),n}(a.Component),C=Object(s.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k={searchField:""},N=(n(30),Object(l.createLogger)()),S=Object(i.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("Hi"),t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}),Object(i.a)(N));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:S},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.29420791.chunk.js.map