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
          Modelul este un concept dezvoltat de arhitecți și ingineri experți atestați, cu experiență și recunoaștere profesională. Proiectul final se personalizează 
          pentru terenul și cerințele clientului, pe baza documentațiilor de urbanism și a datelor specifice amplasamentului. Locuința are o arhitectură contemporană,
          cu vitraje ample și un limbaj minimalist premium. Proiectul este conceput ca un ansamblu coerent de arhitectură, structură, anvelopă, tâmplărie, finisaje și
          instalații, adaptat fiecărui teren și fiecărui beneficiar. 
          Casa este gândită pentru siguranță, durabilitate, eficiență energetică și confort real. Dimensionarea structurală se realizează în conformitate cu norme seismice
          riguroase, urmărind un răspuns structural preponderent ELASTIC inclusiv la acțiunea seismică asociată cutremurului cu interval mediu de recurență de 475 de ani, asrfel
          degradările seismice tind catre ZERO. Durabilitatea este asigurată prin alegerea unor materiale de calitate, iar confortul și performanța energetică prin integrarea 
          soluțiilor nZEB, a tehnologiilor SMART HOME, cu integrarea facilă a sistemelor de automatizare, robotizare și inteligență artificială(AI) cat si a sistemelor moderne
          de climatizare, iluminat și control. Finisajele și echipările se personalizează astfel încât imaginea modelului să rămână coerentă, iar locuința să răspundă corect nevoilor
          reale de utilizare.
        </p>
      </div>

      <ModelGallery images={images} />

      <style>{`
        .modelHeader{padding: 8px 0 10px;}
      `}</style>
    </main>
  );
}
