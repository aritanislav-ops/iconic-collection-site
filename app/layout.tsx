import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import CookieBanner from "./ui/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iconic-collection.ro"),
  title: {
    default: "iCONiC collection | Proiectare case, autorizații și execuție",
    template: "%s | iCONiC collection",
  },
  description:
    "Case proiectate și executate corect, personalizate pentru terenul tău, conform reglementărilor urbanistice.
    Proiectare completă pentru casa ta, documentații pentru autorizare, coordonarea specialităților și execuție, adaptate terenului, cerințelor și bugetului tău.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://www.iconic-collection.ro",
    siteName: "iCONiC collection",
    title: "iCONiC collection | Proiectare case, autorizații și execuție",
    description:
      "Proiectare completă pentru case, documentații pentru autorizare, coordonarea specialităților și execuție, adaptate terenului, cerințelor și bugetului tău.",
    images: [
      {
        url: "/brand/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "iCONiC collection - proiectare case, autorizatii si executie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iCONiC collection | Proiectare case, autorizații și execuție",
    description:
      "Proiectare completă pentru case, documentații pentru autorizare, coordonarea specialităților și execuție.",
    images: ["/brand/og-home.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
                <Link href="/pachete">Pașii Proiectului</Link>
                <Link href="/proces">Standardul nostru</Link>
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
                  CUI: RO 21409238 · Reg. Com.: J2007005795403 · Sediu: Bucuresti, Sector 3,
                  Str. Agatha Barsescu Nr.15B, Etaj 01 Biroul 7
                </div>
                <div>Email: contact@iconic-collection.ro</div>
              </div>
            </div>

            <nav className="footerLinks" aria-label="Linkuri legale">
              <Link href="/termeni">Termeni</Link>
              <Link href="/confidentialitate">Confidențialitate</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/contact" className="footerContactBtn">Contactează-ne</Link>

              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noreferrer" aria-label="SAL (ANPC)" className="footerLogoLink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="footerLogo" src="/brand/legal/sol-ue.png" alt="SOL (UE) / Consumer Redress" />
              </a>

              <a href="https://consumer-redress.ec.europa.eu/index_en" target="_blank" rel="noreferrer" aria-label="SOL (UE) / Consumer Redress" className="footerLogoLink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="footerLogo" src="/brand/legal/sol-ue.png" alt="SOL (UE) / Consumer Redress" />
              </a>
            </nav>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
