import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "../../../content/site";
import ModelGallery from "@/app/ui/ModelGallery";

export const dynamic = "error";
export const dynamicParams = false;

export function generateStaticParams() {
  return site.models.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const model = site.models.find((m) => m.slug === params.slug);

  if (!model) {
    return {
      title: "Model de casă",
      description: "Model de casă personalizabil în funcție de teren, buget și cerințele urbanistice.",
    };
  }

  const cover = model.images?.[0] ?? "/brand/og-home.jpg";

  return {
    title: `${model.name} | iCONiC collection`,
    description: `${model.name} este un model de casă care poate fi personalizat în funcție de terenul clientului, buget și cerințele urbanistice.`,
    alternates: {
      canonical: `/modele/${model.slug}`,
    },
    openGraph: {
      title: `${model.name} | iCONiC collection`,
      description: `${model.name} este un model de casă care poate fi personalizat în funcție de terenul clientului, buget și cerințele urbanistice.`,
      url: `https://www.iconic-collection.ro/modele/${model.slug}`,
      images: [cover],
    },
    twitter: {
      card: "summary_large_image",
      title: `${model.name} | iCONiC collection`,
      description: `${model.name} este un model de casă care poate fi personalizat în funcție de terenul clientului, buget și cerințele urbanistice.`,
      images: [cover],
    },
  };
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

        <p className="pageLead">
          {model.summary} Modelul este orientativ și poate fi personalizat în funcție de terenul clientului, buget și cerințele urbanistice.
        </p>

        <p className="modelNote">
          Proiectul final se adaptează terenului, condițiilor de urbanism și cerințelor beneficiarului, astfel încât soluția să rămână coerentă arhitectural, structural și funcțional.
        </p>
      </div>

      <ModelGallery images={images} />

      <style>{`
        .modelHeader{
          padding:8px 0 0;
        }
        .pageLead{
          margin:0 0 8px;
          font-size:15px;
          line-height:1.65;
          max-width:980px;
        }
        .modelNote{
          margin:0 0 18px;
          color:var(--muted);
          line-height:1.65;
          font-size:15px;
          max-width:980px;
        }
      `}</style>
    </main>
  );
}
