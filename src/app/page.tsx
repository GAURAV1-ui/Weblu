import Intro from "@/components/intro";
import FeaturedWork from "@/components/featuredWork";
import  Faq  from "@/components/faq";
import ImageScroll from "@/components/ImageScroll";
import AboutUs from "@/components/about";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <FeaturedWork />
      <Faq />
      <ImageScroll />
      <AboutUs />
      <Testimonial />
      <Contact />
    </main>
  );
}
