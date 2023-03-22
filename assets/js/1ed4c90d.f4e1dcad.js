"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[6570],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(7462),n=r(7294),l=r(6010),i=r(2466),o=r(6550),s=r(1980),u=r(7392),p=r(12);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:r,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),g=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var g=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==o&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},8426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),i=r(5162);const o={id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},s=void 0,u={unversionedId:"guide/templates",id:"version-v1.x/guide/templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",source:"@site/versioned_docs/version-v1.x/guide/templates.md",sourceDirName:"guide",slug:"/guide/templates",permalink:"/v1.x/guide/templates",draft:!1,tags:[],version:"v1.x",lastUpdatedBy:"RW",lastUpdatedAt:1679466787,formattedLastUpdatedAt:"Mar 22, 2023",sidebarPosition:3,frontMatter:{id:"templates",title:"\ud83d\udcdd Templates",description:"Fiber supports server-side template engines.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfad Grouping",permalink:"/v1.x/guide/grouping"},next:{title:"\ud83d\udd0e Validating",permalink:"/v1.x/guide/validating"}},p={},c=[{value:"Template interfaces",id:"template-interfaces",level:2},{value:"Engines",id:"engines",level:2}],m={toc:c},d="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"template-interfaces"},"Template interfaces"),(0,n.kt)("p",null,"Fiber provides a Views interface to provide your own template engine:"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"views",label:"Views",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type Views interface {\n    Load() error\n    Render(io.Writer, string, interface{}, ...string) error\n}\n")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Views")," interface contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"Load")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Render")," method, ",(0,n.kt)("inlineCode",{parentName:"p"},"Load")," is executed by Fiber on app initialization to load/parse the templates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"// Pass engine to Fiber's Views Engine\napp := fiber.New(&fiber.Settings{\n    Views: engine,\n})\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Render")," method is linked to the ",(0,n.kt)("a",{parentName:"p",href:"../api/ctx#render"},(0,n.kt)("strong",{parentName:"a"},"ctx.Render","(",")"))," function that accepts a template name and binding data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/", func(c *fiber.Ctx) error {\n    return c.Render("index", fiber.Map{\n        "hello": "world",\n    });\n})\n')),(0,n.kt)("h2",{id:"engines"},"Engines"),(0,n.kt)("p",null,"Fiber team maintains ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/template"},"templates")," package that provides wrappers for multiple template engines:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/html"},"html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/ace"},"ace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/amber"},"amber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/django"},"django")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/handlebars"},"handlebars")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/jet"},"jet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/mustache"},"mustache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/tree/master/pug"},"pug"))),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber"\n    "github.com/gofiber/template/html"\n)\n\nfunc main() {\n    // Initialize standard Go html template engine\n    engine := html.New("./views", ".html")\n\n    app := fiber.New(&fiber.Settings{\n        Views: engine,\n    })\n    app.Get("/", func(c *fiber.Ctx) {\n        // Render index template\n        _ = c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Listen(3000)\n}\n'))),(0,n.kt)(i.Z,{value:"index",label:"views/index.html",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markup"},"<!DOCTYPE html>\n<body>\n    <h1>{{.Title}}</h1>\n</body>\n</html>\n")))))}b.isMDXComponent=!0}}]);