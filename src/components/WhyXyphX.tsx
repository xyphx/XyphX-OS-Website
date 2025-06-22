import { Code2, Zap, Globe, GraduationCap, Briefcase, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Pre‑configured Dev Tools",
    description: "VS Code, Git, Node, Python, Docker, and more — all ready to use"
  },
  {
    icon: Zap,
    title: "Zero Setup Hassle",
    description: "Boot & code in seconds, no configuration needed"
  },
  {
    icon: Globe,
    title: "Cross‑Platform",
    description: "Identical experience on Windows, Mac, or ISO"
  },
  {
    icon: GraduationCap,
    title: "Education‑Ready",
    description: "Ideal for labs, hackathons & exams"
  },
  {
    icon: Briefcase,
    title: "Portable Dev Environments",
    description: "Freelancer & remote-friendly development"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security features for professional use"
  }
];

export const WhyXyphX = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default"
          style={{
            backgroundImage: "linear-gradient(to right, #1ab51c, #127e15)"
          }}
        >
          Why XyphX OS?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black/40 backdrop-blur-md rounded-xl p-8 border-2 transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                borderColor: "rgba(26,181,28,0.3)",
                boxShadow: "0 0 0 transparent"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 40px rgba(26,181,28,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 transparent")
              }
            >
              <div className="mb-6 relative">
                <div
                  className="p-3 rounded-full transition-all duration-300 inline-block"
                  style={{ backgroundColor: "rgba(26,181,28,0.2)" }}
                >
                  <feature.icon
                    className="w-12 h-12 transition-all duration-300 group-hover:scale-125 transform"
                    style={{
                      color: "#1ab51c"
                    }}
                  />
                </div>
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
