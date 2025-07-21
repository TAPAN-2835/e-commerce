import React from "react";
import { BestSellersSection } from "./sections/BestSellersSection";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { FeaturedItemsSection } from "./sections/FeaturedItemsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { MainContentSection } from "./sections/MainContentSection";
import { NewArrivalsSection } from "./sections/NewArrivalsSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { PromotionalBannerSection } from "./sections/PromotionalBannerSection";

export const Landing = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
      <CustomerReviewsSection />
      <MainContentSection />
      <FeaturedItemsSection />
      <ImageGallerySection />
      <ProductShowcaseSection />
      <PromotionalBannerSection />
      <HeroBannerSection />
      <NewArrivalsSection />
      <BestSellersSection />
      <FooterSection />
    </div>
  );
};
