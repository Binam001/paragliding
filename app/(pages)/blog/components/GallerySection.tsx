"use client";

import {
  Gallery,
  GalleryItem,
  ImageModal,
} from "@/components/react-tailwind-image-gallery";
import React, { useEffect, useState } from "react";

const galleryData = [
  {
    id: 1,
    src: "/images/blog/blog1.jpg",
    title: "Phewa Lake",
    desc: "A wide-angle shot showing the iconic lake dotted with colorful boats (doongas) and water lilies, framed by mountains. This is Pokhara's centerpiece, often the landing spot for paragliders.",
    span: "col-span-1",
  },
  {
    id: 2,
    src: "/images/blog/blog2.jpg",
    title: "Sunrise",
    desc: "A classic view of the Annapurna range (likely from Sarangkot or another viewpoint) bathed in the warm light of dawn, with traditional mountain homes in the foreground. This captures the serene beauty of the region.",
    span: "sm:col-span-2",
  },
  {
    id: 3,
    src: "/images/blog/blog3.jpg",
    title: "Machapuchare Mountain",
    desc: "A close-up of the distinctive, 'fishtail' peak, a sacred and prominent landmark of Pokhara. Its unique shape is visible from almost everywhere in the city, providing a stunning backdrop for activities like paragliding.",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "/images/blog/blog4.avif",
    title: "LakeSide night view",
    desc: "A captivating nighttime shot of the vibrant Lakeside area reflecting on the water, highlighting the Ferris wheel and the area's lively atmosphere after dark.",
    span: "col-span-2",
  },
  {
    id: 5,
    src: "/images/blog/blog5.webp",
    title: "White Gumba",
    desc: "A photo of a prominent white Buddhist stupa (Gumba or Gompa), likely the World Peace Pagoda (Shanti Stupa) located on a hilltop. This offers panoramic views of the lake and mountains, including the typical take-off and landing zones.",
    span: "sm:col-span-1",
  },
  {
    id: 6,
    src: "/images/blog/blog14.jpg",
    title: "Pilot",
    desc: "A selfie or close-up of a paragliding tandem pilot and a client, both wearing helmets and gear, smiling against the mountain backdrop. This humanizes the experience and builds trust.",
    span: "col-span-1",
  },
  {
    id: 7,
    src: "/images/blog/blog7.webp",
    title: "Paragliding",
    desc: "Two action shots showing paragliders in flight. One highlights the vast, green landscape below, and the other shows a pair of gliders soaring over distinct terraced farmlands, illustrating the exhilarating experience and the scenic flight path.",
    span: "col-span-1",
  },
  {
    id: 8,
    src: "/images/blog/blog15.jpg",
    title: "Paragliding",
    desc: "Two action shots showing paragliders in flight. One highlights the vast, green landscape below, and the other shows a pair of gliders soaring over distinct terraced farmlands, illustrating the exhilarating experience and the scenic flight path.",
    span: "col-span-1",
  },
  {
    id: 9,
    src: "/images/blog/blog10.jpg",
    title: "Mountain Range",
    desc: "A reflection shot across a body of water (likely Phewa Lake) showing the majestic Annapurna and Machhapuchhare peaks clearly defined in the distance. This summarizes the stunning scenery travelers come to enjoy.",
    span: "sm:col-span-2",
  },
];

const GallerySection = () => {
  // const [modalImage, setModalImage] = useState<string | null>(null);
  // const [modelContent, setModalContent] = useState<string | null>(null);
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
      <Gallery data={galleryData} onImageClick={openModal} />
      <ImageModal data={modalContent} onClose={closeModal} />
    </div>
  );
};

export default GallerySection;
