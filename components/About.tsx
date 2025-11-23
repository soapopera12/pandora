import React from 'react';
// Importing with '?url' tells Vite to treat this as a static asset URL
// rather than trying to parse the binary content as JavaScript code.
import profileImg from '../HPS_8698.JPG?url';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">{children}</h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2">
                <img 
                  src={profileImg}
                  alt="Nikhil Gumasthi giving a presentation"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover transform md:rotate-[-3deg] transition-transform duration-500 hover:rotate-0 hover:scale-105"
                />
            </div>
            <div className="md:col-span-3">
                 <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I am a passionate Machine Learning Engineer and Software Developer with a strong focus on building scalable ML solutions and real-world applications. With a background in deep learning and predictive analytics, I thrive on solving complex problems and turning innovative ideas into tangible results. My journey has taken me from developing robust backend systems to pioneering research in graph neural networks.
                </p>
            </div>
        </div>
    </section>
  );
};

export default About;