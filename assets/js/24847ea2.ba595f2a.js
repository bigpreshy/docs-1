"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[1105],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,u(u({ref:n},s),{},{components:t})):r.createElement(f,u({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function u(e){let{children:n,hidden:t,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),a=t(7294),o=t(6010),u=t(2389),i=t(7392),l=t(7094),p=t(2466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:n,block:t,defaultValue:u,values:m,groupId:d,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,i.l)(k,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:N}=(0,l.U)(),[v,y]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=d){const e=O[d];null!=e&&e!==v&&k.some((n=>n.value===e))&&y(e)}const S=e=>{const n=e.currentTarget,t=w.indexOf(n),r=k[t].value;r!==v&&(x(n),y(r),null!=d&&N(d,String(r)))},T=e=>{let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},f)},k.map((e=>{let{value:n,label:t,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>w.push(e),onKeyDown:T,onClick:S},u,{className:(0,o.Z)("tabs__item",c,u?.className,{"tabs__item--active":v===n})}),t??n)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function d(e){const n=(0,u.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},4330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),o=t(5488),u=t(5162);const i={id:"hooks",title:"\ud83e\ude9d Hooks",sidebar_position:6},l=void 0,p={unversionedId:"guide/hooks",id:"version-v2.x/guide/hooks",title:"\ud83e\ude9d Hooks",description:"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:",source:"@site/versioned_docs/version-v2.x/guide/hooks.md",sourceDirName:"guide",slug:"/guide/hooks",permalink:"/guide/hooks",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/master/versioned_docs/version-v2.x/guide/hooks.md",tags:[],version:"v2.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1677318951,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:6,frontMatter:{id:"hooks",title:"\ud83e\ude9d Hooks",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Validation",permalink:"/guide/validation"},next:{title:"\u26a1 Make Fiber Faster",permalink:"/guide/faster-fiber"}},s={},c=[{value:"Constants",id:"constants",level:2},{value:"OnRoute",id:"onroute",level:2},{value:"OnName",id:"onname",level:2},{value:"OnGroup",id:"ongroup",level:2},{value:"OnGroupName",id:"ongroupname",level:2},{value:"OnListen",id:"onlisten",level:2},{value:"OnFork",id:"onfork",level:2},{value:"OnShutdown",id:"onshutdown",level:2},{value:"OnMount",id:"onmount",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onroute"},"OnRoute")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onname"},"OnName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ongroup"},"OnGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ongroupname"},"OnGroupName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onlisten"},"OnListen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onfork"},"OnFork")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onshutdown"},"OnShutdown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onmount"},"OnMount"))),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Handlers define a function to create hooks for Fiber.\ntype OnRouteHandler = func(Route) error\ntype OnNameHandler = OnRouteHandler\ntype OnGroupHandler = func(Group) error\ntype OnGroupNameHandler = OnGroupHandler\ntype OnListenHandler = func() error\ntype OnForkHandler = func(int) error\ntype OnShutdownHandler = OnListenHandler\ntype OnMountHandler = func(*App) error\n")),(0,a.kt)("h2",{id:"onroute"},"OnRoute"),(0,a.kt)("p",null,"OnRoute is a hook to execute user functions on each route registeration. Also you can get route properties by ",(0,a.kt)("strong",{parentName:"p"},"route")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnRoute(handler ...OnRouteHandler)\n")),(0,a.kt)("h2",{id:"onname"},"OnName"),(0,a.kt)("p",null,"OnName is a hook to execute user functions on each route naming. Also you can get route properties by ",(0,a.kt)("strong",{parentName:"p"},"route")," parameter."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"OnName only works with naming routes, not groups.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnName(handler ...OnNameHandler)\n")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"onname-example",label:"OnName Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("index")\n\n    app.Hooks().OnName(func(r fiber.Route) error {\n        fmt.Print("Name: " + r.Name + ", ")\n\n        return nil\n    })\n\n    app.Hooks().OnName(func(r fiber.Route) error {\n        fmt.Print("Method: " + r.Method + "\\n")\n\n        return nil\n    })\n\n    app.Get("/add/user", func(c *fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("addUser")\n\n    app.Delete("/destroy/user", func(c *fiber.Ctx) error {\n        return c.SendString(c.Route().Name)\n    }).Name("destroyUser")\n\n    app.Listen(":5000")\n}\n\n// Results:\n// Name: addUser, Method: GET\n// Name: destroyUser, Method: DELETE\n')))),(0,a.kt)("h2",{id:"ongroup"},"OnGroup"),(0,a.kt)("p",null,"OnGroup is a hook to execute user functions on each group registeration. Also you can get group properties by ",(0,a.kt)("strong",{parentName:"p"},"group")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnGroup(handler ...OnGroupHandler)\n")),(0,a.kt)("h2",{id:"ongroupname"},"OnGroupName"),(0,a.kt)("p",null,"OnGroupName is a hook to execute user functions on each group naming. Also you can get group properties by ",(0,a.kt)("strong",{parentName:"p"},"group")," parameter."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"OnGroupName only works with naming groups, not routes.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnGroupName(handler ...OnGroupNameHandler)\n")),(0,a.kt)("h2",{id:"onlisten"},"OnListen"),(0,a.kt)("p",null,"OnListen is a hook to execute user functions on Listen, ListenTLS, Listener."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnListen(handler ...OnListenHandler)\n")),(0,a.kt)("h2",{id:"onfork"},"OnFork"),(0,a.kt)("p",null,"OnFork is a hook to execute user functions on Fork."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnFork(handler ...OnForkHandler)\n")),(0,a.kt)("h2",{id:"onshutdown"},"OnShutdown"),(0,a.kt)("p",null,"OnShutdown is a hook to execute user functions after Shutdown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) OnShutdown(handler ...OnShutdownHandler)\n")),(0,a.kt)("h2",{id:"onmount"},"OnMount"),(0,a.kt)("p",null,"OnMount is a hook to execute user function after mounting process. The mount event is fired when sub-app is mounted on a parent app. The parent app is passed as a parameter. It works for app and group mounting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (h *Hooks) OnMount(handler ...OnMountHandler) \n")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"onmount-example",label:"OnMount Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := New()\n    app.Get("/", testSimpleHandler).Name("x")\n\n    subApp := New()\n    subApp.Get("/test", testSimpleHandler)\n\n    subApp.Hooks().OnMount(func(parent *fiber.App) error {\n        fmt.Print("Mount path of parent app: "+parent.MountPath())\n        // ...\n\n        return nil\n    })\n\n    app.Mount("/sub", subApp)\n}\n\n// Result:\n// Mount path of parent app: \n')))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"OnName/OnRoute/OnGroup/OnGroupName hooks are mount-sensitive. If you use one of these routes on sub app and you mount it; paths of routes and groups will start with mount prefix.")))}d.isMDXComponent=!0}}]);