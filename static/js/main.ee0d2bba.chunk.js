(this["webpackJsonpgit-stars-projects"]=this["webpackJsonpgit-stars-projects"]||[]).push([[0],{110:function(e,t,a){},128:function(e,t,a){},151:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(14),i=a.n(l),r=(a(91),a(16)),c=a(17),o=a(19),m=a(18),u=(a(92),a(93),a(11)),p=a.n(u),d=(a(110),a(157)),g=(a(42),a(43),a(12)),h=a(21),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={projects:[],language:"",page:1,isLoading:!0,isSwitching:!1},e.handle=function(){console.log("\u6570\u636e\u7684\u9ad8",e.refs.isReachBottom.clientHeight),console.log("\u6eda\u52a8\u7684\u9ad8",document.documentElement.scrollTop),console.log("\u5c4f\u5e55\u7684\u9ad8",document.documentElement.clientHeight);var t=e.state,a=t.page,n=t.isLoading,s=e.refs.isReachBottom.clientHeight,l=document.documentElement.clientHeight,i=document.documentElement.scrollTop;(l>s||s<=l+i)&&!n&&(a++,e.setState({page:a},(function(){e.loadData()})))},e.loadData=function(){var t=e.state,a=t.language,n=t.page;e.setState({isLoading:!0},(function(){p.a.get("https://api.github.com/search/repositories?q=stars:%3E1+language:".concat(a,"&sort=stars&order=desc&type=Repositories&page=").concat(n)).then((function(t){if(console.log(t.data.items),1==n)e.setState({projects:t.data.items,isLoading:!1,isSwitching:!1});else{var a=e.state.projects.concat(t.data.items);e.setState({projects:a,isLoading:!1,isSwitching:!1})}}))}))},e.switchLanguage=function(t){e.setState({language:t,page:1,isSwitching:!0},(function(){e.loadData()}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.refs.isReachBottom.addEventListener("mousewheel",this.handle.bind(this)),this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.projects,a=e.language,n=e.isLoading,l=e.isSwitching;return s.a.createElement("div",{className:"git-stars",ref:"isReachBottom"},l&&s.a.createElement("div",{className:"switch-container"},s.a.createElement(d.a,{spinning:n,size:"large",tip:"\u52a0\u8f7d\u4e2d..."})),s.a.createElement("div",{className:"git-stars-languages"},s.a.createElement("div",{className:"git-stars-languages-item ".concat(""==a&&"active"),onClick:this.switchLanguage.bind(this,"")},"All"),s.a.createElement("div",{className:"git-stars-languages-item ".concat("javascript"==a&&"active"),onClick:this.switchLanguage.bind(this,"javascript")},"javascript"),s.a.createElement("div",{className:"git-stars-languages-item ".concat("ruby"==a&&"active"),onClick:this.switchLanguage.bind(this,"ruby")},"ruby"),s.a.createElement("div",{className:"git-stars-languages-item ".concat("java"==a&&"active"),onClick:this.switchLanguage.bind(this,"java")},"java"),s.a.createElement("div",{className:"git-stars-languages-item ".concat("css"==a&&"active"),onClick:this.switchLanguage.bind(this,"css")},"css"),s.a.createElement("div",{className:"git-stars-languages-item ".concat("python"==a&&"active"),onClick:this.switchLanguage.bind(this,"python")},"python")),s.a.createElement("div",{className:"git-stars-body"},t.map((function(e,t){return s.a.createElement("div",{key:t,className:"git-stars-item"},s.a.createElement("div",{className:"git-stars-item-no"},"#",t),s.a.createElement("div",{className:"git-stars-logo"},s.a.createElement("img",{className:"git-stars-img",src:e.owner.avatar_url})),s.a.createElement("div",{className:"git-stars-name"},e.name),s.a.createElement("div",{className:"git-stars-info"},s.a.createElement("div",{className:"git-stars-info-name"},s.a.createElement(g.a,{className:"icon",icon:h.d}),e.name),s.a.createElement("div",{className:"git-stars-star-count"},s.a.createElement(g.a,{className:"icon",icon:h.c}),e.stargazers_count),s.a.createElement("div",{className:"git-stars-forks"},s.a.createElement(g.a,{className:"icon",icon:h.b}),e.forks_count),s.a.createElement("div",{className:"git-stars-issues"},s.a.createElement(g.a,{className:"icon",icon:h.a}),e.open_issues_count)))})),s.a.createElement("div",{className:"spin-container"},s.a.createElement(d.a,{spinning:n,size:"large",tip:"\u52a0\u8f7d\u4e2d..."}))))}}]),a}(n.Component),y=a(39),E=(a(128),a(156)),b=a(27),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={player1:"",player2:"",isPlayerOneShowed:!1,isPlayerTwoShowed:!1,isPlayerOneLoading:!1,isPlayerTwoLoading:!1,playerOneResult:{},playerTwoResult:{}},e.handlePlayerChange=function(t,a){"player1"==t?(e.refs.input1.value=a.target.value,e.setState(Object(y.a)({},t,a.target.value))):"player2"==t&&(e.refs.input2.value=a.target.value,e.setState(Object(y.a)({},t,a.target.value)))},e.doSearch=function(t){var a=e.state,n=a.player1,s=a.player2,l=a.isPlayerOneLoading,i=a.isPlayerTwoLoading;"player1"==t&&n&&!l?e.setState({isPlayerOneLoading:!0},(function(){p.a.get("https://api.github.com/users/".concat(n)).then((function(t){console.log(t),e.setState({playerOneResult:t.data,isPlayerOneLoading:!1,isPlayerOneShowed:!0})})).catch((function(t){console.log(t),E.b.error("\u62b1\u6b49\uff0c\u8fd9\u4e2a\u627e\u4e0d\u5230"),e.setState({isPlayerOneLoading:!1,player1:""})}))})):"player2"==t&&s&&!i&&e.setState({isPlayerTwoLoading:!0},(function(){p.a.get("https://api.github.com/users/".concat(s)).then((function(t){console.log(t),e.setState({playerTwoResult:t.data,isPlayerTwoLoading:!1,isPlayerTwoShowed:!0})})).catch((function(t){console.log(t),E.b.error("\u62b1\u6b49\uff0c\u8fd9\u4e2a\u627e\u4e0d\u5230"),e.setState({isPlayerTwoLoading:!1,player2:""})}))}))},e.doClear=function(t){e.setState(Object(y.a)({},t,"")),"player1"==t?e.setState({isPlayerOneShowed:!1,playerOneResult:{}}):"player2"==t&&e.setState({isPlayerTwoShowed:!1,playerTwoResult:{}})},e.doBattle=function(t,a,n,s){e.props.history.push({pathname:"/result/?player1=".concat(t,"&player2=").concat(a),state:{player1:t,player2:a,followers1:n,followers2:s}})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.player1,a=e.player2,n=e.isPlayerOneLoading,l=e.isPlayerOneShowed,i=e.isPlayerTwoLoading,r=e.isPlayerTwoShowed,c=e.playerOneResult,o=e.playerTwoResult;return console.log("res",c),s.a.createElement("div",{className:"battle"},s.a.createElement("div",{className:"battle-title"},"Instructions"),s.a.createElement("div",{className:"battle-items"},s.a.createElement("div",{className:"battle-item"},s.a.createElement("div",{className:"battle-item-title"},"Enter two Github"),s.a.createElement("div",{className:"battle-item-icon"},s.a.createElement(g.a,{icon:b.c,className:"users-icon"}))),s.a.createElement("div",{className:"battle-item"},s.a.createElement("div",{className:"battle-item-title"},"Battle"),s.a.createElement("div",{className:"battle-item-icon"},s.a.createElement(g.a,{icon:b.a,className:"jet-icon"}))),s.a.createElement("div",{className:"battle-item"},s.a.createElement("div",{className:"battle-item-title"},"See The Winner"),s.a.createElement("div",{className:"battle-item-icon"},s.a.createElement(g.a,{icon:b.b,className:"trophy-icon"})))),s.a.createElement("div",{className:"battle-input"},s.a.createElement("div",{className:"battle-input-player"},s.a.createElement("div",{className:"battle-input-player-title"},"Player One"),s.a.createElement("form",null,!l&&!n&&s.a.createElement("div",{className:"battle-input-player-area"},s.a.createElement("input",{className:"input-item",placeholder:"github username",type:"text",ref:"input1",value:t,onChange:this.handlePlayerChange.bind(this,"player1"),onSubmit:this.doSearch.bind(this,"player1",!0)}),s.a.createElement("button",{onClick:this.doSearch.bind(this,"player1"),disabled:!t},"Submit")),n&&s.a.createElement("div",{className:"loading"},"loading......"),l&&s.a.createElement("div",{className:"battle-input-result"},s.a.createElement("img",{className:"battle-input-result-image",src:c.avatar_url}),s.a.createElement("div",{className:"battle-input-result-name"},c.login),s.a.createElement("div",{className:"battle-input-result-clear",onClick:this.doClear.bind(this,"player1")},"X")))),s.a.createElement("div",{className:"battle-input-player"},s.a.createElement("div",{className:"battle-input-player-title"},"Player Two"),s.a.createElement("form",null,!r&&!i&&s.a.createElement("div",{className:"battle-input-player-area"},s.a.createElement("input",{className:"input-item",placeholder:"github username",type:"text",ref:"input2",value:a,onChange:this.handlePlayerChange.bind(this,"player2"),onSubmit:this.doSearch.bind(this,"player2")}),s.a.createElement("button",{onClick:this.doSearch.bind(this,"player2"),disabled:!a},"Submit")),i&&s.a.createElement("div",{className:"loading"},"loading......"),r&&s.a.createElement("div",{className:"battle-input-result"},s.a.createElement("img",{className:"battle-input-result-image",src:o.avatar_url}),s.a.createElement("div",{className:"battle-input-result-name"},o.login),s.a.createElement("div",{className:"battle-input-result-clear",onClick:this.doClear.bind(this,"player2")},"X"))))),s.a.createElement("div",{className:"battle-begin"},l&&r&&s.a.createElement("button",{onClick:this.doBattle.bind(this,t,a,c.followers,o.followers)},"BATTLE")))}}]),a}(n.Component),N=(a(151),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={player1:"",player2:"",winner:{},loser:{}},e.doReset=function(){e.setState({player1:"",player2:"",winner:{},loser:{}},(function(){e.props.history.push("/battle")}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(console.log("\u54ce",this),this.props.history.location.state){var t=this.props.history.location.state,a=t.player1,n=t.player2;t.followers1>=t.followers2?(p.a.get("https://api.github.com/users/".concat(a)).then((function(t){console.log(t),e.setState({winner:t.data})})),p.a.get("https://api.github.com/users/".concat(n)).then((function(t){console.log(t),e.setState({loser:t.data})}))):(p.a.get("https://api.github.com/users/".concat(a)).then((function(t){console.log(t),e.setState({loser:t.data})})),p.a.get("https://api.github.com/users/".concat(n)).then((function(t){console.log(t),e.setState({winner:t.data})})))}else this.props.history.push({pathname:"/battle"})}},{key:"render",value:function(){var e=this.state,t=e.winner,a=e.loser;return console.log("winner",t),console.log("loser",a),s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"result-players"},s.a.createElement("div",{className:"result-player"},s.a.createElement("div",{className:"result-player-title"},"Winner"),s.a.createElement("div",{className:"result-player-avatar"},t&&s.a.createElement("img",{src:t.avatar_url})),s.a.createElement("div",{className:"result-player-name"},t&&t.login),s.a.createElement("div",{className:"result-player-score"},"score:1")),s.a.createElement("div",{className:"result-player"},s.a.createElement("div",{className:"result-player-title"},"Loser"),s.a.createElement("div",{className:"result-player-avatar"},a&&s.a.createElement("img",{src:a.avatar_url})),s.a.createElement("div",{className:"result-player-name"},a&&a.login),s.a.createElement("div",{className:"result-player-score"},"score:0"))),s.a.createElement("div",{className:"reset",onClick:this.doReset},"Reset"))}}]),a}(n.Component)),w=a(40),S=a(3),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"git-app"},s.a.createElement(w.a,null,s.a.createElement("div",{className:"links"},s.a.createElement(w.b,{to:"/popular",className:"navigate"},"Popular"),s.a.createElement(w.b,{to:"/battle",className:"navigate"},"Battle")),s.a.createElement(S.a,{to:"/popular"}),s.a.createElement(S.d,null,s.a.createElement(S.b,{path:"/popular",component:v}),s.a.createElement(S.b,{path:"/battle",component:f}),s.a.createElement(S.b,{path:"/result",component:N}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(154)},91:function(e,t,a){},92:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},93:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.ee0d2bba.chunk.js.map