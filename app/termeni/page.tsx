export default function TermeniPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Termeni și condiții</h1>
      <p className="pageLead">
        Acest site are rol informativ și permite trimiterea unei cereri de ofertă pentru servicii.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Ce oferă site-ul</h3>
          <p>
            Prezentarea serviciilor și a modelelor, plus posibilitatea de a solicita o ofertă.
            Informațiile au caracter general.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Cererea de ofertă nu este ofertă fermă</h3>
          <p>
            Mesajele trimise prin formular/e-mail/telefon reprezintă o solicitare. Oferta finală,
            termenii și prețurile se stabilesc ulterior, în scris.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Prestarea serviciilor</h3>
          <p>
            Serviciile se prestează numai pe bază de contract, cu livrabile și termene agreate.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Limitarea răspunderii</h3>
          <p>
            Nu garantăm că informațiile generale de pe site sunt complete pentru orice situație.
            Detaliile tehnice se stabilesc în proiectul efectiv, în funcție de teren, temă,
            reglementări locale și cerințe.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Drepturi de autor</h3>
          <p>
            Toate textele, randările, planșele și documentațiile sunt protejate. Este interzisă
            copierea sau reutilizarea fără acord scris.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Contact</h3>
          <p>
            Pentru clarificări, folosește pagina Contact sau datele din footer.
          </p>
        </div>
      </div>
    </main>
  );
}
