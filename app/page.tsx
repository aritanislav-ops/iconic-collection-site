import Link from "next/link";
import { site } from "../content/site";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="heroCheckItem">
      <span className="heroCheckIcon" aria-hidden="true">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function HomePage() {
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
              <h1 className="heroTitle">
                Proiectare personalizată <br /> pe fiecare model de casă
              </h1>

              <p className="heroSub">
                Arh + Structură + Instalații + autorizare. Execuție.
              </p>

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
              <div className="featureText">
                Proiectare arhitectură, structură și instalații conform normativelor în vigoare.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon" aria-hidden="true">◩</div>
              <div className="featureTitle">Adaptare la teren</div>
              <div className="featureText">
                Planuri personalizate după dimensiunea și forma terenului, dss.
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon" aria-hidden="true">⎘</div>
              <div className="featureTitle">Buget controlat + devize</div>
              <div className="featureText">
                Devize orientative pe faze și cantități estimate, ajustabile în execuție.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section modelsSection">
        <div className="container">
          <div className="modelsHeader">
            <h2 className="modelsTitle">Modele de case</h2>

            <div className="filters">
              <select className="filter" defaultValue="suprafata">
                <option value="suprafata">Suprafață</option>
                <option value="100-140">100–140 mp</option>
                <option value="140-200">140–200 mp</option>
                <option value="200+">200+ mp</option>
              </select>

              <select className="filter" defaultValue="dormitoare">
                <option value="dormitoare">Dormitoare</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>

              <select className="filter" defaultValue="stil">
                <option value="stil">Stil</option>
                <option value="minimalist">Minimalist</option>
                <option value="modern">Modern</option>
              </select>

              <select className="filter" defaultValue="buget">
                <option value="buget">Buget</option>
                <option value="controlat">Controlat</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>

          <div className="modelsGrid">
            {site.models.map((m) => (
              <article key={m.slug} className="modelCard">
                <div className="modelImg" style={{ backgroundImage: `url(/brand/${m.slug}.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="modelBody">
                  <div className="modelName">{m.name} <span className="modelArea">{m.area}</span></div>
                  <div className="modelSummary">{m.summary}</div>
                  <Link className="modelBtn" href={`/modele/${m.slug}`}>
                    Vezi detalii <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
