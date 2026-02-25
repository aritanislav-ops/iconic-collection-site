export default function PachetePage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Ce oferim</h1>
      <p className="pageLead">Servicii complete, pe faze, cu contract și livrabile clare.</p>

      <div className="list">
        <div className="listItem">
          <h3>1) Ridicare topo</h3>
          <p>Ridicare topografică pentru amplasament (în funcție de cerințele proiectului).</p>
        </div>

        <div className="listItem">
          <h3>2) Studiu geotehnic</h3>
          <p>Investigații geotehnice și recomandări pentru fundare.</p>
        </div>

        <div className="listItem">
          <h3>3) DTAC – Documentație pentru autorizare</h3>
          <p>Documentația necesară pentru autorizarea construcției (după cerințele autorităților).</p>
        </div>

        <div className="listItem">
          <h3>4) PTE (PTh + DE) – Proiect tehnic + detalii de execuție</h3>
          <p>
            Proiect complet pentru execuție, cu detalii incluse și participare la verificări pe șantier
            la faze determinate.
          </p>
        </div>

        <div className="listItem">
          <h3>5) Project Management execuție</h3>
          <p>Planificare, coordonare, control calitate și urmărire pe etape.</p>
        </div>

        <div className="listItem">
          <h3>6) Execuție prin constructori acreditați</h3>
          <p>Execuție realizată cu echipe/constructori acreditați profesional (în baza contractului).</p>
        </div>
      </div>
    </main>
  );
}
