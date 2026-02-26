export const dynamic = "force-static";

export default function ConfidentialitatePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Politica de confidențialitate</h1>
      <p className="pageLead">
        Această pagină descrie modul în care prelucrăm datele personale atunci când ne contactezi.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Ce date colectăm</h3>
          <p>
            Date de contact (nume, telefon, email) și, dacă este cazul, informații despre proiect (localizare teren, preferințe, cerințe).
          </p>
        </div>

        <div className="listItem">
          <h3>2) Scop</h3>
          <p>
            Răspuns la solicitări, ofertare, pregătirea contractării și comunicarea pe parcursul discuțiilor.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Temei legal</h3>
          <p>
            Demersuri la cererea persoanei înainte de încheierea unui contract și/sau interes legitim pentru a răspunde solicitărilor.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Perioada de stocare</h3>
          <p>
            Păstrăm datele cât este necesar pentru ofertare/contractare și pentru obligații legale; ulterior, le ștergem sau le anonimizăm, după caz.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Destinatari</h3>
          <p>
            Furnizori tehnici (hosting, email). Nu vindem datele.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Drepturile tale</h3>
          <p>
            Acces, rectificare, ștergere, restricționare, opoziție, portabilitate și plângere la autoritatea competentă.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Contact</h3>
          <p>
            Pentru solicitări GDPR: [EMAIL]. Operator: [DENUMIRE FIRMĂ], [ADRESĂ].
          </p>
        </div>
      </div>
    </main>
  );
}
