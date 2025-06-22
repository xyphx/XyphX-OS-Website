import { useState } from "react";
import FallingText from "./FallingText";

export const Terminal = () => {
  const [hovered, setHovered] = useState(false);

  const lines = [
    // Prompt + command
    [["green", "callmesidhu@xyphx"], ["white", "~$"], ["white", "xyphx --version"]],
    [["white", "XyphX OS v1.1.0 - Developer Edition 🚀"]],
    [["green", "callmesidhu@xyphx"], ["white", "~$"], ["white", "system-check"]],
    [["white", "✔️ Docker Installed"]],
    [["white", "✔️ Node.js v18.18.0"]],
    [["white", "✔️ Git version 2.41.0"]],
    [["white", "✔️ Python 3.11.2"]],
    [["white", "✔️ VS Code Configured"]],
    [["green", "callmesidhu@xyphx"], ["white", "~$"], ["white", "ls ~/projects"]],
    [["green", "get-warranty/"], ["green", "show-my-skills/"], ["green", "xyphx-os/"], ["green", "landing/"]],
    [["green", "callmesidhu@xyphx"], ["white", "~$"], ["white", "npx create-react-app dashboard"]],
    [["white", "✨ Creating a new React app in ./dashboard"]],
    [["white", "⬇️ Installing packages..."]],
    [["white", "✅ Setup complete!"]],
    [["green", "callmesidhu@xyphx"], ["white", "~$"]],
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="max-w-5xl w-full group">
        <div
          className="relative bg-black rounded-lg border-4 border-gray-800 shadow-[0_0_20px_rgba(34,197,94,0.4)] font-mono overflow-hidden transition-all duration-300"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Falling animation */}
          <FallingText trigger={hovered} />

          {/* Terminal Header */}
          <div className="flex items-center p-4 border-b-2 border-gray-700 bg-gray-900">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="flex-1 text-center text-sm font-bold text-[#1ab51c]">
              Terminal - XyphX OS
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-2 text-sm">
            {lines.map((line, idx) => (
              <div key={idx} className="flex flex-wrap">
                {line.map(([color, word], i) => (
                  <span
                    key={i}
                    className={`terminal-word inline-block mr-2 whitespace-nowrap ${
                      color === "green" ? "text-[#1ab51c]" : "text-white"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
            <div className="flex items-center">
              <span className="terminal-word text-[#1ab51c]">callmesidhu@xyphx</span>
              <span className="terminal-word text-white ml-1">~$</span>
              <span className="w-1 h-4 animate-pulse bg-[#1ab51c] ml-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
