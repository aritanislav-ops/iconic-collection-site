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
  const [i, setI] = useState(startIndex);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevWidth = document.body.style.width;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + list.length) % list.length);
      if (e.key === "ArrowRight") setI((v) => (v + 1) % list.length);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);

      document.body.style.overflow = prevOverflow;
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.width = prevWidth;

      window.scrollTo(0, scrollY);
    };
  }, [open, list.length, onClose]);

  if (!open || list.length === 0) return null;

  const canNav = list.length > 1;
  const src = list[i];

  return createPortal(
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
    </div>,
    document.body
  );
