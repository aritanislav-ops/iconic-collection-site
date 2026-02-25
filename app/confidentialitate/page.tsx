export default function ConfidentialitatePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Politica de confidențialitate</h1>
      <p className="pageLead">
        Această pagină descrie modul în care prelucrăm datele personale când ne contactezi.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Ce date putem colecta</h3>
          <p>
            Nume, telefon, e-mail, localizare/teren, informații despre proiect (suprafețe, preferințe),
            și orice trimiți voluntar în mesaj.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Scop</h3>
          <p>
            Răspuns la solicitări, ofertare, pregătirea contractării și comunicare pe parcursul proiectului.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Temei legal</h3>
          <p>
            Demersuri la cererea persoanei înainte de încheierea unui contract și/sau interes legitim
            pentru a răspunde solicitărilor.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Perioada de stocare</h3>
          <p>
            Păstrăm datele cât este necesar pentru ofertare/contractare și obligații legale. La cerere,
            putem șterge/anonimiza, dacă nu există obligații de păstrare.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Destinatari</h3>
          <p>
            Furnizori tehnici (hosting e-mail, găzduire site) și, dacă folosești, CRM. Nu vindem datele.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Drepturile tale</h3>
          <p>
            Acces, rectificare, ștergere, restricționare, opoziție, portabilitate și plângere la ANSPDCP.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Contact</h3>
          <p>
            Pentru cereri GDPR, folosește e-mailul din footer.
          </p>
        </div>
      </div>
    </main>
  );
}
