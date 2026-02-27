"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xreadprb";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErrMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        form.reset();
        setState("ok");
        return;
      }

      const msg =
        data?.errors?.[0]?.message ||
        data?.error ||
        "Nu s-a putut trimite. Încearcă din nou.";
      setErrMsg(msg);
      setState("err");
    } catch {
      setErrMsg("Nu s-a putut trimite. Verifică internetul și încearcă din nou.");
      setState("err");
    }
  }

  return (
    <form className="contactForm" action={FORM_ENDPOINT} method="POST" onSubmit={onSubmit}>
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

      <input type="hidden" name="_subject" value="Cerere ofertă — iCONiC collection" />

      <button className="contactSubmit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "TRIMIT..." : "TRIMITE"}
      </button>

      {state === "ok" ? <div className="formOk">Mesaj trimis. Îți răspundem cât mai repede.</div> : null}
      {state === "err" ? <div className="formErr">{errMsg}</div> : null}
    </form>
  );
}
