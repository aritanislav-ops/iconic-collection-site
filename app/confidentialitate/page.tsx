import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate pentru iCONiC collection, brand A&A Evoconstruct SRL.",
  alternates: {
    canonical: "/confidentialitate",
  },
  openGraph: {
    title: "Politica de confidențialitate | iCONiC collection",
    description:
      "Politica de confidențialitate pentru iCONiC collection, brand A&A Evoconstruct SRL.",
    url: "https://www.iconic-collection.ro/confidentialitate",
    images: ["/brand/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politica de confidențialitate | iCONiC collection",
    description:
      "Politica de confidențialitate pentru iCONiC collection, brand A&A Evoconstruct SRL.",
    images: ["/brand/og-home.jpg"],
  },
};

export default function ConfidentialitatePage() {
  return (
    <main className="container legalPage">
      <h1 className="pageTitle">Politica de confidențialitate</h1>
      <p className="pageLead">
        iCONiC collection este un brand A&amp;A Evoconstruct SRL. Această pagină explică
        modul în care prelucrăm datele cu caracter personal colectate prin intermediul site-ului.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Cine este operatorul de date</h3>
          <p>
            Operatorul datelor cu caracter personal prelucrate prin intermediul acestui site este
            A&amp;A Evoconstruct SRL, cu sediul în Sector 3, Str. Agatha Bârsescu Nr. 15B, Etaj 01,
            Biroul 07, București, CUI RO 21409238, Nr. Reg. Com. J2007005795403.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Ce date putem colecta</h3>
          <p>
            Putem prelucra datele pe care ni le transmiți direct, precum nume, adresă de e-mail,
            număr de telefon și conținutul mesajului trimis prin formularul de contact sau prin e-mail.
            În plus, site-ul poate prelucra date tehnice precum adresa IP, informații despre browser,
            dispozitiv și interacțiunea cu site-ul, inclusiv prin instrumente de analiză a traficului.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Cum colectăm datele</h3>
          <p>
            Colectăm datele atunci când completezi formularul de contact, când ne scrii direct
            prin e-mail, când ne contactezi telefonic sau când navighezi pe site. Mesajele transmise
            prin formular pot fi procesate prin servicii terțe utilizate pentru gestionarea solicitărilor
            online, inclusiv Formspree.
          </p>
        </div>

        <div className="listItem">
          <h3>4) Scopurile prelucrării</h3>
          <p>
            Prelucrăm datele pentru a răspunde solicitărilor tale, pentru a comunica în legătură cu
            serviciile oferite, pentru analiza cerințelor transmise, pentru pregătirea unei eventuale
            oferte și pentru administrarea tehnică și statistică a site-ului.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Temeiurile prelucrării</h3>
          <p>
            În funcție de situație, prelucrăm datele în temeiul art. 6 alin. (1) lit. b) din GDPR
            atunci când prelucrarea este necesară pentru demersuri precontractuale sau executarea
            unui contract, în temeiul art. 6 alin. (1) lit. f) pentru interese legitime precum
            securitatea, administrarea și îmbunătățirea site-ului, iar pentru activarea instrumentului
            de statistici în condițiile stabilite de bannerul de pe site, pe baza opțiunii exprimate
            de utilizator.
          </p>
        </div>

        <div className="listItem">
          <h3>6) Statistici de utilizare ale site-ului</h3>
          <p>
            Site-ul poate utiliza Cloudflare Web Analytics pentru a înțelege modul de utilizare a
            site-ului, paginile accesate și alte date agregate de trafic. Acest instrument este
            activat în condițiile stabilite de opțiunile exprimate de utilizator prin bannerul afișat
            pe site.
          </p>
        </div>

        <div className="listItem">
          <h3>7) Cui putem divulga datele</h3>
          <p>
            Putem transmite date către furnizori de servicii utilizați pentru operarea site-ului și
            gestionarea solicitărilor, inclusiv furnizori de hosting, servicii de formulare online,
            servicii de analiză și alți împuterniciți care acționează pentru noi, în măsura necesară.
            Putem divulga date și atunci când avem o obligație legală.
          </p>
        </div>

        <div className="listItem">
          <h3>8) Cât timp păstrăm datele</h3>
          <p>
            Păstrăm datele doar atât cât este necesar pentru scopurile pentru care au fost colectate,
            pentru gestionarea solicitărilor, pentru apărarea drepturilor noastre sau pentru
            respectarea obligațiilor legale aplicabile.
          </p>
        </div>

        <div className="listItem">
          <h3>9) Drepturile tale</h3>
          <p>
            Ai dreptul de acces, rectificare, ștergere, restricționare a prelucrării, opoziție,
            portabilitate, precum și dreptul de a retrage consimțământul, atunci când prelucrarea
            se bazează pe consimțământ. De asemenea, ai dreptul de a depune plângere la
            Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal.
          </p>
        </div>

        <div className="listItem">
          <h3>10) Contact</h3>
          <p>
            Pentru întrebări privind protecția datelor, ne poți contacta la
            {" "}contact@iconic-collection.ro.
          </p>
        </div>
      </div>
    </main>
  );
}
