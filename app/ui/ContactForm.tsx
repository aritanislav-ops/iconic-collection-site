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
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Documente[]" value="Studiu Geotehnic" /> Studiu Geotehnic</label>
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
            <option value="300 - 400 mp">300 - 400 mp</option>
            <option value="400 - 500 mp">400 - 500 mp</option>
            <option value="500 - 1000 mp">500 - 1000 mp</option>
            <option value="1000 - 2000 mp">1000 - 2000 mp</option>
            <option value="Peste 2000 mp">Peste 2000 mp</option>
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
            <option value="Parter + Etaj + Mansardă (P+1E+M)">Parter + Etaj + Mansardă (P+1E+M)</option>
            <option value="Parter + 2 Etaje (P+2E)">Parter + 2 Etaje (P+2E)</option>
            <option value="Parter + 2 Etaje + Mansardă (P+2E+M)">Parter + 2 Etaje + Mansardă (P+2E+M)</option>
            <option value="Parter + 3 Etaje (P+3E)">Parter + 3 Etaje (P+3E)</option>
            <option value="Parter + 3 Etaje + Mansardă (P+3E+M)">Parter + 3 Etaje + Mansardă (P+3E+M)</option>
            <option value="Subsol + Parter (S+P)">Subsol + Parter(S+P)</option>
            <option value="S+P+1E">S+P+1E</option>            
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
            <option value="Structură în cadre din beton armat">Structură în cadre din beton armat</option>
            <option value="Structură din zidărie portantă și beton armat">Structură din zidărie portantă și beton armat</option>
            <option value="Structură metalică clasică cu profile laminate la cald">Structură metalică clasică cu profile laminate la cald</option>
            <option value="Structură din lemn">Structură din lemn</option>
            <option value="Vreau o recomandare">Vreau o recomandare</option>
          </select>
        </label>
      </fieldset>

      {/* PASUL 4: Dotări și Preferințe */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>4. Compartimentare, Dotări și Exterior</legend>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '15px' }}>
          <label className="field" style={{ flex: '1 1 120px', marginBottom: '0' }}>
            <span>Nr. Dormitoare</span>
            <input type="number" name="Nr_Dormitoare" min="1" placeholder="Ex: 3" />
          </label>

          <label className="field" style={{ flex: '1 1 120px', marginBottom: '0' }}>
            <span>Nr. Băi</span>
            <input type="number" name="Nr_Bai" min="1" placeholder="Ex: 2" />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Alte încăperi dorite:</span>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Incaperi_Extra[]" value="Birou" /> Birou</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Incaperi_Extra[]" value="Dressing separat" /> Dressing separat</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Incaperi_Extra[]" value="Cameră tehnică / Spălătorie" /> Cameră tehnică / Spălătorie</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Incaperi_Extra[]" value="Cămară" /> Cămară</label>
          </div>
        </div>

        <label className="field">
          <span>Garaj / Parcare acoperită</span>
          <select name="Garaj" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'transparent' }}>
            <option value="">Alege o variantă...</option>
            <option value="Fără garaj">Fără garaj</option>
            <option value="Garaj pentru 1 mașină (închis)">Garaj pentru 1 mașină (închis)</option>
            <option value="Garaj pentru 2 mașini (închis)">Garaj pentru 2 mașini (închis)</option>
            <option value="Carport pentru 1 mașină (deschis)">Carport pentru 1 mașină (deschis)</option>
            <option value="Carport pentru 2 mașini (deschis)">Carport pentru 2 mașini (deschis)</option>
          </select>
        </label>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '15px' }}>
          <label className="field" style={{ flex: '1 1 120px', marginBottom: '0' }}>
            <span>Terasă Acoperită (mp)</span>
            <input type="number" name="Terasa_Acoperita_mp" placeholder="Ex: 20" />
          </label>

          <label className="field" style={{ flex: '1 1 120px', marginBottom: '0' }}>
            <span>Terasă Neacoperită (mp)</span>
            <input type="number" name="Terasa_Neacoperita_mp" placeholder="Ex: 15" />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Amenajări exterioare dorite:</span>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Amenajari_Exterioare[]" value="Piscină" /> Piscină</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Amenajari_Exterioare[]" value="Amenajare peisagistică curte" /> Amenajare peisagistică curte</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="checkbox" name="Amenajari_Exterioare[]" value="Foișor / Bucătărie de vară" /> Foișor / Bucătărie de vară</label>
          </div>
        </div>

        <label className="field">
          <span>Lungime gard la stradă (metri liniari)</span>
          <input type="number" name="Lungime_Gard_ML" placeholder="Ex: 25 (sau lăsați gol dacă nu doriți proiect gard)" />
        </label>

        <label className="field">
          <span>Sisteme de încălzire și eficiență (selecție multiplă posibilă):</span>
          <select name="Sisteme_Incalzire[]" multiple style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '4px', backgroundColor: 'transparent', height: '120px' }}>
            <option value="Încălzire în pardoseală">Încălzire în pardoseală</option>
            <option value="Calorifere clasice">Calorifere clasice</option>
            <option value="Pompă de căldură">Pompă de căldură</option>
            <option value="Centrală pe gaz">Centrală pe gaz</option>
            <option value="Panouri fotovoltaice / solare">Panouri fotovoltaice / solare</option>
            <option value="Sistem de ventilație cu recuperare de căldură">Ventilație cu recuperare de căldură</option>
            <option value="Vreau recomandări de la arhitect">Vreau recomandări de la arhitect</option>
          </select>
          <span style={{fontSize: '0.8rem', color: '#64748b', marginTop: '4px', display: 'block'}}>*Țineți apăsat CTRL (sau CMD pe Mac) pentru a selecta mai multe opțiuni.</span>
        </label>

      </fieldset>

      {/* PASUL 5: Model și Mesaj */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
         <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>5. Inspirație și Detalii</legend>
        
        <div style={{ marginBottom: '15px' }}>
          <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Inspirație Model Casă</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
             <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Tip_Model" value="Din Colecția Iconic" /> Îmi place un model din Colecția iCONiC (Specificați mai jos numele/nr pozei)</label>
             <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Tip_Model" value="Model Propriu" /> Am propriul model (Atașat mai sus la Pasul 2)</label>
             <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><input type="radio" name="Tip_Model" value="Nehotărât" /> Încă nu m-am decis</label>
          </div>
        </div>

        <label className="field">
          <span>Dacă ai ales un model iCONiC, scrie numele lui sau numărul pozei:</span>
          <input type="text" name="Nume_Poza_Model_Iconic" placeholder="Ex: Vilă Modernă Poza 04" />
        </label>
        
        <label className="field">
          <span>Detalii suplimentare</span>
          <textarea 
            name="message" 
            rows={5} 
            defaultValue={"Bună ziua,\n\nAș dori o ofertă de preț luând în considerare informațiile și preferințele selectate mai sus.\n\nAștept răspunsul dumneavoastră. Mulțumesc!"} 
          />
        </label>
      </fieldset>

      {/* Pachet Servicii Dorit */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#e6f2ff' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem', color: '#0056b3' }}>Pachetul de Servicii Dorit</legend>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
             <input type="radio" name="Pachet_Servicii" value="Proiect Complet" style={{marginTop: '3px'}}/> 
             <span><strong>Proiect Complet</strong> (Arhitectură, Structură, Instalații)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
             <input type="radio" name="Pachet_Servicii" value="Proiect Complet + Avize/Autorizații" style={{marginTop: '3px'}}/> 
             <span><strong>Proiect Complet + Avize & Autorizații</strong></span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
             <input type="radio" name="Pachet_Servicii" value="Pachet Complet All-Inclusive" style={{marginTop: '3px'}}/> 
             <span><strong>Pachet Complet All-Inclusive</strong> (Proiectare + Avize + Autorizații + Execuție)</span>
          </label>
        </div>
      </fieldset>

      {/* PASUL 6: Date de contact */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>Datele de contact</legend>

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
