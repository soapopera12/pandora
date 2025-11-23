import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-0 -left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-3xl z-10">
        <h1 className="text-10xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight leading-tight animate-fade-in-down">
          Moshi Moshi...
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          I am Nikhil Gumasthi.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          Software Developer | Machine Learning Engineer | Research Enthusiast
        </p>
        <p className="text-md text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Based in Hyderabad
        </p>
      </div>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;