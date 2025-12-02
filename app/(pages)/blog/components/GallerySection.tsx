"use client";

import { Gallery, ImageModal } from "@/components/react-tailwind-image-gallery";
import React, { useEffect, useState } from "react";

const galleryData = [
  {
    id: 1,
    src: "/images/blog/blog1.jpg",
    alt: "Phewa Lake",
    title: "Phewa Lake",
    span: "col-span-1",
  },
  {
    id: 2,
    src: "/images/blog/blog2.jpg",
    alt: "Sunrise",
    title: "Sunrise",
    span: "sm:col-span-2",
  },
  {
    id: 3,
    src: "/images/blog/blog3.jpg",
    alt: "Machapuchare Mountain",
    title: "Machapuchare Mountain",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "/images/blog/blog4.avif",
    alt: "LakeSide night view",
    title: "LakeSide night view",
    span: "col-span-2",
  },
  {
    id: 5,
    src: "/images/blog/blog5.webp",
    alt: "White Gumba",
    title: "White Gumba",
    span: "sm:col-span-1",
  },
  {
    id: 6,
    src: "/images/blog/blog14.jpg",
    alt: "Pilot",
    title: "Pilot",
    span: "col-span-1",
  },
  {
    id: 7,
    src: "/images/blog/blog7.webp",
    alt: "Paragliding",
    title: "Paragliding",
    span: "col-span-1",
  },
  {
    id: 8,
    src: "/images/blog/blog15.jpg",
    alt: "Paragliding",
    title: "Paragliding",
    span: "col-span-1",
  },
  {
    id: 9,
    src: "/images/blog/blog10.jpg",
    alt: "Mountain Range",
    title: "Mountain Range",
    span: "sm:col-span-2",
  },
];

const GallerySection = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Gallery data={galleryData} onImageClick={openModal} />
      <ImageModal src={modalImage} onClose={closeModal} />
    </>
  );
};

export default GallerySection;
