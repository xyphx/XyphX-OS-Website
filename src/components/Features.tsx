import { Shield, Zap, Brain, Wrench, Wifi, Rocket } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Open Source",
    description: "Built with security in mind, fully transparent"
  },
  {
    icon: Zap,
    title: "Ultra-Fast Boot & Lightweight",
    description: "Optimized for speed and minimal resource usage"
  },
  {
    icon: Brain,
    title: "Smart UI/UX",
    description: "Intuitive interface designed for productivity"
  },
  {
    icon: Wrench,
    title: "One-Stop Dev Suite",
    description: "Everything you need for development in one place"
  },
  {
    icon: Wifi,
    title: "Always Internet‑Ready",
    description: "Seamless connectivity and cloud integration"
  },
  {
    icon: Rocket,
    title: "Performance Optimized",
    description: "Maximum efficiency for demanding development tasks"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-black/60 backdrop-blur-sm border-y border-green-500/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl bg-black/60 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center relative">
                <div className="p-4 rounded-full bg-green-600/20 group-hover:bg-green-500/40 transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-green-400 group-hover:text-green-300 group-hover:scale-125 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
