"use strict";(self.webpackChunktest_reactjs=self.webpackChunktest_reactjs||[]).push([[488],{2488:(a,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e(2791),t=e(6953),r=e(5294),n=e(184);const l={title:"T\xc0I KHO\u1ea2N \u0110\u0102NG K\xdd",type:"object",required:["firstName","lastName","email","password","confirmPassword"],properties:{firstName:{type:"string",title:"T\xcaN NG\u01af\u1edcI D\xd9NG"},lastName:{type:"string",title:"H\u1ecc NG\u01af\u1edcI D\xd9NG"},email:{type:"string",title:"Email NG\u01af\u1edcI D\xd9NG "},password:{type:"string",title:"M\xc3 S\u1ed0",format:"password"},confirmPassword:{type:"string",title:"M\xc3 S\u1ed0",format:"password"},date:{type:Date,default:Date.now}}},o=a=>!a||a.trim().length<1,c=a=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a);function d(){const[a,s]=(0,i.useState)(l),[e,d]=(0,i.useState)({}),m=e=>{const{value:i,name:t}=e.target;s({...a,[t]:i,date:(new Date).toISOString()})},p=async()=>{const a=await(async()=>{try{const a=await fetch("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/GET_ID_ACC"),s=await a.json();if(s[0]&&null!==s[0].ID_account)return parseFloat(s[0].ID_account)}catch(a){console.error("Fetch error:",a)}})();return"undefined"===typeof a?1:a+1};return console.log(e),(0,n.jsx)("div",{className:"limiter",children:(0,n.jsxs)("div",{className:"wrap-login100",children:[(0,n.jsx)("div",{className:"login100-pic js-tilt","data-tilt":!0,children:(0,n.jsx)("img",{src:t,alt:"Logo"})}),(0,n.jsxs)("form",{className:"login100-form validate-form",onSubmit:async e=>{e.preventDefault();const i=(new Date).toISOString(),t=await p();if((()=>{const s={};return o(a.firstName)&&(s.firstName="Error: First Name is required"),o(a.lastName)&&(s.lastName="Error: Last Name is required"),o(a.email)?s.email="Error: Email is required":c(a.email)||(s.email="Error: Email is invalid"),o(a.password)&&(s.passWord="Error: Password is required"),o(a.confirmPassword)?s.confirmPassword="Error: Confirm Password is required":a.confirmPassword!==a.password&&(s.confirmPassword="Error: Confirm Password not match"),d(s),0===Object.keys(s).length})())try{const e={ID_account:t},n={firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password,confirmPassword:a.confirmPassword,date:i,ID:t};console.error("Random number:",t);const l=await r.Z.post("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/Log_in",n),o=await r.Z.post("https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/COUNT_ID",e);console.log("\u0110\xe3 g\u1eedi d\u1eef li\u1ec7u th\xe0nh c\xf4ng:",l.data),console.log("\u0110\xe3 g\u1eedi d\u1eef li\u1ec7u th\xe0nh c\xf4ng:",o.data),s({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})}catch(n){console.error("L\u1ed7i khi g\u1eedi d\u1eef li\u1ec7u:",n)}},children:[(0,n.jsx)("span",{className:"login100-form-title",children:"Register"}),(0,n.jsxs)("div",{className:"wrap-input100 validate-input",children:[(0,n.jsx)("input",{id:"first-name",className:"input100",type:"text",name:"firstName",placeholder:"FirstName",value:a.firstName,onChange:m}),e.firstName&&(0,n.jsx)("div",{className:"error-feedback",children:e.firstName}),(0,n.jsx)("span",{className:"focus-input100"}),(0,n.jsx)("span",{className:"symbol-input100",children:(0,n.jsx)("i",{class:"uil uil-label"})})]}),(0,n.jsxs)("div",{className:"wrap-input100 validate-input",children:[(0,n.jsx)("input",{id:"last-name",className:"input100",type:"text",name:"lastName",placeholder:"LastName",value:a.lastName,onChange:m}),e.lastName&&(0,n.jsx)("div",{className:"error-feedback",children:e.lastName}),(0,n.jsx)("span",{className:"focus-input100"}),(0,n.jsx)("span",{className:"symbol-input100",children:(0,n.jsx)("i",{class:"uil uil-label"})})]}),(0,n.jsxs)("div",{className:"wrap-input100 validate-input",children:[(0,n.jsx)("input",{id:"email",className:"input100",type:"text",name:"email",placeholder:"Email",value:a.email,onChange:m}),e.email&&(0,n.jsx)("div",{className:"error-feedback",children:e.email}),(0,n.jsx)("span",{className:"focus-input100"}),(0,n.jsx)("span",{className:"symbol-input100",children:(0,n.jsx)("i",{class:"uil uil-envelope","aria-hidden":"true"})})]}),(0,n.jsxs)("div",{className:"wrap-input100 validate-input",children:[(0,n.jsx)("input",{id:"password",className:"input100",type:"password",name:"password",placeholder:"Password",value:a.password,onChange:m}),e.passWord&&(0,n.jsx)("div",{className:"error-feedback",children:e.passWord}),(0,n.jsx)("span",{className:"focus-input100"}),(0,n.jsx)("span",{className:"symbol-input100",children:(0,n.jsx)("i",{class:"uil uil-lock-alt"})})]}),(0,n.jsxs)("div",{className:"wrap-input100 validate-input",children:[(0,n.jsx)("input",{id:"confirm-password",className:"input100",type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:a.confirmPassword,onChange:m}),e.confirmPassword&&(0,n.jsx)("div",{className:"error-feedback",children:e.confirmPassword}),(0,n.jsx)("span",{className:"focus-input100"}),(0,n.jsx)("span",{className:"symbol-input100",children:(0,n.jsx)("i",{class:"uil uil-lock-alt"})})]}),(0,n.jsx)("div",{className:"container-login100-form-btn",children:(0,n.jsx)("button",{type:"submit",className:"login100-form-btn",children:"Sign Up"})}),(0,n.jsx)("div",{className:"text-center p-t-136",style:{textAlign:"center",paddingTop:"20px"},children:(0,n.jsxs)("a",{className:"txt2",href:"#",children:["Create your Account",(0,n.jsx)("i",{className:"fa fa-long-arrow-right m-l-5","aria-hidden":"true"})]})})]})]})})}}}]);
//# sourceMappingURL=488.fef762d5.chunk.js.map