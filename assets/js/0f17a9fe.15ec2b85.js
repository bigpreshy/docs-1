"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[5373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"timeout",title:"Timeout"},a=void 0,l={unversionedId:"api/middleware/timeout",id:"version-v2.x/api/middleware/timeout",title:"Timeout",description:"Timeout middleware for Fiber. As a fiber.Handler wrapper, it creates a context with context.WithTimeout and pass it in UserContext. If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ErrorHandler.",source:"@site/versioned_docs/version-v2.x/api/middleware/timeout.md",sourceDirName:"api/middleware",slug:"/api/middleware/timeout",permalink:"/api/middleware/timeout",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1679666961,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"timeout",title:"Timeout"},sidebar:"tutorialSidebar",previous:{title:"Skip",permalink:"/api/middleware/skip"},next:{title:"Guide",permalink:"/category/guide"}},p={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Timeout middleware for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),". As a ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber.Handler")," wrapper, it creates a context with ",(0,o.kt)("inlineCode",{parentName:"p"},"context.WithTimeout")," and pass it in ",(0,o.kt)("inlineCode",{parentName:"p"},"UserContext"),". If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorHandler"),"."),(0,o.kt)("p",null,"It does not cancel long running executions. Underlying executions must handle timeout by using ",(0,o.kt)("inlineCode",{parentName:"p"},"context.Context")," parameter."),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/timeout"\n)\n')),(0,o.kt)("p",null,"Sample timeout middleware usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n    h := func(c *fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContext(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second))\n    _ = app.Listen(":3000")\n}\n\nfunc sleepWithContext(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return context.DeadlineExceeded\n    case <-timer.C:\n    }\n    return nil\n}\n')),(0,o.kt)("p",null,"Test http 200 with curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -I --request GET 'http://localhost:3000/foo/1000' \n")),(0,o.kt)("p",null,"Test http 408 with curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -I --request GET 'http://localhost:3000/foo/3000' \n")),(0,o.kt)("p",null,"Use with custom error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var ErrFooTimeOut = errors.New("foo context canceled")\n\nfunc main() {\n    app := fiber.New()\n    h := func(c *fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContextWithCustomError(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second, ErrFooTimeOut))\n    _ = app.Listen(":3000")\n}\n\nfunc sleepWithContextWithCustomError(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return ErrFooTimeOut\n    case <-timer.C:\n    }\n    return nil\n}\n')),(0,o.kt)("p",null,"Sample usage with a DB call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    app := fiber.New()\n    db, _ := gorm.Open(postgres.Open("postgres://localhost/foodb"), &gorm.Config{})\n\n    handler := func(ctx *fiber.Ctx) error {\n        tran := db.WithContext(ctx.UserContext()).Begin()\n        \n        if tran = tran.Exec("SELECT pg_sleep(50)"); tran.Error != nil {\n            return tran.Error\n        }\n        \n        if tran = tran.Commit(); tran.Error != nil {\n            return tran.Error\n        }\n\n        return nil\n    }\n\n    app.Get("/foo", timeout.New(handler, 10*time.Second))\n    app.Listen(":3000")\n}\n')))}m.isMDXComponent=!0}}]);