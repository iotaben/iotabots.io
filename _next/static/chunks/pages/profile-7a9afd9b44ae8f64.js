(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{22697:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(39669)}])},2133:function(e,t,n){"use strict";var a=n(85893),i=(n(67294),n(27680)),r=(0,i.makeStyles)((function(e){return{root:{background:e.palette.background.gradient,flexGrow:1,flexShrink:1,display:"flex",flexDirection:"column",justifyContent:"center"}}}));t.Z=function(e){var t=e.children,n=r();return(0,a.jsx)(i.Box,{className:n.root,children:t})}},39669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(28520),i=n.n(a),r=n(85893),s=n(67294),o=n(27680),u=n(77044),p=n(3283),y=n.n(p),l=n(44781),d=n(30950),c=n(83929),m=n(35553),f=n(93683);function b(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(u){i=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){return b(e,d.A5)?"No Wallet Browser Extension detected, install Browser Extension on desktop or visit from a dApp browser on mobile.":b(e,d.ab)||c.ab?"Please authorize this website to access your Wallet account.":"An unknown error occurred. Check the console for more details."},T=function(){var e=(0,u.Ge)(),t=e.chainId,n=e.library,a=h(s.useState(),2),i=a[0],o=a[1];return s.useEffect((function(){if(n){var e=!1;n.getBlockNumber().then((function(){e||o(i)})).catch((function(){e||o(null)}));var t=function(){o(i)};return n.on("block",t),function(){e=!0,n.removeListener("block",t),o(void 0)}}}),[n,t,i]),(0,r.jsx)("span",{children:null===i?"Error":null!==i&&void 0!==i?i:"-"})},x=function(){var e=(0,u.Ge)(),t=e.account,n=e.library,a=e.chainId,i=h(s.useState(),2),o=i[0],p=i[1];return s.useEffect((function(){if(t&&n){var e=!1;return n.getBalance(t).then((function(){e||p(o)})).catch((function(){e||p(null)})),function(){e=!0,p(void 0)}}return null}),[t,n,a,o]),(0,r.jsx)("span",{children:null===o?null:o?(0,m.dF)(o):"-"})},w=function(){var e=(0,u.Ge)(),t=e.active,n=e.error,a=(0,u.Ge)(),i=a.account,s=a.chainId;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Typography,{variant:"body1",paragraph:!0,children:["Status: ",t?"\ud83d\udfe2":n?"\ud83d\udd34":"\ud83d\udfe0"]}),(0,r.jsxs)(o.Typography,{variant:"body1",paragraph:!0,children:["chainId: ",s||"-"]}),(0,r.jsxs)(o.Typography,{variant:"body1",paragraph:!0,children:["BlockNumber: ",(0,r.jsx)(T,{})]}),(0,r.jsxs)(o.Typography,{variant:"body1",paragraph:!0,children:["address: ",i||"-"]}),(0,r.jsxs)(o.Typography,{variant:"body1",paragraph:!0,children:["Balance:",(0,r.jsx)(x,{})]})]})},g=function(){var e=(0,u.Ge)(),t=e.connector,n=e.library,a=e.account,i=e.deactivate,p=e.active,y=e.error,l=h(s.useState(),2),d=l[0],c=l[1];s.useEffect((function(){d&&d===t&&c(void 0)}),[d,t]);var m=(0,f.y)();return(0,f.f)({suppress:!m||!!d}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),p?(0,r.jsx)(o.Button,{size:"large",variant:"contained",onClick:function(){i()},children:"Disconnect"}):y?(0,r.jsx)(o.Button,{size:"large",variant:"contained",onClick:function(){i()},children:"Cancel Connect"}):"connect",y&&(0,r.jsx)(o.Typography,{variant:"body1",paragraph:!0,children:v(y)}),(0,r.jsx)(o.Divider,{sx:{my:6}}),(0,r.jsx)(o.Box,{children:n&&a&&(0,r.jsx)(o.Button,{size:"large",fullWidth:!0,variant:"contained",onClick:function(){n.getSigner(a).signMessage("\ud83d\udc4b").then((function(e){console.log("Success!\n\n".concat(e))})).catch((function(){console.log("Failure!".concat(y&&y.message?"\n\n".concat(y.message):""))}))},children:"Sign Message"})})]})},M=n(2133);function j(e,t,n,a,i,r,s){try{var o=e[r](s),u=o.value}catch(p){return void n(p)}o.done?t(u):Promise.resolve(u).then(a,i)}function B(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function s(e){j(r,a,i,s,o,"next",e)}function o(e){j(r,a,i,s,o,"throw",e)}s(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(u){i=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=n(29014),_=function(){var e=k(s.useState([]),2),t=e[0],n=e[1],a=k(s.useState(!1),2),p=a[0],d=a[1],c=(0,u.Ge)(),m=c.account,f=c.active;return s.useEffect((function(){if(f){var e=B(i().mark((function t(){var a,r,s,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new(y())(window.web3.currentProvider),window.ethereum.on("accountsChanged",(function(){window.location.reload()})),r=new a.eth.Contract(I,"0x3a3c0D4BDAB6d0e9715Fa2eAA852af3038Bec342"),t.prev=4,t.next=7,r.methods.walletOfOwner(m).call();case 7:s=t.sent,t.next=15;break;case 10:return t.prev=10,t.t0=t.catch(4),d(!0),console.log(t.t0),t.abrupt("return",new Array);case 15:return console.log("i",e),t.next=18,Promise.all(s.map(B(i().mark((function e(t){var n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("token_index",t),e.next=3,r.methods.tokenURI(t).call();case 3:return n=e.sent,console.log("metadata_url:",n),e.next=7,fetch(n);case 7:return a=e.sent,e.next=10,a.json();case 10:return s=e.sent,console.log("metadata:",s),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})))));case 18:o=t.sent,console.log("items:",o),n(o);case 21:case"end":return t.stop()}}),t,null,[[4,10]])})));e()}return null}),[f]),(0,r.jsx)(M.Z,{children:(0,r.jsx)(o.Box,{children:(0,r.jsxs)(o.Container,{maxWidth:"sm",children:[(0,r.jsxs)(o.Box,{sx:{my:4},children:[(0,r.jsx)(o.Typography,{variant:"h1",gutterBottom:!0,children:"Profile"}),(0,r.jsx)(g,{})]}),(0,r.jsx)(o.Box,{sx:{marginBottom:"10px",textAlign:"center"},children:p?(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"h6",children:"There was an error retrieving your IotaBots"}):0===t.length?(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"h6",children:"You don't own any IotaBots yet :("}):t.map((function(e){return(0,r.jsx)(o.Grid,{item:!0,xs:12,sm:12,md:12,children:(0,r.jsxs)(o.Card,{children:[(0,r.jsx)(l.Z,{height:"100%",component:"img",image:e.image,alt:"IOTABOT"}),(0,r.jsxs)(o.CardContent,{sx:{flexGrow:1},children:[(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"h6",children:"IOTABOT ".concat(e.name)}),(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"body1",children:"DNA ".concat(e.dna)}),(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"body1",children:"Edition ".concat(e.edition)}),(0,r.jsx)(o.Typography,{gutterBottom:!0,variant:"body1",children:"Created on ".concat(new Date(e.date).toLocaleDateString())})]})]})},e.name)}))})]})})})}},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},27790:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){},69862:function(){},40964:function(){},71408:function(){},73358:function(){},29014:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address[]","name":"_recipient","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_recipient","type":"address[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')}},function(e){e.O(0,[482,100,306,774,888,179],(function(){return t=22697,e(e.s=t);var t}));var t=e.O();_N_E=t}]);