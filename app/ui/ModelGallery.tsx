"use client";

import { useEffect, useState } from "react";

type Props = {
  images: { src: string; alt?: string }[];
};

export default function ModelGallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  function show(i: number) {
    setIdx(i);
    setOpen(true);
  }

  function close() {
    setOpen(false);
  }

  function prev() {
    setIdx((p) => (p - 1 + images.length) % images.length);
  }

  function next() {
    setIdx((p) => (p + 1) % images.length);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  return (
    <>
      <div className="modelGallery">
        {images.map((img, i) => (
          <button key={img.src} type="button" className="modelGalleryBtn" onClick={() => show(i)} aria-label="Mărește imaginea">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="modelGalleryImg" src={img.src} alt={img.alt || ""} />
          </button>
        ))}
      </div>

      {open ? (
        <div className="lbRoot" role="dialog" aria-modal="true">
          <button type="button" className="lbBackdrop" onClick={close} aria-label="Închide" />
          <div className="lbStage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lbImg" src={images[idx]?.src} alt={images[idx]?.alt || ""} />
            {images.length > 1 ? (
              <>
                <button type="button" className="lbNav lbPrev" onClick={prev} aria-label="Anterior">‹</button>
                <button type="button" className="lbNav lbNext" onClick={next} aria-label="Următor">›</button>
                <div className="lbCounter">{idx + 1} / {images.length}</div>
              </>
            ) : null}
            <button type="button" className="lbClose" onClick={close} aria-label="Închide">×</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
