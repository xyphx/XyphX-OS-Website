import { Hero } from "@/components/Hero";
import { WhyXyphX } from "@/components/WhyXyphX";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { Terminal } from "@/components/Terminal";

const Index = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-black text-white">
      {/* Snap sections */}
      <section className="snap-start min-h-screen">
        <Hero />
      </section>

      <section className="snap-start p-10">
        <Terminal />
      </section>

      <section className="snap-start min-h-screen">
        <WhyXyphX />
      </section>

      <section className="snap-start min-h-screen">
        <Features />
      </section>

      <section className="snap-start ">
        <Community />
      </section>
    </div>
  );
};

export default Index;
