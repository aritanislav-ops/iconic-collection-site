import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardul nostru de proiectare",
  description:
    "Proiectăm case gândite pentru siguranță seismică, eficiență energetică, durabilitate și avantajul real al clientului.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Standardul nostru de proiectare | iCONiC collection",
    description:
      "Proiectăm case gândite pentru siguranță seismică, eficiență energetică, durabilitate și avantajul real al clientului.",
    url: "https://www.iconic-collection.ro/proces",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standardul nostru de proiectare | iCONiC collection",
    description:
      "Proiectăm case gândite pentru siguranță seismică, eficiență energetică, durabilitate și avantajul real al clientului.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ProcesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Standardul nostru de proiectare</h1>
      <p className="pageLead">
        Proiectăm case gândite pentru siguranță, durabilitate, eficiență și avantajul real al clientului,
        nu pentru compromisuri făcute doar ca să iasă mai ieftin pe termen scurt.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Siguranță seismică reală</h3>
          <p>
            Structura este gândită pentru o comportare seismică corectă, cu soluții coerente și controlate,
            astfel încât casa să ofere un nivel ridicat de siguranță și predictibilitate în exploatare.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Soluție structurală aleasă rațional</h3>
          <p>
            Nu urmărim artificii inutile și nici soluții slăbite de compromisuri.
            Alegem structura în funcție de teren, arhitectură, deschideri, utilizare și comportarea dorită în timp.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Case proiectate după standarde actuale de eficiență</h3>
          <p>
            Integram soluții compatibile cu cerințele actuale de performanță energetică și cu principiile NZEB,
            astfel încât casa să fie mai eficientă, mai confortabilă și mai bine pregătită pentru costurile reale de exploatare.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Energie gândită inteligent, nu bifată formal</h3>
          <p>
            Analizăm și soluții alternative de energie, precum sisteme eficiente de încălzire, răcire și producere a energiei,
            astfel încât alegerea lor să fie potrivită casei și modului de utilizare, nu doar o soluție de imagine.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Durabilitate și cost corect pe termen lung</h3>
          <p>
            O casă bună nu înseamnă doar cost mai mic la început.
            Înseamnă și întreținere mai predictibilă, comportare corectă în timp și evitarea unor economii false care costă mai mult ulterior.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Proiectare în interesul clientului</h3>
          <p>
            Nu proiectăm pentru a cosmetiza costul pe hârtie și nici pentru profitul rapid al unui dezvoltator.
            Proiectăm pentru ca beneficiarul să primească o casă bine gândită, sigură și corect dimensionată pentru folosire reală.
          </p>
        </div>
      </div>
    </main>
  );
}
