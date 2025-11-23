import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Quick Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">FAQs</a></li>
                    <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Medium</a></li>
                    <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Project Inquiry</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Nikhil Gumasthi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">A detail-oriented developer passionate about crafting effective solutions.</p>
            </div>
            <div className="flex justify-center md:justify-end items-center space-x-5">
                <a href={CONTACT_DETAILS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><GithubIcon /></a>
                <a href={CONTACT_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"><LinkedinIcon /></a>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><MailIcon /></a>
            </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
            <p>&copy; {new Date().getFullYear()} Nikhil Gumasthi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;