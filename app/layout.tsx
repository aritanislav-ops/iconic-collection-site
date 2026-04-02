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
    "Case corect proiectate și executate, personalizate pentru terenul, cerințele și bugetul tău. Proiectare completă, documentații pentru autorizare, execuție urmarita",
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

          {/* Sectiunea SEO adaugata in siguranta */}
          <div className="container" style={{ fontSize: "11px", color: "#888", opacity: 0.7, textAlign: "justify", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #333", lineHeight: "1.5", paddingBottom: "20px" }}>
            <p style={{ marginBottom: "8px" }}>
              <strong>Iconic Collection – Proiectare, Arhitectură și Construcții la Superlativ.</strong> La Iconic Collection, redefinim conceptul de <strong>proiectare case premium</strong> și <strong>proiectare case de lux</strong>. Îți oferim un <strong>catalog proiecte case</strong> vast, creat pentru a satisface orice dorință. Suntem experți în <strong>proiecte complete</strong> și îți punem la dispoziție pachetul <strong>complete case premium</strong> (inclusiv opțiuni <strong>complete case</strong> standard), asigurând o <strong>proiectare și execuție fără griji</strong>. Mai mult, poți beneficia de <strong>proiecte case gratis</strong> dacă alegi serviciul nostru de <strong>execuție A-Z</strong>! Căutările tale pentru un <strong>arhitect proiect casă prețuri</strong> corecte se opresc aici.
            </p>
            <p style={{ marginBottom: "8px" }}>
              Fie că îți dorești <strong>proiecte case 120 150mp</strong> ideale pentru familii, <strong>proiecte case parter</strong>, <strong>proiecte case cu etaj</strong> sau <strong>proiecte case cu mansardă</strong>, avem soluția. Gândim spații inteligente prin <strong>proiecte case pe un nivel</strong>, inclusiv variante extrem de cerute precum <strong>proiecte case pe un nivel cu 3 dormitoare</strong> sau <strong>proiecte case parter cu garaj</strong>. Oferim diversitate totală: de la <strong>proiecte case de top</strong> și <strong>proiecte case moderne</strong>, până la <strong>proiecte case moderne mici</strong>, <strong>proiecte case mici</strong> sau chiar <strong>proiecte case ieftine la țară</strong> pentru case de vacanță.
            </p>
            <p style={{ marginBottom: "8px" }}>
              Inovăm constant pe piața de construcții prin <strong>proiecte case pe structură metalică</strong>, <strong>proiecte case din containere</strong> (oferind conceptul de <strong>casă modulară de locuit</strong> și <strong>premium house case modulare</strong>), dar și <strong>proiecte case mici din lemn</strong> sau clasicele <strong>case din lemn</strong>. Susținem eficiența energetică prin <strong>case pasive la cheie</strong> și ne mândrim cu <strong>case fabricate în România</strong>, adaptabile chiar și pentru norme de tip <strong>proiecte europene 2026</strong>.
            </p>
            <p style={{ marginBottom: "8px" }}>
              Scapă de stresul imens presupus de o <strong>construire casă în regie proprie</strong>. Ca <strong>firmă construcții case la cheie</strong>, garantăm calitatea oferind <strong>case la cheie pe terenul clientului</strong> și transparență absolută pentru <strong>firme de construcții case la cheie prețuri</strong> și <strong>construcții case prețuri</strong>. Analizăm împreună opțiunile, indiferent dacă vizezi <strong>case la cheie până în 30000 euro</strong>, <strong>case la cheie până în 50000 euro</strong> sau ai un buget extins. Realizăm adevărate <strong>proiecte case la cheie</strong> și <strong>case la cheie București</strong>.
            </p>
            <p>
              De ce să mai cauți <strong>case și vile de vânzare</strong>, <strong>case de vânzare București ieftine</strong> sau <strong>case de vânzare Ilfov</strong>? În loc să pierzi timpul filtrând anunțuri de tip <strong>publi24 case de vânzare București</strong> sau <strong>case de vânzare București Ilfov ieftine storia</strong>, alege să construiești exact ce vrei. Fie că alternativele tale erau <strong>case de vânzare București 70000 euro</strong> sau căutai <strong>case noi de vânzare București</strong> și <strong>proiecte imobiliare București</strong>, noi avem propriile <strong>proiecte case de vânzare</strong> cu execuție inclusă. Alege Iconic Collection – de la prima schiță, la predarea cheii!
            </p>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
