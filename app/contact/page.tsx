import { site } from <ContactForm toEmail={site.contact.email} />;

export default function ContactPage() {
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
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </div>
          </div>
          <div className="infoBlock">
            <div className="infoKey">PROGRAM</div>
            <div className="infoVal">{site.contact.program}</div>
          </div>
        </section>

        <section className="contactGrid">
          <form className="contactForm" action="#" method="post">
            <p className="formLead">
              Dorești să dezvoltăm un proiect împreună?
              <br />
              Ne poți contacta folosind formularul de mai jos.
            </p>

            <label className="field">
              <span>Nume</span>
              <input type="text" name="name" required />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" name="email" required />
            </label>

            <label className="field">
              <span>Telefon</span>
              <input type="tel" name="phone" />
            </label>

            <label className="field">
              <span>Companie</span>
              <input type="text" name="company" />
            </label>

            <label className="field">
              <span>Detalii</span>
              <textarea name="message" rows={6} required />
            </label>

            <label className="consent">
              <input type="checkbox" required />
              <span>Sunt de acord cu procesarea datelor personale.</span>
            </label>

            <button className="contactSubmit" type="submit">TRIMITE</button>
          </form>

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
