import { site } from "../../content/site";
import ContactForm from "../ui/ContactForm";

export default function ContactPage() {
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.contact.email)}`;

  return (
    <main className="contact">
      <div className="container">
        <h1 className="pageTitle">{site.contact.title}</h1>
        {site.contact.note ? <p className="pageLead">{site.contact.note}</p> : null}

        <section className="contactInfo">
          <div className="infoBlock">
            <div className="infoKey">ADRESĂ</div>
            <div className="infoVal">{site.contact.address}</div>
          </div>
          <div className="infoBlock">
            <div className="infoKey">TELEFON</div>
            <div className="infoVal">{site.contact.phone}</div>
          </div>
          <div className="infoBlock">
            <div className="infoKey">E-MAIL</div>
            <div className="infoVal">
              <a href={gmailCompose} target="_blank" rel="noreferrer">
                {site.contact.email}
              </a>
            </div>
          </div>
          <div className="infoBlock">
            <div className="infoKey">PROGRAM</div>
            <div className="infoVal">{site.contact.program}</div>
          </div>
        </section>

        <section className="contactGrid">
          <ContactForm toEmail={site.contact.email} />

          <div className="mapWrap">
            <iframe
              title="Hartă"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={site.contact.mapEmbedUrl}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
