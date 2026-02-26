export const dynamic = "force-static";

export default function TermeniPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Termeni și condiții</h1>
      <p className="pageLead">
        Acest site are rol informativ și permite trimiterea unei cereri de ofertă pentru servicii.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Despre site</h3>
          <p>
            Conținutul (texte, imagini, randări, descrieri) are caracter informativ. Serviciile sunt furnizate în baza unui contract.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Cererea de ofertă</h3>
          <p>
            Trimiterea unei cereri prin formular/email/telefon reprezintă o solicitare de ofertă și nu constituie o ofertă fermă. O ofertă fermă și condițiile comerciale se stabilesc prin contract.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Contractare și livrabile</h3>
          <p>
            Prestarea serviciilor (proiectare, documentații, management etc.) se face doar pe baza unui contract, cu livrabile, termene și responsabilități clar definite.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Limitarea răspunderii</h3>
          <p>
            Informațiile generale de pe site pot fi actualizate fără notificare. Nu garantăm potrivirea unei soluții generale pentru un caz concret; condițiile finale se stabilesc după analiza terenului, cerințelor și documentațiilor (ex. certificat de urbanism).
          </p>
        </div>

        <div className="listItem">
          <h3>5) Drepturi de autor</h3>
          <p>
            Conținutul site-ului (texte, randări, imagini, planșe, documentații) este protejat de drepturi de autor. Orice utilizare fără acord (copiere, republicare, distribuire) este interzisă.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Contact</h3>
          <p>
            Pentru întrebări: [DENUMIRE FIRMĂ] — [EMAIL] / [TEL].
          </p>
        </div>
      </div>
    </main>
  );
}
