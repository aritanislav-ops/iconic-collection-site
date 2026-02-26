export default function TermeniPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Termeni și condiții</h1>

      <p className="pageLead">
        Acest site are scop informativ și permite trimiterea unei cereri de ofertă pentru servicii de proiectare și/sau
        management/executie (după caz). Nu reprezintă un magazin online.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Ce oferim prin site</h3>
          <p>
            Informații despre modele, servicii, proces și posibilitatea de a solicita o ofertă (prin contact/formular).
          </p>
        </div>

        <div className="listItem">
          <h3>2) Cererea de ofertă nu este ofertă fermă</h3>
          <p>
            Trimiterea unei cereri nu creează o obligație contractuală. Oferta finală se transmite separat, după
            clarificarea cerințelor și a datelor de teren.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Contract și livrabile</h3>
          <p>
            Prestarea serviciilor se face doar pe baza unui contract (cu faze, termene, livrabile, preț și condiții
            agreate).
          </p>
        </div>

        <div className="listItem">
          <h3>4) Limitarea răspunderii</h3>
          <p>
            Informațiile de pe site sunt generale. Pot exista diferențe între exemplele prezentate și soluția finală,
            care depinde de teren, cerințe, reglementări urbanistice, avize și verificări.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Drepturi de autor</h3>
          <p>
            Conținutul (texte, randări, imagini, planșe, documentații) este protejat de drepturi de autor.
            Reutilizarea/copierea este permisă doar cu acordul scris al titularului.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Contact</h3>
          <p>
            [DENUMIRE FIRMĂ] [SRL/PFA] · CUI: [CUI] · Reg. Com.: [NR] · Sediu: [ADRESĂ] · Email: [EMAIL] · Tel: [TEL]
          </p>
        </div>
      </div>
    </main>
  );
}
