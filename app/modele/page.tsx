import Link from "next/link";
import { site } from "../../content/site";

export default function ModelePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Modele</h1>
      <p className="pageLead">Catalog 100 mp+. Alege un model și îl adaptăm la teren.</p>

      <div className="list">
        {site.models.map((m) => (
          <div key={m.slug} className="listItem">
            <h3>
              <Link href={`/modele/${m.slug}`}>{m.name}</Link>
            </h3>
            <p>{m.summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
