"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6811],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),f=i,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39420:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const a={id:"redirect",title:"Redirect"},o=void 0,l={unversionedId:"api/middleware/redirect",id:"api/middleware/redirect",title:"Redirect",description:"Redirection middleware for Fiber.",source:"@site/docs/core/api/middleware/redirect.md",sourceDirName:"api/middleware",slug:"/api/middleware/redirect",permalink:"/next/api/middleware/redirect",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/redirect.md",tags:[],version:"current",lastUpdatedAt:1688920089,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{id:"redirect",title:"Redirect"},sidebar:"tutorialSidebar",previous:{title:"Recover",permalink:"/next/api/middleware/recover"},next:{title:"RequestID",permalink:"/next/api/middleware/requestid"}},c={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:d},s="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(s,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Redirection middleware for Fiber."),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/redirect"\n)\n\nfunc main() {\n  app := fiber.New()\n  \n  app.Use(redirect.New(redirect.Config{\n    Rules: map[string]string{\n      "/old":   "/new",\n      "/old/*": "/new/$1",\n    },\n    StatusCode: 301,\n  }))\n  \n  app.Get("/new", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n  })\n  app.Get("/new/*", func(c *fiber.Ctx) error {\n    return c.SendString("Wildcard: " + c.Params("*"))\n  })\n  \n  app.Listen(":3000")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl http://localhost:3000/old\ncurl http://localhost:3000/old/hello\n")),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Filter defines a function to skip middleware.\n    // Optional. Default: nil\n    Next func(*fiber.Ctx) bool\n\n    // Rules defines the URL path rewrite rules. The values captured in asterisk can be\n    // retrieved by index e.g. $1, $2 and so on.\n    // Required. Example:\n    // "/old":              "/new",\n    // "/api/*":            "/$1",\n    // "/js/*":             "/public/javascripts/$1",\n    // "/users/*/orders/*": "/user/$1/order/$2",\n    Rules map[string]string\n\n    // The status code when redirecting\n    // This is ignored if Redirect is disabled\n    // Optional. Default: 302 (fiber.StatusFound)\n    StatusCode int\n\n    rulesRegex map[*regexp.Regexp]string\n}\n')),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    StatusCode: fiber.StatusFound,\n}\n")))}u.isMDXComponent=!0}}]);