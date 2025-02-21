import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Information from './pages/Information';
import BeStochastic from './pages/BeStochastic';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { title: 'Information', link: '/' },
    { title: 'Be Stochastic', link: '/be-stochastic' }
  ];

  return (
    <div className={`fixed top-0 left-0 h-48 w-64 bg-black text-white p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between mb-8">
        <span className="text-xl font-semibold">Michael Chen</span>
        <button onClick={toggleSidebar} className="text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
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
  );
};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
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

  return (
    <header className="fixed top-0 left-0 right-0 bg-black p-5 flex items-center">
      <button onClick={toggleSidebar} className="text-white">
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="ml-4 text-xl">{getPageTitle()}</h1>
    </header>
  );
};

const AppContent = ({ isSidebarOpen, toggleSidebar }) => {
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

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <AppContent isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </Router>
  );
};

export default App;