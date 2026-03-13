import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description:
    "Informații despre cookies și consimțământ pe site-ul iCONiC collection.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Politica de cookies | iCONiC collection",
    description:
      "Informații despre cookies și consimțământ pe site-ul iCONiC collection.",
    url: "https://www.iconic-collection.ro/cookies",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politica de cookies | iCONiC collection",
    description:
      "Informații despre cookies și consimțământ pe site-ul iCONiC collection.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function CookiesPage() {
  return (
    <main className="container legalPage">
      <h1 className="pageTitle">Politica de cookies</h1>
      <p className="pageLead">
        Această pagină explică modul în care site-ul iCONiC collection utilizează cookies și
        tehnologii similare.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Ce sunt cookies</h3>
          <p>
            Cookies sunt fișiere mici stocate pe dispozitivul tău atunci când vizitezi un site.
            Acestea pot fi folosite pentru funcționarea tehnică a site-ului, memorarea preferințelor
            și analiza traficului.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Ce tipuri de cookies putem folosi</h3>
          <p>
            Putem utiliza cookies strict necesare pentru funcționarea site-ului și, dacă îți exprimi
            acordul, cookies de analiză pentru măsurarea traficului și îmbunătățirea experienței
            de utilizare.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Cookies strict necesare</h3>
          <p>
            Aceste cookies sunt necesare pentru funcționarea corectă a site-ului și nu pot fi
            dezactivate prin simpla navigare, în măsura în care sunt indispensabile pentru funcțiile
            de bază ale site-ului.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Cookies de analiză</h3>
          <p>
            Site-ul poate utiliza Google Analytics pentru a colecta informații statistice despre
            modul de utilizare a site-ului, cum ar fi paginile vizitate, durata sesiunii și sursele
            de trafic. Aceste cookies sau tehnologii similare trebuie activate doar după exprimarea
            consimțământului, atunci când acest consimțământ este necesar.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Consimțământul tău</h3>
          <p>
            La prima vizită, site-ul îți poate afișa un banner prin care poți accepta sau refuza
            cookies neesențiale. Îți poți modifica opțiunile ulterior, în funcție de mecanismul
            pus la dispoziție pe site.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Gestionarea cookies</h3>
          <p>
            Poți controla sau șterge cookies și din setările browserului. Blocarea anumitor cookies
            poate afecta funcționarea unor secțiuni sau funcționalități ale site-ului.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Furnizori terți</h3>
          <p>
            Unele cookies sau tehnologii similare pot proveni de la furnizori terți utilizați pentru
            analiză sau funcționare tehnică. În măsura în care acești furnizori prelucrează date cu
            caracter personal, informații suplimentare se regăsesc și în Politica de confidențialitate.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Contact</h3>
          <p>
            Pentru întrebări privind utilizarea cookies, ne poți contacta la
            contact@iconic-collection.ro.
          </p>
        </div>
      </div>
    </main>
  );
}
