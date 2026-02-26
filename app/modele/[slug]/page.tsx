import { notFound } from "next/navigation";
import { site } from "../../../content/site";

export const dynamic = "error";
export const dynamicParams = false;

export function generateStaticParams() {
  return site.models.map((m) => ({ slug: m.slug }));
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const model = site.models.find((m) => m.slug === params.slug);
  if (!model) return notFound();

  const images = model.images ?? [];

  return (
    <main className="container">
      <div className="modelHeader">
        <h1 className="pageTitle">{model.name}</h1>
        <p className="pageLead">{model.summary}</p>
        <p className="modelNote"> Modelul este un concept realizat de arhitecti si ingineri experti atestați. Proiectul final se personalizează pentru terenul și cerințele tale, pe baza documentațiilor de urbanism(inclusiv Certificatul de urbanism) și a datelor din amplasament.</p>
      </div>

      {/* Mobil: slider (scroll-snap) */}
      <section className="galleryMobile" aria-label="Galerie mobil">
        <div className="slider" role="region" aria-label="Imagini">
          {images.map((src, i) => (
            <div className="slide" key={src}>
              <img className="slideImg" src={src} alt={`${model.name} – imagine ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="hint">Glisează stânga/dreapta</div>
      </section>

      {/* Desktop: grid */}
      <section className="galleryDesktop" aria-label="Galerie desktop">
        <div className="grid">
          {images.map((src, i) => (
            <img key={src} className="gridImg" src={src} alt={`${model.name} – imagine ${i + 1}`} loading="lazy" />
          ))}
        </div>
      </section>

      <style>{`
        .modelHeader{padding: 8px 0 10px;}

        /* Mobile slider */
        .galleryMobile{display:none;margin: 6px 0 24px;}
        @media (max-width: 920px){
          .galleryMobile{display:block;}
          .galleryDesktop{display:none;}
        }
        .slider{
          display:flex;
          gap:10px;
          overflow:auto;
          scroll-snap-type:x mandatory;
          -webkit-overflow-scrolling:touch;
          padding-bottom:8px;
        }
        .slide{
          scroll-snap-align:start;
          flex: 0 0 92%;
          border-radius:16px;
          overflow:hidden;
          border:1px solid var(--border);
          background:#0b0f17;
        }
        .slideImg{
          display:block;
          width:100%;
          height:240px;
          object-fit:cover;
        }
        .hint{
          margin-top:8px;
          color:var(--muted);
          font-size:12px;
        }

        /* Desktop grid */
        .galleryDesktop{margin: 6px 0 34px;}
        .grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:12px;
        }
        .gridImg{
          width:100%;
          height:320px;
          object-fit:cover;
          border-radius:16px;
          border:1px solid var(--border);
          background:#0b0f17;
        }
      `}</style>
    </main>
  );
}
