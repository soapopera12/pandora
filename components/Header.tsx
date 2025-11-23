import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import resumePdf from '../LatexResume.pdf?url';

const Logo: React.FC = () => (
    <a href="#hero" className="text-2xl font-bold tracking-wider text-gray-900 dark:text-gray-100 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-500">
        NG
    </a>
);


const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
        {children}
    </a>
);

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 md:px-10 lg:px-20 py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center space-x-2">
                         <div className="hidden md:flex items-center space-x-2">
                             <NavLink href="#about">About</NavLink>
                             <NavLink href="#experience">Experience</NavLink>
                             <NavLink href="#projects">Projects</NavLink>
                           <a href="#contact" className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 transition-colors duration-300 px-4 py-2 rounded-full text-sm font-semibold">
                             Contact
                           </a>
                           <a
                              href={resumePdf}
                              download="Nikhil_Gumasthi_Resume.pdf"
                              className="text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                            >
                              Resume
                            </a>
                         </div>
                         <ThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;