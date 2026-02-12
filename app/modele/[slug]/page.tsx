import { notFound } from "next/navigation";
import { site } from "../../../content/site";

export const dynamic = "error";
export const dynamicParams = false;

export function generateStaticParams() {
  return site.models.map((m) => ({ slug: m.slug }));
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const model = site.models.find((m) => m.slug === slug);
  if (!model) return notFound();

  return (
    <main className="container">
      <h1 className="pageTitle">{model.name}</h1>
      <p className="pageLead">{model.area}</p>
      <div className="card">
        <div className="cardTitle">Descriere</div>
        <p className="cardText">{model.summary}</p>
      </div>
    </main>
  );
}
