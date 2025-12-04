import React from "react";
import { Icon } from "@iconify/react";

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  desc: string;
  span?: string;
}

interface GalleryProps {
  data: GalleryItem[];
  onImageClick: (data: GalleryItem) => void;
}

interface ImageModalProps {
  data: GalleryItem | null;
  onClose: () => void;
}

export function Gallery({ data, onImageClick }: GalleryProps) {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((img) => (
            <div
              key={img.id}
              className={`group cursor-pointer relative overflow-hidden rounded-lg ${img.span}`}
              onClick={() => onImageClick(img)}
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70" />
              <div className="absolute right-2 top-2">
                <Icon
                  icon="ci:expand"
                  className="size-4 text-gray-300 group-hover:size-6 transition-all duration-300 ease-in-out"
                />
              </div>
              <img
                src={img.src}
                alt={img.title}
                className="gallery-img w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-4 left-4 flex items-end text-white text-lg font-medium">
                {img.title}
              </div> */}
              <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageModal({ data, onClose }: ImageModalProps) {
  if (!data) return null;

  return (
    <div
      id="imageModal"
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-100 opacity-100"
      onClick={onClose}
    >
      <button className="absolute top-2 right-8 text-4xl font-semibold text-white">
        x
      </button>
      {/* <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-16"> */}
      <img
        src={data.src}
        alt={data.title}
        className="rounded-lg w-[70%] h-[90%]"
        onClick={(e) => e.stopPropagation()}
      />
      {/* <div className="text-white">
          <p className="text-2xl font-semibold">{data.title}</p>
          <p>{data.desc}</p>
        </div> */}
      {/* </div> */}
    </div>
  );
}
