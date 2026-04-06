import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardul nostru | iCONiC collection",
  description:
    "Descoperă standardul iCONiC: Proiectare seismică în domeniu elastic (q=1), eficiență energetică nZEB și tehnologii Smart Home de ultimă generație.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Standardul nostru | iCONiC collection",
    description:
      "Protejăm casa, nu doar viața. Proiectare seismică avansată, eficiență nZEB și monitorizare post-seism.",
    url: "https://www.iconic-collection.ro/proces",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ProcesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Standardul iCONiC</h1>
      <p className="pageLead">
        iCONiC s-a născut din dorința de a aduce rigoarea proiectelor mari de infrastructură și office într-un brand premium de locuințe. 
        Echipa noastră reunește experți tehnici atestați și arhitecți cu peste 20 de ani de experiență internațională, 
        tratând fiecare casă cu aceeași seriozitate tehnică și atenție la durabilitate ca pe un proiect de anvergură. 
      </p>

      <div className="list">
        {/* 1 */}
        <div className="listItem">
          <h3>1) Respectarea normelor în vigoare</h3>
          <p>
            Proiectarea se face cu respectarea strictă a legislației românești și a Eurocodurilor. 
            Utilizăm reglementările tehnice ca pe un prag minim de siguranță, integrând soluții care 
            asigură o performanță superioară a clădirii în exploatare și o durată de viață extinsă.
          </p>
        </div>

        {/* 2 */}
        <div className="listItem">
          <h3>2) Siguranță seismică: Protejăm casa, nu doar viața</h3>
          <p>
            O casă proiectată CLASIC este gândită să evite colapsul structural, dar permite degradări majore (fisuri, rotiri plastice) prin factorul <strong>q</strong>. 
            Rezultatul este o structură care protejează viața, dar care poate deveni <strong>inutilizabilă</strong> după un cutremur major.
          </p>

          <div style={{ marginTop: '15px', padding: '20px', borderLeft: '4px solid #0284c7', backgroundColor: '#f0f9ff', borderRadius: '0 8px 8px 0' }}>
            <span style={{ display: 'block', fontWeight: '700', marginBottom: '12px', color: '#1e3a8a', fontSize: '1rem' }}>Filozofia iCONiC: q = 1 (Domeniul Elastic)</span>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>💎 Standardul q = 1:</strong> Dimensionăm structura la nivelul forței reale seismice, fără a ne baza pe degradări plastice. Asta înseamnă secțiuni robuste, deplasări minime și avarii care tind către zero.
              </li>
              <li>
                <strong>🌍 Recurența de 475 de ani:</strong> Adoptăm deja direcția propusă de viitorul cod P100-1/2025, oferind un nivel de siguranță net superior normelor actuale (care folosesc referința de 225 ani).
              </li>
            </ul>
          </div>

          <p style={{ marginTop: '15px' }}>
            Impactul real al unui seism major asupra unei clădiri standard nu este doar tehnic, ci destabilizează viața familiei:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li><strong>Costuri Disproporționate:</strong> Reparațiile finisajelor și consolidările post-seism depășesc investiția inițială într-o structură elastică.</li>
            <li><strong>Haosul Relocării:</strong> O casă avariată obligă familia la o mutare de urgență într-un context urban deja afectat.</li>
            <li><strong>Timp și Stres:</strong> Șantierul post-seism înseamnă luni de incertitudine și disconfort major.</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="listItem">
          <h3>3) Soluție structurală aleasă rațional</h3>
          <p>
            Nu urmărim artificii inutile. Optimizăm structura în funcție de teren și arhitectură, asigurând o conformare judicioasă care să permită comportamentul elastic (q=1) fără a irosi resurse, ci concentrându-le acolo unde contează pentru stabilitate.
          </p>
        </div>

        {/* 4 - Detaliat nZEB */}
        <div className="listItem">
          <h3>4) Eficiență energetică nZEB și Independență</h3>
          <p>
            Standardul nZEB este pentru noi un sistem integrat de instalații și izolație, menit să elimine facturile mari și să asigure un mediu sănătos:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li><strong>Climatizare Avansată:</strong> Pompe de căldură (aer-apă/sol-apă) cuplate cu încălzire și răcire în pardoseală sau tavan (fără jet de aer).</li>
            <li><strong>Ventilație HRV:</strong> Recuperare de căldură cu filtrare activă și purificatoare (ionizatoare) pentru un aer steril, fără praf sau polen.</li>
            <li><strong>Energie Regenerabilă:</strong> Integrare panouri fotovoltaice și sisteme de stocare în baterii pentru un grad ridicat de auto-consum.</li>
          </ul>
        </div>

        {/* 5 */}
        <div className="listItem">
          <h3>5) Materiale și soluții tehnice alese corect</h3>
          <p>
            Materialele sunt alese după rolul lor real, durabilitate și modul în care îmbătrânesc estetic. Folosim produse certificate care asigură o barieră fonică și termică de top.
          </p>
        </div>

        {/* 6 */}
        <div className="listItem">
          <h3>6) Controlul calității în execuție</h3>
          <p>
            Urmărim calitatea prin coordonare tehnică riguroasă și dirigenție de șantier. Verificăm etanșeitatea anvelopei și eliminăm punțile termice prin detalii de execuție de precizie.
          </p>
        </div>

        {/* 7 */}
        <div className="listItem">
          <h3>7) Echipă de execuție și responsabilități clare</h3>
          <p>
            Lucrăm cu constructori calificați sub o structură contractuală transparentă. Beneficiarul are vizibilitate totală asupra etapelor și a celor responsabili pentru fiecare detaliu tehnic.
          </p>
        </div>

        {/* 8 */}
        <div className="listItem">
          <h3>8) Durabilitate și valoare de revânzare</h3>
          <p>
            O casă iCONiC evită „economiile false”. Standardul nostru reprezintă o investiție predictibilă, asigurând o valoare de piață ridicată pe termen lung datorită performanței structurale.
          </p>
        </div>

        {/* 9 */}
        <div className="listItem">
          <h3>9) Proiectare în interesul clientului</h3>
          <p>
            Optimizăm fiecare metru pătrat, eliminăm spațiile moarte și maximizăm aportul de lumină naturală, adaptând fluxurile casei la ritmul tău de viață.
          </p>
        </div>

        {/* 10 */}
        <div className="listItem">
          <h3>10) Claritate contractuală și Digital Twin</h3>
          <p>
            La final, primești documentația tehnică completă („As-Built”). Aceasta servește drept „carte de identitate digitală” a casei, esențială pentru mentenanță sau modificări viitoare.
          </p>
        </div>

        {/* 11 - Detaliat Smart Home & AI */}
        <div className="listItem">
          <h3>11) Smart Home, AI și Monitorizare Structurală</h3>
          <p>
            Gândim un ecosistem unitar (standard KNX sau similar) care lucrează proactiv pentru confortul și siguranța ta:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li><strong>Automatizare Inteligentă:</strong> Managementul proactiv al iluminatului, climatizării și jaluzelelor în funcție de senzori și scenarii de viață.</li>
            <li><strong>Monitorizare Structurală (Exclusiv):</strong> Posibilitatea instalării de senzori care confirmă integritatea casei în domeniul elastic după un seism.</li>
            <li><strong>Siguranță Activă:</strong> Sisteme de securitate cu analiză video AI, control acces biometric și senzori de prevenție (inundație/foc) cu auto-oprire.</li>
            <li><strong>Managementul Resurselor:</strong> Monitorizarea în timp real a consumului de energie și apă pentru optimizarea costurilor de exploatare.</li>
          </ul>
        </div>

        {/* 12 */}
        <div className="listItem">
          <h3>12) Spații adaptabile</h3>
          <p>
            Proiectăm structuri flexibile care permit recompartimentări viitoare fără a afecta rezistența clădirii, permițând casei să evolueze odată cu familia ta.
          </p>
        </div>

        {/* 13 */}
        <div className="listItem">
          <h3>13) Longevity by Default</h3>
          <p>
            Standardul iCONiC este despre longevitate. Proiectăm locuințe care își păstrează performanța structurală, eficiența și estetica pe parcursul mai multor generații.
          </p>
        </div>
      </div>
    </main>
  );
}
