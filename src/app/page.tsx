import Intro from "@/components/intro";
import FeaturedWork from "@/components/FeaturedWork";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <FeaturedWork />
      <Faq />
    </main>
  );
}
