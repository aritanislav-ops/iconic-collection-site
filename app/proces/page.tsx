import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Procesul de lucru",
  description:
    "Vezi cum decurge colaborarea cu iCONiC collection: pași clari, revizii controlate, livrabile pe faze și coordonare pe tot parcursul proiectului.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Procesul de lucru | iCONiC collection",
    description:
      "Vezi cum decurge colaborarea cu iCONiC collection: pași clari, revizii controlate, livrabile pe faze și coordonare pe tot parcursul proiectului.",
    url: "https://www.iconic-collection.ro/proces",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Procesul de lucru | iCONiC collection",
    description:
      "Vezi cum decurge colaborarea cu iCONiC collection: pași clari, revizii controlate, livrabile pe faze și coordonare pe tot parcursul proiectului.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ProcesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Procesul de lucru</h1>
      <p className="pageLead">
        Lucrăm în pași clari, cu revizii controlate și livrabile pe faze, astfel încât să știi
        permanent unde ești în proces și ce urmează.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Discuție inițială și clarificarea obiectivului</h3>
          <p>
            Începem cu terenul, nevoile tale, bugetul orientativ și tipul de casă dorit,
            pentru a înțelege corect de unde pornim și ce trebuie construit mai departe.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Stabilirea etapelor de lucru</h3>
          <p>
            Îți explicăm clar care sunt pașii necesari în cazul tău, ce documentații urmează,
            ce presupune fiecare etapă și în ce ordine trebuie făcute lucrurile.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Propuneri, revizii și decizii controlate</h3>
          <p>
            Soluțiile se dezvoltă etapizat, cu discuții și ajustări acolo unde este nevoie,
            astfel încât proiectul să evolueze organizat, fără schimbări haotice.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Livrabile clare pe fiecare fază</h3>
          <p>
            Pentru fiecare etapă primești livrabile clare, astfel încât să știi ce s-a realizat,
            ce urmează și ce rol are fiecare document în proces.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Coordonarea specialităților</h3>
          <p>
            Arhitectura, structura și instalațiile sunt corelate între ele, astfel încât proiectul
            să fie coerent și pregătit corect pentru pașii următori.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Suport pe parcursul proiectului</h3>
          <p>
            Nu primești doar un set de planșe, ci un proces ghidat, cu clarificări și coordonare,
            astfel încât drumul de la teren la casă să fie mai ușor de urmărit.
          </p>
        </div>
      </div>
    </main>
  );
}
