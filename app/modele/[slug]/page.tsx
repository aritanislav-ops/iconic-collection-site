import { notFound } from "next/navigation";
import { site } from "../../../content/site";
import ModelGallery from "@/app/ui/ModelGallery";

export const dynamic = "error";
export const dynamicParams = false;

export function generateStaticParams() {
  return site.models.map((m) => ({ slug: m.slug }));
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const model = site.models.find((m) => m.slug === params.slug);
  if (!model) return notFound();

  const images = (model.images ?? [])
    .slice()
    .sort((a, b) => {
      const na = Number((a.match(/\/(\d+)\.(jpg|jpeg|png|webp)$/i) || [])[1] ?? 0);
      const nb = Number((b.match(/\/(\d+)\.(jpg|jpeg|png|webp)$/i) || [])[1] ?? 0);
      return na - nb;
    })
    .map((src: string, i: number) => ({
      src,
      alt: `${model.name} – imagine ${i + 1}`,
    }));

  return (
    <main className="container">
      <div className="modelHeader">
        <h1 className="pageTitle">{model.name}</h1>
        <p className="pageLead">{model.summary}</p>
        <p className="modelNote">
          Modelul este un concept realizat de arhitecți și ingineri experți atestați. Proiectul final se personalizează
          pentru terenul și cerințele tale, pe baza documentațiilor de urbanism și a datelor din amplasament.
        </p>
      </div>

      <ModelGallery images={images} />

      <style>{`
        .modelHeader{padding: 8px 0 10px;}
      `}</style>
    </main>
  );
}
