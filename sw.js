(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7ecc36bd42522fd342085adf2802c97e","url":"-middleware/index.html"},{"revision":"11abd81d43467783d167d5fa21291740","url":"404.html"},{"revision":"6364cd7b4d5087f3d10686d7176f6864","url":"api/app/index.html"},{"revision":"4f095af527c047ed594add1d02d01dbd","url":"api/client/index.html"},{"revision":"d1c52b71d739101785e05759f733e935","url":"api/constants/index.html"},{"revision":"1f3d09f457890fcba7892cea7ee37451","url":"api/ctx/index.html"},{"revision":"6707d3da6c1311fdf7d4c1a4369ce8b2","url":"api/fiber/index.html"},{"revision":"7e088bfa7afd89a84278c699f1cb67a1","url":"api/middleware/basicauth/index.html"},{"revision":"d946b7d595dd3ffb7332889f4c46e17a","url":"api/middleware/cache/index.html"},{"revision":"cb4f8f79cb9f3dccc6d56d51cff325e8","url":"api/middleware/compress/index.html"},{"revision":"eeaff71a61e54200f1c18a0b3e29e011","url":"api/middleware/cors/index.html"},{"revision":"5a8f2eb9e59af69ef207e6dfae681c81","url":"api/middleware/csrf/index.html"},{"revision":"d4be941375d9d5e3b49d76a1de78a7ec","url":"api/middleware/earlydata/index.html"},{"revision":"273e9fd8296593c0d3a203c2945b21f0","url":"api/middleware/encryptcookie/index.html"},{"revision":"e289c466f68f24595b3102d76a73d2e6","url":"api/middleware/envvar/index.html"},{"revision":"cc9155d3187582dfad36c88339db0013","url":"api/middleware/etag/index.html"},{"revision":"b6ba668fa2d7479c3651b177cdce41fb","url":"api/middleware/expvar/index.html"},{"revision":"881e43b922b29363f187f7cbcf60c07b","url":"api/middleware/favicon/index.html"},{"revision":"a9e9cc5c2b88d892aaa7a1eea4b7a04b","url":"api/middleware/filesystem/index.html"},{"revision":"1741a3f63f45434627df3b66b60ea9c0","url":"api/middleware/idempotency/index.html"},{"revision":"93f462feb86f334c1725249b40f1ab5e","url":"api/middleware/limiter/index.html"},{"revision":"7b09d81fef4557d4373cb2a72c5b9b17","url":"api/middleware/logger/index.html"},{"revision":"9d4ed710d06316a8a133ec41cdc5fa15","url":"api/middleware/monitor/index.html"},{"revision":"dbf3838b03d15dc3c354c1cdfc7f89af","url":"api/middleware/pprof/index.html"},{"revision":"ce583961d011b2244ce1bd65e4162a20","url":"api/middleware/proxy/index.html"},{"revision":"e544eeb941073bbc51bd4e81a3f13a38","url":"api/middleware/recover/index.html"},{"revision":"211a97808ef00fcf3d994c8dbcaa57fa","url":"api/middleware/requestid/index.html"},{"revision":"ba1667ec069bcb741d1ced229fb07754","url":"api/middleware/session/index.html"},{"revision":"1931ee6208ae00f405e1e26c23163bce","url":"api/middleware/skip/index.html"},{"revision":"de5a81f78c0b9c958532991a2e068d9f","url":"api/middleware/timeout/index.html"},{"revision":"cc86bb43258e1ab6bb91265b0ee67db7","url":"assets/css/styles.31bd22fb.css"},{"revision":"4ad4004d358c66a72fb69a730ae0ac93","url":"assets/js/05a04cc8.f70d38fb.js"},{"revision":"f2661e72f2c535a93df11c9906146df5","url":"assets/js/05e2dc8a.34000c98.js"},{"revision":"1db7bd3d912c734e97a6284642d6abff","url":"assets/js/089526fe.00e65cfb.js"},{"revision":"266c577ef3516b3db975cb1bfab55759","url":"assets/js/0b8e8946.a5b1b33a.js"},{"revision":"00e92299574847e06c2a9d495eed7baf","url":"assets/js/0c35ae3f.4ae13ae9.js"},{"revision":"df84f06313a2a3ae3edb8a52fc152352","url":"assets/js/0e384e19.1c49a9c3.js"},{"revision":"633df3fb533878c0f20d4908674a62fa","url":"assets/js/0f17a9fe.c48485ef.js"},{"revision":"e130e2350907568aff3e97936954a70c","url":"assets/js/0faeb6cb.ac01fd04.js"},{"revision":"8ff086e84db40f888a10a77b7bc7fc81","url":"assets/js/105f1242.ae7b1195.js"},{"revision":"74c5b9b045f40a9d6c9434d34eabba51","url":"assets/js/14a7e971.18bdbefb.js"},{"revision":"f0eb3e10492ffbaf85677dfcb8fb4a90","url":"assets/js/14eb3368.deff6f73.js"},{"revision":"9769daf5026fed6458c9dd9661789bc1","url":"assets/js/1588a372.82967e96.js"},{"revision":"b6b0b52d836db7131bff76934fe1c908","url":"assets/js/17896441.9bac49d3.js"},{"revision":"3677844f5a3b1155cf2177a73a69b65e","url":"assets/js/19e7c5f6.36c4b5a1.js"},{"revision":"b99c42a19fc1fc1c8de47af47f814c8e","url":"assets/js/1a4e3797.6d445047.js"},{"revision":"fe965def680ec81b131a7a708b93f3dc","url":"assets/js/1a56c576.ec0a186d.js"},{"revision":"c361adf4bbd8c1d67b75cd7ce45a4975","url":"assets/js/1be78505.9f9ea806.js"},{"revision":"8689b1c5d54e64ff4a492d0b5c3f4ca1","url":"assets/js/1ed4c90d.f8e41ca1.js"},{"revision":"efa9d3b1f9188513c9b3c1596a777c4c","url":"assets/js/20e81fa7.d8200c40.js"},{"revision":"21f65e983e654a0b6825c9e4338f52e5","url":"assets/js/230.06e9bff8.js"},{"revision":"8278edc76fc3c4a2be3323fc17dc643c","url":"assets/js/247783bb.b20f80cc.js"},{"revision":"38621c98218ba990a78ec609c19e46ac","url":"assets/js/24847ea2.359b4bb1.js"},{"revision":"6b19aced406bd8f57a7cae595c21fe72","url":"assets/js/26257c43.861748a3.js"},{"revision":"e03e1c6cc23542379ca3d11bfe2b5bbe","url":"assets/js/2bc33efd.d3076cb7.js"},{"revision":"03cb6906884f03856fe59aaa9c97af48","url":"assets/js/3201faa7.e2776f55.js"},{"revision":"2255a31aa8870320e231669f76e5eaf3","url":"assets/js/32778213.722e28d8.js"},{"revision":"0280374ec6532057746ec6bdd2c1f30c","url":"assets/js/354823c1.3ab101a3.js"},{"revision":"8e3b8f167516f6567f6ff34522196d4d","url":"assets/js/3719c62c.693effe3.js"},{"revision":"2aaf76223e5c9dc58df77709afbd6b2a","url":"assets/js/37882858.a54d4df0.js"},{"revision":"9ad82455565f1b2bc404ac74212bd92f","url":"assets/js/396a05ac.e93936d1.js"},{"revision":"2ed931e946eb029db3f2392e67ff04e8","url":"assets/js/411460cb.019de39e.js"},{"revision":"d13a0b82e439e1243fdf336a7c1e84cb","url":"assets/js/4129286c.6024df0a.js"},{"revision":"95191580f30f99d6e73038396ff991e0","url":"assets/js/41a4aef8.6d00e684.js"},{"revision":"f35a681bc1ed33eaf4802737390588c2","url":"assets/js/44ea2a3d.94551ab4.js"},{"revision":"c3ed93d6940eef770c5d52e03d50916d","url":"assets/js/48c6cc07.19d984ff.js"},{"revision":"598c78f8cac1a8020512ca77bb55893a","url":"assets/js/4972.16dfd4ea.js"},{"revision":"580ad55152ddd901245f9957125d35b7","url":"assets/js/4a9dde3b.bc0872a9.js"},{"revision":"76330ebd70ac099ee34e4d1cbe237b51","url":"assets/js/4b47f78b.0f72cdd9.js"},{"revision":"8a586a383e4e62a3235a9d462a349eb7","url":"assets/js/5131.8aadd48c.js"},{"revision":"5b0ed95e83619ac0a6f6f680dc7cfe2f","url":"assets/js/5229ce75.525bd62a.js"},{"revision":"0933a70374cdd0535785868363a5598d","url":"assets/js/5283.0af36832.js"},{"revision":"1db7139270887fccf88a1866597bed62","url":"assets/js/5525.999d509e.js"},{"revision":"c7c671a4b9ee51d3492008c4643422a8","url":"assets/js/563969e6.3f883d18.js"},{"revision":"ea66770147501d4f18ecce6296ddf651","url":"assets/js/5995d508.71af0169.js"},{"revision":"60874de1be41d7b92e9bad837ef817da","url":"assets/js/59e3a47e.aaf19aff.js"},{"revision":"e55f4521bcb00de314bd99de0427714e","url":"assets/js/5aebd6e8.885e4f8d.js"},{"revision":"a6a0f325136d7aedaa3e721b9c414a99","url":"assets/js/5f49a855.770639fe.js"},{"revision":"e9f1b777e9c4309263aec9edc71f332b","url":"assets/js/615fd3de.9c409b23.js"},{"revision":"31065a46960829505f7256a713d62f45","url":"assets/js/65a2e3ff.8cb8b5c4.js"},{"revision":"6fc9c0a8a28ecf0df9e0a4c59cbfa907","url":"assets/js/683903ba.d6c0fa13.js"},{"revision":"942216b12e920343b6b540c7d9358435","url":"assets/js/696b59c8.6b3be49d.js"},{"revision":"436a693b63cba3bf3b1585bd467f74c8","url":"assets/js/696e1f87.4654afff.js"},{"revision":"a0e1aa80668a523cc461fc7432a39591","url":"assets/js/6b69f1ff.29b54b9d.js"},{"revision":"1902d8e275eac2e296ee333201b1785e","url":"assets/js/6e3111c2.eb74c8a1.js"},{"revision":"a7a883b9b7b8dae13f518754df236967","url":"assets/js/6f9f0f49.642c4474.js"},{"revision":"7af17664f47fdd3d6511f237faf14552","url":"assets/js/72c9b8f6.a6772dea.js"},{"revision":"dac39ba2dc0d2d08851c602cdff2c4f3","url":"assets/js/7449d9ed.857af9b9.js"},{"revision":"7385749b1ee45c8660874744a5f385df","url":"assets/js/7859bc5c.8d2f735c.js"},{"revision":"bd235891ff840e8a8832798bbcf1ea29","url":"assets/js/78c6c509.50b7a247.js"},{"revision":"10e5639ff0d4334485b82e1dcaed9ab7","url":"assets/js/7998e0de.350df5f2.js"},{"revision":"27863e4d4b729406e82c245e8d5cff79","url":"assets/js/7a7fff1b.c465b81f.js"},{"revision":"1a0916368e5bc861ba80ff898c1273ba","url":"assets/js/7e307fec.aa9c0901.js"},{"revision":"855a0f46d5e0576b808488a715bc3b0f","url":"assets/js/800a3acf.0b68fe2f.js"},{"revision":"9da4edf3b954fecd0c5f4bb20d36f663","url":"assets/js/8231ac58.62b5ccfd.js"},{"revision":"8840012e6108010c8c6ba130ddb49ea5","url":"assets/js/82a52177.30e19fe1.js"},{"revision":"b85e1f5cf0fbbbd0f26fb82998b39dbb","url":"assets/js/8443.f0fb2769.js"},{"revision":"7f98aa3e0fad17778f1d33157eb6b020","url":"assets/js/894f4d94.e85c06eb.js"},{"revision":"bb4e1cc641e143e3eabc04690e41340b","url":"assets/js/8d52ac26.1e650af2.js"},{"revision":"3e0585db87c3183a5f3bcbe78210dc6d","url":"assets/js/8ec8555c.f052436a.js"},{"revision":"369975ed695f4eea900694d58898515d","url":"assets/js/9169002b.2d42c943.js"},{"revision":"a1211cf5a6d622fa1e090e4e5ae385e4","url":"assets/js/9226f6dc.f30749c7.js"},{"revision":"7de98f663fcff4a2da1e53d2848d80f4","url":"assets/js/935f2afb.b6dd7874.js"},{"revision":"a701d93302734882e3149c8bd3e9caac","url":"assets/js/9717e045.b8332dbc.js"},{"revision":"a2fb55eb2543654722b42c45d643e17d","url":"assets/js/9947fe9c.8a12ff06.js"},{"revision":"975adb9e66b0608fe563edd30236c1a3","url":"assets/js/9a57fc4d.f7d6b903.js"},{"revision":"37ae3ea0a34a2db10b1d4b5d6bd3dafd","url":"assets/js/9c153fbf.0546dc18.js"},{"revision":"e8dba945b1f51ea7e748b694c91e56e5","url":"assets/js/9e17a0a7.f08f3a12.js"},{"revision":"40345df7bf62304d480460727b8ad74d","url":"assets/js/a1a0db23.04e28bad.js"},{"revision":"cf0cc78a17a2affd9cdd116406f4a85d","url":"assets/js/a4f7be8a.62e6a2d6.js"},{"revision":"b08f5a02602efaef0c9a3c1bf86365fa","url":"assets/js/a98ab587.6281a18f.js"},{"revision":"12b273ff88fb5a766bd0e85857bfc442","url":"assets/js/b0ac2aab.780f5656.js"},{"revision":"8e70d002bc624ea1740d73ff88364e62","url":"assets/js/b45514a6.04e9d7fb.js"},{"revision":"f156b5ad4dc34ad4828e3eed2f64aae2","url":"assets/js/bafae794.22fc54a4.js"},{"revision":"bf51eb83cf9504280501bd6a92498699","url":"assets/js/c1bcbd07.9593c2cf.js"},{"revision":"55646f85e99fb1b527913003b4de1135","url":"assets/js/c36fa059.db6f0b26.js"},{"revision":"ef93316cf12d3bff41f7b4e457f6d58d","url":"assets/js/c6147012.1bb32548.js"},{"revision":"78529209e417e82c368b837af893bacc","url":"assets/js/c91a29ee.06d73cf3.js"},{"revision":"e1737e3ad324b44b9101463c6d669645","url":"assets/js/c921e1c5.b37b7611.js"},{"revision":"3f1ef8e15a493f38f2ad29019ccf896b","url":"assets/js/c9386115.3d4ac558.js"},{"revision":"0721bd42d264b91be1053698a2fcb882","url":"assets/js/ca4084cc.3bfcab30.js"},{"revision":"81275fe2e6196725e31e2ac9e2a8374a","url":"assets/js/cd01922d.fcb5342f.js"},{"revision":"d69880715e3966af74224b5e3191142e","url":"assets/js/ceb3afff.946cc50f.js"},{"revision":"200a55e53d78727cb0dc6773a0c9cd75","url":"assets/js/cf63ef8e.1e839809.js"},{"revision":"e679bae23fccc748793b1a893e0e77b4","url":"assets/js/d3f7bfd6.24e70e35.js"},{"revision":"3e5f94fdbcdebffa83f45f90584e3dbf","url":"assets/js/d56ded4a.46d4c4cd.js"},{"revision":"964bdc3cbcdf07fa8f7946f3d9992dc2","url":"assets/js/d8d851c4.3835e814.js"},{"revision":"e24024ad66e149214b093999e8228b1a","url":"assets/js/dd6e99a2.b7107282.js"},{"revision":"82e22b95e5e6286a08aaa03908e91a41","url":"assets/js/df7efcc1.30d50a2c.js"},{"revision":"abc36c164e62ec1a0886c640504e6933","url":"assets/js/dfc29094.8223f538.js"},{"revision":"3f70b24f0ac6e63ecd7b70c1f114614f","url":"assets/js/e02ba15b.96fedad7.js"},{"revision":"2c4b48daa28bb952eeccd3ccbfff4d01","url":"assets/js/e3a7aa50.bd7aa2c0.js"},{"revision":"38654ef8be389a8b14eef0d9ae654398","url":"assets/js/e5c54bdb.0f48450d.js"},{"revision":"4b5eb3a1b779bff2a841d9c706bcd6e8","url":"assets/js/e77f4328.60c14558.js"},{"revision":"13c355bfd70b7760f636443446eb19d2","url":"assets/js/e7e568e4.138725c2.js"},{"revision":"4c8f4004224d73422a6568b889faa278","url":"assets/js/e9780dc4.8f07ef28.js"},{"revision":"8ebda3384de77d796c5c5e75eb5b18cd","url":"assets/js/ee02910b.0656cb19.js"},{"revision":"457392a9d6619d516fa5832fde205467","url":"assets/js/f2e0d9eb.bab36a6b.js"},{"revision":"86230cead5716eda6f3a5919b7e90936","url":"assets/js/f36dee5a.8ef04eb7.js"},{"revision":"51d9b295fc96a607ee116d7b62256f52","url":"assets/js/f3a8b621.aeec68ca.js"},{"revision":"e2ff5f2a39633b65dc945bb3602bf484","url":"assets/js/f740b2ca.8a7e32a1.js"},{"revision":"b9fe1b10268d731f05183e2390a0df21","url":"assets/js/f7cef55a.cbc1e119.js"},{"revision":"82c3d9ea555c3a9b0045f63f9513f302","url":"assets/js/f9806908.1572594d.js"},{"revision":"12b9845a5938f0b05a905b496f316ff2","url":"assets/js/fba67bfa.b1e8b12d.js"},{"revision":"1b7c7687d0e744ecf3ef82930b445972","url":"assets/js/fbe53b78.d7ecff38.js"},{"revision":"c477cf17bda73cd3f1c19f85e490c444","url":"assets/js/fc970c7f.69972ba8.js"},{"revision":"05f7d5a632f9c21582d634d239f2504f","url":"assets/js/main.43d8bfd1.js"},{"revision":"0316813a6289ddfec2e241b160a65a63","url":"assets/js/runtime~main.686c24dc.js"},{"revision":"408b0eed08a95ace24a9a1ec75b8428c","url":"category/-middleware/index.html"},{"revision":"e8c05cc73b789d4b6a5737e5554cef8c","url":"category/api/index.html"},{"revision":"3fed5d725eb07c9c180676e1d12bd5dc","url":"category/extra/index.html"},{"revision":"b0b145215124f0c2693376de6edb7dd2","url":"category/guide/index.html"},{"revision":"b6e1edb92f0995eef46b84dc443d4bf4","url":"ctx/index.html"},{"revision":"42d0b285546eee068aaa41f9a9e0b0e3","url":"extra/benchmarks/index.html"},{"revision":"919024858f3ce113b8db9d5f6bee8271","url":"extra/faq/index.html"},{"revision":"ed5407a3d3a5c60cf1690ef406fe4cc8","url":"guide/error-handling/index.html"},{"revision":"5ceab86df882f504460ded5d0763c695","url":"guide/faster-fiber/index.html"},{"revision":"a78981d5ec71b13cbcfcda264b285e29","url":"guide/grouping/index.html"},{"revision":"9f7f73b9f62af2213ed31343447803eb","url":"guide/hooks/index.html"},{"revision":"fb6b32dde3ba090c5aa2b9db96926bda","url":"guide/routing/index.html"},{"revision":"db7c61df8f79609a4180e1407922a67e","url":"guide/templates/index.html"},{"revision":"57078ad574973423473e63c39b995eee","url":"guide/validation/index.html"},{"revision":"387e6818bd62b725734b31d2f55e929c","url":"index.html"},{"revision":"f42d1aef9f7789a8723990f4843b6f7a","url":"manifest.json"},{"revision":"7b5cb12403408a3b5d3ccfcd3d4703c1","url":"next/api/app/index.html"},{"revision":"6f1577892acfb5776250b9cd9bbbf16f","url":"next/api/client/index.html"},{"revision":"bd0622fee29bc2826a5f5b3dd47e5a79","url":"next/api/constants/index.html"},{"revision":"1b4cad249240fcbd0576576df10ad7f3","url":"next/api/ctx/index.html"},{"revision":"31f0d9d57dc90f53cd93c6ef48229322","url":"next/api/fiber/index.html"},{"revision":"1083c8a8649c16a0d1cfb9e26596d13e","url":"next/api/middleware/basicauth/index.html"},{"revision":"097505f3aa3814b9e8cf685ce55bf936","url":"next/api/middleware/cache/index.html"},{"revision":"d290b118d17c47899d4fd9de9b6ca5f6","url":"next/api/middleware/compress/index.html"},{"revision":"7080ab2be931e1c886de4ed9f1da232c","url":"next/api/middleware/cors/index.html"},{"revision":"b46334205639ae7c49073c1dcf92e1d0","url":"next/api/middleware/csrf/index.html"},{"revision":"9f7c897662740d40697d0072d179d39e","url":"next/api/middleware/earlydata/index.html"},{"revision":"938ddea1ab97e91d0cbb77453d32cfbb","url":"next/api/middleware/encryptcookie/index.html"},{"revision":"49da05ab433b239a4ecae3c3820a7ee9","url":"next/api/middleware/envvar/index.html"},{"revision":"bc95941187c33be2b80b8517488323ab","url":"next/api/middleware/etag/index.html"},{"revision":"21a45c52e33a8dd28bc5605d3eecf6da","url":"next/api/middleware/expvar/index.html"},{"revision":"f8658028d217dc086bb1562602667ccf","url":"next/api/middleware/favicon/index.html"},{"revision":"785aa633ae87b516719ddb18b7b7b91d","url":"next/api/middleware/filesystem/index.html"},{"revision":"c01d41c8d8fec3d7489942b43a81cb40","url":"next/api/middleware/idempotency/index.html"},{"revision":"012517b822595644981eab416c4c2979","url":"next/api/middleware/limiter/index.html"},{"revision":"318723cc1749d58f01d9f86d82ee6521","url":"next/api/middleware/logger/index.html"},{"revision":"af6a548be314f4bdb298e0f92e4678e7","url":"next/api/middleware/monitor/index.html"},{"revision":"e25db37a9903f885416cde03c9902c24","url":"next/api/middleware/pprof/index.html"},{"revision":"4822fde481452335c4dda6cca19f3c50","url":"next/api/middleware/proxy/index.html"},{"revision":"c231d150db7072aafc0d348c9dedc36d","url":"next/api/middleware/recover/index.html"},{"revision":"37b16ec05b8fecd87c7e244afd00017c","url":"next/api/middleware/requestid/index.html"},{"revision":"564c57fc887b7239270c021026f4a2de","url":"next/api/middleware/session/index.html"},{"revision":"59ea2022cb2e3fa55ffe7ccfcd8f19a1","url":"next/api/middleware/skip/index.html"},{"revision":"510999d6aeacd76cbea57fd2ac67a3ba","url":"next/api/middleware/timeout/index.html"},{"revision":"268bb83f46086c3d67e4a689a2feff49","url":"next/category/-middleware/index.html"},{"revision":"088cce007a9aa2e1740317e4b0de0221","url":"next/category/api/index.html"},{"revision":"56417808a3bfb6874608806c745d39c8","url":"next/category/extra/index.html"},{"revision":"f7a8ede461adffc00430aef1a850a33f","url":"next/category/guide/index.html"},{"revision":"73eba2aa409981942f749a8ba2926509","url":"next/extra/benchmarks/index.html"},{"revision":"c4b9e9bbbf246e5e376dd879996a9df2","url":"next/extra/faq/index.html"},{"revision":"53faf3585fceed5c785de6ca00f4478e","url":"next/guide/error-handling/index.html"},{"revision":"c65b053b2731856ee87ec859ac53514c","url":"next/guide/faster-fiber/index.html"},{"revision":"5dcb87caff706acb11f794f6a8d2cf9a","url":"next/guide/grouping/index.html"},{"revision":"6c55ece803f15d0395695c48dc80dc93","url":"next/guide/hooks/index.html"},{"revision":"6280d3add2b2b58e962b69e0a9b372db","url":"next/guide/routing/index.html"},{"revision":"5960f886200f07dde85b452a336124df","url":"next/guide/templates/index.html"},{"revision":"7563db56075d39e216aeee7295d23bd5","url":"next/guide/validation/index.html"},{"revision":"8f52649b8d13895a8b27593ded3a4be0","url":"next/index.html"},{"revision":"ff8daadaa48244dc7ecf70d3aced3557","url":"next/partials/routing/route-handlers/index.html"},{"revision":"84cf2682bef5c99c8b9c3a78a1e29df3","url":"next/search-index.json"},{"revision":"55c29f94c305f0dbda08d7d763f374b2","url":"partials/routing/route-handlers/index.html"},{"revision":"356e031ffc88212f8de1807330821393","url":"routing/index.html"},{"revision":"abc5167e927490cc5395f4f45abe8172","url":"search-index.json"},{"revision":"8df7b10d3bd2f3a06ca2bc05cb0a6ada","url":"search/index.html"},{"revision":"8084f2f83a2f477735ed11e2bf0e8213","url":"v/1.x/api/app/index.html"},{"revision":"08b749d0b0d95853310eb8d8cb6106d8","url":"v/1.x/api/ctx/index.html"},{"revision":"b785b5746370eebb99f2ee0869bd7c1a","url":"v/1.x/api/middleware/index.html"},{"revision":"ea032e7aa0080b3a208b1f36dd4b3e42","url":"v/1.x/category/api/index.html"},{"revision":"05f4a343184e6860b0ff5ee3d300a985","url":"v/1.x/category/guide/index.html"},{"revision":"43020c9060b711302b75140744628b1b","url":"v/1.x/category/misc/index.html"},{"revision":"6ed7cc0b075f329589b4401d334837af","url":"v/1.x/guide/error-handling/index.html"},{"revision":"36bb8767aaf25e55f7243dfbce1f06d1","url":"v/1.x/guide/grouping/index.html"},{"revision":"270595eab09ebe6d8ea33a90976c9797","url":"v/1.x/guide/routing/index.html"},{"revision":"46f9f665213c2a17baa88d4fb42bad58","url":"v/1.x/guide/templates/index.html"},{"revision":"a87db992f4d13bf4aa792129f43a42d9","url":"v/1.x/guide/validating/index.html"},{"revision":"4d5bf161ff11ab65805a05e165db85c0","url":"v/1.x/index.html"},{"revision":"060cd4ea1beb6b3a8224a6e8b6692d10","url":"v/1.x/misc/benchmarks/index.html"},{"revision":"27fe56b7b2ab21f8d3e02c0e09958cef","url":"v/1.x/misc/faq/index.html"},{"revision":"22ad09b2dad011193aca613170996c4d","url":"v1.x/api/app/index.html"},{"revision":"23410e2eb0a91668ebe6e294fd0f082f","url":"v1.x/api/ctx/index.html"},{"revision":"b1c030bcf85bad307a0de9faf372e4e3","url":"v1.x/api/middleware/index.html"},{"revision":"23de4a271bd3a88b37162990ea8e1cab","url":"v1.x/category/api/index.html"},{"revision":"75090ee046df69322d17951869f95595","url":"v1.x/category/guide/index.html"},{"revision":"01d5bfe649df14b5c1d4118ea66b909f","url":"v1.x/category/misc/index.html"},{"revision":"327acaf8e607b9b8cebd81a55be839df","url":"v1.x/guide/error-handling/index.html"},{"revision":"bd0a886eb5fbefea9be819dba509e097","url":"v1.x/guide/grouping/index.html"},{"revision":"f1d1c6dc44fadc334205bb7f0d4ace83","url":"v1.x/guide/routing/index.html"},{"revision":"29a21768b4327bc995d06de43f4d061e","url":"v1.x/guide/templates/index.html"},{"revision":"289dde3f0b5f0ee32706c6b4cd1d2cf8","url":"v1.x/guide/validating/index.html"},{"revision":"6cf5d044736803e6e54bcd8b28dcf3db","url":"v1.x/index.html"},{"revision":"9912038c820f4957111965409f00e9c5","url":"v1.x/misc/benchmarks/index.html"},{"revision":"1480441533e4dcff86ea33e014ea1b6c","url":"v1.x/misc/faq/index.html"},{"revision":"63028de504cb55e31ef06c2ca0a2df57","url":"v1.x/search-index.json"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"assets/images/benchmark_alloc-dec96faa96e07bcec84f40a4dfc8d187.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"assets/images/benchmark_latency-b67a470cf1b261c3092b80cbf42ef16b.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"assets/images/benchmark-18e23fcf42afc7f5e12ea23aceb27885.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"assets/images/benchmark-pipeline-b49cbb1db36293acdfb0e6c96d844e1a.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"assets/images/concurrency_alloc-6f2d485576803f7de2fe0a1deca21a09.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"assets/images/concurrency_latency-5a223848a8bee8df21cc02451f0db2b6.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"assets/images/concurrency-1307e1d23c01a561a4b2a0f5bdd7e1bc.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"assets/images/concurrency-pipeline-b0d3c211d9c7cb5474fd191223a41241.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"assets/images/data_updates_express-2f55d1b0975ec391d29d823b48faf617.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"assets/images/data_updates-3be85c418d6971091854c5086af9ed10.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"assets/images/graph-afbd400b1c3e1c6f137dae3cfc1890ce.svg"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"assets/images/json_express-aa631b2de86808970aa4bb7c9c9d3edf.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"assets/images/json-62868f61b34e3790f3a8b3b52b1a3a3b.png"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"assets/images/multiple_queries_express-ec4dc8013e85dc2a2fa4f5eeb55ce8dd.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"assets/images/multiple_queries-2c2e81674208b90b9aeb1cb791a3f0dc.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"assets/images/plaintext_express-ef6522843412bb5b14b3c6b6a4f032de.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"assets/images/plaintext-e25d187f782d18fdd35b84e3d7c625eb.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"assets/images/single_query_express-d8e41422b4f5c0a9496272e4a66a97c4.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"assets/images/single_query-4f7782d3c3ff91e92ac27e382b09f6ac.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"assets/images/support-discord-baf5f38231088813dfbc3ccdc6966634.png"},{"revision":"a2d0b99576a1a51f46d2ee84ec167336","url":"img/benchmark_alloc.png"},{"revision":"a7a3e37e6499fcf3fa9d793fd24339b9","url":"img/benchmark_latency.png"},{"revision":"2cdc5220f6027f0106431ed9756ef0ff","url":"img/benchmark-pipeline.png"},{"revision":"c5b05974efbe649f1fe9fcbf15a8ff82","url":"img/benchmark.png"},{"revision":"1276aea996275055bfbb406a62170931","url":"img/concurrency_alloc.png"},{"revision":"56065bebf88e6d317d32fa056044ab49","url":"img/concurrency_latency.png"},{"revision":"52e02024a0fc9efdeb174fbd2cb5eaa8","url":"img/concurrency-pipeline.png"},{"revision":"c16f8be0910b1d55e73abb3cf14fcc81","url":"img/concurrency.png"},{"revision":"f8a5f57ca71eb1e0f38e676552ba8a0b","url":"img/data_updates_express.png"},{"revision":"ef41ee04899eb8d1a4a34acb4d7fc20a","url":"img/data_updates.png"},{"revision":"3b4420315b7baefee56d433e4c78f268","url":"img/favicon.png"},{"revision":"716cadd67372190364a5f07efbb477c2","url":"img/graph.svg"},{"revision":"354ea4a4bcaad920949e253d33683869","url":"img/icons/icon-192x192.png"},{"revision":"4039790fa05a5dc7e9259485b4324433","url":"img/icons/icon-256x256.png"},{"revision":"93b99bdaaad38831b46a296dfeab4863","url":"img/icons/icon-384x384.png"},{"revision":"096c82692efe3ec986ab2b4fc5d60aea","url":"img/icons/icon-512x512.png"},{"revision":"7a707deb897d8b72d098d0ee46d3b44d","url":"img/json_express.png"},{"revision":"0b57d54569e518d2112a0a515042ea63","url":"img/json.png"},{"revision":"171b53337ba05d4e62332e230f3c212b","url":"img/logo-dark.svg"},{"revision":"e2c2dc9b6b5f44183247f7c48d65ccef","url":"img/logo.svg"},{"revision":"316f574189fa0067fb53b53d020b193a","url":"img/multiple_queries_express.png"},{"revision":"b3beb07717c41c5e0f7561ae6c479fbf","url":"img/multiple_queries.png"},{"revision":"480e9b557cc822c532a998a2ed724bfc","url":"img/plaintext_express.png"},{"revision":"45bd9af55fba9dc062200831ac57c5e6","url":"img/plaintext.png"},{"revision":"5b4ee8112e04d79df5a0aa39acca791b","url":"img/single_query_express.png"},{"revision":"8a5d82762f28eca9a722e75f3f12cff8","url":"img/single_query.png"},{"revision":"79a9ef885732dee2637157a4762faf7e","url":"img/support-discord.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();