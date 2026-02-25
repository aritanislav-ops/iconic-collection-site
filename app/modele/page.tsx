import Link from "next/link";
import { site } from "../../content/site";

export const dynamic = "error";
export const dynamicParams = false;

export default function ModelePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Modele</h1>
      <p className="pageLead">Alege un model și vezi galeria completă.</p>

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
          height:240px;
          object-fit:cover;
        }
        @media (max-width: 920px){
          .modelCover{height:210px;}
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
