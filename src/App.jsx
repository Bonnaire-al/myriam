import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projet from './components/Projet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <NavBar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<div className="container mx-auto px-6 py-12"><h1 className="text-3xl font-bold mb-6">Mentions Légales</h1><p>Contenu des mentions légales à venir...</p></div>} />
            <Route path="/politique-confidentialite" element={<div className="container mx-auto px-6 py-12"><h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1><p>Contenu de la politique de confidentialité à venir...</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
