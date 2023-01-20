"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8614],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return t?n.createElement(g,a(a({ref:r},f),{},{components:t})):n.createElement(g,a({ref:r},f))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3865:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={id:"proxy",title:"Proxy",sidebar_position:15},a=void 0,l={unversionedId:"api/middleware/proxy",id:"api/middleware/proxy",title:"Proxy",description:"Proxy middleware for Fiber that allows you to proxy requests to multiple servers.",source:"@site/docs/api/middleware/proxy.md",sourceDirName:"api/middleware",slug:"/api/middleware/proxy",permalink:"/api/middleware/proxy",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/api/middleware/proxy.md",tags:[],version:"current",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1674161996,formattedLastUpdatedAt:"Jan 19, 2023",sidebarPosition:15,frontMatter:{id:"proxy",title:"Proxy",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Pprof",permalink:"/api/middleware/pprof"},next:{title:"Recover",permalink:"/api/middleware/recover"}},s={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],f={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Proxy middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that allows you to proxy requests to multiple servers."),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func Balancer(config Config) fiber.Handler\nfunc Forward(addr string, clients ...*fasthttp.Client) fiber.Handler\nfunc Do(c *fiber.Ctx, addr string, clients ...*fasthttp.Client) error\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/proxy"\n)\n')),(0,o.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// if target https site uses a self-signed certificate, you should\n// call WithTlsConfig before Do and Forward\nproxy.WithTlsConfig(&tls.Config{\n    InsecureSkipVerify: true,\n})\n// if you need to use global self-custom client, you should use proxy.WithClient.\nproxy.WithClient(&fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n})\n\n// Forward to url\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif"))\n\n\n// Forward to url with local custom client\napp.Get("/gif", proxy.Forward("https://i.imgur.com/IWaBepg.gif", &fasthttp.Client{\n    NoDefaultUserAgentHeader: true, \n    DisablePathNormalizing:   true,\n}))\n\n// Make request within handler\napp.Get("/:id", func(c *fiber.Ctx) error {\n    url := "https://i.imgur.com/"+c.Params("id")+".gif"\n    if err := proxy.Do(c, url); err != nil {\n        return err\n    }\n    // Remove Server header from response\n    c.Response().Header.Del(fiber.HeaderServer)\n    return nil\n})\n\n// Minimal round robin balancer\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n}))\n\n// Or extend your balancer for customization\napp.Use(proxy.Balancer(proxy.Config{\n    Servers: []string{\n        "http://localhost:3001",\n        "http://localhost:3002",\n        "http://localhost:3003",\n    },\n    ModifyRequest: func(c *fiber.Ctx) error {\n        c.Request().Header.Add("X-Real-IP", c.IP())\n        return nil\n    },\n    ModifyResponse: func(c *fiber.Ctx) error {\n        c.Response().Header.Del(fiber.HeaderServer)\n        return nil\n    },\n}))\n')),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Servers defines a list of <scheme>://<host> HTTP servers,\n    //\n    // which are used in a round-robin manner.\n    // i.e.: "https://foobar.com, http://www.foobar.com"\n    //\n    // Required\n    Servers []string\n\n    // ModifyRequest allows you to alter the request\n    //\n    // Optional. Default: nil\n    ModifyRequest fiber.Handler\n\n    // ModifyResponse allows you to alter the response\n    //\n    // Optional. Default: nil\n    ModifyResponse fiber.Handler\n\n    // tls config for the http client.\n    TlsConfig *tls.Config\n    \n    // Client is custom client when client config is complex. \n    // Note that Servers, Timeout, WriteBufferSize, ReadBufferSize and TlsConfig \n    // will not be used if the client are set.\n    Client *fasthttp.LBClient\n}\n')),(0,o.kt)("h2",{id:"default-config"},"Default Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Next: nil,\n}\n")))}u.isMDXComponent=!0}}]);