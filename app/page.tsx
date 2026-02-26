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
  const [lbSrc, setLbSrc] = useState<string | null>(null);

  function openLightbox(src: string) {
    setLbSrc(src);
    setLbOpen(true);
  }

  function closeLightbox() {
    setLbOpen(false);
    setLbSrc(null);
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
              <h1 className="heroTitle">Proiectare personalizată pe fiecare model de casă</h1>

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
              const cover = m.images?.[0] || null;

              return (
                <article key={m.slug} className="modelCard">
                  <div
                    className="modelImg"
                    role="button"
                    tabIndex={0}
                    aria-label={`Vezi imagine: ${m.name}`}
                    onClick={() => cover && openLightbox(cover)}
                    onKeyDown={(e) => {
                      if ((e.key === "Enter" || e.key === " ") && cover) openLightbox(cover);
                    }}
                  >
                    {cover ? <img className="modelCover" src={cover} alt="" loading="lazy" /> : null}
                  </div>

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

      <Lightbox open={lbOpen} src={lbSrc} onClose={closeLightbox} />
    </main>
  );
}
