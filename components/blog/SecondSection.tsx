"use client";

import { articleLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SecondSection = () => {
  return (
    <div id="articleSection" className="px-4 md:px-8 lg:px-16">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-12">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articleLists.map((article) => (
            <Link
              href={article.slug ? `/blog/${article.slug}` : "#"}
              key={article.id}
              className={`group h-80 cursor-pointer relative overflow-hidden rounded-lg`}
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 hover:bg-black/30 duration-300 transition-colors" />
              <div className="absolute right-3 top-3">
                <Icon
                  icon="solar:arrow-right-up-outline"
                  className="size-8 text-black group-hover:size-9 transition-all duration-300 ease-in-out bg-gray-300 rounded-full p-1"
                />
              </div>
              <img
                src={article.src}
                alt={article.title}
                className="gallery-article w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-end text-white text-lg font-medium">
                {article.title}
              </div>
              {/* <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        Read more...
                      </p>
                    </div> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
