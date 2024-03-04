/**
 *  iframe-resizer (jQuery) v5.0.0-alpha.1 - 2024-03-04
 *
 *  License:    GPL-3.0
 *  Copyright:  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 * 
 *  Desciption: Keep same and cross domain iFrames sized to their content with
 *              support for window/content resizing, and multiple iFrames.
 *
 *  @preserve
 *  @module @iframe-resizer/jquery
 *  @version 5.0.0-alpha.1
 *  @license GPL-3.0
 *  @author David J. Bradshaw <dave@bradshaw.net>
 *  @fileoverview JQuery parent window script for iframe-resizer.
 *  @copyright (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 *  @see {@link https://github.com/davidjbradshaw/iframe-resizer}
 */


!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="[iframeResizer]";const n=n=>`${e}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(n)}]`,i=(e,i,...t)=>window?.console[e](n(i),...t),t=(e,...n)=>i("info",e,...n),o=(e,...n)=>i("warn",e,...n),r=(n,i)=>window?.console.warn(((n,...i)=>[`${e}[${n}]`,...i].join(" "))(n,window.chrome?i:i.replaceAll(/\u001B\[[\d;]*m/gi,""))),a=7,s="[iFrameSizer]",d=s.length,c=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),l=(e,n,i,t)=>e.addEventListener(n,i,t||!1),u=(e,n,i)=>e.removeEventListener(n,i,!1);var f={};var m=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,offsetHeight:0,offsetWidth:0,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof f[e.id].onInit&&(r(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),f[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),h={position:null,version:"5.0.0-alpha.1"};function g(e){function n(){c("Height"),c("Width"),T(B),v(),L("onResized",B)}function i(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function r(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function c(e){const n=Number(f[D][`max${e}`]),i=Number(f[D][`min${e}`]),t=e.toLowerCase();let o=Number(B[t]);o<i&&(o=i),o>n&&(o=n),B[t]=`${o}`}function m(e){return C.slice(C.indexOf(":")+a+e)}const g=(e,n)=>(i,t)=>{const o={};var r,a;r=function(){R(`Send ${e} (${i})`,`${e}:${n()}`,t)},o[a=t]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},w=(e,n)=>()=>{const i=n=>()=>{f[r]?e(n,r):o()};function t(e,n){n(window,"scroll",i("scroll")),n(window,"resize",i("resize window"))}function o(){t(0,u),a.disconnect()}const r=D,a=new ResizeObserver(i("iframe observed"));t(0,l),a.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),f[r]&&(f[r][`stop${n}`]=o)},k=e=>()=>{e in f[D]&&(f[D][e](),delete f[D][e])},x=g("pageInfo",(function(){const e=document.body.getBoundingClientRect(),n=B.iframe.getBoundingClientRect(),{scrollY:i,scrollX:t,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:i,scrollLeft:t,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),M=g("parentInfo",(function(){const{iframe:e}=B,{scrollWidth:n,scrollHeight:i}=document.documentElement,{width:t,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:d,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:n,scrollHeight:i},viewport:{width:t,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:d,scale:c}})})),W=w(x,"PageInfo"),F=w(M,"ParentInfo"),N=k("stopPageInfo"),H=k("stopParentInfo");function E(e){const n=e.getBoundingClientRect();return y(),{x:Math.floor(Number(n.left)+Number(h.position.x)),y:Math.floor(Number(n.top)+Number(h.position.y))}}function O(e){const n=e?E(B.iframe):{x:0,y:0};let i=((e,n)=>({x:Number(e.width)+n.x,y:Number(e.height)+n.y}))(B,n);window.top===window.self?(h.position=i,S()):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):o(D,"Unable to scroll to requested position, window.parentIFrame not found")}function S(){!1!==L("onScroll",h.position)?v():z()}function j(e){let n={};if(0===Number(B.width)&&0===Number(B.height)){const e=m(9).split(":");n={x:e[1],y:e[0]}}else n={x:B.width,y:B.height};L(e,{iframe:B.iframe,screenX:Number(n.x),screenY:Number(n.y),type:B.type})}const L=(e,n)=>p(D,e,n);let C=e.data,B={},D=null;"[iFrameResizerChild]Ready"!==C?s===`${C}`.slice(0,d)&&C.slice(d).split(":")[0]in f?(B=function(){const e=C.slice(d).split(":"),n=e[1]?Number(e[1]):0,t=f[e[0]]?.iframe,o=getComputedStyle(t);return{iframe:t,id:e[0],height:n+i(o)+r(o),width:Number(e[2]),type:e[3]}}(),D=B.id,D?(function(e){if(!f[e])throw new Error(`${B.type} No settings for ${e}. Message was: ${C}`)}(D),B.type in{true:1,false:1,undefined:1}||(f[D].loaded=!0,function(){let e=!0;return null===B.iframe&&(o(D,`The iframe (${B.id}) was not found.`),e=!1),e}()&&function(){const{origin:n,sameDomain:i}=e;if(i)return!0;let t=f[D]?.checkOrigin;if(t&&"null"!=`${n}`&&!(t.constructor===Array?function(){let e=0,i=!1;for(;e<t.length;e++)if(t[e]===n){i=!0;break}return i}():function(){const e=f[D]?.remoteHost;return n===e}()))throw new Error(`Unexpected message received from: ${n} for ${B.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(f[D]?.firstRun&&f[D]&&(f[D].firstRun=!1),B.type){case"close":b(B.iframe);break;case"message":e=m(6),L("onMessage",{iframe:B.iframe,message:JSON.parse(e)});break;case"mouseenter":j("onMouseEnter");break;case"mouseleave":j("onMouseLeave");break;case"autoResize":f[D].autoResize=JSON.parse(m(9));break;case"scrollTo":O(!1);break;case"scrollToOffset":O(!0);break;case"pageInfo":x("start",D),W();break;case"parentInfo":M("start",D),F();break;case"pageInfoStop":N();break;case"parentInfoStop":H();break;case"inPageLink":!function(e){const n=e.split("#")[1]||"",i=decodeURIComponent(n);let t=document.getElementById(i)||document.getElementsByName(i)[0];t?function(){const e=E(t);h.position={x:e.x,y:e.y},S()}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(n)}(m(9));break;case"reset":$(B);break;case"init":n(),function(e){try{f[e].sameDomain=!!f[e]?.iframe?.contentWindow?.iFrameListener}catch(n){f[e].sameDomain=!1}}(D),L("onReady",B.iframe);break;default:if(0===B.width&&0===B.height)return void o(`Unsupported message received (${B.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===B.width||0===B.height)return;if(document.hidden)return;n()}var e}())):o("iframeResizer received messageData without id, message was: ",C)):t(D,`Ignored: ${C}`):Object.keys(f).forEach((e=>R("iFrame requested init",I(e),e)))}function p(e,n,i){let t=null,o=null;if(f[e]){if(t=f[e][n],"function"!=typeof t)throw new TypeError(`${n} on iFrame[${e}] is not a function`);o=t(i)}return o}function w(e){const n=e.id;delete f[n]}function b(e){const n=e.id;if(!1!==p(n,"onClose",n)){try{e.parentNode&&e.remove()}catch(e){o(e)}p(n,"onClosed",n),w(e)}}function y(e){null===h.position&&(h.position={x:window.scrollX,y:window.scrollY})}function z(){h.position=null}function v(e){null!==h.position&&(window.scrollTo(h.position.x,h.position.y),z())}function $(e){y(e.id),T(e),R("reset","reset",e.id)}function T(e){const n=e.id;function i(n){const i=`${e[n]}px`;e.iframe.style[n]=i}f[n].sizeHeight&&i("height"),f[n].sizeWidth&&i("width")}function R(e,n,i,t){f[i]&&(f[i]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:t}=f[i];if(f[i].sameDomain)try{return void f[i].iframe.contentWindow.iFrameListener(s+n)}catch(e){o(i,"Same domain connection failed. Trying cross domain"),f[i].sameDomain=!1}e.postMessage(s+n,t)}():o(i,`[${e}] IFrame(${i}) not found`),t&&f[i]?.warningTimeout&&(f[i].msgTimeout=setTimeout((function(){void 0!==f[i]&&(f[i].loaded||f[i].loadErrorShown||(f[i].loadErrorShown=!0,r(i,`\n[31;1mNo response from iFrame[m\n            \nThe iframe ([3m${i}[m) has not responded within ${f[i].warningTimeout/1e3} seconds. Check [1miFrameResizer.contentWindow.js[m has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the [1mwarningTimeout[m option to a higher value or zero to suppress this warning.\n`)))}),f[i].warningTimeout)))}function I(e){const n=f[e];return[e,"8",n.sizeWidth,n.log,"32",n.enablePublicMethods,n.autoResize,n.bodyMargin,n.heightCalculationMethod,n.bodyBackground,n.bodyPadding,n.tolerance,n.inPageLinks,"child",n.widthCalculationMethod,n.mouseEvents,n.offsetHeight,n.offsetWidth,n.sizeHeight,h.version].join(":")}let k=0;const x=e=>!Number.isNaN(e);function M(e,n){function i(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&r(t,'\n[31;1mDeprecated Optionm\n\nThe [1msizeWidth[m, [1msizeHeight[m and [1mautoResize[m options have been replaced with new [1mdirection[m option which expects values of [3m"vertical"[m, [3m"horizontal"[m or [3m"horizontal"[m.\n'),e}const t=function(i){if("string"!=typeof i)throw new TypeError("Invaild id for iFrame. Expected String");return""===i&&(e.id=i=function(){let e=n?.id||m.id+k++;return null!==document.getElementById(e)&&(e+=k++),e}(),(n||{}).log),i}(e.id);t in f&&"iFrameResizer"in e?o(t,"Ignored iFrame, already setup."):(!function(n){var o;f[t]={iframe:e,firstRun:!0,remoteHost:e?.src.split("/").slice(0,3).join("/"),...m,...i(n)},function(){if("horizontal"===f[t].direction)return f[t].sizeWidth=!0,void(f[t].sizeHeight=!1);if("none"===f[t].direction)return f[t].sizeWidth=!1,f[t].sizeHeight=!1,void(f[t].autoResize=!1);if("vertical"!==f[t].direction)throw new TypeError(t,`Direction value of "${f[t].direction}" is not valid`)}(),null===f[t].postMessageTarget&&(f[t].postMessageTarget=e.contentWindow),f[t].targetOrigin=!0===f[t].checkOrigin?""===(o=f[t].remoteHost)||null!==o.match(/^(about:blank|javascript:|file:\/\/)/)?"*":o:"*"}(n),function(){switch(e.style.overflow=!1===f[t]?.scrolling?"hidden":"auto",f[t]?.scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=f[t]?f[t].scrolling:"no"}}(),function(){function n(n){const i=f[t][n];1/0!==i&&0!==i&&(e.style[n]=x(i)?`${i}px`:i)}function i(e){if(x(`min${e}`)&&x(`max${e}`)&&f[t][`min${e}`]>f[t][`max${e}`])throw new Error(`Value for min${e} can not be greater than max${e}`)}i("Height"),i("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),function(){const{bodyMargin:e}=f[t];"number"!=typeof e&&"0"!==e||(f[t].bodyMargin=`${e}px`)}(),function(n){const{id:i}=e;l(e,"load",(function(){R("iFrame.onload",n,i,!0),function(){const n=f[t]?.firstRun,i=f[t]?.heightCalculationMethod in c;!n&&i&&$({iframe:e,height:0,width:0,type:"init"})}()})),R("init",n,i,!0)}(I(t)),f[t]&&(f[t].iframe.iFrameResizer={close:b.bind(null,f[t].iframe),removeListeners:w.bind(null,f[t].iframe),resize:R.bind(null,"Window resize","resize",t),moveToAnchor(e){R("Move to anchor",`moveToAnchor:${e}`,t)},sendMessage(e){R("Send Message",`message:${e=JSON.stringify(e)}`,t)}}))}function W(){!1===document.hidden&&function(e,n){const i=e=>f[e]?.autoResize&&!f[e]?.firstRun;Object.keys(f).forEach((function(t){i(t)&&R(e,n,t)}))}("Tab Visible","resize")}let F=!1;switch(!0){case void 0===window.jQuery:o("","Unable to bind to jQuery, it is not available.");break;case!window.jQuery.fn:o("","Unable to bind to jQuery, it is not fully loaded.");break;case window.jQuery.fn.iFrameResize:o("","iFrameResize is already assigned to jQuery.fn.");break;default:window.jQuery.fn.iframeResize=function(e){return F||(l(window,"message",g),l(document,"visibilitychange",W),window.iFrameListener=e=>g({data:e,sameDomain:!0}),F=!0),this.filter("iframe").each((e=>n=>M(n,e))(e)).end()},window.jQuery.fn.iFrameResize=function(e){return o("","Deprecated:  Use the iframeResize method instead of iFrameResize"),this.iframeResize(e)}}}));