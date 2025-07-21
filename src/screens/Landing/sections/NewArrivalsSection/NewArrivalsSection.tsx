import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const NewArrivalsSection = (): JSX.Element => {
  // Define the carousel items data for easier mapping
  const carouselItems = [
    { backgroundImage: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" },
    { backgroundImage: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" },
    { backgroundImage: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" },
    { backgroundImage: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" },
    { backgroundImage: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" },
  ];

  return (
    <section id="new-arrivals" className="flex flex-col items-center gap-3 px-4 lg:px-[42px] py-0 w-full">
      <div className="flex flex-col items-center gap-6 lg:gap-[25px] pt-12 lg:pt-[90px] pb-0 px-4 lg:px-[54px] w-full border-t border-neutral-800">
        <h2 className="w-full font-display-200 text-x-500 text-[length:var(--display-200-font-size)] text-center tracking-[var(--display-200-letter-spacing)] leading-[var(--display-200-line-height)] [font-style:var(--display-200-font-style)]">
          Everlane On You
        </h2>

        <div className="flex flex-col items-center gap-1 w-full">
          <p className="w-full font-text-300 text-x-500 text-[length:var(--text-300-font-size)] text-center tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)] [font-style:var(--text-300-font-style)]">
            Share your latest look with #EverlaneOnYou for a chance to be
            featured.
          </p>

          <Button
            variant="link"
            className="p-0 h-auto font-text-300-underline text-x-500 text-[length:var(--text-300-underline-font-size)] tracking-[var(--text-300-underline-letter-spacing)] leading-[var(--text-300-underline-line-height)] underline [font-style:var(--text-300-underline-font-style)] hover:text-x-400 transition-colors"
          >
            Add Your Photo
          </Button>
        </div>
      </div>

      <Carousel className="w-full px-4 lg:px-0">
        <CarouselPrevious className="h-10 w-10 p-0 border-none shadow-none hidden md:flex" />

        <CarouselContent className="gap-2 lg:gap-[18px]">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-0">
              <Card
                className="h-32 md:h-40 lg:h-[225px] flex items-start justify-end p-2.5 border-none rounded-lg"
                style={{
                  backgroundImage: `url('${item.backgroundImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="w-6 h-6 lg:w-[30px] lg:h-[30px] bg-white rounded-full p-0 border-none hover:bg-white/90 transition-colors"
                >
                  <ShoppingCartIcon className="h-3 w-3 lg:h-5 lg:w-5" />
                </Button>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="h-10 w-10 p-0 border-none shadow-none hidden md:flex" />
      </Carousel>
    </section>
  );
};
