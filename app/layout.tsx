import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import CookieBanner from "./ui/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iconic-collection.ro"),
  title: {
    default: "iCONiC collection | Case premium personalizate, proiectare și coordonare execuție",
    template: "%s | iCONiC collection",
  },
  description:
    "Case premium personalizate pentru terenul clientului. Proiectare completă, documentații pentru autorizare și coordonarea execuției.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://www.iconic-collection.ro",
    siteName: "iCONiC collection",
    title: "iCONiC collection | Case premium personalizate, proiectare și coordonare execuție",
    description:
      "Case premium personalizate pentru terenul clientului. Proiectare completă, documentații pentru autorizare și coordonarea execuției.",
    images: [
      {
        url: "/brand/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "iCONiC collection - case premium personalizate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iCONiC collection | Case premium personalizate, proiectare și coordonare execuție",
    description:
      "Case premium personalizate pentru terenul clientului. Proiectare completă, documentații pentru autorizare și coordonarea execuției.",
    images: ["/brand/og-home.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.iconic-collection.ro/#organization",
      name: "iCONiC collection",
      alternateName: "ICONIC Collection",
      url: "https://www.iconic-collection.ro",
      logo: "https://www.iconic-collection.ro/brand/logo-dark.png",
      email: "contact@iconic-collection.ro",
      parentOrganization: {
        "@type": "Organization",
        name: "A&A Evoconstruct SRL",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.iconic-collection.ro/#website",
      url: "https://www.iconic-collection.ro",
      name: "iCONiC collection",
      inLanguage: "ro-RO",
      publisher: {
        "@id": "https://www.iconic-collection.ro/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <header className="header">
          <div className="container">
            <div className="nav">
              <Link className="brandLogo" href="/" aria-label="Acasă">
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
                  Case premium personalizate pentru terenul clientului. Proiectare completă,
                  documentații pentru autorizare și coordonarea execuției.
                </div>
                <div>
                  CUI: RO 21409238 · Reg. Com.: J2007005795403 · Sediu: Bucuresti, Sector 3,
                  Str. Agatha Barsescu Nr. 15B, Etaj 01, Biroul 7
                </div>
                <div>Email: contact@iconic-collection.ro</div>
              </div>
            </div>

            <nav className="footerLinks" aria-label="Linkuri legale">
              <Link href="/termeni">Termeni</Link>
              <Link href="/confidentialitate">Confidențialitate</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/contact" className="footerContactBtn">Contactează-ne</Link>

              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noreferrer"
                aria-label="SAL ANPC"
                className="footerLogoLink"
              >
                <img className="footerLogo" src="/brand/sol-anpc.png" alt="SAL ANPC" />
              </a>

              <a
                href="https://consumer-redress.ec.europa.eu/index_en"
                target="_blank"
                rel="noreferrer"
                aria-label="SOL UE"
                className="footerLogoLink"
              >
                <img className="footerLogo" src="/brand/sol-ue.png" alt="SOL UE" />
              </a>
            </nav>
          </div>
        </footer>

        <CookieBanner />

        <a
          href="https://wa.me/40741259236?text=Bun%C4%83%20ziua%2C%20sunt%20interesat%20de%20serviciile%20Iconic%20Collection"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            textDecoration: "none",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            width={32}
            height={32}
            alt="WhatsApp"
          />
        </a>
      </body>
    </html>
  );
}
