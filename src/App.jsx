import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { title: 'About', link: '#' },
    { title: 'Be Stochastic', link: '#' }
  ];

  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
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
              <a href={item.link} className="hover:text-gray-300 transition-colors duration-200">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-white">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="pt-16 flex flex-col h-screen">
        <div className="flex h-1/2 border-b border-white">
          <div className="w-2/5 border-r border-white p-4">Top Left</div>
          <div className="w-3/5 p-4">Top Right</div>
        </div>
        <div className="flex h-1/2">
          <div className="w-3/5 border-r border-white p-4">Bottom Left</div>
          <div className="w-2/5 p-4">Bottom Right</div>
        </div>
      </div>
    </div>
  );
};

export default App;