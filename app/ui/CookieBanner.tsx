"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent_v1";

type Consent = {
  necessary: boolean;
  analytics: boolean;
};

function loadConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    return {
      necessary: parsed.necessary !== false,
      analytics: parsed.analytics === true,
    };
  } catch {
    return null;
  }
}

function saveConsent(c: Consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  window.dispatchEvent(new Event("cookie-consent-changed"));
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const c = loadConsent();
    if (!c) {
      setOpen(true);
      return;
    }
    setAnalytics(!!c.analytics);
    setOpen(false);
  }, []);

  if (!open) return null;

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true });
    setOpen(false);
  };

  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false });
    setOpen(false);
  };

  const saveSettings = () => {
    saveConsent({ necessary: true, analytics });
    setOpen(false);
  };

  return (
    <div className="cbRoot" role="dialog" aria-label="Preferințe cookies">
      <div className="cbCard">
        <div className="cbTitle">Cookies</div>

        <p className="cbText">
          Folosim cookies esențiale pentru funcționarea site-ului. Opțional, poți accepta cookies de analiză
          (statistici anonime). Detalii în{" "}
          <Link className="cbLink" href="/cookies">
            pagina Cookies
          </Link>
          .
        </p>

        {showSettings ? (
          <div className="cbSettings">
            <div className="cbRow">
              <input type="checkbox" checked readOnly />
              <div>
                <div>Esențiale (obligatorii)</div>
                <div className="cbHint">Necesare pentru funcționarea site-ului.</div>
              </div>
            </div>

            <div className="cbRow">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <div>
                <div>Analiză (Cloudflare Web Analytics)</div>
                <div className="cbHint">Statistici de trafic. Se încarcă doar dacă accepți.</div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="cbActions">
          <button className="cbBtn cbGhost" onClick={rejectAll} type="button">
            Refuz
          </button>

          <button
            className="cbBtn cbGhost"
            onClick={() => setShowSettings((v) => !v)}
            type="button"
          >
            Setări
          </button>

          {showSettings ? (
            <button className="cbBtn cbPrimary" onClick={saveSettings} type="button">
              Salvează
            </button>
          ) : (
            <button className="cbBtn cbPrimary" onClick={acceptAll} type="button">
              Accept
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
