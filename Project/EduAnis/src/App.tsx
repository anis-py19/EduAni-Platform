import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoadmapPage from './pages/RoadmapPage';
import SourcesPage from './pages/SourcesPage';

type Page = 'home' | 'about' | 'roadmap' | 'sources';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleSetPage = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={handleSetPage} />;
      case 'about':
        return <AboutPage setCurrentPage={handleSetPage} />;
      case 'roadmap':
        return <RoadmapPage setCurrentPage={handleSetPage} />;
      case 'sources':
        return <SourcesPage setCurrentPage={handleSetPage} />;
      default:
        return <HomePage setCurrentPage={handleSetPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <Navbar currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={handleSetPage} />
    </div>
  );
}
