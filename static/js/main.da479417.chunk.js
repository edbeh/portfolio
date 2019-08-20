(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,a){e.exports=a(46)},33:function(e,t,a){},34:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),o=a.n(l),r=(a(33),a(3)),i=a(4),s=a(6),p=a(5),u=a(14),m=a(7),h=a(12),d=a(13),b=a(48),f=a(47),E=(a(34),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(f.a,{key:"1",timeout:1e3,classNames:"fade"},c.a.createElement("div",null,c.a.createElement("h1",null,"Full Stack Web App Developer",c.a.createElement("br",null),c.a.createElement("span",null,"with React.js and Node.js ")),c.a.createElement("p",null,"Hi, I'm Edward and I've been building highly responsive web applications since 2017."),c.a.createElement("p",null,"View a demo of my React movie application ",c.a.createElement("a",{className:"App-link",href:"https://edbeh.github.io/react-movie",target:"_blank",rel:"noopener noreferrer"},"here"),"."),c.a.createElement(h.b,{className:"App-link",to:"/skills"},"View my top skills"))))}}]),t}(c.a.Component)),k=(a(42),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress_bar",id:this.props.id,style:{background:this.props.color,width:this.props.width}}),c.a.createElement("div",{id:"prog_status"},this.props.text)))}}]),t}(c.a.Component)),y=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(f.a,{key:"2",timeout:1e3,classNames:"fade"},c.a.createElement("div",null,c.a.createElement("h1",null,"My Top 3 Skills"),c.a.createElement(k,{text:"React.js (Front-End)",color:"rgb(54,168,233)",id:"skill80"}),c.a.createElement(k,{text:"Node.js (Back-End)",color:"rgb(104, 160, 99)",id:"skill90"}),c.a.createElement(k,{text:"Amazon AWS (Hosting)",color:"rgb(255,153,0)",id:"skill70"}),c.a.createElement("p",null,"If you want to build a fluid single-page application, you should definitely try React.js!"),c.a.createElement("p",null,"Coupled with Node.js back-end framework, your app will be truly fast and responsive."),c.a.createElement(h.b,{className:"App-link",to:"/launch"},"What about launching the app after development?"))))}}]),t}(c.a.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(f.a,{key:"3",timeout:1e3,classNames:"fade"},c.a.createElement("div",null,c.a.createElement("h1",null,"From Development to Launch",c.a.createElement("br",null),c.a.createElement("span",null,"on Amazon Web Services")),c.a.createElement("p",null,"I learned to develop and host apps because I'm passionate about building useful web apps."),c.a.createElement("p",null,"I'd love to work with you if you are developing a Javascript app!"),c.a.createElement(h.b,{className:"App-link",to:"/"},"Contact me!"))))}}]),t}(c.a.Component),v=(a(43),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"bunny",onClick:function(){return e.props.handleClick()}})}}]),t}(c.a.Component)),O=(a(44),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("h4",{className:this.props.handleSpeech?"speech-bubble activate":"speech-bubble"},this.props.speech)}}]),t}(n.Component)),w=(a(45),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={speech:[{id:0,content:"Hello there, welcome to my page! You can click me to talk to me!"},{id:1,content:"I'm made of pure CSS! Well, except when you click on me, that's Javascript!"},{id:2,content:"This page is made with React.js, notice how the elements flow seamlessly?"},{id:3,content:"It's made of the same framework powering Facebook and Instagram's newsfeed."},{id:4,content:"If you like this style, definitely check out my React movie web app in the first page!"},{id:5,content:"With React.js and Node.js, we can build a full application with just javascript!"},{id:6,content:"We can launch your application on cloud platform like Amazon's AWS too."},{id:7,content:"Did you know AWS offers free web app hosting for the 1st year?"},{id:8,content:"You can basically save business operating costs for 1 whole year!"},{id:9,content:"Hit me up if you are looking for a passionate web developer!"},{id:10,content:"That's all from me, look around my portfolio and see if anything interests you!"}],currentSpeech:"",speechActive:!1,clickNumber:0,appear:!0},a.randomSpeech=function(){if(!1===a.state.speechActive){var e=a.state.clickNumber;e=e>10?0:e;var t=a.state.speech[e].content;e++,a.setState({currentSpeech:t,speechActive:!0,clickNumber:e}),setTimeout(function(){a.setState({speechActive:!1})},3e3)}},a.randomSpeech=a.randomSpeech.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.randomSpeech()}},{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(b.a,null,c.a.createElement(f.a,{key:"1",in:this.state.appear,timeout:1e3,classNames:"fade",appear:!0},c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:E}),c.a.createElement(d.a,{path:"/skills",component:y}),c.a.createElement(d.a,{path:"/launch",component:j})))),c.a.createElement("div",{className:"character"},c.a.createElement(O,{speech:this.state.currentSpeech,handleSpeech:this.state.speechActive}),c.a.createElement(v,{handleClick:this.randomSpeech})))))}}]),t}(c.a.Component));o.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.da479417.chunk.js.map