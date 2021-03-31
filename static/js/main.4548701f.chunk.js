(this["webpackJsonpadam-dekanem"]=this["webpackJsonpadam-dekanem"]||[]).push([[0],{19:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var o=i(1),n=i.n(o),r=i(8),c=i(2),s=(i(19),i(3)),a=i(0);const d=c.b.div`
  position: fixed;
  top: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  padding: 10px;
  background: ${e=>e.theme.colors.white};
  border-radius: 50%;
  transition: border-radius 0.2s ease-in-out;
  z-index: ${e=>e.theme.zIndex.menuButton};
  cursor: pointer;

  :hover {
    border-radius: 35%;
  }

  @media (max-width: 1024px) {
    top: 20px;
    right: 20px;
  }
`,h=c.b.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: ${e=>e.opened?0:100}vh;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${e=>e.theme.colors.white};
  transition: bottom 0.2s ease-in-out;
  z-index: ${e=>e.theme.zIndex.menu};
`,m=c.b.a`
  font-size: 3rem;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`,l=c.b.a`
  position: absolute;
  bottom: 15px;
  font-size: 1rem;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 200;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`,x=Object(c.b)(s.d)`
  color: ${e=>e.theme.colors.primary};
  height: 100%;
  width: 100%;
`,j=Object(c.b)(s.e)`
  color: ${e=>e.theme.colors.primary};
  height: 100%;
  width: 100%;
`;var b=()=>{const[e,t]=Object(o.useState)(!1);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{onClick:()=>t(!e),children:e?Object(a.jsx)(x,{}):Object(a.jsx)(j,{})}),Object(a.jsxs)(h,{opened:e,children:[Object(a.jsx)(m,{href:"#home",onClick:()=>t(!e),children:"DOM\u016e"}),Object(a.jsx)(m,{href:"#video",onClick:()=>t(!e),children:"VIDEO"}),Object(a.jsx)(m,{href:"#program",onClick:()=>t(!e),children:"PROGRAM"}),Object(a.jsx)(m,{href:"#contacts",onClick:()=>t(!e),children:"KONTAKTY"}),Object(a.jsx)(l,{href:"https://www.antoninkriz.eu/",children:"\xa9 Anton\xedn K\u0159\xed\u017e"})]})]})};var p=c.b.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
`,g=i.p+"static/media/adam.648a543f.png";const O=c.b.img`
  position: absolute;
  max-width: 100vw;
  max-height: 80vh;
  margin-top: auto;
  bottom: 0;

  @media (max-width: 1024px) {
    opacity: 0.4;
  }
`,f=c.b.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 30%;

  @media (max-width: 1440px) {
    padding: 15px;
    right: 15%;
  }

  @media (max-width: 1024px) {
    padding: 15px;
    right: unset;
  }
`,u=c.b.h1`
  margin: 15px;
  color: transparent;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.5px;
  -webkit-text-stroke: 4px ${e=>e.theme.colors.white};

  ::selection {
    color: ${e=>e.theme.colors.white};
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    -webkit-text-stroke: 2px ${e=>e.theme.colors.white};
  }
`,w=c.b.p`
  color: ${e=>e.theme.colors.white};
  font-style: italic;
  width: 100%;
  text-align: end;
`;var v=()=>Object(a.jsxs)(p,{id:"home",children:[Object(a.jsx)(O,{src:g,alt:"Adam Proch\xe1ska"}),Object(a.jsxs)(f,{children:[Object(a.jsxs)(u,{children:["ADAM",Object(a.jsx)("br",{}),"D\u011aKANEM"]}),Object(a.jsxs)(w,{children:["Jsem pro st\xed\u017een\xed podm\xednek kandidatury na d\u011bkana",Object(a.jsx)("br",{}),"-Adam Proch\xe1ska"]})]})]});const k=Object(c.b)(p)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,y=c.b.iframe`
  display: block;
  width: 100%;
  margin: auto;
  height: 100vh;
  padding: 0;
`;var z=()=>Object(a.jsx)(k,{id:"video",children:Object(a.jsx)(y,{src:"https://www.youtube-nocookie.com/embed/gjCSJIAKEPM?vq=hd1080&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3",frameBorder:"0"})});const $=c.b.h2`
  margin: 0;
  padding: 100px;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  color: ${e=>e.theme.colors.white};

  @media (max-width: 1024px) {
    padding: 25px;
    font-size: 2rem;
  }
`,A=c.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 480px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,M=e=>Object(c.b)(e)`
  font-size: 3rem;
  color: ${e=>e.theme.colors.white};
  margin: 30px;
`,K=M(s.f),C=M(s.b),D=M(s.c),I=c.b.div`
  width: 100%;
  padding: 0 15px;
  font-weight: 200;
  color: ${e=>e.theme.colors.white};
`;var P=()=>Object(a.jsxs)(p,{id:"program",children:[Object(a.jsx)($,{children:"PROGRAM"}),Object(a.jsxs)(A,{children:[Object(a.jsx)(K,{}),Object(a.jsxs)(I,{children:[Object(a.jsx)("strong",{children:"Prvn\xed"}),Object(a.jsx)("br",{}),"M\xfdm hlavn\xedm a jedin\xfdm bodem programu je st\xed\u017eit podm\xednky kandidatury na d\u011bkana."]})]}),Object(a.jsxs)(A,{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(I,{children:[Object(a.jsx)("strong",{children:"Druh\xfd"}),Object(a.jsx)("br",{}),"Nyn\xed m\u016f\u017ee kandidovat opravdu ka\u017ed\xfd, sta\u010d\xed neb\xfdt komunistou. J\xe1, ty a i tv\xe1 matka."]})]}),Object(a.jsxs)(A,{children:[Object(a.jsx)(D,{}),Object(a.jsxs)(I,{children:[Object(a.jsx)("strong",{children:"T\u0159et\xed"}),Object(a.jsx)("br",{}),"Dnes se m\u016f\u017ee b\xfdt d\u011bkanem ji\u017e opravdu ka\u017ed\xfd. Nenechme si vz\xedt svou fakultiu!"]})]})]});const J=c.b.h2`
  margin: 0;
  padding: 100px;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  color: ${e=>e.theme.colors.white};

  @media (max-width: 1024px) {
    padding: 25px;
    font-size: 2rem;
  }
`,N=c.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 480px;
`,T=(B=s.a,Object(c.b)(B)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.white};
  margin: 30px;
`);var B;const E=c.b.a`
  font-weight: 200;
  font-size: 1rem;
  color: ${e=>e.theme.colors.white};
  text-decoration: none;
  font-style: italic;
  transition: transform 0.2s ease-in-out;

  :hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;var R=()=>Object(a.jsxs)(p,{id:"contacts",children:[Object(a.jsx)(J,{children:"KONTAKT"}),Object(a.jsxs)(N,{children:[Object(a.jsx)(T,{}),Object(a.jsx)(E,{href:"mailto:prochaska@adamdekanem.cz",children:"prochaska@adamdekanem.cz"})]})]});const S=c.b.div`
  width: 100%;
  min-height: 100vh;
  background: ${e=>e.theme.colors.primary};
`;var F=()=>Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(S,{children:[Object(a.jsx)(v,{}),Object(a.jsx)(z,{}),Object(a.jsx)(P,{}),Object(a.jsx)(R,{})]}),Object(a.jsx)(b,{})]});var G={colors:{primary:"#06e",white:"#fff"},zIndex:{menuButton:100,menu:90}};Object(r.render)(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(c.a,{theme:G,children:Object(a.jsx)(F,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4548701f.chunk.js.map