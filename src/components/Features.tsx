import { Shield, Zap, Brain, Wrench, Wifi, Rocket } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Open Source",
    description: "Built with security in mind, fully transparent",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Boot & Lightweight",
    description: "Optimized for speed and minimal resource usage",
  },
  {
    icon: Brain,
    title: "Smart UI/UX",
    description: "Intuitive interface designed for productivity",
  },
  {
    icon: Wrench,
    title: "One-Stop Dev Suite",
    description: "Everything you need for development in one place",
  },
  {
    icon: Wifi,
    title: "Always Internet‑Ready",
    description: "Seamless connectivity and cloud integration",
  },
  {
    icon: Rocket,
    title: "Performance Optimized",
    description: "Maximum efficiency for demanding development tasks",
  },
];

export const Features = () => {
  return (
    <section
      className="py-24 px-6 backdrop-blur-sm border-y"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderColor: "rgba(26,181,28,0.2)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default"
          style={{
            backgroundImage: "linear-gradient(to right, #1ab51c, #0f7f14)",
          }}
        >
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                border: "2px solid rgba(26,181,28,0.3)",
                animationDelay: `${index * 150}ms`,
                boxShadow: "0 0 0 transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 35px rgba(26,181,28,0.4)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 transparent")
              }
            >
              <div className="mb-6 flex justify-center relative">
                <div
                  className="p-4 rounded-full transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: "rgba(26,181,28,0.2)",
                  }}
                >
                  <feature.icon
                    className="w-8 h-8 transition-all duration-500 group-hover:scale-125"
                    style={{
                      color: "#1ab51c",
                    }}
                  />
                </div>
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundColor: "rgba(26,181,28,0.3)",
                  }}
                ></div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-[color:#1ab51c]">
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
