"use strict";var e=require("@straddleio/bridge-core");const o={getUrl:()=>`${o.origin}/${encodeURIComponent("undefined"!=typeof window&&window.location.origin)}/`,origin:"",mounted:!1,verbose:!1,init:function(d){const{appUrl:t,token:n,onSuccess:i,onSuccessCTAClicked:s,style:l,verbose:r=!1}=d;o.origin=null!=t?t:"https://dev.straddle.io",r&&console.log("init called");const a=document.createElement("iframe");a.setAttribute("src",o.getUrl()),a.id="Straddle-widget-iframe";let g=l;l||(g={position:"fixed",width:"100%",height:"100%",top:"0%",left:"0",zIndex:"2147483647"}),Object.assign(a.style,g),document.getElementsByTagName("body")[0].appendChild(a),"undefined"!=typeof window&&window.addEventListener("message",(function(d){var t;if(d.origin===o.origin)switch(r&&console.log("Message received from widget:",d.data.type,d),null===(t=d.data)||void 0===t?void 0:t.type){case e.EBridgeMessageType.MOUNTED:o.mounted||(o.mounted=!0,o.send({type:e.EBridgeMessageType.INITIALIZE,token:n}));break;case e.EBridgeMessageType.ON_SUCCESS_CTA_CLICKED:document.getElementsByTagName("body")[0].removeChild(a),null==s||s();break;case e.EBridgeMessageType.ON_PAYKEY:null==i||i(d.data)}}))},getIframe:()=>document.getElementById("Straddle-widget-iframe"),show:()=>{o.verbose&&console.log("straddleBridge.show method called.");const e=o.getIframe();o.verbose&&e&&console.log("iframe found, setting display to block."),e.style.display="block"},hide:()=>{o.verbose&&console.log("straddleBridge.hide method called.");const e=o.getIframe();o.verbose&&e&&console.log("iframe found, setting display to none."),e.style.display="none"},remove:()=>{o.verbose&&console.log("straddleBridge.remove method called.");o.getIframe().remove(),o.mounted=!1},send:function(e){var d;const t=document.getElementById("Straddle-widget-iframe");console.log("sending message:",e),null===(d=null==t?void 0:t.contentWindow)||void 0===d||d.postMessage(e,o.origin)}};"undefined"!=typeof window&&(window.straddleBridge=o),Object.defineProperty(o,"debug",{value:{enable:()=>o.send({type:e.EBridgeMessageType.DEBUG,enable:!0}),disable:()=>o.send({type:e.EBridgeMessageType.DEBUG,enable:!1})},enumerable:!1,writable:!1,configurable:!1}),exports.straddleBridge=o;
