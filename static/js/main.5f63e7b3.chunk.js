(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){e.exports=n(265)},134:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},259:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),c=n.n(o),i=(n(134),n(28)),l=n(29),s=n(31),u=n(30),f=n(32);n(136);var d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){var e=this.props,t=e.col,n=e.row,r=e.coords,o=e.value,c=function(e){var t=[2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384].indexOf(e);return["#eee","#eec","#fb8","#f96","#f75","#f53","#ec7","#ec6","#ec5","#ec3","#ec2","#000","#000","#000","#000","#000"][t]}(o),i=function(e){var t=[2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384].indexOf(e);return["#222","#222","#eee","#eee","#eee","#eee","#222","#222","#222","#222","#eee","#eee","#eee","#eee"][t]}(o);return a.a.createElement("div",{className:"square ".concat(n===+r[0]&&t===+r[1]?"new":""),style:{marginLeft:100*t,marginTop:100*n,backgroundColor:c,color:i}},a.a.createElement("span",{className:"value"},o))}}]),t}(a.a.Component),v=(n(138),n(272)),m=n(271),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getMaxScore=function(){var e=localStorage.getItem("maxScore")||0;n.setState({maxScore:e})},n.handleKeyPress=function(e){for(var t=n.state.squares,r=t.slice(),a=e.keyCode-37,o=0===a?0:4-a,c=0;c<a;c+=1)r=n.rotateArray(r);for(var i=0,l=r.length;i<l;i+=1){var s=n.fillNullLeft(n.toLeft(r[i]),l);r[i]=s}for(var u=0;u<o;u+=1)r=n.rotateArray(r);n.compareArrays(t,r)||n.setState(function(e){return{squares:r,prevSquares:t}},n.getRandomSquare)},n.toLeft=function(e){var t=0,r=e.filter(function(e){return null!==e});if(r.length>1)for(var a=0;a<r.length;a+=1)r[a]===r[a+1]&&(r[a]=2*r[a],t+=r[a],r.splice(a+1,1));return n.setState(function(e){return{score:e.score+t}}),r},n.fillNullLeft=function(e,t){for(var n=0;n<t;n+=1)e[n]||e.push(null);return e},n.rotateArray=function(e){for(var t=[],n=0,r=e.length;n<r;n+=1){t[n]=[];for(var a=0;a<r;a+=1)t[n][a]=e[a][r-n-1]}return t},n.getRandomSquare=function(){var e=n.state.squares,t=e.slice(),r=[2,4,2,2,2][Math.floor(5*Math.random())],a=n.getRandomCoords(e).split("");t[+a[0]][+a[1]]=r,n.setState({squares:t,newCoords:a})},n.getRandomCoords=function(e){for(var t=[],n=0,r=e.length;n<r;n+=1)for(var a=0;a<r;a+=1)e[n][a]||t.push("".concat(n).concat(a));return t[Math.floor(Math.random()*t.length)]},n.compareArrays=function(e,t){return!(e>t||e<t)},n.winner=function(e){if(!n.state.win)for(var t=0,r=e.length;t<r;t+=1)for(var a=0;a<r;a+=1)2048===e[t][a]&&n.setState({win:!0})},n.loser=function(e){for(var t=0,r=0,a=e.length;r<a;r+=1)for(var o=0;o<a;o+=1)e[r][o]||(t+=1);if(!t){for(var c=0,i=e.length;c<i;c+=1)for(var l=0;l<i;l+=1){if(e[c][l]===e[c][l+1])return;if(c<3&&e[c][l]===e[c+1][l])return}n.setState({lose:!0})}},n.getInitialState=function(e){e=e||4;for(var t=[],r=0;r<e;r+=1){t[r]=[];for(var a=0;a<e;a+=1)t[r][a]=null}var o=n.getRandomCoords(t),c=n.getRandomCoords(t);if(o!==c){var i=o.split(""),l=c.split("");t[+i[0]][+i[1]]=2,t[+l[0]][+l[1]]=2,n.setState({win:!1,lose:!1,continued:!1,prevSquares:[],squares:t,score:0}),n.divRef.current.focus()}else n.setState({score:0,win:!1,lose:!1,continued:!1,prevSquares:[],squares:[[null,null,null,null],[null,2,null,null],[null,null,null,2],[null,null,null,null]]})},n.backToPrevState=function(){var e=n.state.prevSquares;n.setState({squares:e,prevSquares:[],lose:!1}),n.divRef.current.focus()},n.renderBoard=function(){var e=n.state,t=e.squares,r=e.win,o=e.lose,c=e.continued,i=e.score,l=e.maxScore,s=e.prevSquares,u=e.newCoords;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"board",onKeyDown:n.handleKeyPress,tabIndex:"0",ref:n.divRef},t.map(function(e,t){return e.map(function(e,n){return a.a.createElement(d,{key:"".concat(t,"-").concat(n),row:t,col:n,value:e,coords:u})})}),r&&!c&&a.a.createElement("div",{className:"modal"},a.a.createElement("div",{className:"modal_center"},a.a.createElement(v.a,{as:"h2",inverted:!0},"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!"),a.a.createElement(m.a.Group,null,a.a.createElement(m.a,{inverted:!0,color:"orange",onClick:function(){return n.getInitialState()}},"\u0421 \u043d\u0430\u0447\u0430\u043b\u0430"),a.a.createElement(m.a,{inverted:!0,color:"olive",onClick:function(){n.setState(function(e){return{continued:!0}}),n.divRef.current.focus()}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))),o&&a.a.createElement("div",{className:"modal"},a.a.createElement("div",{className:"modal_center"},a.a.createElement(v.a,{as:"h2",inverted:!0},"\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438!"),a.a.createElement(m.a,{inverted:!0,color:"orange",onClick:function(){n.getInitialState()}},"\u0421 \u043d\u0430\u0447\u0430\u043b\u0430")))),a.a.createElement("div",{style:{textAlign:"center",marginTop:"10px"}},a.a.createElement(m.a,{onClick:n.backToPrevState,disabled:!s.length},"\u0428\u0430\u0433 \u043d\u0430\u0437\u0430\u0434"),a.a.createElement(v.a,{color:"orange",as:"h2"},"Your Score: ",i,a.a.createElement(v.a.Subheader,null,"Max Score: ",l))))},n.state={squares:[],prevSquares:[],win:!1,lose:!1,continued:!1,score:0,maxScore:0,newCoords:[]},n.divRef=a.a.createRef(),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.divRef.current.focus(),this.getInitialState(),this.getMaxScore()}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.squares,n=e.lose,r=e.win,a=e.score,o=e.maxScore;r||this.winner(t),n||this.loser(t),a>o&&(localStorage.setItem("maxScore",a),this.setState({maxScore:a}))}},{key:"render",value:function(){return this.renderBoard()}}]),t}(r.Component),g=(n(259),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(h,null))}}]),t}(r.Component)),p=(n(261),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(t,e)})}}()}},[[129,2,1]]]);
//# sourceMappingURL=main.5f63e7b3.chunk.js.map