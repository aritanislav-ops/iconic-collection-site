"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CF_TOKEN = "741128c258bd423e97ab5b8c5bbd27ce";
const CONSENT_KEY = "cookie_consent_v1";

type Consent = {
  necessary: boolean;
  analytics: boolean;
};

function readConsent(): Consent | null {
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

export default function AnalyticsBeacon() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const apply = () => {
      const c = readConsent();
      setEnabled(!!c?.analytics);
    };

    apply();

    const onCustom = () => apply();
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY) apply();
    };

    window.addEventListener("cookie-consent-changed", onCustom);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cookie-consent-changed", onCustom);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={`{"token":"${CF_TOKEN}"}`}
    />
  );
}
