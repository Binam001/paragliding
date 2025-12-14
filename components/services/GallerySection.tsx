"use client";

import { articleLists } from "@/constants";
import {
  GalleryItem,
  ImageModal,
} from "@/components/react-tailwind-image-gallery";
import { useState, useEffect } from "react";

const GallerySection = () => {
  const [modalContent, setModalContent] = useState<GalleryItem | null>(null);

  const openModal = (data: GalleryItem) => setModalContent(data);
  const closeModal = () => setModalContent(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="activity" className="">
      <p className="text-3xl font-bold mb-4 text-(--color-primary)">
        Activity Gallery
      </p>
      <p className="text-gray-700 mb-4">
        Browse through our gallery to see the incredible moments we've shared
        with our flyers. Each image captures the thrill, beauty, and
        unforgettable memories of paragliding over Pokhara's stunning
        landscapes. Get a glimpse of the adventure that awaits you!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {articleLists.map((img) => (
          <div
            key={img.id}
            className="group cursor-pointer relative overflow-hidden rounded-lg"
            onClick={() => openModal(img)}
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 opacity-100 group-hover:opacity-50 transition-opacity duration-300" />
            <img
              src={img.src}
              alt={img.title}
              className="gallery-img w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      {modalContent && <ImageModal data={modalContent} onClose={closeModal} />}
    </section>
  );
};

export default GallerySection;
