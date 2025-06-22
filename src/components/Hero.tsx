import { Button } from "@/components/ui/button";
import { Download, Terminal, Code2, Play, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const { toast } = useToast();

  const handleDownloadClick = () => {
    toast({
      title: "admin@xyphx:~$ ./download.sh",
      description: "Downloads not available yet.\nLaunching soon. Stay tuned!",
      duration: 4000,
      className:
        "bg-black border border-[color:#1ab51c] text-[color:#1ab51c] font-mono text-sm shadow-[0_0_15px_#1ab51c99] animate-fade-in-up whitespace-pre-line",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated BG lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: "#1ab51c33" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-2xl animate-ping"
          style={{ backgroundColor: "#1ab51c1a" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-48 h-48 rounded-full blur-xl animate-pulse delay-500"
          style={{ backgroundColor: "#1ab51c26" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img
            src="/logo_dark.png"
            alt="XyphX Logo"
            className="w-40 h-40 mx-auto mb-6 transition-all duration-700"
          />
        </div>

        {/* Heading */}
        <div className="relative mb-8">
          <h1
            className="text-7xl text-[#1ab51c] md:text-9xl font-bold mb-4  cursor-default relative"
          >
            XyphX OS
            <Sparkles className="absolute top-0 right-0 w-8 h-8" style={{ color: "#1ab51c" }} />
          </h1>
        </div>

        {/* Subheading */}
        <h2 className="text-3xl md:text-4xl text-gray-200 mb-6 animate-fade-in delay-300 hover:text-gray-100 transition-colors duration-500 font-light">
          The Cross‑Platform OS for Developers, Students & Tech Enthusiasts
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto animate-fade-in delay-500 leading-relaxed">
          Build, hack and learn anywhere — no environment setup needed.
          <span className="block mt-2 font-semibold" style={{ color: "#1ab51c" }}>
            Experience the future of development.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-20 animate-fade-in delay-700">
          <Button
            onClick={handleDownloadClick}
            className="group border-2 hover:shadow-[0_0_40px_#1ab51ccc] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
            style={{
              background: "linear-gradient(to right, #1ab51c, #0e8c14)",
              borderColor: "#1ab51c",
            }}
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download ISO
            <span className="ml-2 text-sm opacity-75">for VMs/dual-boot</span>
          </Button>

          <Button
            onClick={handleDownloadClick}
            className="group border-2 transition-all hover:shadow-[0_0_40px_#1ab51ccc] duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              borderColor: "#1ab51c"
            }}
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download for Windows
            <span className="ml-2 text-sm opacity-75">.exe</span>
          </Button>

          <Button
            onClick={handleDownloadClick}
            className="group border-2 transition-all   hover:shadow-[0_0_40px_#1ab51ccc]  duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              borderColor: "#1ab51c"
            }}
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download for macOS
            <span className="ml-2 text-sm opacity-75">.dmg</span>
          </Button>
        </div>

        {/* Terminal */}
        <div className="max-w-5xl mx-auto animate-fade-in delay-1000 group">
          <div className="bg-black rounded-lg border-4 border-gray-800 shadow-2xl transition-all duration-700 transform relative overflow-hidden font-mono">
            {/* Terminal Header */}
            <div className="flex items-center p-4 border-b-2 border-gray-700 bg-gray-900">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1ab51c" }}></div>
              </div>
              <div className="flex-1 text-center text-sm font-bold" style={{ color: "#1ab51c" }}>
                Terminal - XyphX OS
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 bg-black text-left space-y-3" style={{ color: "#1ab51c" }}>
              <div>
                <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span> xyphx --version
              </div>
              <div className="text-white pl-4">
                XyphX OS v1.1.0 - Developer Edition
                <div className="text-sm" style={{ color: "#1ab51c" }}>
                  🚀Ready for next-gen development
                </div>
              </div>

              <div>
                <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span> code . &
              </div>
              <div className="text-white pl-4">
                Opening VS Code with pre-configured environment...
                <div className="text-sm" style={{ color: "#1ab51c" }}>
                  ✨ All tools ready to go!
                </div>
              </div>

              <div>
                <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span> docker --version && node --version
              </div>
              <div className="text-white pl-4">Docker version 24.0.7</div>
              <div className="text-white pl-4">v18.18.0</div>

              <div className="flex items-center">
                <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span>
                <span className="ml-2 w-1 h-3 animate-bounce" style={{ backgroundColor: "#1ab51c" }}></span>
              </div>
            </div>

            {/* Scanline */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent animate-pulse"
                style={{ background: "linear-gradient(to bottom, transparent, #1ab51c0d, transparent)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
