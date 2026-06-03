interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const stats = [
  { value: "6+", label: "Technologies Covered", icon: "🛠️" },
  { value: "100%", label: "Free for Everyone", icon: "🎁" },
  { value: "Full Stack", label: "Complete Path", icon: "🚀" },
  { value: "Arabic", label: "Arabic Content", icon: "🌍" },
];

const features = [
  {
    icon: "📚",
    title: "Carefully Selected Resources",
    desc: "Every link and resource has been carefully chosen to be the best and clearest for Arabic learners.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
  },
  {
    icon: "🗺️",
    title: "Clear Roadmap",
    desc: "Structured learning path from zero to becoming a Full Stack developer.",
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/20",
  },
  {
    icon: "🎯",
    title: "Clear Objective",
    desc: "Our only goal is to help you learn programming in the easiest way possible.",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
  },
  {
    icon: "⚡",
    title: "Fast & Effective Learning",
    desc: "We provide the best video courses with simplified explanations of fundamental concepts.",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/20",
  },
];

const techStack = [
  {
    name: "HTML",
    emoji: "🌐",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    name: "CSS",
    emoji: "🎨",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "JavaScript",
    emoji: "⚡",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    name: "React",
    emoji: "⚛️",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "Node.js",
    emoji: "🟢",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    name: "MongoDB",
    emoji: "🍃",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg grid-pattern pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-purple px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            100% Free Arabic Learning Platform
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up">
            Learn Programming with
            <br />
            <span className="gradient-text">Anis Izri</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
            Learn web development step by step from programming basics to
            creating complete web applications, with a clear learning plan,
            trusted Arabic resources, and a comprehensive Full Stack path that
            leads you to professionalism.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button
              onClick={() => setCurrentPage("roadmap")}
              className="btn-primary text-white px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-2 justify-center hover:scale-105 transition-transform"
            >
              🗺️ Start Roadmap
            </button>
            <button
              onClick={() => setCurrentPage("sources")}
              className="btn-secondary text-slate-300 px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-2 justify-center hover:scale-105 transition-transform"
            >
              📖 Browse Resources
            </button>
          </div>

          {/* Code Snippet Decoration */}
          <div className="mt-16 glass-card rounded-2xl p-6 max-w-lg mx-auto text-left animate-float glow-purple">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-slate-500 text-xs font-code ml-2">
                welcome.js
              </span>
            </div>
            <div className="font-code text-sm space-y-1">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-teal-300">student</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">"You"</span>
                <span className="text-white">;</span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-teal-300">goal</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">"Full Stack Dev"</span>
                <span className="text-white">;</span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-teal-300">platform</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">"EduAnis"</span>
                <span className="text-white">;</span>
              </p>
              <p className="mt-2">
                <span className="text-blue-400">console</span>
                <span className="text-white">.</span>
                <span className="text-green-400">log</span>
                <span className="text-white">(</span>
                <span className="text-yellow-300">
                  `Welcome ${"{"}student{"}"}, your journey starts now!`
                </span>
                <span className="text-white">);</span>
              </p>
              <p className="text-slate-500 text-xs mt-2">
                {"// Welcome You, your journey starts now! ✨"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card rounded-2xl p-6 card-hover"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is EduAnis Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-teal px-4 py-1.5 rounded-full text-sm font-medium">
              What is EduAnis?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-4">
              Simple and Effective Learning Platform
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              EduAnis is not a paid course or a huge platform — it's your
              personal guide to learning programming in Arabic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 border card-hover bg-linear-to-br ${feature.color} ${feature.border}`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Preview Section */}
      <section className="py-20 px-4 bg-[#0a0a14]/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-pink px-4 py-1.5 rounded-full text-sm font-medium">
              What Will You Learn?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-4">
              Technologies in the Path
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From your first line of HTML to launching real web applications
              powered by Node.js and databases.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 border card-hover ${tech.bg} flex flex-col items-center gap-3 text-center`}
              >
                <span className="text-4xl">{tech.emoji}</span>
                <span className={`font-bold text-lg ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setCurrentPage("roadmap")}
              className="btn-primary text-white px-8 py-4 rounded-2xl text-base font-bold hover:scale-105 transition-transform"
            >
              🗺️ View Complete Roadmap
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-teal-500/5 glow-purple">
            <div className="text-6xl mb-6 animate-float">🚀</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              No prior experience needed. Just follow the roadmap and you'll get
              there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage("roadmap")}
                className="btn-primary text-white px-8 py-4 rounded-2xl text-base font-bold hover:scale-105 transition-transform"
              >
                🗺️ Start Now
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className="btn-secondary text-slate-300 px-8 py-4 rounded-2xl text-base font-semibold hover:scale-105 transition-transform"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
