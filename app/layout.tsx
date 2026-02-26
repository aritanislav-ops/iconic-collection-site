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
          <div className="container footerGrid">
            <div className="footerCompany">
              <div>© {new Date().getFullYear()} iCONiC collection</div>

              <div className="footerMeta">
                <div>A&A Evoconstruct SRL</div>
                <div>
                  CUI: RO 21409238 · Reg. Com.: J2007005795403 · Sediu: Sector 3,
                  Str. Agatha Barsescu Nr.15B, Etaj 01 Biroul 07
                </div>
                <div>Email: office@aa-evoconstruct.ro</div>
              </div>
            </div>

            <nav className="footerLinks" aria-label="Linkuri legale">
              <Link href="/termeni">Termeni</Link>
              <Link href="/confidentialitate">Confidențialitate</Link>
              <Link href="/cookies">Cookies</Link>

              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noreferrer"
                aria-label="SAL (ANPC)"
                className="footerLogoLink"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="footerLogo" src="/brand/legal/anpc-sal.png" alt="SAL (ANPC)" />
              </a>

              <a
                href="https://consumer-redress.ec.europa.eu/index_en"
                target="_blank"
                rel="noreferrer"
                aria-label="SOL (UE) / Consumer Redress"
                className="footerLogoLink"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="footerLogo" src="/brand/legal/sol-ue.png" alt="SOL (UE) / Consumer Redress" />
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
