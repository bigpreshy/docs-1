(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"aea776837a8d19443e828f13dd8722c4","url":"404.html"},{"revision":"ec1762a4dfa925f90de68259bdf27209","url":"api/app/index.html"},{"revision":"0dcb1e6bece5a9c8452f65e3b8f598c4","url":"api/client/index.html"},{"revision":"e1482e5be2a33a41ad136d1d17a697a9","url":"api/constants/index.html"},{"revision":"402097f4f087af483a42cc7ffe75df26","url":"api/ctx/index.html"},{"revision":"6869689f0261655531bd0c9af80b3631","url":"api/fiber/index.html"},{"revision":"7fa126f9888e568f197c5d4756766c9d","url":"api/middleware/basicauth/index.html"},{"revision":"255d04b6af66a37166ec4fffe78fd3d2","url":"api/middleware/cache/index.html"},{"revision":"d835599f724e0ce9337039a3ee0afe4e","url":"api/middleware/compress/index.html"},{"revision":"0a9d4702bae7615d4d33ab187e35af57","url":"api/middleware/cors/index.html"},{"revision":"b87d230c1dfaca3414c622d48497a6ba","url":"api/middleware/csrf/index.html"},{"revision":"95dfe5538c6ac0732c751996f7d188b2","url":"api/middleware/earlydata/index.html"},{"revision":"e25774fefa37225f05282c95574fdafa","url":"api/middleware/encryptcookie/index.html"},{"revision":"a76f637b73b5ca1932f5d6013c0aae53","url":"api/middleware/envvar/index.html"},{"revision":"615d0a9a94a0300a25388e30550632e7","url":"api/middleware/etag/index.html"},{"revision":"60c5e9e1126f634956bd1f9bbfe64b06","url":"api/middleware/expvar/index.html"},{"revision":"e51ed7ca74277cdae029635de433fac9","url":"api/middleware/favicon/index.html"},{"revision":"631cfa7ef313d390bc250f7c31e7fb14","url":"api/middleware/filesystem/index.html"},{"revision":"03de66bc996ca4adf3be6c510179803b","url":"api/middleware/idempotency/index.html"},{"revision":"f2692576cd5fdf8b52e702dbfc5480e8","url":"api/middleware/limiter/index.html"},{"revision":"8108215d747b1fcf3d7798a27b665f92","url":"api/middleware/logger/index.html"},{"revision":"c3a3e4cc319e6568cd0851ce90881c7c","url":"api/middleware/monitor/index.html"},{"revision":"ee8d040573cac11342dc33ae7b68ee65","url":"api/middleware/pprof/index.html"},{"revision":"ca8ae09d3fdc879386dddfa1730e6c79","url":"api/middleware/proxy/index.html"},{"revision":"a7ade88bc8a16152f8d92f59432cfd99","url":"api/middleware/recover/index.html"},{"revision":"eedf39783ff6f1619d12bd355859476d","url":"api/middleware/requestid/index.html"},{"revision":"ab0019ccf58e08a446b4fd2049ff4feb","url":"api/middleware/session/index.html"},{"revision":"ef09f6a5237dc382de4495bfb6c0f88a","url":"api/middleware/skip/index.html"},{"revision":"021ddcde8ac15fa61f8713eb64525d3a","url":"api/middleware/timeout/index.html"},{"revision":"cc86bb43258e1ab6bb91265b0ee67db7","url":"assets/css/styles.31bd22fb.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"ae69e40380467f881996d4d489049ef5","url":"assets/js/05e2dc8a.1be43909.js"},{"revision":"64cc69d2edd20b8cdaa14c2296e82318","url":"assets/js/089526fe.e0d48716.js"},{"revision":"1f03331e4424d5733c54c607f4b89549","url":"assets/js/0b8e8946.9737cb48.js"},{"revision":"77737e0407ae71743f1899786986af59","url":"assets/js/0c35ae3f.4a6a2833.js"},{"revision":"68da555a3defc5f41c9c387131a7e0bd","url":"assets/js/0e384e19.8a01657b.js"},{"revision":"d0db29548a86232290b5c45143130630","url":"assets/js/0f17a9fe.5ef0bcb2.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"816c5c171de47f8d9613c11de4d6b8a1","url":"assets/js/105f1242.44ac4049.js"},{"revision":"7bc83298e0a5f8158c54edd3318fc36a","url":"assets/js/14a7e971.6b0e50a3.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"68333d427bf47c20cf46ba1561d6e8d3","url":"assets/js/1588a372.b1bc06cf.js"},{"revision":"b6b0b52d836db7131bff76934fe1c908","url":"assets/js/17896441.9bac49d3.js"},{"revision":"c3d3e4b5620a3fcf12260374741666e7","url":"assets/js/19e7c5f6.d13eccb0.js"},{"revision":"b99c42a19fc1fc1c8de47af47f814c8e","url":"assets/js/1a4e3797.6d445047.js"},{"revision":"fd2c8306b06af2b542ab05b96b62262d","url":"assets/js/1a56c576.c5d925a3.js"},{"revision":"c361adf4bbd8c1d67b75cd7ce45a4975","url":"assets/js/1be78505.9f9ea806.js"},{"revision":"84f06d62bd3cc71913ffa79b35e67e37","url":"assets/js/1ed4c90d.aa68341f.js"},{"revision":"4e5914daf1ed92caaf048ddec1a90e9e","url":"assets/js/20e81fa7.f110b581.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"c4f971382d629aac3a1f0a503b331a31","url":"assets/js/24847ea2.66a9ad01.js"},{"revision":"420a6d206155ea58e69eb37bb3bd2a30","url":"assets/js/26257c43.bd63bc95.js"},{"revision":"9852beaea8d01898e292de670e219587","url":"assets/js/2bc33efd.e3d11864.js"},{"revision":"68ea84508e50622415cb46f927053931","url":"assets/js/3201faa7.b72bac29.js"},{"revision":"ef3831a25924087d813ba6fcb50b5a34","url":"assets/js/32778213.d6bf47b9.js"},{"revision":"943456f0a21d020cd2f8273be6fffe55","url":"assets/js/354823c1.ac25deed.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"5b97096d158f30f68832b6af487b4f75","url":"assets/js/37882858.f37c9a41.js"},{"revision":"54aab8d877918306b3188219591365cd","url":"assets/js/396a05ac.3ac1f096.js"},{"revision":"9659196e342b639fda55b0f80afa4e60","url":"assets/js/411460cb.b8cbd2ee.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"3a6891d8cbaa0a693730501511494cc9","url":"assets/js/41a4aef8.c2faafc5.js"},{"revision":"e912ad7d1f0c18e17089d71fd3d6820f","url":"assets/js/44ea2a3d.b5bb2cb1.js"},{"revision":"5aebf7865e894105e5c5dfcee5be40ef","url":"assets/js/48c6cc07.30b43762.js"},{"revision":"598c78f8cac1a8020512ca77bb55893a","url":"assets/js/4972.16dfd4ea.js"},{"revision":"07e570975c72a0acf45da160fac41c77","url":"assets/js/4a9dde3b.42b5be48.js"},{"revision":"29d55752a16c97558e078ca3f41c2610","url":"assets/js/4b47f78b.62fe7dc0.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"1e2885018f0f052594bc94056e12efbc","url":"assets/js/5229ce75.6851a3ba.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"6b87358f5436445036746cd1af8085b4","url":"assets/js/563969e6.e7c452e4.js"},{"revision":"bf71214044270408c94e4cf52a4e3e18","url":"assets/js/5995d508.ebe90754.js"},{"revision":"05473d17738e4f474b5b41322046b623","url":"assets/js/59e3a47e.c5a0630d.js"},{"revision":"8c8de76efab6a82e84010833379d42ec","url":"assets/js/5aebd6e8.90a34c7b.js"},{"revision":"c4a527c158bcc6faf128e949be169355","url":"assets/js/5f49a855.5cd13e6d.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"508ef0a63f4cee6ba2c241619a3c4985","url":"assets/js/683903ba.bc045ecd.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"32d15cc9a69b1e2b594d23f3237d0ae1","url":"assets/js/696e1f87.fbe5f16f.js"},{"revision":"1d9b0864d1131a0268624a6bf16412b9","url":"assets/js/6b69f1ff.f4a51632.js"},{"revision":"3c7c3035a1d37e2c8760994c432e1554","url":"assets/js/6e3111c2.0aae08f9.js"},{"revision":"4b36f40a54187339b1ed99c5081a36ca","url":"assets/js/6f9f0f49.0beba9a9.js"},{"revision":"c2bd187a1c57cc79a20ae067316c56b1","url":"assets/js/72c9b8f6.ed76eeb3.js"},{"revision":"9cfa1945e48f06fa59034c50c2c98b7b","url":"assets/js/7449d9ed.671e1153.js"},{"revision":"1e5fb2f66c1067a1f248835ad543ae4c","url":"assets/js/7859bc5c.e866db58.js"},{"revision":"1d396c00e9c370f34a076d30e91a580a","url":"assets/js/78c6c509.51e8f27d.js"},{"revision":"330ea74b8824c339bc6b37abf71f22a3","url":"assets/js/7998e0de.c7c8467d.js"},{"revision":"123c734752f08c52523a297da71962d8","url":"assets/js/7a7fff1b.c4d9de38.js"},{"revision":"7257214bb76d738891f124a070697919","url":"assets/js/7e307fec.87930e0b.js"},{"revision":"614d247aec2e0673ee5a7f0374aa7be5","url":"assets/js/800a3acf.106c4236.js"},{"revision":"cdfdf90c5902a25877207d953b7802e2","url":"assets/js/8231ac58.44f4e6e9.js"},{"revision":"58b63e8a3286e92bb3d6844a0b110c12","url":"assets/js/82a52177.98e768b1.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"dce688811a8d22d2e7b3954a969d20a1","url":"assets/js/894f4d94.b6401e18.js"},{"revision":"37dd27fdca0d49597c9e8f1b0a1602b9","url":"assets/js/8d52ac26.d0f61e2e.js"},{"revision":"4c857951d749d7e427ed9762537ec150","url":"assets/js/8ec8555c.73ab6458.js"},{"revision":"43cdea665bb18ee6be41df1da6d16b7f","url":"assets/js/9169002b.cae2e7df.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"7de98f663fcff4a2da1e53d2848d80f4","url":"assets/js/935f2afb.b6dd7874.js"},{"revision":"b67167239fd2db17af1fffb4dfb76ea6","url":"assets/js/9717e045.8be9f37a.js"},{"revision":"5202e01554366654629fa4eb3b700ae6","url":"assets/js/9947fe9c.00fd7688.js"},{"revision":"09afc6d0f281a6837b95b29a3c88ef43","url":"assets/js/9a57fc4d.c2b094f6.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"dc032a804aab70e735e7e77410277c25","url":"assets/js/9e17a0a7.b33a44e4.js"},{"revision":"1d1aee50941da10fe4eb2e72cbe4b3bc","url":"assets/js/a1a0db23.48c2e529.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"7d707212fd8d0d5088f05e0c61e4fcca","url":"assets/js/a98ab587.d217f410.js"},{"revision":"6db6026a061f6eecde97e137e44aaf3c","url":"assets/js/b0ac2aab.1aa5e5b7.js"},{"revision":"9fc2758236ebebf9aac06e97f3f436f3","url":"assets/js/b45514a6.819803a6.js"},{"revision":"3e99c6478e49dc4e45a9fdb6018ae9a2","url":"assets/js/bafae794.75c6ac4d.js"},{"revision":"c80fb0fa7f65eb5282edf2ec85a7fbd7","url":"assets/js/c1bcbd07.87711d1b.js"},{"revision":"28379fef705814c4009310a3cce6d4ac","url":"assets/js/c36fa059.11cbdf99.js"},{"revision":"07e9496839be7c0949e2db0bee40af27","url":"assets/js/c6147012.bc4256c7.js"},{"revision":"9ea0fb9ed1c6424cf43e3ad3748f4202","url":"assets/js/c91a29ee.7e0cc8fa.js"},{"revision":"0cead7c3c6e757ef4caf96011e13e6c1","url":"assets/js/c921e1c5.62f174a6.js"},{"revision":"98ced42c010bf44692465331d04cb6d2","url":"assets/js/c9386115.c6496030.js"},{"revision":"e1e8c2205a9ae49ad3f8024d055f8ba8","url":"assets/js/ca4084cc.54a0f3c9.js"},{"revision":"4b58163e5525388946ca7930f4c96277","url":"assets/js/cd01922d.934f842e.js"},{"revision":"5f5da7499b263fa4ec358991516fecda","url":"assets/js/ceb3afff.4f9b2016.js"},{"revision":"6d65600ebf0cde63316b93773cd1ebf3","url":"assets/js/cf63ef8e.f3bb0280.js"},{"revision":"d5306840741fab64cd62009a9cbcaba2","url":"assets/js/d3f7bfd6.307b4e61.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"284181af067d8e2637de18bcdbd116d7","url":"assets/js/d8d851c4.68577a24.js"},{"revision":"411910a213880c2aae33187e2995032e","url":"assets/js/dd6e99a2.17a256da.js"},{"revision":"3e70553ff8debf6632b5f0e109989a9c","url":"assets/js/df7efcc1.a57e3d29.js"},{"revision":"971cff2893d406b64aa8b70e3e41b744","url":"assets/js/dfc29094.fc28f8fa.js"},{"revision":"7b10d808bdc4525abd594962232444b1","url":"assets/js/e02ba15b.12839a20.js"},{"revision":"f7e865c97e1ae83a310c7188741d9beb","url":"assets/js/e3a7aa50.2fb62ba1.js"},{"revision":"9e2ef7e522c1a798e0862a7fa61dba8a","url":"assets/js/e5c54bdb.2c45e692.js"},{"revision":"ffb4a6758c14c3694e06f4bca6c0d140","url":"assets/js/e77f4328.08d52149.js"},{"revision":"312e6d39330b0d2aa79edb233d80fabb","url":"assets/js/e7e568e4.5e2ee527.js"},{"revision":"0bc75e21ddaa031dbe318284d8066a81","url":"assets/js/e9780dc4.3d3e2181.js"},{"revision":"825040176cccde6a569e5ad3693146c5","url":"assets/js/ee02910b.d3b7cb0d.js"},{"revision":"a79d1c8f061dfbc6a75b0e354f77945d","url":"assets/js/f2e0d9eb.d0750462.js"},{"revision":"42a68d949d983b0956334b4b993dfe94","url":"assets/js/f36dee5a.21d56b3a.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"fa9cb381cadeadfca40b59096e006ee8","url":"assets/js/f740b2ca.38699007.js"},{"revision":"0e19d648bf8bdce8a1c7c8fda99b67f0","url":"assets/js/f7cef55a.e07f0be5.js"},{"revision":"0ba76fdb7ec51de52478778eaedfdc18","url":"assets/js/f9806908.fadac3d2.js"},{"revision":"5f5f6a21632dfb2301d98ada5ab3324d","url":"assets/js/fba67bfa.0684418b.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"bf13c33e1c4a7a58698580ca63aba6ba","url":"assets/js/fc970c7f.16ab22d9.js"},{"revision":"d5769688fe9522260986d73be76dcfcb","url":"assets/js/main.575897ae.js"},{"revision":"d77d8a2d0bd085837a3dce99311e061a","url":"assets/js/runtime~main.616f7391.js"},{"revision":"ffe3d7f1e3249bda3c9dab098b6e4786","url":"category/-middleware/index.html"},{"revision":"a1d04604ba73ef9100062f71de1afc0a","url":"category/api/index.html"},{"revision":"a25d3b28a73b990516dcc3688229c473","url":"category/extra/index.html"},{"revision":"60f19b6bec806086ce500615a46ccd25","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"1c561d647882f7c0526663ab355c8da9","url":"extra/benchmarks/index.html"},{"revision":"3335c316fe5c6c71b2998a7302296cb1","url":"extra/faq/index.html"},{"revision":"12690a2e05886a56251fe16d64a8948e","url":"guide/error-handling/index.html"},{"revision":"58129b699cfab5c2ffb4ea5f4f3aa7e4","url":"guide/faster-fiber/index.html"},{"revision":"08b5706e9eb8ab1195eba5196f678e05","url":"guide/grouping/index.html"},{"revision":"74f7473fd2d4b7f5dad4d18987ef6299","url":"guide/hooks/index.html"},{"revision":"0cc1ec1f2e7c910ddef53d1ba44ff666","url":"guide/routing/index.html"},{"revision":"ce724857d4f410fa4a541703a7066e76","url":"guide/templates/index.html"},{"revision":"9f4b58b720e73833c7341a1943c84f26","url":"guide/validation/index.html"},{"revision":"c227fc78bfafb10f1f861a64c1754da6","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"97c26cedda3a07b7c67fc9521a5adfb4","url":"next/api/app/index.html"},{"revision":"449391937424289cd4f654344304e409","url":"next/api/client/index.html"},{"revision":"49393323fa6e7bbb21b2fba1d9ee22e4","url":"next/api/constants/index.html"},{"revision":"75ae8c4cf6cedffde24c480b4a11e3ba","url":"next/api/ctx/index.html"},{"revision":"74cabd0fc923df10bbd454cb9ef69d50","url":"next/api/fiber/index.html"},{"revision":"77ea3f2ac7557b7342f4c4b067af7f94","url":"next/api/middleware/basicauth/index.html"},{"revision":"27af63a598251092251bea60c47d6226","url":"next/api/middleware/cache/index.html"},{"revision":"c963921a1a463ef53e30e5eb479a1399","url":"next/api/middleware/compress/index.html"},{"revision":"8e5d504efe6eb2e028357a721cc6a88e","url":"next/api/middleware/cors/index.html"},{"revision":"28278c784b48d899231cb559c2f3153d","url":"next/api/middleware/csrf/index.html"},{"revision":"560ba50fef92e150b5f25c8934cf132f","url":"next/api/middleware/earlydata/index.html"},{"revision":"b1e73c5546dc98536268eee4f36b4a2e","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"788c873dc35b2255899aaa47be9cf184","url":"next/api/middleware/envvar/index.html"},{"revision":"332144dbf51e0645d9b4bc1b83654771","url":"next/api/middleware/etag/index.html"},{"revision":"8b650b20d377ac174f4daa55890ee9d7","url":"next/api/middleware/expvar/index.html"},{"revision":"1f0e5e2c5843f858e63e37bd4763c324","url":"next/api/middleware/favicon/index.html"},{"revision":"61f03e64f6017619d3b6a15b48d22075","url":"next/api/middleware/filesystem/index.html"},{"revision":"8103f11a012a78594f15d5cb064678c1","url":"next/api/middleware/idempotency/index.html"},{"revision":"0e63fbf5c69b921bcb34f49622d3f644","url":"next/api/middleware/limiter/index.html"},{"revision":"cc9019795dd103cbaf255090e226e666","url":"next/api/middleware/logger/index.html"},{"revision":"64f2c70121f214470c99d3e713127c68","url":"next/api/middleware/monitor/index.html"},{"revision":"1f72fcf7a865d340e90422862e9901e7","url":"next/api/middleware/pprof/index.html"},{"revision":"f36518f2b82df4d94e84982e0c6c2c58","url":"next/api/middleware/proxy/index.html"},{"revision":"33a5ffc83b099179df1afe322ab18d9d","url":"next/api/middleware/recover/index.html"},{"revision":"75258f9c56fb0988f84fce68a42ca98f","url":"next/api/middleware/requestid/index.html"},{"revision":"7ae0b49b0e6f7a7ef79c66e7087d8e31","url":"next/api/middleware/session/index.html"},{"revision":"6dc41d3b1afaf2bcc0f45808fdac1c14","url":"next/api/middleware/skip/index.html"},{"revision":"18e5e5516427014af6e705a5dda82b9f","url":"next/api/middleware/timeout/index.html"},{"revision":"adb3d651b1b71ebb7c3f33f876ba9cfc","url":"next/category/-middleware/index.html"},{"revision":"2638c88b5dee0adc89fe73739fff5d55","url":"next/category/api/index.html"},{"revision":"d12aa605e51f8ffd4fbe688a26ca27ae","url":"next/category/extra/index.html"},{"revision":"ceab63439778f0c99115a0a11540b7ef","url":"next/category/guide/index.html"},{"revision":"19e700bbb0d02a3f2f898423eb8eaa82","url":"next/extra/benchmarks/index.html"},{"revision":"4b9d3db14ca1820a433fe9dd16ceea47","url":"next/extra/faq/index.html"},{"revision":"54d1b857f0a53e07c979122d00054a49","url":"next/guide/error-handling/index.html"},{"revision":"cba4a2516c462b0efc34d56780f33cb4","url":"next/guide/faster-fiber/index.html"},{"revision":"7d6529eb89c8fe3a9d00b029e35b72a7","url":"next/guide/grouping/index.html"},{"revision":"d6afab09544371d2bbe5aadee83c546f","url":"next/guide/hooks/index.html"},{"revision":"9e8a7e404b5ed132f3b0bb611ca9b1e3","url":"next/guide/routing/index.html"},{"revision":"7f67889490cd9cd6985ed81cb7e14af4","url":"next/guide/templates/index.html"},{"revision":"e891cea60cfaeafd6f7502e814e38f37","url":"next/guide/validation/index.html"},{"revision":"9fca790b1a5ee64402fd97239ac0a598","url":"next/index.html"},{"revision":"3ede3e1ce9202f0da283c382a781e157","url":"next/partials/routing/route-handlers/index.html"},{"revision":"f31f4e67f51df8c59ec840a674acec3b","url":"next/search-index.json"},{"revision":"7a5d6141b3bf45580e0cf526963e844c","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"2884a4b4d098f34fc1e5aa48fda4fbc1","url":"search-index.json"},{"revision":"dd5c003244b87c96b1d12369e558d4e8","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"bd22f2ec33c9a6af703103dca13c0c99","url":"v1.x/api/app/index.html"},{"revision":"93aa1ef13c31f20693ede198d7814f17","url":"v1.x/api/ctx/index.html"},{"revision":"0b0285edf73a097e142b52f62c98c699","url":"v1.x/api/middleware/index.html"},{"revision":"5e3e37ac180d192376b7b04882061c49","url":"v1.x/category/api/index.html"},{"revision":"3c5d4f69d2718a2a06016ccb03073a83","url":"v1.x/category/guide/index.html"},{"revision":"3ef9ceba0af86bf68b563fec7b34e367","url":"v1.x/category/misc/index.html"},{"revision":"de4c6db45b37a74bb76ba6c2f9263d09","url":"v1.x/guide/error-handling/index.html"},{"revision":"d4aeaa416ffd1f3466eba1f8e103c8d0","url":"v1.x/guide/grouping/index.html"},{"revision":"ac1df5e14755470d9206959c0014f328","url":"v1.x/guide/routing/index.html"},{"revision":"d48ceb349bac0041b42f47fcdc528ee5","url":"v1.x/guide/templates/index.html"},{"revision":"d16f09c390d1fa6c4002864f338283ee","url":"v1.x/guide/validating/index.html"},{"revision":"86340e9412a9771a65db1796d7f994fc","url":"v1.x/index.html"},{"revision":"4d1a4442ecf94b3399f0b1647df17d35","url":"v1.x/misc/benchmarks/index.html"},{"revision":"c19f083fcb2056879f1ae34d65715f4e","url":"v1.x/misc/faq/index.html"},{"revision":"64fee88e115c4063748c24ea327b6ae2","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();