"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string; href?: string };

interface HeroEyecatchSliderProps {
  images: Slide[];
  intervalMs?: number;
}

export default function HeroEyecatchSlider({ images, intervalMs = 3000 }: HeroEyecatchSliderProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasMultiple = images.length > 1;

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (!hasMultiple) return;
    timerRef.current = setInterval(next, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasMultiple, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="50vw"
            className="object-contain rounded-lg"
            priority={i === index}
          />
        </div>
      ))}
    </div>
  );
}


