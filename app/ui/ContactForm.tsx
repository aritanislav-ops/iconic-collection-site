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

      {/* PASUL 4: Compartimentare și Exterior */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>4. Compartimentare și Exterior</legend>

        <span style={{ display: 'block', marginBottom: '10px', fontSize: '0.95rem', fontWeight: '600', color: '#334155' }}>Încăperi Principale:</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px', marginBottom: '20px' }}>
          <label className="field" style={{ marginBottom: '0' }}>
            <span>Nr. Livinguri</span>
            <input type="number" name="Nr_Livinguri" min="1" placeholder="Ex: 1" />
          </label>

          <label className="field" style={{ marginBottom: '0' }}>
            <span>Nr. Bucătării</span>
            <input type="number" name="Nr_Bucatarii" min="1" placeholder="Ex: 1" />
          </label>

          <label className="field" style={{ marginBottom: '0' }}>
            <span>Nr. Dormitoare</span>
            <input type="number" name="Nr_Dormitoare" min="1" placeholder="Ex: 3" />
          </label>

          <label className="field" style={{ marginBottom: '0' }}>
            <span>Nr. Băi</span>
            <input type="number" name="Nr_Bai" min="1" placeholder="Ex: 2" />
          </label>
        </div>

        <span style={{ display: 'block', marginBottom: '10px', fontSize: '0.95rem', fontWeight: '600', color: '#334155' }}>Încăperi Suplimentare:</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px', marginBottom: '20px' }}>
          <label className="field" style={{ marginBottom: '0' }}>
            <span>Nr. Birouri</span>
            <input type="number" name="Nr_Birouri" min="0" placeholder="Ex: 1" />
          </label>

          <label className="field" style={{ marginBottom: '0' }}>
            <span>Nr. Dressinguri</span>
            <input type="number" name="Nr_Dressinguri" min="0" placeholder="Ex: 1" />
          </label>

          <label className="field" style={{ marginBottom: '0' }}>
            <span>C. Tehnice / Spălătorii</span>
            <input type="number" name="Nr_Camere_Tehnice" min="0" placeholder="Ex: 1" />
          </label>

          <label className="field" style={{ marginBottom: '0' }}>
            <span>Nr. Cămări</span>
            <input type="number" name="Nr_Camari" min="0" placeholder="Ex: 1" />
          </label>
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

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
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
          <span style={{ display: 'block', marginBottom: '12px', fontSize: '0.9rem', fontWeight: '500' }}>Amenajări exterioare dorite (bifați și introduceți detaliile):</span>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem' }}>
            
            {/* Piscină Complex */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', minWidth: '150px', fontWeight: '600' }}>
                  <input type="checkbox" name="Amenajari_Exterioare[]" value="Piscină" /> Piscină
                </label>
                <input type="number" name="Suprafata_Piscina_mp" placeholder="Suprafață (mp)" style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', width: '130px' }} />
                <input type="number" step="0.1" name="Adancime_Piscina_m" placeholder="Adâncime (m)" style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', width: '130px' }} />
              </div>
              <div style={{ display: 'flex', gap: '20px', marginLeft: '25px', marginTop: '5px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#475569' }}>
                    <input type="checkbox" name="Tip_Piscina[]" value="Exterioară" /> Exterioară
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#475569' }}>
                    <input type="checkbox" name="Tip_Piscina[]" value="Interioară" /> Interioară
                  </label>
                </div>
                <div style={{ borderLeft: '1px solid #cbd5e1', height: '20px' }}></div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#475569' }}>
                  <input type="checkbox" name="Piscina_Incalzita" value="Da" /> Încălzită
                </label>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', minWidth: '220px' }}><input type="checkbox" name="Amenajari_Exterioare[]" value="Amenajare peisagistică curte" /> Amenajare peisagistică curte</label>
              <input type="number" name="Suprafata_Peisagistica_mp" placeholder="Suprafață (mp)" style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', width: '160px' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', minWidth: '220px' }}><input type="checkbox" name="Amenajari_Exterioare[]" value="Foișor / Bucătărie de vară" /> Foișor / Bucătărie de vară</label>
              <input type="number" name="Suprafata_Foisor_mp" placeholder="Suprafață (mp)" style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', width: '160px' }} />
            </div>
          </div>
        </div>

        <label className="field" style={{ marginTop: '20px' }}>
          <span>Lungime gard ce trebuie executat (metri liniari)</span>
          <input type="number" name="Lungime_Gard_ML" placeholder="Ex: 80 (sau lăsați gol dacă nu doriți proiect gard)" />
        </label>
      </fieldset>

      {/* PASUL 5: Instalații, Eficiență și Smart Home */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
        <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>5. Instalații, Eficiență și Smart Home</legend>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px', marginTop: '-5px' }}>Selectați tehnologiile vizate pentru proiectul dumneavoastră.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          
          {/* Coloana 1: Sursa și Încălzirea */}
          <div>
            <span style={{ display: 'block', marginBottom: '12px', fontSize: '0.95rem', fontWeight: '700', color: '#1e293b' }}>Încălzire & Răcire (Termice)</span>
            
            <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#64748b' }}>Sursă de generare:</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', marginBottom: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sursa_Termica[]" value="Pompă de căldură" style={{marginTop: '3px'}}/> Pompă de căldură</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sursa_Termica[]" value="Centrală pe gaz" style={{marginTop: '3px'}}/> Centrală termică pe gaz</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sursa_Termica[]" value="Centrală electrică" style={{marginTop: '3px'}}/> Centrală electrică</label>
            </div>

            <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#64748b' }}>Sisteme de Încălzire:</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', marginBottom: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Incalzire[]" value="Încălzire în pardoseală" style={{marginTop: '3px'}}/> Încălzire în pardoseală</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Incalzire[]" value="Radiatoare / Calorifere clasice" style={{marginTop: '3px'}}/> Radiatoare / Calorifere clasice</label>
            </div>

            <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#64748b' }}>Sisteme de Răcire:</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Racire[]" value="Răcire în tavan (sistem radiant)" style={{marginTop: '3px'}}/> Răcire în tavan (sistem radiant)</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Racire[]" value="Ventiloconvectoare (pe apă răcită)" style={{marginTop: '3px'}}/> Ventiloconvectoare (pe apă răcită)</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Racire[]" value="Aer Condiționat (sistem Split/VRV cu freon)" style={{marginTop: '3px'}}/> Aer Condiționat (Split/VRV cu freon)</label>
            </div>
          </div>

          {/* Coloana 2: Ventilație, Energie & Apă */}
          <div>
            <span style={{ display: 'block', marginBottom: '12px', fontSize: '0.95rem', fontWeight: '700', color: '#1e293b' }}>Ventilație, Energie & Apă Menajeră</span>
            
            <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#64748b' }}>Aer & Energie:</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', marginBottom: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Ventilatie[]" value="Ventilație cu recuperare de căldură (VRC)" style={{marginTop: '3px'}}/> Ventilație cu recuperare de căldură (VRC)</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Energie[]" value="Panouri fotovoltaice (curent electric)" style={{marginTop: '3px'}}/> Panouri fotovoltaice (curent electric)</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Sistem_Energie[]" value="Panouri solare termice (apă caldă)" style={{marginTop: '3px'}}/> Panouri solare termice (apă caldă)</label>
            </div>

            <span style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#64748b' }}>Tratare & Distribuție Apă:</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Apa[]" value="Boiler bivalent/trivalent sau Pompă căldură ACM" style={{marginTop: '3px'}}/> Boiler bivalent/trivalent / Pompă ACM</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Apa[]" value="Pompă de recirculare ACM (apă caldă instant)" style={{marginTop: '3px'}}/> Pompă recirculare ACM (apă caldă instant)</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Apa[]" value="Stație de dedurizare" style={{marginTop: '3px'}}/> Stație de dedurizare</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Apa[]" value="Filtrare osmoză inversă / Cărbune activ" style={{marginTop: '3px'}}/> Filtrare osmoză inversă / Cărbune activ</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Apa[]" value="Filtru sedimente cu autocurățare" style={{marginTop: '3px'}}/> Filtru sedimente cu autocurățare</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Apa[]" value="Recuperator de căldură pe scurgere" style={{marginTop: '3px'}}/> Recuperator căldură pe scurgere duș</label>
            </div>
          </div>

          {/* Coloana 3: Smart */}
          <div>
            <span style={{ display: 'block', marginBottom: '12px', fontSize: '0.95rem', fontWeight: '700', color: '#1e293b' }}>Smart Home & AI Ready</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Smart[]" value="Sistem Smart Home integrat (ex: KNX, Loxone)" style={{marginTop: '3px'}}/> Sistem Smart Home integrat (ex: KNX)</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Smart[]" value="Monitorizare inteligentă scurgeri apă (electrovalvă auto)" style={{marginTop: '3px'}}/> Monitorizare anti-inundație (AI Ready)</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Smart[]" value="Control inteligent iluminat și jaluzele" style={{marginTop: '3px'}}/> Control inteligent iluminat și umbrire</label>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Smart[]" value="Senzori de prezență pentru eficiență (lumini/apă)" style={{marginTop: '3px'}}/> Senzori de prezență eficiență (lumini/apă)</label>
              <div style={{ borderTop: '1px solid #e2e8f0', margin: '8px 0' }}></div>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}><input type="checkbox" name="Instalatii_Consultanta" value="Da" style={{marginTop: '3px'}}/> <strong style={{color: '#0284c7'}}>Vreau consultanță completă pentru instalații</strong></label>
            </div>
          </div>

        </div>
      </fieldset>

      {/* PASUL 6: Model și Mesaj */}
      <fieldset style={{ marginBottom: '25px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fcfcfc' }}>
         <legend style={{ fontWeight: '600', padding: '0 10px', fontSize: '1.1rem' }}>6. Inspirație și Detalii</legend>
        
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

      {/* PASUL 7: Date de contact */}
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
