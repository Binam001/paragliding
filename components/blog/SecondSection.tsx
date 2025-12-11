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
              className={`group cursor-pointer relative rounded-lg border border-zinc-300 p-4 space-y-4`}
            >
              {/* <div className="absolute right-3 top-3">
                <Icon
                  icon="solar:arrow-right-up-outline"
                  className="size-8 text-black group-hover:size-9 transition-all duration-300 ease-in-out bg-gray-300 rounded-full p-1"
                />
              </div> */}
              <div className="relative w-full h-[70%]">
                <img
                  src={article.src}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 duration-300 transition-colors rounded-md" />
              </div>
              <div className="">{article.shortDesc}</div>

              <hr className="h-px text-zinc-300" />

              <div className="">
                <button className="flex items-center gap-2 group-hover:text-primary">
                  <span className="text-sm">Read Full Article</span>
                  <Icon icon="solar:arrow-right-outline" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
