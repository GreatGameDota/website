(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(141)},141:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(19),c=a.n(o),l=a(15),i=a(12),s=a(18),m=a(16),u=a(17),p=a(202),d=a(201),h=a(200),b=a(198),f=a(36),g=a(67),E=a(33),y=a(89),j=a(6),v=a(176),O=a(173),P=a(178),w=a(177),k=a(179),C=a(175),x=a(69),N=a.n(x),S=a(70),D=a.n(S),T=a(174),A=a(180);function z(e){var t=e.classes,a=e.to,r=e.open,o=e.name,c=e.button,l=e.loc,i=Object(y.a)(e,["classes","to","open","name","button","loc"]),s=c?a===l?n.a.createElement(O.a,Object.assign({button:!0,component:T.a,to:a},i),n.a.createElement(C.a,{disableTypography:!0,primary:o,className:t.selected}),null!=r?r?n.a.createElement(N.a,null):n.a.createElement(D.a,null):null):n.a.createElement(O.a,Object.assign({button:!0,component:T.a,to:a},i),n.a.createElement(C.a,{primary:o}),null!=r?r?n.a.createElement(N.a,null):n.a.createElement(D.a,null):null):n.a.createElement(O.a,Object.assign({button:!0},i),n.a.createElement(C.a,{primary:o}),null!=r?r?n.a.createElement(N.a,null):n.a.createElement(D.a,null):null);return n.a.createElement("li",null," ",s," ")}var G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={open:!0},a.handleClick=function(){a.setState(function(e){return{open:!e.open}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.closeDrawer,r=e.loc,o=this.props.db;return null!==o&&0===o.projects.length&&(o=null),n.a.createElement("div",{className:t.root},n.a.createElement("nav",{className:t.lists,"aria-label":"nav buttons"},n.a.createElement(v.a,null,n.a.createElement("div",{onClick:a},n.a.createElement(v.a,null,n.a.createElement(O.a,{component:T.a,to:"/",button:!0},n.a.createElement(w.a,null,n.a.createElement(P.a,null,"home")),"/"===r?n.a.createElement(C.a,{disableTypography:!0,primary:"Home",className:t.selected}):n.a.createElement(C.a,{primary:"Home"}))),n.a.createElement(v.a,null,n.a.createElement(O.a,{component:T.a,to:"/projects/new",button:!0},n.a.createElement(w.a,null,n.a.createElement(P.a,null,"add_circle")),"/projects/new"===r?n.a.createElement(C.a,{disableTypography:!0,primary:"Add Project",className:t.selected}):n.a.createElement(C.a,{primary:"Add Project"}))),n.a.createElement(v.a,null,n.a.createElement(O.a,{component:T.a,to:"/projects",button:!0},n.a.createElement(w.a,null,n.a.createElement(P.a,null,"list")),"/projects"===r?n.a.createElement(C.a,{disableTypography:!0,primary:"All Projects",className:t.selected}):n.a.createElement(C.a,{primary:"All Projects"})))),n.a.createElement(z,{to:"/projects",open:this.state.open,onClick:this.handleClick,name:"Projects",button:!1}),n.a.createElement(k.a,{component:"li",in:this.state.open,timeout:"auto",unmountOnExit:!0},n.a.createElement(v.a,{disablePadding:!0},n.a.createElement("div",{onClick:a},null!==o?o.projects.map(function(e){return n.a.createElement(z,{to:"/projects/".concat(e.path),className:t.nested,name:e.name,button:!0,key:e.uid,loc:r,classes:t})}):n.a.createElement(A.a,{size:24,className:t.progress})))))))}}]),t}(r.Component),B=Object(j.a)(function(e){return{root:{display:"flex",flexDirection:"column",width:"100%",padding:"10px"},lists:{backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)},progress:{color:function(e){return e.colorPrimary[500]},marginTop:"8px",display:"block",marginLeft:"auto",marginRight:"auto"},selected:{color:function(e){return e.colorPrimary[500]},fontWeight:"500",fontSize:"1rem",fontFamily:"Roboto",lineHeight:"1.5"}}})(G),H=a(192),I=a(191),R=a(189),L=a(194),M=a(195),F=a(183),W=a(63),J=a.n(W),U=a(64),_=a.n(U),q=a(193),K=a(72),Q=a(144),V=a(99),X=a(30),$=a(199),Y=a(188),Z=a(190),ee=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.root},"Footer")}}]),t}(r.Component),te=Object(j.a)({root:{color:"#ffffff",height:"50vh",marginTop:"75vh",backgroundColor:function(e){return e.colorPrimary[500]}}})(ee),ae=a(142),re=a(185),ne=a(184),oe=a(60),ce=a.n(oe),le=a(93),ie=a.n(le),se=a(197),me=a(182),ue=a(196),pe=a(100),de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={updating:!1},a.updateData=function(e){a.setState({updating:!0}),fetch("https://api.github.com/repos/GreatGameDota/".concat(e.repo)).then(function(e){return e.json()}).then(function(t){"C++"===t.language?e.lang="Cpp":e.lang=t.language,e.desc=t.description,e.homepage=t.homepage,fetch("https://api.github.com/repos/GreatGameDota/".concat(e.repo,"/topics"),{headers:{Accept:"application/vnd.github.mercy-preview+json"}}).then(function(e){return e.json()}).then(function(t){e.topics=t.names,0===e.topics.length&&e.topics.push("No tags"),a.props.update(e,"projects"),a.setState({updating:!1})})})},a.deleteProject=function(){a.props.remove(a.props.project,"projects"),a.props.history.push("/projects")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateData(this.props.project)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.project;return this.state.updating?n.a.createElement("div",{className:t.progress},n.a.createElement(re.a,{classes:{colorPrimary:t.colorPrimary,barColorPrimary:t.barColorPrimary}})):n.a.createElement("div",null,n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.title},a.name),n.a.createElement("div",{className:t.button},n.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:t.button},n.a.createElement(se.a,{title:"Github Source",placement:"left",TransitionComponent:me.a},n.a.createElement(F.a,{className:t.button,"aria-label":"github"},n.a.createElement("img",{src:ie.a,alt:"github",width:"45px",height:"45px"})))),n.a.createElement(pe.a,{href:"https://github.com/GreatGameDota/".concat(a.repo),"data-size":"large","data-show-count":"true","aria-label":"Star project on GitHub","data-icon":"octicon-star"},"Star")),n.a.createElement(se.a,{title:"Delete This Project",placement:"left",TransitionComponent:me.a},n.a.createElement(ne.a,{onClick:this.deleteProject,variant:"contained",color:"secondary",className:t.delete},n.a.createElement("span",{className:t.deleteText},"Delete"),n.a.createElement(ce.a,{className:t.rightIcon}))),n.a.createElement("div",{className:t.langContainer},n.a.createElement(P.a,null,"code"),"Cpp"===a.lang?n.a.createElement("div",{className:t.lang},"C++"):n.a.createElement("div",{className:t.lang},a.lang)),n.a.createElement("div",{className:t.desc},a.desc)),n.a.createElement("div",null,a.topics.map(function(e,a){return n.a.createElement(ue.a,{label:e,className:t.chip,key:a})})),n.a.createElement("br",null))}}]),t}(r.Component),he=Object(ae.a)({root:{display:"grid",gridGap:"4px",gridTemplateAreas:"'_ title github'\n\t\t\t\t\t\t\t\t\t\t\t\t'lang desc delete'"},title:{fontSize:"2em",fontWeight:"bold",gridArea:"title",justifySelf:"center"},button:{padding:"6px",gridArea:"github",justifySelf:"end"},delete:{gridArea:"delete",justifySelf:"end",backgroundColor:function(e){return e.colorPrimary[500]},"&:hover":{backgroundColor:function(e){return e.colorPrimary[800]}}},deleteText:{fontSize:"17px",letterSpacing:"0.02857em"},rightIcon:{marginLeft:"8px"},progress:{marginBottom:"150px"},colorPrimary:{backgroundColor:function(e){return e.colorPrimary[100]}},barColorPrimary:{backgroundColor:function(e){return e.colorPrimary[500]}},langContainer:{gridArea:"lang"},lang:{float:"left",fontSize:"17px",paddingRight:"4px"},chip:{margin:"4px"},desc:{gridArea:"desc",justifySelf:"center"}})(de),be=a(41),fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={error:""},a.addProject=function(e){return fetch("https://api.github.com/repos/GreatGameDota/".concat(e.repo)).then(function(e){if(e.ok)return e.json();throw a.setState({error:" ".concat(e.statusText," - Invalid Repo Name")}),Error(e.statusText)}).then(function(t){""===e.name&&(e.name=t.name),e.link=t.html_url,"C++"===t.language?e.lang="Cpp":e.lang=t.language,e.desc=t.description,e.homepage=t.homepage,e.path=e.name.toLowerCase().replace(/\s+/g,"-"),fetch("https://api.github.com/repos/GreatGameDota/".concat(e.repo,"/topics"),{headers:{Accept:"application/vnd.github.mercy-preview+json"}}).then(function(e){return e.json()}).then(function(t){e.topics=t.names,0===e.topics.length&&e.topics.push("No tags"),a.props.add(e,"projects")})}).catch(function(e){return console.error("".concat(e," - Invalid Repo Name"))}),new Promise(function(e,t){setTimeout(function(){e()},300)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a={name:"",repo:""};return n.a.createElement("div",{className:t.root},n.a.createElement(be.d,{initialValues:a,validate:function(t){e.setState({error:""});var a={};return t.name.replace(/ /g,"").length>20&&(a.name=" Name can't be longer than 20 characters"),t.repo||(a.repo=" Required"),a},onSubmit:function(t,r){var n=r.setSubmitting,o=r.resetForm;e.addProject(t).then(function(t){n(!1),e.state.error||o(a)})},validateOnBlur:!1,validateOnChange:!1},function(a){var r=a.isSubmitting;return n.a.createElement(be.c,null,n.a.createElement("label",{htmlFor:"name"},"Project Name "),n.a.createElement(be.b,{type:"text",name:"name",id:"name",placeholder:"Name"}),n.a.createElement("span",{className:t.error},n.a.createElement(be.a,{name:"name"})),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"repo"},"Github Repo Name "),n.a.createElement(be.b,{type:"text",name:"repo",id:"repo",placeholder:"Repo Name"}),n.a.createElement("span",{className:t.error},n.a.createElement(be.a,{name:"repo"}),e.state.error),n.a.createElement("br",null),n.a.createElement("button",{type:"submit",disabled:r},"Submit"))}))}}]),t}(r.Component),ge=Object(j.a)({root:{},error:{color:"red"}})(fe),Ee={typography:{fontFamily:["Roboto"].join(",")}},ye=a(186),je=a(187),ve=a(129),Oe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.db,r={JavaScript:"JS",Java:"Java",HTML:"HTML",Cpp:"C++",Python:"Py"},o={JavaScript:"#f1e05a",Java:"#b07219",HTML:"#e34c26",Cpp:"#f34b7d",Python:"#3572A5"};return 0!==a.projects.length?n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.jumbotron},"Overview of all my projects"),n.a.createElement(v.a,null,a.projects.map(function(e){return n.a.createElement(O.a,{component:T.a,to:"/projects/".concat(e.path),button:!0,key:e.uid},n.a.createElement(ye.a,null,n.a.createElement(ve.a,{className:t.avatar,style:{backgroundColor:o[e.lang]}},r[e.lang])),n.a.createElement(C.a,{primary:e.name,secondary:e.desc}),n.a.createElement(je.a,null,n.a.createElement(F.a,{edge:"end","aria-label":"delete"},n.a.createElement(ce.a,null))))}))):n.a.createElement("div",{className:t.progress},n.a.createElement(re.a,{classes:{colorPrimary:t.colorPrimary,barColorPrimary:t.barColorPrimary}}))}}]),t}(r.Component),Pe=Object(j.a)({root:{margin:"0 auto",width:"40%",minWidth:"200px"},progress:{marginBottom:"150px"},colorPrimary:{backgroundColor:function(e){return e.colorPrimary[100]}},barColorPrimary:{backgroundColor:function(e){return e.colorPrimary[500]}},avatar:{fontSize:"0.8rem"},jumbotron:{fontSize:"2rem",display:"block",color:"#000000",textAlign:"center",paddingTop:"10vh"}})(Oe),we=Object(Q.a)(function(e){return{root:{display:"flex"},appBar:{width:"100%",backgroundColor:function(e){return e.colorPrimary[500]},zIndex:e.zIndex.drawer+1},menuButton:Object(E.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px",minHeight:"16px"},drawer:Object(E.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240},navTitle:{fontSize:"1.25rem",lineHeight:"1.6",margin:0,paddingTop:"1rem",paddingLeft:"24px",display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},content:{padding:"0 8px",width:"100%",paddingTop:"72px"},footer:Object(E.a)({},e.breakpoints.up("sm"),{marginLeft:240}),progress:{margin:"8px",color:function(e){return e.colorPrimary[500]}}}}),ke=Object(V.a)(Ee);function Ce(e){var t=e.children,a=e.window,r=Object(Y.a)({target:a?a():void 0});return n.a.createElement($.a,{appear:!1,direction:"down",in:!r},t)}var xe=function(e){var t=e.container,a=e.project,r=e.location,o=e.history,c=e.add,l=e.update,i=e.remove,s=e.colorPrimary,m=a.name,u=e.db;"undefined"===typeof u&&(u=null);var p=we(e),d=Object(X.a)(),h=n.a.useState(!1),b=Object(g.a)(h,2),f=b[0],E=b[1];function y(){E(!f)}var j=n.a.createElement("div",null,n.a.createElement("div",{className:p.navTitle},m),n.a.createElement("div",{className:p.toolbar}),n.a.createElement(R.a,null),n.a.createElement(B,{closeDrawer:function(){E(!1)},db:u,colorPrimary:s,loc:r.pathname}),n.a.createElement(R.a,null),n.a.createElement(v.a,null,["Temp button"].map(function(e,t){return n.a.createElement(O.a,{button:!0,key:e},n.a.createElement(w.a,null,n.a.createElement(J.a,null)),n.a.createElement(C.a,{primary:e}))})));return n.a.createElement(Z.a,{theme:ke},n.a.createElement("div",null,n.a.createElement("div",{className:p.root},n.a.createElement(I.a,null),n.a.createElement(Ce,e,n.a.createElement(H.a,{position:"fixed",className:p.appBar},n.a.createElement(q.a,null,n.a.createElement(F.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:y,className:p.menuButton},n.a.createElement(_.a,null)),n.a.createElement(K.a,{variant:"h6",noWrap:!0},m)))),n.a.createElement("nav",{className:p.drawer,"aria-label":"nav buttons"},n.a.createElement(M.a,{smUp:!0,implementation:"css"},n.a.createElement(L.a,{container:t,variant:"temporary",anchor:"rtl"===d.direction?"right":"left",open:f,onClose:y,classes:{paper:p.drawerPaper},ModalProps:{keepMounted:!0}},j)),n.a.createElement(M.a,{xsDown:!0,implementation:"css"},n.a.createElement(L.a,{classes:{paper:p.drawerPaper},variant:"permanent",open:!0},j))),n.a.createElement("main",{className:p.content},"form"===a.type?n.a.createElement(ge,{add:c,colorPrimary:s}):"all"===a.type?n.a.createElement(Pe,{db:u,colorPrimary:s}):n.a.createElement(he,{project:a,add:c,remove:i,update:l,colorPrimary:s,history:o}))),n.a.createElement("div",{className:p.footer},n.a.createElement(te,{colorPrimary:s}))))},Ne=Object(Q.a)(function(e){return{root:{},appBar:{width:"100%",backgroundColor:function(e){return e.colorPrimary[500]}},menuButton:Object(E.a)({marginRight:e.spacing(2)},e.breakpoints.up("xl"),{display:"none"}),toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px",minHeight:"16px"},drawer:Object(E.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240},navTitle:{fontSize:"1.25rem",lineHeight:"1.6",margin:0,paddingTop:"1rem",paddingLeft:"24px",display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},content:{padding:"0 8px",width:"100%",height:"100vh",paddingTop:"72px"},jumbotron:{fontSize:"5rem",display:"block",color:"#000000",textAlign:"center",paddingTop:"25vh"},button:{color:function(e){return e.colorPrimary[500]},border:"1px solid",borderColor:function(e){return e.colorPrimary[200]},fontSize:"1.5rem",margin:"16px","&:hover":{borderColor:function(e){return e.colorPrimary[800]},backgroundColor:function(e){return e.colorPrimary[50]}}},progress:{margin:"8px",color:function(e){return e.colorPrimary[500]}}}}),Se=Object(V.a)(Ee);var De=function(e){var t=e.container,a=e.location,r=e.history,o=e.colorPrimary,c=e.db;"undefined"===typeof c&&(c=null);var l=Ne(e),i=Object(X.a)(),s=n.a.useState(!1),m=Object(g.a)(s,2),u=m[0],p=m[1];function d(){p(!u)}var h=n.a.createElement("div",null,n.a.createElement("div",{className:l.navTitle},"Home Page"),n.a.createElement("div",{className:l.toolbar}),n.a.createElement(R.a,null),n.a.createElement(B,{closeDrawer:function(){p(!1)},db:c,colorPrimary:o,loc:a.pathname}),n.a.createElement(R.a,null),n.a.createElement(v.a,null,["Temp button"].map(function(e,t){return n.a.createElement(O.a,{button:!0,key:e},n.a.createElement(w.a,null,n.a.createElement(J.a,null)),n.a.createElement(C.a,{primary:e}))})));return n.a.createElement(Z.a,{theme:Se},n.a.createElement("div",{className:l.root},n.a.createElement(I.a,null),n.a.createElement(H.a,{position:"fixed",className:l.appBar},n.a.createElement(q.a,null,n.a.createElement(F.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:d,className:l.menuButton},n.a.createElement(_.a,null)),n.a.createElement(K.a,{variant:"h6",noWrap:!0},"Home Page"))),n.a.createElement("nav",{className:l.drawer,"aria-label":"nav buttons"},n.a.createElement(M.a,{implementation:"css"},n.a.createElement(L.a,{container:t,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:u,onClose:d,classes:{paper:l.drawerPaper},ModalProps:{keepMounted:!0}},h))),n.a.createElement("main",{className:l.content},n.a.createElement("div",{className:l.jumbotron},"Welcome!",n.a.createElement("br",null),n.a.createElement(ne.a,{variant:"outlined",color:"primary",size:"large",className:l.button,onClick:function(){r.push("/projects")}},"Get started")))))},Te=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.progress},n.a.createElement(re.a,{classes:{colorPrimary:e.colorPrimary,barColorPrimary:e.barColorPrimary}}))}}]),t}(r.Component),Ae=Object(ae.a)({colorPrimary:{backgroundColor:function(e){return e.colorPrimary[100]}},barColorPrimary:{backgroundColor:function(e){return e.colorPrimary[500]}}})(Te),ze=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{style:{textAlign:"center"}},"404 Page Not Found"))}}]),t}(r.Component),Ge=a(46),Be=a.n(Ge),He=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).history=Object(f.a)(a.props),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.db,a=e.addData,r=e.removeData,o=e.updateData;return this.history.listen(function(e,t){setTimeout(function(){"POP"!==t&&window.scrollTo(0,0)})}),n.a.createElement(p.a,{history:this.history},n.a.createElement(d.a,null,n.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(De,Object.assign({},e,{db:t,colorPrimary:Be.a}))}}),n.a.createElement(h.a,{exact:!0,path:"/projects/new",render:function(e){return n.a.createElement(xe,Object.assign({},e,{db:t,add:a,project:{type:"form",name:"Add Project Form"},colorPrimary:Be.a}))}}),n.a.createElement(h.a,{exact:!0,path:"/projects",render:function(e){return n.a.createElement(xe,Object.assign({},e,{db:t,project:{type:"all",name:"All Projects"},colorPrimary:Be.a}))}}),n.a.createElement(h.a,{exact:!0,path:"/projects/:id",render:function(e){var c=e.match.params.id;if(t.projects.length>0){var l=t.projects.find(function(e){return e.path===c});return l?n.a.createElement(xe,Object.assign({},e,{project:l,db:t,add:a,update:o,remove:r,colorPrimary:Be.a})):n.a.createElement(ze,null)}return n.a.createElement(Ae,{colorPrimary:Be.a})}}),n.a.createElement(b.a,{to:"/"})))}}]),t}(r.Component),Ie=a(68),Re=a(47),Le=a.n(Re),Me={apiKey:"AIzaSyAIQ0jPB2yFcbuxAsjef-d6IAEUG3aWXM0",authDomain:"fresh-tape-245719.firebaseapp.com",databaseURL:"https://fresh-tape-245719.firebaseio.com",reset:{users:[],projects:[]}},Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state=Me.reset,a.writeData=function(){Le.a.database().ref("/").set(a.state)},a.getData=function(){Le.a.database().ref("/").on("value",function(e){var t=e.val();a.setState(t)})},a.addData=function(e,t){e.uid=(new Date).getTime().toString(),Le.a.database().ref("/").child(t).set([].concat(Object(Ie.a)(a.state[t]),[e]))},a.removeData=function(e,t){var r=a.state[t].filter(function(t){return t.uid!==e.uid}),n={};n[t]=r,a.setState(n)},a.updateData=function(e,t){var r=a.state[t].findIndex(function(t){return t.uid===e.uid});r>-1?Le.a.database().ref("/").child(t).child(r.toString()).set(e):console.log("No item with that id")},Le.a.initializeApp(Me),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){t!==this.state&&this.writeData()}},{key:"render",value:function(){var e=this,t=n.a.Children.map(this.props.children,function(t){return n.a.cloneElement(t,{db:e.state,addData:e.addData,removeData:e.removeData,updateData:e.updateData})});return n.a.createElement("div",null,t)}}]),t}(r.Component),We=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(Fe,null,n.a.createElement(He,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a.p+"static/media/github.617870e4.svg"}},[[114,1,2]]]);
//# sourceMappingURL=main.8aaff89d.chunk.js.map