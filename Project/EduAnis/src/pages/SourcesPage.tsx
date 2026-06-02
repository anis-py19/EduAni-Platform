import { useState } from "react";

interface SourcesPageProps {
  setCurrentPage: (page: string) => void;
}

type Category = "all" | "html" | "css" | "js" | "react" | "node" | "tools";

const sources = [
  // HTML Sources
  {
    id: 1,
    category: "html" as Category,
    tech: "HTML",
    emoji: "🌐",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    type: "YouTube Video",
    typeIcon: "🎥",
    title: "Complete HTML Course for Beginners",
    author: "Abderahman Gamal",
    description:
      "Complete and comprehensive HTML course from scratch with detailed explanation of every element and how to use it. One of the best Arabic courses ever.",
    url: "https://youtu.be/cvNTgKw8VlY?si=HtFGmlTH9kAOV1hb",
    tags: ["Beginner", "Arabic", "Free"],
    duration: "Full Course",
    recommended: true,
  },
  {
    id: 2,
    category: "html" as Category,
    tech: "HTML",
    emoji: "🌐",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    type: "Interactive Website",
    typeIcon: "🌍",
    title: "W3Schools – HTML Reference",
    author: "W3Schools",
    description:
      "The most famous website for HTML reference with interactive examples. Perfect for reference while learning.",
    url: "https://www.w3schools.com/html/",
    tags: ["Reference", "Interactive", "English"],
    duration: "Permanent Reference",
    recommended: false,
  },
  {
    id: 3,
    category: "html" as Category,
    tech: "HTML",
    emoji: "🌐",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    type: "Official Documentation",
    typeIcon: "📄",
    title: "MDN Web Docs – HTML",
    author: "Mozilla",
    description:
      "The official HTML documentation from Mozilla. The most accurate and comprehensive reference.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tags: ["Reference", "Advanced", "English"],
    duration: "Permanent Reference",
    recommended: false,
  },

  // CSS Sources
  {
    id: 4,
    category: "css" as Category,
    tech: "CSS",
    emoji: "🎨",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    type: "YouTube Video",
    typeIcon: "🎥",
    title: "Complete CSS Course for Beginners",
    author: "Abderahman Gamal",
    description:
      "Comprehensive and organized CSS course covering everything you need from basics to Flexbox, Grid, and Animations.",
    url: "https://youtu.be/h1mNPEjva8U?si=ya_x1LoUVUQFNm0R",
    tags: ["Beginner", "Arabic", "Free"],
    duration: "Full Course",
    recommended: true,
  },
  {
    id: 5,
    category: "css" as Category,
    tech: "CSS",
    emoji: "🎨",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    type: "Educational Game",
    typeIcon: "🎮",
    title: "Flexbox Froggy",
    author: "Codepip",
    description:
      "Learn Flexbox in a fun way through an interactive game. The best way to understand alignment in CSS.",
    url: "https://flexboxfroggy.com/",
    tags: ["Interactive", "Fun", "Flexbox"],
    duration: "30 minutes",
    recommended: false,
  },
  {
    id: 6,
    category: "css" as Category,
    tech: "CSS",
    emoji: "🎨",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    type: "Educational Game",
    typeIcon: "🎮",
    title: "CSS Grid Garden",
    author: "Codepip",
    description:
      "Learn CSS Grid by growing carrots! A great game for understanding the Grid system.",
    url: "https://cssgridgarden.com/",
    tags: ["Interactive", "Fun", "Grid"],
    duration: "30 minutes",
    recommended: false,
  },
  {
    id: 7,
    category: "css" as Category,
    tech: "CSS",
    emoji: "🎨",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    type: "Design Website",
    typeIcon: "✨",
    title: "Tailwind CSS Docs",
    author: "Tailwind Labs",
    description:
      "Official Tailwind CSS documentation. The most used CSS framework in 2024/2025.",
    url: "https://tailwindcss.com/docs",
    tags: ["Framework", "Advanced", "English"],
    duration: "Permanent Reference",
    recommended: false,
  },

  // JavaScript Sources
  {
    id: 8,
    category: "js" as Category,
    tech: "JavaScript",
    emoji: "⚡",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    badge: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    type: "YouTube Series",
    typeIcon: "🎥",
    title: "Complete JavaScript Course",
    author: "Abderahman Gamal",
    description:
      "The most comprehensive Arabic JavaScript course on YouTube. Complete series taking you from your first line of code to advanced concepts.",
    url: "https://www.youtube.com/watch?v=PWuTLTFMtYw&list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE",
    tags: ["Beginner-Advanced", "Arabic", "Free"],
    duration: "Full Series",
    recommended: true,
  },
  {
    id: 9,
    category: "js" as Category,
    tech: "JavaScript",
    emoji: "⚡",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    badge: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    type: "Interactive Book",
    typeIcon: "📚",
    title: "JavaScript.info",
    author: "Ilya Kantor",
    description:
      "The best written reference for learning JavaScript. Detailed explanation of every concept with examples and exercises.",
    url: "https://javascript.info/",
    tags: ["Intermediate", "Comprehensive", "English"],
    duration: "Complete Reference",
    recommended: false,
  },
  {
    id: 10,
    category: "js" as Category,
    tech: "JavaScript",
    emoji: "⚡",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    badge: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    type: "Exercises",
    typeIcon: "🏋️",
    title: "JavaScript30",
    author: "Wes Bos",
    description:
      "30 JavaScript projects in 30 days. The best way to apply what you've learned.",
    url: "https://javascript30.com/",
    tags: ["Practice", "Projects", "Free"],
    duration: "30 days",
    recommended: false,
  },

  // React Sources
  {
    id: 11,
    category: "react" as Category,
    tech: "React",
    emoji: "⚛️",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    type: "Official Documentation",
    typeIcon: "📄",
    title: "React Docs – react.dev",
    author: "Meta / React Team",
    description:
      "The new official React documentation. Very educational and contains excellent interactive exercises.",
    url: "https://react.dev/learn",
    tags: ["Official", "Interactive", "Free"],
    duration: "Complete Reference",
    recommended: true,
  },
  {
    id: 12,
    category: "react" as Category,
    tech: "React",
    emoji: "⚛️",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    type: "YouTube Video",
    typeIcon: "🎥",
    title: "React Tutorial – Crash Course",
    author: "Traversy Media",
    description:
      "Intensive 2-hour React course covering all basic concepts. Perfect for quick start.",
    url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    tags: ["Intensive", "English", "Free"],
    duration: "2 hours",
    recommended: false,
  },

  // Node.js Sources
  {
    id: 13,
    category: "node" as Category,
    tech: "Node.js",
    emoji: "🟢",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    badge: "bg-green-500/10 border-green-500/30 text-green-400",
    type: "YouTube Video",
    typeIcon: "🎥",
    title: "Node.js Full Course",
    author: "Programming With Mosh",
    description:
      "Comprehensive Node.js course covering Express.js and building complete REST APIs.",
    url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
    tags: ["Advanced", "English", "Free"],
    duration: "1.5 hours",
    recommended: true,
  },
  {
    id: 14,
    category: "node" as Category,
    tech: "Node.js",
    emoji: "🟢",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    badge: "bg-green-500/10 border-green-500/30 text-green-400",
    type: "Official Documentation",
    typeIcon: "📄",
    title: "Node.js Official Docs",
    author: "Node.js Foundation",
    description:
      "Official Node.js documentation. Essential reference for any Backend developer.",
    url: "https://nodejs.org/en/docs",
    tags: ["Official", "Reference", "English"],
    duration: "Permanent Reference",
    recommended: false,
  },
  {
    id: 15,
    category: "node" as Category,
    tech: "MongoDB",
    emoji: "🍃",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    type: "Official Platform",
    typeIcon: "📚",
    title: "MongoDB University",
    author: "MongoDB",
    description:
      "Free MongoDB courses from the official source. Includes Aggregation and Atlas Cloud.",
    url: "https://learn.mongodb.com/",
    tags: ["Official", "Free", "Certificate"],
    duration: "Multiple Courses",
    recommended: true,
  },

  // Tools & Resources
  {
    id: 16,
    category: "tools" as Category,
    tech: "Tools",
    emoji: "🛠️",
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    badge: "bg-slate-500/10 border-slate-500/30 text-slate-400",
    type: "Training Platform",
    typeIcon: "💻",
    title: "freeCodeCamp",
    author: "freeCodeCamp",
    description:
      "100% free educational platform with certified certificates. Covers everything you need from HTML to Python.",
    url: "https://www.freecodecamp.org/",
    tags: ["Free", "Certificate", "Interactive"],
    duration: "Hundreds of hours",
    recommended: true,
  },
  {
    id: 17,
    category: "tools" as Category,
    tech: "Tools",
    emoji: "🛠️",
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    badge: "bg-slate-500/10 border-slate-500/30 text-slate-400",
    type: "Training Platform",
    typeIcon: "💻",
    title: "The Odin Project",
    author: "The Odin Project",
    description:
      "Free and integrated learning path for Full Stack web development. One of the best English resources.",
    url: "https://www.theodinproject.com/",
    tags: ["Free", "Full Stack", "Organized"],
    duration: "Complete Path",
    recommended: false,
  },
  {
    id: 18,
    category: "tools" as Category,
    tech: "Tools",
    emoji: "🛠️",
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    badge: "bg-slate-500/10 border-slate-500/30 text-slate-400",
    type: "Exercise Website",
    typeIcon: "🏋️",
    title: "Frontend Mentor",
    author: "Frontend Mentor",
    description:
      "Real Frontend design challenges to apply your skills. Perfect after learning HTML and CSS.",
    url: "https://www.frontendmentor.io/",
    tags: ["Exercises", "Projects", "Free-Paid"],
    duration: "Ongoing",
    recommended: false,
  },
  {
    id: 19,
    category: "tools" as Category,
    tech: "Git",
    emoji: "🔒",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    type: "YouTube Video",
    typeIcon: "🎥",
    title: "Git & GitHub – For Beginners",
    author: "Traversy Media",
    description:
      "Learn Git and GitHub in one hour. An indispensable tool for any programmer.",
    url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
    tags: ["Essential", "Free", "English"],
    duration: "30 minutes",
    recommended: false,
  },
];

