"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[9308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==o&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},s=void 0,u={unversionedId:"guide/templates",id:"version-v2.x/guide/templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",source:"@site/versioned_docs/version-v2.x/guide/templates.md",sourceDirName:"guide",slug:"/guide/templates",permalink:"/guide/templates",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1678198238,formattedLastUpdatedAt:"Mar 7, 2023",sidebarPosition:3,frontMatter:{id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfad Grouping",permalink:"/guide/grouping"},next:{title:"\ud83d\udc1b Error Handling",permalink:"/guide/error-handling"}},p={},c=[{value:"Template interfaces",id:"template-interfaces",level:2},{value:"Engines",id:"engines",level:2}],m={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"template-interfaces"},"Template interfaces"),(0,a.kt)("p",null,"Fiber provides a Views interface to provide your own template engine:"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"views",label:"Views",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Views interface {\n    Load() error\n    Render(io.Writer, string, interface{}, ...string) error\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Views")," interface contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"Load")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Render")," method, ",(0,a.kt)("inlineCode",{parentName:"p"},"Load")," is executed by Fiber on app initialization to load/parse the templates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Pass engine to Fiber\'s Views Engine\napp := fiber.New(fiber.Config{\n    Views: engine,\n    // Views Layout is the global layout for all template render until override on Render function.\n    ViewsLayout: "layouts/main"\n})\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Render")," method is linked to the ",(0,a.kt)("a",{parentName:"p",href:"/api/ctx#render"},(0,a.kt)("strong",{parentName:"a"},"ctx.Render","(",")"))," function that accepts a template name and binding data. It will use global layout if layout is not being defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"Render")," function.\nIf the Fiber config option ",(0,a.kt)("inlineCode",{parentName:"p"},"PassLocalsToViews")," is enabled, then all locals set using ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.Locals(key, value)")," will be passed to the template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/", func(c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "hello": "world",\n    });\n})\n')),(0,a.kt)("h2",{id:"engines"},"Engines"),(0,a.kt)("p",null,"Fiber team maintains ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/template"},"templates")," package that provides wrappers for multiple template engines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/html"},"html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/ace"},"ace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/amber"},"amber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/django"},"django")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/handlebars"},"handlebars")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/jet"},"jet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/mustache"},"mustache")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/pug"},"pug"))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html"\n)\n\nfunc main() {\n    // Initialize standard Go html template engine\n    engine := html.New("./views", ".html")\n    // If you want other engine, just replace with following\n    // Create a new engine with django\n    // engine := django.New("./views", ".django")\n\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index template\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'))),(0,a.kt)(i.Z,{value:"index",label:"views/index.html",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},"<!DOCTYPE html>\n<body>\n    <h1>{{.Title}}</h1>\n</body>\n</html>\n")))))}f.isMDXComponent=!0}}]);