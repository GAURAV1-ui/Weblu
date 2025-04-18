import Intro from "@/components/features/intro";
import FeaturedWork from "@/components/features/featured-work";
import Services from "@/components/features/services";
import AboutUs from "@/components/features/about";
import Testimonial from "@/components/features/testimonial";
import Contact from "@/components/features/contact";
import Brochure from "@/components/shared/brochure";
import FAQ from "@/components/features/faq";

export default function Home() {
  return (
    <main>
      <Intro />
      <FeaturedWork />
      <Services />
      <Brochure/>
      <AboutUs />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
  );
}
