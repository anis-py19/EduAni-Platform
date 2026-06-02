interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

const objectives = [
  {
    icon: "🎯",
    title: "Our Main Goal",
    desc: "Teaching programming and web development in Arabic for free and organized, without any complexity or cost.",
    color: "from-purple-500/20 to-transparent",
    border: "border-purple-500/20",
    badge: "badge-purple",
    badgeText: "Goal #1",
  },
  {
    icon: "🗺️",
    title: "Clear Roadmap",
    desc: "Providing an organized and logical learning path from complete zero to building real Full Stack projects.",
    color: "from-teal-500/20 to-transparent",
    border: "border-teal-500/20",
    badge: "badge-teal",
    badgeText: "Goal #2",
  },
  {
    icon: "🔗",
    title: "Best Resources",
    desc: "Collecting and selecting the best free video courses and educational websites and organizing them in one place.",
    color: "from-pink-500/20 to-transparent",
    border: "border-pink-500/20",
    badge: "badge-pink",
    badgeText: "Goal #3",
  },
  {
    icon: "🌍",
    title: "Arab Community",
    desc: "Serving Arab learners who find it difficult to find organized and high-quality Arabic content.",
    color: "from-orange-500/20 to-transparent",
    border: "border-orange-500/20",
    badge: "badge-orange",
    badgeText: "Goal #4",
  },
];

const whyItems = [
  {
    emoji: "💸",
    title: "Completely Free",
    desc: "No fees, no subscriptions, no locked content.",
  },
  {
    emoji: "🧭",
    title: "Organized & Structured",
    desc: "Clear path so you don't get lost in the sea of information.",
  },
  {
    emoji: "🎥",
    title: "Real Videos",
    desc: "Direct links to the best Arabic YouTube courses.",
  },
  {
    emoji: "⚡",
    title: "Fast & Simple",
    desc: "No annoying ads or complexity — just learning.",
  },
  {
    emoji: "🏆",
    title: "Full Stack",
    desc: "Complete coverage from Frontend to Backend and databases.",
  },
  {
    emoji: "🤝",
    title: "Beginners First",
    desc: "Designed specifically for those with no programming background.",
  },
];

const values = [
  {
    title: "Simplicity",
    desc: "We believe the best education is the simplest and clearest.",
    icon: "✨",
  },
  {
    title: "Free Access",
    desc: "Knowledge is a right for everyone, it shouldn't be behind a paywall.",
    icon: "🎁",
  },
  {
    title: "Quality",
    desc: "We only choose high-quality, trusted, and updated resources.",
    icon: "💎",
  },
  {
    title: "Community",
    desc: "We build for the Arab developers community and we're proud of it.",
    icon: "🌍",
  },
];

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-purple px-4 py-1.5 rounded-full text-sm font-medium">
            About EduAnis
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-5 mb-5">
            The Story of <span className="gradient-text">EduAnis</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            EduAnis was born from a simple idea: learning programming should be
            accessible to everyone in Arabic, organized and clear, without any
            complexity.
          </p>
        </div>

        {/* Story Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">💡</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                How Did the Idea Start?
              </h2>
              <span className="badge-purple px-3 py-1 rounded-full text-xs">
                True Story
              </span>
            </div>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed text-base">
            <p>
              Many Arab learners want to learn programming but get lost at the
              beginning — they don't know where to start, what to learn first,
              or which resources are truly worth their time.
            </p>
            <p>
              EduAnis was created to solve exactly this problem. Instead of
              spending weeks searching for the right learning path, you'll find
              a clear and organized roadmap that guides you step by step from
              beginner to developer.
            </p>
            <p>
              The idea behind this platform comes from my own experience. When I
              started learning programming, I faced the same confusion and spent
              a lot of time trying to find the right direction. Because of that
              struggle, I decided to build EduAnis to help others avoid the same
              obstacles and learn more efficiently.
            </p>

            <p>
              Our only goal is{" "}
              <strong className="text-purple-400">teaching programming</strong>.
              Not profit, not ads — just education.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="badge-teal px-4 py-1.5 rounded-full text-sm font-medium">
              What Do We Want to Achieve?
            </span>
            <h2 className="text-3xl font-black text-white mt-4">
              Platform Objectives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 border card-hover bg-gradient-to-br ${obj.color} ${obj.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{obj.icon}</span>
                  <span
                    className={`${obj.badge} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {obj.badgeText}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {obj.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why EduAnis */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="badge-pink px-4 py-1.5 rounded-full text-sm font-medium">
              Why EduAnis?
            </span>
            <h2 className="text-3xl font-black text-white mt-4">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border border-white/7 card-hover text-center"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((val, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border border-white/7 text-center card-hover"
              >
                <div className="text-3xl mb-3">{val.icon}</div>
                <h3 className="text-white font-bold mb-1">{val.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card rounded-3xl p-10 border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-transparent">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-2xl font-black text-white mb-3">
            Ready to Start?
          </h2>
          <p className="text-slate-400 mb-6">
            Start with the roadmap and you'll be a Full Stack developer in
            months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("roadmap")}
              className="btn-primary text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              🗺️ View Roadmap
            </button>
            <button
              onClick={() => setCurrentPage("sources")}
              className="btn-secondary text-slate-300 px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform"
            >
              📖 Browse Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
