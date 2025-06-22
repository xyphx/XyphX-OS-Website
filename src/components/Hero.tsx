import { Button } from "@/components/ui/button";
import { Download, Cloud, Sparkles } from "lucide-react";
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

  const handleCloudClick = () => {
    toast({
      title: "admin@xyphx:~$ ./cloud-start.sh",
      description: "Launching XyphX OS in the cloud...\nFeature coming soon!",
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

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12">
          {/* Left Column */}
          <div className="text-center lg:text-left max-w-2xl flex flex-col justify-center">
            <div className="mb-12 animate-fade-in">
              <img
                src="/logo_dark.png"
                alt="XyphX Logo"
                className="w-40 h-40 mx-auto lg:mx-0 mb-6 transition-all duration-700"
              />
            </div>

            <div className="relative mb-8">
              <h1 className="text-7xl text-[#1ab51c] md:text-9xl font-bold mb-4 cursor-default relative">
                XyphX OS
                <Sparkles className="absolute top-0 right-0 w-8 h-8" style={{ color: "#1ab51c" }} />
              </h1>
            </div>

            <h2 className="text-3xl md:text-4xl text-gray-200 mb-6 animate-fade-in delay-300 hover:text-gray-100 transition-colors duration-500 font-light">
              The Cross‑Platform OS for Developers, Students & Tech Enthusiasts
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl animate-fade-in delay-500 leading-relaxed">
              Build, hack and learn anywhere — no environment setup needed.
              <span className="block mt-2 font-semibold" style={{ color: "#1ab51c" }}>
                Experience the future of development.
              </span>
            </p>
          </div>

          {/* Right Column (Buttons) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center animate-fade-in delay-700">
            <div className="flex flex-col gap-6">
              <Button
                onClick={handleDownloadClick}
                className="group border-2 hover:shadow-[0_0_40px_#1ab51ccc] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
                style={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderColor: "#1ab51c",
                }}
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download ISO
                <span className="ml-2 text-sm opacity-75">for VMs/dual-boot</span>
              </Button>

              <Button
                onClick={handleDownloadClick}
                className="group border-2 hover:shadow-[0_0_40px_#1ab51ccc] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
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
                className="group border-2 hover:shadow-[0_0_40px_#1ab51ccc] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
                style={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderColor: "#1ab51c"
                }}
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download for macOS
                <span className="ml-2 text-sm opacity-75">.dmg</span>
              </Button>

              <Button
                onClick={handleCloudClick}
                className="group border-2 hover:shadow-[0_0_40px_#1ab51ccc] transition-all duration-500 px-10 py-6 text-xl font-semibold transform hover:scale-110 min-w-[280px]"
                style={{
                  background: "linear-gradient(to right, #1ab51c, #0e8c14)",
                  borderColor: "#1ab51c",
                }}
              >
                <Cloud className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Try on Cloud
                <span className="ml-2 text-sm opacity-75">beta access</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
