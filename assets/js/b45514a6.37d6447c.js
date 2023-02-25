"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[3379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"expvar",title:"ExpVar"},o=void 0,l={unversionedId:"api/middleware/expvar",id:"api/middleware/expvar",title:"ExpVar",description:"Expvar middleware for Fiber that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is /debug/vars.",source:"@site/docs/api/middleware/expvar.md",sourceDirName:"api/middleware",slug:"/api/middleware/expvar",permalink:"/next/api/middleware/expvar",draft:!1,tags:[],version:"current",lastUpdatedBy:"RW",lastUpdatedAt:1677325837,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{id:"expvar",title:"ExpVar"},sidebar:"tutorialSidebar",previous:{title:"ETag",permalink:"/next/api/middleware/etag"},next:{title:"Favicon",permalink:"/next/api/middleware/favicon"}},p={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Example",id:"example",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Expvar middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that serves via its HTTP server runtime exposed variants in the JSON format. The package is typically only imported for the side effect of registering its HTTP handlers. The handled path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/vars"),"."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New() fiber.Handler\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Import the expvar package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "expvar"\n    "fmt"\n\n    "github.com/gofiber/fiber/v2"\n    expvarmw "github.com/gofiber/fiber/v2/middleware/expvar"\n)\n\nvar count = expvar.NewInt("count")\n\nfunc main() {\n    app := fiber.New()\n    app.Use(expvarmw.New())\n    app.Get("/", func(c *fiber.Ctx) error {\n        count.Add(1)\n\n        return c.SendString(fmt.Sprintf("hello expvar count %d", count.Value()))\n    })\n\n    fmt.Println(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"Visit path ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/vars")," to see all vars and use query ",(0,a.kt)("inlineCode",{parentName:"p"},"r=key")," to filter exposed variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl 127.0.0.1:3000\nhello expvar count 1\n\ncurl 127.0.0.1:3000/debug/vars\n{\n    "cmdline": ["xxx"],\n    "count": 1,\n    "expvarHandlerCalls": 33,\n    "expvarRegexpErrors": 0,\n    "memstats": {...}\n}\n\ncurl 127.0.0.1:3000/debug/vars?r=c\n{\n    "cmdline": ["xxx"],\n    "count": 1\n}\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {    \n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n}\n")),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Next: nil,\n}\n")))}u.isMDXComponent=!0}}]);