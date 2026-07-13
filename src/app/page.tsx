import BuyingTipsSection from "@/components/home/BuyingTipsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FAQSection from "@/components/home/FAQSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";

import HeroSection from "@/components/home/HeroSection";
import PopularBrandsSection from "@/components/home/PopularBrandsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <HeroSection />
      <WhyChooseUsSection />

      <CategoriesSection />
      <FeaturedProductsSection />
      <PopularBrandsSection />

      <FAQSection />
      <BuyingTipsSection />
    </main>
  );
}
