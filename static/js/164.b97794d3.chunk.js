"use strict";(self.webpackChunktest_reactjs=self.webpackChunktest_reactjs||[]).push([[164],{164:(s,e,t)=>{t.r(e),t.d(e,{default:()=>l});t(8216);var a=t(2791),c=t(3762),n=t(184);const l=function(){const[s,e]=(0,a.useState)([]),[t,l]=(0,a.useState)([]),[i,r]=(0,a.useState)(0);(0,a.useEffect)((()=>{d()}),[]);const d=()=>{fetch("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/GET_Data_login").then((s=>s.json())).then((s=>{e(s[0].public.input.jsondata),l(s[0].public.input.jsondata),r(Object.keys(s[0].public.input.jsondata).length)})).catch((s=>{console.error("Fetch error:",s)}))};return(0,n.jsx)("div",{className:"dash-content",style:{paddingTop:"5px"},children:(0,n.jsxs)("div",{className:"overview",children:[(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)("i",{className:"uil uil-tachometer-fast-alt"}),(0,n.jsx)("span",{className:"text",children:"Dashboard"})]}),(0,n.jsxs)("div",{className:"boxes",children:[(0,n.jsxs)("div",{className:"box box1",children:[(0,n.jsx)("i",{class:"uil uil-users-alt"}),(0,n.jsx)("span",{className:"text",children:"Total Accounts"}),(0,n.jsx)("span",{className:"number",children:i})]}),(0,n.jsxs)("div",{className:"box box2",children:[(0,n.jsx)("i",{class:"uil uil-servers"}),(0,n.jsx)("span",{className:"text",children:"Total Sensor"}),(0,n.jsx)("span",{className:"number",children:"2"})]}),(0,n.jsxs)("div",{className:"box box3",children:[(0,n.jsx)("i",{class:"uil uil-cloud-check"}),(0,n.jsx)("span",{className:"text",children:"Online"}),(0,n.jsx)("span",{className:"number",children:"1"})]})]}),(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)("i",{class:"uil uil-user-check"}),(0,n.jsx)("span",{className:"text",children:"Recently Users"})]}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{}),(0,n.jsx)("th",{children:"First Name"}),(0,n.jsx)("th",{children:"Last Name"}),(0,n.jsx)("th",{children:"Email"}),(0,n.jsx)("th",{children:"Date Created"})]})}),(0,n.jsx)("tbody",{children:Object.values(t).sort(((s,e)=>new Date(e.date)-new Date(s.date))).slice(0,10).map((s=>{const e=new Date(s.date),t="".concat(e.getFullYear(),"-").concat((e.getMonth()+1).toString().padStart(2,"0"),"-").concat(e.getDate().toString().padStart(2,"0")," ").concat(e.getHours().toString().padStart(2,"0"),":").concat(e.getMinutes().toString().padStart(2,"0"),":").concat(e.getSeconds().toString().padStart(2,"0"));return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("div",{className:"logous1",children:(0,n.jsx)("img",{src:c,alt:"Avatar"})})}),(0,n.jsx)("td",{children:s.firstName}),(0,n.jsx)("td",{children:s.lastName}),(0,n.jsx)("td",{children:s.email}),(0,n.jsx)("td",{children:t})]},s.id)}))})]})]})})}},8216:()=>{},3762:(s,e,t)=>{s.exports=t.p+"static/media/usav.f35b559e001f057f3656.png"}}]);
//# sourceMappingURL=164.b97794d3.chunk.js.map