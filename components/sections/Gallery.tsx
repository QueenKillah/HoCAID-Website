"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages, type GalleryImage } from "@/lib/gallery";

function Lightbox({
  image,
  onClose,
  shouldReduceMotion,
}: {
  image: GalleryImage;
  onClose: () => void;
  shouldReduceMotion: boolean | null;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  const dur = shouldReduceMotion ? 0 : 0.25;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/92 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: dur }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <motion.div
        className="relative max-w-3xl w-full"
        initial={{ scale: shouldReduceMotion ? 1 : 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: shouldReduceMotion ? 1 : 0.93, opacity: 0 }}
        transition={{ duration: dur, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="rounded-xl w-full h-auto"
          unoptimized
        />
        <p className="font-sans text-white/85 text-sm text-center mt-3">
          {image.caption}
        </p>

        <button
          autoFocus
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-navy
                     hover:bg-cream transition-colors shadow-lg
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise"
          onClick={onClose}
          aria-label="Close image"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-3">
              Our Impact
            </p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
              Stories from the Field
            </h2>
          </motion.div>

          {/* Masonry-ish grid using CSS columns */}
          <div className="columns-2 md:columns-3 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.src}
                className="break-inside-avoid mb-4"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : i * 0.08,
                  ease: "easeOut",
                }}
              >
                <button
                  className="block w-full rounded-lg overflow-hidden group relative
                             focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-sunrise focus-visible:ring-offset-2"
                  onClick={() => setSelected(image)}
                  aria-label={`View: ${image.caption}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto rounded-lg"
                    unoptimized
                  />
                  {/* Hover overlay with caption */}
                  <div
                    className="absolute inset-0 rounded-lg bg-navy/0 group-hover:bg-navy/50
                               transition-colors duration-200 flex items-end p-4"
                  >
                    <p
                      className="font-sans text-white text-sm text-left leading-snug
                                 opacity-0 group-hover:opacity-100 translate-y-2
                                 group-hover:translate-y-0 transition-all duration-200"
                    >
                      {image.caption}
                    </p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox
            image={selected}
            onClose={() => setSelected(null)}
            shouldReduceMotion={shouldReduceMotion}
          />
        )}
      </AnimatePresence>
    </>
  );
}
