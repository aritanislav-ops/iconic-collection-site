"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  open: boolean;
  images: string[];
  startIndex?: number;
  onClose: () => void;
};

export default function Lightbox({ open, images, startIndex = 0, onClose }: Props) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images]);
  const [idx, setIdx] = useState(startIndex);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  useEffect(() => {
    if (open) setIdx(Math.min(Math.max(startIndex, 0), Math.max(safeImages.length - 1, 0)));
  }, [open, startIndex, safeImages.length]);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  function prev() {
    if (safeImages.length <= 1) return;
    setIdx((v) => (v - 1 + safeImages.length) % safeImages.length);
  }

  function next() {
    if (safeImages.length <= 1) return;
    setIdx((v) => (v + 1) % safeImages.length);
  }

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0]?.clientX ?? null;
    deltaX.current = 0;
  }

  function onTouchMove(e: React.TouchEvent) {
    if (startX.current == null) return;
    const x = e.touches[0]?.clientX ?? startX.current;
    deltaX.current = x - startX.current;
  }

  function onTouchEnd() {
    const dx = deltaX.current;
    startX.current = null;
    deltaX.current = 0;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  }

  if (!open) return null;

  const src = safeImages[idx] || null;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Galerie imagini">
      <button className="lbBackdrop" aria-label="Închide" onClick={onClose} />

      <div className="lbInner" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <button className="lbClose" onClick={onClose} aria-label="Închide">×</button>

        {safeImages.length > 1 ? (
          <>
            <button className="lbNav lbPrev" onClick={prev} aria-label="Înapoi">‹</button>
            <button className="lbNav lbNext" onClick={next} aria-label="Înainte">›</button>
          </>
        ) : null}

        {src ? <img className="lbImg" src={src} alt="" /> : null}

        {safeImages.length > 1 ? (
          <div className="lbCounter">
            {idx + 1} / {safeImages.length}
          </div>
        ) : null}
      </div>
    </div>
  );
}
