import SearchPopup from "@/app/components/SearchPopup";
import SliderArea from "@/app/components/SliderArea";
import AboutArea from "@/app/components/AboutArea";
import ServicesArea from "./components/ServicesArea";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";
import AwardArea from "./components/AwardArea";
import PortfolioArea from "./components/PortfolioArea";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import BlogArea from "./components/BlogArea";

export default function Home() {
  return (
    <main>
      <SearchPopup />
      <SliderArea />
      <AboutArea />
      <ServicesArea />
      <Faq />
      <Newsletter />
      <AwardArea />
      <PortfolioArea />
      <Pricing />
      <Testimonials />
      <BlogArea />
    </main>
  );
}
