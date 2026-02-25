export const metadata = { title: "Politica de confidențialitate | iCONiC collection" };

export default function ConfidentialitatePage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="pageTitle">Politica de confidențialitate</h1>
        <p className="pageLead">Informații privind prelucrarea datelor personale (GDPR).</p>

        <div className="list">
          <div className="listItem">
            <h3>1. Operator</h3>
            <p>
              [DENUMIRE FIRMĂ], [FORMA], CUI [CUI], Reg. Com. [J…], sediu: [ADRESĂ],
              email: [EMAIL], telefon: [TEL].
            </p>
          </div>

          <div className="listItem">
            <h3>2. Ce date colectăm</h3>
            <p>Nume, email, telefon și informații furnizate în cererea de ofertă (ex. locație teren).</p>
          </div>

          <div className="listItem">
            <h3>3. Scop și temei</h3>
            <p>
              Scop: ofertare și comunicare. Temei: demersuri la cererea persoanei înainte de contract
              și/sau interes legitim (răspuns la solicitări).
            </p>
          </div>

          <div className="listItem">
            <h3>4. Durata stocării</h3>
            <p>Datele se păstrează cât este necesar pentru ofertare/contractare și obligații legale.</p>
          </div>

          <div className="listItem">
            <h3>5. Destinatari</h3>
            <p>
              Furnizori de email/hosting și servicii tehnice strict necesare funcționării site-ului.
            </p>
          </div>

          <div className="listItem">
            <h3>6. Drepturile tale</h3>
            <p>
              Acces, rectificare, ștergere, restricționare, opoziție, portabilitate, plângere la ANSPDCP.
            </p>
          </div>

          <div className="listItem">
            <h3>7. Contact pentru solicitări</h3>
            <p>Trimite cererea la [EMAIL].</p>
          </div>
        </div>
      </div>
    </main>
  );
}
