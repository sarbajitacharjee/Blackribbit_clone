import React from 'react';

const projects = [
  {
    image: 'https://blackribbit.com/wp-content/uploads/2024/05/full-width-banner-portfolio-thumb_MarentetteArchitects-1.jpg.webp',
    client: 'Marette Architects',
    title: 'A boutique firm turned into beacon of progress',
    link: '#',
  },
  {
    image: 'https://blackribbit.com/wp-content/uploads/2024/05/full-width-banner-portfolio-thumb_StayWellTravels-2.jpg.webp',
    client: 'Stay Well Travels',
    title: 'A uniquely tailored Belizean adventure',
    link: '#',
  },
  {
    image: 'https://blackribbit.com/wp-content/uploads/2024/05/full-width-banner-portfolio-thumb_EiffelGroup-1.jpg.webp',
    client: 'Eiffel group',
    title: 'An Erp integrator with warmth and understanding ',
    link: '#',
  },
  {
    image: 'https://blackribbit.com/wp-content/uploads/2024/05/full-width-banner-portfolio-thumb_BareBeautySpatique-2.jpg.webp',
    client: 'Bare Beauty Boutique',
    title: 'Holistic, transcendent wellness',
    link: '#',
  },
  {
    image: 'https://blackribbit.com/wp-content/uploads/2024/05/full-width-banner-portfolio-thumb_BASE-1.jpg.webp',
    client: 'BASE',
    title: 'A Shooting range became an academy for personal safety',
    link: '#',
  },
  {
    image: 'https://blackribbit.com/wp-content/uploads/2024/05/full-width-banner-portfolio-thumb_ReclaimedBeing-1.jpg.webp',
    client: 'Reclaimed being',
    title: 'UNCOVERING the real meaning of self care',
    link: '#',
  },
  {
    image: 'https://blackribbit.com/wp-content/uploads/2024/05/full-width-banner-portfolio-thumb_DollsKill-1.jpg.webp',
    client: 'Dolls Kill',
    title: 'A new Party girl persona for an iconic fashion brand',
    link: '#',
  },
];

const OurWork = () => {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <h2 className="text-5xl font-semibold mb-7">Our Work</h2>
        <p className="text-md max-w-3xl mx-auto mb-6">
          Together we will define your culture brand to attract and retain the right customers and talent for your company. Check out some of our transformational work below.
        </p>
      </div>

      {/* Project Cards with gap */}
      <div className="flex flex-col space-y-8 px-4 md:px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative h-[250px] md:h-[380px] w-full ${project.image ? '' : 'bg-gray-800 flex items-center justify-center text-gray-400 text-center'}`}
            style={project.image ? {
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } : {}}
          >
            {project.image ? (
              <div className="absolute cursor-pointer inset-0 bg-black/20 flex items-center md:px-40 px-8">
                <div>
                  <p className="text-md mb-3 uppercase">{project.client}</p>
                  <h3 className="text-2xl mb-7 font-semibold max-w-sm">{project.title}</h3>
                  <a
                    href={project.link}
                    className="inline-block mt-2 text-sm underline text-white hover:text-gray-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ) : (
              <div className="px-4">
                <p>{project.client}</p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
