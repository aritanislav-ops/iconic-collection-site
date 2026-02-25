export const metadata = { title: "Termeni și condiții | iCONiC collection" };

export default function TermeniPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="pageTitle">Termeni și condiții</h1>
        <p className="pageLead">
          Site informativ pentru prezentarea serviciilor și trimiterea unei cereri de ofertă.
        </p>

        <div className="list">
          <div className="listItem">
            <h3>1. Scop</h3>
            <p>Conținutul are rol informativ. Trimiterea unei cereri nu reprezintă ofertă fermă.</p>
          </div>

          <div className="listItem">
            <h3>2. Ofertare și contractare</h3>
            <p>Serviciile se prestează doar pe bază de contract semnat între părți.</p>
          </div>

          <div className="listItem">
            <h3>3. Limitarea răspunderii</h3>
            <p>
              Informațiile generale pot fi actualizate. Pentru soluții finale se aplică documentația
              contractată și normele în vigoare.
            </p>
          </div>

          <div className="listItem">
            <h3>4. Drepturi de autor</h3>
            <p>
              Randările, planșele și materialele publicate sunt protejate de drepturi de autor și nu
              pot fi reproduse fără acord.
            </p>
          </div>

          <div className="listItem">
            <h3>5. Contact</h3>
            <p>Detaliile complete ale operatorului sunt în pagina Contact și în footer.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
