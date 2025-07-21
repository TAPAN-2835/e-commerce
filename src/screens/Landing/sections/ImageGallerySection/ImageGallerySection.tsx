import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ImageGallerySection = (): JSX.Element => {
  return (
    <section id="about" className="flex flex-col items-start gap-2.5 px-4 lg:px-[42px] py-12 lg:py-[90px] w-full">
      <Card className="w-full border-0 rounded-none shadow-none">
        <CardContent 
          className="flex flex-col h-48 md:h-64 lg:h-[281px] items-center justify-center gap-5 px-4 py-8 lg:py-11 w-full p-0 rounded-lg"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="w-full mt-[-1.00px] font-display-200 font-[number:var(--display-200-font-weight)] text-white text-lg md:text-xl lg:text-[length:var(--display-200-font-size)] text-center tracking-[var(--display-200-letter-spacing)] leading-[var(--display-200-line-height)] [font-style:var(--display-200-font-style)] px-4">
              We&apos;re on a Mission To Clean Up the Industry
            </h2>

            <p className="w-full font-text-400 font-[number:var(--text-400-font-weight)] text-white text-sm md:text-base lg:text-[length:var(--text-400-font-size)] text-center tracking-[var(--text-400-letter-spacing)] leading-[var(--text-400-line-height)] [font-style:var(--text-400-font-style)] px-4">
              Read about our progress in our latest Impact Report.
            </p>
          </div>

          <Button
            variant="default"
            className="w-full max-w-60 h-auto px-4 py-3 rounded-none bg-white hover:bg-white/90 text-x-500 mx-4"
          >
            <span className="font-text-300 font-[number:var(--text-300-font-weight)] text-[length:var(--text-300-font-size)] tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)] [font-style:var(--text-300-font-style)]">
              LEARN MORE
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
