import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Information from './pages/Information';
import BeStochastic from './pages/BeStochastic';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { title: 'Information', link: '/' },
    { title: 'Be Stochastic', link: '/be-stochastic' }
  ];

  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-5 left-5 text-white z-[60]">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <div 
        className={`fixed top-0 left-0 h-screen w-64 bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in-out transform z-[55]
          ${isOpen 
            ? 'translate-x-0 opacity-100 pointer-events-auto' 
            : '-translate-x-8 opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)'
        }}></div>
        <div className="pt-20 px-6 relative z-10 text-white">
          <span className={`text-xl font-semibold block mb-8 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}>Michael Chen</span>
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li 
                  key={index}
                  className="transform transition-all duration-300"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? `translateY(0)` : 'translateY(-20px)',
                    transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <Link 
                    to={item.link} 
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={toggleSidebar}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/':
        return 'Information';
      case '/be-stochastic':
        return 'Be Stochastic';
      default:
        return '';
    }
  };

  const links = [
    { name: 'California Institute of Technology', url: 'https://www.caltech.edu/' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=XfrUtqEAAAAJ' },
    { name: 'GitHub', url: 'https://github.com/math-ysics' },
    { name: 'Hugging Face', url: 'https://huggingface.co/ai-net' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/Lpspace' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/michaelc0' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 p-5 flex items-center justify-between z-[50] transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-sm' 
        : 'bg-black/50'
    }`}>
      <div className="absolute inset-0" style={{
        background: isScrolled
          ? 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)'
      }}></div>
      <div className="flex items-center relative z-10 ml-16">
        <h1 className="text-xl">{getPageTitle()}</h1>
      </div>
      <div className="flex space-x-6 relative z-10">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

const AppContent = ({ isSidebarOpen, toggleSidebar }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/be-stochastic" element={<BeStochastic />} />
      </Routes>
    </div>
  );
};

// Add global styles at the end of the file
const globalStyles = `
  html.lenis {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  .lenis.lenis-scrolling iframe {
    pointer-events: none;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  /* For Chrome/Safari/Edge */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 4px;
    border: transparent;
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Add style tag to head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router>
      <AppContent isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </Router>
  );
};

export default App;