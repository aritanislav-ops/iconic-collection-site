import Link from "next/link";

<footer className="footer">
  <div className="container" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
    <div>
      © {new Date().getFullYear()} iCONiC collection
      <div style={{ color: "var(--muted)", marginTop: 6 }}>
        [DENUMIRE FIRMĂ], [FORMA], CUI [CUI], Reg. Com. [J…], sediu: [ADRESĂ]
        <br />
        [EMAIL] · [TEL]
      </div>
    </div>

    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Link href="/termeni">Termeni</Link>
      <Link href="/confidentialitate">Confidențialitate</Link>
      <Link href="/cookies">Cookies</Link>
    </div>
  </div>
</footer>
