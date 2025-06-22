import { Github, Linkedin, Globe } from "lucide-react";

export const Community = () => {
  return (
    <section className="pt-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
          Join Our Community
        </h2>

        <p className="text-xl text-gray-400 mb-12 hover:text-gray-300 transition-colors duration-300">
          Connect with developers, contribute to the project, and stay updated with the latest features
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="https://github.com/xyphx/XyphX-OS"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/60 backdrop-blur-md rounded-xl p-8 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <Github className="w-12 h-12 text-gray-400 group-hover:text-green-400 transition-all duration-300 mx-auto mb-4 group-hover:scale-125" />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
              GitHub Repository
            </h3>
            <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
              Contribute to XyphX OS development
            </p>
          </a>

          <a
            href="https://linkedin.com/company/xyphx"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/60 backdrop-blur-md rounded-xl p-8 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <Linkedin className="w-12 h-12 text-gray-400 group-hover:text-green-400 transition-all duration-300 mx-auto mb-4 group-hover:scale-125" />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
              LinkedIn Company
            </h3>
            <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
              Follow us for updates and news
            </p>
          </a>

          <a
            href="https://xyphx.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/60 backdrop-blur-md rounded-xl p-8 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <Globe className="w-12 h-12 text-gray-400 group-hover:text-green-400 transition-all duration-300 mx-auto mb-4 group-hover:scale-125" />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
              XyphX Parent Company
            </h3>
            <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
              Discover our full ecosystem
            </p>
          </a>
        </div>
      </div>   <div className="text-center mt-8 pt-8 border-t border-green-500/20">
          <p className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">
            © 2024 XyphX. All rights reserved.
          </p>
        </div>
   
    </section>
  );
};
