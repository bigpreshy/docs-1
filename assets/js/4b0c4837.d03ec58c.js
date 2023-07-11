"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[63261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),f=n,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},56853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={id:"earlydata",title:"EarlyData"},l=void 0,i={unversionedId:"api/middleware/earlydata",id:"api/middleware/earlydata",title:"EarlyData",description:'The Early Data middleware for Fiber adds support for TLS 1.3\'s early data ("0-RTT") feature.',source:"@site/docs/core/api/middleware/earlydata.md",sourceDirName:"api/middleware",slug:"/api/middleware/earlydata",permalink:"/next/api/middleware/earlydata",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/earlydata.md",tags:[],version:"current",lastUpdatedAt:1689077018,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{id:"earlydata",title:"EarlyData"},sidebar:"tutorialSidebar",previous:{title:"CSRF",permalink:"/next/api/middleware/csrf"},next:{title:"Encrypt Cookie",permalink:"/next/api/middleware/encryptcookie"}},s={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Early Data middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),' adds support for TLS 1.3\'s early data ("0-RTT") feature.\nCiting ',(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8446#section-2-3"},"RFC 8446"),', when a client and server share a PSK, TLS 1.3 allows clients to send data on the first flight ("early data") to speed up the request, effectively reducing the regular 1-RTT request to a 0-RTT request.'),(0,n.kt)("p",null,"Make sure to enable fiber's ",(0,n.kt)("inlineCode",{parentName:"p"},"EnableTrustedProxyCheck")," config option before using this middleware in order to not trust bogus HTTP request headers of the client."),(0,n.kt)("p",null,"Also be aware that enabling support for early data in your reverse proxy (e.g. nginx, as done with a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"ssl_early_data on;"),") makes requests replayable. Refer to the following documents before continuing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc8446#section-8"},"https://datatracker.ietf.org/doc/html/rfc8446#section-8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/"},"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/"))),(0,n.kt)("p",null,"By default, this middleware allows early data requests on safe HTTP request methods only and rejects the request otherwise, i.e. aborts the request before executing your handler. This behavior can be controlled by the ",(0,n.kt)("inlineCode",{parentName:"p"},"AllowEarlyData")," config option.\nSafe HTTP methods \u2014 ",(0,n.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"OPTIONS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," \u2014 should not modify a state on the server."),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/earlydata"\n)\n')),(0,n.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"// Initialize default config\napp.Use(earlydata.New())\n\n// Or extend your config for customization\napp.Use(earlydata.New(earlydata.Config{\n    Error: fiber.ErrTooEarly,\n    // ...\n}))\n")),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // IsEarlyData returns whether the request is an early-data request.\n    //\n    // Optional. Default: a function which checks if the "Early-Data" request header equals "1".\n    IsEarlyData func(c *fiber.Ctx) bool\n\n    // AllowEarlyData returns whether the early-data request should be allowed or rejected.\n    //\n    // Optional. Default: a function which rejects the request on unsafe and allows the request on safe HTTP request methods.\n    AllowEarlyData func(c *fiber.Ctx) bool\n\n    // Error is returned in case an early-data request is rejected.\n    //\n    // Optional. Default: fiber.ErrTooEarly.\n    Error error\n}\n')),(0,n.kt)("h2",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    IsEarlyData: func(c *fiber.Ctx) bool {\n        return c.Get(DefaultHeaderName) == DefaultHeaderTrueValue\n    },\n\n    AllowEarlyData: func(c *fiber.Ctx) bool {\n        return fiber.IsMethodSafe(c.Method())\n    },\n\n    Error: fiber.ErrTooEarly,\n}\n")),(0,n.kt)("h2",{id:"constants"},"Constants"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    DefaultHeaderName      = "Early-Data"\n    DefaultHeaderTrueValue = "1"\n)\n')))}c.isMDXComponent=!0}}]);