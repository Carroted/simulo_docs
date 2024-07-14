"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[382],{6199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var o=t(4848),s=t(8453);const i={title:"Components",description:"Components are scripts you place on objects in Simulo. They're very powerful and allow doing almost anything with scripting, even creating a platformer game in Simulo."},a="Components",c={id:"api/components/components",title:"Components",description:"Components are scripts you place on objects in Simulo. They're very powerful and allow doing almost anything with scripting, even creating a platformer game in Simulo.",source:"@site/docs/api/components/components.md",sourceDirName:"api/components",slug:"/api/components/",permalink:"/api/components/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Components",description:"Components are scripts you place on objects in Simulo. They're very powerful and allow doing almost anything with scripting, even creating a platformer game in Simulo."},sidebar:"apiSidebar",previous:{title:"Vec2",permalink:"/api/vec2"},next:{title:"Input",permalink:"/api/input/"}},l={},r=[{value:"Events",id:"events",level:2},{value:"on_start",id:"on_start",level:3},{value:"on_update",id:"on_update",level:3},{value:"on_event",id:"on_event",level:3},{value:"on_destroy",id:"on_destroy",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"components",children:"Components"}),"\n",(0,o.jsx)(n.p,{children:"Components are scripts you place on objects in Simulo. They're very powerful and allow doing almost anything with scripting, even creating a platformer game in Simulo."}),"\n",(0,o.jsx)(n.p,{children:"At the moment, no UI exists for creating components (though this will be changed before public release), but we can still create them using scripting."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local box = Scene:add_box({\n    position = vec2(0, 0),\n    size = vec2(0.5, 0.5),\n    color = 0xe5d3b9,\n    is_static = false,\n});\n\nlocal hash = Scene:add_component({\n    name = "Player Component",\n    id = "@amytimed/test/player_component",\n    version = "0.2.0",\n\n    -- Lua/Luau code to make box "jump" when we press W key\n    code = [[\n        function on_update()\n            if Input:key_just_pressed("W") then\n                self:apply_force_to_center(vec2(0, 500));\n            end;\n        end;\n    ]],\n});\n\nbox:add_component(hash); -- We can reuse the hash on other objects\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You simply add a new component to the scene with ",(0,o.jsx)(n.code,{children:"Scene:add_component"}),", which returns a hash. You can then use ",(0,o.jsx)(n.code,{children:":add_component(hash)"})," on objects to apply the script on them."]}),"\n",(0,o.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,o.jsxs)(n.p,{children:["Components have ",(0,o.jsx)(n.strong,{children:"event handler"})," functions which are called at certain times, such as ",(0,o.jsx)(n.code,{children:"on_update"}),", which is called each time the physics is updated."]}),"\n",(0,o.jsx)(n.h3,{id:"on_start",children:"on_start"}),"\n",(0,o.jsx)(n.p,{children:"This is called immediately when the component is added on an object."}),"\n",(0,o.jsxs)(n.p,{children:["At the moment, it is thus not particularly useful, since code ran outside of ",(0,o.jsx)(n.code,{children:"on_start"})," will run at the same time, but by the full release of Simulo, this function will get a table parameter called ",(0,o.jsx)(n.code,{children:"data"}),". An additional event named ",(0,o.jsx)(n.code,{children:"on_save"})," will be available, where the object can return a table to be passed to its ",(0,o.jsx)(n.code,{children:"on_start"})," when it is loaded."]}),"\n",(0,o.jsx)(n.h3,{id:"on_update",children:"on_update"}),"\n",(0,o.jsxs)(n.p,{children:["This is called each time the physics is updated. At the moment, that means ",(0,o.jsx)(n.code,{children:"64"})," times per second, though this will be changed to ",(0,o.jsx)(n.code,{children:"60"})," soon."]}),"\n",(0,o.jsx)(n.h3,{id:"on_event",children:"on_event"}),"\n",(0,o.jsx)(n.p,{children:"This function is not currently ever called, but it is coming in The Future"}),"\n",(0,o.jsx)(n.h3,{id:"on_destroy",children:"on_destroy"}),"\n",(0,o.jsx)(n.p,{children:"This function is called when the object is about to be destroyed. When it is called, the object is still completely intact."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.p,{children:["For some examples, check out the ",(0,o.jsx)(n.a,{href:"/category/components",children:"Components section of the Samples"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(6540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);