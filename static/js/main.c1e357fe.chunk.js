(this["webpackJsonpadam-dekanem"]=this["webpackJsonpadam-dekanem"]||[]).push([[0],{38:function(A,e,t){},43:function(A,e,t){"use strict";t.r(e);var o=t(1),n=t.n(o),a=t(22),i=t(2),s=t(10),c=t(13),d=(t(38),t(4)),r=t(16),j=t(9),l=t(0);const h=i.b.div`
  position: fixed;
  top: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  padding: 10px;
  background: ${A=>A.theme.colors.white};
  border-radius: 50%;
  transition: border-radius 0.2s ease-in-out;
  z-index: ${A=>A.theme.zIndex.menuButton};
  cursor: pointer;

  :hover {
    border-radius: 35%;
  }

  @media (max-width: 1024px) {
    top: 20px;
    right: 20px;
  }
`,m=i.b.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: ${A=>A.opened?0:100}vh;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${A=>A.theme.colors.white};
  transition: bottom 0.2s ease-in-out;
  z-index: ${A=>A.theme.zIndex.menu};
`,b=Object(i.b)(r.a)`
  font-size: 3rem;
  color: ${A=>A.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`,g=i.b.a`
  position: absolute;
  bottom: 15px;
  font-size: 1rem;
  color: ${A=>A.theme.colors.primary};
  text-decoration: none;
  font-weight: 200;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`,x=i.b.span`
  display: block;
  position: absolute;
  margin: 15px;
  top: 15px;
  left: 15px;
  color: transparent;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.5px;
  -webkit-text-stroke: 2px ${A=>A.theme.colors.primary};

  ::selection {
    color: ${A=>A.theme.colors.primary};
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    -webkit-text-stroke: 1px ${A=>A.theme.colors.primary};
  }
`,p=Object(i.b)(j.d)`
  color: ${A=>A.theme.colors.primary};
  height: 100%;
  width: 100%;
`,k=Object(i.b)(j.f)`
  color: ${A=>A.theme.colors.primary};
  height: 100%;
  width: 100%;
`;var u=()=>{const[A,e]=Object(o.useState)(!1);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{onClick:()=>e(!A),children:A?Object(l.jsx)(p,{}):Object(l.jsx)(k,{})}),Object(l.jsxs)(m,{opened:A,children:[Object(l.jsxs)(x,{children:["ADAM",Object(l.jsx)("br",{}),"D\u011aKANEM"]}),Object(l.jsx)(b,{smooth:!0,to:"/#home",onClick:()=>e(!1),children:"DOM\u016e"}),Object(l.jsx)(b,{smooth:!0,to:"/rozhovor",onClick:()=>e(!1),children:"ROZHOVOR"}),Object(l.jsx)(b,{smooth:!0,to:"/#video",onClick:()=>e(!1),children:"VIDEO"}),Object(l.jsx)(b,{smooth:!0,to:"/#program",onClick:()=>e(!1),children:"PROGRAM"}),Object(l.jsx)(b,{smooth:!0,to:"/#contacts",onClick:()=>e(!1),children:"KONTAKTY"}),Object(l.jsx)(g,{href:"https://www.antoninkriz.eu/",children:"\xa9 Anton\xedn K\u0159\xed\u017e"})]})]})};const v=i.b.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
`,O=Object(i.b)(v)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,Q=i.b.h2`
  margin: 0;
  padding: 100px;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  color: ${A=>A.theme.colors.white};

  @media (max-width: 1024px) {
    padding: 25px;
    font-size: 2rem;
  }
`;var C=v,w=t.p+"static/media/adam.18c3901e.png";const B=i.b.img`
  position: absolute;
  max-width: 100vw;
  max-height: 80vh;
  margin-top: auto;
  bottom: 0;

  @media (max-width: 1024px) {
    opacity: 0.4;
  }
`,f=i.b.div`
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
`,y=i.b.h1`
  margin: 15px;
  color: transparent;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.5px;
  -webkit-text-stroke: 4px ${A=>A.theme.colors.white};

  ::selection {
    color: ${A=>A.theme.colors.white};
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    -webkit-text-stroke: 2px ${A=>A.theme.colors.white};
  }
`,z=i.b.p`
  color: ${A=>A.theme.colors.white};
  font-style: italic;
  width: 100%;
  text-align: end;
`;var D=()=>(c.a.pageview(window.location.pathname+window.location.search),Object(l.jsxs)(C,{id:"home",children:[Object(l.jsx)(B,{src:w,alt:"Adam Proch\xe1ska"}),Object(l.jsxs)(f,{children:[Object(l.jsxs)(y,{children:["ADAM",Object(l.jsx)("br",{}),"D\u011aKANEM"]}),Object(l.jsxs)(z,{children:["To, \u017ee m\u016f\u017eu, je\u0161t\u011b neznamen\xe1, \u017ee bych m\u011bl\u2026",Object(l.jsx)("br",{}),"\u2013 Adam Proch\xe1ska"]})]})]}));const G=i.b.video`
  display: block;
  width: 100%;
  margin: auto;
  height: 100vh;
  padding: 0;
  background: ${A=>A.theme.colors.black};
`;var M=()=>Object(l.jsx)(O,{id:"video",children:Object(l.jsx)(G,{src:"/video.mp4",controls:!0,preload:"auto",poster:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAIAAABnsVYUAAAgAElEQVR42uzcW3NVdZrH8ae7525exbyteQFzO3deaFfbWKVlowhUD4UHDjI1gq0DbVklWiWHUkACJBISJsBGMmwIJBiTCkkwkNOei5W2GBEIyT6sZ63P5yX8nv/Fqu/FigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADol7qsAAAThSURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALv1D1GbvBOtmbrMAAAAAElFTkSuQmCC"})});const E=i.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`,I=i.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 480px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,N=A=>Object(i.b)(A)`
  font-size: 3rem;
  color: ${A=>A.theme.colors.white};
  margin: 30px;
`,R=N(j.h),J=N(j.e),P=N(j.b),Y=i.b.div`
  width: 100%;
  padding: 0 15px;
  font-weight: 200;
  color: ${A=>A.theme.colors.white};
`,F=Object(i.b)(r.a)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px;
  margin: 10px 10px 30px;
  background: ${A=>A.theme.colors.white};
  color: ${A=>A.theme.colors.primary};
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;var Z=()=>Object(l.jsxs)(C,{id:"program",children:[Object(l.jsx)(Q,{children:"PROGRAM"}),Object(l.jsxs)(E,{children:[Object(l.jsxs)(F,{to:"/rozhovor",children:["ROZHOVOR S KANDID\xc1TEM ",Object(l.jsx)(j.c,{})]}),Object(l.jsxs)(I,{children:[Object(l.jsx)(R,{}),Object(l.jsxs)(Y,{children:[Object(l.jsx)("strong",{children:"Zt\xed\u017een\xed podm\xednek kandidatury na d\u011bkana"}),Object(l.jsx)("br",{}),"Zaveden\xed z\xe1kladn\xedch podm\xednek pro kandidaturu na d\u011bkana, aby nedo\u0161lo nedo\u0161lo k p\u0159ehlcen\xed syst\xe9mu."]})]}),Object(l.jsxs)(I,{children:[Object(l.jsx)(P,{}),Object(l.jsxs)(Y,{children:[Object(l.jsx)("strong",{children:"Voliteln\xfd humanitn\xed p\u0159edm\u011bt kurz p\u0159e\u017eit\xed "}),Object(l.jsx)("br",{}),"BI-KPZ ur\u010den\xfd p\u0159edev\u0161\xedm student\u016fm prvn\xedch ro\u010dn\xedk\u016f a v\u0161em, kdo se pr\xe1v\u011b odst\u011bhovali od maminky."]})]}),Object(l.jsxs)(I,{children:[Object(l.jsx)(J,{}),Object(l.jsxs)(Y,{children:[Object(l.jsx)("strong",{children:"Roz\u0161\xed\u0159en\xed v\xfdzkumu pod\xedlov\xe9ho krit\xe9ria pro funkce"}),Object(l.jsx)("br",{}),"Zalo\u017een\xed v\xfdzkumn\xe9 skupiny na na\u0161\xed fakult\u011b pro v\xfdzkum t\xe9to oblasti."]})]})]})]});const K=i.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 480px;
`,T=A=>Object(i.b)(A)`
  font-size: 2rem;
  color: ${A=>A.theme.colors.white};
  margin: 30px;
`,L=T(j.a),W=T(j.g),V=i.b.a`
  font-weight: 200;
  font-size: 1rem;
  color: ${A=>A.theme.colors.white};
  text-decoration: none;
  font-style: italic;
  transition: transform 0.2s ease-in-out;

  :hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;var H=()=>Object(l.jsxs)(C,{id:"contacts",children:[Object(l.jsx)(Q,{children:"KONTAKTY"}),Object(l.jsxs)(K,{children:[Object(l.jsx)(L,{}),Object(l.jsx)(V,{href:"mailto:prochaska@adamdekanem.cz",children:"prochaska@adamdekanem.cz"})]}),Object(l.jsxs)(K,{children:[Object(l.jsx)(W,{}),Object(l.jsx)(V,{href:"mailto:team@adamdekanem.cz",children:"team@adamdekanem.cz"})]})]}),U=t(26),S=t.p+"static/media/adam_fit.5379efd8.jpg";const X=i.b.article`
  margin: 0 auto 90px;
  max-width: 960px;
  padding: 30px;
  background: ${A=>A.theme.colors.white};
  border-radius: 5px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    padding: 10px;
  }
`,q=i.b.h1`
  margin: 15px;
  font-size: 2rem;
  font-weight: 600;
  color: ${A=>A.theme.colors.primary};

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 1.5rem;
  }
`,$=i.b.section`
  margin: 30px;
  padding: 20px;
  background: ${A=>A.theme.colors.gray};
  border-radius: 5px;

  @media (max-width: 1024px) {
    margin: 20px;
    padding: 15px;
  }
`,_=i.b.h3`
  margin: 10px;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${A=>A.theme.colors.primary};

  @media (max-width: 1024px) {
    padding: 5px;
    font-size: 1.2rem;
  }
`,AA=i.b.figure`
  position: relative;
  width: calc(100% + 60px);
  margin: 0 -30px 0 -30px;

  @media (max-width: 1024px) {
    width: calc(100% + 20px);
    margin: 0 -10px 0 -10px;
  }
`,eA=i.b.figcaption`
  width: fit-content;
  padding: 5px 10px;
  margin: 0 30px 0 auto;
  background: ${A=>A.theme.colors.gray};
  border-radius: 0 0 5px 5px;
`,tA=i.b.ul``,oA=i.b.li``,nA=i.b.img`
  display: block;
  width: 100%;
`,aA=i.b.a`
  color: ${A=>A.theme.colors.primary};
`,iA=i.b.p`
  margin: 15px 5px;
  text-align: justify;

  @media (max-width: 1024px) {
    text-align: unset;
  }
`,sA=i.b.strong``,cA=i.b.em``,dA=i.b.hr`
  margin: 30px 0;
`;var rA=()=>(c.a.pageview(window.location.pathname+window.location.search),Object(l.jsxs)(C,{children:[Object(l.jsx)(U.a,{title:"Prv\xe1k d\u011bkanem? - Rozhovor | Adam D\u011bkanem"}),Object(l.jsx)(Q,{children:"Rozhovor"}),Object(l.jsxs)(X,{children:[Object(l.jsx)(q,{children:"Prv\xe1k d\u011bkanem?"}),Object(l.jsx)(iA,{children:Object(l.jsx)(cA,{children:"Letos na\u0161i fakultu \u010dek\xe1 d\u016fle\u017eit\xe9 rozhodnut\xed \u2013 volba d\u011bkana. V minul\xfdch letech byl celkem \xfazk\xfd v\xfdb\u011br, letos ale m\xe1me \u0161t\u011bst\xed. V prvn\xedm ro\u010dn\xedku bakal\xe1\u0159sk\xe9ho studia se objevil \u010dlov\u011bk p\u0159ipraven\xfd kandidovat v\u017edy a v\u0161ude. Jeho jm\xe9no je Adam Proch\xe1ska a k datu vyd\xe1n\xed se jedn\xe1 o \u017ehav\xe9ho favorita."})}),Object(l.jsx)(dA,{}),Object(l.jsxs)($,{children:[Object(l.jsx)(_,{children:"V\xedte \u017ee?"}),Object(l.jsx)(iA,{children:"Na d\u011bkana m\u016f\u017ee kandidovat skoro ka\u017ed\xfd?"})]}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Za\u010dneme ot\xe1zkami na t\xe9mata, kter\xe1 v pr\u016fzkumu na naprosto nereprezentativn\xedm vzorku lid\xed vy\u0161la jako nejpal\u010div\u011bj\u0161\xed: Jak se stav\xedte k povinnosti humanitn\xedch p\u0159edm\u011bt\u016f? Jakou d\xe1vaj\xed student\u016fm hodnotu?"})}),Object(l.jsx)(iA,{children:"Ji\u017e nyn\xed jsem se zapojil do iniciativy, kter\xe1 by student\u016fm uk\xe1zala ve spolupr\xe1ci s Univerzitou Pardubice p\u0159edm\u011bt \u0160amanismus a kvantov\xe1 fyzika. Mysl\xedm si, \u017ee humanitn\xed p\u0159edm\u011bty jsou extr\xe9mn\u011b d\u016fle\u017eit\xe9 a je dob\u0159e, \u017ee se u n\xe1s na fakult\u011b nab\xedzej\xed. Roz\u0161\xed\u0159il bych nab\xeddku humanitn\xedch p\u0159edm\u011bt\u016f spoluprac\xed s jin\xfdmi univerzitami."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Jste pro korektn\xed zaveden\xed \u010d\xedslov\xe1n\xed pater?"})}),Object(l.jsx)(iA,{children:"Ano. Indexovat od nuly je z\xe1klad."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Budete i nad\xe1le tolerovat fakultu architektury v na\u0161\xed budov\u011b?"})}),Object(l.jsx)(iA,{children:"Mysl\xedm si, \u017ee je nasnad\u011b ud\u011blat bitvu o Bar\xe1k v \u0159ecko-\u0159\xedmsk\xe9m stylu. Mohou se \xfa\u010dastnit bu\u010f v\u0161ichni studenti, nebo zorganizujeme d\u011bkansk\xfd duel v bahn\u011b."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Jak se stav\xedte k mo\u017enosti p\u0159esunu z teams\u016f na Discord, o kter\xe9m v\xedme, \u017ee funguje?"})}),Object(l.jsx)(iA,{children:"Ano."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Nyn\xed k Va\u0161\xed kompetenci zast\xe1vat na fakult\u011b tak z\xe1sadn\xed roli: P\u0159ijde V\xe1m, \u017ee m\xe1te pro pozici d\u011bkana dostate\u010dn\xfd nadhled?"})}),Object(l.jsx)(iA,{children:"Samoz\u0159ejm\u011b. V\xedm, \u017ee m\xe1m velmi dobr\xfd nadhled, v\u017edy jsem vy\u010dn\xedval z davu. Nejv\u011bt\u0161\xed p\u0159ek\xe1\u017ekou budou z\xe1rubn\u011b dve\u0159\xed a n\xedzko vis\xedc\xed sv\u011btla."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Jste si jist\xfd, \u017ee budete m\xedt \u010das d\u011blat d\u011bkana, kdy\u017e budete d\u011blat ProgTest?"})}),Object(l.jsx)(iA,{children:"Ano. Aktivity, kter\xe9 se vymezuj\xed t\xedm, \u017ee na n\u011b nem\xe1\u0161 \u010das, proto\u017ee d\u011bl\xe1\u0161 ProgTest, jsou v\u0161echny v\u010detn\u011b d\u011bl\xe1n\xed ProgTestu. A vzhledem k tomu, \u017ee mno\u017eina aktivit obsahuje v\u0161echny aktivity, je vymezen\xed bezp\u0159edm\u011btn\xe9."}),Object(l.jsxs)(AA,{children:[Object(l.jsx)(nA,{src:S,alt:"Adam p\u0159ed budovou FIT \u010cVUT"}),Object(l.jsxs)(eA,{children:["Zdroj:"," ",Object(l.jsx)(aA,{href:"https://www.instagram.com/averner.cz/",children:"Adam Verner"})]})]}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Mysl\xedte si, \u017ee Va\u0161e p\u0159\xedpadn\xe9 p\u016fsoben\xed v dan\xe9 funkci fakult\u011b polep\u0161\xed?"})}),Object(l.jsx)(iA,{children:"Situace na fakult\u011b se bu\u010f zlep\u0161\xed, nebo z\u016fstane stejn\xe1, nebo se zhor\u0161\xed. Jin\xe9 vstupy nejsou o\u0161et\u0159eny."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"M\xe1te v podlaze m\xedsto na krabice od v\xedna pop\u0159. co tam m\xe1te, \u017ee m\xedsto nem\xe1te?"})}),Object(l.jsx)(iA,{children:"Nemohu ani potvrdit, ani vyvr\xe1tit, \u017ee v\u011bc, kterou by dotazovan\xfd identifikoval jako krabici od v\xedna mohla le\u017eet na m\xedst\u011b nepodobn\xe9m m\xe9mu opakostropu."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"P\u0159i p\u0159\xedpadn\xe9m ne\xfasp\u011bchu, budete se sna\u017eit st\xe1t se ministrem zdravotnictv\xed a pokud ano, kde se vid\xedte za m\u011bs\xedc?"})}),Object(l.jsx)(iA,{children:"Pokud se kandidatura nevyda\u0159\xed, opravdu se pl\xe1nuji uch\xe1zet o m\xedsto ministra zdravotnictv\xed (po\u017eadavky jsou p\u0159ibli\u017en\u011b stejn\xe9 jako na d\u011bkana). Je pochopiteln\xe9, \u017ee ve funkci vydr\u017e\xedm nanejv\xfd\u0161 t\xfdden, nicm\xe9n\u011b pozice ministra je dobr\xfdm odrazov\xfdm m\u016fstkem pro kandidaturu na vy\u0161\u0161\xed pozici pop\u0159. bych mohl b\u011bhem v\xfdjezdu na Erasmus zast\xe1vat funkci velvyslance v dan\xe9 zemi."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Na z\xe1v\u011br tu m\xe1me jednu ot\xe1zku z publika: Doka\u017ete Frobeniovu v\u011btu za 6 bod\u016f."})}),Object(l.jsxs)(iA,{children:[Object(l.jsx)(aA,{href:"https://kam.fit.cvut.cz/deploy/bi-lin//lin-text.pdf",children:"D\u016fkaz"})," ","si laskav\xfd \u010dten\xe1\u0159 provede s\xe1m."]}),Object(l.jsxs)($,{children:[Object(l.jsx)(_,{children:"Jak se vol\xed d\u011bkan?"}),Object(l.jsx)(iA,{children:Object(l.jsx)(cA,{children:"Na v\u0161ete\u010dn\xe9 ot\xe1zky odpov\xeddal p\u0159edseda volebn\xed komise Ond\u0159ej Guth."})}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Kdo v\u0161echno vol\xed d\u011bkana?"})}),Object(l.jsx)(iA,{children:"Vol\xed v\u0161ichni \u010dlenov\xe9 akademick\xe9ho sen\xe1tu fakulty. Technicky nevol\xedme d\u011bkana, ale kandid\xe1ta na d\u011bkana. Na z\xe1klad\u011b na\u0161\xed volby pak d\u011bkana jmenuje rektor."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Co mus\xed splnit kandit\xe1t?"})}),Object(l.jsx)(iA,{children:"Na kandid\xe1ta nejsou kladeny \u017e\xe1dn\xe9 po\u017eadavky/omezen\xed krom\u011b toho, \u017ee funkci d\u011bkana m\u016f\u017ee tat\xe1\u017e osoba vykon\xe1vat na t\xe9\u017ee fakult\u011b nejv\xfd\u0161e dv\u011b po sob\u011b bezprost\u0159edn\u011b jdouc\xed funk\u010dn\xed obdob\xed."}),Object(l.jsxs)(iA,{children:["Kandid\xe1tka mus\xed obsahovat:",Object(l.jsxs)(tA,{children:[Object(l.jsxs)(oA,{children:["vypln\u011bn\xfd"," ",Object(l.jsx)(aA,{href:"https://fit.cvut.cz/fakulta/informacni-deska/volba-dekana/navrh-kandidata.pdf",children:"n\xe1vrh kandid\xe1ta v\u010detn\u011b p\u0159\xedloh"})]}),Object(l.jsxs)(oA,{children:["vypln\u011bn\xe9"," ",Object(l.jsx)(aA,{href:"https://fit.cvut.cz/fakulta/informacni-deska/volba-dekana/cestne-prohlaseni.pdf",children:"\u010destn\xe9 prohl\xe1\u0161en\xed"})]}),Object(l.jsxs)(oA,{children:[Object(l.jsx)(aA,{href:"https://fit.cvut.cz/fakulta/informacni-deska/volba-dekana/vyjadreni-souhlasu.pdf",children:"souhlas s kandidaturou"})," ","\u2013 pro p\u0159\xedpad, \u017ee n\xe1vrh kandid\xe1ta pod\xe1 n\u011bkdo jin\xfd ne\u017e s\xe1m kandid\xe1t"]})]})]}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Jak \u010dasto prob\xedh\xe1 volba d\u011bkana? Kdy prob\u011bhne volba a kdy p\u0159\xedpadn\xe1 v\xfdm\u011bna d\u011bkana?"})}),Object(l.jsx)(iA,{children:"V p\u0159\xedpad\u011b, \u017ee d\u011bkan nen\xed odvol\xe1n, je volen na \u010dty\u0159let\xe9 funk\u010dn\xed obdob\xed. Samotn\xe1 volba prob\u011bhne 25. 6, v\xfdm\u011bna nejsp\xed\u0161 1. 10. 2021."}),Object(l.jsx)(iA,{children:Object(l.jsx)(sA,{children:"Co se stane kdy\u017e nikdo nekandiduje?"})}),Object(l.jsx)(iA,{children:"Nejd\u0159\xedve by se cel\xe1 volba opakovala. Pokud by se ani do tohoto opakovan\xe9ho procesu v\u016fbec nikdo nep\u0159ihl\xe1sil ani do konce funk\u010dn\xedho obdob\xed sou\u010dasn\xe9ho d\u011bkana, pravd\u011bpodobn\u011b by pan rektor n\u011bkoho pov\u011b\u0159il do\u010dasn\u011b \u0159\xedzen\xedm fakulty, dokud by se n\u011bjak\xfd \u0159\xe1dn\u011b p\u0159ihl\xe1\u0161en\xfd (a zvolen\xfd) d\u011bkan nena\u0161el."})]})]})]}));const jA=i.b.div`
  width: 100%;
  min-height: 100vh;
  background: ${A=>A.theme.colors.primary};
`;var lA=()=>Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(jA,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsxs)(d.a,{path:"/",exact:!0,children:[Object(l.jsx)(D,{}),Object(l.jsx)(M,{}),Object(l.jsx)(Z,{}),Object(l.jsx)(H,{})]}),Object(l.jsx)(d.a,{path:"/rozhovor",children:Object(l.jsx)(rA,{})})]})}),Object(l.jsx)(u,{})]});var hA={colors:{primary:"#06e",gray:"#ddd",white:"#fff",black:"#000"},zIndex:{menuButton:100,menu:90}};var mA=Object(d.f)((({history:A})=>(Object(o.useEffect)((()=>{const e=A.listen((()=>{window.scrollTo(0,0)}));return()=>{e()}}),[A]),null)));c.a.initialize("G-M9EZ1WH82Q"),Object(a.render)(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(i.a,{theme:hA,children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(mA,{}),Object(l.jsx)(lA,{})]})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c1e357fe.chunk.js.map