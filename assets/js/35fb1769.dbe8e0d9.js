"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[736],{5742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(4848),o=n(8453);const i={title:"Resetting The Scene",description:"Sample of how to reset the Simulo scene in scripting"},c="Resetting The Scene",r={id:"samples/reset",title:"Resetting The Scene",description:"Sample of how to reset the Simulo scene in scripting",source:"@site/docs/samples/reset.md",sourceDirName:"samples",slug:"/samples/reset",permalink:"/samples/reset",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Resetting The Scene",description:"Sample of how to reset the Simulo scene in scripting"},sidebar:"samplesSidebar",previous:{title:"Connect 4",permalink:"/samples/connect_4"},next:{title:"Themes",permalink:"/samples/themes"}},a={},l=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"resetting-the-scene",children:"Resetting The Scene"}),"\n",(0,s.jsx)(t.p,{children:"The Simulo API currently has no built-in way to reset the scene to its default state. However, by using the following code, we can accomplish it anyway:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"function reset()\n    -- Get all objects in the scene\n    local objs = Scene:get_all_objects();\n\n    -- Loop from 1 to the number of objects, thus looping over all objects in the scene\n    for i=1,#objs do\n        objs[i]:destroy(); -- Destroy each object in objs\n    end;\n\n    Scene:set_gravity(vec2(0, -9.805)); -- Reset gravity\n    Scene.background_color = 0x34213d; -- Reset background color\n\n    -- Re-add the Simulo ground\n    Scene:add_box({\n        position = vec2(0, -120),\n        size = vec2(1000, 100),\n        color = 0xb9a1c4,\n        is_static = true,\n    });\nend;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After defining this in the Script Box, we can now run ",(0,s.jsx)(t.code,{children:"reset();"})," to clear the scene. This is very useful when prototyping or iterating on a script, as we can keep rerunning it without restarting the game."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var s=n(6540);const o={},i=s.createContext(o);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);