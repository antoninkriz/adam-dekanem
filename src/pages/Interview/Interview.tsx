import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import Slide, { SlideTitle } from '../../components/Slide/Slide';
import AdamFitPng from './adam_fit.jpg';
import {
  Article,
  ArticleFigcaption,
  ArticleFigure,
  ArticleImage,
  ArticleInfo,
  ArticleInfoTitle,
  ArticleItalic,
  ArticleLine,
  ArticleLink,
  ArticleList,
  ArticleListItem,
  ArticleParagraph,
  ArticleStrong,
  ArticleTitle,
} from '../../components/Article/Article';

const Interview = (): JSX.Element => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Slide>
      <Helmet title="Prvák děkanem? - Rozhovor | Adam Děkanem" />
      <SlideTitle>Rozhovor</SlideTitle>
      <Article>
        <ArticleTitle>Prvák děkanem?</ArticleTitle>
        <ArticleParagraph>
          <ArticleItalic>
            Tento rok naši fakultu čeká důležité rozhodnutí – volba děkana. V
            minulých letech byl celkem úzký výběr, letos ale máme štěstí. V
            prvním ročníku bakalářského studia se objevil člověk připravený
            kandidovat vždy a všude. Jeho jméno je Adam Procháska a k datu
            vydání se jedná o žhavého favorita.
          </ArticleItalic>
        </ArticleParagraph>

        <ArticleLine />

        <ArticleInfo>
          <ArticleInfoTitle>Víte že?</ArticleInfoTitle>
          <ArticleParagraph>
            Na děkana může kandidovat skoro každý?
          </ArticleParagraph>
        </ArticleInfo>

        <ArticleParagraph>
          <ArticleStrong>
            Začneme otázkami na témata, která v průzkumu na naprosto
            nereprezentativním vzorku lidí vyšla jako nejpalčivější: Jak se
            stavíte k povinnosti humanitních předmětů? Jakou dávají studentům
            hodnotu?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          Již nyní jsem se zapojil do iniciativy, která by studentům ukázala ve
          spolupráci s Univerzitou Pardubice předmět Šamanismus a kvantová
          fyzika. Myslím si, že humanitní předměty jsou extrémně důležité a je
          dobře, že se u nás na fakultě nabízejí. Rozšířil bych nabídku
          humanitních předmětů spoluprací s jinými univerzitami.
        </ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Jste pro korektní zavedení číslování pater?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>Ano. Indexovat od nuly je základ.</ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Budete i nadále tolerovat fakultu architektury v naší budově?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          Myslím si, že je nasnadě udělat bitvu o Barák v řecko-římském stylu.
          Mohou se účastnit buď všichni studenti, nebo zorganizujeme děkanský
          duel v bahně.
        </ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Jak se stavíte k možnosti přesunu z teamsů na Discord, o kterém
            víme, že funguje?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>Ano.</ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Nyní k Vaší kompetenci zastávat na fakultě tak zásadní roli: Přijde
            Vám, že máte pro pozici děkana dostatečný nadhled?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          Samozřejmě. Vím, že mám velmi dobrý nadhled, vždy jsem vyčníval z
          davu. Největší překážkou budou zárubně dveří a nízko visící světla.
        </ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Jste si jistý, že budete mít čas dělat děkana, když budete dělat
            ProgTest?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          Ano. Aktivity, které se vymezují tím, že na ně nemáš čas, protože
          děláš ProgTest, jsou všechny včetně dělání ProgTestu. A vzhledem k
          tomu, že množina aktivit obsahuje všechny aktivity, je vymezení
          bezpředmětné.
        </ArticleParagraph>

        <ArticleFigure>
          <ArticleImage src={AdamFitPng} alt="Adam před budovou FIT ČVUT" />
          <ArticleFigcaption>
            Zdroj:{' '}
            <ArticleLink href="https://www.instagram.com/averner.cz/">
              Adam Verner
            </ArticleLink>
          </ArticleFigcaption>
        </ArticleFigure>

        <ArticleParagraph>
          <ArticleStrong>
            Myslíte si, že Vaše případné působení v dané funkci fakultě polepší?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          Situace na fakultě se buď zlepší, nebo zůstane stejná, nebo se zhorší.
          Jiné vstupy nejsou ošetřeny.
        </ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Máte v podlaze místo na krabice od vína, popř. co tam máte, že místo
            nemáte?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          Nemohu ani potvrdit, ani vyvrátit, že věc, kterou by dotazovaný
          identifikoval jako krabici od vína mohla ležet na místě nepodobném
          mému opakostropu.
        </ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Při případném neúspěchu, budete se snažit stát se ministrem
            zdravotnictví a pokud ano, kde se vidíte za měsíc?
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          Pokud se kandidatura nevydaří, opravdu se plánuji ucházet o místo
          ministra zdravotnictví (požadavky jsou přibližně stejné jako na
          děkana). Je pochopitelné, že ve funkci vydržím nanejvýš týden, nicméně
          pozice ministra je dobrým odrazovým můstkem pro kandidaturu na vyšší
          pozici, popř. bych mohl během výjezdu na Erasmus zastávat funkci
          velvyslance v dané zemi.
        </ArticleParagraph>

        <ArticleParagraph>
          <ArticleStrong>
            Na závěr tu máme jednu otázku z publika: Dokažte Frobeniovu větu za
            6 bodů.
          </ArticleStrong>
        </ArticleParagraph>
        <ArticleParagraph>
          <ArticleLink href="https://kam.fit.cvut.cz/deploy/bi-lin//lin-text.pdf">
            Důkaz
          </ArticleLink>{' '}
          si laskavý čtenář provede sám.
        </ArticleParagraph>

        <ArticleInfo>
          <ArticleInfoTitle>Jak se volí děkan?</ArticleInfoTitle>
          <ArticleParagraph>
            <ArticleItalic>
              Na všetečné otázky odpovídal předseda volební komise Ondřej Guth.
            </ArticleItalic>
          </ArticleParagraph>

          <ArticleParagraph>
            <ArticleStrong>Kdo všechno volí děkana?</ArticleStrong>
          </ArticleParagraph>
          <ArticleParagraph>
            Volí všichni členové akademického senátu fakulty. Technicky nevolíme
            děkana, ale kandidáta na děkana. Na základě naší volby pak děkana
            jmenuje rektor.
          </ArticleParagraph>

          <ArticleParagraph>
            <ArticleStrong>Co musí splnit kanditát?</ArticleStrong>
          </ArticleParagraph>
          <ArticleParagraph>
            Na kandidáta nejsou kladeny žádné požadavky/omezení kromě toho, že
            funkci děkana může tatáž osoba vykonávat na téže fakultě nejvýše dvě
            po sobě bezprostředně jdoucí funkční období.
          </ArticleParagraph>
          <ArticleParagraph>
            Kandidátka musí obsahovat:
            <ArticleList>
              <ArticleListItem>
                vyplněný{' '}
                <ArticleLink href="https://fit.cvut.cz/fakulta/informacni-deska/volba-dekana/navrh-kandidata.pdf">
                  návrh kandidáta včetně příloh
                </ArticleLink>
              </ArticleListItem>
              <ArticleListItem>
                vyplněné{' '}
                <ArticleLink href="https://fit.cvut.cz/fakulta/informacni-deska/volba-dekana/cestne-prohlaseni.pdf">
                  čestné prohlášení
                </ArticleLink>
              </ArticleListItem>
              <ArticleListItem>
                <ArticleLink href="https://fit.cvut.cz/fakulta/informacni-deska/volba-dekana/vyjadreni-souhlasu.pdf">
                  souhlas s kandidaturou
                </ArticleLink>{' '}
                – pro případ, že návrh kandidáta podá někdo jiný než sám
                kandidát
              </ArticleListItem>
            </ArticleList>
          </ArticleParagraph>

          <ArticleParagraph>
            <ArticleStrong>
              Jak často probíhá volba děkana? Kdy proběhne volba a kdy případná
              výměna děkana?
            </ArticleStrong>
          </ArticleParagraph>
          <ArticleParagraph>
            V případě, že děkan není odvolán, je volen na čtyřleté funkční
            období. Samotná volba proběhne 25. 6, výměna nejspíš 1. 10. 2021.
          </ArticleParagraph>

          <ArticleParagraph>
            <ArticleStrong>Co se stane když nikdo nekandiduje?</ArticleStrong>
          </ArticleParagraph>
          <ArticleParagraph>
            Nejdříve by se celá volba opakovala. Pokud by se ani do tohoto
            opakovaného procesu vůbec nikdo nepřihlásil ani do konce funkčního
            období současného děkana, pravděpodobně by pan rektor někoho pověřil
            dočasně řízením fakulty, dokud by se nějaký řádně přihlášený (a
            zvolený) děkan nenašel.
          </ArticleParagraph>
        </ArticleInfo>
      </Article>
    </Slide>
  );
};

export default Interview;
