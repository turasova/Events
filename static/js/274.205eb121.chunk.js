"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[274],{3274:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(2791),s="EventsPage_title__ZcJbP",l="EventsPage_container__HHoF4",i=t(9439),r="CardEvent_list_item__gtYZK",o="CardEvent_button_container__0SaGQ",c="CardEvent_title__LSG+w",d="modal_modal__Nszx8",u="modal_overlay__fCMjT",m="modal_close__dW+iB",_="modal_form_container__dAjv2",h="modal_title__Td4A0",v=t(3206),x="Form_button__8NOIT",j="Form_input__FTtTw",f="Form_input_date__RZAM7",p="Form_text__c5Sr+",N="Form_label_text__nQF4D",b="Form_radio__JFyFF",F="Form_radio_label__cnMDO",C=t(184);var g=function(e){var n=e.onSubmit,t=(0,a.useState)(""),s=(0,i.Z)(t,2),l=s[0],r=s[1],o=(0,a.useState)(""),c=(0,i.Z)(o,2),d=c[0],u=c[1],m=(0,a.useState)(""),_=(0,i.Z)(m,2),h=_[0],v=_[1];return(0,C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({fullName:l,email:d,dateOfBirth:h})},children:[(0,C.jsxs)("div",{className:N,children:[(0,C.jsx)("label",{htmlFor:"fullName",children:"Full Name:"}),(0,C.jsx)("input",{className:j,type:"text",id:"fullName",value:l,onChange:function(e){return r(e.target.value)},required:!0})]}),(0,C.jsxs)("div",{className:N,children:[(0,C.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,C.jsx)("input",{className:j,type:"email",id:"email",value:d,onChange:function(e){return u(e.target.value)},required:!0})]}),(0,C.jsxs)("div",{className:N,children:[(0,C.jsx)("label",{htmlFor:"dateOfBirth",children:"Date of Birth:"}),(0,C.jsx)("input",{className:f,type:"date",id:"dateOfBirth",value:h,onChange:function(e){return v(e.target.value)},required:!0}),(0,C.jsx)("p",{className:p,children:"Where did you hear about this event?"}),(0,C.jsxs)("label",{className:F,children:[(0,C.jsx)("input",{type:"radio",name:"question",value:"media",className:b}),"Social media"]}),(0,C.jsxs)("label",{className:F,children:[(0,C.jsx)("input",{type:"radio",name:"question",value:"friends",className:b}),"Friends"]}),(0,C.jsxs)("label",{className:F,children:[(0,C.jsx)("input",{type:"radio",name:"question",value:"myself",className:b}),"Found myself"]})]}),(0,C.jsx)("button",{type:"submit",className:x,children:"Send"})]})},y=function(e){var n=e.onCloseModal,t=e.onSubmit;(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&n(),console.log("Press")};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]);return(0,C.jsx)("div",{className:u,onClick:function(e){e.target===e.currentTarget&&n()},children:(0,C.jsxs)("div",{className:d,children:[(0,C.jsx)(v.oHP,{className:m,onClick:n}),(0,C.jsxs)("div",{className:_,children:[(0,C.jsx)("h1",{className:h,children:"Event registration"}),(0,C.jsx)(g,{onSubmit:t})]})]})})},E=function(e){var n=e.events,t=(0,a.useState)(!1),s=(0,i.Z)(t,2),l=s[0],d=s[1],u=(0,a.useState)(null),m=(0,i.Z)(u,2),_=m[0],h=m[1],v=function(e){d(!0),h(e)},x=function(){d(!1),h(null)};return(0,C.jsx)(C.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e){var n=e.id,t=e.job,a=e.description;return(0,C.jsxs)("li",{className:r,children:[(0,C.jsx)("h1",{className:c,children:t}),(0,C.jsx)("p",{children:a}),(0,C.jsxs)("div",{className:o,children:[(0,C.jsxs)("button",{type:"button",onClick:v,children:[l&&(0,C.jsx)(y,{modal:_,onCloseModal:x,onOpenModal:v}),"Register"]}),(0,C.jsx)("button",{type:"button",children:"View"})]})]},n)}))})},S=t(4420),M=function(e){return e.events.events},k=t(2142),w="CardEventList_list__6MnMd",O=function(e){var n=e.onOpenModal,t=e.onCloseModal,s=(0,S.I0)(),l=(0,S.v9)(M);return(0,a.useEffect)((function(){s((0,k.G)())}),[s]),(0,C.jsx)("ul",{className:w,children:(0,C.jsx)(E,{events:l,onOpenModal:n,onCloseModal:t})})},Z=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("div",{className:l,children:[(0,C.jsx)("h1",{className:s,children:"Events"}),(0,C.jsx)("div",{children:(0,C.jsx)(O,{})})]})})}}}]);
//# sourceMappingURL=274.205eb121.chunk.js.map