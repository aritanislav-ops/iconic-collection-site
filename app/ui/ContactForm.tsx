"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xreaoprb";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setState("ok");
        return;
      }

      setState("err");
    } catch {
      setState("err");
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
        <input type="checkbox" name="gdpr" required />
        <span>Sunt de acord cu procesarea datelor personale.</span>
      </label>

      <button className="btn" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "TRIMIT..." : "TRIMITE"}
      </button>

      {state === "ok" ? <div className="formOk">Mesaj trimis.</div> : null}
      {state === "err" ? <div className="formErr">Nu s-a putut trimite. Încearcă din nou.</div> : null}
    </form>
  );
}
