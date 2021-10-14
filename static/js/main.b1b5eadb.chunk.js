(this["webpackJsonpmatt-bellucci-dev-portfolio"]=this["webpackJsonpmatt-bellucci-dev-portfolio"]||[]).push([[0],{104:function(e,t,a){e.exports=a(152)},109:function(e,t,a){},110:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},111:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(18),r=a.n(l),i=(a(109),a(5)),c=a(6),o=a(8),m=a(7),u=(a(110),a(111),a(50)),d=a.n(u),h=a(30),p=a(51),f=a(64),E=a.n(f),b=a(37),g=a(65),v=a.n(g),y=a(66),k=a.n(y),N=a(67),x=a.n(N),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!0,nightMode:1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(h.a)(e)),e}return Object(c.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,t="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",t)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat();var a="images/"+this.props.sharedData.image}var n=s.a.memo((function(){return s.a.createElement(p.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,t){return!0}));return s.a.createElement("header",{id:"home",style:{height:"fit-content",display:"block"}},s.a.createElement("div",{className:"fixed-top",style:{paddingTop:"10px",paddingRight:"10px",display:"flex",justifyContent:"flex-end"}},s.a.createElement(E.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#92c4f3",onColor:"#353535",className:"react-switch",width:90,height:40,uncheckedIcon:s.a.createElement("span",{className:"iconify","data-icon":"bi:moon-stars-fill","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:s.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})),s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-6 mb-5"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(p.a,{steps:[t],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(n,null)))),s.a.createElement("div",{className:"col-md-4 mb-5"},s.a.createElement("div",{className:"polaroid"},s.a.createElement("span",{style:{cursor:"auto"}},s.a.createElement("img",{height:"250px",src:a,alt:"Avatar placeholder"}),s.a.createElement(b.Icon,{icon:v.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),s.a.createElement(b.Icon,{icon:k.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),s.a.createElement(b.Icon,{icon:x.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}))))))}}]),a}(n.Component),w=a(38),S=(a(119),a(20)),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,t=this.props.resumeExperience.map((function(e,t){var a=e.technologies,n=e.mainTech,l="fab fa-"+e.icon+" experience-icon",r=n.map((function(e,t){return s.a.createElement(S.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)})),i=a.map((function(e,t){return s.a.createElement(S.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)}));return s.a.createElement(w.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#8FBEF0",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:l}),key:t},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},r),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),s.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))}));return s.a.createElement("section",{id:"resume",className:"pb-5"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(w.VerticalTimeline,null,t,s.a.createElement(w.VerticalTimelineElement,{iconStyle:{background:"#8FBEF0",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),a}(n.Component),C=a(68),B=a.n(C),I=[{data:"2019-12-05",status:"status",statusB:"Admission Start",statusE:"Admission Open"},{data:"2020-01-21",status:"status",statusB:"Start 1st round",statusE:"Open for Fillup"},{data:"2020-02-25",status:"status",statusB:"Start 2nd round",statusE:"process"},{data:"2020-03-16",status:"status",statusB:"Start 3rd round",statusE:"Done"},{data:"2020-04-19",status:"status",statusB:"Start 4th round",statusE:"Done"},{data:"2020-05-23",status:"status",statusB:"Complete",statusE:"Done"}],D=(s.a.Component,a(172)),A=a(46),T=a.n(A),_=a(47),z=a.n(_),M=a(48),F=a.n(M),R=(a(63),a(25)),W=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,n=this.props.data.description,l=this.props.data.url,r=this.props.data.tooltip;if(this.props.data.technologies){var i=e.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var c=t.map((function(e,t){return s.a.createElement("div",{key:t,"data-src":e})}))}}return s.a.createElement(D.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},s.a.createElement(T.a,{cssModule:[z.a,F.a],animation:"scaleOutAnimation",className:"slider-image"},c)),s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},a,l?s.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"link-href"},s.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"},"data-tip":r},r?s.a.createElement(R.a,null):null)):s.a.createElement("i",{className:"fas fa-external-link-alt","data-tip":r,style:{marginLeft:"10px"}}," ",s.a.createElement(R.a,null))),s.a.createElement("p",{className:"modal-description"},n),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto"},i)))))}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map((function(t){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a}},s.a.createElement("div",null,s.a.createElement("img",{src:t.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),s.a.createElement("span",{className:"project-date"},t.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},t.title)))))}));return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto"},a)),s.a.createElement(W,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),a}(n.Component),H=a(16),P=a(100),V=a(167),U=a(168),q=a(169),G=a(170),J=a(171),K=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={name:"",email:"",subject:"",message:""},e.handleChange=function(t,a){e.setState(Object(H.a)({},t,a.target.value))},e}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n={email:t.email,to_name:"user_4lRezC8rbLcGfWhYKc8VD",subject:t.subject,message:t.message,name:a};P.a("service_igzr54h","template_n8h3nhj",n,"user_4lRezC8rbLcGfWhYKc8VD"),this.resetForm(),this.props.onHide()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"contactEmail"},s.a.createElement("h1",{className:"project-title-settings mt-3"},"Get in Touch"),s.a.createElement(V.a,{onSubmit:this.handleSubmit.bind(this)},s.a.createElement(U.a,{controlId:"formBasicEmail"},s.a.createElement(q.a,null,s.a.createElement(S.a,{pill:!0,className:"main-badge mr-2 mb-2",key:0},"Email Address"),s.a.createElement(G.a,{type:"email",name:"email",required:!0,value:this.state.email,className:"text-primary-black",onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email"}))),s.a.createElement(U.a,{controlId:"formBasicName"},s.a.createElement(q.a,null,s.a.createElement(S.a,{pill:!0,className:"main-badge mr-2 mb-2",key:1},"Full Name"),s.a.createElement(G.a,{required:!0,type:"text",name:"name",value:this.state.name,className:"text-primary-black",onChange:this.handleChange.bind(this,"name"),placeholder:"Name"}))),s.a.createElement(U.a,{controlId:"formBasicSubject"},s.a.createElement(q.a,null,s.a.createElement(S.a,{pill:!0,className:"main-badge mr-2 mb-2",key:2},"Subject"),s.a.createElement(G.a,{type:"text",name:"subject",className:"text-primary-black",value:this.state.subject,onChange:this.handleChange.bind(this,"subject"),placeholder:"Subject"}))),s.a.createElement(U.a,{controlId:"formBasicMessage"},s.a.createElement(q.a,null,s.a.createElement(S.a,{pill:!0,className:"main-badge mr-2 mb-2",key:3},"Message"),s.a.createElement(G.a,{required:!0,type:"textarea",name:"message",className:"text-primary-black",value:this.state.message,onChange:this.handleChange.bind(this,"message")}))),s.a.createElement(U.a,null,s.a.createElement(q.a,null,s.a.createElement(J.a,{className:"submit-button",variant:"outline-secondary",size:"lg",block:!0,type:"submit"},"Submit"))),s.a.createElement("br",null))))}}]),a}(n.Component),Y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(D.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement(K,this.props))}}]),a}(n.Component),$=a(102),Q=a(101),X=a(174),Z=a(173),ee=["children"],te=n.forwardRef((function(e,t){var a=e.children,s=Object($.a)(e,ee);return n.createElement("svg",Object.assign({width:"150",height:"50"},s,{ref:t}),n.createElement("polygon",{points:"0,50 0,0 150,0 150,50",className:"bg"}),n.createElement("polygon",{points:"0,50 0,0 150,0 150,50",className:"borderEffect"}),n.createElement("foreignObject",{x:"0",y:"0",width:"150",height:"50"},n.createElement("div",{className:"content"},a)))})),ae=Object(Z.a)(te)((function(e){var t=e.theme;return"\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ".concat((t.palette.mode,"rgb(255, 255, 255)"),";\n  --hover-color: ").concat("light"===t.palette.mode?"rgba(255, 255, 255,0.04)":"rgba(255, 255, 255,0.08)",";\n  --active-color: ").concat("light"===t.palette.mode?"rgba(255, 255, 255,0.12)":"rgba(255, 255, 255,0.24)",";\n\n  & polygon {\n    fill: transparent;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: var(--main-color);\n    stroke-width: 0.5;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: transparent;\n  }\n\n  & .borderEffect {\n    stroke: var(--main-color);\n    stroke-width: 2;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n  }\n\n  &:hover,\n  &.").concat(Q.a.focusVisible," {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.").concat(Q.a.focusVisible," {\n    outline: none;\n  }\n\n  &.").concat(Q.a.active," { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-family: Helvetica, Inter, Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 200;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--main-color);\n      text-transform: uppercase;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }")})),ne=n.forwardRef((function(e,t){return n.createElement(X.a,Object.assign({},e,{component:ae,ref:t}))}));function se(){return n.createElement(ne,null,"Skills And Technologies")}var le=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile"},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return s.a.createElement(D.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-white"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},t)))))}}]),a}(n.Component),re=(a(49),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={detailsModalShow:!1,showSkills:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;if(this.props.sharedBasicInfo)var t=this.props.sharedBasicInfo.social.map((function(t){return s.a.createElement("span",{key:t.name,className:"m-4"},t.url?[t.pdf?s.a.createElement("a",{href:a(49),target:"_blank",without:!0,rel:"noopener noreferrer"},s.a.createElement("i",{className:t.class})):s.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:t.class}))]:s.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){e.setState({detailsModalShow:!0})}},s.a.createElement("i",{className:t.class})))}));return s.a.createElement("footer",null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("span",{onClick:function(){e.setState({showSkills:!0})}},s.a.createElement(se,null))),s.a.createElement(le,{show:this.state.showSkills,onHide:function(){return e.setState({showSkills:!1})},sharedSkills:this.props.sharedSkills,resumeBasicInfo:this.props.resumeBasicInfo}),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"social-links"},t),s.a.createElement(Y,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})}}),s.a.createElement("div",{className:"copyright py-4 text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("small",null,this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),n}(n.Component)),ie=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{},detailsModalShow:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.loadConstants(),this.loadResumeFromPath()}},{key:"loadConstants",value:function(){d.a.ajax({url:"constants.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadResumeFromPath",value:function(){d.a.ajax({url:"resume_data.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(j,{sharedData:this.state.sharedData.basic_info}),s.a.createElement(O,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(L,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(re,{sharedBasicInfo:this.state.sharedData.basic_info,sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}))}}]),a}(n.Component),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(150);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ie,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/matt-bellucci-dev-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/matt-bellucci-dev-portfolio","/service-worker.js");ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(t,e)}))}}()},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/MattBellucciResume.docx.ce672761.pdf"}},[[104,1,2]]]);
//# sourceMappingURL=main.b1b5eadb.chunk.js.map