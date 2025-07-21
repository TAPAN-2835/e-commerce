import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Define categories data for mapping
  const categories = [
    { name: "SHIRTS", image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1" },
    { name: "DENIM", image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1" },
    { name: "TEES", image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1" },
    { name: "PANTS", image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1" },
    { name: "SWEATERS", image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1" },
    { name: "OUTERWEAR", image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1" },
  ];

  return (
    <section id="categories" className="flex flex-col items-center gap-6 lg:gap-[25px] px-4 lg:px-[42px] py-12 lg:py-[90px] w-full">
      <h2 className="font-display-100 font-[number:var(--display-100-font-weight)] text-x-500 text-[length:var(--display-100-font-size)] text-center tracking-[var(--display-100-letter-spacing)] leading-[var(--display-100-line-height)] [font-style:var(--display-100-font-style)]">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-2 w-full">
        {categories.map((category, index) => (
          <Card key={index} className="border-none shadow-none bg-transparent">
            <CardContent className="flex flex-col items-center gap-3 p-0">
              <img
                className="w-full h-40 md:h-52 lg:h-[263px] object-cover rounded-lg"
                alt={`${category.name} category`}
                src={category.image}
              />
              <a
                href="#"
                className="w-full font-text-300-underline font-[number:var(--text-300-underline-font-weight)] text-x-500 text-[length:var(--text-300-underline-font-size)] text-center tracking-[var(--text-300-underline-letter-spacing)] leading-[var(--text-300-underline-line-height)] underline [font-style:var(--text-300-underline-font-style)] hover:text-x-400 transition-colors"
              >
                {category.name}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
