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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
          Why XyphX OS?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black/40 backdrop-blur-md rounded-xl p-8 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 relative">
                <div className="p-3 rounded-full bg-green-600/20 group-hover:bg-green-500/30 transition-all duration-300 inline-block">
                  <feature.icon className="w-12 h-12 text-green-400 group-hover:text-green-300 transition-all duration-300 group-hover:scale-125 transform" />
                </div>
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
