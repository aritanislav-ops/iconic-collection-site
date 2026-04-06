import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardul nostru",
  description:
    "Descoperă standardul iCONiC: Proiectare seismică în domeniu elastic (q=1), eficiență energetică nZEB și protecția reală a investiției pe termen lung.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Standardul nostru | iCONiC collection",
    description:
      "Protejăm casa, nu doar viața. Proiectare seismică avansată și eficiență nZEB fără compromisuri.",
    url: "https://www.iconic-collection.ro/proces",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ProcesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Standardul nostru</h1>
      <p className="pageLead">
        iCONiC s-a născut din dorința de a aduce rigoarea proiectelor mari de infrastructură într-un brand premium de locuințe. 
        Proiectăm pentru siguranță reală și pentru avantajul pe termen lung al clientului.
      </p>

      <div className="list">
        {/* 1 */}
        <div className="listItem">
          <h3>1) Respectarea normelor în vigoare</h3>
          <p>
            Proiectarea se face cu respectarea strictă a legislației românești și a Eurocodurilor, tratând reglementările tehnice ca pe un prag minim de siguranță.
          </p>
        </div>

        {/* 2 - ACCENT PE IMPACTUL POST-SEISM */}
        <div className="listItem">
          <h3>2) Siguranță seismică: Protejăm casa, nu doar viața</h3>
          <p>
            O casă proiectată CLASIC este gândită să evite colapsul, dar acceptă <strong>DEGRADĂRI severe</strong> (fisuri, rotiri plastice) pentru a reduce forța seismică de calcul (factorul <strong>q</strong>).
          </p>

          <div style={{ margin: '20px 0', padding: '25px', backgroundColor: '#fff1f2', borderLeft: '5px solid #e11d48', borderRadius: '4px' }}>
            <strong style={{ color: '#9f1239', fontSize: '1.1rem', display: 'block', marginBottom: '10px' }}>
              ⚠️ Riscul Proiectării Standard: Locuința devine INUTILIZABILĂ
            </strong>
            <p style={{ color: '#4c0519', marginBottom: '15px' }}>
              Deși viața este protejată, impactul unui seism major asupra unei clădiri obișnuite destabilizează întreaga familie:
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#4c0519', fontWeight: '500' }}>
              <li style={{ marginBottom: '8px' }}>❌ <strong>Costuri Disproporționate:</strong> Reparațiile depășesc investiția inițială într-o soluție superioară.</li>
              <li style={{ marginBottom: '8px' }}>❌ <strong>Haosul Relocării:</strong> Găsirea unei chirii sigure într-un oraș afectat de seism este aproape imposibilă.</li>
              <li style={{ marginBottom: '8px' }}>❌ <strong>Logistică & Depozitare:</strong> Costuri uriașe pentru mutarea și păstrarea bunurilor pe durata reparațiilor.</li>
              <li>❌ <strong>Timp & Stres:</strong> Luni de incertitudine și viață suspendată pe șantierul post-seism.</li>
            </ul>
          </div>

          <div style={{ marginTop: '15px', padding: '20px', borderLeft: '4px solid #0284c7', backgroundColor: '#f0f9ff', borderRadius: '0 8px 8px 0' }}>
            <span style={{ display: 'block', fontWeight: '700', marginBottom: '12px', color: '#1e3a8a' }}>Soluția iCONiC: q = 1 (Domeniul Elastic)</span>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Alegem dimensionarea la forța seismică reală. Asta înseamnă secțiuni robuste, rigiditate sporită și deplasări minime, astfel încât <strong>avariile să tindă către ZERO</strong>. Adoptăm deja recurența de 475 de ani (P100-1/2025), oferind un nivel de siguranță net superior.
            </p>
            <strong style={{ display: 'block', marginTop: '10px', color: '#1e3a8a' }}>
              Concluzia noastră: O proiectare rezilientă nu este un cost, ci o asigurare pentru viitor.
            </strong>
          </div>
        </div>

        {/* 3 */}
        <div className="listItem">
          <h3>3) Soluție structurală aleasă rațional</h3>
          <p>
            Alegem structura în funcție de teren și arhitectură, optimizând resursele acolo unde contează pentru stabilitate și comportament elastic.
          </p>
        </div>

        {/* 4 - DETALIAT ENERGIE & CLIMA */}
        <div className="listItem">
          <h3>4) Energie, Climă și Eficiență nZEB</h3>
          <p>Implementăm un ecosistem complet pentru independență și confort absolut:</p>
          <ul style={{ marginTop: '10px', lineHeight: '1.7' }}>
            <li><strong>Sursă & Distribuție:</strong> Pompe de căldură (aer-apă sau geotermale), încălzire în pardoseală și <strong>răcire radiantă în tavan</strong>.</li>
            <li><strong>Aer & Ventilație:</strong> Sisteme VMC cu recuperare, purificatoare HEPA și ionizare pentru un mediu steril.</li>
            <li><strong>Energie Smart:</strong> Panouri fotovoltaice, baterii de stocare, stații de încărcare EV și tablouri monitorizate.</li>
            <li><strong>Managementul Apei:</strong> Dedurizare, <strong>osmoză inversă</strong>, colectare apă pluvială și irigații automatizate.</li>
          </ul>
        </div>

        {/* 5 - 10 (Scurtate pentru lizibilitate) */}
        <div className="listItem"><h3>5) Materiale și soluții tehnice certificate</h3></div>
        <div className="listItem"><h3>6) Controlul calității și dirigenție de șantier</h3></div>
        <div className="listItem"><h3>7) Echipă de execuție cu responsabilitate totală</h3></div>
        <div className="listItem"><h3>8) Durabilitate și valoare de revânzare ridicată</h3></div>
        <div className="listItem"><h3>9) Proiectare centrată pe fluxurile vieții tale</h3></div>
        <div className="listItem"><h3>10) Claritate contractuală și documentație As-Built</h3></div>

        {/* 11 - DETALIAT SMART HOME & AI */}
        <div className="listItem">
          <h3>11) Smart Home, Securitate & Tehnologii AI</h3>
          <p>Casa dispune de un "creier" centralizat (KNX / Loxone) care gestionează proactiv siguranța familiei:</p>
          <ul style={{ marginTop: '10px', lineHeight: '1.7' }}>
            <li><strong>Automatizare AI:</strong> Control inteligent al luminilor, jaluzelelor și climatizării pe zone.</li>
            <li><strong>Securitate Avansată:</strong> CCTV, alarmă, control acces biometric, paratrăsnet și senzori de fum/gaz/CO.</li>
            <li><strong>Prevenție Activă:</strong> Monitorizare anti-inundație cu electrovalve automate.</li>
            <li><strong>Infrastructură Digitală:</strong> Rețea Cat7, WiFi mesh profesional și audio multiroom.</li>
            <li style={{ color: '#0284c7', fontWeight: 'bold' }}>⭐ Monitorizare Structurală: Senzori post-seism pentru confirmarea integrității clădirii.</li>
          </ul>
        </div>

        {/* 12 - 13 */}
        <div className="listItem">
          <h3>12) Spații adaptabile</h3>
          <p>Structuri flexibile care permit recompartimentarea viitoare fără a afecta rezistența clădirii.</p>
        </div>

        <div className="listItem">
          <h3>13) Longevity by Default</h3>
          <p>Standardul iCONiC asigură performanță structurală și estetică pentru generații întregi.</p>
        </div>
      </div>
    </main>
  );
}
