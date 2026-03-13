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
        email: "office@aa-evoconstruct.ro",
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
        email: "office@aa-evoconstruct.ro",
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

      <Lightbox open={lbOpen} images={lbImages} startIndex={lbStart} onClose={closeGallery} />
    </main>
  );
}
