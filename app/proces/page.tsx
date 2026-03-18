import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standardul nostru",
  description:
    "Află standardul nostru de proiectare și execuție: respectarea normelor în vigoare, siguranță seismică, eficiență energetică, materiale corect alese, controlul calității execuției și proiectare în interesul real al clientului.",
  alternates: {
    canonical: "/proces",
  },
  openGraph: {
    title: "Standardul nostru | iCONiC collection",
    description:
      "Află standardul nostru de proiectare și execuție: respectarea normelor în vigoare, siguranță seismică, eficiență energetică, materiale corect alese, controlul calității execuției și proiectare în interesul real al clientului.",
    url: "https://www.iconic-collection.ro/proces",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standardul nostru | iCONiC collection",
    description:
      "Află standardul nostru de proiectare și execuție: respectarea normelor în vigoare, siguranță seismică, eficiență energetică, materiale corect alese, controlul calității execuției și proiectare în interesul real al clientului.",
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
        printr-un produs complet, de la A la Z, lăsând coordonarea etapelor esențiale în seama noastră.
        Nu tratăm casele ca proiecte mici, ci ca proiecte care merită aceeași seriozitate tehnică, aceeași calitate a arhitecturii și 
        aceeași atenție la durabilitate, confort și execuție. Portofoliul nostru nu se oprește la locuințe unifamiliale: proiectăm
        și ansambluri rezidențiale ample, office, hotelier, industrial, energetic și proiecte speciale, inclusiv în colaborări internaționale.
        Proiectăm pentru siguranță, durabilitate, eficiență și avantajul real al clientului, cu respectarea normelor în vigoare și fără compromisuri făcute
        doar pentru a reduce artificial costul inițial. Echipa are peste 20 de ani de experiență în țară și la nivel internațional și peste 250 de milioane
        de metri pătrați proiectați și executați. Reunim arhitecți premiați, cu experiență, membri OAR, și ingineri experți tehnici atestați, membri AICPS,
        formați în proiecte mari și complexe, inclusiv la nivel internațional.Fiecare proiect este tratat cu același standard: rigoare, responsabilitate 
        și soluții corecte pe termen lung.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Respectarea normelor în vigoare</h3>
          <p>
            Proiectarea se face cu respectarea legislației românești aplicabile, a reglementărilor tehnice în vigoare
            și a eurocodurilor utilizate în cadrul legal și tehnic aplicabil proiectului. La cerere, pot fi analizate și
            referințe tehnice suplimentare, inclusiv standarde americane, acolo unde acestea ajută comparativ sau conceptual,
            fără a înlocui cerințele obligatorii aplicabile proiectului în România.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Siguranță seismică tratată responsabil</h3>
          <p>
            Structura este gândită pentru o comportare corectă, cu soluții coerente și controlate,
            astfel încât casa să ofere siguranță, robustețe și predictibilitate în exploatare.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Soluție structurală aleasă rațional</h3>
          <p>
            Nu urmărim artificii inutile și nici soluții slăbite de compromisuri.
            Alegem structura în funcție de teren, arhitectură, deschideri, utilizare și comportarea dorită în timp.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Eficiență energetică și principii NZEB</h3>
          <p>
            Integrăm soluții compatibile cu cerințele actuale de performanță energetică și cu principiile NZEB,
            astfel încât casa să fie mai eficientă, mai confortabilă și mai bine pregătită pentru costurile reale de exploatare.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Materiale și soluții tehnice alese corect</h3>
          <p>
            Materialele și soluțiile prevăzute în proiect nu sunt alese doar după preț,
            ci după rolul lor real în construcție, durabilitate, întreținere și comportare în timp.
            Urmărim folosirea unor produse conforme, certificate și, unde este cazul, cu agremente tehnice,
            potrivit cerințelor aplicabile fiecărei soluții.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Controlul calității în execuție</h3>
          <p>
            Atunci când mergem mai departe și în etapa de execuție, urmărim calitatea lucrărilor prin coordonare tehnică,
            dirigenție de șantier, RTE și verificarea respectării proiectului, a detaliilor de execuție și a etapelor de control.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Echipă de execuție și responsabilități clare</h3>
          <p>
            Lucrăm cu echipe și constructori acreditați sau calificați pentru tipul de lucrări asumate,
            cu responsabilități clar definite în execuție, astfel încât beneficiarul să știe cine execută,
            cine verifică și cum este urmărită calitatea pe șantier.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Durabilitate și cost corect pe termen lung</h3>
          <p>
            O casă bună nu înseamnă doar cost mai mic la început.
            Înseamnă și întreținere mai predictibilă, comportare corectă în timp și evitarea unor economii false care costă mai mult ulterior.
          </p>
        </div>

        <div className="listItem">
          <h3>9) Proiectare în interesul clientului</h3>
          <p>
            Nu proiectăm pentru a cosmetiza costul pe hârtie și nici pentru compromisuri făcute doar în favoarea costului inițial.
            Proiectăm pentru ca beneficiarul să primească o casă bine gândită, sigură și corect dimensionată pentru folosire reală.
          </p>
        </div>

        <div className="listItem">
          <h3>10) Claritate contractuală și garanții</h3>
          <p>
            Perioada de garanție se stabilește contractual, în funcție de categoria construcției și de lucrările asumate.
            Urmărim o definire clară a responsabilităților, a etapelor de recepție și a documentației tehnice,
            astfel încât beneficiarul să știe exact ce primește și în ce condiții.
          </p>
        </div>
        <div className="listItem">
  <h3>11) Casă pregătită pentru automatizare și tehnologii viitoare</h3>
  <p>
    Gândim proiectul astfel încât locuința să poată integra ușor soluții de tip smart home,
    scenarii de control, senzori, monitorizare, management energetic și alte tehnologii
    care vor deveni tot mai prezente în exploatarea de zi cu zi.
  </p>
</div>

<div className="listItem">
  <h3>12) Spații adaptabile pentru viitor</h3>
  <p>
    Urmărim o organizare care să permită adaptarea în timp a locuinței:
    spații flexibile, trasee tehnice previzibile, zone care pot primi funcțiuni noi
    și o casă pregătită pentru schimbările familiei, ale stilului de viață și ale tehnologiei.
  </p>
</div>

<div className="listItem">
  <h3>13) Longevity by default</h3>
  <p>
    Nu proiectăm doar pentru momentul predării, ci pentru folosire reală pe termen lung:
    întreținere mai ușoară, soluții durabile, confort constant, infrastructură pregătită
    pentru modernizări și o locuință care își păstrează valoarea în timp.
  </p>
</div>
      </div>
    </main>
  );
}
