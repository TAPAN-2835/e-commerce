import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BestSellersSection = (): JSX.Element => {
  // Define the features data to make the code more maintainable
  const features = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      title: "Complimentary Shipping",
      description: "Enjoy free shipping on U.S. orders over $100.",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      title: "Consciously Crafted",
      description: "Designed with you and the planet in mind.",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      title: "Come Say Hi",
      description: "We have 11 stores across the U.S.",
    },
  ];

  return (
    <section id="best-sellers" className="flex flex-col md:flex-row items-start gap-6 lg:gap-1.5 px-4 lg:px-[77px] py-12 lg:py-[90px] w-full">
      {features.map((feature) => (
        <Card
          key={feature.id}
          className="flex-1 border-none shadow-none bg-transparent"
        >
          <CardContent className="flex flex-col items-center gap-5 px-4 lg:px-[55px] py-0">
            <img
              className="w-16 h-16 lg:w-[78px] lg:h-[78px] object-cover rounded-full"
              alt={feature.title}
              src={feature.image}
            />

            <div className="flex flex-col items-center gap-1 w-full">
              <h3 className="w-full mt-[-1.00px] font-text-300-demi font-[number:var(--text-300-demi-font-weight)] text-x-500 text-[length:var(--text-300-demi-font-size)] text-center tracking-[var(--text-300-demi-letter-spacing)] leading-[var(--text-300-demi-line-height)] [font-style:var(--text-300-demi-font-style)]">
                {feature.title}
              </h3>

              <p className="w-full font-text-300 font-[number:var(--text-300-font-weight)] text-x-500 text-[length:var(--text-300-font-size)] text-center tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)] [font-style:var(--text-300-font-style)]">
                {feature.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
