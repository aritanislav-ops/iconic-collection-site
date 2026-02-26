"use client";

import React, { useMemo, useState } from "react";
import Lightbox from "./Lightbox";

export default function ModelGallery({ images }: { images: string[] }) {
  const list = useMemo(() => (images || []).filter(Boolean), [images]);
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);

  function openAt(idx: number) {
    setStart(idx);
    setOpen(true);
  }

  return (
    <>
      <div className="modelGallery">
        {list.map((src, idx) => (
          <button key={src + idx} type="button" className="modelGalleryBtn" onClick={() => openAt(idx)} aria-label={`Deschide imaginea ${idx + 1}`}>
            <img className="modelGalleryImg" src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox open={open} images={list} startIndex={start} onClose={() => setOpen(false)} />
    </>
  );
}
