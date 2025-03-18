"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[85],{2102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=t(4848),o=t(8453);const l={},r="FixedJoint",s={id:"api/joints/FixedJoint",title:"FixedJoint",description:"A fixed joint keeps 2 objects together, and tries to prevent relative movement or rotation between them. Since it just does this with forces, there will still be movement between the two objects, and their connection will be wobbly. This is intentional; if you want 0 movement, you should instead use the Bolt joint.",source:"@site/docs/api/joints/FixedJoint.mdx",sourceDirName:"api/joints",slug:"/api/joints/FixedJoint",permalink:"/api/joints/FixedJoint",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Bolt",permalink:"/api/joints/Bolt"},next:{title:"Hinge",permalink:"/api/joints/Hinge"}},a={},d=[{value:"Fields",id:"fields",level:2},{value:".id",id:"id",level:3},{value:"Functions",id:"functions",level:2},{value:":destroy()",id:"destroy",level:3},{value:":is_destroyed()",id:"is_destroyed",level:3},{value:":get_local_anchor_a()",id:"get_local_anchor_a",level:3},{value:":get_local_anchor_b()",id:"get_local_anchor_b",level:3},{value:":set_local_anchor_a()",id:"set_local_anchor_a",level:3},{value:":set_local_anchor_b()",id:"set_local_anchor_b",level:3},{value:":get_world_anchor_a()",id:"get_world_anchor_a",level:3},{value:":get_world_anchor_b()",id:"get_world_anchor_b",level:3},{value:":get_object_a()",id:"get_object_a",level:3},{value:":get_object_b()",id:"get_object_b",level:3},{value:":get_collide_connected()",id:"get_collide_connected",level:3},{value:":get_angular_damping()",id:"get_angular_damping",level:3},{value:":get_linear_damping()",id:"get_linear_damping",level:3},{value:":get_angular_frequency()",id:"get_angular_frequency",level:3},{value:":get_linear_frequency()",id:"get_linear_frequency",level:3},{value:":get_type()",id:"get_type",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,o.R)(),...e.components},{Type:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Type",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fixedjoint",children:"FixedJoint"}),"\n",(0,i.jsxs)(n.p,{children:["A fixed joint keeps 2 objects together, and tries to prevent relative movement or rotation between them. Since it just does this with forces, there will still be movement between the two objects, and their connection will be wobbly. This is intentional; if you want 0 movement, you should instead use the ",(0,i.jsx)(n.a,{href:"/api/joints/Bolt",children:"Bolt"})," joint."]}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"id",children:".id"}),"\n",(0,i.jsxs)(n.p,{children:["Identifier for the fixed joint. Is a ",(0,i.jsx)(t,{name:"number"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Make sure to use ",(0,i.jsx)(n.code,{children:":function()"})," and not ",(0,i.jsx)(n.code,{children:".function()"}),", or you'll get an error"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"destroy",children:":destroy()"}),"\n",(0,i.jsx)(n.p,{children:"Destroys the fixed joint."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"is_destroyed",children:":is_destroyed()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not the fixed joint still exists."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_local_anchor_a",children:":get_local_anchor_a()"}),"\n",(0,i.jsxs)(n.p,{children:["Gets the anchor of the fixed joint on the first object as a ",(0,i.jsx)(t,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_local_anchor_b",children:":get_local_anchor_b()"}),"\n",(0,i.jsxs)(n.p,{children:["Gets the anchor of the fixed joint on the second object as a ",(0,i.jsx)(t,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"set_local_anchor_a",children:":set_local_anchor_a()"}),"\n",(0,i.jsxs)(n.p,{children:["Moves the anchor of the fixed joint on the first object to a ",(0,i.jsx)(t,{name:"vec2"}),". Note that this currently only works if the object_a is nil."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"set_local_anchor_b",children:":set_local_anchor_b()"}),"\n",(0,i.jsxs)(n.p,{children:["Moves the anchor of the fixed joint on the second object to a ",(0,i.jsx)(t,{name:"vec2"}),". Note that this currently only works if the object_a is nil."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_world_anchor_a",children:":get_world_anchor_a()"}),"\n",(0,i.jsxs)(n.p,{children:["Gets where the first anchor of the fixed joint is in the world as a ",(0,i.jsx)(t,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_world_anchor_b",children:":get_world_anchor_b()"}),"\n",(0,i.jsxs)(n.p,{children:["Gets where the second anchor of the fixed joint is in the world as a ",(0,i.jsx)(t,{name:"vec2"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_object_a",children:":get_object_a()"}),"\n",(0,i.jsxs)(n.p,{children:["Gets the first object the fixed joint is attached to. Can be ",(0,i.jsx)(t,{name:"nil"})," if the fixed joint is connected to the world on that end."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_object_b",children:":get_object_b()"}),"\n",(0,i.jsxs)(n.p,{children:["Gets the second object the fixed joint is attached to. Can be ",(0,i.jsx)(t,{name:"nil"})," if the fixed joint is connected to the world on that end."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_collide_connected",children:":get_collide_connected()"}),"\n",(0,i.jsx)(n.p,{children:"Gets whether or not the object A will collide with object B"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_angular_damping",children:":get_angular_damping()"}),"\n",(0,i.jsx)(n.p,{children:"Get the angular damping"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_linear_damping",children:":get_linear_damping()"}),"\n",(0,i.jsx)(n.p,{children:"Get the linear damping"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_angular_frequency",children:":get_angular_frequency()"}),"\n",(0,i.jsx)(n.p,{children:"Get the angular hertz"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_linear_frequency",children:":get_linear_frequency()"}),"\n",(0,i.jsx)(n.p,{children:"Get the linear hertz"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get_type",children:":get_type()"}),"\n",(0,i.jsxs)(n.p,{children:['Returns "fixed_joint". Mainly used after ',(0,i.jsx)(n.code,{children:"object:get_joints()"})," to determine what type of joint it is."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const o={},l=i.createContext(o);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);