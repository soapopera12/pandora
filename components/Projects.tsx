import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';

// Custom hook for Intersection Observer
const useOnScreen = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">{children}</h2>
);

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    
    return (
        <div
            ref={ref}
            className={`bg-white dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            } hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-2 group`}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">{item.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
        </div>
    );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/70 -mx-6 md:-mx-10 lg:-mx-20 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <SectionTitle>Research & Projects</SectionTitle>
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {PROJECTS.map((item, index) => (
                <ProjectCard key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;