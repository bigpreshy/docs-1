"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[3197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),v=a,g=c["".concat(l,".").concat(v)]||c[v]||d[v]||i;return n?r.createElement(g,p(p({ref:t},s),{},{components:n})):r.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},p=void 0,o={unversionedId:"guide/grouping",id:"version-v2.x/guide/grouping",title:"\ud83c\udfad Grouping",description:"Paths",source:"@site/versioned_docs/version-v2.x/guide/grouping.md",sourceDirName:"guide",slug:"/guide/grouping",permalink:"/guide/grouping",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1679667158,formattedLastUpdatedAt:"Mar 24, 2023",sidebarPosition:2,frontMatter:{id:"grouping",title:"\ud83c\udfad Grouping",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0c Routing",permalink:"/guide/routing"},next:{title:"\ud83d\udcdd Templates",permalink:"/guide/templates"}},l={},u=[{value:"Paths",id:"paths",level:2},{value:"Group Handlers",id:"group-handlers",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"paths"},"Paths"),(0,a.kt)("p",null,"Like ",(0,a.kt)("strong",{parentName:"p"},"Routing"),", groups can also have paths that belong to a cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", middleware) // /api\n\n  v1 := api.Group("/v1", middleware)   // /api/v1\n  v1.Get("/list", handler)             // /api/v1/list\n  v1.Get("/user", handler)             // /api/v1/user\n\n  v2 := api.Group("/v2", middleware)   // /api/v2\n  v2.Get("/list", handler)             // /api/v2/list\n  v2.Get("/user", handler)             // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Group")," of paths can have an optional handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api")      // /api\n\n  v1 := api.Group("/v1")        // /api/v1\n  v1.Get("/list", handler)      // /api/v1/list\n  v1.Get("/user", handler)      // /api/v1/user\n\n  v2 := api.Group("/v2")        // /api/v2\n  v2.Get("/list", handler)      // /api/v2/list\n  v2.Get("/user", handler)      // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Running ",(0,a.kt)("strong",{parentName:"p"},"/api"),", ",(0,a.kt)("strong",{parentName:"p"},"/v1")," or ",(0,a.kt)("strong",{parentName:"p"},"/v2")," will result in ",(0,a.kt)("strong",{parentName:"p"},"404")," error, make sure you have the errors set.")),(0,a.kt)("h2",{id:"group-handlers"},"Group Handlers"),(0,a.kt)("p",null,"Group handlers can also be used as a routing path but they must have ",(0,a.kt)("strong",{parentName:"p"},"Next")," added to them so that the flow can continue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n\n    handler := func(c *fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusOK)\n    }\n    api := app.Group("/api") // /api\n\n    v1 := api.Group("/v1", func(c *fiber.Ctx) error { // middleware for /api/v1\n        c.Set("Version", "v1")\n        return c.Next()\n    })\n    v1.Get("/list", handler) // /api/v1/list\n    v1.Get("/user", handler) // /api/v1/user\n\n    log.Fatal(app.Listen(":3000"))\n}\n')))}d.isMDXComponent=!0}}]);