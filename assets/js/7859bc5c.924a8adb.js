"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(d,".").concat(u)]||c[u]||f[u]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"idempotency",title:"Idempotency"},o=void 0,l={unversionedId:"api/middleware/idempotency",id:"api/middleware/idempotency",title:"Idempotency",description:"Idempotency middleware for Fiber allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side.",source:"@site/docs/api/middleware/idempotency.md",sourceDirName:"api/middleware",slug:"/api/middleware/idempotency",permalink:"/next/api/middleware/idempotency",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/idempotency.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678100644,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{id:"idempotency",title:"Idempotency"},sidebar:"tutorialSidebar",previous:{title:"FileSystem",permalink:"/next/api/middleware/filesystem"},next:{title:"Limiter",permalink:"/next/api/middleware/limiter"}},d={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config-1",level:3}],s={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Idempotency middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02"},"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02")," for a better understanding."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"First import the middleware from Fiber,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/idempotency"\n)\n')),(0,a.kt)("p",null,"Then create a Fiber app with ",(0,a.kt)("inlineCode",{parentName:"p"},"app := fiber.New()"),"."),(0,a.kt)("h3",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(idempotency.New())\n")),(0,a.kt)("h3",{id:"custom-config"},"Custom Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(idempotency.New(idempotency.Config{\n    Lifetime: 42 * time.Minute,\n    // ...\n}))\n")),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: a function which skips the middleware on safe HTTP request method.\n    Next func(c *fiber.Ctx) bool\n\n    // Lifetime is the maximum lifetime of an idempotency key.\n    //\n    // Optional. Default: 30 * time.Minute\n    Lifetime time.Duration\n\n    // KeyHeader is the name of the header that contains the idempotency key.\n    //\n    // Optional. Default: X-Idempotency-Key\n    KeyHeader string\n    // KeyHeaderValidate defines a function to validate the syntax of the idempotency header.\n    //\n    // Optional. Default: a function which ensures the header is 36 characters long (the size of an UUID).\n    KeyHeaderValidate func(string) error\n\n    // KeepResponseHeaders is a list of headers that should be kept from the original response.\n    //\n    // Optional. Default: nil (to keep all headers)\n    KeepResponseHeaders []string\n\n    // Lock locks an idempotency key.\n    //\n    // Optional. Default: an in-memory locker for this process only.\n    Lock Locker\n\n    // Storage stores response data by idempotency key.\n    //\n    // Optional. Default: an in-memory storage for this process only.\n    Storage fiber.Storage\n}\n")),(0,a.kt)("h3",{id:"default-config-1"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next: func(c *fiber.Ctx) bool {\n        // Skip middleware if the request was done using a safe HTTP method\n        return fiber.IsMethodSafe(c.Method())\n    },\n\n    Lifetime: 30 * time.Minute,\n\n    KeyHeader: "X-Idempotency-Key",\n    KeyHeaderValidate: func(k string) error {\n        if l, wl := len(k), 36; l != wl { // UUID length is 36 chars\n            return fmt.Errorf("%w: invalid length: %d != %d", ErrInvalidIdempotencyKey, l, wl)\n        }\n\n        return nil\n    },\n\n    KeepResponseHeaders: nil,\n\n    Lock: nil, // Set in configDefault so we don\'t allocate data here.\n\n    Storage: nil, // Set in configDefault so we don\'t allocate data here.\n}\n')))}f.isMDXComponent=!0}}]);