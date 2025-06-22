
import { Hero } from "@/components/Hero";
import { WhyXyphX } from "@/components/WhyXyphX";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { Terminal } from "@/components/Terminal";


const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-400/5 rounded-full blur-2xl animate-ping"></div>
        </div>
        
        <Hero />
        <Terminal/>
        <WhyXyphX />
        <Features />
        <Community />
      </div>
    </div>
  );
};

export default Index;
