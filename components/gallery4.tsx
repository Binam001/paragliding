"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonialLists } from "@/constants";
import { Icon } from "@iconify/react";
import ScrollFloat from "./WaveAnimation";

// export interface Gallery4Item {
//   id: string;
//   title: string;
//   description: string;
//   href: string;
//   image: string;
// }

// export interface Gallery4Props {
//   title?: string;
//   description?: string;
//   items: Gallery4Item[];
// }

// const data = [
//   {
//     id: "shadcn-ui",
//     title: "shadcn/ui: Building a Modern Component Library",
//     description:
//       "Exple how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
//     href: "https://ui.shadcn.com",
//     image:
//       "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
//   },
//   {
//     id: "tailwind",
//     title: "Tailwind CSS: The Utility-First Revolution",
//     description:
//       "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
//     href: "https://tailwindcss.com",
//     image:
//       "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
//   },
//   {
//     id: "astro",
//     title: "Astro: The All-in-One Web Framework",
//     description:
//       "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
//     href: "https://astro.build",
//     image:
//       "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
//   },
//   {
//     id: "react",
//     title: "React: Pioneering Component-Based UI",
//     description:
//       "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
//     href: "https://react.dev",
//     image:
//       "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
//   },
//   {
//     id: "nextjs",
//     title: "Next.js: The React Framework for Production",
//     description:
//       "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
//     href: "https://nextjs.org",
//     image:
//       "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
//   },
// ];

const Gallery4 = ({
  title = "Testimonial",
  description = "Discover what our flyers say",
  items = testimonialLists,
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [groupedItems, setGroupedItems] = useState<any[][]>([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any | null>(
    null
  );

  useEffect(() => {
    const itemsPerSlide = 3; // 2 rows * 3 columns
    const result = [];
    for (let i = 0; i < testimonialLists.length; i += itemsPerSlide) {
      result.push(testimonialLists.slice(i, i + itemsPerSlide));
    }
    setGroupedItems(result);
  }, []);

  const getGridCols = (index: number) => {
    if (index === groupedItems.length - 1) {
      const lastGroupSize = groupedItems[index].length;
      if (lastGroupSize <= 3) return `lg:grid-cols-${lastGroupSize}`;
    }
    return "lg:grid-cols-3";
  };

  const getInitials = (name: string) => {
    if (!name) return "";
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1 && nameParts[0]) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    if (
      nameParts.length > 1 &&
      nameParts[0] &&
      nameParts[nameParts.length - 1]
    ) {
      const firstNameInitial = nameParts[0].charAt(0);
      const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
      return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
    }
    return "";
  };
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="">
      <div className="mx-auto">
        <div className="mb-4 flex items-end justify-between px-4 md:px-8 lg:px-16">
          <div className="flex flex-col justify-center items-center w-full">
            {/* <h2 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
              
            </h2> */}
            <div className="">
              {/* <h2 className="my-2"> */}
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=30%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="my-0 -mb-1 text-white"
              >
                {title}
              </ScrollFloat>
              {/* </h2> */}
            </div>

            <p className="text-zinc-600">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto hover:bg-white"
            >
              <ArrowLeft className="size-5 " />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto hover:bg-white"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full select-none">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              // No specific breakpoints needed here as we control slides manually
            },
          }}
        >
          <CarouselContent>
            {groupedItems.map((group, index) => (
              <CarouselItem key={index}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1 justify-end items-end h-full`}
                >
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 h-max rounded-lg bg-white space-y-4 cursor-pointer"
                      onClick={() => setSelectedTestimonial(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSelectedTestimonial(item)
                      }
                    >
                      <div className="">
                        <p className="line-clamp-8 pr-4">{item.content}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          <div
                            className="shrink-0 size-10 border rounded-full flex items-center justify-center bg-white/20 backdrop-blur-2xl font-semibold"
                            aria-hidden="true"
                          >
                            {getInitials(item.name)}
                          </div>

                          <div className="">
                            <div className="">{item.name}</div>
                            <div className="text-xs text-zinc-500">
                              {item.date}
                            </div>
                          </div>
                        </div>

                        <div className="flex">
                          <Icon
                            icon="material-symbols-light:star-rounded"
                            className="size-6"
                          />
                          <Icon
                            icon="material-symbols-light:star-rounded"
                            className="size-6"
                          />
                          <Icon
                            icon="material-symbols-light:star-rounded"
                            className="size-6"
                          />
                          <Icon
                            icon="material-symbols-light:star-rounded"
                            className="size-6"
                          />
                          <Icon
                            icon="material-symbols-light:star-rounded"
                            className="size-6"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-between gap-2 w-full">
          <div className="w-1/2 text-white">
            <div className="flex items-center gap-1">
              <span>5</span>
              <Icon
                icon="material-symbols-light:star-rounded"
                className="size-6"
              />
            </div>
            <div>
              <p>stars out of 5</p>
            </div>
          </div>
          <div className="space-x-2 w-1/2">
            {groupedItems.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors cursor-pointer ${
                  currentSlide === index ? "bg-white w-5" : "bg-white/50"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/70 z-80 flex items-center justify-center p-4 text-white"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-black/50 backdrop-blur-2xl rounded-xl p-6 md:p-8 max-w-2xl w-full relative animate-in fade-in-90 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-2 right-2 rounded-full"
            >
              <X className="size-5" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="flex items-center mb-4">
              <div
                className="shrink-0 size-12 border rounded-full flex items-center justify-center bg-white/20 backdrop-blur-2xl font-semibold text-lg"
                aria-hidden="true"
              >
                {getInitials(selectedTestimonial.name)}
              </div>
              <div className="pl-4">
                <div className="font-semibold text-lg">
                  {selectedTestimonial.name}
                </div>
                <div className="text-sm text-gray-400">
                  {selectedTestimonial.date}
                </div>
              </div>
            </div>
            <p className="whitespace-pre-wrap">{selectedTestimonial.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export { Gallery4 };
