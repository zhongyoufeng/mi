"use strict";var register=function(){var r=document.querySelector(".account-land"),o=document.querySelector(".pwd"),e=document.querySelector(".btn"),n=document.querySelector(".confirm"),t=document.querySelector(".request-account"),a=document.querySelector(".request-confirm");document.querySelector(".Verification-input"),document.querySelector(".request-verification");return{init:function(){this.event()},event:function(){var u=this;r.onblur=function(){/^[a-zA-Z0-9_-]{4,16}$/.test(r.value)?t.style.opacity=0:(t.style.opacity=1,this.value="")},n.onblur=function(){o.value!==n.value?a.style.opacity=1:a.style.opacity=0},e.onclick=function(){var t={username:r.value,password:o.value};u.jude("users","username",r.value,function(e){0===e?(alert("用户已存在！"),r.value="",o.value="",n.value=""):""===r.value||""===o.value||""===n.value?alert("信息填写有误，请重新输入"):1===e&&u.add("users",t,function(){alert("注册成功"),location.href="login.html"})})}},add:function(e,t,u){var r=null;(r=localStorage[e]?JSON.parse(localStorage[e]):[]).push(t),localStorage[e]=JSON.stringify(r),u&&u()},jude:function(e,t,u,r){if(localStorage[e]){for(var o=JSON.parse(localStorage[e]),n=!1,a=0;a<o.length;a++)o[a][t]===u&&(n=!0);r(n?0:1)}else r(1)}}}();register.init();