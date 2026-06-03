interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const navigationLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "roadmap", label: "Roadmap" },
    { id: "sources", label: "Resources" },
  ];

  const learningPath = [
    "HTML – Basics",
    "CSS – Styling",
    "JavaScript – Programming",
    "React – Interfaces",
    "Node.js – Backend",
    "Databases",
  ];

  return (
    <footer className="bg-[#0a0a14] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center text-white font-bold text-lg">
                E
              </div>
              <span className="text-xl font-bold gradient-text">EduAnis</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A comprehensive learning platform dedicated to teaching
              programming and web development from zero to professional level.
            </p>
            <div className="flex items-center gap-3">
              <span className="badge-purple px-3 py-1 rounded-full text-xs font-medium">
                100% Free
              </span>
              <span className="badge-teal px-3 py-1 rounded-full text-xs font-medium">
                Arabic Content
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-slate-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Path */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Learning Path
            </h4>
            <ul className="space-y-3">
              {learningPath.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage("roadmap")}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 <span className="text-purple-400 font-medium">EduAnis</span>{" "}
            — All rights reserved
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Made with</span>
            <span className="text-red-400">♥</span>
            <span>for Arab developers community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
