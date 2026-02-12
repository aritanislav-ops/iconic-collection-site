import { site } from "../../content/site";

export default function ProcesPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">{site.proces.title}</h1>
      <p className="pageLead">Pași clari, revizii controlate, livrabile pe faze.</p>

      <div className="list">
        {site.proces.items.map((it) => (
          <div key={it.title} className="listItem">
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
