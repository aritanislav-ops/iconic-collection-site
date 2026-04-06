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
            O casă proiectată CLASIC, „conform normei actuale”, este gândită în primul rând să evite colapsul structural în timpul unui cutremur major (cutremurul de proiectare). 
            Norma permite însă degradări atât la nivel de finisaje cât și la nivel de structură prin utilizarea factorului de comportare <strong>q</strong>, 
            factor ce duce la reducerea forței seismice de calcul direct proporțional în schimbul acceptării DEGRADĂRILOR. 
            Rezultatul este o structură care protejează viața, dar care poate deveni INUTILIZABILĂ după un cutremur major (cutremurul de proiectare) din cauza DAUNELOR severe suferite.
          </p>

          <div style={{ marginTop: '15px', padding: '20px', borderLeft: '4px solid #0284c7', backgroundColor: '#f0f9ff', borderRadius: '0 8px 8px 0' }}>
            <span style={{ display: 'block', fontWeight: '700', marginBottom: '12px', color: '#1e3a8a', fontSize: '1rem' }}>Filozofia iCONiC: q = 1 vs q = 5</span>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>🛑 Proiectarea Clasică (q ≈ 5):</strong> Forța seismică de calcul este redusă de aproximativ 5 ori, 
                iar diferența este „recuperată” prin deformații ductile — adică prin fisurare, rotiri plastice și avarii controlate. 
                Deplasările mari pot distruge pereții, tâmplăria și finisajele, apărând astfel costuri importante ce le va suporta clientul.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>💎 Standardul iCONiC (q = 1):</strong> Alegem proiectarea în <strong>domeniul elastic</strong>. 
                Datorită regimului mic de înălțime și printr-o conformare structurală judicioasă, structura se dimensionează la nivelul forței reale comportării elastice, fără a se baza pe degradări plastice ca mecanism de rezistență. 
                Asta înseamnă secțiuni mai robuste, rigiditate sporită și deplasări mult mai mici astfel încât avariile și degradările să tindă către ZERO.
              </li>
              <li>
                <strong>🌍 Recurența de 475 de ani:</strong> Codul P100-1/2013 folosește încă referința de 225 de ani pentru acțiunea seismică. 
                Noi adoptăm deja direcția propusă de P100-1/2025 (recurență de 475 ani), oferind un nivel de siguranță net superior și mai mult de atât dimensionarea în elastic
                pentru a păstra funcționalitatea locuinței și după un seism foarte sever. Datorită regimului mic de înălțime și expertizei inginerilor noștri în conformare structurală, reușim să garantăm acest beneficiu esențial pentru clienți, fără a compromite accesibilitatea prețului.
              </li>
            </ul>
          </div>
          
          <p style={{ marginTop: '15px' }}>
            Deși viața este protejată, rezultatul unui seism major asupra unei astfel de clădiri este adesea o locuință INUTILIZABILĂ. Impactul real pentru proprietar nu este doar unul tehnic, ci unul care destabilizează întreaga viață a familiei:
            Costuri Disproporționate: Efortul financiar necesar pentru înlocuirea suprafețelor vitrate mari, refacerea integrală a finisajelor și consolidarea elementelor structurale avariate depășește cu mult investiția modică ce ar fi fost necesară inițial pentru o soluție tehnică superioară.
            Haosul Relocării: O casă avariată obligă familia la o mutare de urgență. Într-un oraș afectat de seism, găsirea unei chirii sigure devine o provocare aproape imposibilă și extrem de costisitoare.
            Logistica și Depozitarea: Costurile și efortul de a muta și depozita întregul mobilier și bunurile personale pe durata unor reparații care pot dura luni de zile reprezintă o povară ascunsă, dar uriașă.
            Timp și Stres: Șantierul post-seism înseamnă luni de incertitudine și disconfort, timp în care viața de familie este suspendată.
            Concluzia noastră: Adoptarea unei soluții de proiectare reziliente, pe care noi o propunem, nu este un cost suplimentar, ci o asigurare pentru viitor. Investiția marginală de astăzi elimină riscul ca, după un cutremur, să pierdeți nu doar finisajele casei, ci și confortul, timpul și liniștea familiei dumneavoastră.
          </p>
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
            (pompe de căldură aer-apă sau sol-apă, ventilație HRV cu recuperare de căldură și filtrare activă a aerului / ionizatoare) care reduc drastic costurile de exploatare. 
            Implementăm soluții de climatizare avansate, precum încălzirea și răcirea în pardoseală sau tavan, și pregătim infrastructura pentru panouri fotovoltaice și stocare în baterii pentru o independență energetică reală.
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
          <h3>11) Smart Home, AI & Monitorizare Structurală</h3>
          <p>
            Gândim infrastructura pentru a permite integrarea facilă a sistemelor de automatizare proactivă (standard KNX sau similar). 
            Casa este pregătită pentru senzori AI, monitorizare energetică și control inteligent al climatizării, iluminatului și scenariilor de securitate (CCTV, control acces biometric, senzori inundație/foc). 
            În exclusivitate, integrăm opțiunea de monitorizare structurală post-seism, oferind un raport tehnic imediat despre starea clădirii pentru liniștea totală a familiei tale.
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
