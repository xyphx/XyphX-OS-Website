

export const Terminal = () => {
  return (
    <div className="max-w-5xl animate-fade-in delay-100 group mx-6 md:mx-auto">
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

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent animate-pulse"
            style={{
              background: "linear-gradient(to bottom, transparent, #1ab51c0d, transparent)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
