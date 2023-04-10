"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[1257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={id:"earlydata",title:"EarlyData"},l=void 0,i={unversionedId:"api/middleware/earlydata",id:"version-v2.x/api/middleware/earlydata",title:"EarlyData",description:'The Early Data middleware for Fiber adds support for TLS 1.3\'s early data ("0-RTT") feature.',source:"@site/versioned_docs/version-v2.x/api/middleware/earlydata.md",sourceDirName:"api/middleware",slug:"/api/middleware/earlydata",permalink:"/api/middleware/earlydata",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681122555,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{id:"earlydata",title:"EarlyData"},sidebar:"tutorialSidebar",previous:{title:"CSRF",permalink:"/api/middleware/csrf"},next:{title:"Encrypt Cookie",permalink:"/api/middleware/encryptcookie"}},s={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config-1",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Early Data middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),' adds support for TLS 1.3\'s early data ("0-RTT") feature.\nCiting ',(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8446#section-2-3"},"RFC 8446"),', when a client and server share a PSK, TLS 1.3 allows clients to send data on the first flight ("early data") to speed up the request, effectively reducing the regular 1-RTT request to a 0-RTT request.'),(0,n.kt)("p",null,"Make sure to enable fiber's ",(0,n.kt)("inlineCode",{parentName:"p"},"EnableTrustedProxyCheck")," config option before using this middleware in order to not trust bogus HTTP request headers of the client."),(0,n.kt)("p",null,"Also be aware that enabling support for early data in your reverse proxy (e.g. nginx, as done with a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"ssl_early_data on;"),") makes requests replayable. Refer to the following documents before continuing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc8446#section-8"},"https://datatracker.ietf.org/doc/html/rfc8446#section-8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/"},"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/"))),(0,n.kt)("p",null,"By default, this middleware allows early data requests on safe HTTP request methods only and rejects the request otherwise, i.e. aborts the request before executing your handler. This behavior can be controlled by the ",(0,n.kt)("inlineCode",{parentName:"p"},"AllowEarlyData")," config option.\nSafe HTTP methods \u2014 ",(0,n.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"OPTIONS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," \u2014 should not modify a state on the server."),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"First import the middleware from Fiber,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/earlydata"\n)\n')),(0,n.kt)("p",null,"Then create a Fiber app with ",(0,n.kt)("inlineCode",{parentName:"p"},"app := fiber.New()"),"."),(0,n.kt)("h3",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(earlydata.New())\n")),(0,n.kt)("h3",{id:"custom-config"},"Custom Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(earlydata.New(earlydata.Config{\n    Error: fiber.ErrTooEarly,\n    // ...\n}))\n")),(0,n.kt)("h3",{id:"config"},"Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // IsEarlyData returns whether the request is an early-data request.\n    //\n    // Optional. Default: a function which checks if the "Early-Data" request header equals "1".\n    IsEarlyData func(c *fiber.Ctx) bool\n\n    // AllowEarlyData returns whether the early-data request should be allowed or rejected.\n    //\n    // Optional. Default: a function which rejects the request on unsafe and allows the request on safe HTTP request methods.\n    AllowEarlyData func(c *fiber.Ctx) bool\n\n    // Error is returned in case an early-data request is rejected.\n    //\n    // Optional. Default: fiber.ErrTooEarly.\n    Error error\n}\n')),(0,n.kt)("h3",{id:"default-config-1"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    IsEarlyData: func(c *fiber.Ctx) bool {\n        return c.Get("Early-Data") == "1"\n    },\n\n    AllowEarlyData: func(c *fiber.Ctx) bool {\n        return fiber.IsMethodSafe(c.Method())\n    },\n\n    Error: fiber.ErrTooEarly,\n}\n')))}c.isMDXComponent=!0}}]);