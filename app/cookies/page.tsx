export const metadata = { title: "Politica de cookies | iCONiC collection" };

export default function CookiesPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="pageTitle">Politica de cookies</h1>
        <p className="pageLead">
          Site-ul poate folosi cookie-uri strict necesare funcționării. Dacă activăm analytics/pixel,
          vom afișa un banner de consimțământ.
        </p>

        <div className="list">
          <div className="listItem">
            <h3>1. Ce sunt cookie-urile</h3>
            <p>Fișiere mici stocate în browser pentru funcționare și/sau analiză.</p>
          </div>

          <div className="listItem">
            <h3>2. Cookie-uri necesare</h3>
            <p>Necesare pentru funcționarea site-ului (ex. securitate, preferințe tehnice).</p>
          </div>

          <div className="listItem">
            <h3>3. Cookie-uri nenecesare</h3>
            <p>
              Dacă folosim Google Analytics / Meta Pixel / YouTube / Maps / reCAPTCHA, acestea pot seta
              cookie-uri nenecesare și vor fi controlate prin consimțământ.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
