"use client";

import Link from "next/link";
import React from "react";
import { site } from "../content/site";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="heroCheckItem">
      <span className="heroCheckIcon" aria-hidden="true">✓</span>
      <span>{children}</span>
    </li>
  );
}

function IconDesign() {
  return (
    <svg viewBox="0 0 24 24" className="featureSvg" aria-hidden="true">
      <rect x="4.5" y="5" width="10.5" height="10.5" rx="1.6" />
      <path d="M8 8.5h4M8 11.5h3.2M17 7l2.5 2.5M14.8 11.7l4.7-4.7M14.1 12.4l-.6 2.7 2.7-.6" />
    </svg>
  );
}

function IconDocs() {
  return (
    <svg viewBox="0 0 24 24" className="featureSvg" aria-hidden="true">
      <path d="M8 4.75h6.6l3.15 3.15V18A1.75 1.75 0 0 1 16 19.75H8A1.75 1.75 0 0 1 6.25 18V6.5A1.75 1.75 0 0 1 8 4.75Z" />
      <path d="M14.5 4.9V8h3.1" />
      <path d="M9.2 13l1.8 1.8 3.8-3.8" />
    </svg>
  );
}

function IconExecution() {
  return (
    <svg viewBox="0 0 24 24" className="featureSvg" aria-hidden="true">
      <path d="M7 12.25a5 5 0 0 1 10 0" />
      <path d="M5.5 12.25h13" />
      <path d="M7 12.25V15a1.25 1.25 0 0 1-1.25 1.25h-.5" />
      <path d="M17 12.25V15a1.25 1.25 0 0 0 1.25 1.25h.5" />
      <path d="M12 7.25v2.25" />
      <path d="M9 17.75h6" />
    </svg>
  );
}

function FeatureIcon({ type }: { type: "design" | "docs" | "execution" }) {
  return (
    <div className="featureIcon" aria-hidden="true">
      {type === "design" && <IconDesign />}
      {type === "docs" && <IconDocs />}
      {type === "execution" && <IconExecution />}
    </div>
  );
}

