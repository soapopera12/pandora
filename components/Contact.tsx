import React, { useState } from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">{children}</h2>
);

const Contact: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //handle form submission here 
        // console.log({ fullName, email, message });
        setStatus('Thank you for your message!');
        setFullName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-gray-100 dark:bg-gray-800 -mx-6 md:-mx-10 lg:-mx-20 px-6 md:px-10 lg:px-20">
            <div className="container mx-auto max-w-2xl">
                <SectionTitle>Get In Touch</SectionTitle>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                    Have a question or want to work together? Leave your details and I'll get back to you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-semibold rounded-full text-white bg-gray-900 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </div>
                    {status && <p className="text-center text-green-600 dark:text-green-400 mt-4">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;