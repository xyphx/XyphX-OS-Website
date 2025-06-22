
import { Button } from "@/components/ui/button";
import { Download, Terminal, Code2, Play, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const { toast } = useToast();

  const handleDownloadClick = () => {
    toast({
      title: "Coming Soon",
      description: "We are at development stage, coming soon!",
      duration: 3000,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-purple-600/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo with enhanced glow */}
        <div className="mb-12 animate-fade-in">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <img 
              src="/lovable-uploads/949082df-7b0f-42f0-9e65-5993990486f5.png" 
              alt="XyphX Logo" 
              className="w-40 h-40 mx-auto mb-6 relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_40px_rgba(168,85,247,1)]"
            />
            <div className="absolute top-4 left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        
        {/* Enhanced main heading */}
        <div className="relative mb-8">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent animate-fade-in hover:scale-105 transition-transform duration-500 cursor-default relative">
            XyphX OS
            <Sparkles className="absolute top-0 right-0 w-8 h-8 text-purple-400 animate-pulse" />
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 blur-3xl animate-pulse"></div>
        </div>
        
        {/* Enhanced subheading */}
        <h2 className="text-3xl md:text-4xl text-gray-200 mb-6 animate-fade-in delay-300 hover:text-purple-200 transition-colors duration-500 cursor-default font-light">
          The Cross‑Platform OS for Developers, Students & Tech Enthusiasts
        </h2>
        
        {/* Enhanced description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto animate-fade-in delay-500 hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          Build, hack and learn anywhere — no environment setup needed.
          <span className="block mt-2 text-purple-400 font-semibold">Experience the future of development.</span>
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-20 animate-fade-in delay-700">
          <Button 
            onClick={handleDownloadClick}
            className="group bg-gradient-to-r from-purple-600 to-purple-700 border-2 border-purple-500 hover:from-purple-500 hover:to-purple-600 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download ISO
            <span className="ml-2 text-sm opacity-75">for VMs/dual-boot</span>
          </Button>
          
          <Button 
            onClick={handleDownloadClick}
            className="group bg-black/80 border-2 border-purple-600 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-purple-800/50 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download for Windows
            <span className="ml-2 text-sm opacity-75">.exe</span>
          </Button>
          
          <Button 
            onClick={handleDownloadClick}
            className="group bg-black/80 border-2 border-purple-600 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-purple-800/50 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download for macOS
            <span className="ml-2 text-sm opacity-75">.dmg</span>
          </Button>
        </div>
        
        {/* Enhanced old-style terminal mockup */}
        <div className="max-w-5xl mx-auto animate-fade-in delay-1000 group">
          <div className="bg-black rounded-lg border-4 border-gray-800 shadow-2xl shadow-purple-500/30 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transition-all duration-700 transform hover:scale-[1.02] relative overflow-hidden font-mono">
            {/* Old terminal header */}
            <div className="flex items-center p-4 border-b-2 border-gray-700 bg-gray-900">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-green-400 text-sm font-bold">
                Terminal - XyphX OS
              </div>
            </div>
            
            {/* Old terminal content with retro styling */}
            <div className="p-6 bg-black text-left space-y-3 text-green-400">
              <div className="flex items-center">
                <span className="text-green-400">callmesidhu@xyphx</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="ml-2 text-green-400">xyphx --version</span>
              </div>
              <div className="text-white pl-4">
                XyphX OS v2.1.0 - Developer Edition
                <div className="text-purple-400 text-sm">🚀 Ready for next-gen development</div>
              </div>
              
              <div className="flex items-center">
                <span className="text-green-400">callmesidhu@xyphx</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="ml-2 text-green-400">code . &</span>
              </div>
              <div className="text-white pl-4">
                Opening VS Code with pre-configured environment...
                <div className="text-green-400 text-sm">✨ All tools ready to go!</div>
              </div>
              
              <div className="flex items-center">
                <span className="text-green-400">callmesidhu@xyphx</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="ml-2 text-green-400">docker --version && node --version</span>
              </div>
              <div className="text-white pl-4">Docker version 24.0.7</div>
              <div className="text-white pl-4">v18.18.0</div>
              
              <div className="flex items-center animate-pulse">
                <span className="text-green-400">callmesidhu@xyphx</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="ml-2 w-2 h-4 bg-green-400 animate-ping"></span>
              </div>
            </div>
            
            {/* Scanline effect for retro terminal look */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
