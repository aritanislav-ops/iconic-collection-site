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
          {model.summary} Acest model este un punct de plecare și poate fi personalizat în funcție de terenul clientului, buget, cerințele urbanistice și modul de utilizare al casei.
        </p>

        <p className="modelNote">
          Proiectul final se adaptează terenului, datelor de urbanism și cerințelor beneficiarului, astfel încât soluția construită să rămână coerentă din punct de vedere arhitectural, structural și funcțional.
        </p>
      </div>

      <section className="section">
        <h2 className="sectionTitle">Cum poate fi adaptat</h2>
        <p>
          Modelul poate fi ajustat în funcție de configurația terenului, retrageri, orientare, regim de înălțime, compartimentare, suprafață și buget, astfel încât soluția finală să rămână corectă tehnic și coerentă cu nevoile beneficiarului.
        </p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Ce putem asigura pentru acest proiect</h2>
        <p>
          În funcție de nevoie, putem asigura proiectarea completă, documentațiile pentru autorizare și coordonarea execuției până la capăt, astfel încât casa realizată să rămână coerentă cu proiectul și cu condițiile reale din teren.
        </p>
      </section>

      <ModelGallery images={images} />

      <style>{`
        .modelHeader{padding:8px 0 10px;}
        .modelNote{
          margin:10px 0 0;
          color:var(--muted);
          line-height:1.65;
        }
      `}</style>
    </main>
  );
}
