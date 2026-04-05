import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardul nostru",
  description:
    "Află standardul nostru de proiectare și execuție: respectarea normelor în vigoare, siguranță seismică la 475 ani recurență, eficiență energetică nZEB și proiectare optimizată în interesul real al clientului.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Standardul nostru | iCONiC collection",
    description:
      "Siguranță seismică tratată responsabil, eficiență nZEB și proiectare în interesul clientului. Descoperă standardul iCONiC.",
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
        ICONIC s-a născut din dorința de a aduce standardul proiectelor mari într-un brand premium de locuințe, de a educa piața
        în direcția arhitecturii și structurii de calitate și mai ales să simplificăm pentru client tot procesul construirii unei case,
        printr-un produs complet, de la A la Z. Nu tratăm casele ca proiecte mici, ci ca proiecte care merită aceeași seriozitate tehnică, 
        durabilitate și atenție la execuție ca un ansamblu rezidențial de anvergură sau o clădire office complexă.
        Echipa noastră reunește arhitecți premiați și ingineri experți cu peste 20 de ani de experiență și peste 5 milioane de metri pătrați gestionați la nivel internațional.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Respectarea normelor în vigoare</h3>
          <p>
            Proiectarea se face cu respectarea strictă a legislației românești, a reglementărilor tehnice și a Eurocodurilor. 
            La cerere, utilizăm standarde americane (ASCE/AISC) pentru analize comparative, asigurându-ne că soluția finală 
            depășește cerințele minime obligatorii din România.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Siguranță seismică tratată responsabil</h3>
          <p>
            În timp ce norma standard prevede proiectarea pentru un cutremur cu perioadă de recurență de 225 de ani, 
            <strong> Standardul iCONiC vizează o recurență de 475 de ani</strong>. Dimensionăm structura elastic, 
            astfel încât degradările structurale să tindă spre ZERO, protejând nu doar viețile, ci și investiția pe termen lung.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Soluție structurală aleasă rațional</h3>
          <p>
            Alegem sistemul constructiv (beton armat, zidărie portantă sau metal) în funcție de amprenta la sol, deschideri și 
            comportarea dorită în timp. Nu facem compromisuri de dragul prețului inițial care pot genera fisuri sau tasări ulterioare.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Eficiență energetică și principii nZEB</h3>
          <p>
            O casă nZEB (Nearly Zero Energy Building) nu este doar o bifă legală, ci o clădire cu facturi minime. 
            Integrăm nativ pompe de căldură, ventilație cu recuperare de căldură și panouri fotovoltaice, eliminând 
            punțile termice prin detalii de execuție riguroase.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Materiale și soluții tehnice alese corect</h3>
          <p>
            Selectăm materialele după rolul lor structural și durabilitate, nu doar după preț. Urmărim folosirea produselor 
            certificate, cu agremente tehnice, asigurând o îmbătrânire estetică și funcțională a clădirii.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Controlul calității în execuție</h3>
          <p>
            În etapa de execuție, garantăm calitatea prin coordonare tehnică directă, dirigenție de șantier și verificări 
            la faze determinante, asigurându-ne că realitatea din șantier corespunde 100% cu proiectul tehnic.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Echipă de execuție și responsabilități clare</h3>
          <p>
            Lucrăm exclusiv cu echipe acreditate. Beneficiarul are o viziune clară asupra ierarhiei: cine execută, 
            cine verifică și cine își asumă responsabilitatea legală pentru fiecare etapă.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Durabilitate și cost corect pe termen lung</h3>
          <p>
            O economie de 5% la faza de proiectare sau materiale poate însemna costuri de mentenanță de 20% mai mari ulterior. 
            Noi proiectăm pentru un cost total de proprietate (TCO) minim pe 50 de ani.
          </p>
        </div>

        <div className="listItem">
          <h3>9) Proiectare în interesul clientului</h3>
          <p>
            Fiecare metru pătrat este optimizat pentru a elimina „spațiile moarte”. Regizăm pătrunderea luminii naturale 
            în funcție de momentele zilei și de rutina familiei, transformând arhitectura într-un instrument de confort.
          </p>
        </div>

        <div className="listItem">
          <h3>10) Claritate contractuală și garanții</h3>
          <p>
            Garanția este stabilită clar, acoperind atât viciile ascunse cât și conformitatea lucrărilor. Oferim 
            documentația „As-Built” completă, esențială pentru revizii sau revânzarea imobilului la valoare maximă.
          </p>
        </div>

        <div className="listItem">
          <h3>11) Casă pregătită pentru Smart Home și AI</h3>
          <p>
            Infrastructura este pregătită pentru integrarea sistemelor KNX, Loxone sau Home Assistant. Chiar dacă nu le 
            instalați acum, traseele tehnice sunt prevăzute pentru senzori, monitorizare și management energetic viitor.
          </p>
        </div>

        <div className="listItem">
          <h3>12) Spații adaptabile (Flexibility by Design)</h3>
          <p>
            Gândim structura cu deschideri mari care permit recompartimentări ușoare. O casă iCONiC crește odată cu familia, 
            permițând transformarea unui birou în dormitor sau invers, fără intervenții structurale majore.
          </p>
        </div>

        <div className="listItem">
          <h3>13) Longevity by default</h3>
          <p>
            Proiectăm pentru viitor: mentenanță ușoară a fațadelor, acces facil la instalații pentru modernizări și o 
            estetică atemporală care nu se va demoda, păstrând valoarea de piață a proprietății peste decenii.
          </p>
        </div>
      </div>
    </main>
  );
}
