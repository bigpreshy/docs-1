"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},i=void 0,o={unversionedId:"api/fiber",id:"version-v2.x/api/fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",source:"@site/versioned_docs/version-v2.x/api/fiber.md",sourceDirName:"api",slug:"/api/fiber",permalink:"/api/fiber",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1688970865,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:1,frontMatter:{id:"fiber",title:"\ud83d\udce6 Fiber",description:"Fiber represents the fiber package where you start to create an instance.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/category/api"},next:{title:"\ud83d\ude80 App",permalink:"/api/app"}},d={},p=[{value:"New",id:"new",level:2},{value:"Config",id:"config",level:2},{value:"NewError",id:"newerror",level:2},{value:"IsChild",id:"ischild",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"new"},"New"),(0,r.kt)("p",null,"This method creates a new ",(0,r.kt)("strong",{parentName:"p"},"App")," named instance. You can pass optional ",(0,r.kt)("a",{parentName:"p",href:"#config"},"config "),"when creating a new instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func New(config ...Config) *App\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"// Default config\napp := fiber.New()\n\n// ...\n")),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"You can pass an optional Config when creating a new Fiber instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Custom config\napp := fiber.New(fiber.Config{\n    Prefork:       true,\n    CaseSensitive: true,\n    StrictRouting: true,\n    ServerHeader:  "Fiber",\n    AppName: "Test App v1.0.1"\n})\n\n// ...\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Config fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AppName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"This allows to setup app name for the app"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BodyLimit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends ",(0,r.kt)("inlineCode",{parentName:"td"},"413 - Request Entity Too Large")," response."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4 * 1024 * 1024"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CaseSensitive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, ",(0,r.kt)("inlineCode",{parentName:"td"},"/Foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," are different routes. When disabled, ",(0,r.kt)("inlineCode",{parentName:"td"},"/Foo"),"and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," are treated the same."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/blob/master/color.go"},(0,r.kt)("inlineCode",{parentName:"a"},"Colors"))),(0,r.kt)("td",{parentName:"tr",align:null},"You can define custom color scheme. They'll be used for startup message, route list and some middlewares."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/blob/master/color.go"},(0,r.kt)("inlineCode",{parentName:"a"},"DefaultColors")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CompressedFileSuffix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a suffix to the original file name and tries saving the resulting compressed file under the new file name."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'".fiber.gz"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Concurrency"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of concurrent connections."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"256 * 1024"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableDefaultContentType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, causes the default Content-Type header to be excluded from the Response."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableDefaultDate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true causes the default date header to be excluded from the response."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableHeaderNormalizing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"By default all header names are normalized: conteNT-tYPE -",">"," Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableKeepalive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable keep-alive connections, the server will close incoming connections after sending the first response to the client"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisablePreParseMultipartForm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Will not pre parse Multipart Form data if set to true. This option is useful for servers that desire to treat multipart form data as a binary blob, or choose when to parse the data."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisableStartupMessage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, it will not print out debug information"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ETag"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method ","(","CRC-32",")",". Weak ETags are the default when enabled."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableIPValidation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IPs()")," will validate IP addresses before returning them. Also, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," will return only the first valid IP rather than just the raw header value that may be a comma seperated string.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"WARNING:")," There is a small performance cost to doing this validation. Keep disabled if speed is your only concern and your application is behind a trusted proxy that already validates this header."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnablePrintRoutes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"EnablePrintRoutes enables print all routes with their method, path, name and handler.."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnableTrustedProxyCheck"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, fiber will check whether proxy is trusted, using TrustedProxies list. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"By default  ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Protocol()")," will get value from X-Forwarded-Proto, X-Forwarded-Protocol, X-Forwarded-Ssl or X-Url-Scheme header, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," will get value from ",(0,r.kt)("inlineCode",{parentName:"td"},"ProxyHeader")," header, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Hostname()")," will get value from X-Forwarded-Host header. ",(0,r.kt)("br",null)," If ",(0,r.kt)("inlineCode",{parentName:"td"},"EnableTrustedProxyCheck")," is true, and ",(0,r.kt)("inlineCode",{parentName:"td"},"RemoteIP")," is in the list of ",(0,r.kt)("inlineCode",{parentName:"td"},"TrustedProxies")," ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Protocol()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Hostname()")," will have the same behaviour when ",(0,r.kt)("inlineCode",{parentName:"td"},"EnableTrustedProxyCheck")," disabled, if ",(0,r.kt)("inlineCode",{parentName:"td"},"RemoteIP")," isn't in the list, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Protocol()")," will return https in case when tls connection is handled by the app, or http otherwise, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," will return RemoteIP() from fasthttp context, ",(0,r.kt)("inlineCode",{parentName:"td"},"c.Hostname()")," will return ",(0,r.kt)("inlineCode",{parentName:"td"},"fasthttp.Request.URI().Host()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ErrorHandler"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ErrorHandler")),(0,r.kt)("td",{parentName:"tr",align:null},"ErrorHandler is executed when an error is returned from fiber.Handler. Mounted fiber error handlers are retained by the top-level app and applied on prefix associated requests."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DefaultErrorHandler"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GETOnly"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Rejects all non-GET requests if set to true. This option is useful as anti-DoS protection for servers accepting only GET requests. The request size is limited by ReadBufferSize if GETOnly is set."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IdleTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Immutable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see issue ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/issues/185"},"#","185"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSONDecoder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utils.JSONUnmarshal")),(0,r.kt)("td",{parentName:"tr",align:null},"Allowing for flexibility in using another json library for decoding."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json.Unmarshal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSONEncoder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utils.JSONMarshal")),(0,r.kt)("td",{parentName:"tr",align:null},"Allowing for flexibility in using another json library for encoding."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json.Marshal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Known networks are "tcp", "tcp4" (IPv4-only), "tcp6" (IPv6-only)',(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"WARNING:"),' When prefork is set to true, only "tcp4" and "tcp6" can be chosen.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NetworkTCP4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PassLocalsToViews"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"PassLocalsToViews Enables passing of the locals set on a fiber.Ctx to the template engine. See our ",(0,r.kt)("strong",{parentName:"td"},"Template Middleware")," for supported engines."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefork"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables use of the",(0,r.kt)("a",{parentName:"td",href:"https://lwn.net/Articles/542629/"},(0,r.kt)("inlineCode",{parentName:"a"},"SO_REUSEPORT")),"socket option. This will spawn multiple Go processes listening on the same port. learn more about ",(0,r.kt)("a",{parentName:"td",href:"https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/"},"socket sharding"),". ",(0,r.kt)("strong",{parentName:"td"},"NOTE: if enabled, the application will need to be ran through a shell because prefork mode sets environment variables. If you're using Docker, make sure the app is ran with ",(0,r.kt)("inlineCode",{parentName:"strong"},"CMD ./app")," or ",(0,r.kt)("inlineCode",{parentName:"strong"},'CMD ["sh", "-c", "/app"]'),". For more info, see")," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/issues/1021#issuecomment-730537971"},(0,r.kt)("strong",{parentName:"a"},"this"))," ",(0,r.kt)("strong",{parentName:"td"},"issue comment.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProxyHeader"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"This will enable ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()")," to return the value of the given header key. By default ",(0,r.kt)("inlineCode",{parentName:"td"},"c.IP()"),"will return the Remote IP from the TCP connection, this property can be useful if you are behind a load balancer e.g. ",(0,r.kt)("em",{parentName:"td"},"X-Forwarded-","*"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadBufferSize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers ","(","for example, BIG cookies",")","."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ReadTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time allowed to read the full request, including the body. The default timeout is unlimited."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestMethods"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:null},"RequestMethods provides customizibility for HTTP methods. You can add/remove methods as you wish."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DefaultMethods"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ServerHeader"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables the ",(0,r.kt)("inlineCode",{parentName:"td"},"Server")," HTTP header with the given value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StreamRequestBody"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"StreamRequestBody enables request body streaming, and calls the handler sooner when given body is larger then the current limit."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StrictRouting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, the router treats ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo/")," as different. Otherwise, the router treats ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo/")," as the same."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TrustedProxies"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the list of trusted proxy IP's. Look at ",(0,r.kt)("inlineCode",{parentName:"td"},"EnableTrustedProxyCheck")," doc. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," It can take IP or IP range addresses. If it gets IP range, it iterates all possible addresses."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]string*__*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnescapePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with URL encoded special characters"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Views"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Views")),(0,r.kt)("td",{parentName:"tr",align:null},"Views is the interface that wraps the Render function. See our ",(0,r.kt)("strong",{parentName:"td"},"Template Middleware")," for supported engines."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ViewsLayout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Views Layout is the global layout for all template render until override on Render function. See our ",(0,r.kt)("strong",{parentName:"td"},"Template Middleware")," for supported engines."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteBufferSize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Per-connection buffer size for responses' writing."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WriteTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum duration before timing out writes of the response. The default timeout is unlimited."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XMLEncoder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utils.XMLMarshal")),(0,r.kt)("td",{parentName:"tr",align:null},"Allowing for flexibility in using another XML library for encoding."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xml.Marshal"))))),(0,r.kt)("h2",{id:"newerror"},"NewError"),(0,r.kt)("p",null,"NewError creates a new HTTPError instance with an optional message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func NewError(code int, message ...string) *Error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Get("/", func(c *fiber.Ctx) error {\n    return fiber.NewError(782, "Custom error message")\n})\n')),(0,r.kt)("h2",{id:"ischild"},"IsChild"),(0,r.kt)("p",null,"IsChild determines if the current process is a result of Prefork."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func IsChild() bool\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Prefork will spawn child processes\napp := fiber.New(fiber.Config{\n    Prefork: true,\n})\n\nif !fiber.IsChild() {\n    fmt.Println("I\'m the parent process")\n} else {\n    fmt.Println("I\'m a child process")\n}\n\n// ...\n')))}u.isMDXComponent=!0}}]);