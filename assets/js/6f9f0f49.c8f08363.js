"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[1773],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return t?i.createElement(m,o(o({ref:n},f),{},{components:t})):i.createElement(m,o({ref:n},f))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={id:"favicon",title:"Favicon"},o=void 0,l={unversionedId:"api/middleware/favicon",id:"version-v2.x/api/middleware/favicon",title:"Favicon",description:"Favicon middleware for Fiber that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.",source:"@site/versioned_docs/version-v2.x/api/middleware/favicon.md",sourceDirName:"api/middleware",slug:"/api/middleware/favicon",permalink:"/api/middleware/favicon",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678100644,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{id:"favicon",title:"Favicon"},sidebar:"tutorialSidebar",previous:{title:"ExpVar",permalink:"/api/middleware/expvar"},next:{title:"FileSystem",permalink:"/api/middleware/filesystem"}},c={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],f={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Favicon middleware for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that ignores favicon requests or caches a provided icon in memory to improve performance by skipping disk access. User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This middleware is exclusively for serving the default, implicit favicon, which is GET /favicon.ico or ",(0,r.kt)("a",{parentName:"p",href:"#config"},"custom favicon URL"),".")),(0,r.kt)("h2",{id:"signatures"},"Signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/favicon"\n)\n')),(0,r.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(favicon.New())\n\n// Or extend your config for customization\napp.Use(favicon.New(favicon.Config{\n    File: "./favicon.ico",\n    URL: "/favicon.ico",\n}))\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // File holds the path to an actual favicon that will be cached\n    //\n    // Optional. Default: ""\n    File string\n    \n    // URL for favicon handler\n    //\n    // Optional. Default: "/favicon.ico"\n    URL string\n\n    // FileSystem is an optional alternate filesystem to search for the favicon in.\n    // An example of this could be an embedded or network filesystem\n    //\n    // Optional. Default: nil\n    FileSystem http.FileSystem\n\n    // CacheControl defines how the Cache-Control header in the response should be set\n    //\n    // Optional. Default: "public, max-age=31536000"\n    CacheControl string\n}\n')),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next: nil,\n    File:    "",\n    File:   "",\n    URL: "/favicon.ico",\n}\n')))}d.isMDXComponent=!0}}]);