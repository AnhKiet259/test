"use strict";(self.webpackChunktest_reactjs=self.webpackChunktest_reactjs||[]).push([[432],{432:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var a=t(2791),l=t(3762),i=t(5294),c=t(184);const n=function(){const[e,s]=(0,a.useState)([]),[t,n]=(0,a.useState)([]),[o,r]=(0,a.useState)(""),[d,p]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!1),[h,x]=(0,a.useState)(!1),[j,g]=(0,a.useState)(!1),[f,y]=(0,a.useState)(null),[b,N]=(0,a.useState)(""),[v,C]=(0,a.useState)(""),[k,S]=(0,a.useState)(""),[w,U]=(0,a.useState)(""),[D,E]=(0,a.useState)("");(0,a.useEffect)((()=>{R()}),[]);const R=()=>{fetch("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/GET_Data_login").then((e=>e.json())).then((e=>{s(e[0].public.input.jsondata),n(e[0].public.input.jsondata)})).catch((e=>{console.error("Fetch error:",e)}))},T=()=>{y(null),g(!1)},_=()=>{x(!h)},I=()=>{m(!u)},L=e=>{(e=>{y(e),g(!0)})(e)};return(0,c.jsxs)("div",{children:[(0,c.jsx)("link",{rel:"stylesheet",href:"https://unicons.iconscout.com/release/v4.0.0/css/line.css"}),(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("i",{className:"uil uil-tachometer-fast-alt"}),(0,c.jsx)("span",{className:"text",children:"Manage Users"})]}),(0,c.jsx)("div",{className:"cover",style:{display:"flex",alignItems:"centerHere"},children:(0,c.jsxs)("div",{className:"search-box1",style:{flex:1,display:"flex",alignItems:"center"},children:[(0,c.jsx)("i",{className:"uil uil-search"}),(0,c.jsx)("input",{type:"text",value:o,onChange:s=>{const t=s.target.value;r(t);const a=Object.keys(e).filter((s=>e[s].firstname.toLowerCase().includes(t.toLowerCase())));n(a.reduce(((s,t)=>(s[t]=e[t],s)),{}))},placeholder:"Search User By FirstName"})]})}),u&&(0,c.jsx)("div",{className:"modal",children:(0,c.jsxs)("div",{className:"modal-content",children:[(0,c.jsx)("i",{class:"uil uil-check-circle modalicon",style:{width:"200px"}}),(0,c.jsx)("h2",{children:"Success"}),(0,c.jsx)("p",{children:"Successfully Update"}),(0,c.jsx)("button",{className:"modal-close",onClick:I,children:"Close"})]})}),j&&(0,c.jsx)("div",{className:"modal",children:(0,c.jsxs)("div",{className:"modal-content",style:{borderRadius:"30px"},children:[(0,c.jsx)("i",{class:"uil uil-question-circle modalicon",style:{width:"200px",color:"red"}}),(0,c.jsx)("h2",{children:"Confirm Delete"}),(0,c.jsx)("p",{children:"Are you sure you want to delete this user?"}),(0,c.jsxs)("div",{className:"confirm-modal-buttons",children:[(0,c.jsx)("button",{className:"confirm-modal-button modal-close",onClick:()=>{const e=f;i.Z.post("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/DELETE_ACCOUNT",{data:{key:e}}).then((s=>{console.log("Delete successful:",s),n((s=>{const t={...s};return delete t[e],{...t}})),T(),I()})).catch((e=>{console.error("Delete error:",e)}))},style:{marginRight:"10px"},children:"Delete"}),(0,c.jsx)("button",{className:"confirm-modal-button modal-close",onClick:T,children:"Close"})]})]})}),h&&(0,c.jsx)("div",{className:"modal",children:(0,c.jsxs)("div",{className:"modal-content",style:{borderRadius:"30px"},children:[(0,c.jsx)("i",{class:"uil uil-file-edit-alt modalicon",style:{width:"200px",color:"#fc9803"}}),(0,c.jsx)("h2",{children:"Update Information"}),(0,c.jsxs)("a",{children:["( ",v," ",k," )"]}),(0,c.jsxs)("div",{className:"form-group",style:{width:"100%",display:"flex",alignItems:"center",padding:"8px",marginTop:"10px",border:"1px solid #ccc",borderRadius:"8px"},children:[(0,c.jsx)("a",{style:{marginRight:"5px"},children:"Email:"}),(0,c.jsx)("input",{type:"text",id:"email",value:w,onChange:e=>{U(e.target.value)}})]}),(0,c.jsxs)("div",{className:"form-group",style:{display:"flex",alignItems:"center",width:"100%",padding:"8px",marginTop:"8px",border:"1px solid #ccc",borderRadius:"8px"},children:[(0,c.jsx)("a",{style:{marginRight:"5px"},children:"Password:"}),(0,c.jsx)("input",{type:"text",id:"password",value:D,onChange:e=>{E(e.target.value)}})]}),(0,c.jsxs)("div",{className:"form-buttons",style:{paddingTop:"30px"},children:[(0,c.jsx)("button",{className:"modal-close",style:{marginRight:"10px"},onClick:()=>{const e=f,t={username:b,email:w,password:D};i.Z.post("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/UPDATE_ACCOUNT",t).then((a=>{console.log("Update successful:",a),s((s=>{const a={...s};return a[e]=t[e],a})),R(),_(),I()})).catch((e=>{console.error("Update error:",e)}))},children:"Update"}),(0,c.jsx)("button",{className:"modal-close",onClick:_,children:"Cancel"})]})]})}),(0,c.jsx)("div",{class:"grid-container",children:Object.keys(t).map((s=>(0,c.jsxs)("div",{className:"tagUser",children:[(0,c.jsx)("div",{className:"logous",children:(0,c.jsx)("img",{src:l,alt:"Logo"})}),(0,c.jsxs)("h2",{children:[t[s].firstname," ",t[s].lastname]}),(0,c.jsxs)("p",{children:["First Name: ",t[s].firstname]}),(0,c.jsxs)("p",{children:["Last Name: ",t[s].lastname]}),(0,c.jsxs)("p",{children:["Email: ",t[s].email]}),(0,c.jsxs)("p",{children:["Phone: ",t[s].phone]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{className:"button1",onClick:()=>(s=>{const{firstname:t,lastname:a,email:l,password:i}=e[s];N(s),C(t),S(a),U(l),E(i),_()})(s),children:"Update"}),(0,c.jsx)("button",{className:"button2",onClick:()=>L(s),children:"Delete"})]})]},s)))})]})}},3762:(e,s,t)=>{e.exports=t.p+"static/media/usav.f35b559e001f057f3656.png"}}]);
//# sourceMappingURL=432.79bacdcb.chunk.js.map