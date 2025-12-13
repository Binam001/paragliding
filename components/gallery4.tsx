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

const Gallery4 = () => {
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
      <div className="w-full select-none relative">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            carouselApi?.scrollPrev();
          }}
          disabled={!canScrollPrev}
          className="disabled:pointer-events-auto rounded-full bg-primary hover:bg-primary/70 absolute top-1/2 -left-4 -translate-y-1/2 z-10"
        >
          <ArrowLeft className="size-5 text-white" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            carouselApi?.scrollNext();
          }}
          disabled={!canScrollNext}
          className="disabled:pointer-events-auto rounded-full bg-primary hover:bg-primary/70 absolute top-1/2 -right-4 -translate-y-1/2 z-10"
        >
          <ArrowRight className="size-5 text-white" />
        </Button>
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
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1 h-full`}
                >
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 h-max rounded-lg border border-primary/20 flex flex-col items-center gap-4"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="relative">
                        <img
                          src="/images/team/Biru-Bomjan.jpg"
                          alt="profile picture"
                          className="size-52 rounded-full"
                        />
                        <div className="absolute right-0 bottom-0 -rotate-15 font-[Priestacy] text-xl font-semibold">
                          {item.name}
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="line-clamp-8 pr-4">{item.content}</p>
                      </div>

                      {/* <div className="flex items-center justify-between">
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
                      </div> */}
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* <div className="mt-8 flex justify-between gap-2 w-full">
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
        </div> */}
      </div>
    </section>
  );
};

export { Gallery4 };
