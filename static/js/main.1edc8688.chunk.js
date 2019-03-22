(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,a,t){},187:function(e,a,t){},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},191:function(e,a,t){},192:function(e,a,t){},193:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(62),l=t.n(s),c=(t(77),t(63)),o=t(64),i=t(69),m=t(65),u=t(70),d=t(2),h=t.n(d),p=t(66),f=t.n(p),g=(t(80),function(e){var a=e.icon,t=e.label,n=e.url;return r.a.createElement("a",{href:n,target:"_blank",className:"Contact",rel:"noopener noreferrer"},a,r.a.createElement("span",null,t))}),v={email:"codi.noedel@gmail.com",github:"codifiman",location:"Edmonds, WA",name:"Codi Noedel",title:"Senior Full-Stack Software Engineer",bio:"Codi is a Software Engineer on the Unified Demonstration Framework team at F5 Networks, where she builds tools and automation frameworks to more effectively distribute technical content. She\u2019s passionate about product design and ensuring that teams have tools that delight them and empower them to solve the challenges at hand. In her free time, she plays video games, reads books, builds web apps, and spends time with her family."},E=function(){return r.a.createElement(g,{icon:r.a.createElement(f.a,null),label:v.github,url:"https://github.com/".concat(v.github)})},y=t(67),b=t.n(y),N=function(){return r.a.createElement(g,{icon:r.a.createElement(b.a,null),label:v.email,url:"mailto:".concat(v.email)})},S=t(68),w=t.n(S),k=(t(81),function(){return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{src:w.a,alt:"A headshot of Codi"}),r.a.createElement("h1",null,v.name),r.a.createElement("div",{className:"Card-contact"},r.a.createElement(E,null),r.a.createElement(N,null)))}),T=(t(82),function(){return r.a.createElement("div",{className:"Details"},r.a.createElement("div",{className:"Details-header"},r.a.createElement("h3",null,v.title),r.a.createElement("h3",null,v.location)),r.a.createElement("div",{className:"Details-bio"},v.bio))}),D=(t(83),function(e){var a=e.className;return r.a.createElement("div",{className:h()(a,"Banner")},r.a.createElement("header",null," "),r.a.createElement("div",{className:"Banner-content"},r.a.createElement(k,null),r.a.createElement(T,null)))}),L=t(3),C=(t(186),function(e){var a=e.className,t=e.items;return r.a.createElement("ul",{className:h()("List",a)},t.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",null,e.value),e.resource?r.a.createElement("a",{href:e.resource},e.resource):null)}))}),M=(t(187),function(e){var a=e.className,t=e.heading,n=e.secondaryHeading,s=e.children;return r.a.createElement("section",{className:"Section"},r.a.createElement("div",{className:"Heading"},r.a.createElement("h3",null,t),r.a.createElement("div",null,n||null)),r.a.createElement("div",{className:h()("content",a)},s))}),A=[{school:"The Evergreen State College",degree:"Bachelor of Science, Computer Science",completionDate:"2013-06-12T00:00:00Z",achievements:[{value:"Founding member of the Evergreen Collegiate Cyber Defense Competition Blue Team (2012, 2013)"},{value:"Focus on data structures, operating systems, and language design & theory, including implementation of a basic C interpreter in Java"}]}],j=(t(188),function(){return r.a.createElement(M,{heading:"Education",className:"Education"},A.map(function(e){return r.a.createElement("div",{key:e.school,className:"school"},r.a.createElement("h4",{className:"name"},e.school),r.a.createElement("h5",{className:"daterange"},Object(L.format)(e.completionDate,"MMMM YYYY")),r.a.createElement("h6",{className:"degree"},e.degree),e.achievements?r.a.createElement(C,{items:e.achievements,className:"achievements"}):null)}))}),Y=[{company:"F5 Networks",title:"Senior Full-Stack Software Developer",startDate:"2014-10-27T00:00:00Z",duties:"I am part of a team that develops and maintains a virtual environment orchestration platform designed to help F5 staff show off the capabilities of F5's products. I've been part of this team since the system was a prototype and developed it through prototype, in-house datacenter, and into AWS/Ravello.",achievements:[{value:"Presented at Twilio's 2018 SIGNAL conference on the topic of my team's experience building an online training platform with Twilio Video",resource:"https://www.youtube.com/watch?v=cjX_lwqvN68&t=4s"}]},{company:"Explore Consulting",title:"Technical Consultant",startDate:"2013-07-01T00:00:00Z",endDate:"2014-09-03T00:00:00Z",duties:"As a consultant, I worked on dozens of projects of varying sizes, most notably two ASP.NET applications: one that allows sports teams to chronicle their use of sponsor money and another that helped the NFL Scouting Combine track players' availability for informal interview."},{company:"The Evergreen State College",title:"Senior System Operator",startDate:"2012-02-13T00:00:00Z",endDate:"2013-06-13T00:00:00Z",duties:"While attending Evergreen, I maintained a large fleet of OSX and Windows/Linux dual-boot machines for student use across the Olympia and Tacoma campuses. In an effort to leave the lab in a better state than I found it, I overhauled much of our image deployment tooling and built several new general-use tools, such as a wake-on-LAN app that could start up most of the lab in a single click."},{company:"New Market Skills Center",title:"Teacher's Assistant (Paid)",startDate:["2008-06-23T00:00:00Z","2009-07-23T00:00:00Z"],endDate:["2008-08-23T00:00:00Z","2009-08-23T00:00:00Z"],duties:"I assisted with DigiPen's Video Game Programming and Animation workshops. I answered questions, helped students realize ideas, proofed labs prior to students receiving them, and graded assignments."}],O=(t(189),function(){return r.a.createElement(M,{heading:"Experience",className:"Experience"},Y.map(function(e){return r.a.createElement("div",{key:e.company,className:"company"},r.a.createElement("h4",{className:"name"},e.company),r.a.createElement("h5",{className:"daterange"},"object"===typeof e.startDate?e.startDate.map(function(a,t){return function(e,a){return"".concat(Object(L.format)(e,"MMMM")," - ").concat(Object(L.format)(a,"MMMM")," ").concat(Object(L.format)(e,"YYYY"))}(a,e.endDate[t])}).join(", "):(a=e.startDate,t=e.endDate,"".concat(Object(L.format)(a,"MMMM YYYY")," - ").concat(t?Object(L.format)(t,"MMMM YYYY"):"Present"))),r.a.createElement("h6",{className:"title"},e.title),r.a.createElement("p",{className:"duties"},e.duties),e.achievements?r.a.createElement(C,{items:e.achievements,className:"achievements"}):null);var a,t}))}),F=[1,2,3],I="fresh",Z="stale",P=[{name:"Javascript",category:"Languages",freshness:I,importance:3,level:3},{name:"Typescript",category:"Languages",freshness:Z,importance:3,level:1},{name:"HTML",category:"Languages",freshness:I,importance:3,level:3},{name:"CSS",category:"Languages",freshness:I,importance:3,level:3},{name:"Java",category:"Languages",freshness:Z,importance:2,level:2},{name:"C#",category:"Languages",freshness:Z,importance:2,level:2},{name:"Python",category:"Languages",freshness:Z,importance:2,level:2},{name:"C++",category:"Languages",freshness:Z,importance:2,level:1},{name:"C",category:"Languages",freshness:Z,importance:2,level:2},{name:"SQL (PostGres)",category:"Languages",freshness:Z,importance:1,level:2},{name:"React",category:"Libraries",freshness:I,importance:3,level:3},{name:"Redux",category:"Libraries",freshness:I,importance:3,level:3},{name:"Angular 2",category:"Libraries",freshness:Z,importance:3,level:1},{name:"Node.js",category:"Libraries",freshness:I,importance:3,level:3},{name:"AWS JavaScript SDK",category:"Libraries",freshness:I,importance:2,level:3},{name:"Twilio JavaScript SDK",category:"Libraries",freshness:I,importance:2,level:3},{name:"ASP.NET",category:"Libraries",freshness:Z,importance:1,level:1},{name:"AWS: SWF",category:"Services",level:3,importance:3,freshness:I},{name:"AWS: EC2",category:"Services",level:3,importance:3,freshness:I},{name:"AWS: DynamoDB",category:"Services",freshness:I,level:3,importance:3},{name:"Twilio Video",category:"Services",freshness:I,level:3,importance:3},{name:"Twilio Chat",category:"Services",freshness:I,level:3,importance:3},{name:"Vim",category:"Tools",freshness:I,level:2,importance:3},{name:"Visual Studio",category:"Tools",freshness:Z,importance:3,level:3}],W=(t(190),function(){return r.a.createElement("div",{className:"Legend"},r.a.createElement("span",{className:"Fresh"},"Fresh"),r.a.createElement("span",{className:"Stale"},"Inactive"))}),x=function(e){var a=e.name,t=e.level,n=e.freshness;return r.a.createElement("div",{className:"Skill"},r.a.createElement("div",{className:"name"},a),r.a.createElement("div",{className:h()("ranking",n)},F.map(function(e){return r.a.createElement("div",{className:h()({yes:e<=t},"level"),key:e})})))},J=function(){return r.a.createElement(M,{heading:"Skills",className:"Skills",secondaryHeading:r.a.createElement(W,null)},P.map(function(e){return r.a.createElement(x,{name:e.name,level:e.level,freshness:e.freshness,key:e.name})}))},B=(t(191),function(e){var a=e.className;return r.a.createElement("div",{className:h()("Resume",a)},r.a.createElement(O,null),r.a.createElement(J,null),r.a.createElement(j,null))}),V=(t(192),function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,{className:"App-banner"}),r.a.createElement(B,{className:"App-resume"}))}}]),a}(n.Component));l.a.render(r.a.createElement(V,null),document.getElementById("root"))},68:function(e,a,t){e.exports=t.p+"static/media/codi.a7e911ee.jpg"},71:function(e,a,t){e.exports=t(193)},77:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.1edc8688.chunk.js.map