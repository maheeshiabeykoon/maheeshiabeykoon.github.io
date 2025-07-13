import React, { useState } from 'react';

const Header = ({ profile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (!profile) return null;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-sm text-gray-600">{profile.title}</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection('publications')}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection('teaching')}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Teaching
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection('news')}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection('publications')}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Publications
              </button>
              <button
                onClick={() => scrollToSection('teaching')}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Teaching
              </button>
              <button
                onClick={() => scrollToSection('awards')}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Awards
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                News
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;