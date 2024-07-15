"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[506],{8741:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var t=l(4848),s=l(8453);const i={title:"SimuloObject",description:"API documentation for SimuloObjects"},o="SimuloObject",c={id:"api/simuloobject/simuloobject",title:"SimuloObject",description:"API documentation for SimuloObjects",source:"@site/docs/api/simuloobject/simuloobject.mdx",sourceDirName:"api/simuloobject",slug:"/api/simuloobject/",permalink:"/api/simuloobject/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SimuloObject",description:"API documentation for SimuloObjects"},sidebar:"apiSidebar",previous:{title:"Input",permalink:"/api/input/"},next:{title:"temp_load APIs",permalink:"/api/temp_load"}},a={},r=[{value:"Fields",id:"fields",level:2},{value:"Functions",id:"functions",level:2},{value:":destroy()",id:"destroy",level:3},{value:"Example",id:"example",level:4},{value:":get_position()",id:"get_position",level:3},{value:"Example",id:"example-1",level:4},{value:":set_position(...)",id:"set_position",level:3},{value:"Example",id:"example-2",level:4},{value:":get_angle()",id:"get_angle",level:3},{value:"Example",id:"example-3",level:4},{value:":set_angle(...)",id:"set_angle",level:3},{value:"Example",id:"example-4",level:4},{value:":get_linear_velocity()",id:"get_linear_velocity",level:3},{value:"Example",id:"example-5",level:4},{value:":set_linear_velocity(...)",id:"set_linear_velocity",level:3},{value:"Example",id:"example-6",level:4},{value:":get_angular_velocity()",id:"get_angular_velocity",level:3},{value:"Example",id:"example-7",level:4},{value:":set_angular_velocity(...)",id:"set_angular_velocity",level:3},{value:"Example",id:"example-8",level:4},{value:":apply_force_to_center(...)",id:"apply_force_to_center",level:3},{value:"Example",id:"example-9",level:4},{value:":add_component(...)",id:"add_component",level:3},{value:"Example",id:"example-10",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Type:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Type",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"simuloobject",children:"SimuloObject"}),"\n",(0,t.jsxs)(n.p,{children:["All objects in a Simulo scene, such as boxes, circles, polygons, etc, are known to the API as ",(0,t.jsx)(l,{name:"object"}),"s."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(l,{name:"object"})," reference is typically obtained by:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Getting it with ",(0,t.jsx)(n.code,{children:"Scene:get_object_by_guid"})]}),"\n",(0,t.jsxs)(n.li,{children:["Getting it with ",(0,t.jsx)(n.code,{children:"Scene:get_all_objects"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.code,{children:"self"})," in a ",(0,t.jsx)(n.a,{href:"/api/components/",children:"Component"})," script"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Note"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"guid"})}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(l,{name:"guid"})," of the object"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(l,{name:"number"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"color"})}),(0,t.jsxs)(n.td,{children:["The color of the object, like ",(0,t.jsx)(n.code,{children:"0xff0000"})," for red"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(l,{name:"number"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:"The name of the object"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(l,{name:"string"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Make sure to use ",(0,t.jsx)(n.code,{children:"object:function()"})," and not ",(0,t.jsx)(n.code,{children:"object.function()"}),", or you'll get an error"]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"destroy",children:":destroy()"}),"\n",(0,t.jsxs)(n.p,{children:["Destroys the object. This will call any ",(0,t.jsx)(n.code,{children:"on_destroy"})," functions of components on the object."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"object:destroy();\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_position",children:":get_position()"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the position of the object as a ",(0,t.jsx)(l,{name:"vec2"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local pos = object:get_position();\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"set_position",children:":set_position(...)"}),"\n",(0,t.jsxs)(n.p,{children:["Sets the position of the object to a ",(0,t.jsx)(l,{name:"vec2"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"object:set_position(vec2(1, 1));\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_angle",children:":get_angle()"}),"\n",(0,t.jsxs)(n.p,{children:["Gets the angle of the object as a ",(0,t.jsx)(l,{name:"number"}),". Measured in radians."]}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local angle = object:get_angle();\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"set_angle",children:":set_angle(...)"}),"\n",(0,t.jsxs)(n.p,{children:["Sets the angle of the object to a ",(0,t.jsx)(l,{name:"number"}),". Measured in radians."]}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"object:set_angle(math.pi); -- 180 degrees is pi radians\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_linear_velocity",children:":get_linear_velocity()"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the linear velocity of the object as a ",(0,t.jsx)(l,{name:"vec2"}),". Measured in meters per second."]}),"\n",(0,t.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local linvel = object:get_linear_velocity();\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"set_linear_velocity",children:":set_linear_velocity(...)"}),"\n",(0,t.jsxs)(n.p,{children:["Sets the linear velocity of the object to a ",(0,t.jsx)(l,{name:"vec2"}),". Measured in meters per second."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that this will not behave realistically. You may want to use ",(0,t.jsx)(n.a,{href:"#apply_force_to_center",children:(0,t.jsx)(n.code,{children:":apply_force_to_center"})})," instead."]}),"\n",(0,t.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"object:set_linear_velocity(vec2(1, 1));\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_angular_velocity",children:":get_angular_velocity()"}),"\n",(0,t.jsxs)(n.p,{children:["Gets the angular velocity of the object as a ",(0,t.jsx)(l,{name:"number"}),". Measured in radians per second."]}),"\n",(0,t.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local angle = object:get_angle();\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"set_angular_velocity",children:":set_angular_velocity(...)"}),"\n",(0,t.jsxs)(n.p,{children:["Sets the angular velocity of the object to a ",(0,t.jsx)(l,{name:"number"}),". Measured in radians per second."]}),"\n",(0,t.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"object:set_angular_velocity(0.174533); -- 10 degrees per second\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"apply_force_to_center",children:":apply_force_to_center(...)"}),"\n",(0,t.jsxs)(n.p,{children:["Applies a world force ",(0,t.jsx)(l,{name:"vec2"})," to the center of the object. Measured in newtons (N)."]}),"\n",(0,t.jsx)(n.h4,{id:"example-9",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"object:apply_force_to_center(vec2(0, 500));\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"add_component",children:":add_component(...)"}),"\n",(0,t.jsxs)(n.p,{children:["Adds a component of a ",(0,t.jsx)(l,{name:"hash"})," to the object."]}),"\n",(0,t.jsx)(n.h4,{id:"example-10",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local hash = Scene:add_component(...); -- see component docs\n\nobject:add_component(hash);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>c});var t=l(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);