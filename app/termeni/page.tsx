import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termeni și condiții pentru utilizarea site-ului iCONiC collection.",
  alternates: {
    canonical: "/termeni",
  },
  openGraph: {
    title: "Termeni și condiții | iCONiC collection",
    description:
      "Termeni și condiții pentru utilizarea site-ului iCONiC collection.",
    url: "https://www.iconic-collection.ro/termeni",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Termeni și condiții | iCONiC collection",
    description:
      "Termeni și condiții pentru utilizarea site-ului iCONiC collection.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function TermeniPage() {
  return (
    <main className="container legalPage">
      <h1 className="pageTitle">Termeni și condiții</h1>
      <p className="pageLead">
        Acest site este operat sub brandul iCONiC collection de către A&amp;A Evoconstruct SRL.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Identitatea operatorului economic</h3>
          <p>
            iCONiC collection este un brand A&amp;A Evoconstruct SRL, CUI RO 21409238,
            Nr. Reg. Com. J2007005795403, cu sediul în Sector 3, Str. Agatha Bârsescu Nr. 15B,
            Etaj 01, Biroul 07, București.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Scopul site-ului</h3>
          <p>
            Site-ul are rol de prezentare a serviciilor și soluțiilor oferite sub brandul
            iCONiC collection, inclusiv proiectare pentru case, documentații pentru autorizare,
            coordonarea specialităților și, după caz, servicii conexe sau etape ulterioare de execuție.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Caracterul informațiilor publicate</h3>
          <p>
            Informațiile prezentate pe site au caracter informativ și nu reprezintă, prin ele însele,
            o ofertă contractuală fermă. Orice ofertă concretă se stabilește în funcție de cerințele
            proiectului, amplasament, documentația disponibilă, complexitate și condițiile convenite
            ulterior între părți.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Solicitări transmise prin site</h3>
          <p>
            Transmiterea unui mesaj prin formularul de contact sau prin e-mail nu echivalează cu
            încheierea unui contract. Relația contractuală se naște numai în baza unui acord expres
            între părți și, după caz, a unui contract sau a unei oferte acceptate.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Drepturi de proprietate intelectuală</h3>
          <p>
            Conținutul site-ului, inclusiv textele, imaginile, machetele, elementele grafice,
            siglele și structura generală, este protejat de legislația aplicabilă și nu poate fi
            copiat, reutilizat, distribuit sau exploatat fără acordul titularului drepturilor.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Răspundere</h3>
          <p>
            Depunem eforturi rezonabile pentru ca informațiile publicate pe site să fie corecte și
            actualizate, însă nu garantăm absența completă a erorilor, omisiunilor sau neconcordanțelor.
            Utilizarea informațiilor de pe site se face cu luarea în considerare a caracterului lor
            general și informativ.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Servicii și colaborări</h3>
          <p>
            Anumite servicii prezentate pe site pot fi furnizate direct de A&amp;A Evoconstruct SRL
            sau, după caz, prin colaborare cu specialiști, consultanți, echipe sau constructori,
            în funcție de natura proiectului și de condițiile contractuale aplicabile.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Linkuri către terți</h3>
          <p>
            Site-ul poate conține linkuri către pagini externe. Nu controlăm în mod direct conținutul,
            disponibilitatea sau politicile acestor site-uri și nu răspundem pentru modul în care acestea
            funcționează.
          </p>
        </div>

        <div className="listItem">
          <h3>9) Litigii și soluționare alternativă</h3>
          <p>
            În cazul unor eventuale litigii, vom încerca mai întâi soluționarea amiabilă.
            Consumatorii pot apela și la mecanismele de soluționare alternativă a litigiilor
            puse la dispoziție de ANPC, conform informațiilor publicate de autoritatea competentă.
          </p>
        </div>

        <div className="listItem">
          <h3>10) Modificarea termenilor</h3>
          <p>
            Ne rezervăm dreptul de a actualiza acești termeni atunci când este necesar pentru
            reflectarea modificărilor legislative, tehnice sau comerciale. Versiunea publicată pe site
            la momentul consultării este versiunea aplicabilă pentru utilizarea site-ului.
          </p>
        </div>

        <div className="listItem">
          <h3>11) Contact</h3>
          <p>
            Pentru întrebări privind acești termeni, ne poți contacta la{" "}
            contact@iconic-collection.ro.
          </p>
        </div>
      </div>
    </main>
  );
}
