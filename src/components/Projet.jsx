import React, { useState } from 'react';

const Projet = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Découverte d'une Cuisine Saine et Solidaire",
      description: "Dans le cadre de ma formation, j'ai mis en place une activité culinaire au sein d'un centre social, destinée à encourager de meilleures habitudes alimentaires tout en favorisant l'échange et la convivialité entre les participants",
      longDescription: "Dans le cadre de mon BTS ESF, j'ai organisé un atelier cuisine au centre social où j'étais en stage. L'objectif était de sensibiliser les familles en difficulté à l'alimentation saine, en utilisant une approche ludique et interculturelle à travers la cuisine du monde. Pour cela, j'ai conçu un questionnaire, que j'ai fait circuler auprès des habitants afin de connaître leurs habitudes et leurs attentes. Ensuite, j'ai préparé l'atelier de A à Z : choix d'une recette simple et accessible, préparation des ingrédients, organisation logistique, et création d'outils de communication (affiches, annonces). Le jour de l'atelier, j'ai animé la séance avec les enfants, dans une ambiance conviviale. L'action a été bien accueillie par les familles et a permis de créer du lien tout en •abordant des questions d'équilibre alimentaire.",
      image: "/public/barbecue_bbq_feast_grilling_hands_healthy_salad_summer-1609307.webp",
      tags: ["Organisation d'activités", "Gestion logistique", "Esprit d'analyse"]
    },
    {
      title: "Loisirs et Lien Social",
      description: "Projet mené en stage au CADA visant à favoriser l'intégration de jeunes récemment arrivés, en leur faisant découvrir les activités de loisirs locales comme vecteur de lien social.",
      longDescription: "Lors de ma première année de BTS, j'ai effectué un stage au Cada où j'ai mené un projet axé sur l'accompagnement des jeunes dans leur insertion sociale. L'objectif était de leur présenter les activités de loisirs comme un moyen d'intégration dans une nouvelle ville, puisque ces jeunes venaient d'arriver et ne connaissaient encore personne. J'ai organisé un atelier pour leur faire découvrir les différentes possibilités de loisirs et les accueils de loisirs disponibles dans la ville. Cet atelier a permis de faciliter les échanges entre les jeunes et de les encourager à s'impliquer dans la vie locale.",
      image: "/public/integration-2489607_960_720.webp",
      tags: ["Animation d'atelier", "Gestion de projet", "Communication"]
    },
    {
      title: "Entrepreneuriat Social et Innovation",
      description: "Analyse des facteurs de succès des entreprises sociales et de leur impact sur l'économie locale.",
      longDescription: "Cette recherche approfondie examine les facteurs clés qui contribuent au succès des entreprises sociales. J'ai étudié plusieurs cas d'entreprises innovantes et leur impact sur l'économie locale. L'analyse révèle l'importance de l'équilibre entre viabilité économique et impact social.",
      image: "https://readdy.ai/api/search-image?query=Social%20entrepreneurship%20concept%20with%20diverse%20group%20of%20people%20collaborating%20on%20economic%20solutions%2C%20innovation%20hub%20atmosphere%2C%20digital%20tools%20and%20social%20impact%20metrics%20displayed%2C%20professional%20environment%20with%20warm%20lighting%2C%20showing%20the%20intersection%20of%20business%20and%20social%20change&width=600&height=400&seq=project3&orientation=landscape",
      tags: ["Animation d'atelier", "Gestion de projet", "Modèles Économiques"]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes travaux de recherche et analyses dans le domaine de l'économie sociale.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-[#8B0000]/10 dark:border-[#8B0000]/20">
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-[#8B0000] dark:group-hover:text-[#8B0000]/80 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-[#8B0000]/10 dark:bg-[#8B0000]/20 text-[#8B0000] dark:text-[#8B0000]/80 text-xs rounded-full hover:bg-[#8B0000]/20 dark:hover:bg-[#8B0000]/30 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => openModal(project)}
                  className="text-[#8B0000] dark:text-[#8B0000]/80 font-medium hover:text-[#f3e5e5] dark:hover:text-[#8B0000] transition-colors duration-300 flex items-center bg-[#f0efe8] hover:bg-[#000000] px-4 py-2 rounded-lg"
                >
                  Voir le projet <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                  <button
                    onClick={closeModal}
                    className="text-[#8B0000] hover:text-[#6B0000] bg-[#FFE4E1] hover:bg-[#FFD6D1] p-2 rounded-lg transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#FFE4E1] text-[#8B0000] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projet; 