export default function HomePage() {

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.iconic-collection.ro/#organization",
        name: "iCONiC collection",
        url: "https://www.iconic-collection.ro",
        logo: "https://www.iconic-collection.ro/brand/logo-dark.png",
        email: "contact@iconic-collection.ro",
        parentOrganization: {
          "@type": "Organization",
          name: "A&A Evoconstruct SRL",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.iconic-collection.ro/#localbusiness",
        name: "iCONiC collection",
        url: "https://www.iconic-collection.ro",
        image: "https://www.iconic-collection.ro/brand/logo-dark.png",
        email: "contact@iconic-collection.ro",
        address: {
          "@type": "PostalAddress",
          addressCountry: "RO",
          addressLocality: "București",
          addressRegion: "Sector 3",
          streetAddress: "Str. Agatha Bârsescu Nr. 15B, Etaj 01, Biroul 7",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "A&A Evoconstruct SRL",
        },
        areaServed: "România",
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Proiectare completă pentru case",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Documentații pentru autorizare",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Execuție și coordonare",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.iconic-collection.ro/#website",
        url: "https://www.iconic-collection.ro",
        name: "iCONiC collection",
        inLanguage: "ro-RO",
        publisher: {
          "@id": "https://www.iconic-collection.ro/#organization",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pot veni doar cu terenul, fără să știu exact ce trebuie făcut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Mulți clienți pornesc doar de la teren și de la ideea generală a casei dorite. Îți explicăm clar pașii necesari și te ajutăm să înțelegi ce urmează.",
        },
      },
      {
        "@type": "Question",
        name: "Este necesar certificatul de urbanism înainte de autorizare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Certificatul de urbanism este punctul de plecare pentru etapa de autorizare. El arată ce condiții urbanistice trebuie respectate și ce avize sau acorduri sunt necesare pentru DTAC.",
        },
      },
      {
        "@type": "Question",
        name: "Vă ocupați și de documentațiile pentru autorizare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Te ajutăm cu pașii necesari pentru certificatul de urbanism, cu documentațiile pentru autorizare și cu coordonarea avizelor cerute, în funcție de proiect și amplasament.",
        },
      },
      {
        "@type": "Question",
        name: "Respectați normele de proiectare în vigoare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Proiectarea se face cu respectarea cerințelor legale și tehnice aplicabile, inclusiv a condițiilor urbanistice, structurale, de siguranță la incendiu și de eficiență energetică.",
        },
      },
      {
        "@type": "Question",
        name: "Casa este proiectată să reziste la cutremur, vânt și foc?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Proiectul este gândit astfel încât structura și soluțiile tehnice să respecte cerințele aplicabile privind siguranța structurală și securitatea la incendiu, în funcție de categoria construcției și de amplasament.",
        },
      },
      {
        "@type": "Question",
        name: "Ce specialități sunt incluse într-un proiect complet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Într-un proiect complet sunt corelate arhitectura, structura și instalațiile, astfel încât soluția finală să fie coerentă și pregătită corect pentru execuție.",
        },
      },
      {
        "@type": "Question",
        name: "Se poate adapta un model de casă la terenul meu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Modelele prezentate sunt puncte de plecare și pot fi adaptate în funcție de teren, cerințe, reglementări urbanistice și buget.",
        },
      },
      {
        "@type": "Question",
        name: "Materialele prevăzute în proiect sunt alese doar după preț?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nu. Urmărim un echilibru între cost, durabilitate, performanță și întreținere în timp, astfel încât soluția aleasă să fie corectă pentru beneficiar, nu doar ieftină la început.",
        },
      },
      {
        "@type": "Question",
        name: "Luați în calcul durabilitatea construcției în timp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Prin proiectare și prin alegerea soluțiilor tehnice urmărim nu doar rezistența structurii, ci și comportarea corectă în exploatare, inclusiv controlul umidității, protecția elementelor sensibile și detalii constructive corecte.",
        },
      },
      {
        "@type": "Question",
        name: "Proiectați și în logica actuală de eficiență energetică și NZEB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Integrăm soluții compatibile cu cerințele actuale de performanță energetică, astfel încât casa să fie mai eficientă, mai confortabilă și mai bine pregătită pentru costurile reale de exploatare.",
        },
      },
      {
        "@type": "Question",
        name: "Vă ocupați doar de proiectare sau și de restul etapelor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Putem lucra flexibil. În funcție de nevoie, putem asigura proiectarea, documentațiile pentru autorizare, coordonarea specialităților și, la nevoie, sprijin până în etapa de execuție.",
        },
      },
      {
        "@type": "Question",
        name: "Pot discuta cu voi chiar dacă sunt la început și nu știu exact ce vreau?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Nu trebuie să ai toate răspunsurile de la început. Este suficient să ne spui ce teren ai și ce obiectiv urmărești, iar noi te ajutăm să clarifici pașii potriviți.",
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero">
        <div className="heroMedia" aria-hidden="true">
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.play().catch(() => {});
            }}
          >
            <source src="/brand/HERO 5.mp4" type="video/mp4" />
          </video>
          <div className="heroOverlay" />
        </div>

        <div className="container">
          <div className="heroInner">
            <div className="heroText">
              <h1 className="heroTitle">
                Case proiectate și executate corect, personalizate pentru terenul tău, conform reglementărilor urbanistice
              </h1>

              <p className="heroSub">
                Tu vii cu terenul și obiectivul, iar noi ne putem ocupa de ce ai nevoie:
                concept, studiu geotehnic, proiect complet (arhitectură, structură și instalații),
                documentații pentru autorizare, urmărire de șantier, dirigenție și execuție.
              </p>

              <ul className="heroChecks">
                <CheckItem>Proiectare completă pentru casă</CheckItem>
                <CheckItem>Soluție personalizată în funcție de teren, cerințe și buget</CheckItem>
                <CheckItem>Documentații și pași pentru autorizare</CheckItem>
                <CheckItem>Execuție și coordonare până la capăt</CheckItem>
              </ul>

              <div className="actions">
                <Link className="btn btnPrimary" href={site.cta.primary.href}>
                  Contactează-ne
                </Link>
                <Link className="btn btnSecondary" href={site.cta.secondary.href}>
                  {site.cta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container heroUnder">
          <div className="featureRow">
            <div className="featureCard">
              <FeatureIcon type="design" />
              <div className="featureTitle">Proiectare completă</div>
              <div className="featureText">
                Arhitectură, structură și instalații, coordonate într-un proiect coerent și adaptat casei tale.
              </div>
            </div>

            <div className="featureCard">
              <FeatureIcon type="docs" />
              <div className="featureTitle">Autorizații și documentații</div>
              <div className="featureText">
                Te ajutăm cu documentațiile și pașii necesari pentru autorizarea corectă a proiectului.
              </div>
            </div>

            <div className="featureCard">
              <FeatureIcon type="execution" />
              <div className="featureTitle">Execuție și coordonare</div>
              <div className="featureText">
                Putem merge mai departe decât proiectarea, cu coordonare și implicare până în etapa de execuție.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section modelsSection">
        <div className="container">
          <div className="modelsHeader">
            <h2 className="modelsTitle">Modele de case</h2>
          </div>

          <div className="modelsGrid">
            {site.models.map((m) => {
              const images = (m.images || []).filter(Boolean);
              const cover = images[0] || "";

              return (
                <article key={m.slug} className="modelCard">
                  <Link
                    className="modelImgBtn"
                    href={`/modele/${m.slug}`}
                    aria-label={`Vezi galeria modelului: ${m.name}`}
                  >
                    {cover ? <img className="modelCover" src={cover} alt={m.name} loading="lazy" /> : null}
                  </Link>

                  <div className="modelBody">
                    <div className="modelName">{m.name}</div>
                    <div className="modelSummary">{m.summary}</div>
                    <Link className="modelBtn" href={`/modele/${m.slug}`}>
                      Vezi detalii <span aria-hidden="true">›</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section qualitySection">
        <div className="container">
          <h2 className="sectionTitle">De ce suntem altfel</h2>
          <p className="pageLead qualityLead">
            Nu urmărim compromisuri făcute doar pentru costul inițial. Proiectăm case pentru
            siguranță, eficiență, durabilitate și avantajul real al clientului.
          </p>

          <div className="grid3 qualityGrid">
            <div className="card qualityCard">
              <h3 className="cardTitle">
                Siguranță seismică tratată responsabil, prin proiectare pentru seismul corespunzător perioadei medii de recurență de 475 de ani și prin dimensionare elastică, astfel încât degradările structurale seismice să tindă către ZERO.
              </h3>
              <p className="cardText">
                Structura este gândită pentru o comportare corectă, cu soluții coerente și controlate, nu doar pentru a atinge nivelul minim acceptat.
                În proiectarea seismică uzuală aplicată astăzi, casa este dimensionată la nivelul seismic corespunzător unei perioade medii de recurență de 225 de ani.
                La cutremurele mai frecvente se urmărește limitarea degradărilor, însă la seismul mare de proiectare prioritatea este protejarea vieții, nu eliminarea avariilor.
                Cu alte cuvinte, după un cutremur sever, casa poate rămâne în picioare, dar proprietarul poate rămâne cu reparații importante, inclusiv imposibilitatea utilizării imobilului.
                Noi alegem un standard superior și, datorită regimului mic de înălțime și unei conformări structurale corecte, dimensionăm casa cu răspuns preponderent elastic inclusiv pentru cutremurul de 475 de ani.
                Rezultatul este o structură cu degradări minime și cu costuri post-seism mult reduse, fără creșteri importante de cost pentru o locuință cu regim mic de înălțime, bine gândită și eficient concepută.
              </p>
            </div>

            <div className="card qualityCard">
              <h3 className="cardTitle">
                Eficiență energetică și principii NZEB (Nearly Zero-Energy Building) reprezintă clădiri cu o performanță energetică extrem de ridicată care necesită un consum de energie aproape egal cu ZERO.
              </h3>
              <p className="cardText">
                Integrăm soluții compatibile cu cerințele actuale de performanță energetică,
                astfel încât casa să fie mai confortabilă și mai bine pregătită pentru costurile reale de exploatare.
                O casă bine proiectată nu înseamnă doar rezistență, ci și un consum redus de energie pe toată durata de exploatare.
                De aceea, încă din faza de proiectare, urmărim o anvelopă eficientă, eliminarea punților termice, o orientare corectă față de punctele cardinale și soluții compatibile cu standardele actuale de eficiență energetică.
                Rezultatul este o locuință mai confortabilă în orice anotimp, cu pierderi reduse de energie, costuri mai mici de încălzire și răcire și o valoare mai bună a investiției în timp.
                Nu tratăm eficiența energetică ca pe un adaos de final, ci ca pe o parte integrată din proiectul casei.
              </p>
            </div>

            <div className="card qualityCard">
              <h3 className="cardTitle">Proiectare în interesul clientului</h3>
              <p className="cardText">
                Arhitectura gândită pentru a crea stilul de viață.
                Proiectăm locuințe personalizate, cu identitate, excluzând soluții de serie.
                Design adaptat stilului tău de viață și particularităților terenului.
                Echilibru estetic prin lumină naturală, proporții armonioase și fațade coerente.
                Experiența locuirii este mai mult decât o clădire durabilă — garantăm confortul și îți oferim în fiecare zi sentimentul de vacanță, acasă.
                Cum obținem acest lucru? Printr-o înțelegere profundă a rutinei tale zilnice și a dinamicii familiei.
                Nu desenăm doar planuri, ci regizăm modul în care lumina pătrunde dimineața în dormitor, felul fluid în care zona de zi se conectează cu terasa și natura și modul în care spațiile de depozitare sunt integrate invizibil pentru a menține ordinea vizuală.
                Fiecare decizie arhitecturală este luată punând omul în centru.
                Evităm spațiile moarte și optimizăm circulațiile interioare, astfel încât fiecare metru pătrat să aibă un scop precis și să contribuie la starea ta de bine.
                O casă proiectată în interesul tău este o locuință care lucrează pentru tine: îți protejează intimitatea când ai nevoie de liniște, dar devine spațiul perfect pentru socializare atunci când primești oaspeți.
                Fără compromisuri, doar un design care îți îmbunătățește constant calitatea vieții.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section servicesSection">
        
        <div className="container">
          <h2 className="sectionTitle">Serviciile noastre</h2>
          <p className="pageLead servicesLead">
            Putem prelua doar etapa de proiectare sau întregul parcurs al proiectului,
            în funcție de ce ai nevoie.
          </p>

          <div className="grid3 servicesGrid">
            <div className="card serviceCard">
              <h3 className="cardTitle">Proiectare completă</h3>
              <p className="cardText">
                Arhitectură, structură și instalații, coordonate într-un proiect coerent,
                adaptat terenului, cerințelor și bugetului tău.
              </p>
            </div>

            <div className="card serviceCard">
              <h3 className="cardTitle">Documentații pentru autorizare</h3>
              <p className="cardText">
                Pregătim documentațiile necesare pentru autorizare și clarificăm pașii
                care trebuie urmați pentru proiectul tău.
              </p>
            </div>

            <div className="card serviceCard">
              <h3 className="cardTitle">Coordonare și execuție</h3>
              <p className="cardText">
                În funcție de nevoie, putem merge mai departe decât proiectarea,
                cu coordonare, urmărire pe etape și sprijin până la execuție.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container">
          <h2 className="sectionTitle">Întrebări frecvente</h2>

          <div className="list">
            <div className="listItem">
              <h3>Sunt case modulare? Sunt case pe structură metalică ușoară cu profile laminate la rece?</h3>
              <p>
                Nu sunt case modulare. Sunt case solide, proiectate ca structuri de rezistență reale, alese împreună 
                cu clientul. Soluția standard poate fi realizată din beton armat, cu cadre, lamele/stâlpi și grinzi din beton armat,
                iar pentru o execuție mai rapidă și un control superior al calității poate fi aleasă și varianta pe structură metalică clasică din
                oțel S355(OL52), tratat corespunzător clasei de expunere. Nu folosim profile metalice laminate la rece și nu promovăm soluții ușoare de compromis.
                Pentru variantele din beton armat, utilizăm beton C30/37(B500) și oțel-beton S500 clasa de ductilitate "C".
              </p>
            </div>

            <div className="listItem">
              <h3>Se poate face un proiect de la zero, pornind de la ideea mea?</h3>
              <p>
                Da. Mulți clienți vin cu o ideea generală a casei dorite.
                Ne bucurăm mereu când clienții vin cu propriile schițe sau concepte. Dacă modelele noastre nu sunt exact ceea ce cauți, echipa noastră va lucra alături de tine pentru a crea de la zero proiectul casei tale mult visate.
              </p>
            </div>

            <div className="listItem">
              <h3>Este necesar certificatul de urbanism înainte de autorizare?</h3>
              <p>
                Da. Certificatul de urbanism este punctul de plecare pentru etapa de autorizare.
                El arată ce condiții urbanistice trebuie respectate și ce avize sau acorduri sunt necesare pentru DTAC.
              </p>
            </div>

            <div className="listItem">
              <h3>Vă ocupați și de documentațiile pentru autorizare?</h3>
              <p>
                Da. Te ajutăm cu pașii necesari pentru certificatul de urbanism, cu documentațiile pentru autorizare
                și cu coordonarea avizelor cerute, în funcție de proiect și amplasament.
              </p>
            </div>

            <div className="listItem">
              <h3>Respectați normele de proiectare în vigoare?</h3>
              <p>
                Da. Proiectarea se face cu respectarea cerințelor legale și tehnice aplicabile,
                inclusiv a condițiilor urbanistice, structurale, de siguranță la incendiu și de eficiență energetică.
              </p>
            </div>

            <div className="listItem">
              <h3>Casa este proiectată să reziste la cutremur, vânt și foc?</h3>
              <p>
                Proiectul este gândit astfel încât structura și soluțiile tehnice să respecte cerințele aplicabile
                privind siguranța structurală și securitatea la incendiu, în funcție de categoria construcției și de amplasament.
              </p>
            </div>

            <div className="listItem">
              <h3>Poate casa să fie pregătită pentru smart home?</h3>
              <p>
                Da. Putem gândi proiectul astfel încât locuința să poată integra ulterior sau din start
                soluții de automatizare, senzori, control al iluminatului, climatizării, securității și monitorizare energetică.
              </p>
            </div>

            <div className="listItem">
              <h3>Poate fi pregătită casa pentru tehnologii viitoare?</h3>
              <p>
                Da. Urmărim trasee tehnice, spații și soluții care să permită adaptări ulterioare,
                astfel încât locuința să nu devină depășită odată cu schimbarea tehnologiei.
              </p>
            </div>

            <div className="listItem">
              <h3>Luați în calcul și confortul, calitatea aerului și exploatarea pe termen lung?</h3>
              <p>
                Da. O casă bună nu înseamnă doar structură și finisaje, ci și confort zilnic,
                lumină naturală, ventilare corectă, eficiență energetică și întreținere predictibilă în timp.
              </p>
            </div>

            <div className="listItem">
              <h3>Ce specialități sunt incluse într-un proiect complet?</h3>
              <p>
                Într-un proiect complet sunt corelate arhitectura, structura și instalațiile,
                astfel încât soluția finală să fie coerentă și pregătită corect pentru execuție.
              </p>
            </div>

            <div className="listItem">
              <h3>Se poate adapta un model de casă la terenul meu?</h3>
              <p>
                Da. Modelele prezentate sunt puncte de plecare și pot fi adaptate în funcție de teren,
                cerințe, reglementări urbanistice și buget.
              </p>
            </div>

            <div className="listItem">
              <h3>Materialele prevăzute în proiect sunt alese doar după preț?</h3>
              <p>
                Nu. Urmărim un echilibru între cost, durabilitate, performanță și întreținere în timp,
                astfel încât soluția aleasă să fie corectă pentru beneficiar, nu doar ieftină la început.
              </p>
            </div>

            <div className="listItem">
              <h3>Luați în calcul durabilitatea construcției în timp?</h3>
              <p>
                Da. Prin proiectare și prin alegerea soluțiilor tehnice urmărim nu doar rezistența structurii,
                ci și comportarea corectă în exploatare, inclusiv controlul umidității, protecția elementelor sensibile
                și detalii constructive corecte.
              </p>
            </div>

            <div className="listItem">
              <h3>Proiectați și în logica actuală de eficiență energetică și NZEB?</h3>
              <p>
                Da. Integrăm soluții compatibile cu cerințele actuale de performanță energetică,
                astfel încât casa să fie mai eficientă, mai confortabilă și mai bine pregătită pentru costurile reale de exploatare.
              </p>
            </div>

            <div className="listItem">
              <h3>Vă ocupați doar de proiectare sau și de restul etapelor?</h3>
              <p>
                Putem lucra flexibil. În funcție de nevoie, putem asigura proiectarea, documentațiile pentru autorizare,
                coordonarea specialităților și, la nevoie, sprijin până în etapa de execuție.
              </p>
            </div>

            <div className="listItem">
              <h3>Pot discuta cu voi chiar dacă sunt la început și nu știu exact ce vreau?</h3>
              <p>
                Da. Nu trebuie să ai toate răspunsurile de la început. Este suficient să ne spui ce teren ai
                și ce obiectiv urmărești, iar noi te ajutăm să clarifici pașii potriviți.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
