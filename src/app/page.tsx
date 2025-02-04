import Intro from "@/components/intro";
import FeaturedWork from "@/components/FeaturedWork";
import  Faq  from "@/components/faq";
import ImageScroll from "@/components/ImageScroll";
import AboutUs from "@/components/about";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <FeaturedWork />
      <Faq />y
      <ImageScroll />
      <AboutUs />
      <Testimonial />
      <Contact />
    </main>
  );
}
