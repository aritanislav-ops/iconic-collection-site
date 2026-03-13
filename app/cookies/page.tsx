import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description:
    "Informații despre cookies, statistici de utilizare și consimțământ pe site-ul iCONiC collection.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Politica de cookies | iCONiC collection",
    description:
      "Informații despre cookies, statistici de utilizare și consimțământ pe site-ul iCONiC collection.",
    url: "https://www.iconic-collection.ro/cookies",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politica de cookies | iCONiC collection",
    description:
      "Informații despre cookies, statistici de utilizare și consimțământ pe site-ul iCONiC collection.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function CookiesPage() {
  return (
    <main className="container legalPage">
      <h1 className="pageTitle">Politica de cookies</h1>
      <p className="pageLead">
        Această pagină explică modul în care site-ul iCONiC collection utilizează cookies și
        tehnologii similare, precum și modul în care poți controla opțiunile tale de confidențialitate.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Ce sunt cookies</h3>
          <p>
            Cookies sunt fișiere mici stocate pe dispozitivul tău atunci când vizitezi un site.
            Acestea pot fi folosite pentru funcționarea tehnică a site-ului, memorarea anumitor
            preferințe și, în unele cazuri, pentru analiza modului de utilizare a site-ului.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Ce tipuri de tehnologii putem utiliza</h3>
          <p>
            Site-ul poate utiliza elemente strict necesare pentru funcționare, precum și instrumente
            pentru statistici de utilizare și analiză tehnică a traficului, în condițiile stabilite
            de opțiunile tale exprimate prin bannerul afișat pe site.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Elemente strict necesare</h3>
          <p>
            Unele mecanisme tehnice sunt necesare pentru funcționarea corectă a site-ului și pentru
            asigurarea funcțiilor de bază. Fără acestea, anumite secțiuni sau funcționalități pot
            să nu funcționeze corespunzător.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Statistici de utilizare</h3>
          <p>
            Site-ul poate utiliza Cloudflare Web Analytics pentru a măsura traficul și utilizarea
            site-ului. Conform informațiilor publicate de furnizor, acest serviciu nu utilizează
            cookies, localStorage sau alte mecanisme client-side pentru colectarea metricilor de bază.
            Activarea acestui instrument se face în condițiile stabilite de opțiunile tale exprimate
            prin bannerul de pe site.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Consimțământul tău</h3>
          <p>
            La prima vizită, site-ul îți poate afișa un banner prin care poți accepta sau refuza
            activarea instrumentului de statistici. Alegerea ta este memorată local, pentru a evita
            afișarea repetată a aceleiași solicitări.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Gestionarea opțiunilor</h3>
          <p>
            Poți controla sau șterge cookies și alte date locale și din setările browserului.
            În plus, dacă refuzi activarea instrumentului de statistici prin bannerul site-ului,
            acesta nu va fi încărcat.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Furnizori terți</h3>
          <p>
            Pentru anumite funcții tehnice sau statistice, putem utiliza servicii oferite de terți.
            În măsura în care acești furnizori prelucrează date cu caracter personal, informații
            suplimentare se regăsesc și în Politica de confidențialitate.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Contact</h3>
          <p>
            Pentru întrebări privind utilizarea cookies sau setările de confidențialitate,
            ne poți contacta la contact@iconic-collection.ro.
          </p>
        </div>
      </div>
    </main>
  );
}
