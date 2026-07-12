import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";

import HeroSection from "@/components/home/HeroSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <HeroSection />
      <WhyChooseUsSection />

      <CategoriesSection />
      <FeaturedProductsSection />
    </main>
  );
}
