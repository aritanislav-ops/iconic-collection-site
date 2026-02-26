export default function SALPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">SAL (ANPC) – Soluționarea alternativă a litigiilor</h1>

      <p className="pageLead">
        Dacă ești consumator și ai o nemulțumire legată de serviciile noastre, ai posibilitatea de a apela la mecanismele
        de soluționare alternativă a litigiilor (SAL), fără a merge în instanță.
      </p>

      <div className="card">
        <div className="cardTitle">1) SAL (ANPC) – România</div>
        <p className="cardText">
          Autoritatea competentă: Autoritatea Națională pentru Protecția Consumatorilor (ANPC).
          Poți consulta informațiile oficiale și opțiunile disponibile pe site-ul ANPC.
        </p>

        <p className="cardText">
          <a href="https://anpc.ro/" target="_blank" rel="noreferrer">Deschide ANPC</a>
        </p>

        <p className="cardText" style={{ marginTop: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/sol-anpc.png"
            alt="Pictograme SAL/ODR"
            style={{ maxWidth: 520, width: "100%", height: "auto" }}
          />
        </p>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="cardTitle">2) SOL/ODR (UE)</div>
        <p className="cardText">
          Platforma europeană ODR a fost întreruptă începând cu 20 iulie 2025. Pentru informații actuale despre
          soluționarea litigiilor în UE, folosește pagina oficială de redirecționare:
        </p>
        <p className="cardText">
          <a href="https://consumer-redress.ec.europa.eu/site-relocation_en" target="_blank" rel="noreferrer">
            Consumer Redress (UE) – ODR / relocare
          </a>
        </p>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="cardTitle">3) Datele comerciantului</div>
        <p className="cardText">
          [DENUMIRE FIRMĂ] [SRL/PFA] · CUI: [CUI] · Reg. Com.: [NR] · Sediu: [ADRESĂ] · Email: [EMAIL] · Tel: [TEL]
        </p>
      </div>
    </main>
  );
}
