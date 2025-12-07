"use client";

import { articleLists } from "@/constants";
import {
  Gallery,
  GalleryItem,
  ImageModal,
} from "@/components/react-tailwind-image-gallery";
import React, { useEffect, useState } from "react";

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
    <div id="gallerySection">
      <Gallery data={articleLists} onImageClick={openModal} />
      <ImageModal data={modalContent} onClose={closeModal} />
    </div>
  );
};

export default GallerySection;
