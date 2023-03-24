"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[7255],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,m=c["".concat(l,".").concat(d)]||c[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={id:"session",title:"Session"},i=void 0,s={unversionedId:"api/middleware/session",id:"api/middleware/session",title:"Session",description:"Session middleware for Fiber.",source:"@site/docs/api/middleware/session.md",sourceDirName:"api/middleware",slug:"/api/middleware/session",permalink:"/next/api/middleware/session",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/session.md",tags:[],version:"current",lastUpdatedBy:"RW",lastUpdatedAt:1679666961,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"session",title:"Session"},sidebar:"tutorialSidebar",previous:{title:"RequestID",permalink:"/next/api/middleware/requestid"},next:{title:"Skip",permalink:"/next/api/middleware/skip"}},l={},u=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],p={toc:u},c="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Session middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This middleware uses our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage"},"Storage")," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases.")),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) *Store\nfunc (s *Store) RegisterType(i interface{})\nfunc (s *Store) Get(c *fiber.Ctx) (*Session, error)\nfunc (s *Store) Reset() error\n\nfunc (s *Session) Get(key string) interface{}\nfunc (s *Session) Set(key string, val interface{})\nfunc (s *Session) Delete(key string)\nfunc (s *Session) Destroy() error\nfunc (s *Session) Regenerate() error\nfunc (s *Session) Save() error\nfunc (s *Session) Fresh() bool\nfunc (s *Session) ID() string\nfunc (s *Session) Keys() []string\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Storing ",(0,o.kt)("inlineCode",{parentName:"p"},"interface{}")," values are limited to built-ins Go types.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/session"\n)\n')),(0,o.kt)("p",null,"Then create a Fiber app with ",(0,o.kt)("inlineCode",{parentName:"p"},"app := fiber.New()"),"."),(0,o.kt)("h3",{id:"default-configuration"},"Default Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// This stores all of your app\'s sessions\n// Default middleware config\nstore := session.New()\n\n// This panic will be caught by the middleware\napp.Get("/", func(c *fiber.Ctx) error {\n    // Get session from storage\n    sess, err := store.Get(c)\n    if err != nil {\n        panic(err)\n    }\n\n    // Get value\n    name := sess.Get("name")\n\n    // Set key/value\n    sess.Set("name", "john")\n\n    // Get all Keys\n    keys := sess.Keys()\n\n    // Delete key\n    sess.Delete("name")\n\n    // Destroy session\n    if err := sess.Destroy(); err != nil {\n        panic(err)\n    }\n\n    // Sets a specific expiration for this session\n    sess.SetExpiry(time.Second * 2)\n\n    // Save session\n    if err := sess.Save(); err != nil {\n        panic(err)\n    }\n\n    return c.SendString(fmt.Sprintf("Welcome %v", name))\n})\n')),(0,o.kt)("h3",{id:"custom-storagedatabase"},"Custom Storage/Database"),(0,o.kt)("p",null,"You can use any storage from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/"},"storage")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\nstore := session.New(session.Config{\n    Storage: storage,\n})\n")),(0,o.kt)("p",null,"To use the store, see the above example."),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Allowed session duration\n    // Optional. Default value 24 * time.Hour\n    Expiration time.Duration\n\n    // Storage interface to store the session data\n    // Optional. Default value memory.New()\n    Storage fiber.Storage\n\n    // KeyLookup is a string in the form of "<source>:<name>" that is used\n    // to extract session id from the request.\n    // Possible values: "header:<name>", "query:<name>" or "cookie:<name>"\n    // Optional. Default value "cookie:session_id".\n    KeyLookup string\n\n    // Domain of the cookie.\n    // Optional. Default value "".\n    CookieDomain string\n\n    // Path of the cookie.\n    // Optional. Default value "".\n    CookiePath string\n\n    // Indicates if cookie is secure.\n    // Optional. Default value false.\n    CookieSecure bool\n\n    // Indicates if cookie is HTTP only.\n    // Optional. Default value false.\n    CookieHTTPOnly bool\n\n    // Sets the cookie SameSite attribute.\n    // Optional. Default value "Lax".\n    CookieSameSite string\n\n    // Decides whether cookie should last for only the browser sesison.\n    // Ignores Expiration if set to true\n    // Optional. Default value false.\n    CookieSessionOnly bool\n\n    // KeyGenerator generates the session key.\n    // Optional. Default value utils.UUID\n    KeyGenerator func() string\n\n    // Deprecated: Please use KeyLookup\n    CookieName string\n\n    // Source defines where to obtain the session id\n    source      Source\n\n    // The session name\n    sessionName string\n}\n')),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Expiration:   24 * time.Hour,\n    KeyLookup:    "cookie:session_id",\n    KeyGenerator: utils.UUID,\n}\n')))}f.isMDXComponent=!0}}]);