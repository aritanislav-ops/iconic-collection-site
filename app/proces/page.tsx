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
        iCONiC s-a născut din dorința de a aduce rigoarea proiectelor mari de infrastructură și office într-un brand premium de locuințe. 
        Echipa noastră reunește experți tehnici atestați și arhitecți cu peste 20 de ani de experiență internațională, 
        tratând fiecare casă cu aceeași seriozitate tehnică și atenție la durabilitate ca pe un proiect de anvergură. 
        Proiectăm pentru siguranță reală și pentru avantajul pe termen lung al clientului.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Respectarea normelor în vigoare</h3>
          <p>
            Proiectarea se face cu respectarea strictă a legislației românești și a Eurocodurilor. 
            Utilizăm reglementările tehnice ca pe un prag minim de siguranță, integrând soluții care 
            asigură o performanță superioară a clădirii în exploatare.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Siguranță seismică: Protejăm casa, nu doar viața</h3>
          <p>
            O casă proiectată CLASIC, „conform normei actuale”, este gândită în primul rând să evite colapsul structural în timpul unui cutremur major. 
            Norma permite însă degradări atat la nivel de finisaje cât și la nivel de structură prin utilizarea factorului de comportare <strong>q</strong>, 
            factor ce duce la reducerea forței seismice de calcul în schimbul acceptării unor avarii atat la nivel structural cât si la nivel de finisaje. 
            Rezultatul este o structură care protejează viața, dar care poate deveni INUTILIZABILĂ după un cutremur major din cauza daunelor severe suferite(cutremurul de proiectare).
          </p>

          <div style={{ marginTop: '15px', padding: '20px', borderLeft: '4px solid #0284c7', backgroundColor: '#f0f9ff', borderRadius: '0 8px 8px 0' }}>
            <span style={{ display: 'block', fontWeight: '700', marginBottom: '12px', color: '#1e3a8a', fontSize: '1rem' }}>Filozofia iCONiC: q = 1 vs q = 5</span>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>🛑 Proiectarea Clasică (q ≈ 5):</strong> Forța seismică de calcul este redusă de aproximativ 5 ori, 
                iar diferența este „recuperată” prin deformatii ductile — adică prin fisurare, rotiri plastice și avarii controlate. 
                Deplasările mari pot distruge pereții, tâmplăria și finisajele, aparand astfel costuri importante ce le va suporta clientul.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>💎 Standardul iCONiC (q = 1):</strong> Alegem proiectarea în <strong>domeniul elastic</strong>. 
                Datorită regimului mic de înăltime si printr-o conformare structurala judicioasa structura se dimensionează la nivelul forței reale comportarii elastice, fără a se baza pe degradări plastice ca mecanism de rezistență. 
                Asta înseamnă secțiuni mai robuste, rigiditate sporită și deplasări mult mai mici astfel incât avariile și degradările să tindă către ZERO.
              </li>
              <li>
                <strong>🌍 Recurența de 475 de ani:</strong> Codul P100-1/2013 folosește încă referința de 225 de ani pentru acțiunea seismică. 
                Noi adoptăm deja direcția propusă de P100-1/2025 (recurență de 475 ani), oferind un nivel de siguranță net superior si mai mult de atat dimensionarea in elastic
                pentru a păstra funcționalitatea locuinței și după un seism foarte sever.Datorită regimului mic de înălțime și expertizei inginerilor noștri în conformare structurală, reușim să garantăm acest beneficiu esențial pentru clienți, fără a compromite accesibilitatea prețului
              </li>
            </ul>
          </div>
        </div>

        <div className="listItem">
          <h3>3) Soluție structurală aleasă rațional</h3>
          <p>
            Nu urmărim artificii inutile. Alegem structura în funcție de teren și arhitectură, 
            asigurând o conformare judicioasă care să permită comportarea elastică (q=1) 
            fără a irosi resurse, ci optimizându-le acolo unde contează pentru stabilitate.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Eficiență energetică și principii nZEB</h3>
          <p>
            Integrăm soluții compatibile cu standardele nZEB (Nearly Zero Energy Building). 
            O casă bine proiectată nu înseamnă doar izolație, ci o anvelopă eficientă și sisteme inteligente 
            (pompe de căldură, ventilație cu recuperare) care reduc drastic costurile de exploatare.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Materiale și soluții tehnice alese corect</h3>
          <p>
            Materialele nu sunt alese după preț, ci după rolul lor real, durabilitate și întreținere. 
            Urmărim folosirea produselor conforme și certificate, care asigură o îmbătrânire estetică demnă de un proiect premium.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Controlul calității în execuție</h3>
          <p>
            Atunci când asigurăm execuția, urmărim calitatea prin coordonare tehnică riguroasă, 
            dirigenție de șantier și verificarea respectării stricte a detaliilor de proiect. 
            Fiecare etapă este monitorizată pentru a elimina erorile de montaj.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Echipă de execuție și responsabilități clare</h3>
          <p>
            Lucrăm cu constructori calificați și responsabilități bine definite. 
            Beneficiarul știe în orice moment cine execută și cine verifică, 
            asigurând o transparență totală pe parcursul șantierului.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Durabilitate și cost corect pe termen lung</h3>
          <p>
            O casă bună evită „economiile false” de la început care generează costuri uriașe ulterior. 
            Standardul iCONiC înseamnă o investiție predictibilă, cu o valoare de revânzare ridicată.
          </p>
        </div>

        <div className="listItem">
          <h3>9) Proiectare în interesul clientului</h3>
          <p>
            Nu proiectăm pentru a cosmetiza cifrele, ci pentru ca spațiul să lucreze pentru tine. 
            Optimizăm fiecare metru pătrat, eliminăm spațiile moarte și maximizăm aportul de lumină naturală 
            în funcție de ritmul tău de viață.
          </p>
        </div>

        <div className="listItem">
          <h3>10) Claritate contractuală și garanții</h3>
          <p>
            Definim clar etapele de recepție și condițiile de garanție. 
            La final, primești documentația tehnică completă („As-Built”), 
            cartea tehnică a construcției fiind pilonul siguranței tale juridice și tehnice.
          </p>
        </div>

        <div className="listItem">
          <h3>11) Smart Home & Tehnologii Viitoare</h3>
          <p>
            Gândim infrastructura pentru a permite integrarea facilă a sistemelor de automatizare. 
            Casa este pregătită pentru senzori, monitorizare energetică și control inteligent, 
            fără a necesita intervenții invazive ulterioare.
          </p>
        </div>

        <div className="listItem">
          <h3>12) Spații adaptabile</h3>
          <p>
            Proiectăm structuri flexibile care permit adaptarea funcțiunilor în timp. 
            O casă iCONiC evoluează odată cu familia ta, oferind posibilitatea de recompartimentare 
            fără a afecta rezistența clădirii.
          </p>
        </div>

        <div className="listItem">
          <h3>13) Longevity by Default</h3>
          <p>
            Standardul iCONiC este despre longevitate. Proiectăm locuințe care își păstrează 
            performanța structurală, eficiența și estetica pe parcursul mai multor generații, 
            sfidând trecerea timpului.
          </p>
        </div>
      </div>
    </main>
  );
}
