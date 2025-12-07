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
    <div className="mt-24 px-4 md:px-8 lg:px-16">
      <main className="px-4 md:px-8 lg:px-16">
        <div className="flex justify-between px-4 mx-auto max-w-7xl ">
          <article className="">
            <header className="mb-4 lg:mb-6">
              {/* Post Category/Tags */}
              {/* <div className="flex items-center mb-4 space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#F17D2B]/30 text-[#F17D2B] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}

              {/* Post Title */}
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                Article: {post.title}
              </h1>

              {/* Post Meta */}
              {/* <div className="flex items-center text-sm text-gray-500">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div> */}
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
            <p className="lead mb-6">{post.desc}</p>
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
                  {/* <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="text-sm">
                      {new Date(otherPost.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-sm">{otherPost.readTime}</span>
                  </div> */}
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
  );
}

// This function helps Next.js know which slugs exist at build time for static generation.
export async function generateStaticParams() {
  return articleLists.map((post) => ({
    slug: post.slug,
  }));
}
