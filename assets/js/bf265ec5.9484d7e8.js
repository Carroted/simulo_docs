"use strict";(self.webpackChunksimulo_docs=self.webpackChunksimulo_docs||[]).push([[329],{3871:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var i=l(4848),s=l(8453);const d={},r="Player",h={id:"api/Player",title:"Player",description:"Gaming",source:"@site/docs/api/Player.mdx",sourceDirName:"api",slug:"/api/Player",permalink:"/api/Player",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Object",permalink:"/api/Object"},next:{title:"Scene",permalink:"/api/Scene"}},c={},x=[{value:"Input",id:"input",level:2},{value:"Fields",id:"fields",level:2},{value:".id",id:"id",level:3},{value:"Functions",id:"functions",level:2},{value:":pointer_pos()",id:"pointer_pos",level:3},{value:":grid_pointer_pos()",id:"grid_pointer_pos",level:3},{value:":grid_enabled()",id:"grid_enabled",level:3},{value:":grid_multiplier()",id:"grid_multiplier",level:3},{value:":grid_size()",id:"grid_size",level:3},{value:":set_camera_position()",id:"set_camera_position",level:3},{value:":set_camera_zoom()",id:"set_camera_zoom",level:3},{value:":key_just_pressed()",id:"key_just_pressed",level:3},{value:"Example",id:"example",level:4},{value:":key_just_released()",id:"key_just_released",level:3},{value:"Example",id:"example-1",level:4},{value:":key_pressed()",id:"key_pressed",level:3},{value:"Example",id:"example-2",level:4},{value:":pointer_just_pressed()",id:"pointer_just_pressed",level:3},{value:"Example",id:"example-3",level:4},{value:":pointer_just_released()",id:"pointer_just_released",level:3},{value:"Example",id:"example-4",level:4},{value:":pointer_pressed()",id:"pointer_pressed",level:3},{value:"Example",id:"example-5",level:4},{value:":pointer_locked()",id:"pointer_locked",level:3},{value:"Example",id:"example-6",level:4},{value:":preferred_pointer_pos()",id:"preferred_pointer_pos",level:3},{value:"Example",id:"example-7",level:4},{value:":snap_if_preferred()",id:"snap_if_preferred",level:3},{value:"Example",id:"example-8",level:4},{value:":snap_pointer_pos()",id:"snap_pointer_pos",level:3},{value:"Example",id:"example-9",level:4}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Type:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Type",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"player",children:"Player"}),"\n",(0,i.jsx)(n.p,{children:"Gaming"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(l,{name:"player"})," reference is typically obtained by:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Scene",":get_all_players","()"]}),"\n",(0,i.jsxs)(n.li,{children:["Scene",":get_player","()"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"input",children:"Input"}),"\n",(0,i.jsx)(n.p,{children:"All input is handled with the Player API."}),"\n",(0,i.jsx)(n.p,{children:"Below is a list of the keycodes you can use in functions like key_pressed. Many other keys are supported but omitted from this list for brevity."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"`"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"\\"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"["}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"]"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:","}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"1"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"2"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"3"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"4"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"6"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"7"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"8"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"9"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"="}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"A"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"B"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"C"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"D"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"E"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"F"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"G"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"H"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"I"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"J"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"K"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"L"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"M"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"N"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"O"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"P"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Q"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"R"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"S"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"T"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"U"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"V"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"W"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"X"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Y"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Z"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"-"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"'"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:";"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"/"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"AltLeft"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"AltRight"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Backspace"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"CapsLock"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ContextMenu"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ControlLeft"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ControlRight"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Enter"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"SuperLeft"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"SuperRight"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ShiftLeft"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ShiftRight"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"\xa0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Tab"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Delete"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"End"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Home"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Insert"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"PageDown"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"PageUp"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ArrowDown"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ArrowLeft"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ArrowRight"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"ArrowUp"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumLock"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad1"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad2"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad3"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad4"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad6"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad7"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad8"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Numpad9"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadAdd"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadBackspace"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadClear"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadClearEntry"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadComma"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadDecimal"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadDivide"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadEnter"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadEqual"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadHash"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadMemoryAdd"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadMemoryClear"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadMemoryRecall"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadMemoryStore"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadMemorySubtract"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadMultiply"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadParenLeft"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadParenRight"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadStar"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"NumpadSubtract"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Escape"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Fn"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Meta"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Hyper"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kbd",{children:"Turbo"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"id",children:".id"}),"\n",(0,i.jsxs)(n.p,{children:["Identifier for the player. Is a ",(0,i.jsx)(l,{name:"number"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Make sure to use ",(0,i.jsx)(n.code,{children:":function()"})," and not ",(0,i.jsx)(n.code,{children:".function()"}),", or you'll get an error"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pointer_pos",children:":pointer_pos()"}),"\n",(0,i.jsx)(n.p,{children:"Get the position of the player's cursor in world coordinates."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"grid_pointer_pos",children:":grid_pointer_pos()"}),"\n",(0,i.jsx)(n.p,{children:"Gets the position of the player's cursor in world coordinates, snapped to the grid."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"grid_enabled",children:":grid_enabled()"}),"\n",(0,i.jsx)(n.p,{children:"Gets whether or not the player has grid enabled."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"grid_multiplier",children:":grid_multiplier()"}),"\n",(0,i.jsx)(n.p,{children:"Gets the grid multiplier the player has configured."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"grid_size",children:":grid_size()"}),"\n",(0,i.jsx)(n.p,{children:"Gets the grid size the player has configured."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"set_camera_position",children:":set_camera_position()"}),"\n",(0,i.jsx)(n.p,{children:"Sets the position of the player's camera."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"set_camera_zoom",children:":set_camera_zoom()"}),"\n",(0,i.jsx)(n.p,{children:"Sets the zoom of the player's camera."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"key_just_pressed",children:":key_just_pressed()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not a specified key was just pressed."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'if player:key_just_pressed("W") then\n    -- do something\nend;\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"key_just_released",children:":key_just_released()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not a specified key was just released."}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'if player:key_just_released("W") then\n    -- do something\nend;\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"key_pressed",children:":key_pressed()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not a specified key is currently pressed."}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'if player:key_pressed("W") then\n    -- do something\nend;\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pointer_just_pressed",children:":pointer_just_pressed()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not the user just left clicked on the world."}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"if player:pointer_just_pressed() then\n    -- do something\nend;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pointer_just_released",children:":pointer_just_released()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not the user just released left click from the world."}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"if player:pointer_just_released() then\n    -- do something\nend;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pointer_pressed",children:":pointer_pressed()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not the user is holding down left click on the world."}),"\n",(0,i.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"if player:pointer_pressed() then\n    -- do something\nend;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"pointer_locked",children:":pointer_locked()"}),"\n",(0,i.jsx)(n.p,{children:"Returns whether or not the user's pointer has been locked."}),"\n",(0,i.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"if player:pointer_locked() then\n    -- do something\nend;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"preferred_pointer_pos",children:":preferred_pointer_pos()"}),"\n",(0,i.jsx)(n.p,{children:"If grid is enabled, this returns the grid pointer pos. If CTRL is held, it'll invert the grid setting."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Grid On and CTRL not held \u2192 Snapped"}),"\n",(0,i.jsx)(n.li,{children:"Grid Off and CTRL not held \u2192 Normal"}),"\n",(0,i.jsx)(n.li,{children:"Grid On and CTRL held \u2192 Normal"}),"\n",(0,i.jsx)(n.li,{children:"Grid Off and CTRL held \u2192 Snapped"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"if player:preferred_pointer_pos() then\n    -- do something\nend;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"snap_if_preferred",children:":snap_if_preferred()"}),"\n",(0,i.jsx)(n.p,{children:"If grid is enabled, this returns the snapped position. If CTRL is held, it'll invert the grid setting."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Grid On and CTRL not held \u2192 Snapped"}),"\n",(0,i.jsx)(n.li,{children:"Grid Off and CTRL not held \u2192 Normal"}),"\n",(0,i.jsx)(n.li,{children:"Grid On and CTRL held \u2192 Normal"}),"\n",(0,i.jsx)(n.li,{children:"Grid Off and CTRL held \u2192 Snapped"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local snapped = player:snap_if_preferred(vec2(math.pi, 942.140513));\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"snap_pointer_pos",children:":snap_pointer_pos()"}),"\n",(0,i.jsx)(n.p,{children:"Snaps the provided position to the player's grid, regardless of whether or not grid is enabled."}),"\n",(0,i.jsx)(n.h4,{id:"example-9",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local snapped = player:snap_pointer_pos(vec2(math.pi, 942.140513));\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>h});var i=l(6540);const s={},d=i.createContext(s);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);