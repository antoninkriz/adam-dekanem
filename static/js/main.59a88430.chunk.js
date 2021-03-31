(this["webpackJsonpadam-dekanem"]=this["webpackJsonpadam-dekanem"]||[]).push([[0],{19:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i.n(n),r=i(8),c=i(2),s=(i(19),i(3)),a=i(0);const d=c.b.div`
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
`,l=c.b.a`
  font-size: 3rem;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`,m=c.b.a`
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
`;var b=()=>{const[e,t]=Object(n.useState)(!1);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{onClick:()=>t(!e),children:e?Object(a.jsx)(x,{}):Object(a.jsx)(j,{})}),Object(a.jsxs)(h,{opened:e,children:[Object(a.jsx)(l,{href:"#home",onClick:()=>t(!e),children:"DOM\u016e"}),Object(a.jsx)(l,{href:"#video",onClick:()=>t(!e),children:"VIDEO"}),Object(a.jsx)(l,{href:"#program",onClick:()=>t(!e),children:"PROGRAM"}),Object(a.jsx)(l,{href:"#contacts",onClick:()=>t(!e),children:"KONTAKTY"}),Object(a.jsx)(m,{href:"https://www.antoninkriz.eu/",children:"\xa9 Anton\xedn K\u0159\xed\u017e"})]})]})};var p=c.b.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`,f=i.p+"static/media/adam.648a543f.png";const g=c.b.img`
  position: absolute;
  max-width: 100vw;
  max-height: 80vh;
  margin-top: auto;
  bottom: 0;

  @media (max-width: 1024px) {
    opacity: 0.4;
  }
`,u=c.b.div`
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
`,O=c.b.h1`
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
`;var v=()=>Object(a.jsxs)(p,{id:"home",children:[Object(a.jsx)(g,{src:f,alt:"Adam Proch\xe1ska"}),Object(a.jsxs)(u,{children:[Object(a.jsxs)(O,{children:["ADAM",Object(a.jsx)("br",{}),"D\u011aKANEM"]}),Object(a.jsxs)(w,{children:["To \u017ee m\u016f\u017eu je\u0161t\u011b neznamen\xe1, \u017ee bych m\u011bl\u2026",Object(a.jsx)("br",{}),"-Adam Proch\xe1ska"]})]})]});const k=Object(c.b)(p)`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`,K=c.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 480px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,I=e=>Object(c.b)(e)`
  font-size: 3rem;
  color: ${e=>e.theme.colors.white};
  margin: 30px;
`,M=I(s.f),C=I(s.a),P=I(s.c),B=c.b.div`
  width: 100%;
  padding: 0 15px;
  font-weight: 200;
  color: ${e=>e.theme.colors.white};
`;var R=()=>Object(a.jsxs)(p,{id:"program",children:[Object(a.jsx)($,{children:"PROGRAM"}),Object(a.jsxs)(A,{children:[Object(a.jsxs)(K,{children:[Object(a.jsx)(M,{}),Object(a.jsxs)(B,{children:[Object(a.jsx)("strong",{children:"Zt\xed\u017een\xed podm\xednek kandidatury na d\u011bkana"}),Object(a.jsx)("br",{}),"Zaveden\xed z\xe1kladn\xedch podm\xednek pro p\u0159\xedpadn\xe9 kandid\xe1ty na d\u011bkana, aby nedo\u0161lo k p\u0159ehlcen\xed syst\xe9mu."]})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(P,{}),Object(a.jsxs)(B,{children:[Object(a.jsx)("strong",{children:"Voliteln\xfd humanitn\xed p\u0159edm\u011bt kurz p\u0159e\u017eit\xed "}),Object(a.jsx)("br",{}),"BI-KPZ ur\u010den\xfd p\u0159edev\u0161\xedm student\u016fm prvn\xedch ro\u010dn\xedk\u016f a v\u0161em, kdo se pr\xe1v\u011b odst\u011bhovali od maminky."]})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(B,{children:[Object(a.jsx)("strong",{children:"Roz\u0161\xed\u0159en\xed v\xfdzkumu pod\xedlov\xe9ho krit\xe9ria pro funkce"}),Object(a.jsx)("br",{}),"Zalo\u017een\xed v\xfdzkumn\xe9 skupiny na na\u0161\xed fakult\u011b pro v\xfdzkum t\xe9to oblasti."]})]})]})]});const T=c.b.h2`
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
`,D=c.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 480px;
`,E=(Z=s.b,Object(c.b)(Z)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.white};
  margin: 30px;
`);var Z;const J=c.b.a`
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
`;var N=()=>Object(a.jsxs)(p,{id:"contacts",children:[Object(a.jsx)(T,{children:"KONTAKT"}),Object(a.jsxs)(D,{children:[Object(a.jsx)(E,{}),Object(a.jsx)(J,{href:"mailto:prochaska@adamdekanem.cz",children:"prochaska@adamdekanem.cz"})]})]});const S=c.b.div`
  width: 100%;
  min-height: 100vh;
  background: ${e=>e.theme.colors.primary};
`;var F=()=>Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(S,{children:[Object(a.jsx)(v,{}),Object(a.jsx)(z,{}),Object(a.jsx)(R,{}),Object(a.jsx)(N,{})]}),Object(a.jsx)(b,{})]});var G={colors:{primary:"#06e",white:"#fff"},zIndex:{menuButton:100,menu:90}};Object(r.render)(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(c.a,{theme:G,children:Object(a.jsx)(F,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.59a88430.chunk.js.map