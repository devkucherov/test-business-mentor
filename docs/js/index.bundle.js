!function(){var t={945:function(){document.addEventListener("DOMContentLoaded",(function(){const t=new Date(Date.now()+81370999);let e=null;function n(){const n=t-new Date;n<=0&&clearInterval(e);const c=n>0?Math.floor(n/1e3/60/60)%24:0,a=n>0?Math.floor(n/1e3/60)%60:0,i=n>0?Math.floor(n/1e3)%60:0;o.textContent=c<10?"0"+c:c,r.textContent=a<10?"0"+a:a,u.textContent=i<10?"0"+i:i}const o=document.querySelector(".timer__hours"),r=document.querySelector(".timer__minutes"),u=document.querySelector(".timer__seconds");n(),e=setInterval(n,1e3)}))}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var u=e[o]={exports:{}};return t[o](u,u.exports,n),u.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(945);n.n(t)()()}()}();