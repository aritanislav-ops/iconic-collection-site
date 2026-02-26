"use client";

import React, { useEffect, useMemo, useState } from "react";

type Props = {
  open: boolean;
  images: string[];
  startIndex?: number;
  onClose: () => void;
};

export default function Lightbox({ open, images, startIndex = 0, onClose }: Props) {
  const safeImages = useMemo(() => (images || []).filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    const s = Number.isFinite(startIndex) ? startIndex : 0;
    setIdx(Math.min(Math.max(s, 0), Math.max(safeImages.length - 1, 0)));
  }, [open, startIndex, safeImages.length]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, idx, safeImages.length]);

  if (!open || safeImages.length === 0) return null;

  const total = safeImages.length;
  const src = safeImages[idx];

  function next() {
    setIdx((v) => (v + 1) % total);
  }
  function prev() {
    setIdx((v) => (v - 1 + total) % total);
  }

  return (
    <div className="lbRoot" role="dialog" aria-modal="true" aria-label="Galerie imagini">
      <button className="lbBackdrop" type="button" aria-label="Închide" onClick={onClose} />

      <div className="lbStage">
        <button className="lbClose" type="button" aria-label="Închide" onClick={onClose}>
          ×
        </button>

        {total > 1 ? (
          <>
            <button className="lbNav lbPrev" type="button" aria-label="Înapoi" onClick={prev}>
              ‹
            </button>
            <button className="lbNav lbNext" type="button" aria-label="Înainte" onClick={next}>
              ›
            </button>
          </>
        ) : null}

        <img className="lbImg" src={src} alt="" />

        <div className="lbCounter">
          {idx + 1}/{total}
        </div>
      </div>
    </div>
  );
}
