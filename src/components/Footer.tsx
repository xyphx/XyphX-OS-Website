import { Github, Linkedin, Twitter, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black/80 backdrop-blur-md border-t-2 border-green-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-300 mb-4 hover:text-green-300 transition-colors duration-300">
            Made with <span className="text-green-400 animate-pulse">💚</span> by developers, for developers.
          </p>
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            Powered by <span className="text-green-400 font-semibold hover:text-green-300 transition-colors duration-300">XyphX</span>
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/xyphx/XyphX-OS"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-black/60 hover:bg-green-600/20 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-all duration-300" />
          </a>

          <a
            href="https://linkedin.com/company/xyphx"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-black/60 hover:bg-green-600/20 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-all duration-300" />
          </a>

          <a
            href="#"
            className="group p-3 rounded-full bg-black/60 hover:bg-green-600/20 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            <Twitter className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-all duration-300" />
          </a>

          <a
            href="https://xyphx.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full bg-black/60 hover:bg-green-600/20 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            <Globe className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-all duration-300" />
          </a>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-green-500/20">
          <p className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">
            © 2024 XyphX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
