import { site } from "../../content/site";

export default function ContactPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">{site.contact.title}</h1>
      <p className="pageLead">{site.contact.note}</p>

      <div className="card">
        <div className="cardTitle">Date rapide</div>
        <p className="cardText">
          Telefon: {site.contact.phone}
          <br />
          Email: {site.contact.email}
        </p>
      </div>
    </main>
  );
}
