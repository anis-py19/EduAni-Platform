interface RoadmapPageProps {
  setCurrentPage: (page: string) => void;
}

const steps = [
  {
    id: 1,
    phase: 'Phase One',
    tech: 'HTML',
    emoji: '🌐',
    color: 'text-orange-400',
    bg: 'bg-html',
    border: 'step-html',
    borderFull: 'border-orange-500/30',
    duration: '2–3 weeks',
    level: 'Beginner',
    levelColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    description: 'The foundation of every website. You\'ll learn how to build the structure of web pages using elements and tags.',
    topics: [
      'HTML Page Structure',
      'Basic Elements (div, p, h1-h6)',
      'Forms, Links, and Images',
      'Tables and Lists',
      'HTML5 Semantic Elements',
    ],
    tip: 'Practice daily by building simple pages. Application is the key!',
  },
  {
    id: 2,
    phase: 'Phase Two',
    tech: 'CSS',
    emoji: '🎨',
    color: 'text-blue-400',
    bg: 'bg-css',
    border: 'step-css',
    borderFull: 'border-blue-500/30',
    duration: '3–4 weeks',
    level: 'Beginner',
    levelColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    description: 'Beautifying and designing your pages. CSS makes your website look professional and beautiful.',
    topics: [
      'Selectors & Properties',
      'Box Model (Margin, Padding, Border)',
      'Flexbox Layout',
      'CSS Grid',
      'Responsive Design & Media Queries',
      'Animations & Transitions',
    ],
    tip: 'Copy designs from popular websites and try to rebuild them yourself.',
  },
  {
    id: 3,
    phase: 'Phase Three',
    tech: 'JavaScript',
    emoji: '⚡',
    color: 'text-yellow-400',
    bg: 'bg-js',
    border: 'step-js',
    borderFull: 'border-yellow-500/30',
    duration: '6–8 weeks',
    level: 'Intermediate',
    levelColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    description: 'The heart of web development. JavaScript adds interactivity and life to your pages.',
    topics: [
      'Variables & Data Types',
      'Functions & Objects',
      'DOM Manipulation',
      'Events & Event Listeners',
      'Asynchronous JS (Promises, Async/Await)',
      'Fetch API & JSON',
      'ES6+ Modern Syntax',
    ],
    tip: 'Build small projects: calculator, to-do list, weather app.',
  },
  {
    id: 4,
    phase: 'Phase Four',
    tech: 'React',
    emoji: '⚛️',
    color: 'text-cyan-400',
    bg: 'bg-react',
    border: 'step-react',
    borderFull: 'border-cyan-500/30',
    duration: '4–6 weeks',
    level: 'Intermediate-Advanced',
    levelColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    description: 'The most widely used library for building modern and fast user interfaces.',
    topics: [
      'Components & Props',
      'State & useState Hook',
      'useEffect & Lifecycle',
      'React Router (Page Navigation)',
      'Context API',
      'Custom Hooks',
      'Tailwind CSS with React',
    ],
    tip: 'Build a complete app like a blog platform or simple e-commerce store.',
  },
  {
    id: 5,
    phase: 'Phase Five',
    tech: 'Node.js & Express',
    emoji: '🟢',
    color: 'text-green-400',
    bg: 'bg-node',
    border: 'step-node',
    borderFull: 'border-green-500/30',
    duration: '4–5 weeks',
    level: 'Advanced',
    levelColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    description: 'The backend side. You\'ll build APIs and servers that handle data.',
    topics: [
      'Node.js Fundamentals',
      'Express.js Framework',
      'REST API Design',
      'Middleware',
      'Authentication (JWT)',
      'File Uploads & Handling',
      'Environment Variables',
    ],
    tip: 'Build a complete REST API for your React app.',
  },
  {
    id: 6,
    phase: 'Phase Six',
    tech: 'Databases',
    emoji: '🍃',
    color: 'text-purple-400',
    bg: 'bg-db',
    border: 'step-db',
    borderFull: 'border-purple-500/30',
    duration: '3–4 weeks',
    level: 'Advanced',
    levelColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    description: 'Storing and managing data is the backbone of any real application. Learn MongoDB and SQL.',
    topics: [
      'MongoDB & Mongoose',
      'CRUD Operations',
      'SQL Basics (PostgreSQL/MySQL)',
      'Database Design',
      'Relations & Joins',
      'Indexing & Performance',
      'MongoDB Atlas (Cloud)',
    ],
    tip: 'Build a complete Full Stack app combining React + Node + MongoDB.',
  },
];

