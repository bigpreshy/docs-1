"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[9673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=g(n),c=a,m=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=n(7462),a=(n(7294),n(3905));const o={id:"logger",title:"Logger"},i=void 0,l={unversionedId:"api/middleware/logger",id:"version-v2.x/api/middleware/logger",title:"Logger",description:"Logger middleware for Fiber that logs HTTP request/response details.",source:"@site/versioned_docs/version-v2.x/api/middleware/logger.md",sourceDirName:"api/middleware",slug:"/api/middleware/logger",permalink:"/api/middleware/logger",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681467231,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"logger",title:"Logger"},sidebar:"tutorialSidebar",previous:{title:"Limiter",permalink:"/api/middleware/limiter"},next:{title:"Monitor",permalink:"/api/middleware/monitor"}},s={},g=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}],u={toc:g},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Logger middleware for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that logs HTTP request/response details."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/logger"\n)\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The order of registration plays a role. Only all routes that are registered after this one will be logged.\nThe middleware should therefore be one of the first to be registered.")),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Initialize default config\napp.Use(logger.New())\n\n// Or extend your config for customization\n// Logging remote IP and Port\napp.Use(logger.New(logger.Config{\n    Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n}))\n\n// Logging Request ID\napp.Use(requestid.New())\napp.Use(logger.New(logger.Config{\n    // For more options, see the Config section\n    Format: "${pid} ${locals:requestid} ${status} - ${method} ${path}\u200b\\n",\n}))\n\n// Changing TimeZone & TimeFormat\napp.Use(logger.New(logger.Config{\n    Format:     "${pid} ${status} - ${method} ${path}\\n",\n    TimeFormat: "02-Jan-2006",\n    TimeZone:   "America/New_York",\n}))\n\n// Custom File Writer\nfile, err := os.OpenFile("./123.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)\nif err != nil {\n    log.Fatalf("error opening file: %v", err)\n}\ndefer file.Close()\napp.Use(logger.New(logger.Config{\n    Output: file,\n}))\n\n// Add Custom Tags\napp.Use(logger.New(logger.Config{\n    CustomTags: map[string]logger.LogFunc{\n        "custom_tag": func(output logger.Buffer, c *fiber.Ctx, data *logger.Data, extraParam string) (int, error) {\n            return output.WriteString("it is a custom tag")\n        },\n    },\n}))\n\n// Callback after log is written\napp.Use(logger.New(logger.Config{\n    TimeFormat: time.RFC3339Nano,\n    TimeZone:   "Asia/Shanghai",\n    Done: func(c *fiber.Ctx, logString []byte) {\n        if c.Response().StatusCode() != fiber.StatusOK {\n            reporter.SendToSlack(logString) \n        }\n    },\n}))\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Done is a function that is called after the log string for a request is written to Output,\n    // and pass the log string as parameter.\n    //\n    // Optional. Default: nil\n    Done func(c *fiber.Ctx, logString []byte)\n\n    // tagFunctions defines the custom tag action\n    //\n    // Optional. Default: map[string]LogFunc\n    CustomTags map[string]LogFunc\n\n    // Format defines the logging tags\n    //\n    // Optional. Default: [${time}] ${status} - ${latency} ${method} ${path}\\n\n    Format string\n\n    // TimeFormat https://programming.guide/go/format-parse-string-time-date-example.html\n    //\n    // Optional. Default: 15:04:05\n    TimeFormat string\n\n    // TimeZone can be specified, such as "UTC" and "America/New_York" and "Asia/Chongqing", etc\n    //\n    // Optional. Default: "Local"\n    TimeZone string\n\n    // TimeInterval is the delay before the timestamp is updated\n    //\n    // Optional. Default: 500 * time.Millisecond\n    TimeInterval time.Duration\n\n    // Output is a writer where logs are written\n    //\n    // Default: os.Stdout\n    Output io.Writer\n\n    enableColors     bool\n    enableLatency    bool\n    timeZoneLocation *time.Location\n}\ntype LogFunc func(buf logger.Buffer, c *fiber.Ctx, data *logger.Data, extraParam string) (int, error)\n')),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:         nil,\n    Done:         nil,\n    Format:       "[${time}] ${status} - ${latency} ${method} ${path}\\n",\n    TimeFormat:   "15:04:05",\n    TimeZone:     "Local",\n    TimeInterval: 500 * time.Millisecond,\n    Output:       os.Stdout,\n    enableColors: true,\n}\n')),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Logger variables\nconst (\n    TagPid               = "pid"\n    TagTime              = "time"\n    TagReferer           = "referer"\n    TagProtocol          = "protocol"\n    TagPort              = "port"\n    TagIP                = "ip"\n    TagIPs               = "ips"\n    TagHost              = "host"\n    TagMethod            = "method"\n    TagPath              = "path"\n    TagURL               = "url"\n    TagUA                = "ua"\n    TagLatency           = "latency"\n    TagStatus            = "status"         // response status\n    TagResBody           = "resBody"        // response body\n    TagReqHeaders        = "reqHeaders"\n    TagQueryStringParams = "queryParams"    // request query parameters\n    TagBody              = "body"           // request body\n    TagBytesSent         = "bytesSent"\n    TagBytesReceived     = "bytesReceived"\n    TagRoute             = "route"\n    TagError             = "error"\n    // DEPRECATED: Use TagReqHeader instead\n    TagHeader            = "header:"        // request header\n    TagReqHeader         = "reqHeader:"     // request header\n    TagRespHeader        = "respHeader:"    // response header\n    TagQuery             = "query:"         // request query\n    TagForm              = "form:"          // request form\n    TagCookie            = "cookie:"        // request cookie\n    TagLocals            = "locals:"\n    // colors\n    TagBlack             = "black"\n    TagRed               = "red"\n    TagGreen             = "green"\n    TagYellow            = "yellow"\n    TagBlue              = "blue"\n    TagMagenta           = "magenta"\n    TagCyan              = "cyan"\n    TagWhite             = "white"\n    TagReset             = "reset"\n)\n')))}d.isMDXComponent=!0}}]);