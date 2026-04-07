import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../../content/site";

export const dynamic = "error";
export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Modele de case",
  description:
    "Descoperă modelele de case iCONiC collection, adaptabile terenului, cerințelor și bugetului tău.",
  alternates: {
    canonical: "/modele",
  },
  openGraph: {
    title: "Modele de case | iCONiC collection",
    description:
      "Descoperă modelele de case iCONiC collection, adaptabile terenului, cerințelor și bugetului tău.",
    url: "https://www.iconic-collection.ro/modele",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modele de case | iCONiC collection",
    description:
      "Descoperă modelele de case iCONiC collection, adaptabile terenului, cerințelor și bugetului tău.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ModelePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Modele de case</h1>

      <p className="pageLead">
        Modelele prezentate sunt puncte de plecare și pot fi personalizate în funcție de terenul clientului, buget, cerințele urbanistice și modul de utilizare al casei.
      </p>

      <section className="section">
        <h2 className="sectionTitle">Cum pot fi adaptate</h2>
        <p>
          Modelele pot fi ajustate în funcție de configurația terenului, retrageri, orientare, regim de înălțime, compartimentare, suprafață și buget, astfel încât soluția finală să rămână corectă tehnic și coerentă cu nevoile beneficiarului.
        </p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Ce putem asigura</h2>
        <p>
          În funcție de nevoie, putem asigura proiectarea completă, documentațiile pentru autorizare și coordonarea execuției, astfel încât casa realizată să rămână coerentă cu proiectul și cu condițiile reale din teren.
        </p>
      </section>

      <div className="modelsGrid">
        {site.models.map((m) => {
          const cover = m.images?.[0] ?? "";
          return (
            <article key={m.slug} className="modelCard modelCardLight">
              <Link href={`/modele/${m.slug}`} className="modelMedia" aria-label={m.name}>
                {cover ? <img className="modelCover" src={cover} alt={m.name} loading="lazy" /> : null}
              </Link>

              <div className="modelBody modelBodyLight">
                <div className="modelName modelNameLight">{m.name}</div>
                <div className="modelSummary modelSummaryLight">{m.summary}</div>

                <Link className="modelBtn modelBtnLight" href={`/modele/${m.slug}`}>
                  Vezi detalii <span aria-hidden="true">›</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        .modelsGrid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:14px;
          margin:16px 0 44px;
        }
        @media (max-width: 920px){
          .modelsGrid{grid-template-columns:1fr;}
        }

        .modelCardLight{
          border-radius:18px;
          overflow:hidden;
          border:1px solid var(--border);
          background:#fff;
          box-shadow: 0 18px 60px rgba(2,6,23,.10);
        }
        .modelMedia{
          display:block;
          background:#0b0f17;
        }
        .modelCover{
          display:block;
          width:100%;
          height:auto;
          object-fit:contain;
        }

        .modelBodyLight{
          padding:12px 12px 14px;
          background:#fff;
        }
        .modelNameLight{
          font-weight:820;
          color:var(--text);
          margin:0 0 6px 0;
        }
        .modelSummaryLight{
          margin:0 0 10px 0;
          color:var(--muted);
          font-size:13px;
          line-height:1.35;
        }
        .modelBtnLight{
          display:inline-flex;
          align-items:center;
          gap:8px;
          height:34px;
          padding:0 12px;
          border-radius:999px;
          background:#111827;
          border:1px solid rgba(17,24,39,.12);
          color:#fff;
          font-size:13px;
        }
        .modelBtnLight:hover{filter:brightness(1.05);}
      `}</style>
    </main>
  );
}