const bonusTopics = [
  { icon: '🔒', title: 'Git & GitHub', desc: 'Code management and version control' },
  { icon: '🐳', title: 'Docker', desc: 'Application containers' },
  { icon: '☁️', title: 'Deployment', desc: 'Deploy your projects online' },
  { icon: '🧪', title: 'Testing', desc: 'Code testing' },
  { icon: '🔐', title: 'Security', desc: 'Application security' },
  { icon: '📊', title: 'TypeScript', desc: 'JavaScript with types' },
];

export default function RoadmapPage({ setCurrentPage }: RoadmapPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-purple px-4 py-1.5 rounded-full text-sm font-medium">
            Learning Roadmap
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-5 mb-5">
            Complete <span className="gradient-text">Full Stack</span> Path
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            6 phases that take you from zero to building complete professional web applications.
          </p>

          {/* Progress Bar Visual */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-2">
                <div 
                  className={`w-8 h-8 rounded-full ${step.bg} border-2 ${step.borderFull} flex items-center justify-center text-sm font-bold ${step.color}`}
                >
                  {step.id}
                </div>
                {step.id < steps.length && (
                  <div className="w-8 h-0.5 bg-white/10 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 timeline-line hidden md:block opacity-20 rounded-full" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Step Number Circle */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 z-10">
                  <div 
                    className={`w-12 h-12 rounded-full ${step.bg} border-2 ${step.borderFull} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200`}
                  >
                    {step.emoji}
                  </div>
                </div>

                {/* Card */}
                <div 
                  className={`flex-1 glass-card rounded-2xl p-6 border ${step.borderFull} ${step.bg} card-hover`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="md:hidden text-2xl">{step.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-slate-500 text-xs font-medium">
                            {step.phase}
                          </span>
                          <span 
                            className={`px-2 py-0.5 rounded-full text-xs font-medium border ${step.levelColor}`}
                          >
                            {step.level}
                          </span>
                        </div>
                        <h3 className={`text-xl font-black ${step.color}`}>
                          {step.tech}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span>⏱️</span>
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-4">
                    <h4 className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">
                      Topics Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {step.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="glass-card border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-code"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tip */}
                  <div className="flex items-start gap-2 bg-white/3 rounded-xl p-3 border border-white/5">
                    <span className="text-lg flex-shrink-0">💡</span>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      <strong className="text-slate-300">Pro Tip:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Topics */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="badge-pink px-4 py-1.5 rounded-full text-sm font-medium">
              Additional Topics
            </span>
            <h2 className="text-2xl font-black text-white mt-4">
              After Completing the Main Path
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              These skills will set you apart from other developers
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {bonusTopics.map((topic, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-4 border border-white/7 card-hover text-center"
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <div className="text-white font-semibold text-sm">{topic.title}</div>
                <div className="text-slate-500 text-xs mt-1">{topic.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center glass-card rounded-3xl p-10 border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-transparent">
          <div className="text-5xl mb-4">📖</div>
          <h2 className="text-2xl font-black text-white mb-3">Ready to Start?</h2>
          <p className="text-slate-400 mb-6">
            Go to the resources page to find the best videos and websites for each phase.
          </p>
          <button
            onClick={() => setCurrentPage('sources')}
            className="btn-primary text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            📚 Browse Resources
          </button>
        </div>
      </div>
    </div>
  );
}