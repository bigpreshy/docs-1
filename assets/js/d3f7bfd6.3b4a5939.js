"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=f(r),c=a,m=s["".concat(l,".").concat(c)]||s[c]||u[c]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>f});var n=r(7462),a=(r(7294),r(3905));const i={id:"pprof",title:"Pprof"},o=void 0,p={unversionedId:"api/middleware/pprof",id:"version-v2.x/api/middleware/pprof",title:"Pprof",description:"Pprof middleware for Fiber that serves via its HTTP server runtime profiling data in the format expected by the pprof visualization tool. The package is typically only imported for the side effect of registering its HTTP handlers. The handled paths all begin with /debug/pprof/.",source:"@site/versioned_docs/version-v2.x/api/middleware/pprof.md",sourceDirName:"api/middleware",slug:"/api/middleware/pprof",permalink:"/api/middleware/pprof",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678100644,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{id:"pprof",title:"Pprof"},sidebar:"tutorialSidebar",previous:{title:"Monitor",permalink:"/api/middleware/monitor"},next:{title:"Proxy",permalink:"/api/middleware/proxy"}},l={},f=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],d={toc:f},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pprof middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that serves via its HTTP server runtime profiling data in the format expected by the pprof visualization tool. The package is typically only imported for the side effect of registering its HTTP handlers. The handled paths all begin with /debug/pprof/."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/middleware/pprof#signatures"},"Signatures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/middleware/pprof#examples"},"Examples"))),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New() fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/pprof"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Default middleware\napp.Use(pprof.New())\n")),(0,a.kt)("p",null,"In systems where you have multiple ingress endpoints, it is common to add a URL prefix, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Default middleware\napp.Use(pprof.New(pprof.Config{Prefix: "/endpoint-prefix"}))\n')),(0,a.kt)("p",null,'This prefix will be added to the default path of "/debug/pprof/", for a resulting URL of:\n"/endpoint-prefix/debug/pprof/".'),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Prefix defines a URL prefix added before "/debug/pprof".\n    // Note that it should start with (but not end with) a slash.\n    // Example: "/federated-fiber"\n    //\n    // Optional. Default: ""\n    Prefix string\n}\n')),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next: nil,\n}\n")))}u.isMDXComponent=!0}}]);