import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection && location.pathname === '/') {
        const rect = aboutSection.getBoundingClientRect();
        setIsScrolled(rect.top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled;

  const navLinkClass = (path) =>
    `transition-all duration-300 px-2 py-1 text-lg ${
      location.pathname === path
        ? 'text-[#8B0000] text-xl font-bold '
        : shouldBeTransparent
        ? 'text-white hover:text-[#FFE4E1]'
        : 'text-gray-700 hover:text-[#8B0000]'
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'bg-transparent py-4' : 'bg-[#fafaf5] shadow-md py-2'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 ${
            shouldBeTransparent ? 'text-white' : 'text-[#8B0000]'
          }`}
          onClick={scrollToTop}
        >
          Bonnaire Myriam
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={navLinkClass('/')} onClick={scrollToTop}>
            Accueil
          </Link>
          <Link to="/projets" className={navLinkClass('/projets')} onClick={scrollToTop}>
            Projets
          </Link>
          <Link to="/contact" className={navLinkClass('/contact')} onClick={scrollToTop}>
            Contact
          </Link>
        </nav>

        {/* Burger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none relative z-50"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-50 transform transition duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
            } ${shouldBeTransparent ? 'bg-white' : 'bg-[#8B0000]'}`}
          ></span>
          <span
            className={`block w-6 h-0.5 my-1 bg-gray-50 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            } ${shouldBeTransparent ? 'bg-white' : 'bg-[#8B0000]'}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-50 transform transition duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
            } ${shouldBeTransparent ? 'bg-white' : 'bg-[#8B0000]'}`}
          ></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav
          className={`md:hidden absolute w-full px-6 py-4 transition-colors duration-300 ${
            shouldBeTransparent ? 'bg-[#1B0000]/90' : 'bg-[#fafaf5] shadow-lg'
          }`}
        >
          <Link
            to="/"
            className={navLinkClass('/')}
            onClick={() => {
              setIsMenuOpen(false);
              scrollToTop();
            }}
          >
            Accueil
          </Link>
          <Link
            to="/projets"
            className={navLinkClass('/projets')}
            onClick={() => {
              setIsMenuOpen(false);
              scrollToTop();
            }}
          >
            Projets
          </Link>
          <Link
            to="/contact"
            className={navLinkClass('/contact')}
            onClick={() => {
              setIsMenuOpen(false);
              scrollToTop();
            }}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