const categories: {
  id: Category;
  label: string;
  emoji: string;
  count: number;
}[] = [
  { id: "all", label: "All", emoji: "📚", count: sources.length },
  {
    id: "html",
    label: "HTML",
    emoji: "🌐",
    count: sources.filter((s) => s.category === "html").length,
  },
  {
    id: "css",
    label: "CSS",
    emoji: "🎨",
    count: sources.filter((s) => s.category === "css").length,
  },
  {
    id: "js",
    label: "JavaScript",
    emoji: "⚡",
    count: sources.filter((s) => s.category === "js").length,
  },
  {
    id: "react",
    label: "React",
    emoji: "⚛️",
    count: sources.filter((s) => s.category === "react").length,
  },
  {
    id: "node",
    label: "Node/DB",
    emoji: "🟢",
    count: sources.filter((s) => s.category === "node").length,
  },
  {
    id: "tools",
    label: "Tools",
    emoji: "🛠️",
    count: sources.filter((s) => s.category === "tools").length,
  },
];

export default function SourcesPage({ setCurrentPage }: SourcesPageProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSources =
    activeCategory === "all"
      ? sources
      : sources.filter((source) => source.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-teal px-4 py-1.5 rounded-full text-sm font-medium">
            Learning Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-5 mb-5">
            Best <span className="gradient-text">Resources</span> for Learning
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Every resource has been carefully selected to be the best of its
            kind. Direct links — just click and learn.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "btn-primary text-white"
                  : "glass-card border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              <span>{category.emoji}</span>
              <span>{category.label}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id ? "bg-white/20" : "bg-white/5"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredSources.map((source) => (
            <div
              key={source.id}
              className={`glass-card rounded-2xl p-5 border ${source.border} ${source.bg} card-hover flex flex-col relative overflow-hidden`}
            >
              {/* Recommended Badge */}
              {source.recommended && (
                <div className="absolute top-3 right-3">
                  <span className="badge-purple px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
                    ⭐ Recommended
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-4 mt-1">
                <div
                  className={`w-10 h-10 rounded-xl ${source.bg} border ${source.border} flex items-center justify-center text-xl flex-shrink-0`}
                >
                  {source.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full border ${source.badge}`}
                    >
                      {source.tech}
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      {source.typeIcon} {source.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2 leading-snug">
                {source.title}
              </h3>
              <p className="text-slate-500 text-xs mb-1">
                By: <span className="text-slate-400">{source.author}</span>
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {source.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {source.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="glass-card border border-white/10 text-slate-400 text-xs px-2 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
                <span className="glass-card border border-white/10 text-slate-500 text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                  ⏱️ {source.duration}
                </span>
              </div>

              {/* CTA Button */}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white text-sm font-semibold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 w-full hover:scale-105 transition-transform"
              >
                <span>🔗</span>
                <span>Open Resource</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Quick Links Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-teal-500/5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-2">
              ⚡ Essential Direct Links
            </h2>
            <p className="text-slate-400 text-sm">
              The three fundamental courses we recommend to start with
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "HTML",
                emoji: "🌐",
                color: "border-orange-500/30 bg-orange-500/10 text-orange-400",
                url: "https://youtu.be/cvNTgKw8VlY?si=HtFGmlTH9kAOV1hb",
                desc: "HTML Course – Abderahman Gamal",
              },
              {
                title: "CSS",
                emoji: "🎨",
                color: "border-blue-500/30 bg-blue-500/10 text-blue-400",
                url: "https://youtu.be/h1mNPEjva8U?si=ya_x1LoUVUQFNm0R",
                desc: "CSS Course – Abderahman Gamal",
              },
              {
                title: "JavaScript",
                emoji: "⚡",
                color: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
                url: "https://www.youtube.com/watch?v=PWuTLTFMtYw&list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE",
                desc: "JS Course – Abderahman Gamal",
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card border rounded-2xl p-5 text-center card-hover block ${link.color}`}
              >
                <div className="text-4xl mb-3">{link.emoji}</div>
                <div
                  className={`font-bold text-lg mb-1 ${link.color.split(" ")[2]}`}
                >
                  {link.title}
                </div>
                <div className="text-slate-400 text-sm mb-3">{link.desc}</div>
                <div
                  className={`text-xs px-3 py-1.5 rounded-lg border inline-flex items-center gap-1 ${link.color}`}
                >
                  🔗 Open on YouTube
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 mb-4">
            Want to know the correct order for these resources?
          </p>
          <button
            onClick={() => setCurrentPage("roadmap")}
            className="btn-primary text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            🗺️ View Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}
