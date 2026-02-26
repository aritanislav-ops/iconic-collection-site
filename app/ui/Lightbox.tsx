"use client";

import React, { useEffect, useMemo, useState } from "react";

type Props = {
  open: boolean;
  images: string[];
  startIndex?: number;
  onClose: () => void;
};

export default function Lightbox({ open, images, startIndex = 0, onClose }: Props) {
  const list = useMemo(() => (images || []).filter(Boolean), [images]);
  const [i, setI] = useState(startIndex);

  useEffect(() => {
    if (!open) return;
    setI(Math.min(Math.max(startIndex, 0), Math.max(list.length - 1, 0)));
  }, [open, startIndex, list.length]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + list.length) % list.length);
      if (e.key === "ArrowRight") setI((v) => (v + 1) % list.length);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, list.length, onClose]);

  if (!open || list.length === 0) return null;

  const canNav = list.length > 1;
  const src = list[i];

  return (
    <div className="lbRoot" role="dialog" aria-modal="true">
      <button className="lbBackdrop" aria-label="Închide" onClick={onClose} />
      <div className="lbStage">
        {canNav ? (
          <button className="lbNav lbPrev" aria-label="Anterior" onClick={() => setI((v) => (v - 1 + list.length) % list.length)}>
            ‹
          </button>
        ) : null}

        <img className="lbImg" src={src} alt="" />

        {canNav ? (
          <button className="lbNav lbNext" aria-label="Următor" onClick={() => setI((v) => (v + 1) % list.length)}>
            ›
          </button>
        ) : null}

        <button className="lbClose" aria-label="Închide" onClick={onClose}>
          ×
        </button>

        <div className="lbCounter">
          {i + 1}/{list.length}
        </div>
      </div>
    </div>
  );
}
