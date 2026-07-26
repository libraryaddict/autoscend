var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// data:react_css
var require_react_css = __commonJS({
  "data:react_css"(exports, module2) {
    module2.exports = "body{margin:0;background:#f4f4f4;color:#222}#relayContainer{margin:0 auto;padding:0 1rem 2rem;max-width:1500px;font-family:Arial,Helvetica,sans-serif}#notificationsContainer{pointer-events:none;position:fixed;top:5%;left:70%;transform:translate(-50%);z-index:999}input{outline:none}td{padding:.5rem}.topBar{display:flex;align-items:center;gap:6px;padding:10px 14px;background-color:#000}.tabEntry a{display:block;color:#fff;text-align:center;padding:6px 14px;text-decoration:none;border-radius:10px;font-weight:600}.tabEntry a:hover{background-color:#111}.tabEntry a[aria-current=page]{background-color:#00529b}.tabEntry a:hover[aria-current=page]{background-color:#002c53}.notification{border:3px solid #00529b;background-color:#bde5f8;width:fit-content;margin:0 auto;border-radius:40px;color:#00529b;padding:7px 60px;animation:fadeOut 2s 5s forwards;cursor:default;pointer-events:auto}@keyframes fadeOut{0%{opacity:1}99%{height:100%}to{opacity:0;height:0}}.searchInput{border:1px solid #ccc;background-color:#fff;padding:6px 12px;min-width:260px;color:#222}.searchInput::placeholder{color:#666}.searchInput:focus,input.stringcontainer:focus{border-color:#00529b}.settingsSearchBar{display:flex;align-items:center;flex-wrap:wrap;gap:12px}.searchCount{color:#666;font-size:small}.topRow{display:flex;align-items:center;flex-wrap:wrap;gap:12px;padding:10px 0;margin-bottom:15px}.topRowSide{flex:1 1 0;min-width:0}.topRowSide[aria-hidden=true]{visibility:hidden}.topRowCenter{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;flex:0 1 auto}.topRowCenter input.interrupt{margin:0;flex:0 0 auto}@media screen and (max-width:600px){.topRow{flex-direction:column;align-items:stretch}.topRowSide[aria-hidden=true]{display:none}.settingsSearchBar{justify-content:center}.searchInput{flex:1 1 auto;min-width:0}}.settingsGroup{border:1px solid #ccc;background-color:#fff;margin:12px 0}.groupHeader,.trackingCardHeader{display:flex;align-items:center;width:100%;background-color:#000;border:none;color:#fff;font-weight:700;font-size:1rem;text-align:left;cursor:pointer}.groupHeader:hover,.trackingCardHeader:hover{background-color:#111}.groupHeader{gap:10px;padding:10px 16px}.chevron{display:inline-block;color:#ccc}.chevron.open{transform:rotate(90deg)}.groupCount{margin-left:auto;background-color:#ffffff26;color:#fff;padding:2px 10px;font-size:small;font-weight:600}.groupBody{border:1px solid #ccc;background-color:#fff;margin:-12px 0 12px}.groupDescription{margin:0;text-align:center;padding:0 16px 8px;font-size:.88rem}.settingsSubgroups{display:flex;flex-wrap:wrap;align-items:flex-start;gap:8px;padding:0 16px 8px}.settingsSubgroups .settingsGroup{flex:0 0 auto;width:fit-content;max-width:100%;margin:0}.settingsSubgroups .groupBody{flex-basis:100%;width:auto;min-width:0;margin:4px 0 0}.relayTable{width:100%;border-collapse:collapse}.userPreference td{border-top:1px solid #ccc}.userPreference td:first-child{width:20%}.userPreference td:nth-child(2){width:20%}.userPreference:hover{background-color:#00000008}.userPreference td:last-child{font-size:.92rem}.setting{position:relative;overflow-wrap:anywhere}.setting .settingNameHover{visibility:hidden;background-color:#f4f4f4;border:1px solid #ccc;text-align:center;border-radius:6px;padding:5px;margin-left:15px;position:absolute;z-index:1000}.setting:hover .settingNameHover{visibility:visible}.hoverBox{position:relative;white-space:nowrap}.settingInput .settingDefaultHover{visibility:hidden;color:#666;position:absolute;z-index:1;left:50%;transform:translate(-50%)}.settingInput:hover .settingDefaultHover{visibility:visible}.invalid-setting input,.invalid-setting select,.invalid-setting .toggle-track{background:pink!important;border-color:#8b0000!important}.invalid-reason{text-align:center}.invalid-reason small{padding:0 5px;color:red}input.stringcontainer{border:1px solid #ccc;background-color:#fff;color:#222;height:26px;margin:auto;display:block;padding-left:5px;width:min(260px,95%)}.dropdowncontainer{border:1px solid #ccc;background-color:#fff;padding:7px 14px;color:#222}.floatingButton{position:fixed;top:16px;right:16px;z-index:500;background-color:#00529b;color:#fff;border:1px solid transparent;border-radius:10px;font-size:medium;padding:8px 20px;cursor:pointer}.floatingButton:hover{background-color:#002c53}input.interrupt{display:block;width:max-content;margin:10px auto 25px;background-color:#f1948a;border:1px solid;font-size:x-large;padding:8px 25px;cursor:pointer}input.interrupt:hover{background-color:#f5867a}input.interrupt:active{background-color:#f77163}input.interrupt.interrupt-primary{margin:10px auto;background-color:#fff;border-color:#00529b;color:#00529b;font-size:large}input.interrupt.interrupt-primary:hover{background-color:#f4f4f4}input.interrupt+div{padding-top:5px}.toggle-track{background:#fff;border:1px solid #ccc;border-radius:100px;cursor:pointer;display:flex;height:30px;margin-left:5%;position:relative;width:60px}.toggle-indicator{align-items:center;background:#000;border-radius:24px;bottom:2px;display:flex;height:24px;justify-content:center;left:2px;position:absolute;transition:all .4s;width:24px}.checkMark{fill:#fff;height:20px;width:20px;opacity:0;transition:opacity .4s ease-in-out}input[value=true]+.toggle-track{background:#e3edf6;border-color:#00529b}input[value=true]+.toggle-track .toggle-indicator{background:#00529b;transform:translate(30px)}input[value=true]+.toggle-track .checkMark{opacity:1}.settingTag{display:flex;flex-wrap:wrap;overflow:hidden;margin:5px}.settingTag input{background:transparent;border:none;color:#222}.settingTagClose{cursor:pointer;position:absolute;right:4px;top:0;color:#666;line-height:1}.settingTagClose:hover{color:#222}.settingTagSingle{display:inline-flex;border:1.5px solid #764abc;padding:2px 5px 0;border-radius:5px;white-space:nowrap;color:#764abc;margin:0 5px 5px 0;cursor:grab;position:relative}.settingTagSingleCloseVisible{padding-right:20px}.dropdownMenu{position:absolute;transform:translateY(1.5em);border:1px solid #666666;overflow-y:auto;overflow-x:clip;overflow-wrap:break-word;max-height:250px;background-color:#fff;z-index:99;user-select:none}.dropdownItem{padding:3px 3px 3px .2em;cursor:pointer}.dropdownMenu>div+div{border-top:1px solid #ccc}.dropdownItem:hover{background-color:#9fc3f870}.hintTagDrop{width:40px;min-height:100%;height:20px;background-image:linear-gradient(rgb(162,162,162),transparent);border-radius:5px;padding-left:5px;margin-right:5px;margin-bottom:2px}.hintTagDropOriginal{background-image:linear-gradient(rgb(176,94,168),transparent)}.tagContainer{display:flex;flex-wrap:wrap;overflow:hidden;height:2em;max-height:2em}.draggedItem{opacity:.4}.hidden{display:none}.rearrangedTag{animation:fadeIn 1s}@keyframes fadeIn{0%{opacity:.2}to{opacity:1}}.trackingControls{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:15px;padding:12px 0}.trackingDayFilter{display:flex;flex-wrap:wrap;gap:5px;margin-right:auto}.trackingDayFilter button{border:1px solid #ccc;background-color:#fff;color:#222;padding:6px 14px;cursor:pointer}.trackingDayFilter button:hover{background-color:#f4f4f4}.trackingDayFilter button.active{background-color:#00529b;border-color:#00529b;color:#fff}.trackingSearch{margin-left:auto}.trackingGrid{display:flex;flex-wrap:wrap;gap:12px;align-items:start}.trackingCard{border:1px solid #ccc;background-color:#fff;overflow:hidden;flex:1 1 max-content;min-width:340px}.trackingCardHeader{gap:8px;padding:8px 12px}.trackingCardHeader img{width:20px;height:20px}.trackingCardTitle{flex-grow:1}.trackingCardTotal{background-color:#00529b;color:#fff;padding:1px 10px;font-size:small}.trackingCardBody{display:none}.trackingCardBody.open{display:block}.trackingTable{width:100%;border-collapse:collapse}.trackingTable tr.trackingTableDay td{background-color:#f4f4f4;font-weight:700}.trackingRowEven td{background-color:#00000008}.trackingDay{padding:10px 12px;border-bottom:1px solid #ccc}.trackingDay:nth-child(2n){background-color:#00000008}.trackingDay:last-child{border-bottom:none}.trackingDayLabel{font-size:small;font-weight:700;color:#00529b;margin-bottom:5px}.trackingChips{display:flex;flex-wrap:wrap;gap:5px}.trackingChip{border:1px solid #ccc;background-color:#f4f4f4;padding:2px 8px;font-size:small}.trackingChipCount{margin-left:6px;color:#00529b}.trackingText{font-size:small;overflow-wrap:anywhere}.trackingEmpty{padding:30px;color:#666}.infoGrid{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:20px 0}.infoTile{border:1px solid #ccc;background-color:#fff;padding:10px 20px;min-width:120px}.infoTileLabel{font-size:small;font-weight:700;color:#666}.infoTileValue{font-size:x-large;font-weight:700;overflow-wrap:anywhere}table.locationsTable{margin-left:auto;margin-right:auto;border-collapse:collapse}table.locationsTable tr:nth-child(2n){background-color:#00000008}.trackingTable th,table.locationsTable th{background-color:#000;color:#fff;padding:6px 16px;border:1px solid #000000}.trackingTable td,table.locationsTable td{border:1px solid #ccc;padding:4px 16px}\n";
  }
});

// data:react_script
var require_react_script = __commonJS({
  "data:react_script"(exports, module2) {
    module2.exports = '(()=>{var _v=Object.create;var fs=Object.defineProperty;var Nv=Object.getOwnPropertyDescriptor;var zv=Object.getOwnPropertyNames;var xv=Object.getPrototypeOf,Lv=Object.prototype.hasOwnProperty;var Rt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}};var Uv=(e,t,a,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of zv(t))!Lv.call(e,n)&&n!==a&&fs(e,n,{get:()=>t[n],enumerable:!(l=Nv(t,n))||l.enumerable});return e};var A=(e,t,a)=>(a=e!=null?_v(xv(e)):{},Uv(t||!e||!e.__esModule?fs(a,"default",{value:e,enumerable:!0}):a,e));var Es=Rt(ne=>{"use strict";function Wi(e,t){var a=e.length;e.push(t);e:for(;0<a;){var l=a-1>>>1,n=e[l];if(0<tr(n,t))e[l]=t,e[a]=n,a=l;else break e}}function Et(e){return e.length===0?null:e[0]}function lr(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var l=0,n=e.length,r=n>>>1;l<r;){var i=2*(l+1)-1,u=e[i],o=i+1,c=e[o];if(0>tr(u,a))o<n&&0>tr(c,u)?(e[l]=c,e[o]=a,l=o):(e[l]=u,e[i]=a,l=i);else if(o<n&&0>tr(c,a))e[l]=c,e[o]=a,l=o;else break e}}return t}function tr(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}ne.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(ds=performance,ne.unstable_now=function(){return ds.now()}):(Fi=Date,hs=Fi.now(),ne.unstable_now=function(){return Fi.now()-hs});var ds,Fi,hs,_t=[],Wt=[],Hv=1,at=null,Me=3,Pi=!1,Kl=!1,$l=!1,Ii=!1,vs=typeof setTimeout=="function"?setTimeout:null,ps=typeof clearTimeout=="function"?clearTimeout:null,ms=typeof setImmediate<"u"?setImmediate:null;function ar(e){for(var t=Et(Wt);t!==null;){if(t.callback===null)lr(Wt);else if(t.startTime<=e)lr(Wt),t.sortIndex=t.expirationTime,Wi(_t,t);else break;t=Et(Wt)}}function eu(e){if($l=!1,ar(e),!Kl)if(Et(_t)!==null)Kl=!0,Wa||(Wa=!0,$a());else{var t=Et(Wt);t!==null&&tu(eu,t.startTime-e)}}var Wa=!1,Wl=-1,gs=5,Ss=-1;function Rs(){return Ii?!0:!(ne.unstable_now()-Ss<gs)}function Ki(){if(Ii=!1,Wa){var e=ne.unstable_now();Ss=e;var t=!0;try{e:{Kl=!1,$l&&($l=!1,ps(Wl),Wl=-1),Pi=!0;var a=Me;try{t:{for(ar(e),at=Et(_t);at!==null&&!(at.expirationTime>e&&Rs());){var l=at.callback;if(typeof l=="function"){at.callback=null,Me=at.priorityLevel;var n=l(at.expirationTime<=e);if(e=ne.unstable_now(),typeof n=="function"){at.callback=n,ar(e),t=!0;break t}at===Et(_t)&&lr(_t),ar(e)}else lr(_t);at=Et(_t)}if(at!==null)t=!0;else{var r=Et(Wt);r!==null&&tu(eu,r.startTime-e),t=!1}}break e}finally{at=null,Me=a,Pi=!1}t=void 0}}finally{t?$a():Wa=!1}}}var $a;typeof ms=="function"?$a=function(){ms(Ki)}:typeof MessageChannel<"u"?($i=new MessageChannel,ys=$i.port2,$i.port1.onmessage=Ki,$a=function(){ys.postMessage(null)}):$a=function(){vs(Ki,0)};var $i,ys;function tu(e,t){Wl=vs(function(){e(ne.unstable_now())},t)}ne.unstable_IdlePriority=5;ne.unstable_ImmediatePriority=1;ne.unstable_LowPriority=4;ne.unstable_NormalPriority=3;ne.unstable_Profiling=null;ne.unstable_UserBlockingPriority=2;ne.unstable_cancelCallback=function(e){e.callback=null};ne.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gs=0<e?Math.floor(1e3/e):5};ne.unstable_getCurrentPriorityLevel=function(){return Me};ne.unstable_next=function(e){switch(Me){case 1:case 2:case 3:var t=3;break;default:t=Me}var a=Me;Me=t;try{return e()}finally{Me=a}};ne.unstable_requestPaint=function(){Ii=!0};ne.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Me;Me=e;try{return t()}finally{Me=a}};ne.unstable_scheduleCallback=function(e,t,a){var l=ne.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?l+a:l):a=l,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,e={id:Hv++,callback:t,priorityLevel:e,startTime:a,expirationTime:n,sortIndex:-1},a>l?(e.sortIndex=a,Wi(Wt,e),Et(_t)===null&&e===Et(Wt)&&($l?(ps(Wl),Wl=-1):$l=!0,tu(eu,a-l))):(e.sortIndex=n,Wi(_t,e),Kl||Pi||(Kl=!0,Wa||(Wa=!0,$a()))),e};ne.unstable_shouldYield=Rs;ne.unstable_wrapCallback=function(e){var t=Me;return function(){var a=Me;Me=t;try{return e.apply(this,arguments)}finally{Me=a}}}});var Ts=Rt((_R,bs)=>{"use strict";bs.exports=Es()});var Ls=Rt(x=>{"use strict";var nu=Symbol.for("react.transitional.element"),Bv=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Gv=Symbol.for("react.consumer"),Xv=Symbol.for("react.context"),qv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Zv=Symbol.for("react.memo"),Ms=Symbol.for("react.lazy"),kv=Symbol.for("react.activity"),ws=Symbol.iterator;function Jv(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var Os={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_s=Object.assign,Ns={};function Ia(e,t,a){this.props=e,this.context=t,this.refs=Ns,this.updater=a||Os}Ia.prototype.isReactComponent={};Ia.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ia.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zs(){}zs.prototype=Ia.prototype;function ru(e,t,a){this.props=e,this.context=t,this.refs=Ns,this.updater=a||Os}var iu=ru.prototype=new zs;iu.constructor=ru;_s(iu,Ia.prototype);iu.isPureReactComponent=!0;var Cs=Array.isArray;function lu(){}var ee={H:null,A:null,T:null,S:null},xs=Object.prototype.hasOwnProperty;function uu(e,t,a){var l=a.ref;return{$$typeof:nu,type:e,key:t,ref:l!==void 0?l:null,props:a}}function Fv(e,t){return uu(e.type,t,e.props)}function ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===nu}function Kv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Ds=/\\/+/g;function au(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kv(""+e.key):t.toString(36)}function $v(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(lu,lu):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Pa(e,t,a,l,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case nu:case Bv:i=!0;break;case Ms:return i=e._init,Pa(i(e._payload),t,a,l,n)}}if(i)return n=n(e),i=l===""?"."+au(e,0):l,Cs(n)?(a="",i!=null&&(a=i.replace(Ds,"$&/")+"/"),Pa(n,t,a,"",function(c){return c})):n!=null&&(ou(n)&&(n=Fv(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Ds,"$&/")+"/")+i)),t.push(n)),1;i=0;var u=l===""?".":l+":";if(Cs(e))for(var o=0;o<e.length;o++)l=e[o],r=u+au(l,o),i+=Pa(l,t,a,r,n);else if(o=Jv(e),typeof o=="function")for(e=o.call(e),o=0;!(l=e.next()).done;)l=l.value,r=u+au(l,o++),i+=Pa(l,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return Pa($v(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function nr(e,t,a){if(e==null)return e;var l=[],n=0;return Pa(e,l,"","",function(r){return t.call(a,r,n++)}),l}function Wv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var As=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pv={map:nr,forEach:function(e,t,a){nr(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};x.Activity=kv;x.Children=Pv;x.Component=Ia;x.Fragment=jv;x.Profiler=Vv;x.PureComponent=ru;x.StrictMode=Yv;x.Suspense=Qv;x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee;x.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ee.H.useMemoCache(e)}};x.cache=function(e){return function(){return e.apply(null,arguments)}};x.cacheSignal=function(){return null};x.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=_s({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!xs.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(l[r]=t[r]);var r=arguments.length-2;if(r===1)l.children=a;else if(1<r){for(var i=Array(r),u=0;u<r;u++)i[u]=arguments[u+2];l.children=i}return uu(e.type,n,l)};x.createContext=function(e){return e={$$typeof:Xv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Gv,_context:e},e};x.createElement=function(e,t,a){var l,n={},r=null;if(t!=null)for(l in t.key!==void 0&&(r=""+t.key),t)xs.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var u=Array(i),o=0;o<i;o++)u[o]=arguments[o+2];n.children=u}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)n[l]===void 0&&(n[l]=i[l]);return uu(e,r,n)};x.createRef=function(){return{current:null}};x.forwardRef=function(e){return{$$typeof:qv,render:e}};x.isValidElement=ou;x.lazy=function(e){return{$$typeof:Ms,_payload:{_status:-1,_result:e},_init:Wv}};x.memo=function(e,t){return{$$typeof:Zv,type:e,compare:t===void 0?null:t}};x.startTransition=function(e){var t=ee.T,a={};ee.T=a;try{var l=e(),n=ee.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(lu,As)}catch(r){As(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),ee.T=t}};x.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()};x.use=function(e){return ee.H.use(e)};x.useActionState=function(e,t,a){return ee.H.useActionState(e,t,a)};x.useCallback=function(e,t){return ee.H.useCallback(e,t)};x.useContext=function(e){return ee.H.useContext(e)};x.useDebugValue=function(){};x.useDeferredValue=function(e,t){return ee.H.useDeferredValue(e,t)};x.useEffect=function(e,t){return ee.H.useEffect(e,t)};x.useEffectEvent=function(e){return ee.H.useEffectEvent(e)};x.useId=function(){return ee.H.useId()};x.useImperativeHandle=function(e,t,a){return ee.H.useImperativeHandle(e,t,a)};x.useInsertionEffect=function(e,t){return ee.H.useInsertionEffect(e,t)};x.useLayoutEffect=function(e,t){return ee.H.useLayoutEffect(e,t)};x.useMemo=function(e,t){return ee.H.useMemo(e,t)};x.useOptimistic=function(e,t){return ee.H.useOptimistic(e,t)};x.useReducer=function(e,t,a){return ee.H.useReducer(e,t,a)};x.useRef=function(e){return ee.H.useRef(e)};x.useState=function(e){return ee.H.useState(e)};x.useSyncExternalStore=function(e,t,a){return ee.H.useSyncExternalStore(e,t,a)};x.useTransition=function(){return ee.H.useTransition()};x.version="19.2.7"});var se=Rt((zR,Us)=>{"use strict";Us.exports=Ls()});var Bs=Rt(Ne=>{"use strict";var Iv=se();function Hs(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Pt(){}var _e={d:{f:Pt,r:function(){throw Error(Hs(522))},D:Pt,C:Pt,L:Pt,m:Pt,X:Pt,S:Pt,M:Pt},p:0,findDOMNode:null},ep=Symbol.for("react.portal");function tp(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ep,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Pl=Iv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function rr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e;Ne.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Hs(299));return tp(e,t,null,a)};Ne.flushSync=function(e){var t=Pl.T,a=_e.p;try{if(Pl.T=null,_e.p=2,e)return e()}finally{Pl.T=t,_e.p=a,_e.d.f()}};Ne.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,_e.d.C(e,t))};Ne.prefetchDNS=function(e){typeof e=="string"&&_e.d.D(e)};Ne.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=rr(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?_e.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:r}):a==="script"&&_e.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ne.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=rr(t.as,t.crossOrigin);_e.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&_e.d.M(e)};Ne.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=rr(a,t.crossOrigin);_e.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ne.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=rr(t.as,t.crossOrigin);_e.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else _e.d.m(e)};Ne.requestFormReset=function(e){_e.d.r(e)};Ne.unstable_batchedUpdates=function(e,t){return e(t)};Ne.useFormState=function(e,t,a){return Pl.H.useFormState(e,t,a)};Ne.useFormStatus=function(){return Pl.H.useHostTransitionStatus()};Ne.version="19.2.7"});var Vs=Rt((LR,Ys)=>{"use strict";function js(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(js)}catch(e){console.error(e)}}js(),Ys.exports=Bs()});var Im=Rt(_i=>{"use strict";var ge=Ts(),hd=se(),ap=Vs();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function md(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yn(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vd(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gs(e){if(Yn(e)!==e)throw Error(g(188))}function lp(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(g(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Gs(n),e;if(r===l)return Gs(n),t;r=r.sibling}throw Error(g(188))}if(a.return!==l.return)a=n,l=r;else{for(var i=!1,u=n.child;u;){if(u===a){i=!0,a=n,l=r;break}if(u===l){i=!0,l=n,a=r;break}u=u.sibling}if(!i){for(u=r.child;u;){if(u===a){i=!0,a=r,l=n;break}if(u===l){i=!0,l=r,a=n;break}u=u.sibling}if(!i)throw Error(g(189))}}if(a.alternate!==l)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?e:t}function pd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=pd(e),t!==null)return t;e=e.sibling}return null}var le=Object.assign,np=Symbol.for("react.element"),ir=Symbol.for("react.transitional.element"),un=Symbol.for("react.portal"),rl=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),Sd=Symbol.for("react.consumer"),jt=Symbol.for("react.context"),jo=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Zu=Symbol.for("react.activity"),rp=Symbol.for("react.memo_cache_sentinel"),Xs=Symbol.iterator;function Il(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var ip=Symbol.for("react.client.reference");function ku(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ip?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rl:return"Fragment";case Xu:return"Profiler";case gd:return"StrictMode";case qu:return"Suspense";case Qu:return"SuspenseList";case Zu:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case un:return"Portal";case jt:return e.displayName||"Context";case Sd:return(e._context.displayName||"Context")+".Consumer";case jo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return t=e.displayName||null,t!==null?t:ku(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return ku(e(t))}catch{}}return null}var on=Array.isArray,M=hd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=ap.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Na={pending:!1,data:null,method:null,action:null},Ju=[],il=-1;function Dt(e){return{current:e}}function Ee(e){0>il||(e.current=Ju[il],Ju[il]=null,il--)}function P(e,t){il++,Ju[il]=e.current,e.current=t}var Ct=Dt(null),Cn=Dt(null),sa=Dt(null),Yr=Dt(null);function Vr(e,t){switch(P(sa,t),P(Cn,e),P(Ct,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$f(t),e=Ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ee(Ct),P(Ct,e)}function wl(){Ee(Ct),Ee(Cn),Ee(sa)}function Fu(e){e.memoizedState!==null&&P(Yr,e);var t=Ct.current,a=Ym(t,e.type);t!==a&&(P(Cn,e),P(Ct,a))}function Gr(e){Cn.current===e&&(Ee(Ct),Ee(Cn)),Yr.current===e&&(Ee(Yr),Hn._currentValue=Na)}var cu,qs;function Aa(e){if(cu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\\n( *(at )?)/);cu=t&&t[1]||"",qs=-1<a.stack.indexOf(`\n    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`\n`+cu+e+qs}var su=!1;function fu(e,t){if(!e||su)return"";su=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(v){var h=v}Reflect.construct(e,[],f)}else{try{f.call()}catch(v){h=v}e.call(f.prototype)}}else{try{throw Error()}catch(v){h=v}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(v){if(v&&h&&typeof v.stack=="string")return[v.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),i=r[0],u=r[1];if(i&&u){var o=i.split(`\n`),c=u.split(`\n`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===c.length)for(l=o.length-1,n=c.length-1;1<=l&&0<=n&&o[l]!==c[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==c[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==c[n]){var s=`\n`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=n);break}}}finally{su=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Aa(a):""}function up(e,t){switch(e.tag){case 26:case 27:case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return e.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return fu(e.type,!1);case 11:return fu(e.type.render,!1);case 1:return fu(e.type,!0);case 31:return Aa("Activity");default:return""}}function Qs(e){try{var t="",a=null;do t+=up(e,a),a=e,e=e.return;while(e);return t}catch(l){return`\nError generating stack: `+l.message+`\n`+l.stack}}var Ku=Object.prototype.hasOwnProperty,Vo=ge.unstable_scheduleCallback,du=ge.unstable_cancelCallback,op=ge.unstable_shouldYield,cp=ge.unstable_requestPaint,Fe=ge.unstable_now,sp=ge.unstable_getCurrentPriorityLevel,Rd=ge.unstable_ImmediatePriority,Ed=ge.unstable_UserBlockingPriority,Xr=ge.unstable_NormalPriority,fp=ge.unstable_LowPriority,bd=ge.unstable_IdlePriority,dp=ge.log,hp=ge.unstable_setDisableYieldValue,Vn=null,Ke=null;function ra(e){if(typeof dp=="function"&&hp(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Vn,e)}catch{}}var $e=Math.clz32?Math.clz32:vp,mp=Math.log,yp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(mp(e)/yp|0)|0}var ur=256,or=262144,cr=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,r=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~r,l!==0?n=Ma(l):(i&=u,i!==0?n=Ma(i):a||(a=u&~e,a!==0&&(n=Ma(a))))):(u=l&~r,u!==0?n=Ma(u):i!==0?n=Ma(i):a||(a=l&~e,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&r)===0&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function Gn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(){var e=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),e}function hu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gp(e,t,a,l,n,r){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,c=e.hiddenUpdates;for(a=i&~a;0<a;){var s=31-$e(a),f=1<<s;u[s]=0,o[s]=-1;var h=c[s];if(h!==null)for(c[s]=null,s=0;s<h.length;s++){var v=h[s];v!==null&&(v.lane&=-536870913)}a&=~f}l!==0&&wd(e,l,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(i&~t))}function wd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-$e(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Cd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-$e(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Dd(e,t){var a=t&-t;return a=(a&42)!==0?1:Go(a),(a&(e.suspendedLanes|t))!==0?0:a}function Go(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ad(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:$m(e.type))}function Zs(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var Ta=Math.random().toString(36).slice(2),Te="__reactFiber$"+Ta,Ve="__reactProps$"+Ta,Ul="__reactContainer$"+Ta,$u="__reactEvents$"+Ta,Sp="__reactListeners$"+Ta,Rp="__reactHandles$"+Ta,ks="__reactResources$"+Ta,qn="__reactMarker$"+Ta;function qo(e){delete e[Te],delete e[Ve],delete e[$u],delete e[Sp],delete e[Rp]}function ul(e){var t=e[Te];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ul]||a[Te]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=td(e);e!==null;){if(a=e[Te])return a;e=td(e)}return t}e=a,a=e.parentNode}return null}function Hl(e){if(e=e[Te]||e[Ul]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function pl(e){var t=e[ks];return t||(t=e[ks]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[qn]=!0}var Md=new Set,Od={};function Ga(e,t){Cl(e,t),Cl(e+"Capture",t)}function Cl(e,t){for(Od[e]=t,e=0;e<t.length;e++)Md.add(t[e])}var Ep=RegExp("^[:A-Z_a-z\\\\u00C0-\\\\u00D6\\\\u00D8-\\\\u00F6\\\\u00F8-\\\\u02FF\\\\u0370-\\\\u037D\\\\u037F-\\\\u1FFF\\\\u200C-\\\\u200D\\\\u2070-\\\\u218F\\\\u2C00-\\\\u2FEF\\\\u3001-\\\\uD7FF\\\\uF900-\\\\uFDCF\\\\uFDF0-\\\\uFFFD][:A-Z_a-z\\\\u00C0-\\\\u00D6\\\\u00D8-\\\\u00F6\\\\u00F8-\\\\u02FF\\\\u0370-\\\\u037D\\\\u037F-\\\\u1FFF\\\\u200C-\\\\u200D\\\\u2070-\\\\u218F\\\\u2C00-\\\\u2FEF\\\\u3001-\\\\uD7FF\\\\uF900-\\\\uFDCF\\\\uFDF0-\\\\uFFFD\\\\-.0-9\\\\u00B7\\\\u0300-\\\\u036F\\\\u203F-\\\\u2040]*$"),Js={},Fs={};function bp(e){return Ku.call(Fs,e)?!0:Ku.call(Js,e)?!1:Ep.test(e)?Fs[e]=!0:(Js[e]=!0,!1)}function wr(e,t,a){if(bp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function sr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Nt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wu(e){if(!e._valueTracker){var t=_d(e)?"checked":"value";e._valueTracker=Tp(e,t,""+e[t])}}function Nd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=_d(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wp=/[\\n"\\\\]/g;function ut(e){return e.replace(wp,function(t){return"\\\\"+t.charCodeAt(0).toString(16)+" "})}function Pu(e,t,a,l,n,r,i,u){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+nt(t)):e.value!==""+nt(t)&&(e.value=""+nt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Iu(e,i,nt(t)):a!=null?Iu(e,i,nt(a)):l!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+nt(u):e.removeAttribute("name")}function zd(e,t,a,l,n,r,i,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Wu(e);return}a=a!=null?""+nt(a):"",t=t!=null?""+nt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Wu(e)}function Iu(e,t,a){t==="number"&&qr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+nt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function xd(e,t,a){if(t!=null&&(t=""+nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+nt(a):""}function Ld(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(g(92));if(on(l)){if(1<l.length)throw Error(g(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=nt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Wu(e)}function Dl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Cp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ks(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Cp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ud(e,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ks(e,n,l)}else for(var r in t)t.hasOwnProperty(r)&&Ks(e,r,t[r])}function Qo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ap=/^[\\u0000-\\u001F ]*j[\\r\\n\\t]*a[\\r\\n\\t]*v[\\r\\n\\t]*a[\\r\\n\\t]*s[\\r\\n\\t]*c[\\r\\n\\t]*r[\\r\\n\\t]*i[\\r\\n\\t]*p[\\r\\n\\t]*t[\\r\\n\\t]*:/i;function Cr(e){return Ap.test(""+e)?"javascript:throw new Error(\'React has blocked a javascript: URL as a security precaution.\')":e}function Yt(){}var eo=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,Sl=null;function $s(e){var t=Hl(e);if(t&&(e=t.stateNode)){var a=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll(\'input[name="\'+ut(""+t)+\'"][type="radio"]\'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ve]||null;if(!n)throw Error(g(90));Pu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Nd(l)}break e;case"textarea":xd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&gl(e,!!a.multiple,t,!1)}}}var mu=!1;function Hd(e,t,a){if(mu)return e(t,a);mu=!0;try{var l=e(t);return l}finally{if(mu=!1,(ol!==null||Sl!==null)&&(Di(),ol&&(t=ol,e=Sl,Sl=ol=null,$s(t),e)))for(t=0;t<e.length;t++)$s(e[t])}}function Dn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ve]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=!1;if(Qt)try{el={},Object.defineProperty(el,"passive",{get:function(){to=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{to=!1}var el,ia=null,ko=null,Dr=null;function Bd(){if(Dr)return Dr;var e,t=ko,a=t.length,l,n="value"in ia?ia.value:ia.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(l=1;l<=i&&t[a-l]===n[r-l];l++);return Dr=n.slice(e,1<l?1-l:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function Ws(){return!1}function Ge(e){function t(a,l,n,r,i){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?fr:Ws,this.isPropagationStopped=Ws,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=Ge(Xa),Qn=le({},Xa,{view:0,detail:0}),Mp=Ge(Qn),yu,vu,en,vi=le({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&e.type==="mousemove"?(yu=e.screenX-en.screenX,vu=e.screenY-en.screenY):vu=yu=0,en=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Ps=Ge(vi),Op=le({},vi,{dataTransfer:0}),_p=Ge(Op),Np=le({},Qn,{relatedTarget:0}),pu=Ge(Np),zp=le({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),xp=Ge(zp),Lp=le({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Up=Ge(Lp),Hp=le({},Xa,{data:0}),Is=Ge(Hp),Bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yp[e])?!!t[e]:!1}function Jo(){return Vp}var Gp=le({},Qn,{key:function(e){if(e.key){var t=Bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xp=Ge(Gp),qp=le({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=Ge(qp),Qp=le({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),Zp=Ge(Qp),kp=le({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=Ge(kp),Fp=le({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=Ge(Fp),$p=le({},Xa,{newState:0,oldState:0}),Wp=Ge($p),Pp=[9,13,27,32],Fo=Qt&&"CompositionEvent"in window,dn=null;Qt&&"documentMode"in document&&(dn=document.documentMode);var Ip=Qt&&"TextEvent"in window&&!dn,jd=Qt&&(!Fo||dn&&8<dn&&11>=dn),tf=" ",af=!1;function Yd(e,t){switch(e){case"keyup":return Pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function eg(e,t){switch(e){case"compositionend":return Vd(t);case"keypress":return t.which!==32?null:(af=!0,tf);case"textInput":return e=t.data,e===tf&&af?null:e;default:return null}}function tg(e,t){if(cl)return e==="compositionend"||!Fo&&Yd(e,t)?(e=Bd(),Dr=ko=ia=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jd&&t.locale!=="ko"?null:t.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ag[e.type]:t==="textarea"}function Gd(e,t,a,l){ol?Sl?Sl.push(l):Sl=[l]:ol=l,t=ui(t,"onChange"),0<t.length&&(a=new yi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var hn=null,An=null;function lg(e){Hm(e,0)}function pi(e){var t=cn(e);if(Nd(t))return e}function nf(e,t){if(e==="change")return t}var Xd=!1;Qt&&(Qt?(hr="oninput"in document,hr||(gu=document.createElement("div"),gu.setAttribute("oninput","return;"),hr=typeof gu.oninput=="function"),dr=hr):dr=!1,Xd=dr&&(!document.documentMode||9<document.documentMode));var dr,hr,gu;function rf(){hn&&(hn.detachEvent("onpropertychange",qd),An=hn=null)}function qd(e){if(e.propertyName==="value"&&pi(An)){var t=[];Gd(t,An,e,Zo(e)),Hd(lg,t)}}function ng(e,t,a){e==="focusin"?(rf(),hn=t,An=a,hn.attachEvent("onpropertychange",qd)):e==="focusout"&&rf()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(An)}function ig(e,t){if(e==="click")return pi(t)}function ug(e,t){if(e==="input"||e==="change")return pi(t)}function og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:og;function Mn(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ku.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function of(e,t){var a=uf(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=uf(a)}}function Qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=qr(e.document)}return t}function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cg=Qt&&"documentMode"in document&&11>=document.documentMode,sl=null,ao=null,mn=null,lo=!1;function cf(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lo||sl==null||sl!==qr(l)||(l=sl,"selectionStart"in l&&Ko(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),mn&&Mn(mn,l)||(mn=l,l=ui(ao,"onSelect"),0<l.length&&(t=new yi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=sl)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var fl={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Su={},kd={};Qt&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function qa(e){if(Su[e])return Su[e];if(!fl[e])return e;var t=fl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in kd)return Su[e]=t[a];return e}var Jd=qa("animationend"),Fd=qa("animationiteration"),Kd=qa("animationstart"),sg=qa("transitionrun"),fg=qa("transitionstart"),dg=qa("transitioncancel"),$d=qa("transitionend"),Wd=new Map,no="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");no.push("scrollEnd");function gt(e,t){Wd.set(e,t),Ga(t,[e])}var Qr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},lt=[],dl=0,$o=0;function gi(){for(var e=dl,t=$o=dl=0;t<e;){var a=lt[t];lt[t++]=null;var l=lt[t];lt[t++]=null;var n=lt[t];lt[t++]=null;var r=lt[t];if(lt[t++]=null,l!==null&&n!==null){var i=l.pending;i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n}r!==0&&Pd(a,n,r)}}function Si(e,t,a,l){lt[dl++]=e,lt[dl++]=t,lt[dl++]=a,lt[dl++]=l,$o|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wo(e,t,a,l){return Si(e,t,a,l),Zr(e)}function Qa(e,t){return Si(e,null,null,t),Zr(e)}function Pd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-$e(a),e=r.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),r):null}function Zr(e){if(50<Tn)throw Tn=0,Do=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hl={};function hg(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,a,l){return new hg(e,t,a,l)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ke(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Id(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mr(e,t,a,l,n,r){var i=0;if(l=e,typeof e=="function")Po(e)&&(i=1);else if(typeof e=="string")i=v0(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Zu:return e=ke(31,a,t,n),e.elementType=Zu,e.lanes=r,e;case rl:return za(a.children,n,r,t);case gd:i=8,n|=24;break;case Xu:return e=ke(12,a,t,n|2),e.elementType=Xu,e.lanes=r,e;case qu:return e=ke(13,a,t,n),e.elementType=qu,e.lanes=r,e;case Qu:return e=ke(19,a,t,n),e.elementType=Qu,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jt:i=10;break e;case Sd:i=9;break e;case jo:i=11;break e;case Yo:i=14;break e;case It:i=16,l=null;break e}i=29,a=Error(g(130,e===null?"null":typeof e,"")),l=null}return t=ke(i,a,t,n),t.elementType=e,t.type=l,t.lanes=r,t}function za(e,t,a,l){return e=ke(7,e,l,t),e.lanes=a,e}function Ru(e,t,a){return e=ke(6,e,null,t),e.lanes=a,e}function eh(e){var t=ke(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,a){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sf=new WeakMap;function ot(e,t){if(typeof e=="object"&&e!==null){var a=sf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Qs(t)},sf.set(e,t),t)}return{value:e,source:t,stack:Qs(t)}}var ml=[],yl=0,kr=null,On=0,rt=[],it=0,Sa=null,bt=1,Tt="";function Ht(e,t){ml[yl++]=On,ml[yl++]=kr,kr=e,On=t}function th(e,t,a){rt[it++]=bt,rt[it++]=Tt,rt[it++]=Sa,Sa=e;var l=bt;e=Tt;var n=32-$e(l)-1;l&=~(1<<n),a+=1;var r=32-$e(t)+n;if(30<r){var i=n-n%5;r=(l&(1<<i)-1).toString(32),l>>=i,n-=i,bt=1<<32-$e(t)+n|a<<n|l,Tt=r+e}else bt=1<<r|a<<n|l,Tt=e}function Io(e){e.return!==null&&(Ht(e,1),th(e,1,0))}function ec(e){for(;e===kr;)kr=ml[--yl],ml[yl]=null,On=ml[--yl],ml[yl]=null;for(;e===Sa;)Sa=rt[--it],rt[it]=null,Tt=rt[--it],rt[it]=null,bt=rt[--it],rt[it]=null}function ah(e,t){rt[it++]=bt,rt[it++]=Tt,rt[it++]=Sa,bt=t.id,Tt=t.overflow,Sa=e}var we=null,ae=null,G=!1,fa=null,ct=!1,ro=Error(g(519));function Ra(e){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _n(ot(t,e)),ro}function ff(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Te]=e,t[Ve]=l,a){case"dialog":B("cancel",t),B("close",t);break;case"iframe":case"object":case"embed":B("load",t);break;case"video":case"audio":for(a=0;a<Ln.length;a++)B(Ln[a],t);break;case"source":B("error",t);break;case"img":case"image":case"link":B("error",t),B("load",t);break;case"details":B("toggle",t);break;case"input":B("invalid",t),zd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":B("invalid",t);break;case"textarea":B("invalid",t),Ld(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||jm(t.textContent,a)?(l.popover!=null&&(B("beforetoggle",t),B("toggle",t)),l.onScroll!=null&&B("scroll",t),l.onScrollEnd!=null&&B("scrollend",t),l.onClick!=null&&(t.onclick=Yt),t=!0):t=!1,t||Ra(e,!0)}function df(e){for(we=e.return;we;)switch(we.tag){case 5:case 31:case 13:ct=!1;return;case 27:case 3:ct=!0;return;default:we=we.return}}function tl(e){if(e!==we)return!1;if(!G)return df(e),G=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||No(e.type,e.memoizedProps)),a=!a),a&&ae&&Ra(e),df(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ae=ed(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ae=ed(e)}else t===27?(t=ae,wa(e.type)?(e=Uo,Uo=null,ae=e):ae=t):ae=we?ft(e.stateNode.nextSibling):null;return!0}function Ha(){ae=we=null,G=!1}function bu(){var e=fa;return e!==null&&(je===null?je=e:je.push.apply(je,e),fa=null),e}function _n(e){fa===null?fa=[e]:fa.push(e)}var io=Dt(null),Za=null,Vt=null;function ta(e,t,a){P(io,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=io.current,Ee(io)}function uo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function oo(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var i=n.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=n;for(var o=0;o<t.length;o++)if(u.context===t[o]){r.lanes|=a,u=r.alternate,u!==null&&(u.lanes|=a),uo(r.return,a,e),l||(i=null);break e}r=u.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(g(341));i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),uo(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Bl(e,t,a,l){e=null;for(var n=t,r=!1;n!==null;){if(!r){if((n.flags&524288)!==0)r=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(g(387));if(i=i.memoizedProps,i!==null){var u=n.type;Pe(n.pendingProps.value,i.value)||(e!==null?e.push(u):e=[u])}}else if(n===Yr.current){if(i=n.alternate,i===null)throw Error(g(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Hn):e=[Hn])}n=n.return}e!==null&&oo(t,e,a,l),t.flags|=262144}function Jr(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Za=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ce(e){return lh(Za,e)}function mr(e,t){return Za===null&&Ba(e),lh(e,t)}function lh(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(g(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var mg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},yg=ge.unstable_scheduleCallback,vg=ge.unstable_NormalPriority,he={$$typeof:jt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tc(){return{controller:new mg,data:new Map,refCount:0}}function Zn(e){e.refCount--,e.refCount===0&&yg(vg,function(){e.controller.abort()})}var yn=null,co=0,Al=0,Rl=null;function pg(e,t){if(yn===null){var a=yn=[];co=0,Al=Dc(),Rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return co++,t.then(hf,hf),t}function hf(){if(--co===0&&yn!==null){Rl!==null&&(Rl.status="fulfilled");var e=yn;yn=null,Al=0,Rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gg(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var mf=M.S;M.S=function(e,t){pm=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pg(e,t),mf!==null&&mf(e,t)};var xa=Dt(null);function ac(){var e=xa.current;return e!==null?e:$.pooledCache}function Or(e,t){t===null?P(xa,xa.current):P(xa,t.pool)}function nh(){var e=ac();return e===null?null:{parent:he._currentValue,pool:e}}var jl=Error(g(460)),lc=Error(g(474)),Ri=Error(g(542)),Fr={then:function(){}};function yf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Yt,Yt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pf(e),e;default:if(typeof t.status=="string")t.then(Yt,Yt);else{if(e=$,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,pf(e),e}throw La=t,jl}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(La=a,jl):a}}var La=null;function vf(){if(La===null)throw Error(g(459));var e=La;return La=null,e}function pf(e){if(e===jl||e===Ri)throw Error(g(483))}var El=null,Nn=0;function yr(e){var t=Nn;return Nn+=1,El===null&&(El=[]),rh(El,e,t)}function tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vr(e,t){throw t.$$typeof===np?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ih(e){function t(m,d){if(e){var y=m.deletions;y===null?(m.deletions=[d],m.flags|=16):y.push(d)}}function a(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function l(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function n(m,d){return m=Gt(m,d),m.index=0,m.sibling=null,m}function r(m,d,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<d?(m.flags|=67108866,d):y):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function u(m,d,y,p){return d===null||d.tag!==6?(d=Ru(y,m.mode,p),d.return=m,d):(d=n(d,y),d.return=m,d)}function o(m,d,y,p){var b=y.type;return b===rl?s(m,d,y.props.children,p,y.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===It&&Oa(b)===d.type)?(d=n(d,y.props),tn(d,y),d.return=m,d):(d=Mr(y.type,y.key,y.props,null,m.mode,p),tn(d,y),d.return=m,d)}function c(m,d,y,p){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=Eu(y,m.mode,p),d.return=m,d):(d=n(d,y.children||[]),d.return=m,d)}function s(m,d,y,p,b){return d===null||d.tag!==7?(d=za(y,m.mode,p,b),d.return=m,d):(d=n(d,y),d.return=m,d)}function f(m,d,y){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Ru(""+d,m.mode,y),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ir:return y=Mr(d.type,d.key,d.props,null,m.mode,y),tn(y,d),y.return=m,y;case un:return d=Eu(d,m.mode,y),d.return=m,d;case It:return d=Oa(d),f(m,d,y)}if(on(d)||Il(d))return d=za(d,m.mode,y,null),d.return=m,d;if(typeof d.then=="function")return f(m,yr(d),y);if(d.$$typeof===jt)return f(m,mr(m,d),y);vr(m,d)}return null}function h(m,d,y,p){var b=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return b!==null?null:u(m,d,""+y,p);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ir:return y.key===b?o(m,d,y,p):null;case un:return y.key===b?c(m,d,y,p):null;case It:return y=Oa(y),h(m,d,y,p)}if(on(y)||Il(y))return b!==null?null:s(m,d,y,p,null);if(typeof y.then=="function")return h(m,d,yr(y),p);if(y.$$typeof===jt)return h(m,d,mr(m,y),p);vr(m,y)}return null}function v(m,d,y,p,b){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return m=m.get(y)||null,u(d,m,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:return m=m.get(p.key===null?y:p.key)||null,o(d,m,p,b);case un:return m=m.get(p.key===null?y:p.key)||null,c(d,m,p,b);case It:return p=Oa(p),v(m,d,y,p,b)}if(on(p)||Il(p))return m=m.get(y)||null,s(d,m,p,b,null);if(typeof p.then=="function")return v(m,d,y,yr(p),b);if(p.$$typeof===jt)return v(m,d,y,mr(d,p),b);vr(d,p)}return null}function S(m,d,y,p){for(var b=null,z=null,T=d,D=d=0,_=null;T!==null&&D<y.length;D++){T.index>D?(_=T,T=null):_=T.sibling;var H=h(m,T,y[D],p);if(H===null){T===null&&(T=_);break}e&&T&&H.alternate===null&&t(m,T),d=r(H,d,D),z===null?b=H:z.sibling=H,z=H,T=_}if(D===y.length)return a(m,T),G&&Ht(m,D),b;if(T===null){for(;D<y.length;D++)T=f(m,y[D],p),T!==null&&(d=r(T,d,D),z===null?b=T:z.sibling=T,z=T);return G&&Ht(m,D),b}for(T=l(T);D<y.length;D++)_=v(T,m,D,y[D],p),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?D:_.key),d=r(_,d,D),z===null?b=_:z.sibling=_,z=_);return e&&T.forEach(function(tt){return t(m,tt)}),G&&Ht(m,D),b}function E(m,d,y,p){if(y==null)throw Error(g(151));for(var b=null,z=null,T=d,D=d=0,_=null,H=y.next();T!==null&&!H.done;D++,H=y.next()){T.index>D?(_=T,T=null):_=T.sibling;var tt=h(m,T,H.value,p);if(tt===null){T===null&&(T=_);break}e&&T&&tt.alternate===null&&t(m,T),d=r(tt,d,D),z===null?b=tt:z.sibling=tt,z=tt,T=_}if(H.done)return a(m,T),G&&Ht(m,D),b;if(T===null){for(;!H.done;D++,H=y.next())H=f(m,H.value,p),H!==null&&(d=r(H,d,D),z===null?b=H:z.sibling=H,z=H);return G&&Ht(m,D),b}for(T=l(T);!H.done;D++,H=y.next())H=v(T,m,D,H.value,p),H!==null&&(e&&H.alternate!==null&&T.delete(H.key===null?D:H.key),d=r(H,d,D),z===null?b=H:z.sibling=H,z=H);return e&&T.forEach(function(Fl){return t(m,Fl)}),G&&Ht(m,D),b}function R(m,d,y,p){if(typeof y=="object"&&y!==null&&y.type===rl&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ir:e:{for(var b=y.key;d!==null;){if(d.key===b){if(b=y.type,b===rl){if(d.tag===7){a(m,d.sibling),p=n(d,y.props.children),p.return=m,m=p;break e}}else if(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===It&&Oa(b)===d.type){a(m,d.sibling),p=n(d,y.props),tn(p,y),p.return=m,m=p;break e}a(m,d);break}else t(m,d);d=d.sibling}y.type===rl?(p=za(y.props.children,m.mode,p,y.key),p.return=m,m=p):(p=Mr(y.type,y.key,y.props,null,m.mode,p),tn(p,y),p.return=m,m=p)}return i(m);case un:e:{for(b=y.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){a(m,d.sibling),p=n(d,y.children||[]),p.return=m,m=p;break e}else{a(m,d);break}else t(m,d);d=d.sibling}p=Eu(y,m.mode,p),p.return=m,m=p}return i(m);case It:return y=Oa(y),R(m,d,y,p)}if(on(y))return S(m,d,y,p);if(Il(y)){if(b=Il(y),typeof b!="function")throw Error(g(150));return y=b.call(y),E(m,d,y,p)}if(typeof y.then=="function")return R(m,d,yr(y),p);if(y.$$typeof===jt)return R(m,d,mr(m,y),p);vr(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,d!==null&&d.tag===6?(a(m,d.sibling),p=n(d,y),p.return=m,m=p):(a(m,d),p=Ru(y,m.mode,p),p.return=m,m=p),i(m)):a(m,d)}return function(m,d,y,p){try{Nn=0;var b=R(m,d,y,p);return El=null,b}catch(T){if(T===jl||T===Ri)throw T;var z=ke(29,T,null,m.mode);return z.lanes=p,z.return=m,z}}}var ja=ih(!0),uh=ih(!1),ea=!1;function nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function so(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(X&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Zr(e),Pd(e,null,a),t}return Si(e,l,t,a),Zr(e)}function vn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cd(e,a)}}function Tu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=i:r=r.next=i,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var fo=!1;function pn(){if(fo){var e=Rl;if(e!==null)throw e}}function gn(e,t,a,l){fo=!1;var n=e.updateQueue;ea=!1;var r=n.firstBaseUpdate,i=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,c=o.next;o.next=null,i===null?r=c:i.next=c,i=o;var s=e.alternate;s!==null&&(s=s.updateQueue,u=s.lastBaseUpdate,u!==i&&(u===null?s.firstBaseUpdate=c:u.next=c,s.lastBaseUpdate=o))}if(r!==null){var f=n.baseState;i=0,s=c=o=null,u=r;do{var h=u.lane&-536870913,v=h!==u.lane;if(v?(Y&h)===h:(l&h)===h){h!==0&&h===Al&&(fo=!0),s!==null&&(s=s.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var S=e,E=u;h=t;var R=a;switch(E.tag){case 1:if(S=E.payload,typeof S=="function"){f=S.call(R,f,h);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,h=typeof S=="function"?S.call(R,f,h):S,h==null)break e;f=le({},f,h);break e;case 2:ea=!0}}h=u.callback,h!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[h]:v.push(h))}else v={lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},s===null?(c=s=v,o=f):s=s.next=v,i|=h;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;v=u,u=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);s===null&&(o=f),n.baseState=o,n.firstBaseUpdate=c,n.lastBaseUpdate=s,r===null&&(n.shared.lanes=0),ba|=i,e.lanes=i,e.memoizedState=f}}function oh(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function ch(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)oh(a[e],t)}var Ml=Dt(null),Kr=Dt(0);function gf(e,t){e=Ft,P(Kr,e),P(Ml,t),Ft=e|t.baseLanes}function ho(){P(Kr,Ft),P(Ml,Ml.current)}function rc(){Ft=Kr.current,Ee(Ml),Ee(Kr)}var Ie=Dt(null),st=null;function aa(e){var t=e.alternate;P(oe,oe.current&1),P(Ie,e),st===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(st=e)}function mo(e){P(oe,oe.current),P(Ie,e),st===null&&(st=e)}function sh(e){e.tag===22?(P(oe,oe.current),P(Ie,e),st===null&&(st=e)):la(e)}function la(){P(oe,oe.current),P(Ie,Ie.current)}function Ze(e){Ee(Ie),st===e&&(st=null),Ee(oe)}var oe=Dt(0);function $r(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||xo(a)||Lo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,L=null,K=null,fe=null,Wr=!1,bl=!1,Ya=!1,Pr=0,zn=0,Tl=null,Sg=0;function ie(){throw Error(g(321))}function ic(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function uc(e,t,a,l,n,r){return Zt=r,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Gh:gc,Ya=!1,r=a(l,n),Ya=!1,bl&&(r=dh(t,a,l,n)),fh(e),r}function fh(e){M.H=xn;var t=K!==null&&K.next!==null;if(Zt=0,fe=K=L=null,Wr=!1,zn=0,Tl=null,t)throw Error(g(300));e===null||me||(e=e.dependencies,e!==null&&Jr(e)&&(me=!0))}function dh(e,t,a,l){L=e;var n=0;do{if(bl&&(Tl=null),zn=0,bl=!1,25<=n)throw Error(g(301));if(n+=1,fe=K=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}M.H=Xh,r=t(a,l)}while(bl);return r}function Rg(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?kn(t):t,e=e.useState()[0],(K!==null?K.memoizedState:null)!==e&&(L.flags|=1024),t}function oc(){var e=Pr!==0;return Pr=0,e}function cc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function sc(e){if(Wr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wr=!1}Zt=0,fe=K=L=null,bl=!1,zn=Pr=0,Tl=null}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?L.memoizedState=fe=e:fe=fe.next=e,fe}function ce(){if(K===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=fe===null?L.memoizedState:fe.next;if(t!==null)fe=t,K=e;else{if(e===null)throw L.alternate===null?Error(g(467)):Error(g(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},fe===null?L.memoizedState=fe=e:fe=fe.next=e}return fe}function Ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kn(e){var t=zn;return zn+=1,Tl===null&&(Tl=[]),e=rh(Tl,e,t),t=L,(fe===null?t.memoizedState:fe.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Gh:gc),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return kn(e);if(e.$$typeof===jt)return Ce(e)}throw Error(g(438,String(e)))}function fc(e){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=L.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ei(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=rp;return t.index++,a}function kt(e,t){return typeof t=="function"?t(e):t}function _r(e){var t=ce();return dc(t,K,e)}function dc(e,t,a){var l=e.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=a;var n=e.baseQueue,r=l.pending;if(r!==null){if(n!==null){var i=n.next;n.next=r.next,r.next=i}t.baseQueue=n=r,l.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var u=i=null,o=null,c=t,s=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(Y&f)===f:(Zt&f)===f){var h=c.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Al&&(s=!0);else if((Zt&h)===h){c=c.next,h===Al&&(s=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(u=o=f,i=r):o=o.next=f,L.lanes|=h,ba|=h;f=c.action,Ya&&a(r,f),r=c.hasEagerState?c.eagerState:a(r,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(u=o=h,i=r):o=o.next=h,L.lanes|=f,ba|=f;c=c.next}while(c!==null&&c!==t);if(o===null?i=r:o.next=u,!Pe(r,e.memoizedState)&&(me=!0,s&&(a=Rl,a!==null)))throw a;e.memoizedState=r,e.baseState=i,e.baseQueue=o,l.lastRenderedState=r}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function wu(e){var t=ce(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do r=e(r,i.action),i=i.next;while(i!==n);Pe(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function hh(e,t,a){var l=L,n=ce(),r=G;if(r){if(a===void 0)throw Error(g(407));a=a()}else a=t();var i=!Pe((K||n).memoizedState,a);if(i&&(n.memoizedState=a,me=!0),n=n.queue,hc(vh.bind(null,l,n,e),[e]),n.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(l.flags|=2048,Ol(9,{destroy:void 0},yh.bind(null,l,n,a,t),null),$===null)throw Error(g(349));r||(Zt&127)!==0||mh(l,t,a)}return a}function mh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=Ei(),L.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function yh(e,t,a,l){t.value=a,t.getSnapshot=l,ph(t)&&gh(e)}function vh(e,t,a){return a(function(){ph(t)&&gh(e)})}function ph(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function gh(e){var t=Qa(e,2);t!==null&&Ye(t,e,2)}function yo(e){var t=ze();if(typeof e=="function"){var a=e;if(e=a(),Ya){ra(!0);try{a()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},t}function Sh(e,t,a,l){return e.baseState=a,dc(e,K,typeof l=="function"?l:kt)}function Eg(e,t,a,l,n){if(wi(e))throw Error(g(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};M.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,Rh(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Rh(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var r=M.T,i={};M.T=i;try{var u=a(n,l),o=M.S;o!==null&&o(i,u),Sf(e,t,u)}catch(c){vo(e,t,c)}finally{r!==null&&i.types!==null&&(r.types=i.types),M.T=r}}else try{r=a(n,l),Sf(e,t,r)}catch(c){vo(e,t,c)}}function Sf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Rf(e,t,l)},function(l){return vo(e,t,l)}):Rf(e,t,a)}function Rf(e,t,a){t.status="fulfilled",t.value=a,Eh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Rh(e,a)))}function vo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Eh(t),t=t.next;while(t!==l)}e.action=null}function Eh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bh(e,t){return t}function Ef(e,t){if(G){var a=$.formState;if(a!==null){e:{var l=L;if(G){if(ae){t:{for(var n=ae,r=ct;n.nodeType!==8;){if(!r){n=null;break t}if(n=ft(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){ae=ft(n.nextSibling),l=n.data==="F!";break e}}Ra(l)}l=!1}l&&(t=a[0])}}return a=ze(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bh,lastRenderedState:t},a.queue=l,a=jh.bind(null,L,l),l.dispatch=a,l=yo(!1),r=pc.bind(null,L,!1,l.queue),l=ze(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Eg.bind(null,L,n,r,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function bf(e){var t=ce();return Th(t,K,e)}function Th(e,t,a){if(t=dc(e,t,bh)[0],e=_r(kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=kn(t)}catch(i){throw i===jl?Ri:i}else l=t;t=ce();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(L.flags|=2048,Ol(9,{destroy:void 0},bg.bind(null,n,a),null)),[l,r,e]}function bg(e,t){e.action=t}function Tf(e){var t=ce(),a=K;if(a!==null)return Th(t,a,e);ce(),t=t.memoizedState,a=ce();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Ol(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=L.updateQueue,t===null&&(t=Ei(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function wh(){return ce().memoizedState}function Nr(e,t,a,l){var n=ze();L.flags|=e,n.memoizedState=Ol(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ti(e,t,a,l){var n=ce();l=l===void 0?null:l;var r=n.memoizedState.inst;K!==null&&l!==null&&ic(l,K.memoizedState.deps)?n.memoizedState=Ol(t,r,a,l):(L.flags|=e,n.memoizedState=Ol(1|t,r,a,l))}function wf(e,t){Nr(8390656,8,e,t)}function hc(e,t){Ti(2048,8,e,t)}function Tg(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Ei(),L.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ch(e){var t=ce().memoizedState;return Tg({ref:t,nextImpl:e}),function(){if((X&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function Dh(e,t){return Ti(4,2,e,t)}function Ah(e,t){return Ti(4,4,e,t)}function Mh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oh(e,t,a){a=a!=null?a.concat([e]):null,Ti(4,4,Mh.bind(null,t,e),a)}function mc(){}function _h(e,t){var a=ce();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ic(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Nh(e,t){var a=ce();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ic(t,l[1]))return l[0];if(l=e(),Ya){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l}function yc(e,t,a){return a===void 0||(Zt&1073741824)!==0&&(Y&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Sm(),L.lanes|=e,ba|=e,a)}function zh(e,t,a,l){return Pe(a,t)?a:Ml.current!==null?(e=yc(e,a,l),Pe(e,t)||(me=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(Y&261930)===0?(me=!0,e.memoizedState=a):(e=Sm(),L.lanes|=e,ba|=e,t)}function xh(e,t,a,l,n){var r=q.p;q.p=r!==0&&8>r?r:8;var i=M.T,u={};M.T=u,pc(e,!1,t,a);try{var o=n(),c=M.S;if(c!==null&&c(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var s=gg(o,l);Sn(e,t,s,We(e))}else Sn(e,t,l,We(e))}catch(f){Sn(e,t,{then:function(){},status:"rejected",reason:f},We())}finally{q.p=r,i!==null&&u.types!==null&&(i.types=u.types),M.T=i}}function wg(){}function po(e,t,a,l){if(e.tag!==5)throw Error(g(476));var n=Lh(e).queue;xh(e,n,t,Na,a===null?wg:function(){return Uh(e),a(l)})}function Lh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Na,baseState:Na,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:Na},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Uh(e){var t=Lh(e);t.next===null&&(t=e.alternate.memoizedState),Sn(e,t.next.queue,{},We())}function vc(){return Ce(Hn)}function Hh(){return ce().memoizedState}function Bh(){return ce().memoizedState}function Cg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=We();e=da(a);var l=ha(t,e,a);l!==null&&(Ye(l,t,a),vn(l,t,a)),t={cache:tc()},e.payload=t;return}t=t.return}}function Dg(e,t,a){var l=We();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wi(e)?Yh(t,a):(a=Wo(e,t,a,l),a!==null&&(Ye(a,e,l),Vh(a,t,l)))}function jh(e,t,a){var l=We();Sn(e,t,a,l)}function Sn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wi(e))Yh(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,u=r(i,a);if(n.hasEagerState=!0,n.eagerState=u,Pe(u,i))return Si(e,t,n,0),$===null&&gi(),!1}catch{}if(a=Wo(e,t,n,l),a!==null)return Ye(a,e,l),Vh(a,t,l),!0}return!1}function pc(e,t,a,l){if(l={lane:2,revertLane:Dc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wi(e)){if(t)throw Error(g(479))}else t=Wo(e,a,l,2),t!==null&&Ye(t,e,2)}function wi(e){var t=e.alternate;return e===L||t!==null&&t===L}function Yh(e,t){bl=Wr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Vh(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cd(e,a)}}var xn={readContext:Ce,use:bi,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useLayoutEffect:ie,useInsertionEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useSyncExternalStore:ie,useId:ie,useHostTransitionStatus:ie,useFormState:ie,useActionState:ie,useOptimistic:ie,useMemoCache:ie,useCacheRefresh:ie};xn.useEffectEvent=ie;var Gh={readContext:Ce,use:bi,useCallback:function(e,t){return ze().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:wf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Nr(4194308,4,Mh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){Nr(4,2,e,t)},useMemo:function(e,t){var a=ze();t=t===void 0?null:t;var l=e();if(Ya){ra(!0);try{e()}finally{ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ze();if(a!==void 0){var n=a(t);if(Ya){ra(!0);try{a(t)}finally{ra(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Dg.bind(null,L,e),[l.memoizedState,e]},useRef:function(e){var t=ze();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,a=jh.bind(null,L,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:mc,useDeferredValue:function(e,t){var a=ze();return yc(a,e,t)},useTransition:function(){var e=yo(!1);return e=xh.bind(null,L,e.queue,!0,!1),ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=L,n=ze();if(G){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),$===null)throw Error(g(349));(Y&127)!==0||mh(l,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,wf(vh.bind(null,l,r,e),[e]),l.flags|=2048,Ol(9,{destroy:void 0},yh.bind(null,l,r,a,t),null),a},useId:function(){var e=ze(),t=$.identifierPrefix;if(G){var a=Tt,l=bt;a=(l&~(1<<32-$e(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Pr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Sg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:vc,useFormState:Ef,useActionState:Ef,useOptimistic:function(e){var t=ze();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=pc.bind(null,L,!0,a),a.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return ze().memoizedState=Cg.bind(null,L)},useEffectEvent:function(e){var t=ze(),a={impl:e};return t.memoizedState=a,function(){if((X&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},gc={readContext:Ce,use:bi,useCallback:_h,useContext:Ce,useEffect:hc,useImperativeHandle:Oh,useInsertionEffect:Dh,useLayoutEffect:Ah,useMemo:Nh,useReducer:_r,useRef:wh,useState:function(){return _r(kt)},useDebugValue:mc,useDeferredValue:function(e,t){var a=ce();return zh(a,K.memoizedState,e,t)},useTransition:function(){var e=_r(kt)[0],t=ce().memoizedState;return[typeof e=="boolean"?e:kn(e),t]},useSyncExternalStore:hh,useId:Hh,useHostTransitionStatus:vc,useFormState:bf,useActionState:bf,useOptimistic:function(e,t){var a=ce();return Sh(a,K,e,t)},useMemoCache:fc,useCacheRefresh:Bh};gc.useEffectEvent=Ch;var Xh={readContext:Ce,use:bi,useCallback:_h,useContext:Ce,useEffect:hc,useImperativeHandle:Oh,useInsertionEffect:Dh,useLayoutEffect:Ah,useMemo:Nh,useReducer:wu,useRef:wh,useState:function(){return wu(kt)},useDebugValue:mc,useDeferredValue:function(e,t){var a=ce();return K===null?yc(a,e,t):zh(a,K.memoizedState,e,t)},useTransition:function(){var e=wu(kt)[0],t=ce().memoizedState;return[typeof e=="boolean"?e:kn(e),t]},useSyncExternalStore:hh,useId:Hh,useHostTransitionStatus:vc,useFormState:Tf,useActionState:Tf,useOptimistic:function(e,t){var a=ce();return K!==null?Sh(a,K,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fc,useCacheRefresh:Bh};Xh.useEffectEvent=Ch;function Cu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:le({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var go={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=We(),n=da(l);n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(Ye(t,e,l),vn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=We(),n=da(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ha(e,n,l),t!==null&&(Ye(t,e,l),vn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=We(),l=da(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(Ye(t,e,a),vn(t,e,a))}};function Cf(e,t,a,l,n,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,i):t.prototype&&t.prototype.isPureReactComponent?!Mn(a,l)||!Mn(n,r):!0}function Df(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=le({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function qh(e){Qr(e)}function Qh(e){console.error(e)}function Zh(e){Qr(e)}function Ir(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Af(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function So(e,t,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){Ir(e,t)},a}function kh(e){return e=da(e),e.tag=3,e}function Jh(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=l.value;e.payload=function(){return n(r)},e.callback=function(){Af(t,a,l)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Af(t,a,l),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Ag(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Bl(t,a,n,!0),a=Ie.current,a!==null){switch(a.tag){case 31:case 13:return st===null?ni():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Hu(e,l,n)),!1;case 22:return a.flags|=65536,l===Fr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Hu(e,l,n)),!1}throw Error(g(435,a.tag))}return Hu(e,l,n),ni(),!1}if(G)return t=Ie.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==ro&&(e=Error(g(422),{cause:l}),_n(ot(e,a)))):(l!==ro&&(t=Error(g(423),{cause:l}),_n(ot(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ot(l,a),n=So(e.stateNode,l,n),Tu(e,n),ue!==4&&(ue=2)),!1;var r=Error(g(520),{cause:l});if(r=ot(r,a),bn===null?bn=[r]:bn.push(r),ue!==4&&(ue=2),t===null)return!0;l=ot(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=So(a.stateNode,l,e),Tu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=kh(n),Jh(n,e,a,l),Tu(a,n),!1}a=a.return}while(a!==null);return!1}var Sc=Error(g(461)),me=!1;function be(e,t,a,l){t.child=e===null?uh(t,null,a,l):ja(t,e.child,a,l)}function Mf(e,t,a,l,n){a=a.render;var r=t.ref;if("ref"in l){var i={};for(var u in l)u!=="ref"&&(i[u]=l[u])}else i=l;return Ba(t),l=uc(e,t,a,i,r,n),u=oc(),e!==null&&!me?(cc(e,t,n),Jt(e,t,n)):(G&&u&&Io(t),t.flags|=1,be(e,t,l,n),t.child)}function Of(e,t,a,l,n){if(e===null){var r=a.type;return typeof r=="function"&&!Po(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Fh(e,t,r,l,n)):(e=Mr(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Rc(e,n)){var i=r.memoizedProps;if(a=a.compare,a=a!==null?a:Mn,a(i,l)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=Gt(r,l),e.ref=t.ref,e.return=t,t.child=e}function Fh(e,t,a,l,n){if(e!==null){var r=e.memoizedProps;if(Mn(r,l)&&e.ref===t.ref)if(me=!1,t.pendingProps=l=r,Rc(e,n))(e.flags&131072)!==0&&(me=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return Ro(e,t,a,l,n)}function Kh(e,t,a,l){var n=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~r}else l=0,t.child=null;return _f(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Or(t,r!==null?r.cachePool:null),r!==null?gf(t,r):ho(),sh(t);else return l=t.lanes=536870912,_f(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(Or(t,r.cachePool),gf(t,r),la(t),t.memoizedState=null):(e!==null&&Or(t,null),ho(),la(t));return be(e,t,n,a),t.child}function sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _f(e,t,a,l,n){var r=ac();return r=r===null?null:{parent:he._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Or(t,null),ho(),sh(t),e!==null&&Bl(e,t,l,!0),t.childLanes=n,null}function zr(e,t){return t=ei({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nf(e,t,a){return ja(t,e.child,null,a),e=zr(t,t.pendingProps),e.flags|=2,Ze(t),t.memoizedState=null,e}function Mg(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(G){if(l.mode==="hidden")return e=zr(t,l),t.lanes=536870912,sn(null,e);if(mo(t),(e=ae)?(e=Gm(e,ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:bt,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=eh(e),a.return=t,t.child=a,we=t,ae=null)):e=null,e===null)throw Ra(t);return t.lanes=536870912,null}return zr(t,l)}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(mo(t),n)if(t.flags&256)t.flags&=-257,t=Nf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(g(558));else if(me||Bl(e,t,a,!1),n=(a&e.childLanes)!==0,me||n){if(l=$,l!==null&&(i=Dd(l,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Qa(e,i),Ye(l,e,i),Sc;ni(),t=Nf(e,t,a)}else e=r.treeContext,ae=ft(i.nextSibling),we=t,G=!0,fa=null,ct=!1,e!==null&&ah(t,e),t=zr(t,l),t.flags|=4096;return t}return e=Gt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ro(e,t,a,l,n){return Ba(t),a=uc(e,t,a,l,void 0,n),l=oc(),e!==null&&!me?(cc(e,t,n),Jt(e,t,n)):(G&&l&&Io(t),t.flags|=1,be(e,t,a,n),t.child)}function zf(e,t,a,l,n,r){return Ba(t),t.updateQueue=null,a=dh(t,l,a,n),fh(e),l=oc(),e!==null&&!me?(cc(e,t,r),Jt(e,t,r)):(G&&l&&Io(t),t.flags|=1,be(e,t,a,r),t.child)}function xf(e,t,a,l,n){if(Ba(t),t.stateNode===null){var r=hl,i=a.contextType;typeof i=="object"&&i!==null&&(r=Ce(i)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=go,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},nc(t),i=a.contextType,r.context=typeof i=="object"&&i!==null?Ce(i):hl,r.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(Cu(t,a,i,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&go.enqueueReplaceState(r,r.state,null),gn(t,l,r,n),pn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,o=Va(a,u);r.props=o;var c=r.context,s=a.contextType;i=hl,typeof s=="object"&&s!==null&&(i=Ce(s));var f=a.getDerivedStateFromProps;s=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,s||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||c!==i)&&Df(t,r,l,i),ea=!1;var h=t.memoizedState;r.state=h,gn(t,l,r,n),pn(),c=t.memoizedState,u||h!==c||ea?(typeof f=="function"&&(Cu(t,a,f,l),c=t.memoizedState),(o=ea||Cf(t,a,o,l,h,c,i))?(s||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=c),r.props=l,r.state=c,r.context=i,l=o):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,so(e,t),i=t.memoizedProps,s=Va(a,i),r.props=s,f=t.pendingProps,h=r.context,c=a.contextType,o=hl,typeof c=="object"&&c!==null&&(o=Ce(c)),u=a.getDerivedStateFromProps,(c=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==f||h!==o)&&Df(t,r,l,o),ea=!1,h=t.memoizedState,r.state=h,gn(t,l,r,n),pn();var v=t.memoizedState;i!==f||h!==v||ea||e!==null&&e.dependencies!==null&&Jr(e.dependencies)?(typeof u=="function"&&(Cu(t,a,u,l),v=t.memoizedState),(s=ea||Cf(t,a,s,l,h,v,o)||e!==null&&e.dependencies!==null&&Jr(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,v,o),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,v,o)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),r.props=l,r.state=v,r.context=o,l=s):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,xr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=ja(t,e.child,null,n),t.child=ja(t,null,a,n)):be(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Jt(e,t,n),e}function Lf(e,t,a,l){return Ha(),t.flags|=256,be(e,t,a,l),t.child}var Du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Au(e){return{baseLanes:e,cachePool:nh()}}function Mu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Je),e}function $h(e,t,a){var l=t.pendingProps,n=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(oe.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(G){if(n?aa(t):la(t),(e=ae)?(e=Gm(e,ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:bt,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=eh(e),a.return=t,t.child=a,we=t,ae=null)):e=null,e===null)throw Ra(t);return Lo(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(la(t),n=t.mode,u=ei({mode:"hidden",children:u},n),l=za(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Au(a),l.childLanes=Mu(e,i,a),t.memoizedState=Du,sn(null,l)):(aa(t),Eo(t,u))}var o=e.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(r)t.flags&256?(aa(t),t.flags&=-257,t=Ou(e,t,a)):t.memoizedState!==null?(la(t),t.child=e.child,t.flags|=128,t=null):(la(t),u=l.fallback,n=t.mode,l=ei({mode:"visible",children:l.children},n),u=za(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,ja(t,e.child,null,a),l=t.child,l.memoizedState=Au(a),l.childLanes=Mu(e,i,a),t.memoizedState=Du,t=sn(null,l));else if(aa(t),Lo(u)){if(i=u.nextSibling&&u.nextSibling.dataset,i)var c=i.dgst;i=c,l=Error(g(419)),l.stack="",l.digest=i,_n({value:l,source:null,stack:null}),t=Ou(e,t,a)}else if(me||Bl(e,t,a,!1),i=(a&e.childLanes)!==0,me||i){if(i=$,i!==null&&(l=Dd(i,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,Qa(e,l),Ye(i,e,l),Sc;xo(u)||ni(),t=Ou(e,t,a)}else xo(u)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,ae=ft(u.nextSibling),we=t,G=!0,fa=null,ct=!1,e!==null&&ah(t,e),t=Eo(t,l.children),t.flags|=4096);return t}return n?(la(t),u=l.fallback,n=t.mode,o=e.child,c=o.sibling,l=Gt(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,c!==null?u=Gt(c,u):(u=za(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,sn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Au(a):(n=u.cachePool,n!==null?(o=he._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=nh(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=Mu(e,i,a),t.memoizedState=Du,sn(e.child,l)):(aa(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function Eo(e,t){return t=ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ei(e,t){return e=ke(22,e,null,t),e.lanes=0,e}function Ou(e,t,a){return ja(t,e.child,null,a),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),uo(e.return,t,a)}function _u(e,t,a,l,n,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n,i.treeForkCount=r)}function Wh(e,t,a){var l=t.pendingProps,n=l.revealOrder,r=l.tail;l=l.children;var i=oe.current,u=(i&2)!==0;if(u?(i=i&1|2,t.flags|=128):i&=1,P(oe,i),be(e,t,l,a),l=G?On:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uf(e,a,t);else if(e.tag===19)Uf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&$r(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),_u(t,!1,n,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&$r(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}_u(t,!0,a,null,r,l);break;case"together":_u(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Jr(e)))}function Og(e,t,a){switch(t.tag){case 3:Vr(t,t.stateNode.containerInfo),ta(t,he,e.memoizedState.cache),Ha();break;case 27:case 5:Fu(t);break;case 4:Vr(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?$h(e,t,a):(aa(t),e=Jt(e,t,a),e!==null?e.sibling:null);aa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Bl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Wh(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),P(oe,oe.current),l)break;return null;case 22:return t.lanes=0,Kh(e,t,a,t.pendingProps);case 24:ta(t,he,e.memoizedState.cache)}return Jt(e,t,a)}function Ph(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)me=!0;else{if(!Rc(e,a)&&(t.flags&128)===0)return me=!1,Og(e,t,a);me=(e.flags&131072)!==0}else me=!1,G&&(t.flags&1048576)!==0&&th(t,On,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")Po(e)?(l=Va(e,l),t.tag=1,t=xf(null,t,e,l,a)):(t.tag=0,t=Ro(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===jo){t.tag=11,t=Mf(null,t,e,l,a);break e}else if(n===Yo){t.tag=14,t=Of(null,t,e,l,a);break e}}throw t=ku(e)||e,Error(g(306,t,""))}}return t;case 0:return Ro(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Va(l,t.pendingProps),xf(e,t,l,n,a);case 3:e:{if(Vr(t,t.stateNode.containerInfo),e===null)throw Error(g(387));l=t.pendingProps;var r=t.memoizedState;n=r.element,so(e,t),gn(t,l,null,a);var i=t.memoizedState;if(l=i.cache,ta(t,he,l),l!==r.cache&&oo(t,[he],a,!0),pn(),l=i.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Lf(e,t,l,a);break e}else if(l!==n){n=ot(Error(g(424)),t),_n(n),t=Lf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ae=ft(e.firstChild),we=t,G=!0,fa=null,ct=!0,a=uh(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ha(),l===n){t=Jt(e,t,a);break e}be(e,t,l,a)}t=t.child}return t;case 26:return xr(e,t),e===null?(a=ld(t.type,null,t.pendingProps,null))?t.memoizedState=a:G||(a=t.type,e=t.pendingProps,l=oi(sa.current).createElement(a),l[Te]=t,l[Ve]=e,De(l,a,e),Re(l),t.stateNode=l):t.memoizedState=ld(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fu(t),e===null&&G&&(l=t.stateNode=Xm(t.type,t.pendingProps,sa.current),we=t,ct=!0,n=ae,wa(t.type)?(Uo=n,ae=ft(l.firstChild)):ae=n),be(e,t,t.pendingProps.children,a),xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&G&&((n=l=ae)&&(l=l0(l,t.type,t.pendingProps,ct),l!==null?(t.stateNode=l,we=t,ae=ft(l.firstChild),ct=!1,n=!0):n=!1),n||Ra(t)),Fu(t),n=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,l=r.children,No(n,r)?l=null:i!==null&&No(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=uc(e,t,Rg,null,null,a),Hn._currentValue=n),xr(e,t),be(e,t,l,a),t.child;case 6:return e===null&&G&&((e=a=ae)&&(a=n0(a,t.pendingProps,ct),a!==null?(t.stateNode=a,we=t,ae=null,e=!0):e=!1),e||Ra(t)),null;case 13:return $h(e,t,a);case 4:return Vr(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ja(t,null,l,a):be(e,t,l,a),t.child;case 11:return Mf(e,t,t.type,t.pendingProps,a);case 7:return be(e,t,t.pendingProps,a),t.child;case 8:return be(e,t,t.pendingProps.children,a),t.child;case 12:return be(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),be(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ba(t),n=Ce(n),l=l(n),t.flags|=1,be(e,t,l,a),t.child;case 14:return Of(e,t,t.type,t.pendingProps,a);case 15:return Fh(e,t,t.type,t.pendingProps,a);case 19:return Wh(e,t,a);case 31:return Mg(e,t,a);case 22:return Kh(e,t,a,t.pendingProps);case 24:return Ba(t),l=Ce(he),e===null?(n=ac(),n===null&&(n=$,r=tc(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:l,cache:n},nc(t),ta(t,he,n)):((e.lanes&a)!==0&&(so(e,t),gn(t,null,null,a),pn()),n=e.memoizedState,r=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,he,l)):(l=r.cache,ta(t,he,l),l!==n.cache&&oo(t,[he],a,!0))),be(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function zt(e){e.flags|=4}function Nu(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(bm())e.flags|=8192;else throw La=Fr,lc}else e.flags&=-16777217}function Hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t))if(bm())e.flags|=8192;else throw La=Fr,lc}function pr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Td():536870912,e.lanes|=t,_l|=t)}function an(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function _g(e,t,a){var l=t.pendingProps;switch(ec(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return te(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Xt(he),wl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tl(t)?zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bu())),te(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(zt(t),r!==null?(te(t),Hf(t,r)):(te(t),Nu(t,n,null,l,a))):r?r!==e.memoizedState?(zt(t),te(t),Hf(t,r)):(te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&zt(t),te(t),Nu(t,n,e,l,a)),null;case 27:if(Gr(t),a=sa.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return te(t),null}e=Ct.current,tl(t)?ff(t,e):(e=Xm(n,l,a),t.stateNode=e,zt(t))}return te(t),null;case 5:if(Gr(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(g(166));return te(t),null}if(r=Ct.current,tl(t))ff(t,r);else{var i=oi(sa.current);switch(r){case 1:r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=i.createElement("div"),r.innerHTML="<script><\\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}r[Te]=t,r[Ve]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=r;e:switch(De(r,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&zt(t)}}return te(t),Nu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(g(166));if(e=sa.current,tl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=we,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Te]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||jm(e.nodeValue,a)),e||Ra(t,!0)}else e=oi(e).createTextNode(l),e[Te]=t,t.stateNode=e}return te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=tl(t),a!==null){if(e===null){if(!l)throw Error(g(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[Te]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;te(t),e=!1}else a=bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ze(t),t):(Ze(t),null);if((t.flags&128)!==0)throw Error(g(558))}return te(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=tl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Te]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;te(t),n=!1}else n=bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ze(t),t):(Ze(t),null)}return Ze(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),pr(t,t.updateQueue),te(t),null);case 4:return wl(),e===null&&Ac(t.stateNode.containerInfo),te(t),null;case 10:return Xt(t.type),te(t),null;case 19:if(Ee(oe),l=t.memoizedState,l===null)return te(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)an(l,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=$r(e),r!==null){for(t.flags|=128,an(l,!1),e=r.updateQueue,t.updateQueue=e,pr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Id(a,e),a=a.sibling;return P(oe,oe.current&1|2),G&&Ht(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>ai&&(t.flags|=128,n=!0,an(l,!1),t.lanes=4194304)}else{if(!n)if(e=$r(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,pr(t,e),an(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!G)return te(t),null}else 2*Fe()-l.renderingStartTime>ai&&a!==536870912&&(t.flags|=128,n=!0,an(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=oe.current,P(oe,n?a&1|2:a&1),G&&Ht(t,l.treeForkCount),e):(te(t),null);case 22:case 23:return Ze(t),rc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),a=t.updateQueue,a!==null&&pr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Ee(xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(he),te(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function Ng(e,t){switch(ec(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(he),wl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gr(t),null;case 31:if(t.memoizedState!==null){if(Ze(t),t.alternate===null)throw Error(g(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ze(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(oe),null;case 4:return wl(),null;case 10:return Xt(t.type),null;case 22:case 23:return Ze(t),rc(),e!==null&&Ee(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(he),null;case 25:return null;default:return null}}function Ih(e,t){switch(ec(t),t.tag){case 3:Xt(he),wl();break;case 26:case 27:case 5:Gr(t);break;case 4:wl();break;case 31:t.memoizedState!==null&&Ze(t);break;case 13:Ze(t);break;case 19:Ee(oe);break;case 10:Xt(t.type);break;case 22:case 23:Ze(t),rc(),e!==null&&Ee(xa);break;case 24:Xt(he)}}function Jn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var r=a.create,i=a.inst;l=r(),i.destroy=l}a=a.next}while(a!==n)}}catch(u){J(t,t.return,u)}}function Ea(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){var i=l.inst,u=i.destroy;if(u!==void 0){i.destroy=void 0,n=t;var o=a,c=u;try{c()}catch(s){J(n,o,s)}}}l=l.next}while(l!==r)}}catch(s){J(t,t.return,s)}}function em(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ch(t,a)}catch(l){J(e,e.return,l)}}}function tm(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){J(e,t,l)}}function Rn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){J(e,t,n)}}function wt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){J(e,t,n)}else a.current=null}function am(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){J(e,e.return,n)}}function zu(e,t,a){try{var l=e.stateNode;Wg(l,e.type,a,t),l[Ve]=t}catch(n){J(e,e.return,n)}}function lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Yt));else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(bo(e,t,a),e=e.sibling;e!==null;)bo(e,t,a),e=e.sibling}function ti(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ti(e,t,a),e=e.sibling;e!==null;)ti(e,t,a),e=e.sibling}function nm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);De(t,l,a),t[Te]=e,t[Ve]=a}catch(r){J(e,e.return,r)}}var Bt=!1,de=!1,Lu=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,Se=null;function zg(e,t){if(e=e.containerInfo,Oo=di,e=Zd(e),Ko(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var i=0,u=-1,o=-1,c=0,s=0,f=e,h=null;t:for(;;){for(var v;f!==a||n!==0&&f.nodeType!==3||(u=i+n),f!==r||l!==0&&f.nodeType!==3||(o=i+l),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===a&&++c===n&&(u=i),h===r&&++s===l&&(o=i),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}a=u===-1||o===-1?null:{start:u,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(_o={focusedElem:e,selectionRange:a},di=!1,Se=t;Se!==null;)if(t=Se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Se=e;else for(;Se!==null;){switch(t=Se,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var S=Va(a.type,n);e=l.getSnapshotBeforeUpdate(S,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(E){J(a,a.return,E)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)zo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,Se=e;break}Se=t.return}}function rm(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Lt(e,a),l&4&&Jn(5,a);break;case 1:if(Lt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){J(a,a.return,i)}else{var n=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){J(a,a.return,i)}}l&64&&em(a),l&512&&Rn(a,a.return);break;case 3:if(Lt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ch(e,t)}catch(i){J(a,a.return,i)}}break;case 27:t===null&&l&4&&nm(a);case 26:case 5:Lt(e,a),t===null&&l&4&&am(a),l&512&&Rn(a,a.return);break;case 12:Lt(e,a);break;case 31:Lt(e,a),l&4&&om(e,a);break;case 13:Lt(e,a),l&4&&cm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gg.bind(null,a),r0(e,a))));break;case 22:if(l=a.memoizedState!==null||Bt,!l){t=t!==null&&t.memoizedState!==null||de,n=Bt;var r=de;Bt=l,(de=t)&&!r?Ut(e,a,(a.subtreeFlags&8772)!==0):Lt(e,a),Bt=n,de=r}break;case 30:break;default:Lt(e,a)}}function im(e){var t=e.alternate;t!==null&&(e.alternate=null,im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Be=!1;function xt(e,t,a){for(a=a.child;a!==null;)um(e,t,a),a=a.sibling}function um(e,t,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Vn,a)}catch{}switch(a.tag){case 26:de||wt(a,t),xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:de||wt(a,t);var l=re,n=Be;wa(a.type)&&(re=a.stateNode,Be=!1),xt(e,t,a),wn(a.stateNode),re=l,Be=n;break;case 5:de||wt(a,t);case 6:if(l=re,n=Be,re=null,xt(e,t,a),re=l,Be=n,re!==null)if(Be)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(r){J(a,t,r)}else try{re.removeChild(a.stateNode)}catch(r){J(a,t,r)}break;case 18:re!==null&&(Be?(e=re,Pf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ll(e)):Pf(re,a.stateNode));break;case 4:l=re,n=Be,re=a.stateNode.containerInfo,Be=!0,xt(e,t,a),re=l,Be=n;break;case 0:case 11:case 14:case 15:Ea(2,a,t),de||Ea(4,a,t),xt(e,t,a);break;case 1:de||(wt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&tm(a,t,l)),xt(e,t,a);break;case 21:xt(e,t,a);break;case 22:de=(l=de)||a.memoizedState!==null,xt(e,t,a),de=l;break;default:xt(e,t,a)}}function om(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ll(e)}catch(a){J(t,t.return,a)}}}function cm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(a){J(t,t.return,a)}}function xg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bf),t;default:throw Error(g(435,e.tag))}}function gr(e,t){var a=xg(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Xg.bind(null,e,l);l.then(n,n)}})}function Ue(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],r=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 27:if(wa(u.type)){re=u.stateNode,Be=!1;break e}break;case 5:re=u.stateNode,Be=!1;break e;case 3:case 4:re=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(re===null)throw Error(g(160));um(r,i,n),re=null,Be=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}var pt=null;function sm(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ue(t,e),He(e),l&4&&(Ea(3,e,e.return),Jn(3,e),Ea(5,e,e.return));break;case 1:Ue(t,e),He(e),l&512&&(de||a===null||wt(a,a.return)),l&64&&Bt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=pt;if(Ue(t,e),He(e),l&512&&(de||a===null||wt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":r=n.getElementsByTagName("title")[0],(!r||r[qn]||r[Te]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(l),n.head.insertBefore(r,n.querySelector("head > title"))),De(r,l,a),r[Te]=e,Re(r),l=r;break e;case"link":var i=rd("link","href",n).get(l+(a.href||""));if(i){for(var u=0;u<i.length;u++)if(r=i[u],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(u,1);break t}}r=n.createElement(l),De(r,l,a),n.head.appendChild(r);break;case"meta":if(i=rd("meta","content",n).get(l+(a.content||""))){for(u=0;u<i.length;u++)if(r=i[u],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(u,1);break t}}r=n.createElement(l),De(r,l,a),n.head.appendChild(r);break;default:throw Error(g(468,l))}r[Te]=e,Re(r),l=r}e.stateNode=l}else id(n,e.type,e.stateNode);else e.stateNode=nd(n,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?id(n,e.type,e.stateNode):nd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ue(t,e),He(e),l&512&&(de||a===null||wt(a,a.return)),a!==null&&l&4&&zu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ue(t,e),He(e),l&512&&(de||a===null||wt(a,a.return)),e.flags&32){n=e.stateNode;try{Dl(n,"")}catch(S){J(e,e.return,S)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,zu(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Lu=!0);break;case 6:if(Ue(t,e),He(e),l&4){if(e.stateNode===null)throw Error(g(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(S){J(e,e.return,S)}}break;case 3:if(Hr=null,n=pt,pt=ci(t.containerInfo),Ue(t,e),pt=n,He(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ll(t.containerInfo)}catch(S){J(e,e.return,S)}Lu&&(Lu=!1,fm(e));break;case 4:l=pt,pt=ci(e.stateNode.containerInfo),Ue(t,e),He(e),pt=l;break;case 12:Ue(t,e),He(e);break;case 31:Ue(t,e),He(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gr(e,l)));break;case 13:Ue(t,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ci=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gr(e,l)));break;case 22:n=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,c=Bt,s=de;if(Bt=c||n,de=s||o,Ue(t,e),de=s,Bt=c,He(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||o||Bt||de||_a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(r=o.stateNode,n)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=o.stateNode;var f=o.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(S){J(o,o.return,S)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(S){J(o,o.return,S)}}}else if(t.tag===18){if(a===null){o=t;try{var v=o.stateNode;n?If(v,!0):If(o.stateNode,!1)}catch(S){J(o,o.return,S)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,gr(e,a))));break;case 19:Ue(t,e),He(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gr(e,l)));break;case 30:break;case 21:break;default:Ue(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(lm(l)){a=l;break}l=l.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,r=xu(e);ti(e,r,n);break;case 5:var i=a.stateNode;a.flags&32&&(Dl(i,""),a.flags&=-33);var u=xu(e);ti(e,u,i);break;case 3:case 4:var o=a.stateNode.containerInfo,c=xu(e);bo(e,c,o);break;default:throw Error(g(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Lt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rm(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ea(4,t,t.return),_a(t);break;case 1:wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&tm(t,t.return,a),_a(t);break;case 27:wn(t.stateNode);case 26:case 5:wt(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function Ut(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,r=t,i=r.flags;switch(r.tag){case 0:case 11:case 15:Ut(n,r,a),Jn(4,r);break;case 1:if(Ut(n,r,a),l=r,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(c){J(l,l.return,c)}if(l=r,n=l.updateQueue,n!==null){var u=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)oh(o[n],u)}catch(c){J(l,l.return,c)}}a&&i&64&&em(r),Rn(r,r.return);break;case 27:nm(r);case 26:case 5:Ut(n,r,a),a&&l===null&&i&4&&am(r),Rn(r,r.return);break;case 12:Ut(n,r,a);break;case 31:Ut(n,r,a),a&&i&4&&om(n,r);break;case 13:Ut(n,r,a),a&&i&4&&cm(n,r);break;case 22:r.memoizedState===null&&Ut(n,r,a),Rn(r,r.return);break;case 30:break;default:Ut(n,r,a)}t=t.sibling}}function Ec(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zn(a))}function bc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zn(e))}function vt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dm(e,t,a,l),t=t.sibling}function dm(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:vt(e,t,a,l),n&2048&&Jn(9,t);break;case 1:vt(e,t,a,l);break;case 3:vt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zn(e)));break;case 12:if(n&2048){vt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,i=r.id,u=r.onPostCommit;typeof u=="function"&&u(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){J(t,t.return,o)}}else vt(e,t,a,l);break;case 31:vt(e,t,a,l);break;case 13:vt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,i=t.alternate,t.memoizedState!==null?r._visibility&2?vt(e,t,a,l):En(e,t):r._visibility&2?vt(e,t,a,l):(r._visibility|=2,ll(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ec(i,t);break;case 24:vt(e,t,a,l),n&2048&&bc(t.alternate,t);break;default:vt(e,t,a,l)}}function ll(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,i=t,u=a,o=l,c=i.flags;switch(i.tag){case 0:case 11:case 15:ll(r,i,u,o,n),Jn(8,i);break;case 23:break;case 22:var s=i.stateNode;i.memoizedState!==null?s._visibility&2?ll(r,i,u,o,n):En(r,i):(s._visibility|=2,ll(r,i,u,o,n)),n&&c&2048&&Ec(i.alternate,i);break;case 24:ll(r,i,u,o,n),n&&c&2048&&bc(i.alternate,i);break;default:ll(r,i,u,o,n)}t=t.sibling}}function En(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:En(a,l),n&2048&&Ec(l.alternate,l);break;case 24:En(a,l),n&2048&&bc(l.alternate,l);break;default:En(a,l)}t=t.sibling}}var fn=8192;function al(e,t,a){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)hm(e,t,a),e=e.sibling}function hm(e,t,a){switch(e.tag){case 26:al(e,t,a),e.flags&fn&&e.memoizedState!==null&&p0(a,pt,e.memoizedState,e.memoizedProps);break;case 5:al(e,t,a);break;case 3:case 4:var l=pt;pt=ci(e.stateNode.containerInfo),al(e,t,a),pt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=fn,fn=16777216,al(e,t,a),fn=l):al(e,t,a));break;default:al(e,t,a)}}function mm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ln(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Se=l,vm(l,e)}mm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ym(e),e=e.sibling}function ym(e){switch(e.tag){case 0:case 11:case 15:ln(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:ln(e);break;case 12:ln(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Lr(e)):ln(e);break;default:ln(e)}}function Lr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Se=l,vm(l,e)}mm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ea(8,t,t.return),Lr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Lr(t));break;default:Lr(t)}e=e.sibling}}function vm(e,t){for(;Se!==null;){var a=Se;switch(a.tag){case 0:case 11:case 15:Ea(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Se=l;else e:for(a=e;Se!==null;){l=Se;var n=l.sibling,r=l.return;if(im(l),l===a){Se=null;break e}if(n!==null){n.return=r,Se=n;break e}Se=r}}}var Lg={getCacheForType:function(e){var t=Ce(he),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ce(he).controller.signal}},Ug=typeof WeakMap=="function"?WeakMap:Map,X=0,$=null,j=null,Y=0,k=0,Qe=null,ua=!1,Yl=!1,Tc=!1,Ft=0,ue=0,ba=0,Ua=0,wc=0,Je=0,_l=0,bn=null,je=null,To=!1,Ci=0,pm=0,ai=1/0,li=null,ma=null,pe=0,ya=null,Nl=null,qt=0,wo=0,Co=null,gm=null,Tn=0,Do=null;function We(){return(X&2)!==0&&Y!==0?Y&-Y:M.T!==null?Dc():Ad()}function Sm(){if(Je===0)if((Y&536870912)===0||G){var e=or;or<<=1,(or&3932160)===0&&(or=262144),Je=e}else Je=536870912;return e=Ie.current,e!==null&&(e.flags|=32),Je}function Ye(e,t,a){(e===$&&(k===2||k===9)||e.cancelPendingCommit!==null)&&(zl(e,0),oa(e,Y,Je,!1)),Xn(e,a),((X&2)===0||e!==$)&&(e===$&&((X&2)===0&&(Ua|=a),ue===4&&oa(e,Y,Je,!1)),At(e))}function Rm(e,t,a){if((X&6)!==0)throw Error(g(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Gn(e,t),n=l?jg(e,t):Uu(e,t,!0),r=l;do{if(n===0){Yl&&!l&&oa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Hg(a)){n=Uu(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var u=e;n=bn;var o=u.current.memoizedState.isDehydrated;if(o&&(zl(u,i).flags|=256),i=Uu(u,i,!1),i!==2){if(Tc&&!o){u.errorRecoveryDisabledLanes|=r,Ua|=r,n=4;break e}r=je,je=n,r!==null&&(je===null?je=r:je.push.apply(je,r))}n=i}if(r=!1,n!==2)continue}}if(n===1){zl(e,0),oa(e,t,0,!0);break}e:{switch(l=e,r=n,r){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:oa(l,t,Je,!ua);break e;case 2:je=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=Ci+300-Fe(),10<n)){if(oa(l,t,Je,!ua),mi(l,0,!0)!==0)break e;qt=t,l.timeoutHandle=Vm(jf.bind(null,l,a,je,li,To,t,Je,Ua,_l,ua,r,"Throttled",-0,0),n);break e}jf(l,a,je,li,To,t,Je,Ua,_l,ua,r,null,-0,0)}}break}while(!0);At(e)}function jf(e,t,a,l,n,r,i,u,o,c,s,f,h,v){if(e.timeoutHandle=-1,f=t.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yt},hm(t,r,f);var S=(r&62914560)===r?Ci-Fe():(r&4194048)===r?pm-Fe():0;if(S=g0(f,S),S!==null){qt=r,e.cancelPendingCommit=S(Vf.bind(null,e,t,r,a,l,n,i,u,o,s,f,null,h,v)),oa(e,r,i,!c);return}}Vf(e,t,r,a,l,n,i,u,o)}function Hg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],r=n.getSnapshot;n=n.value;try{if(!Pe(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,a,l){t&=~wc,t&=~Ua,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var r=31-$e(n),i=1<<r;l[r]=-1,n&=~i}a!==0&&wd(e,a,t)}function Di(){return(X&6)===0?(Fn(0,!1),!1):!0}function Cc(){if(j!==null){if(k===0)var e=j.return;else e=j,Vt=Za=null,sc(e),El=null,Nn=0,e=j;for(;e!==null;)Ih(e.alternate,e),e=e.return;j=null}}function zl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,e0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),qt=0,Cc(),$=e,j=a=Gt(e.current,null),Y=t,k=0,Qe=null,ua=!1,Yl=Gn(e,t),Tc=!1,_l=Je=wc=Ua=ba=ue=0,je=bn=null,To=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-$e(l),r=1<<n;t|=e[n],l&=~r}return Ft=t,gi(),a}function Em(e,t){L=null,M.H=xn,t===jl||t===Ri?(t=vf(),k=3):t===lc?(t=vf(),k=4):k=t===Sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qe=t,j===null&&(ue=1,Ir(e,ot(t,e.current)))}function bm(){var e=Ie.current;return e===null?!0:(Y&4194048)===Y?st===null:(Y&62914560)===Y||(Y&536870912)!==0?e===st:!1}function Tm(){var e=M.H;return M.H=xn,e===null?xn:e}function wm(){var e=M.A;return M.A=Lg,e}function ni(){ue=4,ua||(Y&4194048)!==Y&&Ie.current!==null||(Yl=!0),(ba&134217727)===0&&(Ua&134217727)===0||$===null||oa($,Y,Je,!1)}function Uu(e,t,a){var l=X;X|=2;var n=Tm(),r=wm();($!==e||Y!==t)&&(li=null,zl(e,t)),t=!1;var i=ue;e:do try{if(k!==0&&j!==null){var u=j,o=Qe;switch(k){case 8:Cc(),i=6;break e;case 3:case 2:case 9:case 6:Ie.current===null&&(t=!0);var c=k;if(k=0,Qe=null,vl(e,u,o,c),a&&Yl){i=0;break e}break;default:c=k,k=0,Qe=null,vl(e,u,o,c)}}Bg(),i=ue;break}catch(s){Em(e,s)}while(!0);return t&&e.shellSuspendCounter++,Vt=Za=null,X=l,M.H=n,M.A=r,j===null&&($=null,Y=0,gi()),i}function Bg(){for(;j!==null;)Cm(j)}function jg(e,t){var a=X;X|=2;var l=Tm(),n=wm();$!==e||Y!==t?(li=null,ai=Fe()+500,zl(e,t)):Yl=Gn(e,t);e:do try{if(k!==0&&j!==null){t=j;var r=Qe;t:switch(k){case 1:k=0,Qe=null,vl(e,t,r,1);break;case 2:case 9:if(yf(r)){k=0,Qe=null,Yf(t);break}t=function(){k!==2&&k!==9||$!==e||(k=7),At(e)},r.then(t,t);break e;case 3:k=7;break e;case 4:k=5;break e;case 7:yf(r)?(k=0,Qe=null,Yf(t)):(k=0,Qe=null,vl(e,t,r,7));break;case 5:var i=null;switch(j.tag){case 26:i=j.memoizedState;case 5:case 27:var u=j;if(i?Zm(i):u.stateNode.complete){k=0,Qe=null;var o=u.sibling;if(o!==null)j=o;else{var c=u.return;c!==null?(j=c,Ai(c)):j=null}break t}}k=0,Qe=null,vl(e,t,r,5);break;case 6:k=0,Qe=null,vl(e,t,r,6);break;case 8:Cc(),ue=6;break e;default:throw Error(g(462))}}Yg();break}catch(s){Em(e,s)}while(!0);return Vt=Za=null,M.H=l,M.A=n,X=a,j!==null?0:($=null,Y=0,gi(),ue)}function Yg(){for(;j!==null&&!op();)Cm(j)}function Cm(e){var t=Ph(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Ai(e):j=t}function Yf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=zf(a,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=zf(a,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:sc(t);default:Ih(a,t),t=j=Id(t,Ft),t=Ph(a,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Ai(e):j=t}function vl(e,t,a,l){Vt=Za=null,sc(t),El=null,Nn=0;var n=t.return;try{if(Ag(e,n,t,a,Y)){ue=1,Ir(e,ot(a,e.current)),j=null;return}}catch(r){if(n!==null)throw j=n,r;ue=1,Ir(e,ot(a,e.current)),j=null;return}t.flags&32768?(G||l===1?e=!0:Yl||(Y&536870912)!==0?e=!1:(ua=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ie.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dm(t,e)):Ai(t)}function Ai(e){var t=e;do{if((t.flags&32768)!==0){Dm(t,ua);return}e=t.return;var a=_g(t.alternate,t,Ft);if(a!==null){j=a;return}if(t=t.sibling,t!==null){j=t;return}j=t=e}while(t!==null);ue===0&&(ue=5)}function Dm(e,t){do{var a=Ng(e.alternate,e);if(a!==null){a.flags&=32767,j=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){j=e;return}j=e=a}while(e!==null);ue=6,j=null}function Vf(e,t,a,l,n,r,i,u,o){e.cancelPendingCommit=null;do Mi();while(pe!==0);if((X&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));if(r=t.lanes|t.childLanes,r|=$o,gp(e,a,r,i,u,o),e===$&&(j=$=null,Y=0),Nl=t,ya=e,qt=a,wo=r,Co=n,gm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qg(Xr,function(){return Nm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=q.p,q.p=2,i=X,X|=4;try{zg(e,t,a)}finally{X=i,q.p=n,M.T=l}}pe=1,Am(),Mm(),Om()}}function Am(){if(pe===1){pe=0;var e=ya,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=q.p;q.p=2;var n=X;X|=4;try{sm(t,e);var r=_o,i=Zd(e.containerInfo),u=r.focusedElem,o=r.selectionRange;if(i!==u&&u&&u.ownerDocument&&Qd(u.ownerDocument.documentElement,u)){if(o!==null&&Ko(u)){var c=o.start,s=o.end;if(s===void 0&&(s=c),"selectionStart"in u)u.selectionStart=c,u.selectionEnd=Math.min(s,u.value.length);else{var f=u.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var v=h.getSelection(),S=u.textContent.length,E=Math.min(o.start,S),R=o.end===void 0?E:Math.min(o.end,S);!v.extend&&E>R&&(i=R,R=E,E=i);var m=of(u,E),d=of(u,R);if(m&&d&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==d.node||v.focusOffset!==d.offset)){var y=f.createRange();y.setStart(m.node,m.offset),v.removeAllRanges(),E>R?(v.addRange(y),v.extend(d.node,d.offset)):(y.setEnd(d.node,d.offset),v.addRange(y))}}}}for(f=[],v=u;v=v.parentNode;)v.nodeType===1&&f.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<f.length;u++){var p=f[u];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}di=!!Oo,_o=Oo=null}finally{X=n,q.p=l,M.T=a}}e.current=t,pe=2}}function Mm(){if(pe===2){pe=0;var e=ya,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=q.p;q.p=2;var n=X;X|=4;try{rm(e,t.alternate,t)}finally{X=n,q.p=l,M.T=a}}pe=3}}function Om(){if(pe===4||pe===3){pe=0,cp();var e=ya,t=Nl,a=qt,l=gm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pe=5:(pe=0,Nl=ya=null,_m(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ma=null),Xo(a),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Vn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=q.p,q.p=2,M.T=null;try{for(var r=e.onRecoverableError,i=0;i<l.length;i++){var u=l[i];r(u.value,{componentStack:u.stack})}}finally{M.T=t,q.p=n}}(qt&3)!==0&&Mi(),At(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Do?Tn++:(Tn=0,Do=e):Tn=0,Fn(0,!1)}}function _m(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zn(t)))}function Mi(){return Am(),Mm(),Om(),Nm()}function Nm(){if(pe!==5)return!1;var e=ya,t=wo;wo=0;var a=Xo(qt),l=M.T,n=q.p;try{q.p=32>a?32:a,M.T=null,a=Co,Co=null;var r=ya,i=qt;if(pe=0,Nl=ya=null,qt=0,(X&6)!==0)throw Error(g(331));var u=X;if(X|=4,ym(r.current),dm(r,r.current,i,a),X=u,Fn(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Vn,r)}catch{}return!0}finally{q.p=n,M.T=l,_m(e,t)}}function Gf(e,t,a){t=ot(a,t),t=So(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Xn(e,2),At(e))}function J(e,t,a){if(e.tag===3)Gf(e,e,a);else for(;t!==null;){if(t.tag===3){Gf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){e=ot(a,e),a=kh(2),l=ha(t,a,2),l!==null&&(Jh(a,l,t,e),Xn(l,2),At(l));break}}t=t.return}}function Hu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Ug;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Tc=!0,n.add(a),e=Vg.bind(null,e,t,a),t.then(e,e))}function Vg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$===e&&(Y&a)===a&&(ue===4||ue===3&&(Y&62914560)===Y&&300>Fe()-Ci?(X&2)===0&&zl(e,0):wc|=a,_l===Y&&(_l=0)),At(e)}function zm(e,t){t===0&&(t=Td()),e=Qa(e,t),e!==null&&(Xn(e,t),At(e))}function Gg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),zm(e,a)}function Xg(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(g(314))}l!==null&&l.delete(t),zm(e,a)}function qg(e,t){return Vo(e,t)}var ri=null,nl=null,Ao=!1,ii=!1,Bu=!1,ca=0;function At(e){e!==nl&&e.next===null&&(nl===null?ri=nl=e:nl=nl.next=e),ii=!0,Ao||(Ao=!0,Zg())}function Fn(e,t){if(!Bu&&ii){Bu=!0;do for(var a=!1,l=ri;l!==null;){if(!t)if(e!==0){var n=l.pendingLanes;if(n===0)var r=0;else{var i=l.suspendedLanes,u=l.pingedLanes;r=(1<<31-$e(42|e)+1)-1,r&=n&~(i&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Xf(l,r))}else r=Y,r=mi(l,l===$?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Gn(l,r)||(a=!0,Xf(l,r));l=l.next}while(a);Bu=!1}}function Qg(){xm()}function xm(){ii=Ao=!1;var e=0;ca!==0&&Ig()&&(e=ca);for(var t=Fe(),a=null,l=ri;l!==null;){var n=l.next,r=Lm(l,t);r===0?(l.next=null,a===null?ri=n:a.next=n,n===null&&(nl=a)):(a=l,(e!==0||(r&3)!==0)&&(ii=!0)),l=n}pe!==0&&pe!==5||Fn(e,!1),ca!==0&&(ca=0)}function Lm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var i=31-$e(r),u=1<<i,o=n[i];o===-1?((u&a)===0||(u&l)!==0)&&(n[i]=pp(u,t)):o<=t&&(e.expiredLanes|=u),r&=~u}if(t=$,a=Y,a=mi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(k===2||k===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&du(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&du(l),Xo(a)){case 2:case 8:a=Ed;break;case 32:a=Xr;break;case 268435456:a=bd;break;default:a=Xr}return l=Um.bind(null,e),a=Vo(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&du(l),e.callbackPriority=2,e.callbackNode=null,2}function Um(e,t){if(pe!==0&&pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Mi()&&e.callbackNode!==a)return null;var l=Y;return l=mi(e,e===$?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rm(e,l,t),Lm(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?Um.bind(null,e):null)}function Xf(e,t){if(Mi())return null;Rm(e,t,!0)}function Zg(){t0(function(){(X&6)!==0?Vo(Rd,Qg):xm()})}function Dc(){if(ca===0){var e=Al;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),ca=e}return ca}function qf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cr(""+e)}function Qf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function kg(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var r=qf((n[Ve]||null).action),i=l.submitter;i&&(t=(t=i[Ve]||null)?qf(t.formAction):i.getAttribute("formAction"),t!==null&&(r=t,i=null));var u=new yi("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ca!==0){var o=i?Qf(n,i):new FormData(n);po(a,{pending:!0,data:o,method:n.method,action:r},null,o)}}else typeof r=="function"&&(u.preventDefault(),o=i?Qf(n,i):new FormData(n),po(a,{pending:!0,data:o,method:n.method,action:r},r,o))},currentTarget:n}]})}}for(Sr=0;Sr<no.length;Sr++)Rr=no[Sr],Zf=Rr.toLowerCase(),kf=Rr[0].toUpperCase()+Rr.slice(1),gt(Zf,"on"+kf);var Rr,Zf,kf,Sr;gt(Jd,"onAnimationEnd");gt(Fd,"onAnimationIteration");gt(Kd,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(sg,"onTransitionRun");gt(fg,"onTransitionStart");gt(dg,"onTransitionCancel");gt($d,"onTransitionEnd");Cl("onMouseEnter",["mouseout","mouseover"]);Cl("onMouseLeave",["mouseout","mouseover"]);Cl("onPointerEnter",["pointerout","pointerover"]);Cl("onPointerLeave",["pointerout","pointerover"]);Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));function Hm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var i=l.length-1;0<=i;i--){var u=l[i],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==r&&n.isPropagationStopped())break e;r=u,n.currentTarget=c;try{r(n)}catch(s){Qr(s)}n.currentTarget=null,r=o}else for(i=0;i<l.length;i++){if(u=l[i],o=u.instance,c=u.currentTarget,u=u.listener,o!==r&&n.isPropagationStopped())break e;r=u,n.currentTarget=c;try{r(n)}catch(s){Qr(s)}n.currentTarget=null,r=o}}}}function B(e,t){var a=t[$u];a===void 0&&(a=t[$u]=new Set);var l=e+"__bubble";a.has(l)||(Bm(t,e,2,!1),a.add(l))}function ju(e,t,a){var l=0;t&&(l|=4),Bm(a,e,l,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[Er]){e[Er]=!0,Md.forEach(function(a){a!=="selectionchange"&&(Jg.has(a)||ju(a,!1,e),ju(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,ju("selectionchange",!1,t))}}function Bm(e,t,a,l){switch($m(t)){case 2:var n=E0;break;case 8:n=b0;break;default:n=Nc}a=n.bind(null,t,a,e),n=void 0,!to||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Yu(e,t,a,l,n){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var u=l.stateNode.containerInfo;if(u===n)break;if(i===4)for(i=l.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;u!==null;){if(i=ul(u),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){l=r=i;continue e}u=u.parentNode}}l=l.return}Hd(function(){var c=r,s=Zo(a),f=[];e:{var h=Wd.get(e);if(h!==void 0){var v=yi,S=e;switch(e){case"keypress":if(Ar(a)===0)break e;case"keydown":case"keyup":v=Xp;break;case"focusin":S="focus",v=pu;break;case"focusout":S="blur",v=pu;break;case"beforeblur":case"afterblur":v=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Zp;break;case Jd:case Fd:case Kd:v=xp;break;case $d:v=Jp;break;case"scroll":case"scrollend":v=Mp;break;case"wheel":v=Kp;break;case"copy":case"cut":case"paste":v=Up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ef;break;case"toggle":case"beforetoggle":v=Wp}var E=(t&4)!==0,R=!E&&(e==="scroll"||e==="scrollend"),m=E?h!==null?h+"Capture":null:h;E=[];for(var d=c,y;d!==null;){var p=d;if(y=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||y===null||m===null||(p=Dn(d,m),p!=null&&E.push(Un(d,p,y))),R)break;d=d.return}0<E.length&&(h=new v(h,S,null,a,s),f.push({event:h,listeners:E}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&a!==eo&&(S=a.relatedTarget||a.fromElement)&&(ul(S)||S[Ul]))break e;if((v||h)&&(h=s.window===s?s:(h=s.ownerDocument)?h.defaultView||h.parentWindow:window,v?(S=a.relatedTarget||a.toElement,v=c,S=S?ul(S):null,S!==null&&(R=Yn(S),E=S.tag,S!==R||E!==5&&E!==27&&E!==6)&&(S=null)):(v=null,S=c),v!==S)){if(E=Ps,p="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=ef,p="onPointerLeave",m="onPointerEnter",d="pointer"),R=v==null?h:cn(v),y=S==null?h:cn(S),h=new E(p,d+"leave",v,a,s),h.target=R,h.relatedTarget=y,p=null,ul(s)===c&&(E=new E(m,d+"enter",S,a,s),E.target=y,E.relatedTarget=R,p=E),R=p,v&&S)t:{for(E=Fg,m=v,d=S,y=0,p=m;p;p=E(p))y++;p=0;for(var b=d;b;b=E(b))p++;for(;0<y-p;)m=E(m),y--;for(;0<p-y;)d=E(d),p--;for(;y--;){if(m===d||d!==null&&m===d.alternate){E=m;break t}m=E(m),d=E(d)}E=null}else E=null;v!==null&&Jf(f,h,v,E,!1),S!==null&&R!==null&&Jf(f,R,S,E,!0)}}e:{if(h=c?cn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var z=nf;else if(lf(h))if(Xd)z=ug;else{z=rg;var T=ng}else v=h.nodeName,!v||v.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Qo(c.elementType)&&(z=nf):z=ig;if(z&&(z=z(e,c))){Gd(f,z,a,s);break e}T&&T(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Iu(h,"number",h.value)}switch(T=c?cn(c):window,e){case"focusin":(lf(T)||T.contentEditable==="true")&&(sl=T,ao=c,mn=null);break;case"focusout":mn=ao=sl=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,cf(f,a,s);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":cf(f,a,s)}var D;if(Fo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else cl?Yd(e,a)&&(_="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(jd&&a.locale!=="ko"&&(cl||_!=="onCompositionStart"?_==="onCompositionEnd"&&cl&&(D=Bd()):(ia=s,ko="value"in ia?ia.value:ia.textContent,cl=!0)),T=ui(c,_),0<T.length&&(_=new Is(_,e,null,a,s),f.push({event:_,listeners:T}),D?_.data=D:(D=Vd(a),D!==null&&(_.data=D)))),(D=Ip?eg(e,a):tg(e,a))&&(_=ui(c,"onBeforeInput"),0<_.length&&(T=new Is("onBeforeInput","beforeinput",null,a,s),f.push({event:T,listeners:_}),T.data=D)),kg(f,e,c,a,s)}Hm(f,t)})}function Un(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ui(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=Dn(e,a),n!=null&&l.unshift(Un(e,n,r)),n=Dn(e,t),n!=null&&l.push(Un(e,n,r))),e.tag===3)return l;e=e.return}return[]}function Fg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,a,l,n){for(var r=t._reactName,i=[];a!==null&&a!==l;){var u=a,o=u.alternate,c=u.stateNode;if(u=u.tag,o!==null&&o===l)break;u!==5&&u!==26&&u!==27||c===null||(o=c,n?(c=Dn(a,r),c!=null&&i.unshift(Un(a,c,o))):n||(c=Dn(a,r),c!=null&&i.push(Un(a,c,o)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var Kg=/\\r\\n?/g,$g=/\\u0000|\\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(Kg,`\n`).replace($g,"")}function jm(e,t){return t=Ff(t),Ff(e)===t}function F(e,t,a,l,n,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Dl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Dl(e,""+l);break;case"className":sr(e,"class",l);break;case"tabIndex":sr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(e,a,l);break;case"style":Ud(e,l,r);break;case"data":if(t!=="object"){sr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cr(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error(\'A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\\\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().\')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&F(e,t,"name",n.name,n,null),F(e,t,"formEncType",n.formEncType,n,null),F(e,t,"formMethod",n.formMethod,n,null),F(e,t,"formTarget",n.formTarget,n,null)):(F(e,t,"encType",n.encType,n,null),F(e,t,"method",n.method,n,null),F(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Cr(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"onScroll":l!=null&&B("scroll",e);break;case"onScrollEnd":l!=null&&B("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Cr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":B("beforetoggle",e),B("toggle",e),wr(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":wr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dp.get(a)||a,wr(e,a,l))}}function Mo(e,t,a,l,n,r){switch(a){case"style":Ud(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Dl(e,l):(typeof l=="number"||typeof l=="bigint")&&Dl(e,""+l);break;case"onScroll":l!=null&&B("scroll",e);break;case"onScrollEnd":l!=null&&B("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Od.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[Ve]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):wr(e,a,l)}}}function De(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":B("error",e),B("load",e);var l=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var i=a[r];if(i!=null)switch(r){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:F(e,t,r,i,a,null)}}n&&F(e,t,"srcSet",a.srcSet,a,null),l&&F(e,t,"src",a.src,a,null);return;case"input":B("invalid",e);var u=r=i=n=null,o=null,c=null;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];if(s!=null)switch(l){case"name":n=s;break;case"type":i=s;break;case"checked":o=s;break;case"defaultChecked":c=s;break;case"value":r=s;break;case"defaultValue":u=s;break;case"children":case"dangerouslySetInnerHTML":if(s!=null)throw Error(g(137,t));break;default:F(e,t,l,s,a,null)}}zd(e,r,u,o,c,i,n,!1);return;case"select":B("invalid",e),l=i=r=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":r=u;break;case"defaultValue":i=u;break;case"multiple":l=u;default:F(e,t,n,u,a,null)}t=r,a=i,e.multiple=!!l,t!=null?gl(e,!!l,t,!1):a!=null&&gl(e,!!l,a,!0);return;case"textarea":B("invalid",e),r=n=l=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":n=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(g(91));break;default:F(e,t,i,u,a,null)}Ld(e,l,n,r);return;case"option":for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null)&&(o==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":F(e,t,o,l,a,null));return;case"dialog":B("beforetoggle",e),B("toggle",e),B("cancel",e),B("close",e);break;case"iframe":case"object":B("load",e);break;case"video":case"audio":for(l=0;l<Ln.length;l++)B(Ln[l],e);break;case"image":B("error",e),B("load",e);break;case"details":B("toggle",e);break;case"embed":case"source":case"link":B("error",e),B("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:F(e,t,c,l,a,null)}return;default:if(Qo(t)){for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!==void 0&&Mo(e,t,s,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&F(e,t,u,l,a,null))}function Wg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,i=null,u=null,o=null,c=null,s=null;for(v in a){var f=a[v];if(a.hasOwnProperty(v)&&f!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=f;default:l.hasOwnProperty(v)||F(e,t,v,null,l,f)}}for(var h in l){var v=l[h];if(f=a[h],l.hasOwnProperty(h)&&(v!=null||f!=null))switch(h){case"type":r=v;break;case"name":n=v;break;case"checked":c=v;break;case"defaultChecked":s=v;break;case"value":i=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(g(137,t));break;default:v!==f&&F(e,t,h,v,l,f)}}Pu(e,i,u,o,c,s,r,n);return;case"select":v=i=u=h=null;for(r in a)if(o=a[r],a.hasOwnProperty(r)&&o!=null)switch(r){case"value":break;case"multiple":v=o;default:l.hasOwnProperty(r)||F(e,t,r,null,l,o)}for(n in l)if(r=l[n],o=a[n],l.hasOwnProperty(n)&&(r!=null||o!=null))switch(n){case"value":h=r;break;case"defaultValue":u=r;break;case"multiple":i=r;default:r!==o&&F(e,t,n,r,l,o)}t=u,a=i,l=v,h!=null?gl(e,!!a,h,!1):!!l!=!!a&&(t!=null?gl(e,!!a,t,!0):gl(e,!!a,a?[]:"",!1));return;case"textarea":v=h=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:F(e,t,u,null,l,n)}for(i in l)if(n=l[i],r=a[i],l.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":h=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==r&&F(e,t,i,n,l,r)}xd(e,h,v);return;case"option":for(var S in a)h=a[S],a.hasOwnProperty(S)&&h!=null&&!l.hasOwnProperty(S)&&(S==="selected"?e.selected=!1:F(e,t,S,null,l,h));for(o in l)h=l[o],v=a[o],l.hasOwnProperty(o)&&h!==v&&(h!=null||v!=null)&&(o==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":F(e,t,o,h,l,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in a)h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E)&&F(e,t,E,null,l,h);for(c in l)if(h=l[c],v=a[c],l.hasOwnProperty(c)&&h!==v&&(h!=null||v!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,t));break;default:F(e,t,c,h,l,v)}return;default:if(Qo(t)){for(var R in a)h=a[R],a.hasOwnProperty(R)&&h!==void 0&&!l.hasOwnProperty(R)&&Mo(e,t,R,void 0,l,h);for(s in l)h=l[s],v=a[s],!l.hasOwnProperty(s)||h===v||h===void 0&&v===void 0||Mo(e,t,s,h,l,v);return}}for(var m in a)h=a[m],a.hasOwnProperty(m)&&h!=null&&!l.hasOwnProperty(m)&&F(e,t,m,null,l,h);for(f in l)h=l[f],v=a[f],!l.hasOwnProperty(f)||h===v||h==null&&v==null||F(e,t,f,h,l,v)}function Kf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Pg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],r=n.transferSize,i=n.initiatorType,u=n.duration;if(r&&u&&Kf(i)){for(i=0,u=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],c=o.startTime;if(c>u)break;var s=o.transferSize,f=o.initiatorType;s&&Kf(f)&&(o=o.responseEnd,i+=s*(o<u?1:(u-c)/(o-c)))}if(--l,t+=8*(r+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Oo=null,_o=null;function oi(e){return e.nodeType===9?e:e.ownerDocument}function $f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vu=null;function Ig(){var e=window.event;return e&&e.type==="popstate"?e===Vu?!1:(Vu=e,!0):(Vu=null,!1)}var Vm=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(e){return Wf.resolve(null).then(e).catch(a0)}:Vm;function a0(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Pf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ll(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")wn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wn(a);for(var r=a.firstChild;r;){var i=r.nextSibling,u=r.nodeName;r[qn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=i}}else a==="body"&&wn(e.ownerDocument.body);a=n}while(a);Ll(t)}function If(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function zo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zo(a),qo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function l0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ft(e.nextSibling),e===null)break}return null}function n0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ft(e.nextSibling),e===null))return null;return e}function Gm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ft(e.nextSibling),e===null))return null;return e}function xo(e){return e.data==="$?"||e.data==="$~"}function Lo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function r0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Uo=null;function ed(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ft(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Xm(e,t,a){switch(t=oi(a),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function wn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qo(e)}var dt=new Map,ad=new Set;function ci(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=q.d;q.d={f:i0,r:u0,D:o0,C:c0,L:s0,m:f0,X:h0,S:d0,M:m0};function i0(){var e=Kt.f(),t=Di();return e||t}function u0(e){var t=Hl(e);t!==null&&t.tag===5&&t.type==="form"?Uh(t):Kt.r(e)}var Vl=typeof document>"u"?null:document;function qm(e,t,a){var l=Vl;if(l&&typeof t=="string"&&t){var n=ut(t);n=\'link[rel="\'+e+\'"][href="\'+n+\'"]\',typeof a=="string"&&(n+=\'[crossorigin="\'+a+\'"]\'),ad.has(n)||(ad.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),De(t,"link",e),Re(t),l.head.appendChild(t)))}}function o0(e){Kt.D(e),qm("dns-prefetch",e,null)}function c0(e,t){Kt.C(e,t),qm("preconnect",e,t)}function s0(e,t,a){Kt.L(e,t,a);var l=Vl;if(l&&e&&t){var n=\'link[rel="preload"][as="\'+ut(t)+\'"]\';t==="image"&&a&&a.imageSrcSet?(n+=\'[imagesrcset="\'+ut(a.imageSrcSet)+\'"]\',typeof a.imageSizes=="string"&&(n+=\'[imagesizes="\'+ut(a.imageSizes)+\'"]\')):n+=\'[href="\'+ut(e)+\'"]\';var r=n;switch(t){case"style":r=xl(e);break;case"script":r=Gl(e)}dt.has(r)||(e=le({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),dt.set(r,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Kn(r))||t==="script"&&l.querySelector($n(r))||(t=l.createElement("link"),De(t,"link",e),Re(t),l.head.appendChild(t)))}}function f0(e,t){Kt.m(e,t);var a=Vl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n=\'link[rel="modulepreload"][as="\'+ut(l)+\'"][href="\'+ut(e)+\'"]\',r=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Gl(e)}if(!dt.has(r)&&(e=le({rel:"modulepreload",href:e},t),dt.set(r,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($n(r)))return}l=a.createElement("link"),De(l,"link",e),Re(l),a.head.appendChild(l)}}}function d0(e,t,a){Kt.S(e,t,a);var l=Vl;if(l&&e){var n=pl(l).hoistableStyles,r=xl(e);t=t||"default";var i=n.get(r);if(!i){var u={loading:0,preload:null};if(i=l.querySelector(Kn(r)))u.loading=5;else{e=le({rel:"stylesheet",href:e,"data-precedence":t},a),(a=dt.get(r))&&Mc(e,a);var o=i=l.createElement("link");Re(o),De(o,"link",e),o._p=new Promise(function(c,s){o.onload=c,o.onerror=s}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ur(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:u},n.set(r,i)}}}function h0(e,t){Kt.X(e,t);var a=Vl;if(a&&e){var l=pl(a).hoistableScripts,n=Gl(e),r=l.get(n);r||(r=a.querySelector($n(n)),r||(e=le({src:e,async:!0},t),(t=dt.get(n))&&Oc(e,t),r=a.createElement("script"),Re(r),De(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function m0(e,t){Kt.M(e,t);var a=Vl;if(a&&e){var l=pl(a).hoistableScripts,n=Gl(e),r=l.get(n);r||(r=a.querySelector($n(n)),r||(e=le({src:e,async:!0,type:"module"},t),(t=dt.get(n))&&Oc(e,t),r=a.createElement("script"),Re(r),De(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function ld(e,t,a,l){var n=(n=sa.current)?ci(n):null;if(!n)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xl(a.href),a=pl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xl(a.href);var r=pl(n).hoistableStyles,i=r.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,i),(r=n.querySelector(Kn(e)))&&!r._p&&(i.instance=r,i.state.loading=5),dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},dt.set(e,a),r||y0(n,e,a,i.state))),t&&l===null)throw Error(g(528,""));return i}if(t&&l!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gl(a),a=pl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function xl(e){return\'href="\'+ut(e)+\'"\'}function Kn(e){return\'link[rel="stylesheet"][\'+e+"]"}function Qm(e){return le({},e,{"data-precedence":e.precedence,precedence:null})}function y0(e,t,a,l){e.querySelector(\'link[rel="preload"][as="style"][\'+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),De(t,"link",a),Re(t),e.head.appendChild(t))}function Gl(e){return\'[src="\'+ut(e)+\'"]\'}function $n(e){return"script[async]"+e}function nd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector(\'style[data-href~="\'+ut(a.href)+\'"]\');if(l)return t.instance=l,Re(l),l;var n=le({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Re(l),De(l,"style",n),Ur(l,a.precedence,e),t.instance=l;case"stylesheet":n=xl(a.href);var r=e.querySelector(Kn(n));if(r)return t.state.loading|=4,t.instance=r,Re(r),r;l=Qm(a),(n=dt.get(n))&&Mc(l,n),r=(e.ownerDocument||e).createElement("link"),Re(r);var i=r;return i._p=new Promise(function(u,o){i.onload=u,i.onerror=o}),De(r,"link",l),t.state.loading|=4,Ur(r,a.precedence,e),t.instance=r;case"script":return r=Gl(a.src),(n=e.querySelector($n(r)))?(t.instance=n,Re(n),n):(l=a,(n=dt.get(r))&&(l=le({},a),Oc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Re(n),De(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ur(l,a.precedence,e));return t.instance}function Ur(e,t,a){for(var l=a.querySelectorAll(\'link[rel="stylesheet"][data-precedence],style[data-precedence]\'),n=l.length?l[l.length-1]:null,r=n,i=0;i<l.length;i++){var u=l[i];if(u.dataset.precedence===t)r=u;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hr=null;function rd(e,t,a){if(Hr===null){var l=new Map,n=Hr=new Map;n.set(a,l)}else n=Hr,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[qn]||r[Te]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(t)||"";i=e+i;var u=l.get(i);u?u.push(r):l.set(i,[r])}}return l}function id(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function v0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function p0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=xl(l.href),r=t.querySelector(Kn(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=si.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Re(r);return}r=t.ownerDocument||t,l=Qm(l),(n=dt.get(n))&&Mc(l,n),r=r.createElement("link"),Re(r);var i=r;i._p=new Promise(function(u,o){i.onload=u,i.onerror=o}),De(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=si.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Gu=0;function g0(e,t){return e.stylesheets&&e.count===0&&Br(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Br(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Gu===0&&(Gu=62500*Pg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Br(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Gu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function si(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Br(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fi=null;function Br(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fi=new Map,t.forEach(S0,e),fi=null,si.call(e))}function S0(e,t){if(!(t.state.loading&4)){var a=fi.get(e);if(a)var l=a.get(null);else{a=new Map,fi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var i=n[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),l=i)}l&&a.set(null,l)}n=t.instance,i=n.getAttribute("data-precedence"),r=a.get(i)||l,r===l&&a.set(null,n),a.set(i,n),this.count++,l=si.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Hn={$$typeof:jt,Provider:null,Consumer:null,_currentValue:Na,_currentValue2:Na,_threadCount:0};function R0(e,t,a,l,n,r,i,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.hiddenUpdates=hu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function km(e,t,a,l,n,r,i,u,o,c,s,f){return e=new R0(e,t,a,i,o,c,s,f,u),t=1,r===!0&&(t|=24),r=ke(3,null,null,t),e.current=r,r.stateNode=e,t=tc(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},nc(r),e}function Jm(e){return e?(e=hl,e):hl}function Fm(e,t,a,l,n,r){n=Jm(n),l.context===null?l.context=n:l.pendingContext=n,l=da(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=ha(e,l,t),a!==null&&(Ye(a,e,t),vn(a,e,t))}function ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function _c(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}function Km(e){if(e.tag===13||e.tag===31){var t=Qa(e,67108864);t!==null&&Ye(t,e,67108864),_c(e,67108864)}}function od(e){if(e.tag===13||e.tag===31){var t=We();t=Go(t);var a=Qa(e,t);a!==null&&Ye(a,e,t),_c(e,t)}}var di=!0;function E0(e,t,a,l){var n=M.T;M.T=null;var r=q.p;try{q.p=2,Nc(e,t,a,l)}finally{q.p=r,M.T=n}}function b0(e,t,a,l){var n=M.T;M.T=null;var r=q.p;try{q.p=8,Nc(e,t,a,l)}finally{q.p=r,M.T=n}}function Nc(e,t,a,l){if(di){var n=Ho(l);if(n===null)Yu(e,t,l,hi,a),cd(e,l);else if(w0(n,e,t,a,l))l.stopPropagation();else if(cd(e,l),t&4&&-1<T0.indexOf(e)){for(;n!==null;){var r=Hl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Ma(r.pendingLanes);if(i!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;i;){var o=1<<31-$e(i);u.entanglements[1]|=o,i&=~o}At(r),(X&6)===0&&(ai=Fe()+500,Fn(0,!1))}}break;case 31:case 13:u=Qa(r,2),u!==null&&Ye(u,r,2),Di(),_c(r,2)}if(r=Ho(l),r===null&&Yu(e,t,l,hi,a),r===n)break;n=r}n!==null&&l.stopPropagation()}else Yu(e,t,l,null,a)}}function Ho(e){return e=Zo(e),zc(e)}var hi=null;function zc(e){if(hi=null,e=ul(e),e!==null){var t=Yn(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=yd(t),e!==null)return e;e=null}else if(a===31){if(e=vd(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hi=e,null}function $m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sp()){case Rd:return 2;case Ed:return 8;case Xr:case fp:return 32;case bd:return 268435456;default:return 32}default:return 32}}var Bo=!1,va=null,pa=null,ga=null,Bn=new Map,jn=new Map,na=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function nn(e,t,a,l,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[n]},t!==null&&(t=Hl(t),t!==null&&Km(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function w0(e,t,a,l,n){switch(t){case"focusin":return va=nn(va,e,t,a,l,n),!0;case"dragenter":return pa=nn(pa,e,t,a,l,n),!0;case"mouseover":return ga=nn(ga,e,t,a,l,n),!0;case"pointerover":var r=n.pointerId;return Bn.set(r,nn(Bn.get(r)||null,e,t,a,l,n)),!0;case"gotpointercapture":return r=n.pointerId,jn.set(r,nn(jn.get(r)||null,e,t,a,l,n)),!0}return!1}function Wm(e){var t=ul(e.target);if(t!==null){var a=Yn(t);if(a!==null){if(t=a.tag,t===13){if(t=yd(a),t!==null){e.blockedOn=t,Zs(e.priority,function(){od(a)});return}}else if(t===31){if(t=vd(a),t!==null){e.blockedOn=t,Zs(e.priority,function(){od(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ho(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);eo=l,a.target.dispatchEvent(l),eo=null}else return t=Hl(a),t!==null&&Km(t),e.blockedOn=a,!1;t.shift()}return!0}function sd(e,t,a){jr(e)&&a.delete(t)}function C0(){Bo=!1,va!==null&&jr(va)&&(va=null),pa!==null&&jr(pa)&&(pa=null),ga!==null&&jr(ga)&&(ga=null),Bn.forEach(sd),jn.forEach(sd)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,C0)))}var Tr=null;function fd(e){Tr!==e&&(Tr=e,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,function(){Tr===e&&(Tr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(zc(l||a)===null)continue;break}var r=Hl(a);r!==null&&(e.splice(t,3),t-=3,po(r,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ll(e){function t(o){return br(o,e)}va!==null&&br(va,e),pa!==null&&br(pa,e),ga!==null&&br(ga,e),Bn.forEach(t),jn.forEach(t);for(var a=0;a<na.length;a++){var l=na[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<na.length&&(a=na[0],a.blockedOn===null);)Wm(a),a.blockedOn===null&&na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],r=a[l+1],i=n[Ve]||null;if(typeof r=="function")i||fd(a);else if(i){var u=null;if(r&&r.hasAttribute("formAction")){if(n=r,i=r[Ve]||null)u=i.formAction;else if(zc(n)!==null)continue}else u=i.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),fd(a)}}}function Pm(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function xc(e){this._internalRoot=e}Oi.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,l=We();Fm(a,l,e,t,null,null)};Oi.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fm(e.current,2,null,e,null,null),Di(),t[Ul]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ad();e={blockedOn:null,target:e,priority:t};for(var a=0;a<na.length&&t!==0&&t<na[a].priority;a++);na.splice(a,0,e),a===0&&Wm(e)}};var dd=hd.version;if(dd!=="19.2.7")throw Error(g(527,dd,"19.2.7"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=lp(t),e=e!==null?pd(e):null,e=e===null?null:e.stateNode,e};var D0={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(rn=__REACT_DEVTOOLS_GLOBAL_HOOK__,!rn.isDisabled&&rn.supportsFiber))try{Vn=rn.inject(D0),Ke=rn}catch{}var rn;_i.createRoot=function(e,t){if(!md(e))throw Error(g(299));var a=!1,l="",n=qh,r=Qh,i=Zh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=km(e,1,!1,null,null,a,l,null,n,r,i,Pm),e[Ul]=t.current,Ac(e),new xc(t)};_i.hydrateRoot=function(e,t,a){if(!md(e))throw Error(g(299));var l=!1,n="",r=qh,i=Qh,u=Zh,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=km(e,1,!0,t,a??null,l,n,o,r,i,u,Pm),t.context=Jm(null),a=t.current,l=We(),l=Go(l),n=da(l),n.callback=null,ha(a,n,l),a=l,t.current.lanes=a,Xn(t,a),At(t),e[Ul]=t.current,Ac(e),new Oi(t)};_i.version="19.2.7"});var ay=Rt((HR,ty)=>{"use strict";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(e){console.error(e)}}ey(),ty.exports=Im()});var lv=Rt(Xi=>{"use strict";var iR=Symbol.for("react.transitional.element"),uR=Symbol.for("react.fragment");function av(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:iR,type:e,key:l,ref:t!==void 0?t:null,props:a}}Xi.Fragment=uR;Xi.jsx=av;Xi.jsxs=av});var Q=Rt((fE,nv)=>{"use strict";nv.exports=lv()});var Av=A(ay());function ka(e){let t=[];for(let a of e)a.type==="group"?t.push(...ka(a.components)):a.preference&&t.push(a);return t}function Xl(e,t){if(!t)return!0;let a=t.toLowerCase();return e.preference.toLowerCase().includes(a)||(e.name??"").toLowerCase().includes(a)||(e.description??"").toLowerCase().includes(a)||(e.tags??[]).some(l=>l.toLowerCase().includes(a))}function Ni(e){let t=document.createElement("div");t.className="notification",t.addEventListener("animationend",()=>t.remove()),t.innerText=e;let a=document.getElementById("notificationsContainer");a&&a.appendChild(t)}async function ny(e){let t=await fetch("/KoLmafia/jsonApi",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({body:JSON.stringify(e),pwd})});if(!t.ok)throw`HTTP ${t.status}`;let a=await t.json();if("error"in a)throw a.error;return a}async function A0(e){return(await ny({functions:e})).functions??[]}async function ry(e){return e.length===0?[]:(await ny({properties:e})).properties??[]}function M0(e){return e.default!==void 0?e.default:e.type==="dropdown"||e.type==="tags"?e.dropdown?.[0]?.value??"":e.type==="boolean"?"false":""}async function iy(e){let t=e.flatMap(l=>ka(l.components)),a=await ry(t.map(l=>l.preference));t.forEach((l,n)=>{l.value=a[n]??M0(l),l.previousValue=l.value,l.validate&&(l.validate=new Function(`return (${l.validate})`)())})}function O0(e){let t=document.createElement("textarea");return t.innerHTML=e,t.value}function ly(e,t){return e.split(new RegExp(`(?<!\\\\\\\\)${t}`))}function _0(e){let t=[];if(e==="")return t;for(let a of ly(e,", ")){if(a==="")continue;a=a.replace(/^\\(|\\)$/g,"");let l=ly(a,":").map(u=>O0(u.trim().replace(/\\\\([.:])/g,"$1"))),n=parseInt(l[0],10)||0,r=l.slice(1),i=t[t.length-1];i&&i.day===n&&i.values.join(":")===r.join(":")?i.count++:t.push({day:n,values:r,count:1})}return t}async function Lc(e){let t=e.filter(n=>n.property),a=await ry(t.map(n=>n.property)),l=new Map(t.map((n,r)=>[n.property,a[r]]));return e.map(n=>{if(!n.property||!l.has(n.property))return n;let r=l.get(n.property)??"";return n.text!==void 0?{...n,text:r}:{...n,events:_0(r)}})}async function uy(e){for(let t of e)for(let a of t.components){if(a.type!=="tracking")continue;let l=a;l.sections=await Lc(l.sections)}}async function Uc(e){await A0(e.map(([t,a])=>({name:"setProperty",args:[t,a]})))}async function oy(e){let t=e.filter(l=>l.previousValue!==l.value);if(t.length===0)return["No settings were modified."];let a=t.map(l=>`${l.preference} changed from \\`${l.previousValue}\\` to \\`${l.value}\\``);await Uc(t.map(l=>[l.preference,l.value.trim()]));for(let l of t)l.previousValue=l.value;return a}var qe=A(se(),1),w=A(se(),1),W=A(se(),1),ls=A(se(),1),Qy=A(se(),1),V=A(se(),1),ZS=A(se(),1),kS=A(se(),1),JS=A(se(),1),C=A(se(),1),tv=A(se(),1),rR={};var qc=/^(?:[a-z][a-z0-9+.-]*:|[\\\\/]{2})/i,py=/^[\\\\/]{2}/;function N0(e,t){return t+e.replace(/\\\\/g,"/")}var cy="popstate";function sy(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function gy(e={}){function t(n,r){let{pathname:i="/",search:u="",hash:o=""}=Ca(n.location.hash.substring(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Yc("",{pathname:i,search:u,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function a(n,r){let i=n.document.querySelector("base"),u="";if(i&&i.getAttribute("href")){let o=n.location.href,c=o.indexOf("#");u=c===-1?o:o.slice(0,c)}return u+"#"+(typeof r=="string"?r:ql(r))}function l(n,r){Xe(n.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(r)})`)}return x0(t,a,l,e)}function I(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z0(){return Math.random().toString(36).substring(2,10)}function fy(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Yc(e,t,a=null,l,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ca(t):t,state:a,key:t&&t.key||l||z0(),mask:n}}function ql({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Ca(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let l=e.indexOf("?");l>=0&&(t.search=e.substring(l),e=e.substring(0,l)),e&&(t.pathname=e)}return t}function x0(e,t,a,l={}){let{window:n=document.defaultView,v5Compat:r=!1}=l,i=n.history,u="POP",o=null,c=s();c==null&&(c=0,i.replaceState({...i.state,idx:c},""));function s(){return(i.state||{idx:null}).idx}function f(){u="POP";let R=s(),m=R==null?null:R-c;c=R,o&&o({action:u,location:E.location,delta:m})}function h(R,m){u="PUSH";let d=sy(R)?R:Yc(E.location,R,m);a&&a(d,R),c=s()+1;let y=fy(d,c),p=E.createHref(d.mask||d);try{i.pushState(y,"",p)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;n.location.assign(p)}r&&o&&o({action:u,location:E.location,delta:1})}function v(R,m){u="REPLACE";let d=sy(R)?R:Yc(E.location,R,m);a&&a(d,R),c=s();let y=fy(d,c),p=E.createHref(d.mask||d);i.replaceState(y,"",p),r&&o&&o({action:u,location:E.location,delta:0})}function S(R){return L0(n,R)}let E={get action(){return u},get location(){return e(n,i)},listen(R){if(o)throw new Error("A history only accepts one active listener");return n.addEventListener(cy,f),o=R,()=>{n.removeEventListener(cy,f),o=null}},createHref(R){return t(n,R)},createURL:S,encodeLocation(R){let m=S(R);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(R){return i.go(R)}};return E}function L0(e,t,a=!1){let l="http://localhost";e&&(l=e.location.origin!=="null"?e.location.origin:e.location.href),I(l,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:ql(t);return n=n.replace(/ $/,"%20"),!a&&py.test(n)&&(n=l+n),new URL(n,l)}var U0;U0=new WeakMap;function Qc(e,t,a="/"){return H0(e,t,a,!1)}function H0(e,t,a,l,n){let r=typeof t=="string"?Ca(t):t,i=Mt(r.pathname||"/",a);if(i==null)return null;let u=n??j0(e),o=null,c=K0(i);for(let s=0;o==null&&s<u.length;++s)o=F0(u[s],c,l);return o}function B0(e,t){let{route:a,pathname:l,params:n}=e;return{id:a.id,pathname:l,params:n,data:t[a.id],loaderData:t[a.id],handle:a.handle}}function j0(e){let t=Sy(e);return Y0(t),t}function Sy(e,t=[],a=[],l="",n=!1){let r=(i,u,o=n,c)=>{let s={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:u,route:i};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(l)&&o)return;I(s.relativePath.startsWith(l),`Absolute route path "${s.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(l.length)}let f=St([l,s.relativePath]),h=a.concat(s);i.children&&i.children.length>0&&(I(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Sy(i.children,t,h,f,o)),!(i.path==null&&!i.index)&&t.push({path:f,score:k0(f,i.index),routesMeta:h.map((v,S)=>{let[E,R]=by(v.relativePath,v.caseSensitive,S===h.length-1);return{...v,matcher:E,compiledParams:R}})})};return e.forEach((i,u)=>{if(i.path===""||!i.path?.includes("?"))r(i,u);else for(let o of Ry(i.path))r(i,u,!0,o)}),t}function Ry(e){let t=e.split("/");if(t.length===0)return[];let[a,...l]=t,n=a.endsWith("?"),r=a.replace(/\\?$/,"");if(l.length===0)return n?[r,""]:[r];let i=Ry(l.join("/")),u=[];return u.push(...i.map(o=>o===""?r:[r,o].join("/"))),n&&u.push(...i),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function Y0(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:J0(t.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}var V0=/^:[\\w-]+$/,G0=3,X0=2,q0=1,Q0=10,Z0=-2,dy=e=>e==="*";function k0(e,t){let a=e.split("/"),l=a.length;return a.some(dy)&&(l+=Z0),t&&(l+=X0),a.filter(n=>!dy(n)).reduce((n,r)=>n+(V0.test(r)?G0:r===""?q0:Q0),l)}function J0(e,t){return e.length===t.length&&e.slice(0,-1).every((l,n)=>l===t[n])?e[e.length-1]-t[t.length-1]:0}function F0(e,t,a=!1){let{routesMeta:l}=e,n={},r="/",i=[];for(let u=0;u<l.length;++u){let o=l[u],c=u===l.length-1,s=r==="/"?t:t.slice(r.length)||"/",f={path:o.relativePath,caseSensitive:o.caseSensitive,end:c},h=o.matcher&&o.compiledParams?Ey(f,s,o.matcher,o.compiledParams):Pn(f,s),v=o.route;if(!h&&c&&a&&!l[l.length-1].route.index&&(h=Pn({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},s)),!h)return null;Object.assign(n,h.params),i.push({params:n,pathname:St([r,h.pathname]),pathnameBase:W0(St([r,h.pathnameBase])),route:v}),h.pathnameBase!=="/"&&(r=St([r,h.pathnameBase]))}return i}function Pn(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,l]=by(e.path,e.caseSensitive,e.end);return Ey(e,t,a,l)}function Ey(e,t,a,l){let n=t.match(a);if(!n)return null;let r=n[0],i=r.replace(/(.)\\/+$/,"$1"),u=n.slice(1);return{params:l.reduce((c,{paramName:s,isOptional:f},h)=>{if(s==="*"){let S=u[h]||"";i=r.slice(0,r.length-S.length).replace(/(.)\\/+$/,"$1")}let v=u[h];return f&&!v?c[s]=void 0:c[s]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:i,pattern:e}}function by(e,t=!1,a=!0){Xe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\\*$/,"/*")}" because the \\`*\\` character must always follow a \\`/\\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\\*$/,"/*")}".`);let l=[],n="^"+e.replace(/\\/*\\*?$/,"").replace(/^\\/*/,"/").replace(/[\\\\.*+^${}|()[\\]]/g,"\\\\$&").replace(/\\/:([\\w-]+)(\\?)?/g,(i,u,o,c,s)=>{if(l.push({paramName:u,isOptional:o!=null}),o){let f=s.charAt(c+i.length);return f&&f!=="/"?"/([^\\\\/]*)":"(?:/([^\\\\/]*))?"}return"/([^\\\\/]+)"}).replace(/\\/([\\w-]+)\\?(\\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(l.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\\\/(.+)|\\\\/*)$"):a?n+="\\\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\\\/|$))"),[new RegExp(n,t?void 0:"i"),l]}function K0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\\//g,"%2F")).join("/")}catch(t){return Xe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Mt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,l=e.charAt(a);return l&&l!=="/"?null:e.slice(a)||"/"}function Ty(e,t="/"){let{pathname:a,search:l="",hash:n=""}=typeof e=="string"?Ca(e):e,r;return a?(a=wy(a),a.startsWith("/")?r=hy(a.substring(1),"/"):r=hy(a,t)):r=t,{pathname:r,search:P0(l),hash:I0(n)}}function hy(e,t){let a=Hi(t).split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}function Hc(e,t,a,l){return`Cannot include a \'${e}\' character in a manually specified \\`to.${t}\\` field [${JSON.stringify(l)}].  Please separate it out to the \\`to.${a}\\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $0(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function Zc(e){let t=$0(e);return t.map((a,l)=>l===t.length-1?a.pathname:a.pathnameBase)}function ji(e,t,a,l=!1){let n;typeof e=="string"?n=Ca(e):(n={...e},I(!n.pathname||!n.pathname.includes("?"),Hc("?","pathname","search",n)),I(!n.pathname||!n.pathname.includes("#"),Hc("#","pathname","hash",n)),I(!n.search||!n.search.includes("#"),Hc("#","search","hash",n)));let r=e===""||n.pathname==="",i=r?"/":n.pathname,u;if(i==null)u=a;else{let f=t.length-1;if(!l&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),f-=1;n.pathname=h.join("/")}u=f>=0?t[f]:"/"}let o=Ty(n,u),c=i&&i!=="/"&&i.endsWith("/"),s=(r||i===".")&&a.endsWith("/");return!o.pathname.endsWith("/")&&(c||s)&&(o.pathname+="/"),o}var wy=e=>e.replace(/[\\\\/]{2,}/g,"/"),St=e=>wy(e.join("/")),Hi=e=>e.replace(/\\/+$/,""),W0=e=>Hi(e).replace(/^\\/*/,"/"),P0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;var Cy=class{constructor(e,t,a,l=!1){this.status=e,this.statusText=t||"",this.internal=l,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Dy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function eS(e){let t=e.map(a=>a.route.path).filter(Boolean);return St(t)||"/"}var Ay=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function My(e,t){let a=e;if(typeof a!="string"||!qc.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let l=a,n=!1;if(Ay)try{let r=new URL(window.location.href),i=py.test(a)?new URL(N0(a,r.protocol)):new URL(a),u=Mt(i.pathname,t);i.origin===r.origin&&u!=null?a=u+i.search+i.hash:n=!0}catch{Xe(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:n,to:a}}var VR=Object.getOwnPropertyNames(Object.prototype).sort().join("\\0");var Oy=["POST","PUT","PATCH","DELETE"],GR=new Set(Oy),tS=["GET",...Oy],XR=new Set(tS);var aS,lS,nS,rS;aS=new WeakMap;lS=new WeakMap;nS=new WeakMap;rS=new WeakMap;var iS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function uS(e){try{return iS.includes(new URL(e).protocol)}catch{return!1}}var Ja=qe.createContext(null);Ja.displayName="DataRouter";var Ql=qe.createContext(null);Ql.displayName="DataRouterState";var _y=qe.createContext(!1);function oS(){return qe.useContext(_y)}var kc=qe.createContext({isTransitioning:!1});kc.displayName="ViewTransition";var Ny=qe.createContext(new Map);Ny.displayName="Fetchers";var cS=qe.createContext(null);cS.displayName="Await";var Oe=qe.createContext(null);Oe.displayName="Navigation";var Zl=qe.createContext(null);Zl.displayName="Location";var ht=qe.createContext({outlet:null,matches:[],isDataRoute:!1});ht.displayName="Route";var Jc=qe.createContext(null);Jc.displayName="RouteError";var Vc=!0,zy="REACT_ROUTER_ERROR",sS="REDIRECT",fS="ROUTE_ERROR_RESPONSE";function dS(e){if(e.startsWith(`${zy}:${sS}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function hS(e){if(e.startsWith(`${zy}:${fS}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Cy(t.status,t.statusText,t.data)}catch{}}function xy(e,{relative:t}={}){I(Fa(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:l}=w.useContext(Oe),{hash:n,pathname:r,search:i}=kl(e,{relative:t}),u=r;return a!=="/"&&(u=r==="/"?a:St([a,r])),l.createHref({pathname:u,search:i,hash:n})}function Fa(){return w.useContext(Zl)!=null}function et(){return I(Fa(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Zl).location}var Ly="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uy(e){w.useContext(Oe).static||w.useLayoutEffect(e)}function Fc(){let{isDataRoute:e}=w.useContext(ht);return e?wS():mS()}function mS(){I(Fa(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Ja),{basename:t,navigator:a}=w.useContext(Oe),{matches:l}=w.useContext(ht),{pathname:n}=et(),r=JSON.stringify(Zc(l)),i=w.useRef(!1);return Uy(()=>{i.current=!0}),w.useCallback((o,c={})=>{if(Xe(i.current,Ly),!i.current)return;if(typeof o=="number"){a.go(o);return}let s=ji(o,JSON.parse(r),n,c.relative==="path");e==null&&t!=="/"&&(s.pathname=s.pathname==="/"?t:St([t,s.pathname])),(c.replace?a.replace:a.push)(s,c.state,c)},[t,a,r,n,e])}var yS=w.createContext(null);function Hy(e){let t=w.useContext(ht).outlet;return w.useMemo(()=>t&&w.createElement(yS.Provider,{value:e},t),[t,e])}function kl(e,{relative:t}={}){let{matches:a}=w.useContext(ht),{pathname:l}=et(),n=JSON.stringify(Zc(a));return w.useMemo(()=>ji(e,JSON.parse(n),l,t==="path"),[e,n,l,t])}function By(e,t){return jy(e,t)}function jy(e,t,a){I(Fa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=w.useContext(Oe),{matches:n}=w.useContext(ht),r=n[n.length-1],i=r?r.params:{},u=r?r.pathname:"/",o=r?r.pathnameBase:"/",c=r&&r.route;if(Vc){let R=c&&c.path||"";Xy(u,!c||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \\`useRoutes()\\`) at "${u}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let s=et(),f;if(t){let R=typeof t=="string"?Ca(t):t;I(o==="/"||R.pathname?.startsWith(o),`When overriding the location using \\`<Routes location>\\` or \\`useRoutes(routes, location)\\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${o}" but pathname "${R.pathname}" was given in the \\`location\\` prop.`),f=R}else f=s;let h=f.pathname||"/",v=h;if(o!=="/"){let R=o.replace(/^\\//,"").split("/");v="/"+h.replace(/^\\//,"").split("/").slice(R.length).join("/")}let S=a&&a.state.matches.length?a.state.matches.map(R=>Object.assign(R,{route:a.manifest[R.route.id]||R.route})):Qc(e,{pathname:v});Vc&&(Xe(c||S!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Xe(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let E=RS(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},i,R.params),pathname:St([o,l.encodeLocation?l.encodeLocation(R.pathname.replace(/%/g,"%25").replace(/\\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?o:St([o,l.encodeLocation?l.encodeLocation(R.pathnameBase.replace(/%/g,"%25").replace(/\\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),n,a);return t&&E?w.createElement(Zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},E):E}function vS(){let e=Gy(),t=Dy(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,l="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:l},r={padding:"2px 4px",backgroundColor:l},i=null;return Vc&&(console.error("Error handled by React Router default ErrorBoundary:",e),i=w.createElement(w.Fragment,null,w.createElement("p",null,"\\u{1F4BF} Hey developer \\u{1F44B}"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:r},"ErrorBoundary")," or"," ",w.createElement("code",{style:r},"errorElement")," prop on your route."))),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),a?w.createElement("pre",{style:n},a):null,i)}var pS=w.createElement(vS,null),Yy=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=hS(e.digest);a&&(e=a)}let t=e!==void 0?w.createElement(ht.Provider,{value:this.props.routeContext},w.createElement(Jc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?w.createElement(gS,{error:e},t):t}};Yy.contextType=_y;var Bc=new WeakMap;function gS({children:e,error:t}){let{basename:a}=w.useContext(Oe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let l=dS(t.digest);if(l){let n=Bc.get(t);if(n)throw n;let r=My(l.location,a),i=r.absoluteURL||r.to;if(uS(i))throw new Error("Invalid redirect location");if(Ay&&!Bc.get(t))if(r.isExternal||l.reloadDocument)window.location.href=i;else{let u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(r.to,{replace:l.replace}));throw Bc.set(t,u),u}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return e}function SS({routeContext:e,match:t,children:a}){let l=w.useContext(Ja);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(ht.Provider,{value:e},a)}function RS(e,t=[],a){let l=a?.state;if(e==null){if(!l)return null;if(l.errors)e=l.matches;else if(t.length===0&&!l.initialized&&l.matches.length>0)e=l.matches;else return null}let n=e,r=l?.errors;if(r!=null){let s=n.findIndex(f=>f.route.id&&r?.[f.route.id]!==void 0);I(s>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),n=n.slice(0,Math.min(n.length,s+1))}let i=!1,u=-1;if(a&&l){i=l.renderFallback;for(let s=0;s<n.length;s++){let f=n[s];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=s),f.route.id){let{loaderData:h,errors:v}=l,S=f.route.loader&&!h.hasOwnProperty(f.route.id)&&(!v||v[f.route.id]===void 0);if(f.route.lazy||S){a.isStatic&&(i=!0),u>=0?n=n.slice(0,u+1):n=[n[0]];break}}}}let o=a?.onError,c=l&&o?(s,f)=>{o(s,{location:l.location,params:l.matches?.[0]?.params??{},pattern:eS(l.matches),errorInfo:f})}:void 0;return n.reduceRight((s,f,h)=>{let v,S=!1,E=null,R=null;l&&(v=r&&f.route.id?r[f.route.id]:void 0,E=f.route.errorElement||pS,i&&(u<0&&h===0?(Xy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,R=null):u===h&&(S=!0,R=f.route.hydrateFallbackElement||null)));let m=t.concat(n.slice(0,h+1)),d=()=>{let y;return v?y=E:S?y=R:f.route.Component?y=w.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=s,w.createElement(SS,{match:f,routeContext:{outlet:s,matches:m,isDataRoute:l!=null},children:y})};return l&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(Yy,{location:l.location,revalidation:l.revalidation,component:E,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:c}):d()},null)}function Kc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ES(e){let t=w.useContext(Ja);return I(t,Kc(e)),t}function $c(e){let t=w.useContext(Ql);return I(t,Kc(e)),t}function bS(e){let t=w.useContext(ht);return I(t,Kc(e)),t}function Wc(e){let t=bS(e),a=t.matches[t.matches.length-1];return I(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function TS(){return Wc("useRouteId")}function Vy(){let e=$c("useNavigation");return w.useMemo(()=>{let{matches:t,historyAction:a,...l}=e.navigation;return l},[e.navigation])}function Pc(){let{matches:e,loaderData:t}=$c("useMatches");return w.useMemo(()=>e.map(a=>B0(a,t)),[e,t])}function Gy(){let e=w.useContext(Jc),t=$c("useRouteError"),a=Wc("useRouteError");return e!==void 0?e:t.errors?.[a]}function wS(){let{router:e}=ES("useNavigate"),t=Wc("useNavigate"),a=w.useRef(!1);return Uy(()=>{a.current=!0}),w.useCallback(async(n,r={})=>{Xe(a.current,Ly),a.current&&(typeof n=="number"?await e.navigate(n):await e.navigate(n,{fromRouteId:t,...r}))},[e,t])}var my={};function Xy(e,t,a){!t&&!my[e]&&(my[e]=!0,Xe(!1,a))}var CS="useOptimistic",qR=W[CS];var QR=W.memo(DS);function DS({routes:e,manifest:t,future:a,state:l,isStatic:n,onError:r}){return jy(e,void 0,{manifest:t,state:l,isStatic:n,onError:r,future:a})}function Ic({to:e,replace:t,state:a,relative:l}){I(Fa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:n}=W.useContext(Oe);Xe(!n,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:r}=W.useContext(ht),{pathname:i}=et(),u=Fc(),o=ji(e,Zc(r),i,l==="path"),c=JSON.stringify(o);return W.useEffect(()=>{u(JSON.parse(c),{replace:t,state:a,relative:l})},[u,c,l,t,a]),null}function es(e){return Hy(e.context)}function Jl(e){I(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ts({basename:e="/",children:t=null,location:a,navigationType:l="POP",navigator:n,static:r=!1,useTransitions:i}){I(!Fa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\\/*/,"/"),o=W.useMemo(()=>({basename:u,navigator:n,static:r,useTransitions:i,future:{}}),[u,n,r,i]);typeof a=="string"&&(a=Ca(a));let{pathname:c="/",search:s="",hash:f="",state:h=null,key:v="default",mask:S}=a,E=W.useMemo(()=>{let R=Mt(c,u);return R==null?null:{location:{pathname:R,search:s,hash:f,state:h,key:v,mask:S},navigationType:l}},[u,c,s,f,h,v,l,S]);return Xe(E!=null,`<Router basename="${u}"> is not able to match the URL "${c}${s}${f}" because it does not start with the basename, so the <Router> won\'t render anything.`),E==null?null:W.createElement(Oe.Provider,{value:o},W.createElement(Zl.Provider,{children:t,value:E}))}function as({children:e,location:t}){return By(Bi(e),t)}function Bi(e,t=[]){let a=[];return W.Children.forEach(e,(l,n)=>{if(!W.isValidElement(l))return;let r=[...t,n];if(l.type===W.Fragment){a.push.apply(a,Bi(l.props.children,r));return}I(l.type===Jl,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),I(!l.props.index||!l.props.children,"An index route cannot have child routes.");let i={id:l.props.id||r.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(i.children=Bi(l.props.children,r)),a.push(i)}),a}var Li="get",Ui="application/x-www-form-urlencoded";function Yi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function AS(e){return Yi(e)&&e.tagName.toLowerCase()==="button"}function MS(e){return Yi(e)&&e.tagName.toLowerCase()==="form"}function OS(e){return Yi(e)&&e.tagName.toLowerCase()==="input"}function _S(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function NS(e,t){return e.button===0&&(!t||t==="_self")&&!_S(e)}var zi=null;function zS(){if(zi===null)try{new FormData(document.createElement("form"),0),zi=!1}catch{zi=!0}return zi}var xS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jc(e){return e!=null&&!xS.has(e)?(Xe(!1,`"${e}" is not a valid \\`encType\\` for \\`<Form>\\`/\\`<fetcher.Form>\\` and will default to "${Ui}"`),null):e}function LS(e,t){let a,l,n,r,i;if(MS(e)){let u=e.getAttribute("action");l=u?Mt(u,t):null,a=e.getAttribute("method")||Li,n=jc(e.getAttribute("enctype"))||Ui,r=new FormData(e)}else if(AS(e)||OS(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error(\'Cannot submit a <button> or <input type="submit"> without a <form>\');let o=e.getAttribute("formaction")||u.getAttribute("action");if(l=o?Mt(o,t):null,a=e.getAttribute("formmethod")||u.getAttribute("method")||Li,n=jc(e.getAttribute("formenctype"))||jc(u.getAttribute("enctype"))||Ui,r=new FormData(u,e),!zS()){let{name:c,type:s,value:f}=e;if(s==="image"){let h=c?`${c}.`:"";r.append(`${h}x`,"0"),r.append(`${h}y`,"0")}else c&&r.append(c,f)}}else{if(Yi(e))throw new Error(\'Cannot submit element that is not <form>, <button>, or <input type="submit|image">\');a=Li,l=null,n=Ui,i=e}return r&&n==="text/plain"&&(i=r,r=void 0),{action:l,method:a.toLowerCase(),encType:n,formData:r,body:i}}var ZR=Object.getOwnPropertyNames(Object.prototype).sort().join("\\0");var US={"&":"\\\\u0026",">":"\\\\u003e","<":"\\\\u003c","\\u2028":"\\\\u2028","\\u2029":"\\\\u2029"},HS=/[&><\\u2028\\u2029]/g;function yy(e){return e.replace(HS,t=>US[t])}function ns(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qy(e,t,a,l){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?n.pathname.endsWith("/")?n.pathname=`${n.pathname}_.${l}`:n.pathname=`${n.pathname}.${l}`:n.pathname==="/"?n.pathname=`_root.${l}`:t&&Mt(n.pathname,t)==="/"?n.pathname=`${Hi(t)}/_root.${l}`:n.pathname=`${Hi(n.pathname)}.${l}`,n}async function BS(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){if(console.error(`Error loading route module \\`${e.module}\\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode&&rR.hot)throw a;return window.location.reload(),new Promise(()=>{})}}function jS(e){return e!=null&&typeof e.page=="string"}function YS(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function VS(e,t,a){let l=await Promise.all(e.map(async n=>{let r=t.routes[n.route.id];if(r){let i=await BS(r,a);return i.links?i.links():[]}return[]}));return QS(l.flat(1).filter(YS).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function vy(e,t,a,l,n,r){let i=(o,c)=>a[c]?o.route.id!==a[c].route.id:!0,u=(o,c)=>a[c].pathname!==o.pathname||a[c].route.path?.endsWith("*")&&a[c].params["*"]!==o.params["*"];return r==="assets"?t.filter((o,c)=>i(o,c)||u(o,c)):r==="data"?t.filter((o,c)=>{let s=l.routes[o.route.id];if(!s||!s.hasLoader)return!1;if(i(o,c)||u(o,c))return!0;if(o.route.shouldRevalidate){let f=o.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function GS(e,t,{includeHydrateFallback:a}={}){return XS(e.map(l=>{let n=t.routes[l.route.id];if(!n)return[];let r=[n.module];return n.clientActionModule&&(r=r.concat(n.clientActionModule)),n.clientLoaderModule&&(r=r.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(r=r.concat(n.hydrateFallbackModule)),n.imports&&(r=r.concat(n.imports)),r}).flat(1))}function XS(e){return[...new Set(e)]}function qS(e){let t={},a=Object.keys(e).sort();for(let l of a)t[l]=e[l];return t}function QS(e,t){let a=new Set,l=new Set(t);return e.reduce((n,r)=>{if(t&&!jS(r)&&r.as==="script"&&r.href&&l.has(r.href))return n;let u=JSON.stringify(qS(r));return a.has(u)||(a.add(u),n.push({key:u,link:r})),n},[])}function rs(){let e=V.useContext(Ja);return ns(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function FS(){let e=V.useContext(Ql);return ns(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var In=V.createContext(void 0);In.displayName="FrameworkContext";function Vi(){let e=V.useContext(In);return ns(e,"You must render this element inside a <HydratedRouter> element"),e}function KS(e,t){let a=V.useContext(In),[l,n]=V.useState(!1),[r,i]=V.useState(!1),{onFocus:u,onBlur:o,onMouseEnter:c,onMouseLeave:s,onTouchStart:f}=t,h=V.useRef(null);V.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let E=m=>{m.forEach(d=>{i(d.isIntersecting)})},R=new IntersectionObserver(E,{threshold:.5});return h.current&&R.observe(h.current),()=>{R.disconnect()}}},[e]),V.useEffect(()=>{if(l){let E=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(E)}}},[l]);let v=()=>{n(!0)},S=()=>{n(!1),i(!1)};return a?e!=="intent"?[r,h,{}]:[r,h,{onFocus:Wn(u,v),onBlur:Wn(o,S),onMouseEnter:Wn(c,v),onMouseLeave:Wn(s,S),onTouchStart:Wn(f,v)}]:[!1,h,{}]}function Wn(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function Zy({page:e,...t}){let a=oS(),{nonce:l}=Vi(),{router:n}=rs(),r=V.useMemo(()=>Qc(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?(t.nonce==null&&l&&(t={...t,nonce:l}),a?V.createElement(WS,{page:e,matches:r,...t}):V.createElement(PS,{page:e,matches:r,...t})):null}function $S(e){let{manifest:t,routeModules:a}=Vi(),[l,n]=V.useState([]);return V.useEffect(()=>{let r=!1;return VS(e,t,a).then(i=>{r||n(i)}),()=>{r=!0}},[e,t,a]),l}function WS({page:e,matches:t,...a}){let l=et(),{future:n}=Vi(),{basename:r}=rs(),i=V.useMemo(()=>{if(e===l.pathname+l.search+l.hash)return[];let u=qy(e,r,n.v8_trailingSlashAwareDataRequests,"rsc"),o=!1,c=[];for(let s of t)typeof s.route.shouldRevalidate=="function"?o=!0:c.push(s.route.id);return o&&c.length>0&&u.searchParams.set("_routes",c.join(",")),[u.pathname+u.search]},[r,n.v8_trailingSlashAwareDataRequests,e,l,t]);return V.createElement(V.Fragment,null,i.map(u=>V.createElement("link",{key:u,rel:"prefetch",as:"fetch",href:u,...a})))}function PS({page:e,matches:t,...a}){let l=et(),{future:n,manifest:r,routeModules:i}=Vi(),{basename:u}=rs(),{loaderData:o,matches:c}=FS(),s=V.useMemo(()=>vy(e,t,c,r,l,"data"),[e,t,c,r,l]),f=V.useMemo(()=>vy(e,t,c,r,l,"assets"),[e,t,c,r,l]),h=V.useMemo(()=>{if(e===l.pathname+l.search+l.hash)return[];let E=new Set,R=!1;if(t.forEach(d=>{let y=r.routes[d.route.id];!y||!y.hasLoader||(!s.some(p=>p.route.id===d.route.id)&&d.route.id in o&&i[d.route.id]?.shouldRevalidate||y.hasClientLoader?R=!0:E.add(d.route.id))}),E.size===0)return[];let m=qy(e,u,n.v8_trailingSlashAwareDataRequests,"data");return R&&E.size>0&&m.searchParams.set("_routes",t.filter(d=>E.has(d.route.id)).map(d=>d.route.id).join(",")),[m.pathname+m.search]},[u,n.v8_trailingSlashAwareDataRequests,o,l,r,s,t,e,i]),v=V.useMemo(()=>GS(f,r),[f,r]),S=$S(f);return V.createElement(V.Fragment,null,h.map(E=>V.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...a})),v.map(E=>V.createElement("link",{key:E,rel:"modulepreload",href:E,...a})),S.map(({key:E,link:R})=>V.createElement("link",{key:E,nonce:a.nonce,...R,crossOrigin:R.crossOrigin??a.crossOrigin})))}function IS(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var eR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eR&&(window.__reactRouterVersion="7.18.1")}catch{}function is({basename:e,children:t,useTransitions:a,window:l}){let n=C.useRef();n.current==null&&(n.current=gy({window:l,v5Compat:!0}));let r=n.current,[i,u]=C.useState({action:r.action,location:r.location}),o=C.useCallback(c=>{a===!1?u(c):C.startTransition(()=>u(c))},[a]);return C.useLayoutEffect(()=>r.listen(o),[r,o]),C.createElement(ts,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:r,useTransitions:a})}function ky({basename:e,children:t,history:a,useTransitions:l}){let[n,r]=C.useState({action:a.action,location:a.location}),i=C.useCallback(u=>{l===!1?r(u):C.startTransition(()=>r(u))},[l]);return C.useLayoutEffect(()=>a.listen(i),[a,i]),C.createElement(ts,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:a,useTransitions:l})}ky.displayName="unstable_HistoryRouter";var us=C.forwardRef(function({onClick:t,discover:a="render",prefetch:l="none",relative:n,reloadDocument:r,replace:i,mask:u,state:o,target:c,to:s,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:v,...S},E){let{basename:R,navigator:m,useTransitions:d}=C.useContext(Oe),y=typeof s=="string"&&qc.test(s),p=My(s,R);s=p.to;let b=xy(s,{relative:n}),z=et(),T=null;if(u){let Z=ji(u,[],z.mask?z.mask.pathname:"/",!0);R!=="/"&&(Z.pathname=Z.pathname==="/"?R:St([R,Z.pathname])),T=m.createHref(Z)}let[D,_,H]=KS(l,S),tt=$y(s,{replace:i,mask:u,state:o,target:c,preventScrollReset:f,relative:n,viewTransition:h,defaultShouldRevalidate:v,useTransitions:d});function Fl(Z){t&&t(Z),Z.defaultPrevented||tt(Z)}let N=!(p.isExternal||r),U=C.createElement("a",{...S,...H,href:(N?T:void 0)||p.absoluteURL||b,onClick:N?Fl:t,ref:IS(E,_),target:c,"data-discover":!y&&a==="render"?"true":void 0});return D&&!y?C.createElement(C.Fragment,null,U,C.createElement(Zy,{page:b})):U});us.displayName="Link";var Gi=C.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:l="",end:n=!1,style:r,to:i,viewTransition:u,children:o,...c},s){let f=kl(i,{relative:c.relative}),h=et(),v=C.useContext(Ql),{navigator:S,basename:E}=C.useContext(Oe),R=v!=null&&ev(f)&&u===!0,m=S.encodeLocation?S.encodeLocation(f).pathname:f.pathname,d=h.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;a||(d=d.toLowerCase(),y=y?y.toLowerCase():null,m=m.toLowerCase()),y&&E&&(y=Mt(y,E)||y);let p=m!=="/"&&m.endsWith("/")?m.length-1:m.length,b=d===m||!n&&d.startsWith(m)&&d.charAt(p)==="/",z=y!=null&&(y===m||!n&&y.startsWith(m)&&y.charAt(m.length)==="/"),T={isActive:b,isPending:z,isTransitioning:R},D=b?t:void 0,_;typeof l=="function"?_=l(T):_=[l,b?"active":null,z?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let H=typeof r=="function"?r(T):r;return C.createElement(us,{...c,"aria-current":D,className:_,ref:s,style:H,to:i,viewTransition:u},typeof o=="function"?o(T):o)});Gi.displayName="NavLink";var Jy=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:l,replace:n,state:r,method:i=Li,action:u,onSubmit:o,relative:c,preventScrollReset:s,viewTransition:f,defaultShouldRevalidate:h,...v},S)=>{let{useTransitions:E}=C.useContext(Oe),R=Wy(),m=Py(u,{relative:c}),d=i.toLowerCase()==="get"?"get":"post",y=typeof u=="string"&&qc.test(u);return C.createElement("form",{ref:S,method:d,action:m,onSubmit:l?o:b=>{if(o&&o(b),b.defaultPrevented)return;b.preventDefault();let z=b.nativeEvent.submitter,T=z?.getAttribute("formmethod")||i,D=()=>R(z||b.currentTarget,{fetcherKey:t,method:T,navigate:a,replace:n,state:r,relative:c,preventScrollReset:s,viewTransition:f,defaultShouldRevalidate:h});E&&a!==!1?C.startTransition(()=>D()):D()},...v,"data-discover":!y&&e==="render"?"true":void 0})});Jy.displayName="Form";function Fy({getKey:e,storageKey:t,...a}){let l=C.useContext(In),{basename:n}=C.useContext(Oe),r=et(),i=Pc();Iy({getKey:e,storageKey:t});let u=C.useMemo(()=>{if(!l||!e)return null;let c=Xc(r,i,n,e);return c!==r.key?c:null},[]);if(!l||l.isSpaMode)return null;let o=((c,s)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let h=JSON.parse(sessionStorage.getItem(c)||"{}")[s||window.history.state.key];typeof h=="number"&&window.scrollTo(0,h)}catch(f){console.error(f),sessionStorage.removeItem(c)}}).toString();return a.nonce==null&&l?.nonce&&(a.nonce=l.nonce),C.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${o})(${yy(JSON.stringify(t||Gc))}, ${yy(JSON.stringify(u))})`}})}Fy.displayName="ScrollRestoration";function Ky(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function os(e){let t=C.useContext(Ja);return I(t,Ky(e)),t}function tR(e){let t=C.useContext(Ql);return I(t,Ky(e)),t}function $y(e,{target:t,replace:a,mask:l,state:n,preventScrollReset:r,relative:i,viewTransition:u,defaultShouldRevalidate:o,useTransitions:c}={}){let s=Fc(),f=et(),h=kl(e,{relative:i});return C.useCallback(v=>{if(NS(v,t)){v.preventDefault();let S=a!==void 0?a:ql(f)===ql(h),E=()=>s(e,{replace:S,mask:l,state:n,preventScrollReset:r,relative:i,viewTransition:u,defaultShouldRevalidate:o});c?C.startTransition(()=>E()):E()}},[f,s,h,a,l,n,t,e,r,i,u,o,c])}var aR=0,lR=()=>`__${String(++aR)}__`;function Wy(){let{router:e}=os("useSubmit"),{basename:t}=C.useContext(Oe),a=TS(),l=e.fetch,n=e.navigate;return C.useCallback(async(r,i={})=>{let{action:u,method:o,encType:c,formData:s,body:f}=LS(r,t);if(i.navigate===!1){let h=i.fetcherKey||lR();await l(h,a,i.action||u,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:s,body:f,formMethod:i.method||o,formEncType:i.encType||c,flushSync:i.flushSync})}else await n(i.action||u,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:s,body:f,formMethod:i.method||o,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:a,flushSync:i.flushSync,viewTransition:i.viewTransition})},[l,n,t,a])}function Py(e,{relative:t}={}){let{basename:a}=C.useContext(Oe),l=C.useContext(ht);I(l,"useFormAction must be used inside a RouteContext");let[n]=l.matches.slice(-1),r={...kl(e||".",{relative:t})},i=et();if(e==null){r.search=i.search;let u=new URLSearchParams(r.search),o=u.getAll("index");if(o.some(s=>s==="")){u.delete("index"),o.filter(f=>f).forEach(f=>u.append("index",f));let s=u.toString();r.search=s?`?${s}`:""}}return(!e||e===".")&&n.route.index&&(r.search=r.search?r.search.replace(/^\\?/,"?index&"):"?index"),a!=="/"&&(r.pathname=r.pathname==="/"?a:St([a,r.pathname])),ql(r)}var Gc="react-router-scroll-positions",xi={};function Xc(e,t,a,l){let n=null;return l&&(a!=="/"?n=l({...e,pathname:Mt(e.pathname,a)||e.pathname},t):n=l(e,t)),n==null&&(n=e.key),n}function Iy({getKey:e,storageKey:t}={}){let{router:a}=os("useScrollRestoration"),{restoreScrollPosition:l,preventScrollReset:n}=tR("useScrollRestoration"),{basename:r}=C.useContext(Oe),i=et(),u=Pc(),o=Vy();C.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),nR(C.useCallback(()=>{if(o.state==="idle"){let c=Xc(i,u,r,e);xi[c]=window.scrollY}try{sessionStorage.setItem(t||Gc,JSON.stringify(xi))}catch(c){Xe(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${c}).`)}window.history.scrollRestoration="auto"},[o.state,e,r,i,u,t])),typeof document<"u"&&(C.useLayoutEffect(()=>{try{let c=sessionStorage.getItem(t||Gc);c&&(xi=JSON.parse(c))}catch{}},[t]),C.useLayoutEffect(()=>{let c=a?.enableScrollRestoration(xi,()=>window.scrollY,e?(s,f)=>Xc(s,f,r,e):void 0);return()=>c&&c()},[a,r,e]),C.useLayoutEffect(()=>{if(l!==!1){if(typeof l=="number"){window.scrollTo(0,l);return}try{if(i.hash){let c=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(c){c.scrollIntoView();return}}}catch{Xe(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}n!==!0&&window.scrollTo(0,0)}},[i,l,n]))}function nR(e,t){let{capture:a}=t||{};C.useEffect(()=>{let l=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,l),()=>{window.removeEventListener("pagehide",e,l)}},[e,a])}function ev(e,{relative:t}={}){let a=C.useContext(kc);I(a!=null,"`useViewTransitionState` must be used within `react-router-dom`\'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=os("useViewTransitionState"),n=kl(e,{relative:t});if(!a.isTransitioning)return!1;let r=Mt(a.currentLocation.pathname,l)||a.currentLocation.pathname,i=Mt(a.nextLocation.pathname,l)||a.nextLocation.pathname;return Pn(n.pathname,i)!=null||Pn(n.pathname,r)!=null}var mt=A(Q()),oR=({pages:e})=>(0,mt.jsxs)(mt.Fragment,{children:[(0,mt.jsx)("nav",{children:(0,mt.jsx)("div",{className:"topBar",children:e.length>1?e.map(t=>(0,mt.jsx)("div",{className:"tabEntry",children:(0,mt.jsx)(Gi,{to:`/${t.urlPath}`,children:t.page})},`${t.urlPath} ${t.page}`)):null})}),(0,mt.jsx)("div",{id:"notificationsContainer"}),(0,mt.jsx)("div",{id:"relayContainer",children:(0,mt.jsx)(es,{})})]}),rv=oR;var wv=A(se());function iv(){let e=[],t={};function a(n){return!n.validate||n.validate(n.value,t)}function l(){for(let[n,r]of e)r(a(n))}return{object:t,addSetting(n,r){e.push([n,r])},updateSetting(n){t[n.preference]=n.value,l()},updateObject(){for(let[n]of e)t[n.preference]=n.value},isValid:a}}var uv=A(Q());function cR({label:e,onClick:t}){return(0,uv.jsx)("input",{className:"floatingButton",type:"button",value:e,onClick:t})}var qi=cR;var vv=A(se());var Zi=A(Q());function sR({expanded:e,onToggle:t,className:a,children:l}){return(0,Zi.jsxs)("button",{type:"button",className:a,"aria-expanded":e,onClick:t,children:[(0,Zi.jsx)("span",{className:`chevron${e?" open":""}`,children:"\\u25B8"}),l]})}var Qi=sR;var mv=A(se());var ov=A(se()),$t=A(Q());function fR({button:e}){let[t,a]=(0,ov.useState)(e.value==="true");return(0,$t.jsxs)("label",{className:"checkcontainer",children:[(0,$t.jsx)("input",{type:"hidden",name:e.name,value:e.value}),(0,$t.jsx)("div",{className:"toggle-track",onClick:()=>{a(!t),e.setValue((!t).toString())},children:(0,$t.jsx)("span",{className:"toggle-indicator",children:(0,$t.jsx)("span",{className:"checkMark",children:(0,$t.jsx)("svg",{viewBox:"0 0 24 24",role:"presentation","aria-hidden":"true",children:(0,$t.jsx)("path",{d:"M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"})})})})})]})}var cv=fR;var cs=A(Q());function dR({button:e}){return(0,cs.jsx)("select",{className:"dropdowncontainer",name:e.name,defaultValue:e.value,onChange:t=>e.setValue(t.target.value),children:e.dropdown.map((t,a)=>(0,cs.jsx)("option",{value:t.value,children:t.display||t.value},a))})}var sv=dR;var dv=A(Q());function hR({button:e}){return(0,dv.jsx)("input",{className:"stringcontainer",name:e.name,defaultValue:e.value,placeholder:e.placeholderText?e.placeholderText:"",onChange:t=>e.setValue(t.target.value)})}var fv=hR;var Ae=A(se()),xe=A(Q()),mR=(e,t)=>t.map(a=>e.dropdown?.find(n=>n.value.toLowerCase()===a.toLowerCase())??{display:a,value:a}),yR=e=>{let t=0;for(let l=0;l<e.length;l++)t=e.charCodeAt(l)+((t<<5)-t);let a="#";for(let l=0;l<3;l++){let n=t>>l*8&255;a+=`00${n.toString(16)}`.substr(-2)}return a},vR=({button:e})=>{let[t,a]=(0,Ae.useState)(mR(e,e.value.split(e.tagsSeperator).filter(N=>N.length>0))),[l,n]=(0,Ae.useState)(!1),[r,i]=(0,Ae.useState)(""),u=Ae.default.createRef(),o=Ae.default.createRef(),c=Ae.default.createRef(),[s,f]=(0,Ae.useState)(-1),[h,v]=(0,Ae.useState)(-1),[S,E]=(0,Ae.useState)(-1),[R,m]=(0,Ae.useState)(0),[d,y]=(0,Ae.useState)(0),p=!!e.minTags&&parseInt(e.minTags)>=t.length,b=N=>{e.setValue(N.map(U=>U.value).join(e.tagsSeperator))},z=N=>{i("");let U=[...t,N];a(U),b(U)},T=N=>{let U=t.filter((Z,yt)=>yt!==N);a(U),b(U)},D=N=>{if(N.key==="Enter"&&N.currentTarget.value.trim()!==""){let U=e.dropdown?.find(yt=>yt.display.toLowerCase()===N.currentTarget.value.toLowerCase());if(e.dropdown&&!U)return;let Z=U?U.value:N.currentTarget.value;if(!e.allowDuplicateTags&&t.some(yt=>yt.value.toLowerCase()===Z.toLowerCase()))return;z(U??{display:Z,value:Z})}else N.key==="Backspace"&&t.length&&N.currentTarget.value.length===0&&!p&&(N.preventDefault(),E(-1),T(t.length-1))},_=()=>{let N=e.allowDuplicateTags?e.dropdown:e.dropdown?.filter(U=>!t.some(Z=>Z.value===U.value));return N?r?N.filter(U=>U.display.toLowerCase().includes(r.toLowerCase())):N:[]};(0,Ae.useEffect)(()=>{l&&u.current?.focus()},[l]),(0,Ae.useEffect)(()=>{let N=()=>{document.activeElement instanceof Node&&!o.current?.contains(document.activeElement)&&n(!1)};return window.addEventListener("click",N),()=>window.removeEventListener("click",N)});let H=N=>{if(!c.current)return;let U=N.currentTarget,Z=+(U.getAttribute("data-key")??-10),yt=U.querySelector(".settingTagSingle").getBoundingClientRect();N.clientX-(yt.left+yt.width/2)>=0&&Z++,f(Z)},tt=()=>{if(h!==-1){if(s-1!==h&&s!==h){let N=s,U=[...t];U.splice(h,1),U.splice(N-(h<N?1:0),0,t[h]),a(U),b(U),E(N-(h<N?1:0))}else E(-1);v(-1),f(-1)}},Fl=!!e.maxTags&&t.length>=parseInt(e.maxTags);return(0,xe.jsxs)("div",{className:"settingTag",ref:c,children:[t.map((N,U)=>(0,xe.jsxs)(Ae.default.Fragment,{children:[h>=0&&U===0&&U===s&&s!==h&&h!==s-1?(0,xe.jsx)("div",{className:"hintTagDrop",onDragOver:Z=>{Z.preventDefault()},style:{width:`${R}px`,height:`${d}px`}}):null,h===U?(0,xe.jsx)("div",{className:"hintTagDrop hintTagDropOriginal",onDragOver:Z=>{Z.preventDefault()},style:{width:`${R}px`,height:`${d}px`,display:s===U||s-1===U?"inline":"none"}}):null,(0,xe.jsx)("div",{draggable:!0,onDragStart:Z=>{let yt=U,ss=Z.currentTarget.getBoundingClientRect().width-10,Ov=Z.currentTarget.getBoundingClientRect().height-2;setTimeout(()=>{f(yt),v(yt),m(ss),y(Ov)})},onDragEnd:()=>{tt()},onDragOver:Z=>{Z.preventDefault(),H(Z)},"data-key":U,className:`tagContainer${h===U?" hidden":""}`,children:(0,xe.jsxs)("div",{className:`settingTagSingle${U===h?" draggedItem":""}${S===U?" rearrangedTag":""}${p?"":" settingTagSingleCloseVisible"}`,style:{backgroundColor:`${yR(`${N.display} ${N.value}`)}22`},children:[(0,xe.jsx)("span",{children:N.display}),(0,xe.jsx)("div",{className:`settingTagClose${p?" hidden":""}`,onClick:()=>T(U),children:"\\xD7"})]})}),h>=0&&U+1===s&&h+1!==s&&h!==s?(0,xe.jsx)("div",{className:"tagContainer hintTagDrop",onDragOver:Z=>{Z.preventDefault()},style:{width:`${R}px`,height:`${d}px`}}):null]},`${N.display} ${N.value} ${U}`)),(0,xe.jsxs)("div",{ref:o,className:`tagContainer settingTagInput${Fl?" hidden":""}`,children:[(0,xe.jsx)("input",{type:"text",onChange:N=>i(N.target.value),placeholder:e.placeholderText??"",value:r,ref:u,onFocus:()=>n(!0),onKeyDown:D,size:10}),e.dropdown&&l&&_().length>0?(0,xe.jsx)("div",{className:"dropdownMenu",children:_().map(N=>(0,xe.jsx)("div",{onClick:()=>z(N),className:"dropdownItem",children:N.display},N.value))}):null]})]})},hv=vR;var ye=A(Q());function pR({button:e,validator:t}){let[a,l]=(0,mv.useState)(t.isValid(e));return e.setValue=n=>{e.value=n,t.updateSetting(e)},t.addSetting(e,l),(0,ye.jsxs)("tr",{className:"userPreference","data-name":e.name,children:[(0,ye.jsxs)("td",{className:"setting",children:[e.name,(0,ye.jsx)("div",{className:"settingNameHover",children:e.preference})]}),(0,ye.jsxs)("td",{className:a?"settingInput":"settingInput invalid-setting",children:[e.type==="boolean"?(0,ye.jsx)(cv,{button:e}):e.type==="dropdown"?(0,ye.jsx)(sv,{button:e}):e.type==="tags"?(0,ye.jsx)(hv,{button:e}):(0,ye.jsx)(fv,{button:e}),e.invalidReason?(0,ye.jsx)("div",{className:"invalid-reason",hidden:a,children:(0,ye.jsx)("small",{children:e.invalidReason})}):(0,ye.jsx)(ye.Fragment,{}),e.default!==void 0?(0,ye.jsx)("div",{className:"hoverBox",children:(0,ye.jsx)("small",{className:"settingDefaultHover",children:e.default!==void 0?`Default: ${e.default===""?"<Empty>":e.default}`:"Default not set"})}):(0,ye.jsx)(ye.Fragment,{})]}),(0,ye.jsx)("td",{children:e.description})]})}var yv=pR;var ki=A(Q());function gR({settings:e,validator:t}){return e.length===0?null:(0,ki.jsx)("table",{className:"relayTable",children:(0,ki.jsx)("tbody",{children:e.map(a=>(0,ki.jsx)(yv,{button:a,validator:t},a.preference))})})}var Ji=gR;var Le=A(Q());function pv({group:e,search:t,validator:a}){let[l,n]=(0,vv.useState)(!1),r=e.components.filter(f=>f.preference),i=e.components.filter(f=>f.type==="group"),u=r.filter(f=>Xl(f,t)),o=ka(e.components),c=o.filter(f=>Xl(f,t)).length;if(t&&c===0)return null;let s=t.trim()!==""||l;return(0,Le.jsxs)(Le.Fragment,{children:[(0,Le.jsx)("section",{className:"settingsGroup",style:e.color?{borderLeftColor:e.color}:void 0,children:(0,Le.jsxs)(Qi,{expanded:s,onToggle:()=>n(!l),className:"groupHeader",children:[(0,Le.jsx)("span",{className:"groupTitle",children:e.name}),(0,Le.jsx)("span",{className:"groupCount",children:t?`${c} / ${o.length}`:o.length})]})}),s?(0,Le.jsx)("div",{className:"groupBody",style:e.color?{borderLeftColor:e.color}:void 0,children:(0,Le.jsxs)("div",{className:"groupBodyInner",children:[e.description?(0,Le.jsx)("p",{className:"groupDescription",children:e.description}):null,i.length>0?(0,Le.jsx)("div",{className:"settingsSubgroups",children:i.map(f=>(0,Le.jsx)(pv,{group:f,search:t,validator:a},f.name))}):null,(0,Le.jsx)(Ji,{settings:u,validator:a})]})}):null]})}var gv=pv;var Rv=A(Q());function SR({button:e}){return(0,Rv.jsx)("input",{className:`interrupt${e.color==="primary"?" interrupt-primary":""}`,type:"submit",value:e.name,"data-name":e.name,onClick:()=>{Uc(e.actions.map(({preference:t,value:a})=>[t,a])).then(()=>Ni(e.notification||"Interrupted!"))}})}var Sv=SR;var Ka=A(se());var O=A(Q()),er=0;function RR(e,t,a,l){return a!==er&&t.day!==a?!1:!l||[...t.values,e.title??"",e.text??""].some(n=>n.toLowerCase().includes(l.toLowerCase()))}function Ev(e){let t=[];for(let a of e){let l=t[t.length-1];l&&l[0]===a.day?l[1].push(a):t.push([a.day,[a]])}return t}function ER(e,t){if(e.length>t.length){let l=e.length-t.length;e=[e[0],e.slice(1,2+l).join(":"),...e.slice(2+l)]}let a=new Array(t.length).fill("");a[0]=e[0]??"";for(let l=1;l<e.length;l++)a[t.length-e.length+l]=e[l];return a}function bv(e){return e.count>1?(0,O.jsxs)("b",{className:"trackingChipCount",children:["\\xD7",e.count]}):(0,O.jsx)(O.Fragment,{})}function bR({columns:e,events:t}){let a=t.map(n=>({event:n,day:n.day,cells:ER(n.values,e)})),l=e.map((n,r)=>r).filter(n=>a.some(r=>r.cells[n]!==""));return(0,O.jsxs)("table",{className:"trackingTable",children:[(0,O.jsx)("thead",{children:(0,O.jsx)("tr",{children:l.map(n=>(0,O.jsx)("th",{children:e[n]},`${e[n]} ${n}`))})}),(0,O.jsx)("tbody",{children:Ev(a).map(([n,r],i)=>(0,O.jsxs)(Ka.default.Fragment,{children:[(0,O.jsx)("tr",{className:"trackingTableDay",children:(0,O.jsxs)("td",{colSpan:l.length,children:["Day ",n]})}),r.map(({event:u,cells:o},c)=>(0,O.jsx)("tr",{className:c%2===1?"trackingRowEven":void 0,children:l.map((s,f)=>(0,O.jsxs)("td",{children:[o[s],f===0?bv(u):(0,O.jsx)(O.Fragment,{})]},s))},`${u.values.join(":")} ${c}`))]},`${n} ${i}`))})]})}function TR({events:e}){return(0,O.jsx)(O.Fragment,{children:Ev(e).map(([t,a],l)=>(0,O.jsxs)("div",{className:"trackingDay",children:[(0,O.jsxs)("div",{className:"trackingDayLabel",children:["Day ",t]}),(0,O.jsx)("div",{className:"trackingChips",children:a.map((n,r)=>(0,O.jsxs)("span",{className:"trackingChip",children:[n.values.join(" : "),bv(n)]},`${n.values.join(":")} ${r}`))})]},`${t} ${l}`))})}function wR({section:e,day:t,search:a}){let[l,n]=(0,Ka.useState)(!0),r=(e.events??[]).filter(c=>RR(e,c,t,a)),i=t!==er||a.trim()!=="";if(e.text&&i||!e.text&&r.length===0)return null;let u=r.reduce((c,s)=>c+s.count,0),o=i||l;return(0,O.jsxs)("div",{className:"trackingCard",children:[(0,O.jsxs)(Qi,{expanded:o,onToggle:()=>n(!l),className:"trackingCardHeader",children:[e.icon?(0,O.jsx)("img",{src:e.icon,alt:""}):(0,O.jsx)(O.Fragment,{}),(0,O.jsx)("span",{className:"trackingCardTitle",children:e.title}),u>0?(0,O.jsx)("span",{className:"trackingCardTotal",children:u}):(0,O.jsx)(O.Fragment,{})]}),(0,O.jsx)("div",{className:`trackingCardBody${o?" open":""}`,children:e.text?(0,O.jsx)("div",{className:"trackingText",children:e.text}):e.columns?(0,O.jsx)(bR,{columns:e.columns,events:r}):(0,O.jsx)(TR,{events:r})})]})}function CR({sections:e}){let[t,a]=(0,Ka.useState)(e),[l,n]=(0,Ka.useState)(er),[r,i]=(0,Ka.useState)(""),u=[...new Set(t.flatMap(c=>(c.events??[]).map(s=>s.day)))].sort((c,s)=>c-s),o=t.map((c,s)=>(0,O.jsx)(wR,{section:c,day:l,search:r},`${c.title} ${s}`)).filter(c=>c!==null);return(0,O.jsxs)("div",{className:"tracking",children:[(0,O.jsx)(qi,{label:"Refresh",onClick:()=>Lc(t).then(a)}),(0,O.jsxs)("div",{className:"trackingControls",children:[(0,O.jsxs)("div",{className:"trackingDayFilter",children:[(0,O.jsx)("button",{className:l===er?"active":"",onClick:()=>n(er),children:"All days"}),u.map(c=>(0,O.jsxs)("button",{className:l===c?"active":"",onClick:()=>n(c),children:["Day ",c]},c))]}),(0,O.jsx)("input",{className:"searchInput trackingSearch",type:"text",placeholder:"Filter...",value:r,onChange:c=>i(c.target.value)})]}),o.length===0?(0,O.jsx)("div",{className:"trackingEmpty",children:"Nothing has been tracked yet."}):(0,O.jsx)("div",{className:"trackingGrid",children:o})]})}var Tv=CR;var ve=A(Q());function DR({components:e}){let[t,a]=(0,wv.useState)(""),l=t.trim(),n=ka(e),r=n.filter(f=>Xl(f,l)).length,i=iv();for(let f of n)i.object[f.preference]=f.value;let u=[],o;for(let f of e){if(f.preference){o||(o=[],u.push(o)),o.push(f);continue}u.push(f),o=void 0}let c=u.map((f,h)=>{if(Array.isArray(f)){let v=f.filter(S=>Xl(S,l));return(0,ve.jsx)(Ji,{settings:v,validator:i},`Table ${h}`)}switch(f.type){case"group":return(0,ve.jsx)(gv,{group:f,search:l,validator:i},`Group ${f.name} ${h}`);case"html":{let v=f;return v.data?(0,ve.jsx)("div",{dangerouslySetInnerHTML:{__html:v.data}},`HTML ${h}`):null}case"interrupt":return(0,ve.jsx)(Sv,{button:f},`Interrupt ${h}`);case"tracking":return(0,ve.jsx)(Tv,{sections:f.sections},`Tracking ${h}`);default:return null}});if(i.updateObject(),n.length===0)return(0,ve.jsx)(ve.Fragment,{children:c});let s=0;for(;s<u.length&&!Array.isArray(u[s])&&u[s].type==="interrupt";)s++;return(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(qi,{label:"Save",onClick:()=>oy(n).then(f=>{for(let h of f)Ni(h)})}),(0,ve.jsxs)("div",{className:"topRow",children:[(0,ve.jsx)("div",{className:"topRowSide",children:(0,ve.jsxs)("div",{className:"settingsSearchBar",children:[(0,ve.jsx)("input",{className:"searchInput",type:"text",placeholder:"Search settings...",value:t,onChange:f=>a(f.target.value)}),l?(0,ve.jsxs)("span",{className:"searchCount",children:[r," setting",r===1?"":"s"," found"]}):null]})}),(0,ve.jsx)("div",{className:"topRowCenter",children:c.slice(0,s)}),(0,ve.jsx)("div",{className:"topRowSide","aria-hidden":"true"})]}),c.slice(s)]})}var Cv=DR;var Ot=A(Q());function AR({pages:e}){return(0,Ot.jsx)(is,{children:(0,Ot.jsx)(as,{children:(0,Ot.jsxs)(Jl,{element:(0,Ot.jsx)(rv,{pages:e}),children:[e.map(t=>(0,Ot.jsx)(Jl,{path:`/${t.urlPath}`,element:(0,Ot.jsx)(Cv,{components:t.components})},`${t.urlPath} ${t.page}`)),(0,Ot.jsx)(Jl,{path:"*",element:(0,Ot.jsx)(Ic,{to:`/${e[0].urlPath}`,replace:!0})})]})})})}var Dv=AR;var Mv=A(Q());getData(e=>{Promise.all([iy(e),uy(e)]).then(()=>{let t=document.getElementById("root");(0,Av.createRoot)(t).render((0,Mv.jsx)(Dv,{pages:e}))})});})();\n/*! Bundled license information:\n\nscheduler/cjs/scheduler.production.js:\n  (**\n   * @license React\n   * scheduler.production.js\n   *\n   * Copyright (c) Meta Platforms, Inc. and affiliates.\n   *\n   * This source code is licensed under the MIT license found in the\n   * LICENSE file in the root directory of this source tree.\n   *)\n\nreact/cjs/react.production.js:\n  (**\n   * @license React\n   * react.production.js\n   *\n   * Copyright (c) Meta Platforms, Inc. and affiliates.\n   *\n   * This source code is licensed under the MIT license found in the\n   * LICENSE file in the root directory of this source tree.\n   *)\n\nreact-dom/cjs/react-dom.production.js:\n  (**\n   * @license React\n   * react-dom.production.js\n   *\n   * Copyright (c) Meta Platforms, Inc. and affiliates.\n   *\n   * This source code is licensed under the MIT license found in the\n   * LICENSE file in the root directory of this source tree.\n   *)\n\nreact-dom/cjs/react-dom-client.production.js:\n  (**\n   * @license React\n   * react-dom-client.production.js\n   *\n   * Copyright (c) Meta Platforms, Inc. and affiliates.\n   *\n   * This source code is licensed under the MIT license found in the\n   * LICENSE file in the root directory of this source tree.\n   *)\n\nreact/cjs/react-jsx-runtime.production.js:\n  (**\n   * @license React\n   * react-jsx-runtime.production.js\n   *\n   * Copyright (c) Meta Platforms, Inc. and affiliates.\n   *\n   * This source code is licensed under the MIT license found in the\n   * LICENSE file in the root directory of this source tree.\n   *)\n\nreact-router/dist/development/chunk-KS7C4IRE.mjs:\nreact-router/dist/development/index.mjs:\n  (**\n   * react-router v7.18.1\n   *\n   * Copyright (c) Remix Software Inc.\n   *\n   * This source code is licensed under the MIT license found in the\n   * LICENSE.md file in the root directory of this source tree.\n   *\n   * @license MIT\n   *)\n*/\n';
  }
});

// data:setting_groups
var require_setting_groups = __commonJS({
  "data:setting_groups"(exports, module2) {
    module2.exports = { anytime: { name: "General", description: "These settings can be changed at any time and takes effect immediately.", color: "#4cc9f0", children: { "anytime/maximize": { name: "Maximize" }, "anytime/diet": { name: "Diet" }, "anytime/pulls": { name: "Pulls" }, "anytime/prices": { name: "Prices" } } }, iotm: { name: "Iotm Settings", description: "Settings for items bound to accounts", color: "#22c3a6", children: { "iotm/guzzler": { name: "Guzzler (2020)" }, "iotm/mushroom": { name: "Mushroom Garden (2020)" }, "iotm/moonspoon": { name: "Moon Rune Spoon (2019)" }, "iotm/fortune": { name: "Clan Fortune Teller (2018)" }, "iotm/ashton": { name: "Ashton Martin (2017)" }, "iotm/floundry": { name: "Floundry (2016)" }, "iotm/sourceterminal": { name: "Source Terminal (2016)" }, "iotm/teatree": { name: "Tea Tree (2015)" } } }, pre: { name: "Initial Ascension Defaults", description: "Next time we initialize settings for autoscend this will be used to determine what we should set some post type settings to.", color: "#f2c14e" }, post: { name: "Ascension Defaults", description: "Settings for this ascension", color: "#7bd88f" }, action: { name: "Auto Triggers", description: "This causes something to immediately (or when reasonable) happen.", color: "#b07fd8" }, sharing: { name: "Other", description: "Allows sharing game data.", color: "#f28d6b" } };
  }
});

// data:autoscend_settings
var require_autoscend_settings = __commonJS({
  "data:autoscend_settings"(exports, module2) {
    module2.exports = { action: [{ name: "Auto Interrupt", property: "auto_interrupt", type: "boolean", description: "Script will abort after the next action is finished (instead of mid turn which can cause problems). Will be reset to false after every time it is used.", tags: "" }, { name: "Auto Stop", property: "auto_stop", type: "boolean", description: "Script will gracefully stop (not abort) before or after attempting to adventure somewhere, but not during the pre or post adventure script. This is an alternative to abort, where you do not want to kill the entire script chain. Eg, when you're calling autoscend as part of your day in an advanced setup.", tags: "" }, { name: "Debugging Stop", property: "auto_debugging", type: "boolean", description: "Every time you run the script it will perform one adventure and then stop by setting auto_interrupt = true", tags: "" }, { name: "Quest Paranoia", property: "auto_paranoia", type: "integer", description: "If quest tracking is broken enable this. It determines how often should we refresh quests. measured in adventures. -1 is never. 1 = every single adventure", tags: "" }, { name: "Inventory Paranoia", property: "auto_inv_paranoia", type: "boolean", description: "If item drop tracking is broken enable this. It will refresh inventory every loop.", tags: "" }, { name: "Newbie Override", property: "auto_newbieOverride", type: "boolean", description: "If true will override newbie block once then set itself to false. Newbie block is enabled used when you fight a crate (please report crate fighting) or when you spent too many adventures in a zone", tags: "" }, { name: "Disable Pre & Post Adv Scripts", property: "auto_disableAdventureHandling", type: "boolean", description: "When true this prevents preadventure and postadventure scripts from running. resets every loop.", tags: "" }, { name: "Disable Familiar Changing", property: "auto_disableFamiliarChanging", type: "boolean", description: "When true this prevents familiar changes. resets every loop.", tags: "" }, { name: "Combat Directive", property: "auto_combatDirective", type: "string", description: "An action to execute at the start of next combat. resets every loop.", tags: "" }, { name: "Interrupt Zones", property: "auto_interruptZones", type: "string", description: "Semicolon-separated list of zones to abort in before starting the first adventure.", tags: "" }], anytime: [{ name: "Action Delay", property: "auto_delayTimer", type: "integer", description: "Sets the delay before each action, default is 1 second(s). It is not recommended to reduce this below 1.", tags: "" }, { name: "Powerleveling Delay", property: "auto_powerLevelTimer", type: "integer", description: "Delay in seconds before each time we spend an adv powerleveling. default is 10 sec. lowest valid value is 1.", tags: "" }, { name: "Stay In Run", property: "auto_stayInRun", type: "boolean", description: "If true, we stop when the King can be freed but do not free the King. Paths with a choice at liberation time will always stayInRun regardless of this setting.", tags: "" }, { name: "Use Confidence Buff", property: "auto_confidence", type: "boolean", description: "If true, we'll get the confidence buff instead of breaking the mirror. Good if your combat suite isn't very fleshed out yet, since it makes the Naughty Sorceress dramatically easier.", tags: "" }, { name: "Blacklist Familiars", property: "auto_blacklistFamiliar", type: "string", description: "A semi-colon separated string of familiar names that we do not want to use. They still may get used but this will minimize their usage.", tags: "" }, { name: "Consider Galaktik", property: "auto_considerGalaktik", type: "boolean", description: "When true autoscend may automatically enable galaktik quest for this run if it decides it is needed.", tags: "" }, { name: "Skip Unlocking Guild", property: "auto_skipUnlockGuild", type: "boolean", description: "When true, don't unlock the guild.", tags: "" }, { name: "Save Adventures Override", property: "auto_save_adv_override", type: "integer", description: "Set an override to amount of adv to save at end of day. Set to -1 to handle this automatically.", tags: "" }, { name: "ML Safety Limit", property: "auto_MLSafetyLimit", type: "integer", description: "If set this will be the (approximate) cap for +ML. WARNING: Certain conditions may require the script to exceed this by a small margin. For best results set this 10 below the maximum ML you can handle. Setting to -1 will cause the lowest possible ML to be equipped, including going negative if possible - this can cause non-optimal gear to be equipped.", tags: "" }, { name: "Disregard Instant Karma", property: "auto_disregardInstantKarma", type: "boolean", description: "When true, the script will not scale back ML after reaching Level 13, if you also set auto_MLSafetyLimit to 999 the script will passively power level. WARNING: You are unlikely to get Instant Karma (This is useful if your run preceeds The Sea, The Basement, or Dungeons)", tags: "" }, { name: "Second Place Or Bust", property: "auto_secondPlaceOrBust", type: "boolean", description: "When true, abort before each tower test if we can't get to second place.", tags: "" }, { name: "Log Level", property: "auto_log_level", type: "int", description: "valid choices: 0 = error. 1 = warning. 2 = info. 3 = debug. Sets the level of logging which autoscend will output to gCLI and session log. Defaults to 3 (debug).", tags: "" }, { name: "Restore Log Level", property: "auto_log_level_restore", type: "int", description: "valid choices: 0 = no extra debugging. 1 = log the stages and their results 2 = log restorer data dump. Sets the level of extra debug logging which autoscend restore code will output to gCLI and session log. Defaults to 0. Note that this is just for extra debugging.", tags: "" }, { name: "Use Blood Bond For Restores", property: "auto_restoreUseBloodBond", type: "boolean", description: "Whether to use extra hp to cast blood bond. Blood bond has a recurring HP drain, set to false if you are worried about getting killed or wasting resources healing. Defaults to false.", tags: "" }, { name: "Force Fat Loot Token", property: "auto_forceFatLootToken", type: "boolean", description: "force grabbing the fat loot tokens from daily dungeon and fantasy realm every day even if you already have enough for this run. This is mainly for new accounts who want to get the cubeling and/or skillbooks.", tags: "" }, { name: "Enable PVP", property: "auto_pvpEnable", type: "boolean", description: "Break the hippy stone to unlock PvP? This may also let autoscend collect low-effort PVP items.", tags: "" }, { name: "Tower Break Location", property: "auto_towerBreak", type: "string", description: "Where should we break in the tower? (e.g. wall of skin, wall of bones, shadow, ns). Blank by default.", tags: "" }, { name: "Ignore Restore Failure", property: "auto_ignoreRestoreFailure", type: "boolean", description: "if true we will always ignore failure to restore MP or HP and just continue playing", tags: "" }, { name: "Workshed Item", property: "auto_workshed", type: "string", description: "What workshed item should we initialize with? If blank or invalid, we will change workshed based on priorities. There are some shorthands or you can use the full name of the workshed item. Some worksheds are not implemented so unless you are certain you want to deviate, use auto.", tags: "" }, { name: "Rollover Abort Time", property: "auto_stopMinutesToRollover", type: "int", description: "How many minutes before rollover do we need to start getting ready for bed?", tags: "" }, { name: "Use Clover At A-Boo Peak", property: "auto_abooclover", type: "boolean", description: "Are we considering using a clover at A-Boo Peak?", tags: "" }, { name: "Last 'end of day' for Clan", property: "auto_clanstuff", type: "string", description: "What was the last day we did 'end of day' clan stuff.", tags: "" }, { name: "Ignore Restore Failure Today", property: "_auto_ignoreRestoreFailureToday", type: "boolean", description: "if true we will for today only ignore failure to restore MP or HP and just continue playing", tags: "" }, { name: "Keep Cursed Items (AoSOL)", property: "auto_aosol_dontUnCurse", type: "boolean", description: "Avatar of Shadows Over Loathing: if true will keep all cursed items.", tags: "" }], post: [{ name: "Get Steel Organ", property: "auto_getSteelOrgan", type: "boolean", description: "Get Steel Organ in this ascension?", tags: "" }, { name: "Get Beehive", property: "auto_getBeehive", type: "boolean", description: "Get Beehive in this ascension?", tags: "" }, { name: "Get Richard's Star Key", property: "auto_getStarKey", type: "boolean", description: "Get Richard's Star Key in this ascension?", tags: "" }, { name: "Open Hole In The Sky", property: "auto_holeinthesky", type: "boolean", description: "Open the Hole in the Sky in this ascension?", tags: "" }, { name: "Fight For Hippies", property: "auto_hippyInstead", type: "boolean", description: "Fight on the side of the hippies instead of the Frat Warriors in this ascension?", tags: "" }, { name: "Skip Flyer Quest", property: "auto_ignoreFlyer", type: "boolean", description: "Do not do the flyer quest in this ascension? recommended to set true if fighting for the hippies.", tags: "" }, { name: "Get Wand Of Nagamar", property: "auto_wandOfNagamar", type: "boolean", description: "Do we need to get a Wand of Nagamar in this ascension?", tags: "" }, { name: "Don't Banish Phylums", property: "auto_dontPhylumBanish", type: "boolean", description: "If false will banish enemy phyla. Banishing should save some turns, but can interfere with the routing, and may mess up later banishes / tracks.", tags: "" }, { name: "Expected Day Count", property: "auto_runDayCount", type: "integer", description: "How many days do you think your run will take? Defaults to 2.", tags: "" }, { name: "Orc Chasm Bridge Trolled", property: "auto_chasmBusted", type: "boolean", description: "Has the orc chasm bridge been 'trolled yet? Ed only.", tags: "" }, { name: "Day 1 DNA Hybridization", property: "auto_day1_dna", type: "string", description: "'finished' if we have hybridized ourselves at the start of Ascension.", tags: "" }, { name: "Day Initialized", property: "auto_day_init", type: "string", description: "Current daycount if we finished initializing today.", tags: "" }, { name: "Get Boning Knife", property: "auto_getBoningKnife", type: "boolean", description: "Do we want Boning Knife this ascension?", tags: "" }, { name: "Gnasir Found (Desert Quest)", property: "auto_gnasirUnlocked", type: "boolean", description: "Have we found gnasir in the Desert?", tags: "" }, { name: "Grimstone For Fancy Oil Painting", property: "auto_grimstoneFancyOilPainting", type: "boolean", description: "do grimstone for fancy oil painting this ascension?", tags: "" }, { name: "Grimstone For Ornate Dowsing Rod", property: "auto_grimstoneOrnateDowsingRod", type: "boolean", description: "do grimstone for ornate dowsing rod this ascension?", tags: "" }, { name: "Hedge Maze Speed", property: "auto_hedge", type: "string", description: "'fast' or 'slow', determining how quickly we want to finish the Hedge Maze.", tags: "" }, { name: "Last Powerleveling Level", property: "auto_powerLevelLastLevel", type: "string", description: "Last Level that we had nothing to do.", tags: "" }, { name: "Powerleveling Adventure Count", property: "auto_powerLevelAdvCount", type: "string", description: "Adventures count of times we had nothing to do.", tags: "" }, { name: "Last Powerleveling Adventure", property: "auto_powerLevelLastAttempted", type: "string", description: "Last adventure that we did nothing on.", tags: "" }, { name: "Mysterious Island War: Skip Nuns Quest", property: "auto_skipNuns", type: "boolean", description: "Skip nuns quest this ascension?", tags: "" }, { name: "100% Familiar", property: "auto_100familiar", type: "string", description: "If a familiar type, do not allow familiar switching (for 100% runs). Otherwise, can be none or blank.", tags: "" }, { name: "Beaten Up Count", property: "auto_beatenUpCount", type: "integer", description: "How many times were we beaten up this ascension. Affects ML and whether we try to heal or abort when we get beaten up.", tags: "" }, { name: "Last Initialized Ascension", property: "auto_doneInitialize", type: "integer", description: "Indicates last ascension that we initialized with the script.", tags: "" }, { name: "Last Snake Oil Extraction Day", property: "auto_noSnakeOil", type: "integer", description: "Last day that we could no longer Extract Oil.", tags: "" }, { name: "Talismans Of Renenutet Bought", property: "auto_renenutetBought", type: "integer", description: "Number of Talisman of Renenutet's bought on last tracking.", tags: "" }, { name: "Bat-oomerang Tracker Day", property: "auto_batoomerangDay", type: "integer", description: "Part of Replica Bat-oomerang Tracker", tags: "" }, { name: "Bat-oomerang Tracker Use", property: "auto_batoomerangUse", type: "integer", description: "Part of Replica Bat-oomerang Tracker", tags: "" }, { name: "Last A-Boo Peak Consideration", property: "_auto_lastABooConsider", type: "integer", description: "Last turn that we considered doing A-Boo Peak", tags: "" }, { name: "A-Boo Peak Loop Fix Tracker", property: "_auto_lastABooCycleFix", type: "integer", description: "Tracker to prevent us infinitely looping on A-Boo Peak", tags: "" }, { name: "Witchess Battle Tracker", property: "_auto_witchessBattles", type: "integer", description: "Tracker for Witchess Combats (yes, this is actually needed).", tags: "" }, { name: "Need Legs Before Ka Farming", property: "auto_needLegs", type: "boolean", description: "In Ed, do we require getting legs before trying to Ka farm?", tags: "" }, { name: "Have Oven", property: "auto_haveoven", type: "boolean", description: "Track oven status. If you have an oven this should be true. But we can't always check the campground.", tags: "" }, { name: "Galaktik Sidequest", property: "auto_doGalaktik", type: "boolean", description: "Do Galaktik optional sidequest this ascension?", tags: "" }, { name: "Avoid Ninja Snowmen Assassins", property: "auto_L8_ninjaAssassinFail", type: "boolean", description: "True means we think we cannot defeat ninja snowmen assassins and are thus avoiding them this ascension. We will not copy them nor adventure in the lair of the ninja snowmen", tags: "" }, { name: "Use Extreme Slope Instead", property: "auto_L8_extremeInstead", type: "boolean", description: "True means we want to adventure in the extreme slope path instead of the ninja snowmen lair this ascension.", tags: "" }, { name: "Pending A-Boo Clue Turn", property: "auto_aboopending", type: "integer", description: "The last turn of a pending A-Boo Clue. 0 if no clue active.", tags: "" }], pre: [{ name: "Get Steel Organ", property: "auto_getSteelOrgan_initialize", type: "boolean", description: "When we initialize an ascension this will be copied to auto_getSteelOrgan", tags: "" }, { name: "Do Galaktik Sidequest", property: "auto_doGalaktik_initialize", type: "boolean", description: "When we initialize an ascension this will be copied to auto_doGalaktik", tags: "" }], sharing: [{ name: "Disable Spading Sharing", property: "auto_disableExcavator", type: "boolean", description: "When set to true will disable automatically sending spading data via the Extractor script", tags: "" }], "iotm/ashton": [{ name: "Asdon Martin Fuel, Item Reserves", property: "auto_ashtonLimit", type: "integer", description: "If set, makes sure you save X of an item before feeding it to the Asdon Martin (ignores Soda Bread).", tags: "" }], "iotm/floundry": [{ name: "Floundry Item", property: "auto_floundryChoice", type: "string", description: "Force floundry usage. Must use the item name (Use ; to separate by daycount, leave blank to skip a day).", tags: "" }], "iotm/fortune": [{ name: "Hide Zatara Consults", property: "auto_hideAdultery", type: "boolean", description: "When true, automatically deletes Zatara Consults from Kmails during end of day cleanup.", tags: "fortune teller" }, { name: "Optimize Zatara Consults", property: "auto_optimizeConsultsInRun", type: "boolean", description: "When true, optimize our consults in run to get Ascension relevant rewards.", tags: "fortune teller" }, { name: "Zatara Consult Clan", property: "auto_consultClan", type: "string", description: "The clan name of the player you want to do Zatara consults with.", tags: "fortune teller" }, { name: "Zatara Consult Player", property: "auto_consultChoice", type: "string", description: "The name of the player you want to do Zatara consults with.", tags: "fortune teller" }], "iotm/guzzler": [{ name: "Skip Guzzlr Cocktail Quest", property: "auto_skipGuzzlrCocktailSet", type: "boolean", description: "If true will not accept and abandon a Platinum Guzzlr quest for the cocktail set.", tags: "" }], "iotm/moonspoon": [{ name: "Moon Tune Spoon Sign", property: "auto_spoonsign", type: "string", description: "What sign to change to with the hewn moon-rune spoon after finishing any business in the current sign. If blank or invalid, we won't switch automatically. Can be set to any of the 9 main sign names, or knoll/canadia/gnomad to automatically select the appropriate sign within that zone based on your mainstat. Also some shorthands are allowed in case you forgot which moonsign is which, such as famweight/clover/food/booze. You will be prompted to confirm that you actually do want to change signs automatically once per ascension (although it will automatically assume that you do after 15 seconds of inactivity), so forgetting to change the value in advance should not be a concern.", tags: "" }], "iotm/mushroom": [{ name: "Mushroom Garden Pick", property: "auto_mushroomGardenGrowth", type: "integer", description: "Picks the mushroom when growth reaches the given value (or higher). Defaults to 1 to pick every day, capped at 11.", tags: "" }], "iotm/sourceterminal": [{ name: "Source Terminal: Extrude Choice", property: "auto_extrudeChoice", type: "string", description: ": separated by day, ; separated by order. For Source Terminal. Use food, booze. Defaults to booze for any empty fields.", tags: "" }], "iotm/teatree": [{ name: "Tea Tree Choice", property: "auto_teaChoice", type: "string", description: "When using the tea tree, grab this 'tea'. Must use a string that acceptable to Mafia's 'teatree' command (Use ; to separate by daycount, leave blank to skip a day).", tags: "" }], "anytime/diet": [{ name: "Limit Consumption", property: "auto_limitConsume", type: "boolean", description: "When true will not eat or drink anything automatically.", tags: "" }, { name: "Skip Nightcap", property: "auto_skipNightcap", type: "boolean", description: "When true will not get overdrunk at the end of the day", tags: "" }, { name: "Min Adventures Per Fill", property: "auto_consumeMinAdvPerFill", type: "float", description: "The minimum adventures per fill to consider for a consumable before eating or drinking it. Defaults to 0.0 and will consume whatever is available if necessary.", tags: "" }, { name: "Don't Consume Key Lime Pies", property: "auto_dontConsumeKeyLimePies", type: "boolean", description: "When false, will pull and eat key lime pies if we require keys. Does nothing if auto_limitConsume is true;", tags: "" }, { name: "Don't Consume Legend Pizzas", property: "auto_dontConsumeLegendPizzas", type: "boolean", description: "When false, will craft or pull and eat Cookbookbat Legend Pizzas. Does nothing if auto_limitConsume is true;", tags: "" }, { name: "Slow Steel Organ", property: "auto_slowSteelOrgan", type: "boolean", description: "When true, don't immediately go for the Steel Organ (assuming we want a steel organ).", tags: "" }], "anytime/maximize": [{ name: "Maximizer Baseline", property: "auto_maximize_baseline", type: "string", description: 'The string to use as the baseline for the maximizer when deciding gear. If this is blank or "default", it will use a generated maximizer statement that takes your current situation in to account somewhat. Use "{default}" if you want that string to be injected into your provided statement, eg if you were trying to wear a certain item as much as possible "+10000 bonus iotm_name, {default}" to get the best of both worlds.', tags: "equipment" }, { name: "Hat Override", property: "auto_equipment_override_hat", type: "string", description: "A semicolon separated list of overrides for the hat slot.", tags: "equipment" }, { name: "Back Override", property: "auto_equipment_override_back", type: "string", description: "A semicolon separated list of overrides for the back slot.", tags: "equipment" }, { name: "Shirt Override", property: "auto_equipment_override_shirt", type: "string", description: "A semicolon separated list of overrides for the shirt slot.", tags: "equipment" }, { name: "Weapon Override", property: "auto_equipment_override_weapon", type: "string", description: "A semicolon separated list of overrides for the weapon slot.", tags: "equipment" }, { name: "Off-hand Override", property: "auto_equipment_override_off-hand", type: "string", description: "A semicolon separated list of overrides for the off-hand slot.", tags: "equipment" }, { name: "Pants Override", property: "auto_equipment_override_pants", type: "string", description: "A semicolon separated list of overrides for the pants slot.", tags: "equipment" }, { name: "Accessory Override", property: "auto_equipment_override_acc", type: "string", description: "A semicolon separated list of overrides for the acc slots.", tags: "equipment" }, { name: "Familiar Equipment Override", property: "auto_equipment_override_familiar", type: "string", description: "A semicolon separated list of overrides for the familiar equipment slot.", tags: "equipment" }, { name: "Debug Maximizer", property: "auto_debug_maximizer", type: "boolean", description: "Help debug maximizer issue where it is not equipping a weapon", tags: "equipment" }], "anytime/prices": [{ name: "Consumable Price Limit", property: "auto_consumablePriceLimit", type: "int", description: "Max price of consumables to eat (including pulls). Will still not go above mafia autobuy limit.", tags: "" }, { name: "Max Candy Price", property: "auto_maxCandyPrice", type: "integer", description: "Max allowable price per candy for Rethinking Candy (default 2500)", tags: "" }], "anytime/pulls": [{ name: "Pull Desirability Weight", property: "auto_consumePullDesirability", type: "float", description: 'This value is used as a rough estimate of how much a pull is "worth" when the consumption algorithm is considering using pulls. Higher values will make it more conservative and vice-versa. Defaults to 5.0.', tags: "" }, { name: "Skip Bedtime Pulls", property: "auto_bedtime_pulls_skip", type: "boolean", description: "If true will not automatically pull any items at the end of day.", tags: "" }, { name: "Bedtime Pulls PVP Multiplier", property: "auto_bedtime_pulls_pvp_multi", type: "float", description: "Set the value of X for the formula for pull of rollover equipment. desireability = 1*rollover adventures + X*rollover PVP fights (if hippy stone is unlocked).", tags: "" }, { name: "Bedtime Pulls Min Desirability", property: "auto_bedtime_pulls_min_desirability", type: "float", description: "During bedtime we pull and wear equipment that gives extra adventures and optionally PVP fights on rollover. This variable determines the minimum allowed score improvement compared to current equipment before we consider pulling it.", tags: "" }] };
  }
});

// data:tracking
var require_tracking = __commonJS({
  "data:tracking"(exports, module2) {
    module2.exports = { path: { title: "Ascension Path", property: "auto_tracker_path", columns: ["Subject", "Detail", "Turn"] }, banishes: { title: "Banishes", property: "auto_banishes", columns: ["Monster", "Location", "Type", "Turn"] }, freeRuns: { title: "Free Runs", property: "auto_freeruns", columns: ["Monster", "Type", "Turn"] }, yellowRays: { title: "Yellow Rays", property: "auto_yellowRays", columns: ["Monster", "Source", "Turn"], icon: "images/itemimages/eyes.gif" }, sniffing: { title: "Sniffing", property: "auto_sniffs", columns: ["Monster", "Source", "Turn"] }, copies: { title: "Copies", property: "auto_copies", columns: ["Monster", "Source", "Turn"] }, replaces: { title: "Replaces", property: "auto_replaces", columns: ["Monster", "Source", "Turn"] }, instakills: { title: "Instakills", property: "auto_instakill", columns: ["Monster", "Source", "Turn"] }, forcedNoncombats: { title: "Forced Noncombats", property: "auto_forcedNC", columns: ["Source", "Location", "Encounter", "Turn"] }, stomach: { title: "Stomach", property: "auto_eaten", columns: ["Item", "Detail", "Turn"] }, liver: { title: "Liver", property: "auto_drunken", columns: ["Item", "Detail", "Turn"] }, spleen: { title: "Spleen", property: "auto_chewed", columns: ["Item", "Detail", "Turn"] }, wishes: { title: "Wishes", property: "auto_wishes", columns: ["Source", "Location", "Wish", "Turn"] }, luckyAdventures: { title: "Lucky Adventures", property: "auto_lucky", columns: ["Source", "Location", "Encounter", "Turn"] }, lashOfTheCobra: { title: "Lash of the Cobra", property: "auto_lashes", columns: ["Monster", "Turn"], icon: "images/itemimages/cobrahead.gif", condition: "isActuallyEd" }, talismanOfRenenutet: { title: "Talisman of Renenutet", property: "auto_renenutet", columns: ["Monster", "Turn"], icon: "images/itemimages/tal_r.gif", condition: "isActuallyEd" }, ocrsFunTimes: { title: "OCRS Fun Times", property: "auto_funTracker", columns: ["Monster", "Fun", "Turn"], condition: "inOcrs" }, pulls: { title: "Pulls", property: "auto_pulls", columns: ["Item", "Turn"], condition: "notHardcore" }, powerfulGlove: { title: "Powerful Glove", property: "auto_powerfulglove", columns: ["Skill", "Turn"], condition: "hasPowerfulGlove" }, iotmsUsed: { title: "IOTM's Used", property: "auto_iotm_claim", columns: ["Source", "Type", "Turn"] }, monstersMapped: { title: "Monsters Mapped", property: "auto_mapperidot", columns: ["Source", "Location", "Monster", "Turn"] }, otherStuff: { title: "Other Stuff", property: "auto_otherstuff", columns: ["Event", "Location", "Detail", "Turn"] } };
  }
});

// packages/relay/src/relay_autoscend.ts
var relay_autoscend_exports = {};
__export(relay_autoscend_exports, {
  main: () => main
});
module.exports = __toCommonJS(relay_autoscend_exports);
var import_kolmafia140 = require("kolmafia");

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[_n++]
          };
        },
        e: function e2(r2) {
          throw r2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r2 = t.next();
      return a = r2.done, r2;
    },
    e: function e2(r2) {
      u = true, o = r2;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// packages/kolmafia/src/autoscend.ts
var import_kolmafia135 = require("kolmafia");

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// node_modules/libram/dist/template-string.js
var import_kolmafia = require("kolmafia");

// node_modules/libram/dist/utils.js
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(
    str.split("")
  ), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function concatTemplateString2(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => acc + literal + (placeholders[i] ?? ""), "");
};
var handleTypeGetError = (Type, error) => {
  var message = `${error}`;
  var match = message.match(RegExp(`Bad ${Type.name.toLowerCase()} value: .*`));
  if (match) {
    (0, import_kolmafia.print)(`${match[0]}; if you're certain that this ${Type.name} exists and is spelled correctly, please update KoLMafia`, "red");
  } else {
    (0, import_kolmafia.print)(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction2(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia.abort)();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = (name) => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = (Type) => {
  var tagFunction = function tagFunction2(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia.abort)();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
var $bounty = createSingleConstant(import_kolmafia.Bounty, import_kolmafia.toBounty);
var $bounties = createPluralConstant(import_kolmafia.Bounty);
var $class = createSingleConstant(import_kolmafia.Class, import_kolmafia.toClass);
var $classes = createPluralConstant(import_kolmafia.Class);
var $coinmaster = createSingleConstant(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster);
var $coinmasters = createPluralConstant(import_kolmafia.Coinmaster);
var $effect = createSingleConstant(import_kolmafia.Effect, import_kolmafia.toEffect);
var $effects = createPluralConstant(import_kolmafia.Effect);
var $element = createSingleConstant(import_kolmafia.Element, import_kolmafia.toElement);
var $elements = createPluralConstant(import_kolmafia.Element);
var $familiar = createSingleConstant(import_kolmafia.Familiar, import_kolmafia.toFamiliar);
var $familiars = createPluralConstant(import_kolmafia.Familiar);
var $item = createSingleConstant(import_kolmafia.Item, import_kolmafia.toItem);
var $items = createPluralConstant(import_kolmafia.Item);
var $location = createSingleConstant(import_kolmafia.Location, import_kolmafia.toLocation);
var $locations = createPluralConstant(import_kolmafia.Location);
var $modifier = createSingleConstant(import_kolmafia.Modifier, import_kolmafia.toModifier);
var $modifiers = createPluralConstant(import_kolmafia.Modifier);
var $monster = createSingleConstant(import_kolmafia.Monster, import_kolmafia.toMonster);
var $monsters = createPluralConstant(import_kolmafia.Monster);
var $path = createSingleConstant(import_kolmafia.Path, import_kolmafia.toPath);
var $paths = createPluralConstant(import_kolmafia.Path);
var $phylum = createSingleConstant(import_kolmafia.Phylum, import_kolmafia.toPhylum);
var $phyla = createPluralConstant(import_kolmafia.Phylum);
var $servant = createSingleConstant(import_kolmafia.Servant, import_kolmafia.toServant);
var $servants = createPluralConstant(import_kolmafia.Servant);
var $skill = createSingleConstant(import_kolmafia.Skill, import_kolmafia.toSkill);
var $skills = createPluralConstant(import_kolmafia.Skill);
var $slot = createSingleConstant(import_kolmafia.Slot, import_kolmafia.toSlot);
var $slots = createPluralConstant(import_kolmafia.Slot);
var $stat = createSingleConstant(import_kolmafia.Stat, import_kolmafia.toStat);
var $stats = createPluralConstant(import_kolmafia.Stat);
var $thrall = createSingleConstant(import_kolmafia.Thrall, import_kolmafia.toThrall);
var $thralls = createPluralConstant(import_kolmafia.Thrall);

// packages/kolmafia/src/autoscend/auto_acquire.ts
var import_kolmafia123 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_consume.ts
var import_kolmafia122 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_buff.ts
var import_kolmafia121 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_adventure.ts
var import_kolmafia120 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_util.ts
var import_kolmafia119 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_equipment.ts
var import_kolmafia114 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_familiar.ts
var import_kolmafia113 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2014.ts
var import_kolmafia112 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_powerlevel.ts
var import_kolmafia111 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_providers.ts
var import_kolmafia110 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_restore.ts
var import_kolmafia108 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/clan.ts
var import_kolmafia107 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/avatar_of_boris.ts
var import_kolmafia3 = require("kolmafia");

// packages/kolmafia/src/autoscend/utils/kolmafiaUtils.ts
var import_kolmafia2 = require("kolmafia");
var AshMatcher = /* @__PURE__ */ (function() {
  function AshMatcher2(pattern, string) {
    _classCallCheck(this, AshMatcher2);
    _defineProperty(this, "pattern", void 0);
    _defineProperty(this, "string", void 0);
    _defineProperty(this, "match", null);
    _defineProperty(this, "appendPosition", 0);
    this.pattern = new RegExp(pattern, "gs");
    this.string = string;
  }
  return _createClass(AshMatcher2, [{ key: "find", value: function find() {
    return (this.match = this.pattern.exec(this.string)) !== null;
  } }, {
    key: "group",
    value: function group() {
      var _group = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (!this.match) return "";
      if (typeof _group === "number")
        return this.match[_group] !== void 0 ? this.match[_group] : "";
      return this.match.groups && this.match.groups[_group] !== void 0 ? this.match.groups[_group] : "";
    }
    // [start, end] for a group, or [-1, -1] if it didn't participate / can't be located.
    // Group 0 is exact; subgroups are located left-to-right in the match (exact for
    // ordered, unambiguous captures — approximate for nested/repeated ones).
  }, { key: "_span", value: function _span(group) {
    if (!this.match) return [-1, -1];
    var base = this.match.index;
    if (group === 0) return [base, base + this.match[0].length];
    if (this.match[group] === void 0) return [-1, -1];
    var cursor = 0;
    for (var g = 1; g <= group; g++) {
      var t = this.match[g];
      if (t === void 0) continue;
      var at = this.match[0].indexOf(t, cursor);
      if (at === -1) return [-1, -1];
      if (g === group) return [base + at, base + at + t.length];
      cursor = at + t.length;
    }
    return [-1, -1];
  } }, { key: "start", value: function start() {
    var group = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this._span(group)[0];
  } }, { key: "end", value: function end() {
    var group = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this._span(group)[1];
  } }, { key: "groupCount", value: function groupCount() {
    var _RegExp$exec;
    return (((_RegExp$exec = new RegExp(`${this.pattern.source}|`).exec("")) === null || _RegExp$exec === void 0 ? void 0 : _RegExp$exec.length) || 1) - 1;
  } }, {
    key: "groupNames",
    value: function groupNames() {
      var res = /* @__PURE__ */ new Map();
      var _iterator2 = _createForOfIteratorHelper(
        this.pattern.source.matchAll(
          /\(\?<([a-zA-Z][a-zA-Z0-9]*)>/g
        )
      ), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var match = _step2.value;
          res.set(match[1], true);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return res;
    }
    // Convert Java-style tokens ($0, $1.., ${name}, \x) into a native JS replacement string.
  }, { key: "_toReplacement", value: function _toReplacement(replacement) {
    return replacement.replace(
      /\\(.)|\$([0-9]+)|\$\{([a-zA-Z][a-zA-Z0-9]*)\}/g,
      (m, esc, g, n) => {
        if (esc !== void 0) return esc === "$" ? "$$" : esc;
        if (g !== void 0) return g === "0" ? "$&" : `$${g}`;
        if (n !== void 0) return `$<${n}>`;
        return m;
      }
    );
  } }, { key: "replaceAll", value: function replaceAll(replacement) {
    return this.string.replace(this.pattern, this._toReplacement(replacement));
  } }, { key: "replaceFirst", value: function replaceFirst(replacement) {
    var nonGlobal = new RegExp(
      this.pattern.source,
      this.pattern.flags.replace("g", "")
    );
    return this.string.replace(nonGlobal, this._toReplacement(replacement));
  } }, { key: "reset", value: function reset(string) {
    this.pattern.lastIndex = 0;
    this.match = null;
    this.appendPosition = 0;
    if (string !== void 0) this.string = string;
    return this;
  } }, { key: "appendReplacement", value: function appendReplacement(replacement) {
    var rep = replacement.replace(
      /\\(.)|\$([0-9]+)|\$\{([a-zA-Z][a-zA-Z0-9]*)\}/g,
      (m, esc, g, n) => {
        var _groups;
        if (esc !== void 0) return esc;
        if (g === "0") return this.match[0];
        if (g !== void 0) return this.match[g] || "";
        if (n !== void 0) return ((_groups = this.match.groups) === null || _groups === void 0 ? void 0 : _groups[n]) || "";
        return m;
      }
    );
    var res = this.string.substring(this.appendPosition, this.match.index) + rep;
    this.appendPosition = this.pattern.lastIndex;
    return res;
  } }, { key: "appendTail", value: function appendTail() {
    return this.string.substring(this.appendPosition);
  } }]);
})();

// packages/kolmafia/src/autoscend/paths/avatar_of_boris.ts
function is_boris() {
  return (0, import_kolmafia3.myPath)() === $path`Avatar of Boris`;
}
function boris_initializeSettings() {
  if (is_boris()) {
    auto_log_info("Initializing Avatar of Boris settings", "blue");
    (0, import_kolmafia3.setProperty)("auto_borisSkills", (-1).toString());
    (0, import_kolmafia3.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia3.visitUrl)("storage.php?action=pull&whichitem1=5648&howmany1=1&pwd");
    (0, import_kolmafia3.visitUrl)("storage.php?action=pull&whichitem1=5650&howmany1=1&pwd");
  }
}

// packages/kolmafia/src/autoscend/paths/avatar_of_jarlsberg.ts
var import_kolmafia4 = require("kolmafia");
function is_jarlsberg() {
  return (0, import_kolmafia4.myPath)() === $path`Avatar of Jarlsberg`;
}
function jarlsberg_initializeSettings() {
  if (is_jarlsberg()) {
    auto_log_info("Initializing Avatar of Jarlsberg settings", "blue");
    (0, import_kolmafia4.setProperty)("auto_wandOfNagamar", false.toString());
  }
}

// packages/kolmafia/src/autoscend/paths/avatar_of_sneaky_pete.ts
var import_kolmafia5 = require("kolmafia");
function is_pete() {
  return (0, import_kolmafia5.myPath)() === $path`Avatar of Sneaky Pete`;
}
function pete_initializeSettings() {
  if (is_pete()) {
    (0, import_kolmafia5.setProperty)("auto_peteSkills", (-1).toString());
    (0, import_kolmafia5.setProperty)("auto_wandOfNagamar", false.toString());
  }
}

// packages/kolmafia/src/autoscend/paths/casual.ts
var import_kolmafia106 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_08.ts
var import_kolmafia105 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_routing.ts
var import_kolmafia104 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_zone.ts
var import_kolmafia103 = require("kolmafia");

// packages/kolmafia/src/autoscend/autoscend_record.ts
var import_kolmafia6 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2016.ts
var import_kolmafia102 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_list.ts
var import_kolmafia7 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/gelatinous_noob.ts
var import_kolmafia9 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2011.ts
var import_kolmafia8 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/kingdom_of_exploathing.ts
var import_kolmafia101 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2019.ts
var import_kolmafia100 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/actually_ed_the_undying.ts
var import_kolmafia99 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/elementalPlanes.ts
var import_kolmafia10 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2015.ts
var import_kolmafia97 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/avatar_of_west_of_loathing.ts
var import_kolmafia11 = require("kolmafia");
function in_awol() {
  return (0, import_kolmafia11.myPath)() === $path`Avatar of West of Loathing`;
}
function awol_initializeSettings() {
  if (in_awol()) {
    (0, import_kolmafia11.setProperty)("auto_awolLastSkill", 0 .toString());
    (0, import_kolmafia11.setProperty)("auto_getBeehive", true.toString());
  }
  return false;
}

// packages/kolmafia/src/autoscend/paths/heavy_rains.ts
var import_kolmafia12 = require("kolmafia");
function in_heavyrains() {
  return (0, import_kolmafia12.myPath)() === $path`Heavy Rains`;
}
function heavyrains_initializeSettings() {
  if (in_heavyrains()) {
    (0, import_kolmafia12.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia12.setProperty)("auto_mountainmen", "");
    (0, import_kolmafia12.setProperty)("auto_ninjasnowmanassassin", false.toString());
    (0, import_kolmafia12.setProperty)("auto_orcishfratboyspy", "");
    (0, import_kolmafia12.setProperty)("auto_warhippyspy", "");
    (0, import_kolmafia12.setProperty)("auto_lastthunder", "100");
    (0, import_kolmafia12.setProperty)("auto_lastthunderturn", "0");
    (0, import_kolmafia12.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia12.setProperty)("auto_writingDeskSummon", true.toString());
    (0, import_kolmafia12.setProperty)("auto_day1_desk", "");
    (0, import_kolmafia12.setProperty)("auto_day1_skills", "");
  }
}

// packages/kolmafia/src/autoscend/paths/legacy_of_loathing.ts
var import_kolmafia96 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2023.ts
var import_kolmafia95 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_util.ts
var import_kolmafia94 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2017.ts
var import_kolmafia93 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/dark_gyffte.ts
var import_kolmafia92 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_12.ts
var import_kolmafia91 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_quest.ts
var import_kolmafia89 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/fall_of_the_dinosaurs.ts
var import_kolmafia13 = require("kolmafia");
function in_fotd() {
  return (0, import_kolmafia13.myPath)() === $path`Fall of the Dinosaurs`;
}
function fotd_initializeSettings() {
  if (in_fotd()) {
    (0, import_kolmafia13.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia13.setProperty)("auto_getBoningKnife", false.toString());
    (0, import_kolmafia13.setProperty)("auto_wandOfNagamar", false.toString());
  }
}

// packages/kolmafia/src/autoscend/paths/g_lover.ts
var import_kolmafia14 = require("kolmafia");
function in_glover() {
  return (0, import_kolmafia14.myPath)() === $path`G-Lover`;
}
function glover_initializeSettings() {
  if (in_glover()) {
    (0, import_kolmafia14.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia14.setProperty)("auto_getBoningKnife", true.toString());
    (0, import_kolmafia14.setProperty)("auto_dakotaFanning", true.toString());
    (0, import_kolmafia14.setProperty)("auto_ignoreFlyer", true.toString());
    (0, import_kolmafia14.setProperty)(
      "gnasirProgress",
      ((0, import_kolmafia14.toInt)((0, import_kolmafia14.getProperty)("gnasirProgress")) | 16).toString()
    );
    if ((0, import_kolmafia14.itemAmount)($item`crude oil congealer`) === 0 && (0, import_kolmafia14.itemAmount)($item`G`) > 0) {
      (0, import_kolmafia14.cliExecute)(`make ${$item`crude oil congealer`}`);
    }
    while ((0, import_kolmafia14.itemAmount)($item`A-Boo glue`) < 3 && (0, import_kolmafia14.itemAmount)($item`G`) > 0) {
      (0, import_kolmafia14.cliExecute)(`make ${$item`A-Boo glue`}`);
    }
  }
}
function glover_usable(it) {
  if (!in_glover()) {
    return true;
  }
  if ((0, import_kolmafia14.containsText)(it, "g")) {
    return true;
  }
  if ((0, import_kolmafia14.containsText)(it, "G")) {
    return true;
  }
  var checkItem = (0, import_kolmafia14.toItem)(it);
  if (checkItem !== import_kolmafia14.Item.none && import_kolmafia14.Item.get(
    [
      "SpinMaster&trade; lathe",
      // it works since there's no "use" link
      "&quot;I Voted!&quot; sticker",
      // free fights still work for I voted! sticker
      "ninja carabiner",
      "ninja crampons",
      "ninja rope",
      "eXtreme scarf",
      "snowboarder pants",
      "eXtreme mittens",
      "linoleum ore",
      "chrome ore",
      "asbestos ore",
      "loadstone",
      "amulet of extreme plot significance",
      "titanium assault umbrella",
      "antique machete",
      "half-size scalpel",
      "head mirror",
      "wet stew",
      "UV-resistant compass",
      "Talisman o' Namsilat",
      "unstable fulminate",
      "Orcish baseball cap",
      "Orcish frat-paddle",
      "filthy knitted dread sack",
      "filthy corduroys",
      "continuum transfunctioner",
      "beer helmet",
      "distressed denim pants",
      "reinforced beaded headband",
      "bullet-proof corduroys"
    ]
  ).includes(checkItem)) {
    return true;
  }
  return false;
}

// packages/kolmafia/src/autoscend/combat/auto_combat.ts
var import_kolmafia87 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/avant_guard.ts
var import_kolmafia63 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2024.ts
var import_kolmafia62 = require("kolmafia");

// packages/kolmafia/src/c2t_apron.ts
var import_kolmafia15 = require("kolmafia");

// packages/kolmafia/src/c2t_megg.ts
var import_kolmafia16 = require("kolmafia");
var c2t_megg_oldFam = import_kolmafia16.Familiar.none;
var c2t_megg_oldEq = import_kolmafia16.Item.none;

// packages/kolmafia/src/autoscend/paths/adventurer_meats_world.ts
var import_kolmafia61 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2025.ts
var import_kolmafia60 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/hattrick.ts
var import_kolmafia17 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/kolhs.ts
var import_kolmafia18 = require("kolmafia");
function in_kolhs() {
  return (0, import_kolmafia18.myPath)() === $path`KOLHS`;
}
function kolhs_initializeSettings() {
  if (!in_kolhs()) {
    return;
  }
  (0, import_kolmafia18.setProperty)("kolhs_closetDrink", false.toString());
}

// packages/kolmafia/src/autoscend/paths/small.ts
var import_kolmafia19 = require("kolmafia");
function in_small() {
  return (0, import_kolmafia19.myPath)() === $path`A Shrunken Adventurer am I`;
}
function small_initializeSettings() {
  if (!in_small()) {
    return;
  }
  (0, import_kolmafia19.setProperty)("auto_wandOfNagamar", true.toString());
  (0, import_kolmafia19.setProperty)("auto_getBeehive", true.toString());
  (0, import_kolmafia19.setProperty)("auto_getBoningKnife", true.toString());
  (0, import_kolmafia19.setProperty)("auto_getSteelOrgan", false.toString());
  if ((0, import_kolmafia19.inHardcore)()) {
    var MLCap = 50;
    var MLSafetyLimit = (0, import_kolmafia19.getProperty)("auto_MLSafetyLimit");
    if (MLSafetyLimit === "") {
      (0, import_kolmafia19.setProperty)("auto_MLSafetyLimitBackup", "empty");
      (0, import_kolmafia19.setProperty)("auto_MLSafetyLimit", MLCap.toString());
    }
    if ((0, import_kolmafia19.toInt)(MLSafetyLimit) > MLCap) {
      (0, import_kolmafia19.setProperty)("auto_MLSafetyLimitBackup", MLSafetyLimit);
      (0, import_kolmafia19.setProperty)("auto_MLSafetyLimit", MLCap.toString());
    }
    var disregardKarma = (0, import_kolmafia19.getProperty)("auto_disregardInstantKarma");
    if (disregardKarma === "true") {
      (0, import_kolmafia19.setProperty)("auto_disregardInstantKarmaBackup", "true");
      (0, import_kolmafia19.setProperty)("auto_disregardInstantKarma", "false");
    }
  } else {
    if (auto_have_familiar($familiar`Cookbookbat`) && (canPull($item`Calzone of Legend`) || canPull($item`Deep Dish of Legend`) || canPull($item`Pizza of Legend`))) {
      (0, import_kolmafia19.setProperty)("auto_dontUseCookBookBat", true.toString());
    }
  }
}

// packages/kolmafia/src/autoscend/paths/zombie_slayer.ts
var import_kolmafia20 = require("kolmafia");
function in_zombieSlayer() {
  return (0, import_kolmafia20.myPath)() === $path`Zombie Slayer`;
}
function zombieSlayer_initializeSettings() {
  if (in_zombieSlayer()) {
    (0, import_kolmafia20.setProperty)("auto_wandOfNagamar", false.toString());
  }
}
function zombieSlayer_usable(fam) {
  if (!in_zombieSlayer()) {
    return true;
  }
  return (0, import_kolmafia20.containsText)(fam.attributes, "undead");
}

// packages/kolmafia/src/autoscend/paths/zootomist.ts
var import_kolmafia59 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2022.ts
var import_kolmafia58 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/path_of_the_plumber.ts
var import_kolmafia21 = require("kolmafia");
function in_plumber() {
  return (0, import_kolmafia21.myPath)() === $path`Path of the Plumber`;
}
function plumber_initializeSettings() {
  if (in_plumber()) {
    (0, import_kolmafia21.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia21.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia21.setProperty)("auto_paranoia", 1 .toString());
  }
  return false;
}

// packages/kolmafia/src/autoscend/paths/pocket_familiars.ts
var import_kolmafia22 = require("kolmafia");
function in_pokefam() {
  return (0, import_kolmafia22.myPath)() === $path`Pocket Familiars`;
}
function pokefam_initializeSettings() {
  if (in_pokefam()) {
    (0, import_kolmafia22.setProperty)("auto_ignoreRestoreFailure", true.toString());
    (0, import_kolmafia22.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia22.setProperty)("auto_ignoreFlyer", true.toString());
    (0, import_kolmafia22.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia22.setProperty)("auto_runDayCount", 3 .toString());
  }
}

// packages/kolmafia/src/autoscend/paths/two_crazy_random_summer.ts
var import_kolmafia23 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/wereprofessor.ts
var import_kolmafia24 = require("kolmafia");
function in_wereprof() {
  return (0, import_kolmafia24.myPath)() === $path`WereProfessor`;
}
function wereprof_initializeSettings() {
  if (!in_wereprof()) {
    return;
  }
  (0, import_kolmafia24.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia24.setProperty)("auto_dontPhylumBanish", true.toString());
  (0, import_kolmafia24.cliExecute)("wereprofessor research");
}
function wereprof_usable(str) {
  if (!in_wereprof()) {
    return true;
  }
  if (str === "Stooper") {
    return false;
  }
  return true;
}

// packages/kolmafia/src/autoscend/quests/level_09.ts
var import_kolmafia57 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2018.ts
var import_kolmafia56 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/bees_hate_you.ts
var import_kolmafia25 = require("kolmafia");
function in_bhy() {
  return (0, import_kolmafia25.myPath)() === $path`Bees Hate You`;
}
function bhy_initializeSettings() {
  if (in_bhy()) {
    (0, import_kolmafia25.setProperty)("auto_abooclover", false.toString());
    (0, import_kolmafia25.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia25.setProperty)("auto_hippyInstead", true.toString());
    (0, import_kolmafia25.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia25.setProperty)("auto_getBoningKnife", true.toString());
    (0, import_kolmafia25.setProperty)("auto_ignoreFlyer", true.toString());
  }
}
function bhy_usable(str) {
  if (!in_bhy()) {
    return true;
  }
  switch (str) {
    case "Cobb's Knob map":
    case "ball polish":
    case "black market map":
    case "boring binder clip":
    case "beehive":
    case "electric boning knife":
    case "ninja carabiner":
    case "Orcish baseball cap":
    case "reinforced beaded headband":
    case "bullet-proof corduroys":
    case "blackberry galoshes":
    case "titanium assault umbrella":
    case "Knob Goblin harem pants":
    case "Knob Goblin harem veil":
      return true;
  }
  if ((0, import_kolmafia25.containsText)(str, "b")) {
    return false;
  }
  if ((0, import_kolmafia25.containsText)(str, "B")) {
    return false;
  }
  return true;
}
function bhy_is_item_valid(it) {
  if (!in_bhy()) {
    (0, import_kolmafia25.abort)(
      "bhy_is_item_valid(item it) should never be called outside of bees hate you path."
    );
  }
  if ((0, import_kolmafia25.toSlot)(it) !== import_kolmafia25.Slot.none) {
    return (0, import_kolmafia25.isUnrestricted)(it);
  }
  if ($items`Cobb's Knob map, enchanted bean, ball polish, black market map, boring binder clip, beehive, electric boning knife`.includes(
    it
  )) {
    return true;
  }
  return bhy_usable(it.toString()) && (0, import_kolmafia25.isUnrestricted)(it);
}

// packages/kolmafia/src/autoscend/paths/disguises_delimit.ts
var import_kolmafia26 = require("kolmafia");
function in_disguises() {
  return (0, import_kolmafia26.myPath)() === $path`Disguises Delimit`;
}
function disguises_initializeSettings() {
  if (in_disguises()) {
    (0, import_kolmafia26.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia26.setProperty)("auto_getBoningKnife", true.toString());
  }
}

// packages/kolmafia/src/autoscend/paths/one_crazy_random_summer.ts
var import_kolmafia27 = require("kolmafia");
function in_ocrs() {
  return (0, import_kolmafia27.myPath)() === $path`One Crazy Random Summer`;
}

// packages/kolmafia/src/autoscend/paths/quantum_terrarium.ts
var import_kolmafia55 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_11.ts
var import_kolmafia54 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2020.ts
var import_kolmafia28 = require("kolmafia");
function auto_hasPowerfulGlove() {
  return possessEquipment($item`Powerful Glove`) && auto_is_valid($item`mint-in-box Powerful Glove`);
}

// packages/kolmafia/src/autoscend/iotms/mr2026.ts
var import_kolmafia53 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_10.ts
var import_kolmafia52 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/live_ascend_repeat.ts
var import_kolmafia29 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/way_of_the_surprising_fist.ts
var import_kolmafia30 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_04.ts
var import_kolmafia32 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/avatar_of_shadows_over_loathing.ts
var import_kolmafia31 = require("kolmafia");
function in_aosol() {
  return (0, import_kolmafia31.myPath)() === $path`Avatar of Shadows Over Loathing`;
}
function aosol_initializeSettings() {
  if (in_aosol()) {
    (0, import_kolmafia31.setProperty)("auto_aosolLastSkill", 0 .toString());
    (0, import_kolmafia31.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia31.setProperty)("auto_aosol_dontUnCurse", true.toString());
  }
  return false;
}

// packages/kolmafia/src/autoscend/quests/level_13.ts
var import_kolmafia51 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2021.ts
var import_kolmafia48 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_craft.ts
var import_kolmafia33 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/wildfire.ts
var import_kolmafia34 = require("kolmafia");
function in_wildfire() {
  return (0, import_kolmafia34.myPath)() === $path`Wildfire`;
}
function wildfire_initializeSettings() {
  if (!in_wildfire()) {
    return;
  }
  (0, import_kolmafia34.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia34.setProperty)("auto_getBeehive", true.toString());
}

// packages/kolmafia/src/autoscend/paths/you_robot.ts
var import_kolmafia47 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_05.ts
var import_kolmafia46 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/low_key_summer.ts
var import_kolmafia45 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_02.ts
var import_kolmafia35 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_03.ts
var import_kolmafia36 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_06.ts
var import_kolmafia37 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_07.ts
var import_kolmafia38 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/level_any.ts
var import_kolmafia41 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/nuclear_autumn.ts
var import_kolmafia39 = require("kolmafia");
function in_nuclear() {
  return (0, import_kolmafia39.myPath)() === $path`Nuclear Autumn`;
}
function nuclear_initializeSettings() {
  if (in_nuclear()) {
    (0, import_kolmafia39.setProperty)("auto_getBeehive", true.toString());
  }
}

// packages/kolmafia/src/autoscend/paths/picky.ts
var import_kolmafia40 = require("kolmafia");

// packages/kolmafia/src/autoscend/quests/optional.ts
var import_kolmafia44 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/grey_goo.ts
var import_kolmafia42 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/license_to_adventure.ts
var import_kolmafia43 = require("kolmafia");
function in_lta() {
  return (0, import_kolmafia43.myPath)() === $path`License to Adventure`;
}
function bond_initializeSettings() {
  if (in_lta()) {
    (0, import_kolmafia43.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia43.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia43.setProperty)("auto_familiarChoice", "");
  }
}

// packages/kolmafia/src/autoscend/quests/optional.ts
var $_f_epicWeapons = /* @__PURE__ */ new Map(
  [
    [$class`Seal Clubber`, $item`Hammer of Smiting`],
    [$class`Turtle Tamer`, $item`Chelonian Morningstar`],
    [$class`Pastamancer`, $item`Greek Pasta Spoon of Peril`],
    [$class`Sauceror`, $item`17-alarm Saucepan`],
    [$class`Disco Bandit`, $item`Shagadelic Disco Banjo`],
    [$class`Accordion Thief`, $item`Squeezebox of the Ages`]
  ]
);
var $_f_starterWeapons = /* @__PURE__ */ new Map(
  [
    [$class`Seal Clubber`, $item`seal-clubbing club`],
    [$class`Turtle Tamer`, $item`turtle totem`],
    [$class`Pastamancer`, $item`pasta spoon`],
    [$class`Sauceror`, $item`saucepan`],
    [$class`Disco Bandit`, $item`disco ball`],
    [$class`Accordion Thief`, $item`stolen accordion`]
  ]
);

// packages/kolmafia/src/autoscend/paths/low_key_summer.ts
var lowKeys = /* @__PURE__ */ new Map();
lowKeys.set($item`clown car key`, $location`The "Fun" House`);
lowKeys.set($item`batting cage key`, $location`The Bat Hole Entrance`);
lowKeys.set($item`aquí`, $location`South of the Border`);
lowKeys.set($item`knob labinet key`, $location`Cobb's Knob Laboratory`);
lowKeys.set($item`weremoose key`, $location`Cobb's Knob Menagerie, Level 2`);
lowKeys.set($item`peg key`, $location`The Obligatory Pirate's Cove`);
lowKeys.set($item`kekekey`, $location`The Valley of Rof L'm Fao`);
lowKeys.set($item`rabbit's foot key`, $location`The Dire Warren`);
lowKeys.set($item`knob shaft skate key`, $location`The Knob Shaft`);
lowKeys.set($item`ice key`, $location`The Icy Peak`);
lowKeys.set($item`anchovy can key`, $location`The Haunted Pantry`);
lowKeys.set($item`cactus key`, $location`The Arid, Extra-Dry Desert`);
lowKeys.set($item`f'c'le sh'c'le k'y`, $location`The F'c'le`);
lowKeys.set($item`treasure chest key`, $location`Belowdecks`);
lowKeys.set($item`demonic key`, $location`Pandamonium Slums`);
lowKeys.set($item`key sausage`, $location`Cobb's Knob Kitchens`);
lowKeys.set($item`knob treasury key`, $location`Cobb's Knob Treasury`);
lowKeys.set($item`scrap metal key`, $location`The Old Landfill`);
lowKeys.set($item`black rose key`, $location`The Haunted Conservatory`);
lowKeys.set($item`actual skeleton key`, $location`The Skeleton Store`);
lowKeys.set($item`music box key`, $location`The Haunted Nursery`);
lowKeys.set($item`deep-fried key`, $location`Madness Bakery`);
lowKeys.set($item`discarded bike lock key`, $location`The Overgrown Lot`);
function in_lowkeysummer() {
  return (0, import_kolmafia45.myPath)() === $path`Low Key Summer`;
}
function lowkey_initializeSettings() {
  if (!in_lowkeysummer()) {
    return;
  }
}

// packages/kolmafia/src/autoscend/paths/you_robot.ts
function in_robot() {
  return (0, import_kolmafia47.myPath)() === $path`You, Robot`;
}
function robot_initializeSettings() {
  if (!in_robot()) {
    return;
  }
  (0, import_kolmafia47.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia47.setProperty)("auto_getSteelOrgan", false.toString());
  (0, import_kolmafia47.setProperty)("auto_getBeehive", true.toString());
  (0, import_kolmafia47.setProperty)("auto_getBoningKnife", true.toString());
  (0, import_kolmafia47.setProperty)("auto_paranoia", 1 .toString());
}

// packages/kolmafia/src/autoscend/paths/bugbear_invasion.ts
var import_kolmafia49 = require("kolmafia");
function in_bugbear() {
  return (0, import_kolmafia49.myPath)() === $path`Bugbear Invasion`;
}
function bugbear_initializeSettings() {
  if (in_bugbear()) {
    (0, import_kolmafia49.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia49.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia49.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia49.setProperty)("auto_getStarKey", false.toString());
    (0, import_kolmafia49.setProperty)(
      "nsTowerDoorKeysUsed",
      "Boris's key,Jarlsberg's key,Sneaky Pete's key,Richard's star key,skeleton key,digital key"
    );
    (0, import_kolmafia49.setProperty)("auto_dontPhylumBanish", true.toString());
  }
}

// packages/kolmafia/src/autoscend/paths/the_source.ts
var import_kolmafia50 = require("kolmafia");
function in_theSource() {
  return (0, import_kolmafia50.myPath)() === $path`The Source`;
}
function theSource_initializeSettings() {
  if (in_theSource()) {
    (0, import_kolmafia50.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia50.setProperty)("auto_wandOfNagamar", false.toString());
  }
  return false;
}

// packages/kolmafia/src/autoscend/quests/level_13.ts
function beehiveConsider(at_tower) {
  var damage_sources = 1;
  if (auto_have_familiar($familiar`Glover`)) {
    damage_sources += 11;
  }
  if (auto_have_familiar($familiar`Shorter-Order Cook`)) {
    damage_sources += 6;
  } else if (auto_have_familiar($familiar`Mu`)) {
    damage_sources += 5;
  } else if (auto_have_familiar($familiar`Imitation Crab`)) {
    damage_sources += 4;
  }
  if ((0, import_kolmafia51.haveSkill)($skill`Kneebutt`) || (0, import_kolmafia51.haveSkill)($skill`Headbutt`)) {
    damage_sources += 1;
  }
  var _iterator = _createForOfIteratorHelper($skills`The Psalm of Pointiness, Spiky Shell, Scarysauce, Jalapeño Saucesphere`), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var sk = _step.value;
      if ((0, import_kolmafia51.haveSkill)(sk)) {
        damage_sources += 1;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper($skills`Dirge of Dreadfulness, Icy Glare`), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _sk = _step2.value;
      if ((0, import_kolmafia51.haveSkill)(_sk)) {
        damage_sources += 1;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  damage_sources += 2;
  if (!at_tower || (0, import_kolmafia51.availableAmount)($item`hot plate`) > 0) {
    damage_sources += 2;
  } else {
    if ((0, import_kolmafia51.numericModifier)(import_kolmafia51.Modifier.get("Hot Damage")) > 0) {
      damage_sources += 1;
    }
  }
  if ((0, import_kolmafia51.availableAmount)($item`tiny bowler`) > 0) {
    damage_sources += 1;
  }
  if ((0, import_kolmafia51.availableAmount)($item`hippy protest button`) > 0) {
    damage_sources += 1;
  }
  if (damage_sources >= 13) {
    (0, import_kolmafia51.setProperty)("auto_getBeehive", false.toString());
    return true;
  }
  (0, import_kolmafia51.setProperty)("auto_getBeehive", true.toString());
  return false;
}

// packages/kolmafia/src/autoscend/paths/quantum_terrarium.ts
function in_quantumTerrarium() {
  return (0, import_kolmafia55.myPath)() === $path`Quantum Terrarium`;
}
function qt_initializeSettings() {
  if (in_quantumTerrarium()) {
    (0, import_kolmafia55.setProperty)("auto_skipNuns", true.toString());
  }
}

// packages/kolmafia/src/autoscend/iotms/mr2025.ts
var LEPRECONDO_RESULTS_SCORE = /* @__PURE__ */ new Map([
  [
    $effect`Your Days Are Numbed`,
    !pathHasFamiliar() || in_avantGuard() ? 0 : 100
  ],
  // +5 fam weight & exp effect
  [$effect`Vicarious Sweat`, 90],
  // +30hp, 15% item drop effect
  [$effect`Counter Intelligence`, 80],
  // +30% meat effect
  [$item`crafting plans`, 70],
  // crafting plans
  [$effect`Spacious Night's Sleep`, 50],
  // 100% init, all stats +10% effect
  [$effect`Sur La Table`, 50],
  // mp/hp regen effect
  [$effect`Wasting Time`, 40],
  // Moxie effect
  [
    $effect`Alone with Your Thoughts`,
    (0, import_kolmafia60.myPrimestat)() === $stat`Mysticality` ? 40 : 11
  ],
  // 20 myst & spell dmg, 50% max mp effect
  [$effect`Work Out Smarter, Not Harder`, 40],
  // 20 mus & weapon dmg, 50% max hp effect
  [$effect`Well Stimulated`, 40],
  // Myst effect
  [$effect`Gym Bros`, 40],
  // Muscles effect
  [
    $effect`You Might Have Gotten Wet`,
    (0, import_kolmafia60.myPrimestat)() === $stat`Moxie` ? 40 : 10
  ],
  // 20 mox & ranged dmg, 10 dr effect
  [$item`phosphor traces`, 10],
  // phosphor traces
  [$effect`Moist Night's Sleep`, 10],
  // 50% init, 2 hot res, 10 cold dmg effect
  [$effect`Quiet Night's Sleep`, 10],
  // 50% init, mp regen effect
  [$effect`Good Night's Sleep`, 10],
  // +25 init
  [$item`table tennis ball`, 10],
  // table tennis ball
  [$item`bar dart`, 0],
  // bar dart
  [$item`scoop of pre-workout powder`, 0],
  // scoop of pre-workout powder
  [$item`leprechaun antidepressant pill`, 0],
  // leprechaun antidepressant pill
  [$effect`Tired Muscles`, -10]
  // -combat effect
]);

// packages/kolmafia/src/autoscend/paths/adventurer_meats_world.ts
function in_amw() {
  return (0, import_kolmafia61.myPath)() === $path`Adventurer Meats World`;
}
function amw_initializeSettings() {
  if (!in_amw()) {
    return;
  }
  (0, import_kolmafia61.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia61.setProperty)("auto_shouldMeatLevel", false.toString());
}

// packages/kolmafia/src/autoscend/paths/avant_guard.ts
function in_avantGuard() {
  return (0, import_kolmafia63.myPath)() === $path`Avant Guard`;
}
function ag_initializeSettings() {
  if (in_avantGuard()) {
    if (!auto_have_familiar($familiar`Burly Bodyguard`) && (0, import_kolmafia63.itemAmount)($item`baby bodyguard`) > 0) {
      (0, import_kolmafia63.visitUrl)("inv_familiar.php?pwd=&which=3&whichitem=11631");
    }
    (0, import_kolmafia63.setProperty)("auto_skipUnlockGuild", true.toString());
    (0, import_kolmafia63.setProperty)("auto_nonAdvLoc", false.toString());
    if (auto_turbo()) {
      (0, import_kolmafia63.setProperty)("auto_skipNuns", "true");
    }
  }
}

// packages/kolmafia/src/autoscend/combat/auto_combat_awol.ts
var import_kolmafia64 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_default_stage1.ts
var import_kolmafia76 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_adventurer_meats_world.ts
var import_kolmafia65 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_bees_hate_you.ts
var import_kolmafia66 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_disguises_delimit.ts
var import_kolmafia67 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_fall_of_the_dinosaurs.ts
var import_kolmafia68 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_heavy_rains.ts
var import_kolmafia69 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_kingdom_of_exploathing.ts
var import_kolmafia70 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_mr2012.ts
var import_kolmafia71 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_pete.ts
var import_kolmafia72 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_the_source.ts
var import_kolmafia73 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_wereprofessor.ts
var import_kolmafia74 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_wildfire.ts
var import_kolmafia75 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_default_stage2.ts
var import_kolmafia78 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_dark_gyffte.ts
var import_kolmafia77 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_default_stage3.ts
var import_kolmafia80 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_zombie_slayer.ts
var import_kolmafia79 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_default_stage4.ts
var import_kolmafia82 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_license_to_adventure.ts
var import_kolmafia81 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_default_stage5.ts
var import_kolmafia85 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_plumber.ts
var import_kolmafia83 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_you_robot.ts
var import_kolmafia84 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_ocrs.ts
var import_kolmafia86 = require("kolmafia");

// packages/kolmafia/src/autoscend/combat/auto_combat_ed.ts
var import_kolmafia88 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/i_love_u_hate.ts
var import_kolmafia90 = require("kolmafia");
function in_iluh() {
  return (0, import_kolmafia90.myPath)() === $path`11 Things I Hate About U`;
}
function iluh_foodConsumable(str) {
  if (!in_iluh()) {
    return true;
  }
  var foodConsume = (0, import_kolmafia90.toLowerCase)(str);
  if ((0, import_kolmafia90.containsText)(foodConsume, "stunt nut") || (0, import_kolmafia90.containsText)(foodConsume, "wet stew") || (0, import_kolmafia90.containsText)(foodConsume, "wet stunt nut stew")) {
    return true;
  }
  if ((0, import_kolmafia90.containsText)(foodConsume, "u")) {
    return false;
  }
  if ((0, import_kolmafia90.containsText)(foodConsume, "i")) {
    return true;
  }
  return false;
}
function iluh_famAllowed(fam) {
  if (!in_iluh()) {
    return true;
  }
  if ((0, import_kolmafia90.containsText)((0, import_kolmafia90.toLowerCase)(fam), "u")) {
    return false;
  }
  return true;
}

// packages/kolmafia/src/autoscend/paths/dark_gyffte.ts
function in_darkGyffte() {
  return (0, import_kolmafia92.myPath)() === $path`Dark Gyffte`;
}
function bat_initializeSettings() {
  if (in_darkGyffte()) {
    (0, import_kolmafia92.setProperty)("auto_getSteelOrgan", false.toString());
    (0, import_kolmafia92.setProperty)("auto_grimstoneFancyOilPainting", false.toString());
    (0, import_kolmafia92.setProperty)("auto_paranoia", 10 .toString());
    (0, import_kolmafia92.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia92.setProperty)("auto_bat_desiredForm", "");
  }
}

// packages/kolmafia/src/autoscend/paths/legacy_of_loathing.ts
function in_lol() {
  return (0, import_kolmafia96.myPath)() === $path`Legacy of Loathing`;
}
function lol_initializeSettings() {
  if (!in_lol()) {
    return;
  }
  (0, import_kolmafia96.setProperty)("auto_wandOfNagamar", true.toString());
}
function auto_ItemToReplica(it) {
  switch (it) {
    case $item`Mr. Accessory`:
      return $item`replica Mr. Accessory`;
    case $item`crimbo elfling`:
      return $item`replica crimbo elfling`;
    case $item`Dark Jill-O-Lantern`:
      return $item`replica Dark Jill-O-Lantern`;
    case $item`hand turkey outline`:
      return $item`replica hand turkey outline`;
    case $item`miniature gravy-covered maypole`:
      return $item`replica miniature gravy-covered maypole`;
    case $item`pygmy bugbear shaman`:
      return $item`replica pygmy bugbear shaman`;
    case $item`wax lips`:
      return $item`replica wax lips`;
    case $item`jewel-eyed wizard hat`:
      return $item`replica jewel-eyed wizard hat`;
    case $item`plastic pumpkin bucket`:
      return $item`replica plastic pumpkin bucket`;
    case $item`Tome of Snowcone Summoning`:
      return $item`replica Tome of Snowcone Summoning`;
    case $item`bottle-rocket crossbow`:
      return $item`replica bottle-rocket crossbow`;
    case $item`navel ring of navel gazing`:
      return $item`replica navel ring of navel gazing`;
    case $item`V for Vivala mask`:
      return $item`replica V for Vivala mask`;
    case $item`cotton candy cocoon`:
      return $item`replica cotton candy cocoon`;
    case $item`haiku katana`:
      return $item`replica haiku katana`;
    case $item`little box of fireworks`:
      return $item`replica little box of fireworks`;
    case $item`Apathargic Bandersnatch`:
      return $item`replica Apathargic Bandersnatch`;
    case $item`Elvish sunglasses`:
      return $item`replica Elvish sunglasses`;
    case $item`squamous polyp`:
      return $item`replica squamous polyp`;
    case $item`Greatest American Pants`:
      return $item`replica Greatest American Pants`;
    case $item`Juju Mojo Mask`:
      return $item`replica Juju Mojo Mask`;
    case $item`organ grinder`:
      return $item`replica organ grinder`;
    case $item`a cute angel`:
      return $item`replica cute angel`;
    case $item`Operation Patriot Shield`:
      return $item`replica Operation Patriot Shield`;
    case $item`plastic vampire fangs`:
      return $item`replica plastic vampire fangs`;
    case $item`Camp Scout backpack`:
      return $item`replica Camp Scout backpack`;
    case $item`deactivated nanobots`:
      return $item`replica deactivated nanobots`;
    case $item`Libram of Resolutions`:
      return $item`replica Libram of Resolutions`;
    case $item`Order of the Green Thumb Order Form`:
      return $item`replica Order of the Green Thumb Order Form`;
    case $item`over-the-shoulder Folder Holder`:
      return $item`replica over-the-shoulder Folder Holder`;
    case $item`The Smith's Tome`:
      return $item`replica Smith's Tome`;
    case $item`Crimbo sapling`:
      return $item`replica Crimbo sapling`;
    case $item`Little Geneticist DNA-Splicing Lab`:
      return $item`replica Little Geneticist DNA-Splicing Lab`;
    case $item`still grill`:
      return $item`replica still grill`;
    case $item`Chateau Mantegna room key`:
      return $item`replica Chateau Mantegna room key`;
    case $item`Deck of Every Card`:
      return $item`replica Deck of Every Card`;
    case $item`Witchess Set`:
      return $item`replica Witchess Set`;
    case $item`disconnected intergnat`:
      return $item`replica disconnected intergnat`;
    case $item`Source terminal`:
      return $item`replica Source terminal`;
    case $item`yellow puck`:
      return $item`replica yellow puck`;
    case $item`genie bottle`:
      return $item`replica genie bottle`;
    case $item`space planula`:
      return $item`replica space planula`;
    case $item`unpowered Robortender`:
      return $item`replica unpowered Robortender`;
    case $item`God Lobster Egg`:
      return $item`replica God Lobster Egg`;
    case $item`January's Garbage Tote`:
      return $item`replica January's Garbage Tote`;
    case $item`Neverending Party invitation envelope`:
      return $item`replica Neverending Party invitation envelope`;
    case $item`Fourth of May Cosplay Saber`:
      return $item`replica Fourth of May Cosplay Saber`;
    case $item`hewn moon-rune spoon`:
      return $item`replica hewn moon-rune spoon`;
    case $item`Kramco Sausage-o-Matic™`:
      return $item`replica Kramco Sausage-o-Matic™`;
    case $item`baby camelCalf`:
      return $item`replica baby camelCalf`;
    case $item`Cargo Cultist Shorts`:
      return $item`replica Cargo Cultist Shorts`;
    case $item`Powerful Glove`:
      return $item`replica Powerful Glove`;
    case $item`emotion chip`:
      return $item`replica emotion chip`;
    case $item`industrial fire extinguisher`:
      return $item`replica industrial fire extinguisher`;
    case $item`miniature crystal ball`:
      return $item`replica miniature crystal ball`;
    case $item`designer sweatpants`:
      return $item`replica designer sweatpants`;
    case $item`grey gosling`:
      return $item`replica grey gosling`;
    case $item`Jurassic Parka`:
      return $item`replica Jurassic Parka`;
    case $item`Cincho de Mayo`:
      return $item`replica Cincho de Mayo`;
    case $item`2002 Mr. Store Catalog`:
      return $item`Replica 2002 Mr. Store Catalog`;
    case $item`august scepter`:
      return $item`replica august scepter`;
  }
  return it;
}

// packages/kolmafia/src/autoscend/quests/level_01.ts
var import_kolmafia98 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/actually_ed_the_undying.ts
function isActuallyEd() {
  return (0, import_kolmafia99.myPath)() === $path`Actually Ed the Undying`;
}
function ed_initializeSettings() {
  if (isActuallyEd()) {
    (0, import_kolmafia99.setProperty)("auto_day1_dna", "finished");
    (0, import_kolmafia99.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia99.setProperty)("auto_getStarKey", false.toString());
    (0, import_kolmafia99.setProperty)("auto_grimstoneFancyOilPainting", false.toString());
    (0, import_kolmafia99.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia99.setProperty)("auto_lashes", "");
    (0, import_kolmafia99.setProperty)("auto_needLegs", false.toString());
    (0, import_kolmafia99.setProperty)("auto_renenutet", "");
    (0, import_kolmafia99.setProperty)("auto_servantChoice", "");
    (0, import_kolmafia99.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia99.setProperty)("auto_edSkills", (-1).toString());
    (0, import_kolmafia99.setProperty)("auto_chasmBusted", false.toString());
    (0, import_kolmafia99.setProperty)("auto_renenutetBought", 0 .toString());
    (0, import_kolmafia99.setProperty)("auto_edCombatCount", 0 .toString());
    (0, import_kolmafia99.setProperty)("auto_edCombatRoundCount", 0 .toString());
    (0, import_kolmafia99.setProperty)("desertExploration", 100 .toString());
    (0, import_kolmafia99.setProperty)(
      "nsTowerDoorKeysUsed",
      "Boris's key,Jarlsberg's key,Sneaky Pete's key,Richard's star key,skeleton key,digital key"
    );
    (0, import_kolmafia99.setProperty)("auto_edServantBugCount", 0 .toString());
  }
}

// packages/kolmafia/src/autoscend/iotms/mr2019.ts
function auto_spoonGetDesiredSign() {
  var spoonsign = (0, import_kolmafia100.toLowerCase)((0, import_kolmafia100.getProperty)("auto_spoonsign"));
  function statSign(musc, myst, mox) {
    switch ((0, import_kolmafia100.myPrimestat)()) {
      case $stat`Muscle`:
        return musc;
      case $stat`Mysticality`:
        return myst;
      case $stat`Moxie`:
        return mox;
      default:
        (0, import_kolmafia100.abort)("Invalid mainstat, what?");
        return "butts";
    }
  }
  switch (spoonsign) {
    case "knoll":
      return statSign("mongoose", "wallaby", "vole");
    case "canadia":
      return statSign("platypus", "opossum", "marmot");
    case "gnomad":
      return statSign("wombat", "blender", "packrat");
    case "mongoose":
    case "wallaby":
    case "vole":
    case "platypus":
    case "opossum":
    case "marmot":
    case "wombat":
    case "blender":
    case "packrat":
      return spoonsign;
    case "clover":
      return "marmot";
    case "famweight":
    case "weight":
    case "familiar weight":
    case "familiar":
    case "fam":
      return "platypus";
    case "food":
      return "opossum";
    case "booze":
      return "blender";
    default:
      return "";
  }
}
function auto_spoonTuneConfirm() {
  if (!possessEquipment($item`hewn moon-rune spoon`) || !auto_is_valid($item`hewn moon-rune spoon`)) {
    return;
  }
  if ((0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("auto_spoonconfirmed")) === (0, import_kolmafia100.myAscensions)()) {
    return;
  }
  var spoonsign = auto_spoonGetDesiredSign();
  if (spoonsign === "") {
    return;
  }
  if ((0, import_kolmafia100.userConfirm)(
    `You're currently set to change signs to ${spoonsign} after wrapping up your business in your current sign. Do you want to interrupt the script to go change that? Will default to 'No' in 15 seconds.`,
    15e3,
    false
  )) {
    (0, import_kolmafia100.abort)(
      "Alright, please go change auto_spoonsign via the autoscend relay script and then rerun."
    );
  } else {
    (0, import_kolmafia100.setProperty)("auto_spoonconfirmed", (0, import_kolmafia100.myAscensions)().toString());
  }
}

// packages/kolmafia/src/autoscend/paths/kingdom_of_exploathing.ts
function in_koe() {
  return (0, import_kolmafia101.myPath)() === $path`Kingdom of Exploathing`;
}
function koe_initializeSettings() {
  if (in_koe()) {
    (0, import_kolmafia101.setProperty)("auto_bruteForcePalindome", (0, import_kolmafia101.inHardcore)().toString());
    (0, import_kolmafia101.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia101.setProperty)("auto_paranoia", 3 .toString());
    (0, import_kolmafia101.setProperty)("auto_skipL12Farm", "true");
    (0, import_kolmafia101.setProperty)("auto_grimstoneOrnateDowsingRod", false.toString());
    (0, import_kolmafia101.setProperty)("auto_grimstoneFancyOilPainting", false.toString());
    return true;
  }
  return false;
}

// packages/kolmafia/src/autoscend/iotms/mr2016.ts
function expectGhostReport() {
  if ((0, import_kolmafia102.totalTurnsPlayed)() >= (0, import_kolmafia102.toInt)((0, import_kolmafia102.getProperty)("nextParanormalActivity"))) {
    if ((0, import_kolmafia102.totalTurnsPlayed)() > (0, import_kolmafia102.toInt)((0, import_kolmafia102.getProperty)("nextParanormalActivity"))) {
      var page = (0, import_kolmafia102.visitUrl)("charpane.php");
      var myGhost = new AshMatcher(
        '<tr rel="protonquest">(?:.*?)<b>(.*?)</b>',
        page
      );
      if (myGhost.find()) {
        var goal = (0, import_kolmafia102.toLocation)(myGhost.group(1));
        (0, import_kolmafia102.setProperty)("ghostLocation", goal.toString());
        (0, import_kolmafia102.setProperty)("questPAGhost", "started");
      }
    }
    if ((0, import_kolmafia102.getProperty)("questPAGhost") === "unstarted") {
      return true;
    }
  }
  return false;
}
function haveGhostReport() {
  if ((0, import_kolmafia102.getProperty)("questPAGhost") === "unstarted") {
    return false;
  }
  if ((0, import_kolmafia102.getProperty)("questPAGhost") === "started" && (0, import_kolmafia102.getProperty)("ghostLocation") !== "") {
    return true;
  }
  return false;
}

// packages/kolmafia/src/autoscend/paths/casual.ts
function inAftercore() {
  return (0, import_kolmafia106.toBoolean)((0, import_kolmafia106.getProperty)("kingLiberated"));
}

// packages/kolmafia/src/autoscend/iotms/clan.ts
function isSpeakeasyDrink(drink_1) {
  return $items`glass of "milk", cup of "tea", thermos of "whiskey", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy`.includes(
    drink_1
  );
}

// packages/kolmafia/src/autoscend/auto_restore.ts
var $_f___known_restoration_sources = /* @__PURE__ */ new Map();
var $_f___restore_maximizer_cache = /* @__PURE__ */ new Map();
function invalidateRestoreOptionCache() {
  $_f___known_restoration_sources.clear();
  $_f___restore_maximizer_cache.clear();
}

// packages/kolmafia/src/autoscend/iotms/ttt.ts
var import_kolmafia109 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2014.ts
var $_f_importantMonsters = import_kolmafia112.Monster.get(
  [
    // L4:
    "beanbat",
    // L5:
    "Knob Goblin Harem Girl",
    // L7:
    "dirty old lihc",
    // L8:
    "dairy goat",
    // L9:
    "bearpig topiary animal",
    "elephant (meatcar?) topiary animal",
    "spider (duck?) topiary animal",
    // L10:
    "Quiet Healer",
    "Burly Sidekick",
    // L11:
    // Hidden City:
    "baa-relief sheep",
    "pygmy bowler",
    "pygmy shaman",
    "pygmy janitor",
    "pygmy witch accountant",
    "pygmy witch surgeon",
    // Spookyraven:
    "animated ornate nightstand",
    "elegant animated nightstand",
    "cabinet of Dr. Limpieza",
    "possessed wine rack",
    "monstrous boiler",
    "writing desk",
    "chalkdust wraith",
    "banshee librarian",
    // Palindome:
    "whitesnake",
    "white lion",
    // Zeppelin:
    "man with the red buttons",
    "red butler",
    "red skeleton",
    // Desert:
    "blur",
    "tomb rat",
    // L12:
    "batwinged gremlin (tool)",
    "erudite gremlin (tool)",
    "spider gremlin (tool)",
    "vegetable gremlin (tool)"
  ]
);
function icehouseMonster() {
  (0, import_kolmafia112.visitUrl)("museum.php?action=icehouse");
  if (!(0, import_kolmafia112.containsText)((0, import_kolmafia112.getProperty)("banishedMonsters"), "ice house")) {
    return import_kolmafia112.Monster.none;
  } else {
    var banishMap = new Map(
      (0, import_kolmafia112.splitString)((0, import_kolmafia112.getProperty)("banishedMonsters"), ":").map(
        (_v, _i) => [
          _i,
          _v
        ]
      )
    );
    for (var i = 0; i < banishMap.size; i++) {
      if ((banishMap.get(i) ?? banishMap.set(i, "").get(i)) === "ice house") {
        return (0, import_kolmafia112.toMonster)(
          banishMap.get(i - 1) ?? banishMap.set(i - 1, "").get(i - 1)
        );
      }
    }
  }
  return import_kolmafia112.Monster.none;
}
function icehouseUserErrorProtection() {
  if (icehouseMonster() === import_kolmafia112.Monster.none) {
    return true;
  } else if ($_f_importantMonsters.includes(icehouseMonster())) {
    if ((0, import_kolmafia112.userConfirm)(
      `You have a ${icehouseMonster().toString()} frozen in your icehouse. Autoscend thinks it might cause problems, do you want us to melt it? Will default to 'Yes' in 15 seconds.`,
      15e3,
      true
    )) {
      (0, import_kolmafia112.visitUrl)("museum.php?action=icehouse");
      (0, import_kolmafia112.runChoice)(1);
      return true;
    } else {
      (0, import_kolmafia112.print)("If autoscend runs into problems, it's on you!");
      return false;
    }
  } else {
    return true;
  }
}

// packages/kolmafia/src/autoscend/auto_familiar.ts
function is100FamRun() {
  if ((0, import_kolmafia113.toFamiliar)((0, import_kolmafia113.getProperty)("auto_100familiar")) === import_kolmafia113.Familiar.none) {
    return false;
  }
  return true;
}
function pathHasFamiliar() {
  if (is_boris() || is_jarlsberg() || is_pete() || isActuallyEd() || in_darkGyffte() || in_lta() || in_pokefam()) {
    return false;
  }
  if (in_robot() && (0, import_kolmafia113.toInt)((0, import_kolmafia113.getProperty)("youRobotTop")) !== 2) {
    return false;
  }
  return true;
}
function pathAllowsChangingFamiliar() {
  if (!pathHasFamiliar()) {
    return false;
  }
  if (in_quantumTerrarium()) {
    return false;
  }
  return true;
}
function auto_have_familiar(fam) {
  if (!pathHasFamiliar()) {
    return false;
  }
  if (!auto_is_valid$1(fam)) {
    return false;
  }
  var blacklist = /* @__PURE__ */ new Map();
  if ((0, import_kolmafia113.getProperty)("auto_blacklistFamiliar") !== "") {
    var noFams = new Map(
      (0, import_kolmafia113.splitString)((0, import_kolmafia113.getProperty)("auto_blacklistFamiliar"), ";").map(
        (_v, _i) => [
          _i,
          _v
        ]
      )
    );
    var _iterator2 = _createForOfIteratorHelper(
      noFams
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2), fam_1 = _step2$value[1];
        blacklist.set((0, import_kolmafia113.toFamiliar)(fam_1.trim()), 1);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (blacklist.has(fam)) {
    return false;
  }
  return (0, import_kolmafia113.haveFamiliar)(fam);
}

// packages/kolmafia/src/autoscend/auto_equipment.ts
function equipmentAmount(equipment) {
  if (equipment === import_kolmafia114.Item.none) {
    return 0;
  }
  var amount = (0, import_kolmafia114.itemAmount)(equipment) + (0, import_kolmafia114.equippedAmount)(equipment, true);
  if (equipment.toString() in (0, import_kolmafia114.getRelated)($item`broken champagne bottle`, "fold")) {
    amount = (0, import_kolmafia114.itemAmount)(wrap_item($item`January's Garbage Tote`));
  }
  return amount;
}
function possessEquipment(equipment) {
  return equipmentAmount(equipment) > 0;
}

// packages/kolmafia/src/autoscend/iotms/mr2007.ts
var import_kolmafia115 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/class_act.ts
var import_kolmafia116 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/class_act_two.ts
var import_kolmafia117 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/journeyman.ts
var import_kolmafia118 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_util.ts
function isGuildClass() {
  return $classes`Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief`.includes(
    (0, import_kolmafia119.myClass)()
  );
}
function auto_is_valid(it) {
  if (!glover_usable(it.toString())) {
    if (it !== $item`protonic accelerator pack`) {
      return false;
    } else if (!expectGhostReport() && !haveGhostReport()) {
      return false;
    }
  }
  if (it === $item`grimstone mask`) {
    if (!isGuildClass()) {
      return false;
    }
  }
  if (in_bhy()) {
    return bhy_is_item_valid(it);
  }
  if (in_iluh() && it.fullness > 0) {
    return iluh_foodConsumable(it.toString());
  }
  if ((0, import_kolmafia119.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia119.isTrendy)(it);
  }
  return (0, import_kolmafia119.isUnrestricted)(it);
}
function auto_is_valid$1(fam) {
  if (is100FamRun()) {
    return (0, import_kolmafia119.toFamiliar)((0, import_kolmafia119.getProperty)("auto_100familiar")) === fam;
  }
  if ((0, import_kolmafia119.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia119.isTrendy)(fam);
  }
  return bhy_usable(fam.toString()) && glover_usable(fam.toString()) && zombieSlayer_usable(fam) && wereprof_usable(fam.toString()) && iluh_famAllowed(fam.toString()) && (0, import_kolmafia119.isUnrestricted)(fam);
}
function auto_log(s, color, log_level) {
  if (log_level > (0, import_kolmafia119.toInt)((0, import_kolmafia119.getProperty)("auto_log_level"))) {
    return;
  }
  switch (log_level) {
    case 1:
      (0, import_kolmafia119.print)(`[WARNING] ${s}`, color);
      break;
    case 2:
      (0, import_kolmafia119.print)(`[INFO] ${s}`, color);
      break;
    case 3:
      (0, import_kolmafia119.print)(`[DEBUG] ${s}`, color);
      break;
  }
}
function auto_log_info(s) {
  var color = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "blue";
  auto_log(s, color, 2);
}
function auto_log_debug(s) {
  var color = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "black";
  auto_log(s, color, 3);
}
function auto_turbo() {
  return (0, import_kolmafia119.toBoolean)((0, import_kolmafia119.getProperty)("auto_turbo"));
}
function wrap_item(it) {
  if (in_lol()) {
    return auto_ItemToReplica(it);
  }
  return it;
}

// packages/kolmafia/src/autoscend/auto_consume.ts
var $_saucemavenApplies_saucy_foods = $items`cold hi mein, devil hair pasta, Fettris, fettucini Inconnu, fleetwood mac 'n' cheese, fusillocybin, gnocchetti di Nietzsche, haunted Hell ramen, Hell ramen, hot hi mein, libertagliatelle, linguini immondizia bianco, linguini of the sea, prescription noodles, shells a la shellfish, sleazy hi mein, spagecialetti, spaghetti con calaveras, spaghetti with Skullheads, spooky hi mein, stinky hi mein, turkish mostaccioli`;

// packages/kolmafia/src/autoscend/auto_acquire.ts
function canPull(it) {
  var historical = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if ((0, import_kolmafia123.inHardcore)()) {
    return false;
  }
  if (in_lol()) {
    if (it.fullness === 0 && it.inebriety === 0 && !it.potion && !it.combat && !it.usable) {
      return false;
    }
  }
  if (it === import_kolmafia123.Item.none) {
    return false;
  }
  if (!(0, import_kolmafia123.isUnrestricted)(it)) {
    return false;
  }
  if ((0, import_kolmafia123.pullsRemaining)() === 0) {
    return false;
  }
  if (pulledToday(it)) {
    return false;
  }
  if ((0, import_kolmafia123.storageAmount)(it) > 0) {
    return true;
  } else if (!(0, import_kolmafia123.isTradeable)(it)) {
    return false;
  }
  if (!auto_is_valid(it)) {
    return false;
  }
  var meat = (0, import_kolmafia123.myStorageMeat)();
  if ((0, import_kolmafia123.canInteract)()) {
    meat = (0, import_kolmafia123.max)(meat, (0, import_kolmafia123.myMeat)() - 5e3);
  }
  var curPrice = (0, import_kolmafia123.historicalPrice)(it);
  if (!historical) {
    curPrice = auto_mall_price(it);
  }
  if (curPrice < 1) {
    return false;
  }
  if (curPrice > (0, import_kolmafia123.toInt)((0, import_kolmafia123.getProperty)("autoBuyPriceLimit"))) {
    return false;
  } else if (curPrice < meat) {
    return true;
  }
  return false;
}
function pulledToday(it) {
  var allPulls = new Map(
    (0, import_kolmafia123.splitString)((0, import_kolmafia123.getProperty)("_roninStoragePulls"), ",").map(
      (_v, _i) => [
        _i,
        _v
      ]
    )
  );
  var _iterator = _createForOfIteratorHelper(
    allPulls.keys()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var i = _step.value;
      if ((0, import_kolmafia123.toInt)(allPulls.get(i) ?? allPulls.set(i, "").get(i)) === (0, import_kolmafia123.toInt)(it)) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
function auto_mall_price(it) {
  if (isSpeakeasyDrink(it)) {
    return -1;
  }
  if (0 in (0, import_kolmafia123.availableChoiceOptions)() || 1 in (0, import_kolmafia123.availableChoiceOptions)()) {
    return (0, import_kolmafia123.historicalPrice)(it);
  }
  if ((0, import_kolmafia123.isTradeable)(it)) {
    var retval;
    var it_type = (0, import_kolmafia123.itemType)(it);
    if (it_type === "food" || it_type === "booze") {
      retval = (0, import_kolmafia123.historicalPrice)(it);
      if (retval === 0) {
        retval = (0, import_kolmafia123.mallPrice)(it);
      }
    } else {
      retval = (0, import_kolmafia123.mallPrice)(it);
    }
    if (retval === -1) {
      return (0, import_kolmafia123.historicalPrice)(it);
    }
    return retval;
  }
  return -1;
}

// packages/kolmafia/src/autoscend/auto_bedtime.ts
var import_kolmafia125 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_zlib.ts
var import_kolmafia124 = require("kolmafia");

// packages/kolmafia/src/autoscend/auto_settings.ts
var import_kolmafia126 = require("kolmafia");
function trackingSplitterFixer(oldSetting, day, newSetting) {
  var setting = (0, import_kolmafia126.getProperty)(oldSetting);
  if (setting === "") {
    return false;
  }
  var cleanSpaces = new AshMatcher(", ", setting);
  setting = cleanSpaces.replaceAll(",");
  var retval = new Map(
    (0, import_kolmafia126.splitString)(setting, ",").map((_v, _i) => [_i, _v])
  );
  var _iterator = _createForOfIteratorHelper(
    retval.keys()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var x = _step.value;
      if ((retval.get(x) ?? retval.set(x, "").get(x)) === "") {
        continue;
      }
      var dayAdder = new AshMatcher(
        "[(]",
        retval.get(x) ?? retval.set(x, "").get(x)
      );
      retval.set(x, dayAdder.replaceAll(`(${day}:`));
      if ((0, import_kolmafia126.getProperty)(newSetting) !== "") {
        (0, import_kolmafia126.setProperty)(
          newSetting,
          `${(0, import_kolmafia126.getProperty)(newSetting)},${retval.get(x) ?? retval.set(x, "").get(x)}`
        );
      } else {
        (0, import_kolmafia126.setProperty)(newSetting, retval.get(x) ?? retval.set(x, "").get(x));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  (0, import_kolmafia126.setProperty)(oldSetting, "");
  return true;
}
function cleanup_property(target) {
  if ((0, import_kolmafia126.getProperty)(target) === "" && (0, import_kolmafia126.propertyExists)(target)) {
    (0, import_kolmafia126.removeProperty)(target);
  }
}
function auto_rename_property(oldprop, newprop) {
  cleanup_property(oldprop);
  cleanup_property(newprop);
  if (!(0, import_kolmafia126.propertyExists)(oldprop) || (0, import_kolmafia126.propertyExists)(newprop)) {
    return;
  }
  (0, import_kolmafia126.renameProperty)(oldprop, newprop);
}
function boolFix(p) {
  var p_val = (0, import_kolmafia126.getProperty)(p);
  if (p_val === "need" || p_val === "yes") {
    (0, import_kolmafia126.setProperty)(p, true.toString());
  }
  if (p_val === "no") {
    (0, import_kolmafia126.setProperty)(p, false.toString());
  }
}
function auto_settingsUpgrade() {
  trackingSplitterFixer("auto_banishes_day1", 1, "auto_banishes");
  trackingSplitterFixer("auto_banishes_day2", 2, "auto_banishes");
  trackingSplitterFixer("auto_banishes_day3", 3, "auto_banishes");
  trackingSplitterFixer("auto_banishes_day4", 4, "auto_banishes");
  trackingSplitterFixer("auto_yellowRay_day1", 1, "auto_yellowRays");
  trackingSplitterFixer("auto_yellowRay_day2", 2, "auto_yellowRays");
  trackingSplitterFixer("auto_yellowRay_day3", 3, "auto_yellowRays");
  trackingSplitterFixer("auto_yellowRay_day4", 4, "auto_yellowRays");
  trackingSplitterFixer("auto_lashes_day1", 1, "auto_lashes");
  trackingSplitterFixer("auto_lashes_day2", 2, "auto_lashes");
  trackingSplitterFixer("auto_lashes_day3", 3, "auto_lashes");
  trackingSplitterFixer("auto_lashes_day4", 4, "auto_lashes");
  trackingSplitterFixer("auto_renenutet_day1", 1, "auto_renenutet");
  trackingSplitterFixer("auto_renenutet_day2", 2, "auto_renenutet");
  trackingSplitterFixer("auto_renenutet_day3", 3, "auto_renenutet");
  trackingSplitterFixer("auto_renenutet_day4", 4, "auto_renenutet");
  if ((0, import_kolmafia126.getProperty)("auto_100familiar") === "yes") {
    (0, import_kolmafia126.setProperty)("auto_100familiar", (0, import_kolmafia126.myFamiliar)().toString());
  }
  if ((0, import_kolmafia126.getProperty)("auto_100familiar") === "no") {
    (0, import_kolmafia126.setProperty)("auto_100familiar", import_kolmafia126.Familiar.none.toString());
  }
  if ((0, import_kolmafia126.getProperty)("auto_100familiar") === "false") {
    (0, import_kolmafia126.setProperty)("auto_100familiar", import_kolmafia126.Familiar.none.toString());
  }
  if ((0, import_kolmafia126.getProperty)("auto_killingjar") === "done") {
    (0, import_kolmafia126.setProperty)("auto_killingjar", "finished");
  }
  boolFix("auto_wandOfNagamar");
  boolFix("auto_chasmBusted");
  auto_rename_property("auto_edDelayTimer", "auto_delayTimer");
  boolFix("auto_grimstoneFancyOilPainting");
  boolFix("auto_grimstoneOrnateDowsingRod");
  if ((0, import_kolmafia126.getProperty)("auto_abooclover") === "used") {
    (0, import_kolmafia126.setProperty)("auto_abooclover", false.toString());
  }
  if ((0, import_kolmafia126.getProperty)("lastPlusSignUnlock") === "true") {
    auto_log_debug(
      "lastPlusSignUnlock was changed to a boolean, fixing...",
      "red"
    );
    (0, import_kolmafia126.setProperty)("lastPlusSignUnlock", (0, import_kolmafia126.myAscensions)().toString());
  }
  if ((0, import_kolmafia126.getProperty)("lastTempleUnlock") === "true") {
    auto_log_debug(
      "lastTempleUnlock was changed to a boolean, fixing...",
      "red"
    );
    (0, import_kolmafia126.setProperty)("lastTempleUnlock", (0, import_kolmafia126.myAscensions)().toString());
  }
  if ((0, import_kolmafia126.propertyExists)("auto_consumeKeyLimePies")) {
    (0, import_kolmafia126.setProperty)(
      "auto_dontConsumeKeyLimePies",
      (!(0, import_kolmafia126.toBoolean)((0, import_kolmafia126.getProperty)("auto_consumeKeyLimePies"))).toString()
    );
  }
  if ((0, import_kolmafia126.propertyExists)("auto_alwaysGetSteelOrgan")) {
    (0, import_kolmafia126.setProperty)(
      "auto_getSteelOrgan_initialize",
      (0, import_kolmafia126.getProperty)("auto_alwaysGetSteelOrgan")
    );
  }
  if ((0, import_kolmafia126.getProperty)("auto_debug") === "true") {
    (0, import_kolmafia126.setProperty)("auto_log_level", 3 .toString());
  }
  if ((0, import_kolmafia126.propertyExists)("auto_logLevel")) {
    switch ((0, import_kolmafia126.toLowerCase)((0, import_kolmafia126.getProperty)("auto_logLevel"))) {
      case "critical":
      case "crit":
      case "error":
      case "err":
        (0, import_kolmafia126.setProperty)("auto_log_level", 0 .toString());
        break;
      case "warning":
      case "warn":
        (0, import_kolmafia126.setProperty)("auto_log_level", 1 .toString());
        break;
      case "info":
        (0, import_kolmafia126.setProperty)("auto_log_level", 2 .toString());
        break;
      case "debug":
        (0, import_kolmafia126.setProperty)("auto_log_level", 3 .toString());
        break;
    }
  }
  if (!(0, import_kolmafia126.propertyExists)("logLevelDefaultChangedToDebug")) {
    (0, import_kolmafia126.setProperty)("auto_log_level", 3 .toString());
    (0, import_kolmafia126.setProperty)("logLevelDefaultChangedToDebug", true.toString());
  }
}
function auto_settingsFix() {
  if ((0, import_kolmafia126.toInt)((0, import_kolmafia126.getProperty)("auto_save_adv_override")) < -1) {
    (0, import_kolmafia126.setProperty)("auto_save_adv_override", (-1).toString());
  }
  if ((0, import_kolmafia126.toInt)((0, import_kolmafia126.getProperty)("auto_log_level")) < 0) {
    (0, import_kolmafia126.setProperty)("auto_log_level", 0 .toString());
  }
  if ((0, import_kolmafia126.toInt)((0, import_kolmafia126.getProperty)("auto_log_level")) > 3) {
    (0, import_kolmafia126.setProperty)("auto_log_level", 3 .toString());
  }
  if ((0, import_kolmafia126.toInt)((0, import_kolmafia126.getProperty)("auto_log_level_restore")) < 0) {
    (0, import_kolmafia126.setProperty)("auto_log_level_restore", 0 .toString());
  }
  if ((0, import_kolmafia126.toInt)((0, import_kolmafia126.getProperty)("auto_log_level_restore")) > 2) {
    (0, import_kolmafia126.setProperty)("auto_log_level_restore", 2 .toString());
  }
}
function auto_settingsDelete() {
  (0, import_kolmafia126.removeProperty)("auto_debug");
  (0, import_kolmafia126.removeProperty)("auto_sonata");
  (0, import_kolmafia126.removeProperty)("auto_edDelayTimer");
  (0, import_kolmafia126.removeProperty)("auto_cubeItems");
  (0, import_kolmafia126.removeProperty)("auto_useCubeling");
  (0, import_kolmafia126.removeProperty)("auto_pullPVPJunk");
  (0, import_kolmafia126.removeProperty)("auto_day1_init");
  (0, import_kolmafia126.removeProperty)("auto_day2_init");
  (0, import_kolmafia126.removeProperty)("auto_day3_init");
  (0, import_kolmafia126.removeProperty)("auto_day4_init");
  (0, import_kolmafia126.removeProperty)("auto_gaudy");
  (0, import_kolmafia126.removeProperty)("auto_beta_test");
  (0, import_kolmafia126.removeProperty)("auto_invaderKilled");
  (0, import_kolmafia126.removeProperty)("auto_airship");
  (0, import_kolmafia126.removeProperty)("auto_ballroom");
  (0, import_kolmafia126.removeProperty)("auto_ballroomflat");
  (0, import_kolmafia126.removeProperty)("auto_ballroomopen");
  (0, import_kolmafia126.removeProperty)("auto_ballroomsong");
  (0, import_kolmafia126.removeProperty)("auto_bat");
  (0, import_kolmafia126.removeProperty)("auto_bean");
  (0, import_kolmafia126.removeProperty)("auto_blackfam");
  (0, import_kolmafia126.removeProperty)("auto_blackmap");
  (0, import_kolmafia126.removeProperty)("auto_boopeak");
  (0, import_kolmafia126.removeProperty)("auto_castlebasement");
  (0, import_kolmafia126.removeProperty)("auto_castleground");
  (0, import_kolmafia126.removeProperty)("auto_castletop");
  (0, import_kolmafia126.removeProperty)("auto_consumption");
  (0, import_kolmafia126.removeProperty)("auto_crypt");
  (0, import_kolmafia126.removeProperty)("auto_day1_cobb");
  (0, import_kolmafia126.removeProperty)("auto_fcle");
  (0, import_kolmafia126.removeProperty)("auto_friars");
  (0, import_kolmafia126.removeProperty)("auto_goblinking");
  (0, import_kolmafia126.removeProperty)("auto_gremlins");
  (0, import_kolmafia126.removeProperty)("auto_gremlinBanishes");
  (0, import_kolmafia126.removeProperty)("auto_gunpowder");
  (0, import_kolmafia126.removeProperty)("auto_hiddenapartment");
  (0, import_kolmafia126.removeProperty)("auto_hiddenbowling");
  (0, import_kolmafia126.removeProperty)("auto_hiddencity");
  (0, import_kolmafia126.removeProperty)("auto_hiddenhospital");
  (0, import_kolmafia126.removeProperty)("auto_hiddenoffice");
  (0, import_kolmafia126.removeProperty)("auto_hiddenunlock");
  (0, import_kolmafia126.removeProperty)("auto_hiddenzones");
  (0, import_kolmafia126.removeProperty)("auto_highlandlord");
  (0, import_kolmafia126.removeProperty)("auto_masonryWall");
  (0, import_kolmafia126.removeProperty)("auto_mcmuffin");
  (0, import_kolmafia126.removeProperty)("auto_mistypeak");
  (0, import_kolmafia126.removeProperty)("auto_mosquito");
  (0, import_kolmafia126.removeProperty)("auto_nuns");
  (0, import_kolmafia126.removeProperty)("auto_oilpeak");
  (0, import_kolmafia126.removeProperty)("auto_orchard");
  (0, import_kolmafia126.removeProperty)("auto_palindome");
  (0, import_kolmafia126.removeProperty)("auto_phatloot");
  (0, import_kolmafia126.removeProperty)("auto_forcePhatLootToken");
  (0, import_kolmafia126.removeProperty)("auto_prewar");
  (0, import_kolmafia126.removeProperty)("auto_prehippy");
  (0, import_kolmafia126.removeProperty)("auto_pirateoutfit");
  (0, import_kolmafia126.removeProperty)("auto_trytower");
  (0, import_kolmafia126.removeProperty)("auto_shenCopperhead");
  (0, import_kolmafia126.removeProperty)("auto_spookyfertilizer");
  (0, import_kolmafia126.removeProperty)("auto_spookymap");
  (0, import_kolmafia126.removeProperty)("auto_spookyravensecond");
  (0, import_kolmafia126.removeProperty)("auto_spookysapling");
  (0, import_kolmafia126.removeProperty)("auto_sonofa");
  (0, import_kolmafia126.removeProperty)("auto_sorceress");
  (0, import_kolmafia126.removeProperty)("auto_swordfish");
  (0, import_kolmafia126.removeProperty)("auto_tavern");
  (0, import_kolmafia126.removeProperty)("auto_trapper");
  (0, import_kolmafia126.removeProperty)("auto_treecoin");
  (0, import_kolmafia126.removeProperty)("auto_twinpeak");
  (0, import_kolmafia126.removeProperty)("auto_twinpeakprogress");
  (0, import_kolmafia126.removeProperty)("auto_war");
  (0, import_kolmafia126.removeProperty)("auto_winebomb");
  (0, import_kolmafia126.removeProperty)("auto_clearCombatScripts");
  (0, import_kolmafia126.removeProperty)("auto_legacyConsumeStuff");
  (0, import_kolmafia126.removeProperty)("betweenAdventureScript");
  (0, import_kolmafia126.removeProperty)("auto_copperhead");
  (0, import_kolmafia126.removeProperty)("auto_mineForOres");
  (0, import_kolmafia126.removeProperty)("auto_hpAutoRecoveryItems");
  (0, import_kolmafia126.removeProperty)("auto_hpAutoRecovery");
  (0, import_kolmafia126.removeProperty)("auto_hpAutoRecoveryTarget");
  (0, import_kolmafia126.removeProperty)("auto_skipDesert");
  (0, import_kolmafia126.removeProperty)("auto_shenStarted");
  (0, import_kolmafia126.removeProperty)("auto_breakstone");
  (0, import_kolmafia126.removeProperty)("auto_aftercore");
  (0, import_kolmafia126.removeProperty)("auto_aboocount");
  (0, import_kolmafia126.removeProperty)("auto_dinseyGarbageMoney");
  (0, import_kolmafia126.removeProperty)("auto_lastABooConsider");
  (0, import_kolmafia126.removeProperty)("auto_lastABooCycleFix");
  (0, import_kolmafia126.removeProperty)("auto_longConMonster");
  (0, import_kolmafia126.removeProperty)("auto_voidWarranty");
  (0, import_kolmafia126.removeProperty)("auto_kingLiberation");
  (0, import_kolmafia126.removeProperty)("auto_borrowedTimeOnLiberation");
  (0, import_kolmafia126.removeProperty)("auto_xiblaxianChoice");
  (0, import_kolmafia126.removeProperty)("auto_extrudeChoice");
  (0, import_kolmafia126.removeProperty)("auto_consumeKeyLimePies");
  (0, import_kolmafia126.removeProperty)("auto_shareMaximizer");
  (0, import_kolmafia126.removeProperty)("auto_allowSharingData");
  (0, import_kolmafia126.removeProperty)("auto_mummeryChoice");
  (0, import_kolmafia126.removeProperty)("auto_choice1119");
  (0, import_kolmafia126.removeProperty)("auto_useTatter");
  (0, import_kolmafia126.removeProperty)("auto_alwaysGetSteelOrgan");
  (0, import_kolmafia126.removeProperty)("auto_logLevel");
  (0, import_kolmafia126.removeProperty)("auto_bedtime_pulls_skip_clover");
  (0, import_kolmafia126.removeProperty)("cloverProtectActive");
  (0, import_kolmafia126.removeProperty)("auto_edCombatHandler");
  (0, import_kolmafia126.removeProperty)("auto_combatHandler");
  (0, import_kolmafia126.removeProperty)("auto_skipNEPOverride");
  (0, import_kolmafia126.removeProperty)("auto_dickstab");
  (0, import_kolmafia126.removeProperty)("auto_getDinseyGarbageMoney");
  (0, import_kolmafia126.removeProperty)("auto_hatchRagamuffinImp");
  (0, import_kolmafia126.removeProperty)("auto_saveMagicalSausage");
  (0, import_kolmafia126.removeProperty)("auto_useWishes");
  (0, import_kolmafia126.removeProperty)("auto_doNotUseCMC");
  (0, import_kolmafia126.removeProperty)("auto_doArtistQuest");
  (0, import_kolmafia126.removeProperty)("auto_noSleepingDog");
  (0, import_kolmafia126.removeProperty)("auto_cookie");
  (0, import_kolmafia126.removeProperty)("auto_doArmory");
  (0, import_kolmafia126.removeProperty)("auto_doMeatsmith");
  (0, import_kolmafia126.removeProperty)("auto_waitingArrowAlcove");
  (0, import_kolmafia126.removeProperty)("auto_combatHandlerFingernailClippers");
  (0, import_kolmafia126.removeProperty)("auto_delayHauntedKitchen");
}
function defaultConfig(prop, val) {
  if (!(0, import_kolmafia126.propertyExists)(prop)) {
    auto_log_info(
      `${prop} has no value set. setting it to the default value of ${val}`
    );
    (0, import_kolmafia126.setProperty)(prop, val);
  }
}
var settingDefaults = /* @__PURE__ */ new Map(
  [
    ["auto_delayTimer", "1"],
    ["auto_abooclover", "true"],
    //Are we considering using a clover at A-Boo Peak?
    ["auto_consumablePriceLimit", "12000"],
    // Max mall price for consumables to eat/drink (also won't exceed mafia's autobuy limit).
    ["auto_paranoia", "-1"],
    ["auto_inv_paranoia", "false"],
    ["auto_save_adv_override", "-1"],
    ["auto_log_level", "3"],
    ["auto_log_level_restore", "0"],
    ["auto_bedtime_pulls_skip", "false"],
    ["auto_bedtime_pulls_pvp_multi", "0.3"],
    ["auto_bedtime_pulls_min_desirability", "1.0"]
  ]
);
function auto_settingsDefaults() {
  var _iterator2 = _createForOfIteratorHelper(settingDefaults), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _step2$value = _slicedToArray(_step2.value, 2), prop = _step2$value[0], val = _step2$value[1];
      defaultConfig(prop, val);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function auto_settings() {
  auto_settingsUpgrade();
  auto_settingsFix();
  auto_settingsDelete();
  auto_settingsDefaults();
}

// packages/kolmafia/src/autoscend/auto_sim.ts
var import_kolmafia127 = require("kolmafia");

// packages/kolmafia/src/autoscend/autoscend_migration.ts
var import_kolmafia128 = require("kolmafia");
var $_f___autoscend_version = "2.0.0";
function autoscend_current_version() {
  if (!(0, import_kolmafia128.propertyExists)("auto_current_version")) {
    (0, import_kolmafia128.setProperty)("auto_current_version", $_f___autoscend_version);
  }
  return (0, import_kolmafia128.getProperty)("auto_current_version");
}

// packages/kolmafia/src/autoscend/iotms/eudora.ts
var import_kolmafia129 = require("kolmafia");
function eudora_available() {
  if ((0, import_kolmafia129.containsText)((0, import_kolmafia129.visitUrl)("account.php"), "tab=correspondence")) {
    return true;
  }
  return false;
}
function eudora_initializeSettings() {
  var retval = /* @__PURE__ */ new Map();
  if (eudora_available()) {
    var eudora_1 = (0, import_kolmafia129.visitUrl)("account.php?tab=correspondence");
    if ((0, import_kolmafia129.containsText)(eudora_1, "Pen Pal") && (0, import_kolmafia129.isUnrestricted)($item`My Own Pen Pal kit`)) {
      retval.set($item`My Own Pen Pal kit`, true);
    }
    if ((0, import_kolmafia129.containsText)(eudora_1, "GameInformPowerDailyPro Magazine") && (0, import_kolmafia129.isUnrestricted)($item`GameInformPowerDailyPro subscription card`)) {
      retval.set($item`GameInformPowerDailyPro subscription card`, true);
    }
    if ((0, import_kolmafia129.containsText)(eudora_1, "Xi Receiver Unit") && (0, import_kolmafia129.isUnrestricted)($item`Xi Receiver Unit`)) {
      retval.set($item`Xi Receiver Unit`, true);
    }
    if ((0, import_kolmafia129.containsText)(eudora_1, "New-You Club") && (0, import_kolmafia129.isUnrestricted)($item`New-You Club Membership Form`)) {
      retval.set($item`New-You Club Membership Form`, true);
    }
    if ((0, import_kolmafia129.containsText)(eudora_1, "Our Daily Candles") && (0, import_kolmafia129.isUnrestricted)($item`Our Daily Candles™ order form`)) {
      retval.set($item`Our Daily Candles™ order form`, true);
    }
  }
  return retval;
}

// packages/kolmafia/src/autoscend/iotms/mr2013.ts
var import_kolmafia130 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/auto_path_util.ts
var import_kolmafia131 = require("kolmafia");

// packages/kolmafia/src/autoscend/paths/community_service.ts
var import_kolmafia132 = require("kolmafia");

// packages/kolmafia/src/autoscend/task_registry.ts
var import_kolmafia134 = require("kolmafia");

// packages/kolmafia/src/autoscend/iotms/mr2012.ts
var import_kolmafia133 = require("kolmafia");

// packages/kolmafia/src/autoscend.ts
function initializeSettings() {
  if (inAftercore()) {
    return;
  }
  var reinitialize = (0, import_kolmafia135.toBoolean)((0, import_kolmafia135.getProperty)("_auto_reinitialize"));
  if (!reinitialize && (0, import_kolmafia135.myAscensions)() === (0, import_kolmafia135.toInt)((0, import_kolmafia135.getProperty)("auto_doneInitialize"))) {
    return;
  }
  (0, import_kolmafia135.setLocation)(import_kolmafia135.Location.none);
  invalidateRestoreOptionCache();
  if (!reinitialize) {
    (0, import_kolmafia135.setProperty)("auto_100familiar", import_kolmafia135.Familiar.none.toString());
    if ((0, import_kolmafia135.myFamiliar)() !== import_kolmafia135.Familiar.none && pathAllowsChangingFamiliar()) {
      var userAnswer = (0, import_kolmafia135.userConfirm)(
        "Familiar already set, is this a 100% familiar run? Will default to 'No' in 15 seconds.",
        15e3,
        false
      );
      if (userAnswer) {
        (0, import_kolmafia135.setProperty)("auto_100familiar", (0, import_kolmafia135.myFamiliar)().toString());
      }
    }
    if ((0, import_kolmafia135.getWorkshed)() !== import_kolmafia135.Item.none) {
      var _userAnswer = (0, import_kolmafia135.userConfirm)(
        "Workshed already set, do you want Autoscend to handle your workshed? Will default to 'Yes' in 15 seconds.",
        15e3,
        true
      );
      if (_userAnswer) {
        (0, import_kolmafia135.setProperty)("auto_workshed", "auto");
      } else {
        (0, import_kolmafia135.setProperty)("auto_workshed", (0, import_kolmafia135.getWorkshed)().toString());
      }
    }
  }
  auto_spoonTuneConfirm();
  icehouseUserErrorProtection();
  (0, import_kolmafia135.setProperty)("auto_abooclover", true.toString());
  (0, import_kolmafia135.setProperty)("auto_aboopending", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_avalancheDeployed", false.toString());
  (0, import_kolmafia135.setProperty)("auto_banishes", "");
  (0, import_kolmafia135.setProperty)("auto_batoomerangDay", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_beatenUpCount", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_beatenUpLastAdv", false.toString());
  (0, import_kolmafia135.removeProperty)("auto_beatenUpLocations");
  (0, import_kolmafia135.setProperty)("auto_getBeehive", false.toString());
  (0, import_kolmafia135.setProperty)("auto_bruteForcePalindome", false.toString());
  (0, import_kolmafia135.setProperty)("auto_doWhiteys", false.toString());
  (0, import_kolmafia135.setProperty)("auto_cabinetsencountered", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_chasmBusted", true.toString());
  (0, import_kolmafia135.setProperty)("auto_chewed", "");
  (0, import_kolmafia135.setProperty)("auto_clanstuff", "0");
  (0, import_kolmafia135.setProperty)("auto_considerCCSCShore", true.toString());
  (0, import_kolmafia135.setProperty)("auto_copies", "");
  (0, import_kolmafia135.setProperty)("auto_dakotaFanning", false.toString());
  (0, import_kolmafia135.setProperty)("auto_day_init", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_day1_dna", "");
  (0, import_kolmafia135.setProperty)("auto_day2WaitLastLevel", "0");
  (0, import_kolmafia135.setProperty)("auto_debuffAsdonDelay", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_disableAdventureHandling", false.toString());
  (0, import_kolmafia135.setProperty)("auto_doCombatCopy", "no");
  (0, import_kolmafia135.setProperty)("auto_dontPhylumBanish", false.toString());
  (0, import_kolmafia135.setProperty)("auto_runDayCount", 2 .toString());
  (0, import_kolmafia135.setProperty)("auto_drunken", "");
  (0, import_kolmafia135.setProperty)("auto_eaten", "");
  (0, import_kolmafia135.setProperty)("auto_familiarChoice", "");
  (0, import_kolmafia135.removeProperty)("auto_forcedNC");
  (0, import_kolmafia135.setProperty)("auto_forceNonCombatLocation", "");
  (0, import_kolmafia135.setProperty)("auto_forceNonCombatSource", "");
  (0, import_kolmafia135.setProperty)("auto_forceNonCombatTurn", (-1).toString());
  (0, import_kolmafia135.setProperty)("auto_forceTavern", false.toString());
  (0, import_kolmafia135.setProperty)("auto_freeruns", "");
  (0, import_kolmafia135.setProperty)("auto_funTracker", "");
  (0, import_kolmafia135.setProperty)("auto_getBoningKnife", false.toString());
  (0, import_kolmafia135.setProperty)("auto_getStarKey", true.toString());
  (0, import_kolmafia135.setProperty)(
    "auto_getSteelOrgan",
    (0, import_kolmafia135.getProperty)("auto_getSteelOrgan_initialize")
  );
  (0, import_kolmafia135.setProperty)("auto_gnasirUnlocked", false.toString());
  (0, import_kolmafia135.setProperty)("auto_grimstoneFancyOilPainting", true.toString());
  (0, import_kolmafia135.setProperty)("auto_grimstoneOrnateDowsingRod", true.toString());
  (0, import_kolmafia135.setProperty)("auto_haveoven", false.toString());
  (0, import_kolmafia135.setProperty)("auto_doGalaktik", (0, import_kolmafia135.getProperty)("auto_doGalaktik_initialize"));
  (0, import_kolmafia135.setProperty)("auto_L8_ninjaAssassinFail", false.toString());
  (0, import_kolmafia135.setProperty)("auto_L8_extremeInstead", false.toString());
  (0, import_kolmafia135.setProperty)("auto_L9_smutOrcPervert", false.toString());
  (0, import_kolmafia135.setProperty)("auto_haveSourceTerminal", false.toString());
  (0, import_kolmafia135.setProperty)("auto_hedge", "fast");
  (0, import_kolmafia135.setProperty)("auto_hippyInstead", false.toString());
  (0, import_kolmafia135.setProperty)("auto_holeinthesky", true.toString());
  (0, import_kolmafia135.setProperty)("auto_ignoreCombat", "");
  (0, import_kolmafia135.setProperty)("auto_ignoreFlyer", false.toString());
  (0, import_kolmafia135.setProperty)("auto_instakill", "");
  (0, import_kolmafia135.setProperty)("auto_instakillSource", "");
  (0, import_kolmafia135.setProperty)("auto_instakillSuccess", false.toString());
  (0, import_kolmafia135.setProperty)("auto_interruptedZones", "");
  (0, import_kolmafia135.setProperty)("auto_iotm_claim", "");
  (0, import_kolmafia135.setProperty)("auto_leaflet_done", false.toString());
  (0, import_kolmafia135.setProperty)("auto_lucky", "");
  (0, import_kolmafia135.setProperty)("auto_luckySource", "none");
  (0, import_kolmafia135.setProperty)("auto_mapperidot", "");
  (0, import_kolmafia135.setProperty)("auto_modernzmobiecount", "");
  (0, import_kolmafia135.setProperty)("auto_powerfulglove", "");
  (0, import_kolmafia135.setProperty)("auto_otherstuff", "");
  (0, import_kolmafia135.setProperty)("auto_paranoia", (-1).toString());
  (0, import_kolmafia135.setProperty)("auto_paranoia_counter", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_parkaSpikesDeployed", false.toString());
  (0, import_kolmafia135.setProperty)("auto_priorCharpaneMode", "0");
  (0, import_kolmafia135.setProperty)("auto_powerLevelAdvCount", "0");
  (0, import_kolmafia135.setProperty)("auto_powerLevelLastAttempted", "0");
  (0, import_kolmafia135.setProperty)("auto_pulls", "");
  (0, import_kolmafia135.removeProperty)("auto_shenZonesTurnsSpent");
  (0, import_kolmafia135.removeProperty)("auto_lastShenTurn");
  (0, import_kolmafia135.setProperty)("auto_sniffs", "");
  (0, import_kolmafia135.setProperty)("auto_stopMinutesToRollover", "5");
  (0, import_kolmafia135.setProperty)("auto_tracker_path", "");
  (0, import_kolmafia135.setProperty)("auto_wandOfNagamar", true.toString());
  (0, import_kolmafia135.setProperty)("auto_wineracksencountered", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_wishes", "");
  (0, import_kolmafia135.setProperty)("auto_writingDeskSummon", false.toString());
  (0, import_kolmafia135.setProperty)("auto_yellowRays", "");
  (0, import_kolmafia135.setProperty)("auto_replaces", "");
  (0, import_kolmafia135.setProperty)("auto_skipNuns", "false");
  (0, import_kolmafia135.setProperty)("auto_skipL12Farm", "false");
  (0, import_kolmafia135.setProperty)("auto_L12FarmStage", "0");
  (0, import_kolmafia135.setProperty)("choiceAdventure1003", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_junkspritesencountered", 0 .toString());
  (0, import_kolmafia135.setProperty)("auto_openedziggurat", false.toString());
  (0, import_kolmafia135.removeProperty)("auto_minedCells");
  (0, import_kolmafia135.removeProperty)("auto_shinningStarted");
  (0, import_kolmafia135.removeProperty)("auto_boughtCommerceGhostItem");
  (0, import_kolmafia135.removeProperty)("auto_saveMargarita");
  (0, import_kolmafia135.removeProperty)("auto_csDoWheel");
  (0, import_kolmafia135.removeProperty)("auto_hccsTurnSave");
  (0, import_kolmafia135.removeProperty)("auto_hccsNoConcludeDay");
  (0, import_kolmafia135.removeProperty)("auto_saveSausage");
  (0, import_kolmafia135.removeProperty)("auto_saveVintage");
  (0, import_kolmafia135.setProperty)("auto_dontUseCookBookBat", false.toString());
  (0, import_kolmafia135.setProperty)("auto_dietpills", 0 .toString());
  (0, import_kolmafia135.setProperty)("_auto_candyMapCompleted", false.toString());
  beehiveConsider(false);
  eudora_initializeSettings();
  heavyrains_initializeSettings();
  awol_initializeSettings();
  aosol_initializeSettings();
  theSource_initializeSettings();
  ed_initializeSettings();
  boris_initializeSettings();
  bond_initializeSettings();
  bugbear_initializeSettings();
  nuclear_initializeSettings();
  pete_initializeSettings();
  pokefam_initializeSettings();
  disguises_initializeSettings();
  glover_initializeSettings();
  bat_initializeSettings();
  koe_initializeSettings();
  kolhs_initializeSettings();
  plumber_initializeSettings();
  lowkey_initializeSettings();
  bhy_initializeSettings();
  qt_initializeSettings();
  jarlsberg_initializeSettings();
  robot_initializeSettings();
  wildfire_initializeSettings();
  zombieSlayer_initializeSettings();
  fotd_initializeSettings();
  lol_initializeSettings();
  small_initializeSettings();
  wereprof_initializeSettings();
  ag_initializeSettings();
  amw_initializeSettings();
  (0, import_kolmafia135.setProperty)("auto_doneInitializePath", (0, import_kolmafia135.myPath)().name);
  (0, import_kolmafia135.setProperty)("auto_doneInitialize", (0, import_kolmafia135.myAscensions)().toString());
  (0, import_kolmafia135.removeProperty)("_auto_reinitialize");
}

// packages/relay/src/pages/info.ts
var import_kolmafia137 = require("kolmafia");

// packages/relay/src/relayUtils.ts
var import_kolmafia136 = require("kolmafia");
function html(data) {
  return { type: "html", data };
}
function validateComponents(components) {
  var _iterator = _createForOfIteratorHelper(
    components
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var component = _step.value;
      if (component.type === "group") {
        validateComponents(component.components);
        continue;
      }
      var button = component;
      if (!button.preference) {
        continue;
      }
      button.name = button.name ?? button.preference;
      if (button.validate) {
        try {
          new Function(`return (${button.validate})`);
        } catch (e) {
          (0, import_kolmafia136.print)(
            `Unable to load ${button.name}'s validator '${button.validate}': ${e}`
          );
          button.validate = void 0;
        }
      }
      if (button.default !== void 0 && typeof button.default !== "string") {
        button.default = `${button.default}`;
      }
      if (!button.default && (0, import_kolmafia136.propertyHasDefault)(button.preference)) {
        button.default = (0, import_kolmafia136.propertyDefaultValue)(button.preference);
      }
      if (button.value !== void 0 && typeof button.value !== "string") {
        button.value = `${button.value}`;
      }
      if (button.type === "dropdown" || button.type === "tags") {
        var dropdown = button;
        if (dropdown.dropdown && typeof dropdown.dropdown[0] === "string") {
          dropdown.dropdown = dropdown.dropdown.map((s) => {
            return { display: s, value: s };
          });
        }
      }
      if (button.type === "tags") {
        var tags = button;
        if (tags.allowDuplicateTags === void 0) {
          tags.allowDuplicateTags = true;
        } else if (typeof tags.allowDuplicateTags === "string") {
          tags.allowDuplicateTags = tags.allowDuplicateTags === "true";
        }
        if (!tags.tagsSeperator) {
          tags.tagsSeperator = ",";
        }
      }
      if (!button.placeholderText) {
        button.placeholderText = button.default ? button.default : "";
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function generateHTML(pages) {
  pages = pages.filter((p) => p);
  var _iterator2 = _createForOfIteratorHelper(
    pages
  ), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var page = _step2.value;
      page.urlPath = page.urlPath ?? page.page;
      validateComponents(page.components);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var buffer = [];
  buffer.push("<!DOCTYPE html>");
  buffer.push("<head>");
  buffer.push('<meta charset="utf-8">');
  buffer.push(
    `<title>${pages.map((p) => p.title).find((t) => t) ?? "Relay"}</title>`
  );
  buffer.push("<style>");
  buffer.push(`${require_react_css()}`);
  buffer.push("</style>");
  buffer.push("</head>");
  buffer.push('<div id="root"></div>');
  buffer.push("<script>");
  buffer.push(
    `let getData = function(callback) {callback(${JSON.stringify(pages).replace(
      /</g,
      "\\u003c"
    )})}`
  );
  buffer.push(`let pwd = ${JSON.stringify((0, import_kolmafia136.myHash)())};`);
  buffer.push(`document.onclick = (e) => {
    if(e.target.classList.contains('notification')) e.target.remove();
  }`);
  buffer.push("<\/script>");
  buffer.push("<script>");
  buffer.push(
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    `${require_react_script()}`.replace(/<\/script/gi, "<\\/script")
  );
  buffer.push("<\/script>");
  return buffer.join("\n");
}

// packages/relay/src/pages/info.ts
function infoTile(label, value) {
  return `<div class="infoTile"><div class="infoTileLabel">${(0, import_kolmafia137.entityEncode)(label)}</div><div class="infoTileValue">${(0, import_kolmafia137.entityEncode)(value)}</div></div>`;
}
function infoPage() {
  var tiles = [
    infoTile("Ascension", `${(0, import_kolmafia137.myAscensions)()}`),
    infoTile("Day", `${(0, import_kolmafia137.myDaycount)()}`),
    infoTile("Turns Played", `${(0, import_kolmafia137.myTurncount)()}`),
    infoTile("Path", (0, import_kolmafia137.myPath)().toString()),
    infoTile("Autoscend Version", autoscend_current_version())
  ];
  if (isActuallyEd()) {
    tiles.push(infoTile("Combats", (0, import_kolmafia137.getProperty)("auto_edCombatCount")));
    tiles.push(
      infoTile("Combat Rounds", (0, import_kolmafia137.getProperty)("auto_edCombatRoundCount"))
    );
  }
  var visited = $locations.all().filter((loc) => loc.turnsSpent > 0).sort((a, b) => b.turnsSpent - a.turnsSpent);
  var rows = visited.map(
    (loc) => `<tr><td>${(0, import_kolmafia137.entityEncode)(loc.toString())}</td><td>${loc.turnsSpent}</td></tr>`
  ).join("");
  return {
    page: "Run Info",
    urlPath: "info",
    components: [
      html(`<div class="infoGrid">${tiles.join("")}</div>`),
      html(
        `<h2>Locations Visited</h2><table class="locationsTable"><tr><th>Location</th><th>Turns</th></tr>${rows}</table>`
      )
    ]
  };
}

// packages/relay/src/pages/settings.ts
var import_kolmafia138 = require("kolmafia");
function buildGroup(path, def, settingsData2, collapsed, inheritedColor) {
  var color = def.color ?? inheritedColor;
  var components = [];
  if (def.children) {
    for (var _i = 0, _Object$entries = Object.entries(def.children); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), childPath = _Object$entries$_i[0], childDef = _Object$entries$_i[1];
      var child = buildGroup(childPath, childDef, settingsData2, true, color);
      if (child) components.push(child);
    }
  }
  var settings = settingsData2[path.toLowerCase()];
  if (settings !== null && settings !== void 0 && settings.length) {
    var _iterator = _createForOfIteratorHelper(
      settings
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var setting = _step.value;
        components.push({
          type: setting.type === "boolean" ? "boolean" : "string",
          name: setting.name,
          preference: setting.property,
          description: setting.description,
          default: settingDefaults.get(setting.property),
          tags: setting.tags.split(",").filter(Boolean)
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (components.length === 0) return null;
  return {
    type: "group",
    name: def.name,
    description: def.description,
    color,
    collapsed,
    components
  };
}
var settingGroupDefs = (
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require_setting_groups()
);
var settingsData = (
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require_autoscend_settings()
);
function settingGroups() {
  var groups = [];
  for (var _i2 = 0, _Object$entries2 = Object.entries(settingGroupDefs); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), path = _Object$entries2$_i[0], def = _Object$entries2$_i[1];
    var group = buildGroup(path, def, settingsData, groups.length > 0);
    if (group) groups.push(group);
  }
  return groups;
}
function familiarComponents() {
  var components = [];
  var hundredFam = (0, import_kolmafia138.toFamiliar)((0, import_kolmafia138.getProperty)("auto_100familiar"));
  var changeable = (0, import_kolmafia138.turnsPlayed)() === 0;
  if (hundredFam !== import_kolmafia138.Familiar.none) {
    components.push(
      html(
        `100% familiar is set to <b>${(0, import_kolmafia138.entityEncode)(`${hundredFam}`)}</b>.${changeable ? " Turns played is at 0 so it might be possible to change this, so long as you have not done any free fights." : ""}`
      )
    );
    if (changeable) {
      components.push({
        type: "interrupt",
        name: "Disable 100% familiar run",
        color: "primary",
        notification: "100% familiar run disabled",
        actions: [{ preference: "auto_100familiar", value: "none" }]
      });
    }
  } else if (changeable) {
    components.push(
      html(
        "100% familiar has not been set. Turns played is at 0 so it might be possible to change this, so long as you have not done any free fights."
      )
    );
    components.push({
      type: "interrupt",
      name: `Set ${(0, import_kolmafia138.myFamiliar)()} as 100% target`,
      color: "primary",
      notification: `100% familiar set to ${(0, import_kolmafia138.myFamiliar)()}`,
      actions: [{ preference: "auto_100familiar", value: `${(0, import_kolmafia138.myFamiliar)()}` }]
    });
  }
  return components;
}
function settingsPage() {
  var components = [
    {
      type: "interrupt",
      name: "Safely Stop Autoscend",
      notification: "Autoscend will stop after the current action is finished.",
      actions: [{ preference: "auto_interrupt", value: "true" }]
    }
  ].concat(_toConsumableArray(
    familiarComponents()
  ), [
    html(
      (0, import_kolmafia138.myAscensions)() === (0, import_kolmafia138.toInt)((0, import_kolmafia138.getProperty)("auto_doneInitialize")) ? "Settings have been initialized for current ascension. You may change Post type settings." : "Settings have <b>not</b> been initialized for current ascension. Do not change Post type settings."
    )
  ], _toConsumableArray(
    settingGroups()
  ));
  return {
    page: "Settings",
    urlPath: "settings",
    title: "autoscend manager",
    components
  };
}

// packages/relay/src/pages/tracked.ts
var import_kolmafia139 = require("kolmafia");
var trackingConfig = (
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require_tracking()
);
var trackingConditions = {
  isActuallyEd,
  inOcrs: in_ocrs,
  notHardcore: () => !(0, import_kolmafia139.inHardcore)(),
  hasPowerfulGlove: auto_hasPowerfulGlove
};
function trackedSections() {
  var sections = [];
  for (var _i = 0, _Object$values = Object.values(trackingConfig); _i < _Object$values.length; _i++) {
    var entry = _Object$values[_i];
    if (entry.condition && !trackingConditions[entry.condition]()) {
      continue;
    }
    sections.push({
      title: entry.title,
      icon: entry.icon,
      columns: entry.columns,
      property: entry.property
    });
  }
  sections.push({
    title: "Beaten Up",
    text: "",
    property: "auto_beatenUpLocations"
  });
  return sections;
}
function trackedPage() {
  return {
    page: "Tracked",
    urlPath: "tracked",
    components: [
      { type: "tracking", sections: trackedSections() }
    ]
  };
}

// packages/relay/src/relay_autoscend.ts
function main() {
  auto_settings();
  initializeSettings();
  (0, import_kolmafia140.write)(generateHTML([settingsPage(), trackedPage(), infoPage()]));
}
