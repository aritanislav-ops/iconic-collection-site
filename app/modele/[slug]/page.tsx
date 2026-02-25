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

  return (
    <main className="container">
      <h1 className="pageTitle">{model.name}</h1>

      <div className="card" style={{ marginBottom: 14 }}>
        <div className="cardTitle">Descriere</div>
        <p className="cardText">{model.summary}</p>
      </div>

      <div className="card">
        <div className="cardTitle">Randare</div>
        <div style={{ marginTop: 10 }}>
          {/* Imaginea vine din /public */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={model.image}
            alt={model.name}
            style={{ width: "100%", height: "auto", borderRadius: 14, border: "1px solid var(--border)" }}
          />
        </div>
      </div>
    </main>
  );
}
