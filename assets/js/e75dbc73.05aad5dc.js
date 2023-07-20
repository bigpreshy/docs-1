"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[64974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"csrf",title:"CSRF"},i=void 0,s={unversionedId:"api/middleware/csrf",id:"api/middleware/csrf",title:"CSRF",description:'CSRF middleware for Fiber that provides Cross-site request forgery protection by passing a csrf token via cookies. This cookie value will be used to compare against the client csrf token on requests, other than those defined as "safe" by RFC7231 \\(GET, HEAD, OPTIONS, or TRACE\\). When the csrf token is invalid, this middleware will return the fiber.ErrForbidden error.',source:"@site/docs/core/api/middleware/csrf.md",sourceDirName:"api/middleware",slug:"/api/middleware/csrf",permalink:"/next/api/middleware/csrf",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/csrf.md",tags:[],version:"current",lastUpdatedAt:1689865803,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id:"csrf",title:"CSRF"},sidebar:"tutorialSidebar",previous:{title:"CORS",permalink:"/next/api/middleware/cors"},next:{title:"EarlyData",permalink:"/next/api/middleware/earlydata"}},l={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}],f={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CSRF middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that provides ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-site request forgery"),' protection by passing a csrf token via cookies. This cookie value will be used to compare against the client csrf token on requests, other than those defined as "safe" by RFC7231 ',"(","GET, HEAD, OPTIONS, or TRACE",")",". When the csrf token is invalid, this middleware will return the ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber.ErrForbidden")," error. "),(0,o.kt)("p",null,"CSRF Tokens are generated on GET requests. You can retrieve the CSRF token with ",(0,o.kt)("inlineCode",{parentName:"p"},"c.Locals(contextKey)"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"contextKey")," is the string you set in the config (see Custom Config below)."),(0,o.kt)("p",null,"When no ",(0,o.kt)("inlineCode",{parentName:"p"},"csrf_")," cookie is set, or the token has expired, a new token will be generated and ",(0,o.kt)("inlineCode",{parentName:"p"},"csrf_")," cookie set."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This middleware uses our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases.")),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/csrf"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(csrf.New())\n\n// Or extend your config for customization\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "header:X-Csrf-Token",\n    CookieName:     "csrf_",\n    CookieSameSite: "Lax",\n    Expiration:     1 * time.Hour,\n    KeyGenerator:   utils.UUID,\n    Extractor:      func(c *fiber.Ctx) (string, error) { ... },\n}))\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"KeyLookup will be ignored if Extractor is explicitly set.")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // KeyLookup is a string in the form of "<source>:<key>" that is used\n    // to create an Extractor that extracts the token from the request.\n    // Possible values:\n    // - "header:<name>"\n    // - "query:<name>"\n    // - "param:<name>"\n    // - "form:<name>"\n    // - "cookie:<name>"\n    //\n    // Ignored if an Extractor is explicitly set.\n    //\n    // Optional. Default: "header:X-CSRF-Token"\n    KeyLookup string\n\n    // Name of the session cookie. This cookie will store session key.\n    // Optional. Default value "csrf_".\n    CookieName string\n\n    // Domain of the CSRF cookie.\n    // Optional. Default value "".\n    CookieDomain string\n\n    // Path of the CSRF cookie.\n    // Optional. Default value "".\n    CookiePath string\n\n    // Indicates if CSRF cookie is secure.\n    // Optional. Default value false.\n    CookieSecure bool\n\n    // Indicates if CSRF cookie is HTTP only.\n    // Optional. Default value false.\n    CookieHTTPOnly bool\n\n    // Indicates if CSRF cookie is requested by SameSite.\n    // Optional. Default value "Lax".\n    CookieSameSite string\n\n    // Decides whether cookie should last for only the browser sesison.\n    // Ignores Expiration if set to true\n    CookieSessionOnly bool\n\n    // Expiration is the duration before csrf token will expire\n    //\n    // Optional. Default: 1 * time.Hour\n    Expiration time.Duration\n\n    // Store is used to store the state of the middleware\n    //\n    // Optional. Default: memory.New()\n    Storage fiber.Storage\n\n    // Context key to store generated CSRF token into context.\n    // If left empty, token will not be stored in context.\n    //\n    // Optional. Default: ""\n    ContextKey string\n\n    // KeyGenerator creates a new CSRF token\n    //\n    // Optional. Default: utils.UUID\n    KeyGenerator func() string\n\n    // Extractor returns the csrf token\n    //\n    // If set this will be used in place of an Extractor based on KeyLookup.\n    //\n    // Optional. Default will create an Extractor based on KeyLookup.\n    Extractor func(c *fiber.Ctx) (string, error)\n}\n')),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    KeyLookup:      "header:" + HeaderName,\n    CookieName:     "csrf_",\n    CookieSameSite: "Lax",\n    Expiration:     1 * time.Hour,\n    KeyGenerator:   utils.UUID,\n    ErrorHandler:   defaultErrorHandler,\n    Extractor:      CsrfFromHeader(HeaderName),\n}\n')),(0,o.kt)("h2",{id:"constants"},"Constants"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    HeaderName = "X-Csrf-Token"\n)\n')),(0,o.kt)("h3",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,o.kt)("p",null,"You can use any storage from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\napp.Use(csrf.New(csrf.Config{\n    Storage: storage,\n}))\n")))}u.isMDXComponent=!0}}]);