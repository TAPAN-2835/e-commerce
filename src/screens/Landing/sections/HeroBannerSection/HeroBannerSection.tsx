import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export const HeroBannerSection = (): JSX.Element => {
  // Banner data for easy maintenance and mapping
  const bannerCards = [
    {
      title: "Our Holiday Gift Picks",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
      description: "The best presents for everyone on your list.",
      linkText: "Read More",
    },
    {
      title: "Cleaner Fashion",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
      description:
        "See the sustainability efforts behind each of our products.",
      linkText: "Learn More",
    },
  ];

  return (
    <section id="gallery" className="flex flex-col lg:flex-row flex-wrap gap-5 lg:gap-5 px-4 md:px-6 lg:px-[185px] py-8 md:py-16 lg:py-[90px] w-full">
      {bannerCards.map((card, index) => (
        <Card
          key={`banner-card-${index}`}
          className="flex-1 min-w-full lg:min-w-[280px] border-none shadow-none bg-transparent"
        >
          <CardHeader className="px-0 pt-0">
            <CardTitle className="font-display-100 font-[number:var(--display-100-font-weight)] text-x-500 text-[length:var(--display-100-font-size)] text-center tracking-[var(--display-100-letter-spacing)] leading-[var(--display-100-line-height)] [font-style:var(--display-100-font-style)]">
              {card.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 space-y-5">
            <img
              className="w-full h-64 md:h-[400px] lg:h-[626px] object-cover rounded-lg"
              alt={card.title}
              src={card.image}
            />

            <p className="font-text-300 font-[number:var(--text-300-font-weight)] text-x-500 text-[length:var(--text-300-font-size)] text-center tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)] [font-style:var(--text-300-font-style)]">
              {card.description}
            </p>
          </CardContent>

          <CardFooter className="flex justify-center p-0">
            <button className="px-5 py-[15px] w-full hover:bg-gray-50 transition-colors rounded-lg">
              <span className="font-text-300-underline font-[number:var(--text-300-underline-font-weight)] text-x-500 text-[length:var(--text-300-underline-font-size)] text-center tracking-[var(--text-300-underline-letter-spacing)] leading-[var(--text-300-underline-line-height)] underline [font-style:var(--text-300-underline-font-style)]">
                {card.linkText}
              </span>
            </button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};
