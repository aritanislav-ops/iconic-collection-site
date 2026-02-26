export default function ConfidentialitatePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Politica de confidențialitate</h1>

      <p className="pageLead">
        Această pagină descrie modul în care prelucrăm datele personale atunci când ne contactezi sau soliciți o ofertă.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Operatorul de date</h3>
          <p>
            [DENUMIRE FIRMĂ] [SRL/PFA], CUI [CUI], sediu [ADRESĂ], email [EMAIL], tel [TEL].
          </p>
        </div>

        <div className="listItem">
          <h3>2) Ce date colectăm</h3>
          <p>
            Nume, telefon, email, localitate/zonă, informații despre teren (după caz), preferințe, mesajul transmis,
            orice date pe care alegi să ni le trimiți.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Scop și temei</h3>
          <p>
            Scop: ofertare, comunicare, planificare servicii, întocmire contract. Temei: demersuri la cererea persoanei
            înainte de contract și/sau interes legitim (gestionarea solicitărilor).
          </p>
        </div>

        <div className="listItem">
          <h3>4) Perioada de stocare</h3>
          <p>
            Păstrăm datele cât este necesar pentru ofertare/contractare și obligații legale. Dacă nu se încheie
            contract, le păstrăm o perioadă rezonabilă pentru corespondență și urmărirea solicitării.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Destinatari</h3>
          <p>
            Furnizori tehnici (hosting, email), colaboratori strict necesari derulării serviciilor (după caz). Nu vindem
            datele tale către terți.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Drepturile tale</h3>
          <p>
            Acces, rectificare, ștergere, restricționare, opoziție, portabilitate și depunerea unei plângeri la ANSPDCP.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Contact GDPR</h3>
          <p>
            Pentru solicitări privind datele personale: [EMAIL GDPR] (sau [EMAIL]).
          </p>
        </div>
      </div>
    </main>
  );
}
