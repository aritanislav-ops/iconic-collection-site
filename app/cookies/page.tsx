export const dynamic = "force-static";

export default function CookiesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Politica de cookies</h1>
      <p className="pageLead">
        Site-ul poate folosi cookies strict necesare pentru funcționare. Dacă activăm analiză/marketing, îți cerem consimțământ.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Cookies strict necesare</h3>
          <p>
            Necesare pentru funcționarea site-ului (ex. preferințe tehnice). Pentru acestea nu este necesar consimțământ.
          </p>
        </div>

        <div className="listItem">
          <h3>2) Cookies de analiză / marketing</h3>
          <p>
            Dacă folosim (ex. Google Analytics / Meta Pixel / YouTube / Maps / reCAPTCHA), acestea se activează doar după consimțământ, printr-un banner de cookie-uri.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Control</h3>
          <p>
            Îți poți modifica preferințele din banner (dacă este activ) și/sau din setările browserului.
          </p>
        </div>
      </div>
    </main>
  );
}
