import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pașii Proiectului",
  description:
    "Vezi pașii proiectului: de la analiza terenului și utilităților până la certificatul de urbanism, avize, autorizare, proiectare, coordonare și execuție.",
  alternates: {
    canonical: "/pachete",
  },
  openGraph: {
    title: "Pașii Proiectului | iCONiC collection",
    description:
      "Vezi pașii proiectului: de la analiza terenului și utilităților până la certificatul de urbanism, avize, autorizare, proiectare, coordonare și execuție.",
    url: "https://www.iconic-collection.ro/pachete",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pașii Proiectului | iCONiC collection",
    description:
      "Vezi pașii proiectului: de la analiza terenului și utilităților până la certificatul de urbanism, avize, autorizare, proiectare, coordonare și execuție.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function PachetePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Pașii Proiectului</h1>
      <p className="pageLead">
        De la teren și documentele inițiale până la proiectare, autorizare și execuție,
        lucrăm în pași clari, astfel încât să știi ce urmează și ce primești la fiecare etapă.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Discuția inițială și analiza terenului</h3>
          <p>
            Începem cu ce ai deja: terenul, nevoile tale, bugetul orientativ și tipul de casă pe care îl dorești.
            Analizăm situația de pornire și stabilim direcția potrivită pentru proiect.
          </p>
        </div>
        
        <div className="listItem">
          <h3>2) Certificatul de urbanism</h3>
          <p>
            Certificatul de urbanism este etapa care clarifică reglementările aplicabile terenului
            și lista de avize sau acorduri necesare pentru autorizare.
          </p>
        </div>
        
        <div className="listItem">
          <h3>3) Analiza utilităților și a condițiilor de branșare</h3>
          <p>
            Verificăm situația utilităților existente la teren sau în zonă: energie electrică, apă,
            canalizare și, după caz, gaze. Dacă terenul nu este racordat, analizăm soluțiile posibile,
            condițiile de branșare și eventualele variante alternative necesare proiectului.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Avizele și acordurile necesare</h3>
          <p>
            În funcție de ce cere certificatul de urbanism și de situația utilităților din teren sau din zonă,
            pregătim documentațiile necesare pentru obținerea avizelor și acordurilor cerute pentru autorizare.
          </p>
        </div>          
        
        <div className="listItem">        
          <h3>5) Ridicare topografică</h3>
          <p>
            Realizăm ridicarea topografică a amplasamentului, atunci când este necesară,
            pentru a avea baza corectă de lucru pentru proiectare și pentru documentațiile următoare.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Studiu geotehnic</h3>
          <p>
            Obținem investigațiile geotehnice și recomandările de fundare,
            astfel încât soluția structurală să fie aleasă corect în funcție de teren.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Conceptul casei și organizarea soluției</h3>
          <p>
            Stabilim împreună forma casei, compartimentarea, relația cu terenul și direcția generală a proiectului,
            astfel încât soluția să fie potrivită atât pentru stilul tău de viață, cât și pentru amplasament.
          </p>
        </div>

        <div className="listItem">
          <h3>8) DTAC – documentația pentru autorizare</h3>
          <p>
            Pregătim documentația tehnică pentru autorizarea executării lucrărilor de construcții,
            corelată cu cerințele urbanistice, avizele și condițiile aplicabile proiectului.
          </p>
        </div>

        <div className="listItem">
          <h3>9) Autorizația de construire</h3>
          <p>
            După depunerea documentației complete, urmează etapa de autorizare,
            pe baza căreia se poate trece legal la execuția lucrărilor.
          </p>
        </div>

        <div className="listItem">
          <h3>10) Proiectul tehnic și detaliile de execuție</h3>
          <p>
            Dezvoltăm proiectul complet pentru execuție: arhitectură, structură și instalații,
            cu detalii și coordonare între specialități, astfel încât casa să poată fi pusă corect în operă.
          </p>
        </div>

        <div className="listItem">
          <h3>11) Coordonare, clarificări și suport pe parcurs</h3>
          <p>
            În funcție de nevoie, asigurăm coordonare, clarificări și urmărire pe etape,
            astfel încât procesul să rămână organizat și coerent și după finalizarea proiectării.
          </p>
        </div>

        <div className="listItem">
          <h3>12) Execuție</h3>
          <p>
            Pentru a garanta că realitatea va reflecta la milimetru proiectul, îți oferim servicii complete de Project Management prin coordonare generală a execuției, 
            asigurarea și coordonarea rolurilor tehnice esențiale — Diriginte de Șantier și RTE (Responsabil Tehnic cu Execuția).
            Acționăm ca unicul tău punct de contact pe durata șantierului, selectând și supervizând echipele de constructori acreditați, astfel încât calitatea lucrării
            să rămână la standardele noastre, fără ca tu să pierzi timp sau energie.
          </p>
        </div>

        <div className="listItem">
          <h3>13) Recepția lucrărilor</h3>
          <p>
            La final, etapa de execuție se închide corect prin procedurile de recepție,
            astfel încât construcția să fie predată și documentată corespunzător.
          </p>
        </div>
      </div>


      <h3>Siguranță și claritate pe termen lung</h3>
<p>
  Pentru că urmărim calitatea prin proiectare, verificare tehnică, coordonare în execuție,
  dirigenție de șantier și controlul responsabil al lucrărilor, la iCONiC collection livrăm
  o locuință gândită pentru siguranță, durabilitate și exploatare corectă în timp.
</p>

<p>
  Transparența investiției tale este susținută prin documentație tehnică clară, recepție
  corectă a lucrărilor și stabilirea contractuală a responsabilităților și garanțiilor
  aferente etapelor asumate.
</p>

<ul>
  <li>
    <strong>Garanții stabilite contractual, în funcție de lucrările asumate:</strong>
    perioada de garanție pentru lucrările executate se definește clar în contract,
    în funcție de natura și complexitatea acestora.
  </li>
  <li>
    <strong>Răspundere pentru vicii ascunse:</strong>
    conform cadrului legal aplicabil, răspunderea pentru vicii ascunse se analizează
    distinct față de garanția curentă de execuție.
  </li>
  <li>
    <strong>Răspundere pentru structura de rezistență:</strong>
    pentru viciile ascunse ale structurii de rezistență rezultate din nerespectarea
    normelor de proiectare și de execuție, răspunderea poate exista pe toată durata
    de existență a construcției, în condițiile legii.
  </li>
  <li>
    <strong>Materiale conforme:</strong>
    urmărim folosirea de produse pentru construcții conforme, certificate și,
    unde este cazul, cu agremente tehnice, potrivit cerințelor aplicabile fiecărei soluții.
  </li>
</ul>




      
    </main>
  );
}
