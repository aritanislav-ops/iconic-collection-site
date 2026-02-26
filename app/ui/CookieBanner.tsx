"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
};

const STORAGE_KEY = "cookie_consent_v1";

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    if (typeof parsed !== "object" || parsed === null) return null;
    if (parsed.necessary !== true) return null;
    if (typeof parsed.analytics !== "boolean") return null;
    if (typeof parsed.marketing !== "boolean") return null;
    if (typeof parsed.ts !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("cookie-consent-changed"));
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setOpen(true);
      return;
    }
    setOpen(false);
  }, []);

  function acceptAll() {
    writeConsent({ necessary: true, analytics: true, marketing: true, ts: Date.now() });
    setOpen(false);
  }

  function rejectAll() {
    writeConsent({ necessary: true, analytics: false, marketing: false, ts: Date.now() });
    setOpen(false);
  }

  function saveChoices() {
    writeConsent({ necessary: true, analytics, marketing, ts: Date.now() });
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="cbRoot" role="dialog" aria-modal="true" aria-label="Consimțământ cookie-uri">
      <div className="cbCard">
        <div className="cbTitle">Cookie-uri</div>

        <p className="cbText">
          Folosim cookie-uri strict necesare pentru funcționarea site-ului. Opțional, poți permite cookie-uri de analiză și marketing.
          Detalii în <Link href="/cookies" className="cbLink">Politica de cookies</Link> și{" "}
          <Link href="/confidentialitate" className="cbLink">Politica de confidențialitate</Link>.
        </p>

        {showSettings ? (
          <div className="cbSettings">
            <label className="cbRow">
              <input type="checkbox" checked disabled />
              <span>
                Strict necesare <span className="cbHint">(întotdeauna active)</span>
              </span>
            </label>

            <label className="cbRow">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span>Analiză</span>
            </label>

            <label className="cbRow">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
              <span>Marketing</span>
            </label>
          </div>
        ) : null}

        <div className="cbActions">
          <button className="cbBtn cbGhost" type="button" onClick={rejectAll}>
            Refuz
          </button>

          <button
            className="cbBtn cbGhost"
            type="button"
            onClick={() => setShowSettings((v) => !v)}
          >
            Setări
          </button>

          {showSettings ? (
            <button className="cbBtn cbPrimary" type="button" onClick={saveChoices}>
              Salvează
            </button>
          ) : (
            <button className="cbBtn cbPrimary" type="button" onClick={acceptAll}>
              Accept
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
