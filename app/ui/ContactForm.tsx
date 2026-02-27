"use client";

export default function ContactForm() {
  return (
    <form className="contactForm" method="POST" data-cf-form="contact">
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
        <input type="checkbox" name="gdpr" required />
        <span>Sunt de acord cu procesarea datelor personale.</span>
      </label>

      <button className="contactSubmit" type="submit">TRIMITE</button>
    </form>
  );
}
