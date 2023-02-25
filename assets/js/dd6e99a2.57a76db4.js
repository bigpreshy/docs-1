"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,v=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"envvar",title:"EnvVar"},o=void 0,l={unversionedId:"api/middleware/envvar",id:"version-v2.x/api/middleware/envvar",title:"EnvVar",description:"EnvVar middleware for Fiber that can be used to expose environment variables with various options.",source:"@site/versioned_docs/version-v2.x/api/middleware/envvar.md",sourceDirName:"api/middleware",slug:"/api/middleware/envvar",permalink:"/api/middleware/envvar",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1677326840,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{id:"envvar",title:"EnvVar"},sidebar:"tutorialSidebar",previous:{title:"Encrypt Cookie",permalink:"/api/middleware/encryptcookie"},next:{title:"ETag",permalink:"/api/middleware/etag"}},p={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3},{value:"Response",id:"response",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config-1",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"EnvVar middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that can be used to expose environment variables with various options."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"First import the middleware from Fiber,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/envvar"\n)\n')),(0,a.kt)("p",null,"Then create a Fiber app with ",(0,a.kt)("inlineCode",{parentName:"p"},"app := fiber.New()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": You need to provide a path to use envvar middleware."),(0,a.kt)("h3",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use("/expose/envvars", envvar.New())\n')),(0,a.kt)("h3",{id:"custom-config"},"Custom Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Use("/expose/envvars", envvar.New(envvar.Config{\n    ExportVars:  map[string]string{"testKey": "", "testDefaultKey": "testDefaultVal"},\n    ExcludeVars: map[string]string{"excludeKey": ""}}\n}))\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("p",null,"Http response contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "vars": {\n    "someEnvVariable": "someValue",\n    "anotherEnvVariable": "anotherValue",\n  }\n}\n\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // ExportVars specifies the environment variables that should export\n    ExportVars map[string]string\n    // ExcludeVars specifies the environment variables that should not export\n    ExcludeVars map[string]string\n}\n\n")),(0,a.kt)("h2",{id:"default-config-1"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"Config{}\n")))}d.isMDXComponent=!0}}]);