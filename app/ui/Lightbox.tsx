"use client";

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  images: string[];
  startIndex?: number;
  onClose: () => void;
};

export default function Lightbox({ open, images, startIndex = 0, onClose }: Props) {
  const list = useMemo(() => (images || []).filter(Boolean), [images]);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!open) return;
    const safeIndex = Math.min(Math.max(startIndex, 0), Math.max(list.length - 1, 0));
    setI(safeIndex);
  }, [open, startIndex, list.length]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (list.length < 2) return;
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

  const content = (
    <div className="lbRoot" role="dialog" aria-modal="true" aria-label="Galerie imagini">
      <button type="button" className="lbBackdrop" aria-label="Închide" onClick={onClose} />
      <div className="lbStage" onClick={(e) => e.stopPropagation()}>
        {canNav ? (
          <button
            type="button"
            className="lbNav lbPrev"
            aria-label="Anterior"
            onClick={() => setI((v) => (v - 1 + list.length) % list.length)}
          >
            ‹
          </button>
        ) : null}

        <img className="lbImg" src={src} alt="" />

        {canNav ? (
          <button
            type="button"
            className="lbNav lbNext"
            aria-label="Următor"
            onClick={() => setI((v) => (v + 1) % list.length)}
          >
            ›
          </button>
        ) : null}

        <button type="button" className="lbClose" aria-label="Închide" onClick={onClose}>
          ×
        </button>

        <div className="lbCounter">
          {i + 1}/{list.length}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
``
