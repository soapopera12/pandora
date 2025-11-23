import React from 'react';
import { EXPERIENCES } from '../constants';
import { ExperienceItem } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">{children}</h2>
);

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group">
        <div className="absolute top-5 left-0 w-px h-full bg-gray-200 dark:bg-gray-700 group-last:h-[calc(100%-2.5rem)]"></div>
        <div className="absolute top-5 left-[-0.3rem] w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-500 transition-colors"></div>
        
        <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.role}</h3>
                <time className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{item.period}</time>
            </div>
            <p className="text-md text-blue-600 dark:text-blue-400 font-medium">{item.company} &middot; <span className="text-gray-500 dark:text-gray-400">{item.location}</span></p>
        </div>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="max-w-3xl mx-auto">
        {EXPERIENCES.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;