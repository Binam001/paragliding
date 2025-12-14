import HeroSection from "@/components/HeroSection";
import { articleLists } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = articleLists.find((p) => p.slug === slug);

  if (!post) return notFound();

  const numOfArticles = articleLists.length - 1;
  const otherPosts = articleLists
    .filter((p) => p.slug !== slug)
    .slice(0, numOfArticles);

  return (
    <>
      <HeroSection
        text1={`${post.title}:`}
        text2={post.shortDesc}
        link2="Blog"
        link2Href="/blog"
        link={post.title}
      />
      <div className="mt-16 px-4 md:px-8 lg:px-16">
        <main className="px-4 md:px-8 lg:px-16">
          <div className="flex justify-between">
            <article className="">
              <header className="mb-4 lg:mb-6">
                {/* Post Title */}
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                  {post.shortDesc}
                </h1>
              </header>
              <figure className="my-8">
                <Image
                  src={post.src}
                  alt={`Image for ${post.title}`}
                  width={1216}
                  height={684}
                  className="w-full rounded-lg object-cover"
                  priority
                />
              </figure>
              <div className="space-y-4 text-lg">
                <p className="">{post.desc}</p>
                <p className="text-xl font-semibold">{post.descTitle1}</p>
                <p className="">{post.desc1}</p>
                <p className="text-xl font-semibold">{post.descTitle2}</p>
                <p className="">{post.desc2}</p>
                <p className="text-xl font-semibold">{post.descTitle3}</p>
                <p className="">{post.desc3}</p>
              </div>
            </article>
          </div>
        </main>

        {/* Other Articles Section */}
        <aside aria-label="Related articles" className="py-8 lg:py-16">
          <div className="">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Other Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherPosts.map((otherPost) => (
                <Link
                  key={otherPost.slug}
                  href={`/blog/${otherPost.slug}`}
                  className="group h-80 cursor-pointer relative overflow-hidden rounded-lg"
                >
                  <article className="relative h-full">
                    <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 hover:bg-black/30 duration-300 transition-colors" />
                    <div className="absolute right-3 top-3">
                      <Icon
                        icon="solar:arrow-right-up-outline"
                        className="size-8 text-black group-hover:size-9 transition-all duration-300 ease-in-out bg-gray-300 rounded-full p-1"
                      />
                    </div>
                    <img
                      src={otherPost.src}
                      alt={otherPost.title}
                      className="gallery-article w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 flex items-end text-white text-lg font-medium">
                      {otherPost.title}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

// This function helps Next.js know which slugs exist at build time for static generation.
export async function generateStaticParams() {
  return articleLists.map((post) => ({
    slug: post.slug,
  }));
}
