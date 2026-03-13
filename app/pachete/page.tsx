import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pașii Proiectului",
  description:
    "Vezi pașii proiectului: de la teren și studii inițiale până la proiectare, autorizare, coordonare și execuție.",
  alternates: {
    canonical: "/pachete",
  },
  openGraph: {
    title: "Pașii Proiectului | iCONiC collection",
    description:
      "Vezi pașii proiectului: de la teren și studii inițiale până la proiectare, autorizare, coordonare și execuție.",
    url: "https://www.iconic-collection.ro/pachete",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pașii Proiectului | iCONiC collection",
    description:
      "Vezi pașii proiectului: de la teren și studii inițiale până la proiectare, autorizare, coordonare și execuție.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function PachetePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Pașii Proiectului</h1>
      <p className="pageLead">
        De la teren și primele întrebări până la proiectare, autorizare și execuție,
        lucrăm în pași clari, astfel încât să știi ce urmează și ce primești la fiecare etapă.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Discuția inițială și analiza terenului</h3>
          <p>
            Începem cu ce ai deja: terenul, nevoile tale, bugetul orientativ și tipul de casă pe care îl dorești.
            Analizăm situația de pornire și stabilim direcția potrivită pentru proiect.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Ridicare topografică</h3>
          <p>
            Realizăm ridicarea topografică a amplasamentului, atunci când este necesară,
            pentru a avea baza corectă de lucru pentru proiectare și pentru documentațiile următoare.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Studiu geotehnic</h3>
          <p>
            Obținem investigațiile geotehnice și recomandările de fundare,
            astfel încât soluția structurală să fie aleasă corect în funcție de teren.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Conceptul casei și organizarea soluției</h3>
          <p>
            Stabilim împreună forma casei, compartimentarea, relația cu terenul și direcția generală a proiectului,
            astfel încât soluția să fie potrivită atât pentru stilul tău de viață, cât și pentru amplasament.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Documentația pentru autorizare</h3>
          <p>
            Pregătim documentația necesară pentru autorizarea construcției,
            conform cerințelor aplicabile și pașilor necesari pentru obținerea autorizației.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Proiectul tehnic și detaliile de execuție</h3>
          <p>
            Dezvoltăm proiectul complet pentru execuție: arhitectură, structură și instalații,
            cu detalii și coordonare între specialități, astfel încât casa să poată fi pusă corect în operă.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Coordonare și clarificări pe parcurs</h3>
          <p>
            În funcție de ce ai nevoie, asigurăm coordonare, clarificări și urmărire pe etape,
            astfel încât procesul să rămână organizat și coerent și după finalizarea proiectării.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Execuție</h3>
          <p>
            Putem merge mai departe și în etapa de execuție, prin colaborare cu echipe și constructori acreditați,
            astfel încât să ai continuitate între proiect și realizarea efectivă a casei.
          </p>
        </div>
      </div>
    </main>
  );
}
