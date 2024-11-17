"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5618],{5618:(Se,W,P)=>{P.r(W),P.d(W,{CarCreatePage:()=>Ee});var d=P(467),Q=P(177),p=P(8326),v=P(4742),Z=P(5079),H=P(5873);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var M=function(i){return i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE",i}(M||{});class A extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const re=i=>{var e,t,o,n,r;const l=i.CapacitorCustomPlatform||null,s=i.Capacitor||{},c=s.Plugins=s.Plugins||{},u=i.CapacitorPlatforms,y=(null===(e=null==u?void 0:u.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==l?l.name:(i=>{var e,t;return null!=i&&i.androidBridge?"android":null!==(t=null===(e=null==i?void 0:i.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(i)),Le=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==y()),Ae=(null===(o=null==u?void 0:u.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(f=>{const m=B.get(f);return!!(null!=m&&m.platforms.has(y())||J(f))}),J=(null===(n=null==u?void 0:u.currentPlatform)||void 0===n?void 0:n.getPluginHeader)||(f=>{var m;return null===(m=s.PluginHeaders)||void 0===m?void 0:m.find(O=>O.name===f)}),B=new Map,Te=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((f,m={})=>{const O=B.get(f);if(O)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),O.proxy;const L=y(),U=J(f);let _;const je=function(){var h=(0,d.A)(function*(){return!_&&L in m?_=_="function"==typeof m[L]?yield m[L]():m[L]:null!==l&&!_&&"web"in m&&(_=_="function"==typeof m.web?yield m.web():m.web),_});return function(){return h.apply(this,arguments)}}(),D=h=>{let g;const w=(...k)=>{const E=je().then(b=>{const F=((h,g)=>{var w,k;if(!U){if(h)return null===(k=h[g])||void 0===k?void 0:k.bind(h);throw new A(`"${f}" plugin is not implemented on ${L}`,M.Unimplemented)}{const E=null==U?void 0:U.methods.find(b=>g===b.name);if(E)return"promise"===E.rtype?b=>s.nativePromise(f,g.toString(),b):(b,F)=>s.nativeCallback(f,g.toString(),b,F);if(h)return null===(w=h[g])||void 0===w?void 0:w.bind(h)}})(b,h);if(F){const $=F(...k);return g=null==$?void 0:$.remove,$}throw new A(`"${f}.${h}()" is not implemented on ${L}`,M.Unimplemented)});return"addListener"===h&&(E.remove=(0,d.A)(function*(){return g()})),E};return w.toString=()=>`${h.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:h,writable:!1,configurable:!1}),w},K=D("addListener"),Y=D("removeListener"),Re=(h,g)=>{const w=K({eventName:h},g),k=function(){var b=(0,d.A)(function*(){const F=yield w;Y({eventName:h,callbackId:F},g)});return function(){return b.apply(this,arguments)}}(),E=new Promise(b=>w.then(()=>b({remove:k})));return E.remove=(0,d.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield k()}),E},G=new Proxy({},{get(h,g){switch(g){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return U?Re:K;case"removeListener":return Y;default:return D(g)}}});return c[f]=G,B.set(f,{name:f,proxy:G,platforms:new Set([...Object.keys(m),...U?[L]:[]])}),G});return s.convertFileSrc||(s.convertFileSrc=f=>f),s.getPlatform=y,s.handleError=f=>i.console.error(f),s.isNativePlatform=Le,s.isPluginAvailable=Ae,s.pluginMethodNoop=(f,m,O)=>Promise.reject(`${O} does not have an implementation of "${m}".`),s.registerPlugin=Te,s.Exception=A,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},T=(i=>i.Capacitor=re(i))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),R=T.registerPlugin;class S{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const l=this.windowListeners[e];l&&!l.registered&&this.addWindowListener(l),n&&this.sendRetainedArgumentsForEvent(e);const s=function(){var u=(0,d.A)(function*(){return o.removeListener(e,t)});return function(){return u.apply(this,arguments)}}();return Promise.resolve({remove:s})}removeAllListeners(){var e=this;return(0,d.A)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t,o){const n=this.listeners[e];if(n)n.forEach(r=>r(t));else if(o){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new T.Exception(e,M.Unimplemented)}unavailable(e="not available"){return new T.Exception(e,M.Unavailable)}removeListener(e,t){var o=this;return(0,d.A)(function*(){const n=o.listeners[e];if(!n)return;const r=n.indexOf(t);o.listeners[e].splice(r,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(o=>{this.notifyListeners(e,o)}))}}const V=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),N=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class oe extends S{getCookies(){return(0,d.A)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[n,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=N(n).trim(),r=N(r).trim(),t[n]=r}),t})()}setCookie(e){return(0,d.A)(function*(){try{const t=V(e.key),o=V(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),l=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${n}; path=${r}; ${l};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,d.A)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,d.A)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,d.A)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}R("CapacitorCookies",{web:()=>new oe});const ie=function(){var i=(0,d.A)(function*(e){return new Promise((t,o)=>{const n=new FileReader;n.onload=()=>{const r=n.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},n.onerror=r=>o(r),n.readAsDataURL(e)})});return function(t){return i.apply(this,arguments)}}();class ce extends S{request(e){return(0,d.A)(function*(){const t=((i,e={})=>{const t=Object.assign({method:i.method||"GET",headers:i.headers},e),n=((i={})=>{const e=Object.keys(i);return Object.keys(i).map(n=>n.toLocaleLowerCase()).reduce((n,r,l)=>(n[r]=i[e[l]],n),{})})(i.headers)["content-type"]||"";if("string"==typeof i.data)t.body=i.data;else if(n.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[l,s]of Object.entries(i.data||{}))r.set(l,s);t.body=r.toString()}else if(n.includes("multipart/form-data")||i.data instanceof FormData){const r=new FormData;if(i.data instanceof FormData)i.data.forEach((s,c)=>{r.append(c,s)});else for(const s of Object.keys(i.data))r.append(s,i.data[s]);t.body=r;const l=new Headers(t.headers);l.delete("content-type"),t.headers=l}else(n.includes("application/json")||"object"==typeof i.data)&&(t.body=JSON.stringify(i.data));return t})(e,e.webFetchExtra),o=((i,e=!0)=>i?Object.entries(i).reduce((o,n)=>{const[r,l]=n;let s,c;return Array.isArray(l)?(c="",l.forEach(u=>{s=e?encodeURIComponent(u):u,c+=`${r}=${s}&`}),c.slice(0,-1)):(s=e?encodeURIComponent(l):l,c=`${r}=${s}`),`${o}&${c}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),n=o?`${e.url}?${o}`:e.url,r=yield fetch(n,t),l=r.headers.get("content-type")||"";let c,u,{responseType:s="text"}=r.ok?e:{};switch(l.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":u=yield r.blob(),c=yield ie(u);break;case"json":c=yield r.json();break;default:c=yield r.text()}const C={};return r.headers.forEach((y,I)=>{C[I]=y}),{data:c,headers:C,status:r.status,url:r.url}})()}get(e){var t=this;return(0,d.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,d.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,d.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,d.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,d.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}R("CapacitorHttp",{web:()=>new ce});var x=function(i){return i.Prompt="PROMPT",i.Camera="CAMERA",i.Photos="PHOTOS",i}(x||{}),j=function(i){return i.Rear="REAR",i.Front="FRONT",i}(j||{}),z=function(i){return i.Uri="uri",i.Base64="base64",i.DataUrl="dataUrl",i}(z||{});class X extends S{getPhoto(e){var t=this;return(0,d.A)(function*(){return new Promise(function(){var o=(0,d.A)(function*(n,r){if(e.webUseInput||e.source===x.Photos)t.fileInputExperience(e,n,r);else if(e.source===x.Prompt){let l=document.querySelector("pwa-action-sheet");l||(l=document.createElement("pwa-action-sheet"),document.body.appendChild(l)),l.header=e.promptLabelHeader||"Photo",l.cancelable=!1,l.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],l.addEventListener("onSelection",function(){var s=(0,d.A)(function*(c){0===c.detail?t.fileInputExperience(e,n,r):t.cameraExperience(e,n,r)});return function(c){return s.apply(this,arguments)}}())}else t.cameraExperience(e,n,r)});return function(n,r){return o.apply(this,arguments)}}())})()}pickImages(e){var t=this;return(0,d.A)(function*(){return new Promise(function(){var o=(0,d.A)(function*(n,r){t.multipleFileInputExperience(n,r)});return function(n,r){return o.apply(this,arguments)}}())})()}cameraExperience(e,t,o){var n=this;return(0,d.A)(function*(){if(customElements.get("pwa-camera-modal")){const r=document.createElement("pwa-camera-modal");r.facingMode=e.direction===j.Front?"user":"environment",document.body.appendChild(r);try{yield r.componentOnReady(),r.addEventListener("onPhoto",function(){var l=(0,d.A)(function*(s){const c=s.detail;null===c?o(new A("User cancelled photos app")):c instanceof Error?o(c):t(yield n._getCameraPhoto(c,e)),r.dismiss(),document.body.removeChild(r)});return function(s){return l.apply(this,arguments)}}()),r.present()}catch{n.fileInputExperience(e,t,o)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),n.fileInputExperience(e,t,o)})()}fileInputExperience(e,t,o){let n=document.querySelector("#_capacitor-camera-input");const r=()=>{var l;null===(l=n.parentNode)||void 0===l||l.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input",n.type="file",n.hidden=!0,document.body.appendChild(n),n.addEventListener("change",l=>{const s=n.files[0];let c="jpeg";if("image/png"===s.type?c="png":"image/gif"===s.type&&(c="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const u=new FileReader;u.addEventListener("load",()=>{if("dataUrl"===e.resultType)t({dataUrl:u.result,format:c});else if("base64"===e.resultType){const C=u.result.split(",")[1];t({base64String:C,format:c})}r()}),u.readAsDataURL(s)}else t({webPath:URL.createObjectURL(s),format:c}),r()}),n.addEventListener("cancel",l=>{o(new A("User cancelled photos app")),r()})),n.accept="image/*",n.capture=!0,e.source===x.Photos||e.source===x.Prompt?n.removeAttribute("capture"):e.direction===j.Front?n.capture="user":e.direction===j.Rear&&(n.capture="environment"),n.click()}multipleFileInputExperience(e,t){let o=document.querySelector("#_capacitor-camera-input-multiple");const n=()=>{var r;null===(r=o.parentNode)||void 0===r||r.removeChild(o)};o||(o=document.createElement("input"),o.id="_capacitor-camera-input-multiple",o.type="file",o.hidden=!0,o.multiple=!0,document.body.appendChild(o),o.addEventListener("change",r=>{const l=[];for(let s=0;s<o.files.length;s++){const c=o.files[s];let u="jpeg";"image/png"===c.type?u="png":"image/gif"===c.type&&(u="gif"),l.push({webPath:URL.createObjectURL(c),format:u})}e({photos:l}),n()}),o.addEventListener("cancel",r=>{t(new A("User cancelled photos app")),n()})),o.accept="image/*",o.click()}_getCameraPhoto(e,t){return new Promise((o,n)=>{const r=new FileReader,l=e.type.split("/")[1];"uri"===t.resultType?o({webPath:URL.createObjectURL(e),format:l,saved:!1}):(r.readAsDataURL(e),r.onloadend=()=>{const s=r.result;o("dataUrl"===t.resultType?{dataUrl:s,format:l,saved:!1}:{base64String:s.split(",")[1],format:l,saved:!1})},r.onerror=s=>{n(s)})})}checkPermissions(){var e=this;return(0,d.A)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw e.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var e=this;return(0,d.A)(function*(){throw e.unimplemented("Not implemented on web.")})()}pickLimitedLibraryPhotos(){var e=this;return(0,d.A)(function*(){throw e.unavailable("Not implemented on web.")})()}getLimitedLibraryPhotos(){var e=this;return(0,d.A)(function*(){throw e.unavailable("Not implemented on web.")})()}}new X;const ue=R("Camera",{web:()=>new X});var de=P(4011),a=P(4438),fe=P(1237),me=P(4785),pe=P(7795),he=P(4729);function ge(i,e){1&i&&(a.j41(0,"span",17),a.EFF(1,"Brand is required"),a.k0s())}function Pe(i,e){if(1&i&&a.DNE(0,ge,2,0,"span",17),2&i){let t;const o=a.XpG();a.vxM(null!=(t=o.carForm.get("brand"))&&null!=t.errors&&t.errors.required?0:-1)}}function ve(i,e){1&i&&(a.j41(0,"span",17),a.EFF(1,"Model is required"),a.k0s())}function be(i,e){if(1&i&&a.DNE(0,ve,2,0,"span",17),2&i){let t;const o=a.XpG();a.vxM(null!=(t=o.carForm.get("model"))&&null!=t.errors&&t.errors.required?0:-1)}}function Ce(i,e){1&i&&(a.j41(0,"span",17),a.EFF(1,"License plate is required"),a.k0s())}function we(i,e){1&i&&(a.j41(0,"span",17),a.EFF(1,"License plate is not valid"),a.k0s())}function ye(i,e){if(1&i&&a.DNE(0,Ce,2,0,"span",17)(1,we,2,0,"span",17),2&i){let t;const o=a.XpG();a.vxM(null!=(t=o.carForm.get("licensePlate"))&&null!=t.errors&&t.errors.required?0:null!=(t=o.carForm.get("licensePlate"))&&null!=t.errors&&t.errors.invalidPlateNumber?1:-1)}}function _e(i,e){if(1&i&&a.nrm(0,"img",13),2&i){const t=a.XpG();a.Y8G("src",t.previewFrontPhoto,a.B4B)}}function ke(i,e){if(1&i&&a.nrm(0,"img",14),2&i){const t=a.XpG();a.Y8G("src",t.previewBackPhoto,a.B4B)}}let Ee=(()=>{var i;class e{constructor(o,n,r,l){this.router=o,this.carService=n,this.toastController=r,this.authenticationService=l,this.carForm=new p.gE({brand:new p.MJ("",[p.k0.required]),model:new p.MJ("",[p.k0.required]),licensePlate:new p.MJ("",[p.k0.required,(0,de.lI)()]),frontPhoto:new p.MJ(null,[p.k0.required]),backPhoto:new p.MJ(null,[p.k0.required])}),this.previewFrontPhoto=null,this.previewBackPhoto=null,(0,Z.a)({powerOutline:H.iG$,returnUpBackOutline:H.lWu})}ngOnInit(){}onFileChange(o,n){const r=o.target.files[0];r&&this.carForm.patchValue({[n]:r})}onSaveCar(){var o;this.carForm.invalid||this.carService.getCarByLicensePlate(null!==(o=this.carForm.value.licensePlate)&&void 0!==o?o:"").then(n=>{var r,l,s;if(n)return void this.errorToast("A car with the same license plate is already registered");const c=this.carForm.value,u={licensePlate:null!==(r=c.licensePlate)&&void 0!==r?r:"",brand:null!==(l=c.brand)&&void 0!==l?l:"",model:null!==(s=c.model)&&void 0!==s?s:"",frontPhotoUrl:"",backPhotoUrl:""},C=c.frontPhoto,y=c.backPhoto;C&&y?this.carService.saveCar(u,C,y).then(()=>{this.router.navigate(["/car"])}):this.errorToast("Please upload or capture both front and back photos.")}).catch(()=>{this.errorToast("An error occurred. Please try again later.")})}onSeeCars(){this.router.navigate(["/car"])}onLogout(){this.authenticationService.logout().then(()=>{this.router.navigate(["/login"])}).catch(()=>{this.errorToast("An error occurred. Please try again later.")})}errorToast(o){var n=this;return(0,d.A)(function*(){yield(yield n.toastController.create({message:o,duration:3e3,position:"top",color:"danger",buttons:[{text:"Dismiss",role:"cancel"}]})).present()})()}capturePhoto(o){var n=this;return(0,d.A)(function*(){try{const r=yield ue.getPhoto({resultType:z.Uri,source:x.Camera});if(r&&r.webPath){const l=yield n.uriToFile(r.webPath,`${o}.jpg`);n.setPhotoField(o,l)}}catch{n.errorToast("Error capturing photo. Please try again.")}})()}uploadPhoto(o){const n=document.createElement("input");n.type="file",n.accept="image/*",n.onchange=r=>{const l=r.target.files[0];l&&this.setPhotoField(o,l)},n.click()}setPhotoField(o,n){"frontPhoto"===o?this.previewFrontPhoto=URL.createObjectURL(n):"backPhoto"===o&&(this.previewBackPhoto=URL.createObjectURL(n)),this.carForm.patchValue({[o]:n})}uriToFile(o,n){return(0,d.A)(function*(){const l=yield(yield fetch(o)).blob();return new File([l],n,{type:"image/jpeg"})})()}}return(i=e).\u0275fac=function(o){return new(o||i)(a.rXU(fe.Ix),a.rXU(me.K),a.rXU(pe.K_),a.rXU(he.k))},i.\u0275cmp=a.VBU({type:i,selectors:[["app-car-create"]],standalone:!0,features:[a.aNF],decls:42,vars:8,consts:[["slot","end","name","return-up-back-outline",3,"click"],["slot","end","name","power-outline",3,"click"],[1,"create-car",3,"fullscreen"],[1,"ion-justify-content-center","ion-align-items-center",2,"height","100vh"],["size","12","size-md","8","size-lg","6"],[1,"form-container"],[3,"ngSubmit","formGroup"],["label","Brand","labelPlacement","stacked","placeholder","Toyota","formControlName","brand"],["label","Model","labelPlacement","stacked","placeholder","Yaris","formControlName","model"],["label","License Plate","labelPlacement","stacked","placeholder","AB-123-CD","formControlName","licensePlate"],["position","stacked"],[1,"photo-actions"],["expand","block",3,"click"],["alt","Front Photo Preview",1,"photo-preview",3,"src"],["alt","Back Photo Preview",1,"photo-preview",3,"src"],[1,"container-button"],["expand","full","type","submit",3,"disabled"],[1,"span-error"]],template:function(o,n){if(1&o&&(a.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),a.EFF(3,"Create Car"),a.k0s(),a.j41(4,"ion-icon",0),a.bIt("click",function(){return n.onSeeCars()}),a.k0s(),a.j41(5,"ion-icon",1),a.bIt("click",function(){return n.onLogout()}),a.k0s()()(),a.j41(6,"ion-content",2)(7,"ion-grid")(8,"ion-row",3)(9,"ion-col",4)(10,"div",5)(11,"form",6),a.bIt("ngSubmit",function(){return n.onSaveCar()}),a.j41(12,"ion-item"),a.nrm(13,"ion-input",7),a.k0s(),a.DNE(14,Pe,1,1),a.j41(15,"ion-item"),a.nrm(16,"ion-input",8),a.k0s(),a.DNE(17,be,1,1),a.j41(18,"ion-item"),a.nrm(19,"ion-input",9),a.k0s(),a.DNE(20,ye,2,1),a.j41(21,"ion-item")(22,"ion-label",10),a.EFF(23,"Front Photo"),a.k0s(),a.j41(24,"div",11)(25,"ion-button",12),a.bIt("click",function(){return n.capturePhoto("frontPhoto")}),a.EFF(26,"Take Photo"),a.k0s(),a.j41(27,"ion-button",12),a.bIt("click",function(){return n.uploadPhoto("frontPhoto")}),a.EFF(28,"Upload Photo"),a.k0s()(),a.DNE(29,_e,1,1,"img",13),a.k0s(),a.j41(30,"ion-item")(31,"ion-label",10),a.EFF(32,"Back Photo"),a.k0s(),a.j41(33,"div",11)(34,"ion-button",12),a.bIt("click",function(){return n.capturePhoto("backPhoto")}),a.EFF(35,"Take Photo"),a.k0s(),a.j41(36,"ion-button",12),a.bIt("click",function(){return n.uploadPhoto("backPhoto")}),a.EFF(37,"Upload Photo"),a.k0s()(),a.DNE(38,ke,1,1,"img",14),a.k0s(),a.j41(39,"div",15)(40,"ion-button",16),a.EFF(41,"Save Car"),a.k0s()()()()()()()()),2&o){let r,l,s;a.R7$(6),a.Y8G("fullscreen",!0),a.R7$(5),a.Y8G("formGroup",n.carForm),a.R7$(3),a.vxM(null!=(r=n.carForm.get("brand"))&&r.dirty?14:-1),a.R7$(3),a.vxM(null!=(l=n.carForm.get("model"))&&l.dirty?17:-1),a.R7$(3),a.vxM(null!=(s=n.carForm.get("licensePlate"))&&s.dirty?20:-1),a.R7$(9),a.vxM(n.previewFrontPhoto?29:-1),a.R7$(9),a.vxM(n.previewBackPhoto?38:-1),a.R7$(2),a.Y8G("disabled",n.carForm.invalid)}},dependencies:[Q.MD,v.bv,v.Jm,v.hU,v.W9,v.lO,v.eU,v.iq,v.$w,v.uz,v.he,v.ln,v.BC,v.ai,v.Gw,p.YN,p.qT,p.BC,p.cb,p.X1,p.j4,p.JD],styles:["ion-content[_ngcontent-%COMP%]{--background: none;background-image:url(/assets/web-background.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover}a[_ngcontent-%COMP%]{color:var(--ion-color-primary-tint);text-decoration:none;cursor:pointer}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.span-error[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:14px;display:block}.create-car[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{background-color:var(--ion-color-light);padding:40px;border-radius:8px}.create-car[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:30px}.create-car[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] + .span-error[_ngcontent-%COMP%]{margin-top:-25px;margin-bottom:10px;color:var(--ion-color-danger)}.create-car[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]:last-child > ion-item[_ngcontent-%COMP%] > ion-input[_ngcontent-%COMP%]{width:95%}.create-car[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}.create-car[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80%;margin-bottom:20px}.create-car[_ngcontent-%COMP%]   .photo-actions[_ngcontent-%COMP%]{display:flex;margin-top:10px;margin-bottom:10px}.create-car[_ngcontent-%COMP%]   .photo-preview[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto;margin-bottom:10px}ion-icon[_ngcontent-%COMP%]{padding:20px;font-size:20px;cursor:pointer}ion-icon[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);transform:scale(1.1)}"]}),e})()}}]);