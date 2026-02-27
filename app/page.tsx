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
              <h1 className="heroTitle">Case proiectate corect, personalizate pe terenul tău, conform reglementărilor urbanistice.</h1>

              <p className="heroSub">{site.subheadline}</p>

              <ul className="heroChecks">
                <CheckItem>Contract + livrabile clare</CheckItem>
                <CheckItem>Deviz orientativ pe faze</CheckItem>
                <CheckItem>Asistență la autorizare</CheckItem>
              </ul>

              <div className="actions">
                <Link className="btn btnPrimary" href={site.cta.primary.href}>
                  {site.cta.primary.label}
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
              <div className="featureTitle">Proiect complet</div>
              <div className="featureText">Arhitectură, structură și instalații, coordonate și verificabile.</div>
            </div>

            <div className="featureCard">
              <div className="featureIcon" aria-hidden="true">◩</div>
              <div className="featureTitle">Adaptare la teren</div>
              <div className="featureText">Planuri personalizate după teren, cerințe și buget.</div>
            </div>

            <div className="featureCard">
              <div className="featureIcon" aria-hidden="true">⎘</div>
              <div className="featureTitle">Buget controlat</div>
              <div className="featureText">Devize orientative pe faze + cantități estimate, ajustabile în execuție.</div>
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
                    {cover ? <img className="modelCover" src={cover} alt="" loading="lazy" /> : null}
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
