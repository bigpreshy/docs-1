"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[3172],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const i={id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},o=void 0,l={unversionedId:"guide/validation",id:"version-v2.x/guide/validation",title:"\ud83d\udd0e Validation",description:"Validator package",source:"@site/versioned_docs/version-v2.x/guide/validation.md",sourceDirName:"guide",slug:"/guide/validation",permalink:"/guide/validation",draft:!1,tags:[],version:"v2.x",lastUpdatedBy:"RW",lastUpdatedAt:1678198238,formattedLastUpdatedAt:"Mar 7, 2023",sidebarPosition:5,frontMatter:{id:"validation",title:"\ud83d\udd0e Validation",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc1b Error Handling",permalink:"/guide/error-handling"},next:{title:"\ud83e\ude9d Hooks",permalink:"/guide/hooks"}},s={},d=[{value:"Validator package",id:"validator-package",level:2}],u={toc:d},c="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validator-package"},"Validator package"),(0,a.kt)("p",null,"Fiber can make ",(0,a.kt)("em",{parentName:"p"},"great")," use of the validator package to ensure correct validation of data to store."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-playground/validator"},"Official validator Github page ","(","Installation, use, examples..",")","."))),(0,a.kt)("p",null,"You can find the detailed descriptions of the ",(0,a.kt)("em",{parentName:"p"},"validations")," used in the fields contained on the structs below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/go-playground/validator?tab=doc"},"Detailed docs"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Validation Example"',title:'"Validation','Example"':!0},'type Job struct{\n    Type          string `validate:"required,min=3,max=32"`\n    Salary        int    `validate:"required,number"`\n}\n\ntype User struct{\n    Name          string  `validate:"required,min=3,max=32"`\n    // use `*bool` here otherwise the validation will fail for `false` values\n    // Ref: https://github.com/go-playground/validator/issues/319#issuecomment-339222389\n    IsActive      *bool   `validate:"required"`\n    Email         string  `validate:"required,email,min=6,max=32"`\n    Job           Job     `validate:"dive"`\n}\n\ntype ErrorResponse struct {\n    FailedField string\n    Tag         string\n    Value       string\n}\n\nvar validate = validator.New()\nfunc ValidateStruct(user User) []*ErrorResponse {\n    var errors []*ErrorResponse\n    err := validate.Struct(user)\n    if err != nil {\n        for _, err := range err.(validator.ValidationErrors) {\n            var element ErrorResponse\n            element.FailedField = err.StructNamespace()\n            element.Tag = err.Tag()\n            element.Value = err.Param()\n            errors = append(errors, &element)\n        }\n    }\n    return errors\n}\n\nfunc AddUser(c *fiber.Ctx) error {\n    //Connect to database\n\n    user := new(User)\n\n    if err := c.BodyParser(user); err != nil {\n        return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{\n            "message": err.Error(),\n        })\n       \n    }\n\n    errors := ValidateStruct(*user)\n    if errors != nil {\n       return c.Status(fiber.StatusBadRequest).JSON(errors)\n        \n    }\n\n    //Do something else here\n\n    //Return user\n   return c.JSON(user)\n}\n\n// Running a test with the following curl commands\n// curl -X POST -H "Content-Type: application/json" --data "{\\"name\\":\\"john\\",\\"isactive\\":\\"True\\"}" http://localhost:8080/register/user\n\n// Results in\n// [{"FailedField":"User.Email","Tag":"required","Value":""},{"FailedField":"User.Job.Salary","Tag":"required","Value":""},{"FailedField":"User.Job.Type","Tag":"required","Value":""}]\u23ce\n')))}p.isMDXComponent=!0}}]);