export default function CookiesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Politica de cookies</h1>

      <p className="pageLead">
        Site-ul poate folosi cookie-uri strict necesare pentru funcționare. Dacă activăm servicii de analiză/marketing,
        acestea vor fi setate doar pe baza consimțământului (unde este cazul).
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Cookie-uri strict necesare</h3>
          <p>
            Necesare pentru funcționarea site-ului (de ex. preferințe/funcții de bază). Acestea nu pot fi dezactivate
            din banner dacă sunt esențiale.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Cookie-uri de analiză / marketing (opțional)</h3>
          <p>
            Dacă folosim Google Analytics, Meta Pixel, YouTube/Maps embed, reCAPTCHA etc., acestea pot necesita
            consimțământ și pot fi activate doar după accept.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Control</h3>
          <p>
            Poți controla cookie-urile din setările browserului. Dacă există un banner de consimțământ, îți poți modifica
            preferințele și din acel banner.
          </p>
        </div>
      </div>
    </main>
  );
}
