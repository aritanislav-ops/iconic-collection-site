import { site } from "../../content/site";
import ContactForm from "../ui/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează iCONiC collection pentru o casă premium personalizată pe terenul tău: proiectare completă, documentații pentru autorizare și coordonarea execuției.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | iCONiC collection",
    description:
      "Case premium personalizate pentru terenul clientului, proiectare completă, autorizare și coordonarea execuției.",
    url: "https://www.iconic-collection.ro/contact",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | iCONiC collection",
    description:
      "Case premium personalizate pentru terenul clientului, proiectare completă, autorizare și coordonarea execuției.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ContactPage() {
  const phoneHref =
    "phoneLink" in site.contact
      ? String((site.contact as any).phoneLink)
      : String((site.contact as any).phone).replace(/\s+/g, "");

  return (
    <main className="contact">
      <div className="container">
        <h1 className="pageTitle">Contact</h1>

        <p className="pageLead">
          Discută cu noi despre o casă premium personalizată pentru terenul tău. Putem asigura proiectarea completă, documentațiile pentru autorizare și coordonarea execuției, astfel încât proiectul să rămână coerent de la prima discuție până la final.
        </p>

        <section className="section">
          <h2 className="sectionTitle">Cu ce te putem ajuta</h2>
          <p>
            Ne poți contacta dacă ai deja terenul, dacă analizezi un model de casă, dacă vrei un proiect personalizat de la zero sau dacă ai nevoie de o discuție clară despre pașii necesari pentru autorizare și execuție.
          </p>
        </section>

        <section className="section">
          <h2 className="sectionTitle">Ce este util să ne trimiți</h2>
          <p>
            Pentru o discuție cât mai clară, este util să ne trimiți localitatea, suprafața terenului, certificatul de urbanism dacă există, un plan de situație sau extras de carte funciară și câteva informații despre suprafața dorită, regimul de înălțime și bugetul orientativ.
          </p>
        </section>

        <section className="contactInfo">
          <div className="infoBlock">
            <div className="infoKey">ADRESĂ</div>
            <div className="infoVal">{site.contact.address ?? "-"}</div>
          </div>

          <div className="infoBlock">
            <div className="infoKey">TELEFON</div>
            <div className="infoVal">
              {site.contact.phone ? (
                <a href={`tel:${phoneHref}`}>{site.contact.phone}</a>
              ) : (
                "-"
              )}
            </div>
          </div>

          <div className="infoBlock">
            <div className="infoKey">E-MAIL</div>
            <div className="infoVal">
              {site.contact.email ? (
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              ) : (
                "-"
              )}
            </div>
          </div>

          <div className="infoBlock">
            <div className="infoKey">PROGRAM</div>
            <div className="infoVal">{site.contact.program ?? "-"}</div>
          </div>
        </section>

        <section className="contactGrid">
          <ContactForm />

          <div className="mapWrap">
            <iframe
              title="Hartă"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={site.contact.mapEmbedUrl ?? "https://www.google.com/maps?q=Bucuresti&output=embed"}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
