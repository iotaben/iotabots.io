(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{22697:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(96678)}])},2133:function(t,e,n){"use strict";var a=n(85893),r=(n(67294),n(27680)),i=(0,r.makeStyles)((function(t){return{root:{background:t.palette.background.gradient,flexGrow:1,flexShrink:1,display:"flex",flexDirection:"column",justifyContent:"center"}}}));e.Z=function(t){var e=t.children,n=i();return(0,a.jsx)(r.Box,{className:n.root,children:e})}},96678:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return F}});var a=n(85893),r=n(67294),i=n(27680),o=n(2133),s=n(28520),u=n.n(s),p=n(77044),l=n(3283),y=n.n(l),c=n(44781);function d(t,e,n,a,r,i,o){try{var s=t[i](o),u=s.value}catch(p){return void n(p)}s.done?e(u):Promise.resolve(u).then(a,r)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){d(i,a,r,o,s,"next",t)}function s(t){d(i,a,r,o,s,"throw",t)}o(void 0)}))}}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=n(29014),b=function(){var t=f(r.useState([]),2),e=t[0],n=t[1],o=f(r.useState(!1),2),s=o[0],l=o[1],d=(0,p.Ge)(),b=d.account,v=d.active;return r.useEffect((function(){if(v){var t=m(u().mark((function e(){var a,r,i,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new(y())(window.web3.currentProvider),window.ethereum.on("accountsChanged",(function(){window.location.reload()})),r=new a.eth.Contract(h,"0x3a3c0D4BDAB6d0e9715Fa2eAA852af3038Bec342"),e.prev=4,e.next=7,r.methods.walletOfOwner(b).call();case 7:i=e.sent,e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(4),l(!0),console.log(e.t0),e.abrupt("return",new Array);case 15:return console.log("i",t),e.next=18,Promise.all(i.map(m(u().mark((function t(e){var n,a,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("token_index",e),t.next=3,r.methods.tokenURI(e).call();case 3:return n=t.sent,console.log("metadata_url:",n),t.next=7,fetch(n);case 7:return a=t.sent,t.next=10,a.json();case 10:return i=t.sent,console.log("metadata:",i),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})))));case 18:o=e.sent,console.log("items:",o),n(o);case 21:case"end":return e.stop()}}),e,null,[[4,10]])})));t()}return null}),[v]),(0,a.jsxs)(i.Box,{sx:{marginBottom:"10px"},children:[(0,a.jsx)(i.Typography,{gutterBottom:!0,variant:"h4",children:"IOTABOTS"}),s?(0,a.jsx)(i.Typography,{gutterBottom:!0,variant:"h6",children:"There was an error retrieving your IOTABOTS"}):0===e.length?(0,a.jsx)(i.Typography,{gutterBottom:!0,variant:"h6",children:"You don't own any IotaBots yet :("}):e.map((function(t){return(0,a.jsx)(i.Grid,{item:!0,xs:12,sm:12,md:12,children:(0,a.jsxs)(i.Card,{children:[(0,a.jsx)(c.Z,{height:"100%",component:"img",image:t.image,alt:"IOTABOT"}),(0,a.jsxs)(i.CardContent,{sx:{flexGrow:1},children:[(0,a.jsx)(i.Typography,{gutterBottom:!0,variant:"h6",children:"IOTABOT ".concat(t.name)}),(0,a.jsx)(i.Typography,{gutterBottom:!0,variant:"body1",children:"DNA ".concat(t.dna)}),(0,a.jsx)(i.Typography,{gutterBottom:!0,variant:"body1",children:"Edition ".concat(t.edition)}),(0,a.jsx)(i.Typography,{gutterBottom:!0,variant:"body1",children:"Created on ".concat(new Date(t.date).toLocaleDateString())})]})]})},t.name)}))]})},v=n(30950),x=n(83929),T=n(35553),g=n(41899),w=n(93683),j=n(11496),B=n(38584);function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=(0,j.ZP)(i.Badge)((function(t){var e=t.theme;return{"& .MuiBadge-badge":{backgroundColor:e.palette.success,color:e.palette.success,boxShadow:"0 0 0 2px ".concat(e.palette.background.default),width:"42px",height:"42px",borderRadius:"50%","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid ".concat(e.palette.success),content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),I=function(){var t=(0,p.Ge)(),e=t.chainId,n=t.library,i=M(r.useState(),2),o=i[0],s=i[1];return r.useEffect((function(){if(n){var t=!1;n.getBlockNumber().then((function(){t||s(o)})).catch((function(){t||s(null)}));var e=function(){s(o)};return n.on("block",e),function(){t=!0,n.removeListener("block",e),s(void 0)}}}),[n,e,o]),(0,a.jsx)("span",{children:null===o?"Error":null!==o&&void 0!==o?o:"-"})},A=function(){var t=M(r.useState(null),2),e=t[0],n=t[1],o=(0,p.Ge)(),s=o.active,u=o.error,l=(0,p.Ge)().chainId,y=Boolean(e),c=y?"simple-popper":void 0;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",onClick:function(t){n(e?null:t.currentTarget)},children:(0,a.jsx)(i.Avatar,{alt:"IOTABOT #1",src:"https://assets.iotabots.io/compressed/1.png",sx:{width:140,height:140}})}),(0,a.jsx)(B.Z,{id:c,open:y,anchorEl:e,children:(0,a.jsxs)(i.Box,{sx:{border:1,p:1,bgcolor:"background.paper"},children:[(0,a.jsxs)(i.Typography,{variant:"body1",paragraph:!0,children:["Status: ",s?"\ud83d\udfe2":u?"\ud83d\udd34":"\ud83d\udfe0"]}),(0,a.jsxs)(i.Typography,{variant:"body1",paragraph:!0,children:["chainId: ",l||"-"]}),(0,a.jsxs)(i.Typography,{variant:"body1",paragraph:!0,children:["BlockNumber: ",(0,a.jsx)(I,{})]})]})})]})};function _(t,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](t):t instanceof e}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(t){return _(t,v.A5)?"No Wallet Browser Extension detected, install Browser Extension on desktop or visit from a dApp browser on mobile.":_(t,v.ab)||x.ab?"Please authorize this website to access your Wallet account.":"An unknown error occurred. Check the console for more details."},C=function(){var t=(0,p.Ge)(),e=t.account,n=t.library,i=t.chainId,o=O(r.useState(),2),s=o[0],u=o[1];return r.useEffect((function(){if(e&&n){var t=!1;return n.getBalance(e).then((function(){t||u(s)})).catch((function(){t||u(null)})),function(){t=!0,u(void 0)}}return null}),[e,n,i,s]),(0,a.jsx)("span",{children:null===s?null:s?(0,T.dF)(s):"-"})},E=function(){var t=(0,p.Ge)().account,e=(0,r.useState)(""),n=e[0],o=e[1],s=(0,r.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{}),(0,a.jsx)("form",{style:{display:"none"},children:(0,a.jsx)("textarea",{ref:s,value:t})}),(0,a.jsxs)(i.Typography,{noWrap:!0,variant:"body1",paragraph:!0,children:["".concat(null===t||void 0===t?void 0:t.substring(0,4),"...").concat(null===t||void 0===t?void 0:t.substring((null===t||void 0===t?void 0:t.length)-3,null===t||void 0===t?void 0:t.length))||"-",document.queryCommandSupported("copy")&&(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Button,{onClick:function(t){return function(t){console.log("e",t),console.log("copyRef",s),console.log("copyRefcurrent",s.current),s.current.select(),document.execCommand("copy"),t.target.focus(),o("Copied!")}(t)},variant:"contained",endIcon:(0,a.jsx)(g.Z,{})}),n]})]}),(0,a.jsxs)(i.Typography,{variant:"body1",paragraph:!0,children:["Balance:",(0,a.jsx)(C,{})]})]})},G=function(){var t=(0,p.Ge)(),e=t.connector,n=(t.library,t.account,t.deactivate),o=t.active,s=t.error,u=O(r.useState(),2),l=u[0],y=u[1];r.useEffect((function(){l&&l===e&&y(void 0)}),[l,e]);var c=(0,w.y)();return(0,w.f)({suppress:!c||!!l}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E,{}),o?(0,a.jsx)(i.Button,{disabled:!0,size:"large",variant:"contained",onClick:function(){n()},children:"Disconnect"}):s?(0,a.jsx)(i.Button,{size:"large",variant:"contained",onClick:function(){n()},children:"Cancel Connect"}):"connect",s&&(0,a.jsx)(i.Typography,{variant:"body1",paragraph:!0,children:S(s)})]})},F=function(){return(0,a.jsx)(o.Z,{children:(0,a.jsxs)(i.Container,{maxWidth:"md",children:[(0,a.jsx)(i.Box,{sx:{my:4},children:(0,a.jsx)(i.Typography,{variant:"h1",gutterBottom:!0,children:"Profile"})}),(0,a.jsxs)(i.Grid,{container:!0,spacing:2,children:[(0,a.jsx)(i.Grid,{p:"40px",item:!0,xs:12,md:4,children:(0,a.jsx)(G,{})}),(0,a.jsxs)(i.Grid,{p:"40px",item:!0,xs:12,md:8,children:[(0,a.jsx)(i.Typography,{variant:"h3",gutterBottom:!0,children:"Your NFTs"}),(0,a.jsx)(b,{})]})]})]})})}},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},27790:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){},69862:function(){},40964:function(){},71408:function(){},73358:function(){},29014:function(t){"use strict";t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address[]","name":"_recipient","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_recipient","type":"address[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')}},function(t){t.O(0,[482,100,819,774,888,179],(function(){return e=22697,t(t.s=e);var e}));var e=t.O();_N_E=e}]);