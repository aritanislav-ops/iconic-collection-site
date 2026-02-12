import { site } from "../../content/site";

export default function PachetePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Pachete</h1>
      <p className="pageLead">Alegi nivelul de servicii. Poți contracta pe faze.</p>

      <div className="list">
        {site.pachete.items.slice(1).map((t) => (
          <div key={t} className="listItem">
            <h3>{t}</h3>
            <p>Detalii în funcție de proiect și teren.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
