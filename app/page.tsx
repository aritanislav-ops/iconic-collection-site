import Link from "next/link";
import { site } from "../content/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="heroMedia">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container">
          <div className="heroGrid">
            <div>
              <h1 className="heroTitle">{site.headline}</h1>
              <p className="heroSub">{site.subheadline}</p>

              <div className="badges">
                {site.heroBadges.map((b) => (
                  <span key={b} className="badge">
                    {b}
                  </span>
                ))}
              </div>

              <div className="actions">
                <Link className="btn btnPrimary" href={site.cta.primary.href}>
                  {site.cta.primary.label}
                </Link>
                <Link className="btn btnSecondary" href={site.cta.secondary.href}>
                  {site.cta.secondary.label}
                </Link>
              </div>
            </div>

            <aside className="sideCard" aria-label="Pachete">
              <div className="sideCardTitle">{site.pachete.title}</div>
              <div className="sideCardText">{site.pachete.items[0]}</div>
              <div className="sideCardActions">
                {site.pachete.actions.map((a) => (
                  <Link key={a.href} className="chip" href={a.href}>
                    {a.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">{site.howWeWork.title}</h2>
          <div className="grid3">
            {site.howWeWork.steps.map((s) => (
              <div key={s.title} className="card">
                <div className="cardTitle">{s.title}</div>
                <p className="cardText">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
