"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[12],{9908:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var l=c(4848),i=c(8453);const t={},r="Vec2",s={id:"api/Vec2",title:"Vec2",description:"is Simulo's built-in type for 2D vectors.",source:"@site/docs/api/Vec2.mdx",sourceDirName:"api",slug:"/api/Vec2",permalink:"/api/Vec2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Scene",permalink:"/api/Scene"},next:{title:"core",permalink:"/api/core"}},o={},a=[{value:"Constructor",id:"constructor",level:2},{value:"Arithmetic",id:"arithmetic",level:2},{value:"Fields",id:"fields",level:2},{value:".x",id:"x",level:3},{value:".y",id:"y",level:3},{value:"Functions",id:"functions",level:2},{value:":length()",id:"length",level:3},{value:"Example",id:"example",level:4},{value:":normalize()",id:"normalize",level:3},{value:"Example",id:"example-1",level:4},{value:":rotate()",id:"rotate",level:3},{value:"Example",id:"example-2",level:4}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Type:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Type",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"vec2",children:"Vec2"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(c,{name:"vec2"})," is Simulo's built-in type for 2D vectors."]}),"\n",(0,l.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,l.jsxs)(n.p,{children:["To create a ",(0,l.jsx)(c,{name:"vec2"}),", use the global ",(0,l.jsx)(n.code,{children:"vec2(x, y)"})," function:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local vec = vec2(5, 5);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"arithmetic",children:"Arithmetic"}),"\n",(0,l.jsxs)(n.p,{children:["Operators are implemented; you can use ",(0,l.jsx)(n.code,{children:"+"}),", ",(0,l.jsx)(n.code,{children:"-"}),", ",(0,l.jsx)(n.code,{children:"*"})," and ",(0,l.jsx)(n.code,{children:"/"})," on ",(0,l.jsx)(c,{name:"vec2"}),"s."]}),"\n",(0,l.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"x",children:".x"}),"\n",(0,l.jsxs)(n.p,{children:["The X component of the ",(0,l.jsx)(c,{name:"vec2"}),". Is a ",(0,l.jsx)(c,{name:"number"}),"."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"y",children:".y"}),"\n",(0,l.jsxs)(n.p,{children:["The Y component of the ",(0,l.jsx)(c,{name:"vec2"}),". Is a ",(0,l.jsx)(c,{name:"number"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Make sure to use ",(0,l.jsx)(n.code,{children:":function()"})," and not ",(0,l.jsx)(n.code,{children:".function()"}),", or you'll get an error"]})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"length",children:":length()"}),"\n",(0,l.jsxs)(n.p,{children:["Returns the length of the ",(0,l.jsx)(c,{name:"vec2"})," as a ",(0,l.jsx)(c,{name:"number"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local length = vec2(1, 1); -- about 1.414\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"normalize",children:":normalize()"}),"\n",(0,l.jsxs)(n.p,{children:["Returns a copy of the ",(0,l.jsx)(c,{name:"vec2"})," with the length as ",(0,l.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local vec = vec2(123, 456):normalize();\nprint(vec:length()); -- 1\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"rotate",children:":rotate()"}),"\n",(0,l.jsxs)(n.p,{children:["Returns a copy of the ",(0,l.jsx)(c,{name:"vec2"})," rotated by a specified number of radians."]}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local vec = vec2(0, 1):rotate(math.rad(90)); -- the vec is now vec2(1, 0)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>s});var l=c(6540);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);