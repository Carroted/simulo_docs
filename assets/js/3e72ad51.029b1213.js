"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[85],{2102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(4848),o=n(8453);const r={},l="FixedJoint",s={id:"api/joints/FixedJoint",title:"FixedJoint",description:"A fixed joint keeps 2 objects together, and tries to prevent relative movement or rotation between them. Since it just does this with forces, there will still be movement between the two objects, and their connection will be wobbly. This is intentional; if you want 0 movement, you should instead use the Bolt joint.",source:"@site/docs/api/joints/FixedJoint.mdx",sourceDirName:"api/joints",slug:"/api/joints/FixedJoint",permalink:"/api/joints/FixedJoint",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Bolt",permalink:"/api/joints/Bolt"},next:{title:"Hinge",permalink:"/api/joints/Hinge"}},c={},d=[{value:"Fields",id:"fields",level:2},{value:".id",id:"id",level:3},{value:"Functions",id:"functions",level:2},{value:":destroy()",id:"destroy",level:3},{value:":is_destroyed()",id:"is_destroyed",level:3},{value:":get_local_anchor_a()",id:"get_local_anchor_a",level:3},{value:":get_local_anchor_b()",id:"get_local_anchor_b",level:3},{value:":set_local_anchor_a()",id:"set_local_anchor_a",level:3},{value:":set_local_anchor_b()",id:"set_local_anchor_b",level:3},{value:":get_world_anchor_a()",id:"get_world_anchor_a",level:3},{value:":get_world_anchor_b()",id:"get_world_anchor_b",level:3},{value:":get_object_a()",id:"get_object_a",level:3},{value:":get_object_b()",id:"get_object_b",level:3},{value:":get_collide_connected()",id:"get_collide_connected",level:3},{value:":get_angular_damping()",id:"get_angular_damping",level:3},{value:":get_linear_damping()",id:"get_linear_damping",level:3},{value:":get_angular_frequency()",id:"get_angular_frequency",level:3},{value:":get_linear_frequency()",id:"get_linear_frequency",level:3},{value:":get_force()",id:"get_force",level:3},{value:":get_type()",id:"get_type",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,o.R)(),...e.components},{Type:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Type",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"fixedjoint",children:"FixedJoint"}),"\n",(0,i.jsxs)(t.p,{children:["A fixed joint keeps 2 objects together, and tries to prevent relative movement or rotation between them. Since it just does this with forces, there will still be movement between the two objects, and their connection will be wobbly. This is intentional; if you want 0 movement, you should instead use the ",(0,i.jsx)(t.a,{href:"/api/joints/Bolt",children:"Bolt"})," joint."]}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"id",children:".id"}),"\n",(0,i.jsxs)(t.p,{children:["Identifier for the fixed joint. Is a ",(0,i.jsx)(n,{name:"number"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Make sure to use ",(0,i.jsx)(t.code,{children:":function()"})," and not ",(0,i.jsx)(t.code,{children:".function()"}),", or you'll get an error"]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"destroy",children:":destroy()"}),"\n",(0,i.jsx)(t.p,{children:"Destroys the fixed joint."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"is_destroyed",children:":is_destroyed()"}),"\n",(0,i.jsx)(t.p,{children:"Returns whether or not the fixed joint still exists."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_local_anchor_a",children:":get_local_anchor_a()"}),"\n",(0,i.jsxs)(t.p,{children:["Gets the anchor of the fixed joint on the first object as a ",(0,i.jsx)(n,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_local_anchor_b",children:":get_local_anchor_b()"}),"\n",(0,i.jsxs)(t.p,{children:["Gets the anchor of the fixed joint on the second object as a ",(0,i.jsx)(n,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"set_local_anchor_a",children:":set_local_anchor_a()"}),"\n",(0,i.jsxs)(t.p,{children:["Moves the anchor of the fixed joint on the first object to a ",(0,i.jsx)(n,{name:"vec2"}),". Note that this currently only works if the object_a is nil."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"set_local_anchor_b",children:":set_local_anchor_b()"}),"\n",(0,i.jsxs)(t.p,{children:["Moves the anchor of the fixed joint on the second object to a ",(0,i.jsx)(n,{name:"vec2"}),". Note that this currently only works if the object_a is nil."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_world_anchor_a",children:":get_world_anchor_a()"}),"\n",(0,i.jsxs)(t.p,{children:["Gets where the first anchor of the fixed joint is in the world as a ",(0,i.jsx)(n,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_world_anchor_b",children:":get_world_anchor_b()"}),"\n",(0,i.jsxs)(t.p,{children:["Gets where the second anchor of the fixed joint is in the world as a ",(0,i.jsx)(n,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_object_a",children:":get_object_a()"}),"\n",(0,i.jsxs)(t.p,{children:["Gets the first object the fixed joint is attached to. Can be ",(0,i.jsx)(n,{name:"nil"})," if the fixed joint is connected to the world on that end."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_object_b",children:":get_object_b()"}),"\n",(0,i.jsxs)(t.p,{children:["Gets the second object the fixed joint is attached to. Can be ",(0,i.jsx)(n,{name:"nil"})," if the fixed joint is connected to the world on that end."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_collide_connected",children:":get_collide_connected()"}),"\n",(0,i.jsx)(t.p,{children:"Gets whether or not the object A will collide with object B"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_angular_damping",children:":get_angular_damping()"}),"\n",(0,i.jsx)(t.p,{children:"Get the angular damping"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_linear_damping",children:":get_linear_damping()"}),"\n",(0,i.jsx)(t.p,{children:"Get the linear damping"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_angular_frequency",children:":get_angular_frequency()"}),"\n",(0,i.jsx)(t.p,{children:"Get the angular hertz"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_linear_frequency",children:":get_linear_frequency()"}),"\n",(0,i.jsx)(t.p,{children:"Get the linear hertz"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_force",children:":get_force()"}),"\n",(0,i.jsx)(t.p,{children:"Get the force"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get_type",children:":get_type()"}),"\n",(0,i.jsxs)(t.p,{children:['Returns "fixed_joint". Mainly used after ',(0,i.jsx)(t.code,{children:"object:get_joints()"})," to determine what type of joint it is."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(6540);const o={},r=i.createContext(o);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);