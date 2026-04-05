import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardul nostru",
  description:
    "Află standardul nostru de proiectare și execuție: siguranță seismică superioară la 475 ani (q=1), eficiență energetică nZEB și proiectare în interesul real al clientului.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Standardul nostru | iCONiC collection",
    description:
      "Siguranță seismică tratată responsabil (q=1, 475 ani), eficiență nZEB și proiectare fără compromisuri. Descoperă standardul iCONiC.",
    url: "https://www.iconic-collection.ro/proces",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standardul nostru | iCONiC collection",
    description:
      "Proiectăm pentru siguranță, durabilitate și eficiență. Peste 5 milioane de metri pătrați proiectați și executați.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ProcesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Standardul nostru</h1>
      <p className="pageLead">
        iCONiC s-a născut din dorința de a aduce rigoarea proiectelor mari de infrastructură și office într-un brand premium de locuințe. 
        Nu tratăm casele ca proiecte „mici”, ci ca investiții de o viață care merită o seriozitate tehnică absolută. 
        Echipa noastră, cu peste 20 de ani de experiență internațională și 5 milioane de metri pătrați proiectați, 
        reunește experți tehnici atestați și arhitecți care refuză compromisurile făcute doar pentru a reduce artificial costul inițial. 
        Proiectăm pentru clienți, nu pentru constructori sau dezvoltatori.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Respectarea normelor în vigoare</h3>
          <p>
            Proiectarea se face cu respectarea strictă a legislației românești și a Eurocodurilor. 
            Spre deosebire de practica uzuală, noi folosim reglementările tehnice ca pe un prag minim, 
            integrând adesea standarde americane (ASCE/AISC) acolo unde acestea oferă o siguranță comparativă superioară.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Siguranță seismică: Protejăm Casa, nu doar Viața</h3>
          <p>
            Majoritatea clienților cred că o casă „conform normei” rămâne intactă după cutremur. 
            <strong> Realitatea este diferită:</strong> Normativul actual (P100-1) garantează doar 
            <em> siguranța vieții</em>. Asta înseamnă că, la un cutremur major, clădirea te protejează să nu mori, 
            dar structura este proiectată să se degradeze (să se rupă controlat) pentru a absorbi energia, 
            făcând casa adesea imposibil de reparat sau utilizat ulterior.
          </p>

          <div style={{ marginTop: '15px', padding: '20px', borderLeft: '4px solid #0284c7', backgroundColor: '#f0f9ff', borderRadius: '0 8px 8px 0' }}>
            <span style={{ display: 'block', fontWeight: '700', marginBottom: '12px', color: '#1e3a8a', fontSize: '1rem' }}>Standardul iCONiC: Proiectare în domeniu Elastic (q=1)</span>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>🛑 Norma Clasică (q=5 - Proiectare Ductilă):</strong> Se bazează pe „factorul de comportare”. 
                Se permite structurii să sufere degradări plastice (avarii structurale) pentru a reduce costul materialelor. 
                Rezultă deplasări mari care distrug pereții, geamurile și finisajele.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>💎 Standardul iCONiC (q=1 - Fără degradări):</strong> Noi dimensionăm structura să preia 
                forța seismică integral în domeniul elastic. Casa nu „se rupe” pentru a rezista. 
                Deplasările sunt minime, protejând atât structura, cât și toate componentele nestructurale (fațade, finisaje, instalații).
              </li>
              <li>
                <strong>🌍 Recurența de 475 de ani:</strong> Deși normativul P100-1/2025 (care impune standardul european de 475 ani) 
                este amânat sub presiunea dezvoltatorilor pentru a nu crește costurile, 
                <strong> noi îl aplicăm deja</strong>. Nu limităm degradările doar la cutremure „curente”, 
                ci ne asigurăm că locuința rămâne funcțională și după seismul maxim de proiectare.
              </li>
            </ul>
          </div>
        </div>

        <div className="listItem">
          <h3>3) Soluție structurală aleasă rațional</h3>
          <p>
            Alegem sistemul constructiv în funcție de teren și arhitectură, fără a urmări artificii inutile. 
            O conformare structurală judicioasă ne permite să obținem acea rigiditate necesară standardului q=1 
            fără a irosi materiale, optimizând consumul acolo unde contează cu adevărat.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Eficiență energetică și principii nZEB</h3>
          <p>
            O clădire nZEB (Nearly Zero Energy Building) reprezintă echilibrul perfect între izolare termică extremă 
            și producție proprie de energie. Integrăm soluții active (pompe de căldură, fotovoltaice) și pasive 
            (orientare solară, eliminarea punților termice) pentru un consum aproape de zero.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Materiale și soluții tehnice alese corect</h3>
          <p>
            Nu alegem materialele după cel mai mic preț de pe raft, ci după fiabilitatea lor în timp. 
            Urmărim produse cu agremente tehnice clare, care asigură o întreținere minimă și o îmbătrânire 
            estetică demnă de o locuință premium.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Controlul calității în execuție</h3>
          <p>
            Atunci când asigurăm și execuția, transformăm proiectul tehnic într-o realitate fără erori. 
            Verificăm riguros fiecare etapă de control, asigurându-ne că montajul instalațiilor și 
            turnarea betonului respectă cu precizie milimetrică viziunea inginerului și a arhitectului.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Echipă de execuție și responsabilități clare</h3>
          <p>
            Eliminăm ambiguitatea de pe șantier. Lucrăm cu specialiști acreditați (RTE, Dirigenție de șantier) 
            și constructori calificați, oferind beneficiarului un singur punct de responsabilitate pentru întreg proiectul.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Durabilitate și cost corect pe termen lung</h3>
          <p>
            Evităm „economiile false”. O ieftinire a structurii sau a izolației la început se traduce în costuri 
            uriașe de reparații sau facturi în viitor. Standardul iCONiC este despre un cost de exploatare corect și predictibil.
          </p>
        </div>

        <div className="listItem">
          <h3>9) Proiectare în interesul clientului</h3>
          <p>
            Arhitectura noastră este una de tip „lifestyle engineering”. Optimizăm fluxurile interioare pentru a 
            elimina spațiile moarte și regizăm lumina naturală pentru a transforma casa într-un spațiu care 
            lucrează activ pentru confortul și sănătatea ta mentală.
          </p>
        </div>

        <div className="listItem">
          <h3>10) Claritate contractuală și garanții</h3>
          <p>
            Oferim transparență totală asupra etapelor de recepție și a garanțiilor acordate. 
            La finalul fiecărui proiect, beneficiarul primește documentația completă, esențială pentru 
            istoricul clădirii și menținerea valorii de revânzare a imobilului.
          </p>
        </div>

        <div className="listItem">
          <h3>11) Smart Home & AI Ready</h3>
          <p>
            Pregătim infrastructura casei pentru tehnologiile de mâine. Chiar dacă nu instalați azi 
            sisteme complexe, traseele tehnice sunt prevăzute pentru a permite automatizarea facilă 
            a iluminatului, climatizării și securității, fără a sparge pereții ulterior.
          </p>
        </div>

        <div className="listItem">
          <h3>12) Spații adaptabile pentru viitor</h3>
          <p>
            Gândim structura astfel încât locuința să fie flexibilă. O cameră de oaspeți poate deveni 
            un birou sau un hobby-room fără intervenții structurale, permițând casei să evolueze 
            odată cu dinamica familiei tale.
          </p>
        </div>

        <div className="listItem">
          <h3>13) Longevity by default</h3>
          <p>
            Standardul iCONiC înseamnă „Longevity by design”. Nu proiectăm doar pentru momentul predării cheilor, 
            ci pentru ca locuința să își păstreze valoarea, estetica și siguranța structurală peste 50 sau 100 de ani.
          </p>
        </div>
      </div>
    </main>
  );
}
