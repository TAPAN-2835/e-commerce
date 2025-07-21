import React from "react";
import { Button } from "../../../../components/ui/button";

export const CustomerReviewsSection = (): JSX.Element => {
  return (
    <section 
      id="hero"
      className="relative w-full bg-cover bg-center py-16 md:py-32 lg:py-[275px] px-4 md:px-8 lg:pl-8 lg:pr-[632px]"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}
    >
      <div className="flex flex-col items-center gap-[30px] w-full max-w-[632px] mx-auto lg:mx-0">
        <div className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="w-full mt-[-1.00px] font-display-500 font-[number:var(--display-500-font-weight)] text-white text-[length:var(--display-500-font-size)] text-center tracking-[var(--display-500-letter-spacing)] leading-[var(--display-500-line-height)] [font-style:var(--display-500-font-style)]">
            Your Cozy Era
          </h2>

          <p className="w-full font-display-100 font-[number:var(--display-100-font-weight)] text-white text-[length:var(--display-100-font-size)] text-center tracking-[var(--display-100-letter-spacing)] leading-[var(--display-100-line-height)] [font-style:var(--display-100-font-style)]">
            Get peak comfy-chic
            <br />
            with new winter essentials.
          </p>
        </div>

        <Button
          variant="default"
          className="w-full max-w-60 h-auto py-3 px-4 rounded-none bg-white hover:bg-white/90"
        >
          <span className="font-text-300 font-[number:var(--text-300-font-weight)] text-x-500 text-[length:var(--text-300-font-size)] text-center tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)] [font-style:var(--text-300-font-style)]">
            SHOP NOW
          </span>
        </Button>
      </div>
    </section>
  );
};
