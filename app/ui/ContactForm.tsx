"use client";

import { useMemo, useState } from "react";

function enc(v: string) {
  return encodeURIComponent(v);
}

export default function ContactForm({ toEmail }: { toEmail: string }) {
  const [copied, setCopied] = useState(false);

  const mailtoBase = useMemo(() => `mailto:${toEmail}`, [toEmail]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const company = String(fd.get("company") ?? "");
    const message = String(fd.get("message") ?? "");

    const subject = `Cerere ofertă - ${name || "contact"}${company ? ` (${company})` : ""}`;
    const body =
      `Nume: ${name}\n` +
      `Email: ${email}\n` +
      `Telefon: ${phone}\n` +
      `Companie: ${company}\n\n` +
      `Mesaj:\n${message}\n`;

    // deschide clientul de email
    window.location.href = `${mailtoBase}?subject=${enc(subject)}&body=${enc(body)}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(toEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // dacă clipboard e blocat, nu facem nimic
    }
  }

  return (
    <form className="contactForm" onSubmit={onSubmit}>
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

      <div className="contactAlt">
        <div className="contactAltText">
          Dacă nu se deschide emailul, scrie direct la: <b>{toEmail}</b>
        </div>
        <button className="contactAltBtn" type="button" onClick={copyEmail}>
          {copied ? "COPIAT" : "Copiază email"}
        </button>
      </div>
    </form>
  );
}
