"use client";

import Link from "next/link";
import React, { useState } from "react";
import { site } from "../content/site";
import Lightbox from "./ui/Lightbox";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="heroCheckItem">
      <span className="heroCheckIcon" aria-hidden="true">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function HomePage() {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbImages, setLbImages] = useState<string[]>([]);
  const [lbStart, setLbStart] = useState(0);

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
              name: "Documentații și autorizare",
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
      <section className="section servicesSection">
        <div className="container">
          <h2 className="sectionTitle">Serviciile noastre</h2>
          <p className="pageLead servicesLead">
            Putem prelua doar etapa de proiectare sau întregul parcurs al proiectului,
            în funcție de ce ai nevoie și de etapa în care te afli.
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
        name: "Vă ocupați doar de proiectare sau și de restul etapelor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Putem lucra flexibil. În funcție de nevoie, putem asigura proiectarea, documentațiile pentru autorizare, coordonarea specialităților și, la nevoie, sprijin până în etapa de execuție.",
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
        name: "Vă ocupați și de documentațiile pentru autorizare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Pregătim documentațiile necesare pentru autorizare, în funcție de cerințele aplicabile și de etapele necesare proiectului tău.",
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
        name: "Pot discuta cu voi chiar dacă sunt la început și nu știu exact ce vreau?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da. Nu trebuie să ai toate răspunsurile de la început. Este suficient să ne spui ce teren ai și ce obiectiv urmărești, iar noi te ajutăm să clarifici pașii potriviți.",
        },
      },
    ],
  };

  function openGallery(images: string[], startIndex = 0) {
    setLbImages(images || []);
    setLbStart(startIndex);
    setLbOpen(true);
  }

  function closeGallery() {
    setLbOpen(false);
    setLbImages([]);
    setLbStart(0);
  }

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
          <video className="heroVideo" autoPlay muted loop playsInline preload="metadata">
            <source src="/brand/hero.mp4" type="video/mp4" />
          </video>
          <div className="heroOverlay" />
        </div>

        <div className="container">
          <div className="heroInner">
            <div className="heroText">
              <h1 className="heroTitle">
                Case proiectate corect, personalizate pe terenul tău, conform reglementărilor urbanistice.
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
              <div className="featureIcon" aria-hidden="true">⌁</div>
              <div className="featureTitle">Proiectare completă</div>
              <div className="featureText">
                Arhitectură, structură și instalații, coordonate într-un proiect coerent și adaptat casei tale.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon" aria-hidden="true">◩</div>
              <div className="featureTitle">Autorizații și documentații</div>
              <div className="featureText">
                Te ajutăm cu documentațiile și pașii necesari pentru autorizarea corectă a proiectului.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon" aria-hidden="true">⎘</div>
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
                  <button
                    type="button"
                    className="modelImgBtn"
                    onClick={() => images.length && openGallery(images, 0)}
                    aria-label={`Deschide galeria: ${m.name}`}
                  >
                    {cover ? <img className="modelCover" src={cover} alt={m.name} loading="lazy" /> : null}
                  </button>

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
          <h2 className="sectionTitle">De ce proiectăm altfel</h2>
          <p className="pageLead qualityLead">
            Nu urmărim compromisuri făcute doar pentru costul inițial. Proiectăm case pentru
            siguranță, eficiență, durabilitate și avantajul real al clientului.
          </p>

          <div className="grid3 qualityGrid">
            <div className="card qualityCard">
              <h3 className="cardTitle">Siguranță seismică tratată responsabil</h3>
              <p className="cardText">
                Structura este gândită pentru o comportare corectă, cu soluții coerente și controlate,
                nu doar pentru a bifa minimul necesar.
              </p>
            </div>

            <div className="card qualityCard">
              <h3 className="cardTitle">Eficiență energetică și principii NZEB</h3>
              <p className="cardText">
                Integrăm soluții compatibile cu cerințele actuale de performanță energetică,
                astfel încât casa să fie mai confortabilă și mai bine pregătită pentru costurile reale de exploatare.
              </p>
            </div>

            <div className="card qualityCard">
              <h3 className="cardTitle">Proiectare în interesul clientului</h3>
              <p className="cardText">
                Urmărim o casă bine gândită, durabilă și corect dimensionată pentru folosire reală,
                nu artificii făcute doar pentru economie aparentă pe termen scurt.
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
              <h3>Pot veni doar cu terenul, fără să știu exact ce trebuie făcut?</h3>
              <p>
                Da. Mulți clienți pornesc doar de la teren și de la ideea generală a casei dorite.
                Îți explicăm clar pașii necesari și te ajutăm să înțelegi ce urmează.
              </p>
            </div>

            <div className="listItem">
              <h3>Vă ocupați doar de proiectare sau și de restul etapelor?</h3>
              <p>
                Putem lucra flexibil. În funcție de nevoie, putem asigura proiectarea, documentațiile
                pentru autorizare, coordonarea specialităților și, la nevoie, sprijin până în etapa de execuție.
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
              <h3>Vă ocupați și de documentațiile pentru autorizare?</h3>
              <p>
                Da. Pregătim documentațiile necesare pentru autorizare, în funcție de cerințele aplicabile
                și de etapele necesare proiectului tău.
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
              <h3>Pot discuta cu voi chiar dacă sunt la început și nu știu exact ce vreau?</h3>
              <p>
                Da. Nu trebuie să ai toate răspunsurile de la început. Este suficient să ne spui ce teren ai
                și ce obiectiv urmărești, iar noi te ajutăm să clarifici pașii potriviți.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Lightbox open={lbOpen} images={lbImages} startIndex={lbStart} onClose={closeGallery} />
    </main>
  );
}
