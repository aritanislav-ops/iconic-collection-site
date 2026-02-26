"use client";

import React, { useEffect } from "react";

type Props = {
  open: boolean;
  src: string | null;
  alt?: string;
  onClose: () => void;
};

export default function Lightbox({ open, src, alt = "", onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !src) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <button className="lbClose" type="button" onClick={onClose} aria-label="Închide">
        ×
      </button>

      <div className="lbInner" onMouseDown={(e) => e.stopPropagation()}>
        <img className="lbImg" src={src} alt={alt} />
      </div>
    </div>
  );
}
