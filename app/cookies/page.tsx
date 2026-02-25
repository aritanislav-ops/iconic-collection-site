export default function CookiesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Politica de cookies</h1>
      <p className="pageLead">
        Site-ul poate folosi cookies strict necesare pentru funcționare. Dacă activezi servicii de analiză
        sau marketing, se pot folosi și cookies nenecesare.
      </p>

      <div className="list">
        <div className="listItem">
          <h3>1) Cookies strict necesare</h3>
          <p>
            Ajută la funcționarea site-ului (securitate, sesiune, preferințe tehnice).
          </p>
        </div>

        <div className="listItem">
          <h3>2) Cookies de analiză/marketing</h3>
          <p>
            Dacă vei folosi Google Analytics / Meta Pixel / embed YouTube / Maps / reCAPTCHA,
            acestea pot seta cookies nenecesare.
          </p>
        </div>

        <div className="listItem">
          <h3>3) Control</h3>
          <p>
            Poți controla cookies din setările browserului. Dacă activezi tracking, e recomandat un banner
            de consimțământ (Accept/Respinge/Setări) și blocare până la consimțământ.
          </p>
        </div>
      </div>
    </main>
  );
}
