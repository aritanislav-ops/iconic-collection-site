import { site } from "../../content/site";
import ContactForm from "../ui/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează iCONiC collection pentru proiectare case, documentații pentru autorizare, coordonare și execuție.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | iCONiC collection",
    description:
      "Contactează iCONiC collection pentru proiectare case, documentații pentru autorizare, coordonare și execuție.",
    url: "https://www.iconic-collection.ro/contact",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | iCONiC collection",
    description:
      "Contactează iCONiC collection pentru proiectare case, documentații pentru autorizare, coordonare și execuție.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="contact">
      <div className="container">
        <h1 className="pageTitle">{site.contact.title}</h1>
        {site.contact.note ? <p className="pageLead">{site.contact.note}</p> : null}

        <section className="contactInfo">
          <div className="infoBlock">
            <div className="infoKey">ADRESĂ</div>
            <div className="infoVal">{site.contact.address ?? "-"}</div>
          </div>

          <div className="infoBlock">
            <div className="infoKey">TELEFON</div>
            <div className="infoVal">
              {site.contact.phone ? (
                <a href={`tel:${String(site.contact.phone).replace(/\s+/g, "")}`}>{site.contact.phone}</a>
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
