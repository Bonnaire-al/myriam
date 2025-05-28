import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const currentRefs = imageRefs.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = currentRefs.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('animate-slideUp');
            }, index === 0 ? 1000 : 3000); // 1s pour la première, 3s pour la seconde
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const expertiseAreas = [
    { icon: 'fa-chart-line', title: 'Autonome' },
    { icon: 'fa-users', title: 'Apprend vite' },
    { icon: 'fa-leaf', title: 'Patiente' },
    { icon: 'fa-lightbulb', title: 'Compatissante' },
  ];

  const skills = [
    { name: 'Analyse de données', level: 85 },
    { name: 'Word/Excel/Power point', level: 75 },
    { name: 'Gestion de projet', level: 60 },
    { name: 'Communication', level: 80 },
  ];

  return (
    <>{/* Section Hero */}
<section className="min-h-screen flex items-center relative overflow-hidden w-full p-0 m-0 pt-2 md:pt-8">
  <div className="absolute inset-0 z-0 w-full">
    <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/80 to-transparent z-10"></div>
    <img
      src="/public/images/Finanace-overview-header-round-pngop.png"
      alt="Économiste professionnelle"
      className="w-full h-full object-cover object-center min-h-screen"
    />
  </div>
  <div className="w-full relative z-20 p-0 m-0">
    <div className="max-w-2xl text-white ml-4 mt-0 md:mt-4">
      <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-bold mb-16 md:mb-12 opacity-0 animate-slideInRight delay-0">
        Bienvenue dans mon portefolio
      </h1>
      <p className="text-sm sm:text-base md:text-lg mb-20 md:mb-16 text-[#FFE4E1] opacity-0 animate-fadeIn delay-2000">
        Jeune diplômée d'une licence en gestion de la protection sociale, je suis formée aux aspects réglementaires et aux techniques de gestion administrative des régimes sociaux. J'ai acquis des compétences solides en relation client, en traitement des dossiers et en analyse des dispositifs de protection.
      </p>
      <div className="flex space-x-3 mt-20 md:mt-16 mb-2 md:mb-4 opacity-0 animate-slideInUp delay-4000">
        <Link
          to="/projets"
          className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-4 py-2 text-xs sm:text-sm rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          En savoir plus
        </Link>
        <Link
          to="/contact"
          className="bg-transparent border-2 border-white text-white px-4 py-2 text-xs sm:text-sm rounded-lg hover:bg-white hover:text-[#8B0000] transition-all duration-300"
        >
          Me contacter
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* Section À Propos */}
      <section id="about-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">À Propos</h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Qui suis-je?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Je m'appelle Myriam Bonnaire je suis née à Nevers en bourgogne et j'ai suivis une filière Économique et Sociale. 
              J'ai suivi cette vois car je m'intéresse aux relations entre les individus, le lien entre la société et la politique économique, les organismes sociaux et les institutions territoriales. 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
              Ce qui me motive dans cette filière, c'est la volonté de mieux comprendre les mécanismes qui régissent notre économie et leur impact sur les comportements humains.
              J'ai toujours été curieux des inégalités sociales, des politiques publiques et des dynamiques de marché.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
                    <i className={`fas ${area.icon} text-2xl text-[#8B0000] mr-4`}></i>
                    <span className="font-medium">{area.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Mes compétences</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-[#8B0000]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#8B0000] h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-gray-800">Langues</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#FFE4E1] text-[#8B0000] rounded-full">Français (Natif)</span>
                  <span className="px-4 py-2 bg-[#FFE4E1] text-[#8B0000] rounded-full">Anglais (C1)</span>
                  <span className="px-4 py-2 bg-[#FFE4E1] text-[#8B0000] rounded-full">Espagnol (B2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section id="parcours" className="py-20 bg-[#fafaf5] dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#0e0d0d] dark:text-[#FFE4E1]">Mon Parcours</h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Diplômes */}
            <div className="space-y-8 relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8B0000]"></div>
              <h3 className="text-2xl font-semibold text-[#8B0000] dark:text-[#FFE4E1] mb-6">Mes Diplômes</h3>
              {[{
                title: 'Bac ST2S',
                school: 'Notre-Dame Nevers',
                date: '2019 - 2022'
              }, {
                title: 'BTS ESF',
                school: 'Jean Rostand Nevers',
                date: '2022 - 2024'
              }, {
                title: 'Licence GPS ',
                school: 'Université de Bourges',
                date: '2024 - 2025'
              }].map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-semibold text-[#8B0000] dark:text-[#FFE4E1]">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.school}</p>
                  <p className="text-gray-500 dark:text-gray-400">{item.date}</p>
                </div>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <div 
                  ref={(el) => (imageRefs.current[0] = el)}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg opacity-0 translate-y-10"
                >
                  <img 
                    src="/public/images/OIP.2.webp" 
                    alt="reunion" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div 
                  ref={(el) => (imageRefs.current[1] = el)}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg opacity-0 translate-y-10"
                >
                  <img 
                    src="/public/images/OIP-_1_.webp" 
                    alt="educatrice" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Expériences */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#8B0000] dark:bg-[#FFE4E1]"></div>
              {[
                {
                  step: 1,
                  title: "Benevolat",
                  place: "Resto du coeur",
                  date: "2020 - 2 mois",
                  desc: "Gérer les besoins des adhérents , Distribution de nourritures"
                },
                {
                  step: 2,
                  title: "Agent d'entretien",
                  place: "Hopital de Clamcy",
                  date: "2023 - 2 mois",
                  desc: "Nettoyage des surfaces, Communication avec les patients"
                },
                {
                  step: 3,
                  title: "Stage Assistante Social/Educatrice ",
                  place: "CADA La Charité sur Loire",
                  date: "2023 - 2 mois",
                  desc: "Création d'un atelier pour les jeunes collégiens, Apprentissage du fonctionnement du CADA , Visite des appartements pour les états/sorties des lieux"
                },
                {
                  step: 4,
                  title: "Stage Assistante Social/Animatrice ",
                  place: "Centre Social La Charité sur Loire",
                  date: "2023/2024 - 3 mois",
                  desc: "Gestion d'un groupe d'enfants de 9 à 10 ans, Apprendre les fonctions d'un centre social, Apprentissage des cantines et garderies"
                },
                {
                  step: 5,
                  title: "Stage Direction de l'Action Social de Proximité",
                  place: "Conseil Départemental Bourges",
                  date: "2025 - 4 mois",
                  desc: "Aide à la restructuration des postes, Gestion administrative"
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-12 mb-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-[#8B0000] dark:bg-[#FFE4E1] flex items-center justify-center">
                    <span className="text-white dark:text-gray-900">{item.step}</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-[#8B0000] dark:text-[#FFE4E1]">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.place}</p>
                    <p className="text-gray-500 dark:text-gray-400">{item.date}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
