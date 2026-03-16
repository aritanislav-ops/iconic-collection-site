import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardul nostru",
  description:
    "Află standardul nostru de proiectare: siguranță seismică, eficiență energetică, durabilitate, materiale corect alese și proiectare în interesul real al clientului.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Standardul nostru | iCONiC collection",
    description:
      "Află standardul nostru de proiectare: siguranță seismică, eficiență energetică, durabilitate, materiale corect alese și proiectare în interesul real al clientului.",
    url: "https://www.iconic-collection.ro/proces",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standardul nostru | iCONiC collection",
    description:
      "Află standardul nostru de proiectare: siguranță seismică, eficiență energetică, durabilitate, materiale corect alese și proiectare în interesul real al clientului.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ProcesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Standardul nostru</h1>
      <p className="pageLead">
        Proiectăm case pentru siguranță, durabilitate, eficiență și avantajul real al clientului,
        nu pentru compromisuri făcute doar ca să iasă mai ieftin pe termen scurt.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Siguranță seismică tratată responsabil</h3>
          <p>
            Structura este gândită pentru o comportare corectă, cu soluții coerente și controlate,
            astfel încât casa să ofere siguranță, robustețe și predictibilitate în exploatare.
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
          <h3>3) Eficiență energetică și principii NZEB</h3>
          <p>
            Integrăm soluții compatibile cu cerințele actuale de performanță energetică și cu principiile NZEB,
            astfel încât casa să fie mai eficientă, mai confortabilă și mai bine pregătită pentru costurile reale de exploatare.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Materiale și soluții tehnice alese corect</h3>
          <p>
            Materialele și soluțiile prevăzute în proiect nu sunt alese doar după preț,
            ci după rolul lor real în construcție, durabilitate, întreținere și comportare în timp.
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
            Nu proiectăm pentru a cosmetiza costul pe hârtie și nici pentru compromisuri făcute doar în favoarea costului inițial.
            Proiectăm pentru ca beneficiarul să primească o casă bine gândită, sigură și corect dimensionată pentru folosire reală.
          </p>
        </div>
      </div>
    </main>
  );
}
