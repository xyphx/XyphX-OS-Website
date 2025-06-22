export const Terminal = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full animate-fade-in delay-100 group">
        <div
          className="bg-black rounded-lg border-4 border-gray-800 shadow-[0_0_20px_rgba(34,197,94,0.4)]  transition-all duration-500 transform relative overflow-hidden font-mono"
        >
          {/* Terminal Header */}
          <div className="flex items-center p-4 border-b-2 border-gray-700 bg-gray-900">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center text-sm font-bold text-[#1ab51c]">
              Terminal - XyphX OS
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 bg-black text-left space-y-4 text-[#1ab51c]">
            <div>
              <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span> xyphx --version
              <div className="text-white pl-4">XyphX OS v1.1.0 - Developer Edition 🚀</div>
            </div>

            <div>
              <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span> system-check
              <div className="text-white pl-4 space-y-1">
                <div>✔️ Docker Installed</div>
                <div>✔️ Node.js v18.18.0</div>
                <div>✔️ Git version 2.41.0</div>
                <div>✔️ Python 3.11.2</div>
                <div>✔️ VS Code Configured</div>
              </div>
            </div>

            <div>
              <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span> ls ~/projects
              <div className="text-white pl-4">
                <code>
                  <span className="text-[#1ab51c]">get-warranty/</span>{" "}
                  <span className="text-[#1ab51c]">blind-dating-app/</span>{" "}
                  <span className="text-[#1ab51c]">cyfix-os/</span>{" "}
                  <span className="text-[#1ab51c]">portfolio-v2/</span>
                </code>
              </div>
            </div>

            <div>
              <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span> npx create-react-app dashboard
              <div className="text-white pl-4">
                ✨ Creating a new React app in <span className="text-[#1ab51c]">./dashboard</span>
                <br />
                ⬇️ Installing packages...
                <br />
                ✅ Setup complete!
              </div>
            </div>

            {/* Blinking cursor */}
            <div className="flex items-center">
              <span>callmesidhu@xyphx</span>:<span className="text-white">~$</span>
              <span className="ml-2 w-1 h-4 animate-pulse bg-[#1ab51c]"></span>
            </div>
          </div>

          {/* Subtle scanline */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent animate-pulse"
              style={{
                background: "linear-gradient(to bottom, transparent, #1ab51c0a, transparent)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
