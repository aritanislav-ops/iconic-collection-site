"use client";

import { useEffect, useState } from "react";

const CF_TOKEN = "741128c258bd423e97ab5b8c5bbd27ce";
const KEY = "cookie_consent_v1";

function loadCloudflareAnalytics() {
  if (document.querySelector('script[data-cf-beacon]')) return;
  const s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_TOKEN }));
  document.head.appendChild(s);
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem(KEY);
    if (!v) setOpen(true);
    if (v === "accept") loadCloudflareAnalytics();
  }, []);

  function accept() {
    localStorage.setItem(KEY, "accept");
    loadCloudflareAnalytics();
    setOpen(false);
  }

  function refuse() {
    localStorage.setItem(KEY, "refuse");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="cbRoot" role="dialog" aria-live="polite" aria-label="Preferințe cookies și confidențialitate">
      <div className="cbCard">
        <div className="cbTitle">Confidențialitate și statistici</div>
        <p className="cbText">
          Folosim un instrument de analiză a traficului pentru statistici de utilizare ale site-ului.
          Poți accepta sau refuza activarea lui.{" "}
          <a className="cbLink" href="/cookies">Detalii</a>
        </p>

        <div className="cbActions">
          <button className="cbBtn cbGhost" type="button" onClick={refuse}>Refuz</button>
          <button className="cbBtn cbPrimary" type="button" onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
}
