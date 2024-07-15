"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[918],{6696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(4848),l=t(8453);const r={title:"SimuloHinge",description:"API documentation for SimuloHinges"},i="SimuloHinge",s={id:"api/simulohinge",title:"SimuloHinge",description:"API documentation for SimuloHinges",source:"@site/docs/api/simulohinge.mdx",sourceDirName:"api",slug:"/api/simulohinge",permalink:"/api/simulohinge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SimuloHinge",description:"API documentation for SimuloHinges"},sidebar:"apiSidebar",previous:{title:"Input",permalink:"/api/input/"},next:{title:"temp_load APIs",permalink:"/api/temp_load"}},a={},d=[{value:"Functions",id:"functions",level:2},{value:":destroy()",id:"destroy",level:3},{value:"Example",id:"example",level:4},{value:":get_angle()",id:"get_angle",level:3},{value:"Example",id:"example-1",level:4},{value:":get_motor_enabled()",id:"get_motor_enabled",level:3},{value:"Example",id:"example-2",level:4},{value:":set_motor_enabled(...)",id:"set_motor_enabled",level:3},{value:"Example",id:"example-3",level:4},{value:":get_motor_speed()",id:"get_motor_speed",level:3},{value:"Example",id:"example-4",level:4},{value:":set_motor_speed(...)",id:"set_motor_speed",level:3},{value:"Example",id:"example-5",level:4},{value:":get_max_motor_torque()",id:"get_max_motor_torque",level:3},{value:"Example",id:"example-6",level:4},{value:":set_max_motor_torque(...)",id:"set_max_motor_torque",level:3},{value:"Example",id:"example-7",level:4},{value:":get_motor_current_torque()",id:"get_motor_current_torque",level:3},{value:"Example",id:"example-8",level:4}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Type:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Type",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"simulohinge",children:"SimuloHinge"}),"\n",(0,o.jsx)(n.p,{children:"A hinge joint, also known as a pin or revolute joint, is uhh I'm not quite sure how to describe this yet. Ah well, enjoy the API docs below."}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(t,{name:"hinge"})," reference is typically obtained by calling ",(0,o.jsx)(n.a,{href:"/api/scene/#sceneadd_hinge_at_world_point",children:(0,o.jsx)(n.code,{children:"Scene:add_hinge_at_world_point"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Make sure to use ",(0,o.jsx)(n.code,{children:"hinge:function()"})," and not ",(0,o.jsx)(n.code,{children:"hinge.function()"}),", or you'll get an error"]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"destroy",children:":destroy()"}),"\n",(0,o.jsx)(n.p,{children:"Destroys the hinge."}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"hinge:destroy();\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"get_angle",children:":get_angle()"}),"\n",(0,o.jsxs)(n.p,{children:["Returns the hinge current angle in radians as a ",(0,o.jsx)(t,{name:"number"}),", relative to the reference angle."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"local angle = hinge:get_angle();\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"get_motor_enabled",children:":get_motor_enabled()"}),"\n",(0,o.jsxs)(n.p,{children:["Gets whether or not the hinge's motor is enabled as a ",(0,o.jsx)(t,{name:"boolean"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"local motor_enabled = hinge:get_motor_enabled();\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"set_motor_enabled",children:":set_motor_enabled(...)"}),"\n",(0,o.jsxs)(n.p,{children:["Sets whether or not the hinge's motor is enabled to a ",(0,o.jsx)(t,{name:"boolean"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"hinge:set_motor_enabled(true);\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"get_motor_speed",children:":get_motor_speed()"}),"\n",(0,o.jsxs)(n.p,{children:["Gets the speed of the hinge's motor in radians per second as a ",(0,o.jsx)(t,{name:"number"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"local speed = hinge:get_motor_speed();\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"set_motor_speed",children:":set_motor_speed(...)"}),"\n",(0,o.jsxs)(n.p,{children:["Sets the speed of the hinge's motor in radians per second to a ",(0,o.jsx)(t,{name:"number"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"hinge:set_motor_speed(0.5);\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"get_max_motor_torque",children:":get_max_motor_torque()"}),"\n",(0,o.jsxs)(n.p,{children:["Gets the max torque of the hinge's motor in newton-meters as a ",(0,o.jsx)(t,{name:"number"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"local max_torque = hinge:get_max_motor_torque();\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"set_max_motor_torque",children:":set_max_motor_torque(...)"}),"\n",(0,o.jsxs)(n.p,{children:["Sets the max torque of the hinge's motor in newton-meters to a ",(0,o.jsx)(t,{name:"number"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"hinge:set_max_motor_torque(10);\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"get_motor_current_torque",children:":get_motor_current_torque()"}),"\n",(0,o.jsxs)(n.p,{children:["Gets the current torque of the hinge's motor in newton-meters as a ",(0,o.jsx)(t,{name:"number"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"local current_torque = hinge:get_motor_current_torque();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const l={},r=o.createContext(l);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);