import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Me Contacter</h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet ou une opportunité à discuter? N'hésitez pas à me contacter.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Envoyez-moi un message</h3>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-[#8B0000] focus:ring focus:ring-[#8B0000] focus:ring-opacity-50 transition-all duration-300 outline-none dark:bg-gray-700 text-white dark:text-white placeholder:text-white"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-[#8B0000] focus:ring focus:ring-[#8B0000] focus:ring-opacity-50 transition-all duration-300 outline-none dark:bg-gray-700 text-white dark:text-white placeholder:text-white"
                  placeholder="Votre email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-[#8B0000] focus:ring focus:ring-[#8B0000] focus:ring-opacity-50 transition-all duration-300 outline-none dark:bg-gray-700 text-white dark:text-white placeholder:text-white"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-[#8B0000] focus:ring focus:ring-[#8B0000] focus:ring-opacity-50 transition-all duration-300 outline-none dark:bg-gray-700 text-white dark:text-white placeholder:text-white"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#8B0000]/10 dark:bg-[#8B0000]/20 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#8B0000] dark:text-[#8B0000]/80 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:bonnairemyriam@gmail.com" className="text-[#8B0000] dark:text-[#8B0000]/80 hover:text-[#6B0000] dark:hover:text-[#8B0000] transition-colors duration-300">
                    bonnairemyriam@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#8B0000]/10 dark:bg-[#8B0000]/20 p-3 rounded-full mr-4">
                  <FaPhone className="text-[#8B0000] dark:text-[#8B0000]/80 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Téléphone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+33 6 32 41 24 94</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#8B0000]/10 dark:bg-[#8B0000]/20 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-[#8B0000] dark:text-[#8B0000]/80 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Localisation</h4>
                  <p className="text-gray-600 dark:text-gray-300">La Charité, France</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Réseaux sociaux</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#8B0000]/10 dark:bg-[#8B0000]/20 p-3 rounded-full text-[#8B0000] dark:text-[#8B0000]/80 hover:bg-[#8B0000]/20 dark:hover:bg-[#8B0000]/30 transition-colors duration-300">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="bg-[#8B0000]/10 dark:bg-[#8B0000]/20 p-3 rounded-full text-[#8B0000] dark:text-[#8B0000]/80 hover:bg-[#8B0000]/20 dark:hover:bg-[#8B0000]/30 transition-colors duration-300">
                  <FaGithub className="text-xl" />
                </a>
                <a href="#" className="bg-[#8B0000]/10 dark:bg-[#8B0000]/20 p-3 rounded-full text-[#8B0000] dark:text-[#8B0000]/80 hover:bg-[#8B0000]/20 dark:hover:bg-[#8B0000]/30 transition-colors duration-300">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 