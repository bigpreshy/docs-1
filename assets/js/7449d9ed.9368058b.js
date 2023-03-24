"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"cors",title:"CORS"},o=void 0,l={unversionedId:"api/middleware/cors",id:"version-v2.x/api/middleware/cors",title:"CORS",description:"CORS middleware for Fiber that can be used to enable Cross-Origin Resource Sharing with various options.",source:"@site/versioned_docs/version-v2.x/api/middleware/cors.md",sourceDirName:"api/middleware",slug:"/api/middleware/cors",permalink:"/api/middleware/cors",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1679666961,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"cors",title:"CORS"},sidebar:"tutorialSidebar",previous:{title:"Compress",permalink:"/api/middleware/compress"},next:{title:"CSRF",permalink:"/api/middleware/csrf"}},s={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CORS middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that can be used to enable ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing")," with various options."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/cors"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Default config\napp.Use(cors.New())\n\n// Or extend your config for customization\napp.Use(cors.New(cors.Config{\n    AllowOrigins: "https://gofiber.io, https://gofiber.net",\n    AllowHeaders:  "Origin, Content-Type, Accept",\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // AllowOrigin defines a list of origins that may access the resource.\n    //\n    // Optional. Default value "*"\n    AllowOrigins string\n\n    // AllowMethods defines a list of methods allowed when accessing the resource.\n    // This is used in response to a preflight request.\n    //\n    // Optional. Default value "GET,POST,HEAD,PUT,DELETE,PATCH"\n    AllowMethods string\n\n    // AllowHeaders defines a list of request headers that can be used when\n    // making the actual request. This is in response to a preflight request.\n    //\n    // Optional. Default value "".\n    AllowHeaders string\n\n    // AllowCredentials indicates whether or not the response to the request\n    // can be exposed when the credentials flag is true. When used as part of\n    // a response to a preflight request, this indicates whether or not the\n    // actual request can be made using credentials.\n    //\n    // Optional. Default value false.\n    AllowCredentials bool\n\n    // ExposeHeaders defines a whitelist headers that clients are allowed to\n    // access.\n    //\n    // Optional. Default value "".\n    ExposeHeaders string\n\n    // MaxAge indicates how long (in seconds) the results of a preflight request\n    // can be cached.\n    //\n    // Optional. Default value 0.\n    MaxAge int\n}\n')),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:             nil,\n    AllowOrigins:     "*",\n    AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH",\n    AllowHeaders:     "",\n    AllowCredentials: false,\n    ExposeHeaders:    "",\n    MaxAge:           0,\n}\n')))}d.isMDXComponent=!0}}]);