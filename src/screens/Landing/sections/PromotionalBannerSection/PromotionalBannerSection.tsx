import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const PromotionalBannerSection = (): JSX.Element => {
  // Testimonial data for carousel
  const testimonials = [
    {
      quote:
        '"Love this shirt! Fits perfectly and the fabric is thick without being stiff."',
      author: "JonSnSF",
      product: "The Heavyweight Overshirt",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
    },
    // Additional testimonials would be added here
  ];

  return (
    <section id="reviews" className="flex flex-col items-center gap-[30px] w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="w-full">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[74px] px-4 lg:px-[35px] py-6">
                  <div className="flex flex-col items-start gap-6 lg:gap-10 px-4 lg:px-[62px] flex-1">
                    <div className="self-stretch font-text-400 font-[number:var(--text-400-font-weight)] text-x-600 text-[length:var(--text-400-font-size)] tracking-[var(--text-400-letter-spacing)] leading-[var(--text-400-line-height)] [font-style:var(--text-400-font-style)]">
                      People Are Talking
                    </div>

                    <div className="flex flex-col items-start gap-[15px] self-stretch w-full">
                      <div className="inline-flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="self-stretch font-display-100 font-[number:var(--display-100-font-weight)] text-x-600 text-[length:var(--display-100-font-size)] tracking-[var(--display-100-letter-spacing)] leading-[var(--display-100-line-height)] [font-style:var(--display-100-font-style)]">
                        {testimonial.quote}
                        <br />
                      </div>
                    </div>

                    <div className="self-stretch [font-family:'Maison_Neue-Regular',Helvetica] font-normal text-x-600 text-sm leading-[14px]">
                      <span className="tracking-[0.20px] leading-[16.8px]">
                        -- {testimonial.author},{" "}
                      </span>

                      <span className="tracking-[var(--text-300-underline-letter-spacing)] leading-[var(--text-300-underline-line-height)] underline font-text-300-underline [font-style:var(--text-300-underline-font-style)] font-[number:var(--text-300-underline-font-weight)] text-[length:var(--text-300-underline-font-size)]">
                        {testimonial.product}
                      </span>
                    </div>
                  </div>

                  <img
                    className="flex-1 w-full lg:w-auto h-64 md:h-96 lg:h-[695px] object-cover rounded-lg"
                    alt="Product image"
                    src={testimonial.image}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 w-6 h-6 bg-transparent border-none shadow-none hover:bg-gray-100 hidden lg:flex">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </CarouselPrevious>
        <CarouselNext className="right-2 w-6 h-6 bg-transparent border-none shadow-none hover:bg-gray-100 hidden lg:flex">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </CarouselNext>
      </Carousel>

      <div className="flex flex-col items-center gap-8 lg:gap-[73px] px-4 lg:px-[77px] py-0 w-full">
        <div className="inline-flex items-start gap-3">
          {/* Pagination dots */}
          <div className="bg-x-500 w-[7px] h-[7px] rounded-[3.5px]" />
          <div className="bg-x-200 w-[7px] h-[7px] rounded-[3.5px]" />
          <div className="bg-x-200 w-[7px] h-[7px] rounded-[3.5px]" />
          <div className="bg-x-200 w-[7px] h-[7px] rounded-[3.5px]" />
        </div>

        <div className="h-px bg-x-600 w-full" />
      </div>
    </section>
  );
};
