"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/maqdkopy";

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
    <form className="contactForm" action={FORM_ENDPOINT} method="POST" encType="multipart/form-data" onSubmit={onSubmit}>
      <p className="formLead">
        Completând acest formular ne ajuți să înțelegem exact ce îți dorești și să îți oferim o estimare corectă. Nu este obligatoriu să ai toate detaliile acum.
      </p>

      {/* PASUL 1: Terenul */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>1. Situația Terenului</legend>
        
        <div style={{ marginBottom: '15px' }}>
          <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Ai deja terenul achiziționat?</span>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Teren_Achizitionat" value="Da" /> Da</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Teren_Achizitionat" value="Nu" /> Nu</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Teren_Achizitionat" value="În curs" /> În curs de achiziție</label>
          </div>
        </div>

        <label className="field">
          <span>Localitatea / Zona unde se va construi</span>
          <input type="text" name="Localitate" placeholder="Ex: Corbeanca, Ilfov" />
        </label>

        <label className="field">
          <span>Suprafața terenului (aprox. mp)</span>
          <input type="number" name="Suprafata_Teren_mp" placeholder="Ex: 500" />
        </label>

        <label className="field">
          <span>Deschidere la drum (aprox. metri liniari)</span>
          <input type="text" name="Deschidere_Drum_Metri" placeholder="Ex: 18m (sau lăsați gol dacă nu știți)" />
        </label>

        <div style={{ marginBottom: '15px' }}>
          <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Există calcane (construcții lipite pe limită)?</span>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Calcane" value="Da" /> Da</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Calcane" value="Nu" /> Nu</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Calcane" value="Nu știu sigur" /> Nu știu sigur</label>
          </div>
        </div>

        <label className="field">
          <span>Locația exactă (Link Google Maps - Opțional)</span>
          <input type="url" name="Link_Google_Maps" placeholder="https://maps.app.goo.gl/..." />
        </label>

        <div style={{ marginBottom: '10px' }}>
          <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Utilități existente la teren:</span>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Utilitati[]" value="Apă" /> Apă</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Utilitati[]" value="Gaze" /> Gaze</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Utilitati[]" value="Curent" /> Curent</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Utilitati[]" value="Canalizare" /> Canalizare</label>
          </div>
        </div>
      </fieldset>

      {/* PASUL 2: Documentația */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>2. Documentație și Fișiere</legend>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '15px', marginTop: '-5px' }}>Opțional. Ne ajută la o ofertare rapidă.</p>

        <div style={{ marginBottom: '15px' }}>
          <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Ce documente deții deja?</span>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Documente[]" value="Cadastru" /> Cadastru</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Documente[]" value="Certificat Urbanism" /> Certificat Urbanism</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Documente[]" value="Studiu Geotehnic" /> Studiu Geo</label>
          </div>
        </div>

        <label className="field" style={{ marginBottom: '0' }}>
          <span>Atașează documente/poze (Opțional)</span>
          <input type="file" name="Fisiere_Atasate" multiple style={{ padding: '8px 0' }} />
        </label>
      </fieldset>

      {/* PASUL 3: Casa Visurilor */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>3. Casa Visurilor</legend>

        <label className="field">
          <span>Suprafață construită desfășurată TOTALĂ dorită (aprox.)</span>
          <select name="Suprafata_Desfasurata_Dorita" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'transparent' }}>
            <option value="">Alege o variantă...</option>
            <option value="Sub 100 mp">Sub 100 mp</option>
            <option value="100 - 150 mp">100 - 150 mp</option>
            <option value="150 - 200 mp">150 - 200 mp</option>
            <option value="200 - 300 mp">200 - 300 mp</option>
            <option value="Peste 300 mp">Peste 300 mp</option>
          </select>
        </label>

        <label className="field">
          <span>Amprenta la sol dorită (aprox.)</span>
          <select name="Amprenta_La_Sol_Dorita" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'transparent' }}>
            <option value="">Alege o variantă...</option>
            <option value="Sub 80 mp">Sub 80 mp</option>
            <option value="80 - 120 mp">80 - 120 mp</option>
            <option value="120 - 150 mp">120 - 150 mp</option>
            <option value="Peste 150 mp">Peste 150 mp</option>
            <option value="Nu știu sigur / Depinde de arhitect">Nu știu sigur / Las la decizia arhitectului</option>
          </select>
        </label>

        <label className="field">
          <span>Regim de înălțime dorit</span>
          <select name="Regim_Inaltime" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'transparent' }}>
            <option value="">Alege o variantă...</option>
            <option value="Parter (P)">Parter (P)</option>
            <option value="Parter + Mansardă (P+M)">Parter + Mansardă (P+M)</option>
            <option value="Parter + Etaj (P+1E)">Parter + Etaj (P+1E)</option>
            <option value="Subsol/Demisol + Parter + Etaj (S+P+1E)">Subsol/Demisol + Parter + Etaj (S+P+1E)</option>
            <option value="S+P+1E+M">S+P+1E+M</option>
            <option value="S+P+2E">S+P+2E</option>
            <option value="S+P+2E+M">S+P+2E+M</option>
            <option value="S+P+3E">S+P+3E</option>
            <option value="S+P+3E+M">S+P+3E+M</option>
          </select>
        </label>

        <label className="field">
          <span>Structura de rezistență</span>
          <select name="Structura_Rezistenta" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'transparent' }}>
            <option value="">Alege o variantă...</option>
            <option value="Cărămidă și Beton (Clasică)">Cărămidă și Beton (Clasică)</option>
            <option value="Lemn">Lemn</option>
            <option value="Structură Metalică">Structură Metalică</option>
            <option value="Vreau o recomandare">Vreau o recomandare</option>
          </select>
        </label>

        <label className="field">
          <span>Ce model din colecția noastră îți place?</span>
          <input list="modele-iconic" name="Model_Preferat_Iconic" placeholder="Alege din listă sau scrie liber..." />
          <datalist id="modele-iconic">
            <option value="Model Casă Parter" />
            <option value="Model Vilă Modernă cu Etaj" />
            <option value="Am propriul model (atașat mai sus)" />
            <option value="Încă nu m-am decis" />
          </datalist>
        </label>
        
        <label className="field">
          <span>Detalii suplimentare</span>
          <textarea 
            name="message" 
            rows={5} 
            defaultValue={"Bună ziua,\n\nAș dori o ofertă de preț pentru un proiect de casă, luând în considerare informațiile și preferințele selectate mai sus.\n\nAștept răspunsul dumneavoastră. Mulțumesc!"} 
          />
        </label>
      </fieldset>

      {/* PASUL 4: Date de contact */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>4. Datele de contact</legend>

        <label className="field">
          <span>Nume *</span>
          <input type="text" name="name" required />
        </label>

        <label className="field">
          <span>Email *</span>
          <input type="email" name="email" required />
        </label>

        <label className="field">
          <span>Telefon *</span>
          <input type="tel" name="phone" required />
        </label>
      </fieldset>

      <label className="consent">
        <input type="checkbox" name="gdpr" required />
        <span>Sunt de acord cu procesarea datelor personale.</span>
      </label>

      <input type="hidden" name="_subject" value="Cerere ofertă — iCONiC collection" />

      <button className="contactSubmit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "TRIMIT..." : "SOLICITĂ OFERTA"}
      </button>

      {state === "ok" ? <div className="formOk" style={{ marginTop: '15px' }}>Mesaj trimis! Îți răspundem cât mai repede.</div> : null}
      {state === "err" ? <div className="formErr" style={{ marginTop: '15px' }}>{errMsg}</div> : null}
    </form>
  );
}
