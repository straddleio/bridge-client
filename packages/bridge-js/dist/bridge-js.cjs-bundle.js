var StraddleBridge=function(e){"use strict";function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var d=function e(){if(this instanceof e){var d=[null];return d.push.apply(d,arguments),new(Function.bind.apply(t,d))}return t.apply(this,arguments)};d.prototype=t.prototype}else d={};return Object.defineProperty(d,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(d,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),d}var d,o={};!function(e){e.PING="@straddleio/js-bridge/ping",e.ERROR="@straddleio/js-bridge/error",e.INITIALIZE="@straddleio/js-bridge/initialize",e.INITIALIZING="@straddleio/js-bridge/initializing",e.INITIALIZED="@straddleio/js-bridge/initialized",e.MOUNTED="@straddleio/js-bridge/mounted",e.ON_PAYKEY="@straddleio/js-bridge/on-wallet-token",e.ON_SUCCESS="@straddleio/js-bridge/on-success",e.ON_SUCCESS_CTA_CLICKED="@straddleio/js-bridge/on-success-cta-clicked",e.TOKEN="@straddleio/js-bridge/token",e.DEBUG="@straddleio/js-bridge/debug"}(d||(d={}));var i=t(Object.freeze({__proto__:null,get EBridgeMessageType(){return d}}));e.straddleBridge=void 0;var n=i;const r={getUrl:()=>`${r.origin}/${encodeURIComponent("undefined"!=typeof window&&window.location.origin)}/`,origin:"",mounted:!1,verbose:!1,init:function(e){const{appUrl:t,token:d,onSuccess:o,onSuccessCTAClicked:i,style:s,className:l,verbose:a=!1}=e;r.origin=null!=t?t:"https://dev.straddle.io",a&&console.log("init called");const g=document.createElement("iframe");g.setAttribute("src",r.getUrl()),g.id="Straddle-widget-iframe";let c=s;s||(c={position:"fixed",width:"100%",height:"100%",top:"0%",left:"0",zIndex:"2147483647"}),Object.assign(g.style,c),l&&l.split(" ").forEach((e=>{g.classList.add(e)})),document.getElementsByTagName("body")[0].appendChild(g),"undefined"!=typeof window&&window.addEventListener("message",(function(e){var t;if(e.origin===r.origin)switch(a&&console.log("Message received from widget:",e.data.type,e),null===(t=e.data)||void 0===t?void 0:t.type){case n.EBridgeMessageType.MOUNTED:r.mounted||(r.mounted=!0,r.send({type:n.EBridgeMessageType.INITIALIZE,token:d}));break;case n.EBridgeMessageType.ON_SUCCESS_CTA_CLICKED:document.getElementsByTagName("body")[0].removeChild(g),null==i||i();break;case n.EBridgeMessageType.ON_PAYKEY:null==o||o(e.data)}}))},getIframe:()=>document.getElementById("Straddle-widget-iframe"),show:()=>{r.verbose&&console.log("straddleBridge.show method called.");const e=r.getIframe();r.verbose&&e&&console.log("iframe found, setting display to block."),e.style.display="block"},hide:()=>{r.verbose&&console.log("straddleBridge.hide method called.");const e=r.getIframe();r.verbose&&e&&console.log("iframe found, setting display to none."),e.style.display="none"},remove:()=>{r.verbose&&console.log("straddleBridge.remove method called."),r.getIframe().remove(),r.mounted=!1},send:function(e){var t;const d=document.getElementById("Straddle-widget-iframe");console.log("sending message:",e),null===(t=null==d?void 0:d.contentWindow)||void 0===t||t.postMessage(e,r.origin)}};return"undefined"!=typeof window&&(window.straddleBridge=r),Object.defineProperty(r,"debug",{value:{enable:()=>r.send({type:n.EBridgeMessageType.DEBUG,enable:!0}),disable:()=>r.send({type:n.EBridgeMessageType.DEBUG,enable:!1})},enumerable:!1,writable:!1,configurable:!1}),e.straddleBridge=o.straddleBridge=r,e.default=o,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
