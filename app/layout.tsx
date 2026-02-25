import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iCONiC collection",
    template: "%s | iCONiC collection",
  },
  description: "Proiectare personalizată pe modele de case 100 mp+.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <header className="header">
          <div className="container">
            <nav className="nav">
              <Link className="brandLogo" href="/" aria-label="Acasă">
                <img src="/brand/logo-dark.png" alt="iCONiC collection" />
              </Link>

              <div className="navlinks" role="navigation" aria-label="Navigație principală">
                <Link href="/">Acasă</Link>
                <Link href="/modele">Modele</Link>
                <Link href="/pachete">Pachete</Link>
                <Link href="/proces">Proces</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              © {new Date().getFullYear()} iCONiC collection
              <div style={{ color: "var(--muted)", marginTop: 6, lineHeight: 1.4 }}>
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
      </body>
    </html>
  );
}
