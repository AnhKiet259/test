"use strict";(self.webpackChunktest_reactjs=self.webpackChunktest_reactjs||[]).push([[432],{432:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(2791),l=a(3762),i=a(5294),n=a(184);const c=function(){const[e,s]=(0,t.useState)([]),[a,c]=(0,t.useState)([]),[o,r]=(0,t.useState)(""),[d,p]=(0,t.useState)(!1),[m,h]=(0,t.useState)(!1),[u,x]=(0,t.useState)(!1),[j,g]=(0,t.useState)(!1),[f,y]=(0,t.useState)(null),[b,N]=(0,t.useState)(""),[v,C]=(0,t.useState)(""),[k,S]=(0,t.useState)(""),[w,T]=(0,t.useState)(""),[U,E]=(0,t.useState)("");(0,t.useEffect)((()=>{R()}),[]);const R=()=>{fetch("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/GET_Data_login").then((e=>e.json())).then((e=>{s(e[0].public.input.jsondata),c(e[0].public.input.jsondata)})).catch((e=>{console.error("Fetch error:",e)}))},D=()=>{y(null),g(!1)},_=()=>{x(!u)},I=()=>{h(!m)},L=e=>{(e=>{y(e),g(!0)})(e)};return(0,n.jsxs)("div",{children:[(0,n.jsx)("link",{rel:"stylesheet",href:"https://unicons.iconscout.com/release/v4.0.0/css/line.css"}),(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)("i",{className:"uil uil-tachometer-fast-alt"}),(0,n.jsx)("span",{className:"text",children:"Manage Users"})]}),(0,n.jsx)("div",{className:"cover",style:{display:"flex",alignItems:"centerHere"},children:(0,n.jsxs)("div",{className:"search-box1",style:{flex:1,display:"flex",alignItems:"center"},children:[(0,n.jsx)("i",{className:"uil uil-search"}),(0,n.jsx)("input",{type:"text",value:o,onChange:s=>{const a=s.target.value;r(a);const t=Object.keys(e).filter((s=>e[s].firstname.toLowerCase().includes(a.toLowerCase())));c(t.reduce(((s,a)=>(s[a]=e[a],s)),{}))},placeholder:"Search User By FirstName"})]})}),m&&(0,n.jsx)("div",{className:"modal",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsx)("i",{class:"uil uil-check-circle modalicon",style:{width:"200px"}}),(0,n.jsx)("h2",{children:"Th\xe0nh C\xf4ng"}),(0,n.jsx)("p",{children:"\u0110\xe3 Th\u1ef1c Hi\u1ec7n Th\xe0nh C\xf4ng"}),(0,n.jsx)("button",{className:"modal-close",onClick:I,children:"\u0110\xf3ng"})]})}),j&&(0,n.jsx)("div",{className:"modal",children:(0,n.jsxs)("div",{className:"modal-content",style:{borderRadius:"30px"},children:[(0,n.jsx)("i",{class:"uil uil-question-circle modalicon",style:{width:"200px",color:"red"}}),(0,n.jsx)("h2",{children:"Confirm Delete"}),(0,n.jsx)("p",{children:"B\u1ea1n c\xf3 ch\u1eafc l\xe0 mu\u1ed1n x\xf3a ng\u01b0\u1eddi d\xf9ng n\xe0y ?"}),(0,n.jsxs)("div",{className:"confirm-modal-buttons",children:[(0,n.jsx)("button",{className:"confirm-modal-button modal-close",onClick:()=>{const e=f;i.Z.post("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/DELETE_ACCOUNT",{data:{key:e}}).then((s=>{console.log("Delete successful:",s),c((s=>{const a={...s};return delete a[e],{...a}})),D(),I()})).catch((e=>{console.error("Delete error:",e)}))},style:{marginRight:"10px"},children:"X\xf3a"}),(0,n.jsx)("button",{className:"confirm-modal-button modal-close",onClick:D,children:"H\u1ee7y"})]})]})}),u&&(0,n.jsx)("div",{className:"modal",children:(0,n.jsxs)("div",{className:"modal-content",style:{borderRadius:"30px"},children:[(0,n.jsx)("i",{class:"uil uil-file-edit-alt modalicon",style:{width:"200px",color:"#fc9803"}}),(0,n.jsx)("h2",{children:"Update Information"}),(0,n.jsxs)("a",{children:["( ",v," ",k," )"]}),(0,n.jsxs)("div",{className:"form-group",style:{width:"100%",display:"flex",alignItems:"center",padding:"8px",marginTop:"10px",border:"1px solid #ccc",borderRadius:"8px"},children:[(0,n.jsx)("a",{style:{marginRight:"5px"},children:"Email:"}),(0,n.jsx)("input",{type:"text",id:"email",value:w,onChange:e=>{T(e.target.value)}})]}),(0,n.jsxs)("div",{className:"form-group",style:{display:"flex",alignItems:"center",width:"100%",padding:"8px",marginTop:"8px",border:"1px solid #ccc",borderRadius:"8px"},children:[(0,n.jsx)("a",{style:{marginRight:"5px"},children:"Password:"}),(0,n.jsx)("input",{type:"text",id:"password",value:U,onChange:e=>{E(e.target.value)}})]}),(0,n.jsxs)("div",{className:"form-buttons",style:{paddingTop:"30px"},children:[(0,n.jsx)("button",{className:"modal-close",style:{marginRight:"10px"},onClick:()=>{const e=f,a={username:b,email:w,password:U};i.Z.post("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/UPDATE_ACCOUNT",a).then((t=>{console.log("Update successful:",t),s((s=>{const t={...s};return t[e]=a[e],t})),R(),_(),I()})).catch((e=>{console.error("Update error:",e)}))},children:"Update"}),(0,n.jsx)("button",{className:"modal-close",onClick:_,children:"Cancel"})]})]})}),(0,n.jsx)("div",{class:"grid-container",children:Object.keys(a).map((s=>(0,n.jsxs)("div",{className:"tagUser",children:[(0,n.jsx)("div",{className:"logous",children:(0,n.jsx)("img",{src:l,alt:"Logo"})}),(0,n.jsxs)("h2",{children:[a[s].firstname," ",a[s].lastname]}),(0,n.jsxs)("p",{children:["First Name: ",a[s].firstname]}),(0,n.jsxs)("p",{children:["Last Name: ",a[s].lastname]}),(0,n.jsxs)("p",{children:["Email: ",a[s].email]}),(0,n.jsxs)("p",{children:["Email: ",a[s].phone]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:"button1",onClick:()=>(s=>{const{firstname:a,lastname:t,email:l,password:i}=e[s];N(s),C(a),S(t),T(l),E(i),_()})(s),children:"Update"}),(0,n.jsx)("button",{className:"button2",onClick:()=>L(s),children:"Delete"})]})]},s)))})]})}},3762:(e,s,a)=>{e.exports=a.p+"static/media/usav.f35b559e001f057f3656.png"}}]);
//# sourceMappingURL=432.5f056fdc.chunk.js.map