import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [, setActiveSection] = useState("home");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#fafaf5] md:bg-gray-900 text-gray-900 md:text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bonnaire Myriam</h3>
            <p className="text-gray-600 md:text-gray-400 mb-4">
              Investie et à l'écoute, je m'engage à accompagner ceux qui en ont besoin avec bienveillance et professionnalisme.
              Je reste à votre disposition pour toute question.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    setActiveSection("home");
                    scrollToTop();
                  }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/projets"
                  className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    setActiveSection("projects");
                    scrollToTop();
                  }}
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    setActiveSection("contact");
                    scrollToTop();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
                  onClick={scrollToTop}
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  to="/politique-confidentialite"
                  className="text-gray-600 md:text-gray-400 hover:text-[#8B0000] md:hover:text-white transition-colors duration-300 cursor-pointer"
                  onClick={scrollToTop}
                >
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 md:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 md:text-gray-400 text-sm">
            © {new Date().getFullYear()} Bonnaire. Tous droits réservés.
          </p>
          <p className="text-gray-600 md:text-gray-400 text-sm mt-4 md:mt-0">
            Dernière mise à jour: 30 juin 2025
          </p>
        </div>
      </div>
      {/* Back to top button */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 bg-[#8B0000] text-white p-3 rounded-full shadow-lg hover:bg-[#6B0000] transition-all duration-300 z-50 cursor-pointer"
        onClick={() => {
          setActiveSection("home");
          scrollToTop();
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </Link>
    </footer>
  );
};

export default Footer; 