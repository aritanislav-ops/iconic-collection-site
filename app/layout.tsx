import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "iCONiC collection",
  description: "Proiectare personalizată pe fiecare model de casă.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <header className="header">
          <div className="container">
            <div className="nav">
              <Link className="brandLogo" href="/" aria-label="Acasă">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logo-dark.png" alt="iCONiC collection" />
              </Link>

              <nav className="navlinks" aria-label="Navigare">
                <Link href="/">Acasă</Link>
                <Link href="/modele">Modele</Link>
                <Link href="/pachete">Pachete</Link>
                <Link href="/proces">Proces</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="container" style={{ display: "flex", gap: 16, justifyContent: "space-between", flexWrap: "wrap" }}>
            <div>
              <div>© {new Date().getFullYear()} iCONiC collection</div>
              <div style={{ marginTop: 6 }}>
                <div>[DENUMIRE FIRMĂ] [SRL/PFA]</div>
                <div>CUI: [CUI] · Reg. Com.: [NR] · Sediu: [ADRESĂ]</div>
                <div>Email: [EMAIL] · Tel: [TEL]</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-start" }}>
              <Link href="/termeni">Termeni</Link>
              <Link href="/confidentialitate">Confidențialitate</Link>
              <Link href="/cookies">Cookies</Link>

              {/* link-uri externe uzuale (le poți scoate dacă nu vrei) */}
              <a href="https://anpc.ro/" target="_blank" rel="noreferrer">ANPC</a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">SOL</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
