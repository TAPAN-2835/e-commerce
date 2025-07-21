import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedItemsSection = (): JSX.Element => {
  // Define featured items data for mapping
  const featuredItems = [
    {
      title: "New Arrivals",
      buttonText: "SHOP THE LATEST",
      backgroundImage: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
    },
    {
      title: "Best-Sellers",
      buttonText: "SHOP YOUR FAVORITES",
      backgroundImage: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
    },
    {
      title: "The Holiday Outfit",
      buttonText: "SHOP OCCASION",
      backgroundImage: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
    },
  ];

  return (
    <section id="featured" className="flex flex-col lg:flex-row items-start gap-3 px-4 lg:px-[42px] py-0 relative self-stretch w-full">
      {featuredItems.map((item, index) => (
        <Card
          key={`featured-item-${index}`}
          className="flex flex-col h-64 md:h-96 lg:h-[534px] items-center justify-center gap-[23px] flex-1 border-none rounded-lg lg:rounded-none w-full"
          style={{ 
            backgroundImage: `url('${item.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <CardContent className="flex flex-col items-center justify-center gap-[23px] p-0 w-full">
            <h2 className="relative self-stretch font-display-400 font-[number:var(--display-400-font-weight)] text-white text-xl md:text-2xl lg:text-[length:var(--display-400-font-size)] text-center tracking-[var(--display-400-letter-spacing)] leading-[var(--display-400-line-height)] [font-style:var(--display-400-font-style)] px-4">
              {item.title}
            </h2>

            <Button
              variant="default"
              className="w-full max-w-60 h-auto rounded-none bg-white text-x-500 hover:bg-white/90 py-3 px-4 mx-4"
            >
              <span className="font-text-300 font-[number:var(--text-300-font-weight)] text-[length:var(--text-300-font-size)] tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)] [font-style:var(--text-300-font-style)]">
                {item.buttonText}
              </span>
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
